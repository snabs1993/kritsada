"""Build tbim_example.html from template.html, src/*.js, glyphs/*.js and
../data/tbim_symbols.json.

The page embeds every catalog record (trimmed to the fields the page shows)
and every glyph, so it always matches the catalog.

Usage: python3 build_example.py
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CATALOG = HERE.parent / "data" / "tbim_symbols.json"
TEMPLATE = HERE / "template.html"
OUT = HERE / "tbim_example.html"
GLYPH_FILES = ["g1_elec.js", "g2_fire.js", "g3_plumb_hvac.js", "g4_arch_str.js", "g5_general_civil.js", "g6_sg.js"]
SRC_FILES = {"__TBIM_ENGINE__": "engine.js", "__TBIM_SHEETS__": "sheets.js", "__TBIM_TOOLS__": "tools.js"}
CLASH_CODES = ["F", "C", "W"]


def slim_sources(sources, limit=3):
    return [
        {k: s.get(k) for k in ("url", "title", "evidence") if s.get(k)}
        for s in (sources or [])[:limit]
    ]


def slim_standards(standards):
    return [
        {k: s.get(k) for k in ("code", "title", "edition") if s.get(k)}
        for s in (standards or [])
    ]


def slim(rec):
    geom = rec.get("geometry") or {}
    return {
        "id": rec["id"],
        "discipline": rec["discipline"],
        "category": rec["category"],
        "name": rec["name"],
        "abbreviations": rec.get("abbreviations", []),
        "description": rec["description"],
        "status": rec["status"],
        "region_profiles": [
            {
                "region": p["region"],
                "status": p.get("status"),
                "geometry_notes": p.get("geometry_notes"),
                "standards": slim_standards(p.get("standards")),
                "sources": slim_sources(p.get("sources"), 2),
            }
            for p in rec.get("region_profiles", [])
        ],
        "geometry": {
            k: geom.get(k)
            for k in ("redraw_description", "nominal_size_mm", "size_basis", "svg_basis")
            if geom.get(k) is not None
        },
        "notation_grammar": [
            {k: g.get(k) for k in ("name", "regex", "examples", "status") if g.get(k) is not None}
            for g in rec.get("notation_grammar", [])
        ],
        "ifc_mapping": {
            k: v for k, v in (rec.get("ifc_mapping") or {}).items()
            if k in ("entity", "predefined_type", "object_type", "host_relation", "host_ifc_classes")
        },
        "sources": slim_sources(rec.get("sources")),
    }


def main():
    cat = json.loads(CATALOG.read_text(encoding="utf-8"))
    vocab = cat["vocabularies"]
    clashes = [
        {k: e.get(k) for k in ("id", "code", "discipline", "meaning", "status")}
        for e in vocab["tag_prefixes"]["entries"]
        if e.get("code") in CLASH_CODES
    ]
    rebar = [
        {k: e.get(k) for k in ("code", "meaning", "status", "standards", "attributes")}
        for e in vocab["rebar_designations"]["entries"]
        if e.get("code") in ("DB", "RB") and e.get("region", "TH") == "TH"
    ]
    payload = {
        "catalog": {
            "catalog_id": cat.get("catalog_id"),
            "catalog_version": cat.get("catalog_version"),
        },
        "status_definitions": cat["status_definitions"],
        "symbols": {r["id"]: slim(r) for r in cat["symbols"]},
        "clashes": clashes,
        "rebar": rebar,
    }
    data = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")

    glyphs = []
    for name in GLYPH_FILES:
        p = HERE / "glyphs" / name
        if p.exists():
            glyphs.append(p.read_text(encoding="utf-8"))
        else:
            print(f"warning: missing glyph file {name}")
    html = TEMPLATE.read_text(encoding="utf-8")
    html = html.replace("__TBIM_DATA__", data)
    html = html.replace("__TBIM_GLYPHS__", "\n".join(glyphs).replace("</script", "<\\/script"))
    for key, name in SRC_FILES.items():
        html = html.replace(key, (HERE / "src" / name).read_text(encoding="utf-8"))
    OUT.write_text(html, encoding="utf-8")

    # Report glyph coverage so a missing drawing is noticed at build time.
    import re
    glyph_ids = set()
    for g in glyphs:
        glyph_ids.update(re.findall(r'G\["([^"]+)"\]\s*=', g))
    missing = [r["id"] for r in cat["symbols"] if r["id"] not in glyph_ids]
    print(f"wrote {OUT.name}: {len(cat['symbols'])} symbols, {len(glyph_ids)} glyphs, "
          f"{len(missing)} without glyph, {len(html) // 1024} KB")
    if missing:
        print("  no glyph:", ", ".join(missing))


if __name__ == "__main__":
    main()
