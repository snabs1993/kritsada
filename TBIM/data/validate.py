#!/usr/bin/env python3
"""Validate tbim_symbols.json against tbim_symbol.schema.json and regenerate tbim_symbols.csv.

Usage:  python3 validate.py            (validate + write CSV)
        python3 validate.py --no-csv   (validate only)

Checks:
  * JSON Schema (draft 2020-12) via `jsonschema` (installed with pip if missing; falls back to basic checks)
  * unique symbol ids; id namespace/discipline agree with the `discipline` field
  * every TH.* record has a TH region profile; every record/profile/vocab entry has a source URL
    or source_note "general practice (unverified)"
  * related_ids resolve; notation-grammar regexes compile and every example fully matches;
    text-field formats compile
  * every source URL appears verbatim in the research notes (when the notes folder is present)
  * vocabulary entry ids unique; collides_with references resolve
Exit code 0 = pass, 1 = errors.
"""
import csv
import json
import re
import subprocess
import sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
CATALOG = HERE / "tbim_symbols.json"
SCHEMA = HERE / "tbim_symbol.schema.json"
CSV_OUT = HERE / "tbim_symbols.csv"
NOTES_DIR = HERE.parent / "research_notes" / "สัญลักษณ์งานเขียนแบบสำหรับ TBIM"

GENERAL_UNVERIFIED = "general practice (unverified)"
DISCIPLINES = {"ARCH", "STR", "ELEC", "ELV", "FA", "PLB", "SAN", "FP", "HVAC", "GAS", "CIVIL", "SURVEY", "GENERAL"}
STATUSES = {"standard", "agency", "observed_practice", "unverified"}
CSV_COLUMNS = ["id", "discipline", "category", "name_th", "name_en", "abbreviation", "status", "standards", "ifc_entity", "geometry_summary_th"]


def load_jsonschema():
    try:
        import jsonschema  # noqa: F401
        return jsonschema
    except ImportError:
        print("jsonschema not installed; trying: pip install jsonschema", file=sys.stderr)
        try:
            subprocess.run([sys.executable, "-m", "pip", "install", "--quiet", "jsonschema"], check=True)
            import jsonschema  # noqa: F401
            return jsonschema
        except Exception as exc:  # pragma: no cover
            print(f"could not install jsonschema ({exc}); running basic checks only", file=sys.stderr)
            return None


def schema_errors(js, schema, catalog):
    validator_cls = js.validators.validator_for(schema)
    validator_cls.check_schema(schema)
    validator = validator_cls(schema, format_checker=js.FormatChecker())
    out = []
    for err in sorted(validator.iter_errors(catalog), key=lambda e: list(e.absolute_path)):
        path = "/".join(str(p) for p in err.absolute_path)
        out.append(f"schema: /{path}: {err.message[:300]}")
    return out


def basic_structure_errors(catalog):
    """Minimal checks used only when jsonschema is unavailable."""
    errs = []
    for key in ("symbols", "vocabularies", "status_definitions", "licence"):
        if key not in catalog:
            errs.append(f"basic: missing top-level '{key}'")
    for r in catalog.get("symbols", []):
        for f in ("id", "discipline", "category", "name", "description", "status", "geometry", "ifc_mapping", "standards", "sources", "licence_note", "region_profiles"):
            if f not in r:
                errs.append(f"basic: {r.get('id', '?')}: missing '{f}'")
        if r.get("status") not in STATUSES:
            errs.append(f"basic: {r.get('id')}: bad status {r.get('status')!r}")
        if r.get("discipline") not in DISCIPLINES:
            errs.append(f"basic: {r.get('id')}: bad discipline {r.get('discipline')!r}")
        for lang in ("th", "en"):
            if not r.get("name", {}).get(lang):
                errs.append(f"basic: {r.get('id')}: name.{lang} empty")
            if not r.get("geometry", {}).get("redraw_description", {}).get(lang):
                errs.append(f"basic: {r.get('id')}: geometry.redraw_description.{lang} empty")
    return errs


def _scan_url(text, start):
    depth, i = 0, start
    while i < len(text):
        c = text[i]
        if c.isspace() or c in "]<>\"`|":
            break
        if c == "(":
            depth += 1
        elif c == ")":
            if depth == 0:
                break
            depth -= 1
        i += 1
    return text[start:i].rstrip(".,;:")


def note_urls():
    if not NOTES_DIR.is_dir():
        return None
    urls = set()
    for p in NOTES_DIR.glob("*.md"):
        t = p.read_text(encoding="utf-8")
        for m in re.finditer(r"https?://", t):
            urls.add(_scan_url(t, m.start()))
    return urls


def iter_sources(obj):
    """Yield every source_ref-like dict (has 'url' and 'evidence') anywhere in obj."""
    if isinstance(obj, dict):
        if "url" in obj and "evidence" in obj:
            yield obj
        for v in obj.values():
            yield from iter_sources(v)
    elif isinstance(obj, list):
        for v in obj:
            yield from iter_sources(v)


def has_source(d):
    return bool(d.get("sources")) or d.get("source_note") == GENERAL_UNVERIFIED


def semantic_errors(catalog):
    errs = []
    symbols = catalog["symbols"]
    ids = [r["id"] for r in symbols]
    for k, n in Counter(ids).items():
        if n > 1:
            errs.append(f"duplicate id {k} ({n}x)")
    idset = set(ids)
    for r in symbols:
        rid = r["id"]
        parts = rid.split(".")
        if len(parts) != 3 or parts[0] not in ("TH", "INTL"):
            errs.append(f"{rid}: id must be REGION.DISCIPLINE.NAME")
        elif parts[1] != r["discipline"]:
            errs.append(f"{rid}: id discipline {parts[1]} != discipline field {r['discipline']}")
        if rid.startswith("TH.") and not any(p["region"] == "TH" for p in r["region_profiles"]):
            errs.append(f"{rid}: TH record without a TH region profile")
        if not has_source(r):
            errs.append(f"{rid}: no source URL and no '{GENERAL_UNVERIFIED}' note")
        for p in r["region_profiles"]:
            if not has_source(p):
                errs.append(f"{rid}: region profile {p['region']} has no source or note")
        for rel in r.get("related_ids", []):
            if rel not in idset:
                errs.append(f"{rid}: related id {rel} not found")
        for g in r["notation_grammar"]:
            try:
                rx = re.compile(g["regex"])
            except re.error as exc:
                errs.append(f"{rid}: grammar {g['name']}: bad regex ({exc})")
                continue
            for ex in g["examples"]:
                if not rx.fullmatch(ex):
                    errs.append(f"{rid}: grammar {g['name']}: example {ex!r} does not match")
        for tf in r["text_fields"]:
            if "format" in tf:
                try:
                    re.compile(tf["format"])
                except re.error as exc:
                    errs.append(f"{rid}: text field {tf['name']}: bad format regex ({exc})")
            if tf.get("default") and tf.get("format") and not re.fullmatch(tf["format"], tf["default"]):
                errs.append(f"{rid}: text field {tf['name']}: default does not match format")
        if r["ifc_mapping"]["entity"] == "IfcAnnotation" and r["ifc_mapping"]["object_type"] != rid:
            errs.append(f"{rid}: IfcAnnotation ObjectType should equal the symbol id")
    for vname, voc in catalog["vocabularies"].items():
        vids = [e.get("id") for e in voc["entries"] if e.get("id")]
        for k, n in Counter(vids).items():
            if n > 1:
                errs.append(f"vocab {vname}: duplicate entry id {k}")
        vidset = set(vids)
        for e in voc["entries"]:
            if not has_source(e):
                errs.append(f"vocab {vname}: {e['code']} has no source or note")
            for c in e.get("collides_with", []):
                if c not in vidset:
                    errs.append(f"vocab {vname}: {e.get('id')} collides_with unknown {c}")
            for u in e.get("used_by", []):
                if u not in idset:
                    errs.append(f"vocab {vname}: {e.get('id')} used_by unknown {u}")
    urls = note_urls()
    if urls is None:
        print(f"note: research notes not found at {NOTES_DIR}; skipping URL provenance check", file=sys.stderr)
    else:
        bad = sorted({s["url"] for s in iter_sources(catalog) if s["url"] not in urls})
        for u in bad:
            errs.append(f"source URL not found in research notes: {u}")
    return errs


def write_csv(catalog):
    with CSV_OUT.open("w", encoding="utf-8-sig", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(CSV_COLUMNS)
        for r in catalog["symbols"]:
            w.writerow([
                r["id"], r["discipline"], r["category"], r["name"]["th"], r["name"]["en"],
                "; ".join(r["abbreviations"]), r["status"],
                "; ".join(dict.fromkeys(s["code"] for s in r["standards"])),
                r["ifc_mapping"]["entity"],
                r["geometry"]["redraw_description"]["th"],
            ])


def main(argv):
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
    js = load_jsonschema()
    errors = schema_errors(js, schema, catalog) if js else basic_structure_errors(catalog)
    errors += semantic_errors(catalog)

    syms = catalog["symbols"]
    print(f"symbols: {len(syms)}")
    print("by discipline: " + ", ".join(f"{k} {v}" for k, v in sorted(Counter(r['discipline'] for r in syms).items())))
    print("by status:     " + ", ".join(f"{k} {v}" for k, v in sorted(Counter(r['status'] for r in syms).items())))
    print("by region ns:  " + ", ".join(f"{k} {v}" for k, v in sorted(Counter(r['id'].split('.')[0] for r in syms).items())))
    print(f"with svg_path: {sum(1 for r in syms if r['geometry']['svg_path'])}")
    print(f"vocabularies:  {len(catalog['vocabularies'])} ({sum(len(v['entries']) for v in catalog['vocabularies'].values())} entries)")
    print(f"validator:     {'jsonschema ' + __import__('importlib.metadata').metadata.version('jsonschema') if js else 'basic checks'}")

    if "--no-csv" not in argv:
        write_csv(catalog)
        print(f"wrote {CSV_OUT.name} ({len(syms)} rows, UTF-8 with BOM)")

    if errors:
        print(f"\nFAILED: {len(errors)} error(s)")
        for e in errors[:200]:
            print("  - " + e)
        return 1
    print("\nOK: catalog is valid")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
