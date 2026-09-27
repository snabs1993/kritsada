"""Build tbim_example.html from template.html + ../data/tbim_symbols.json.

The example page embeds only the records it draws, trimmed to the fields the
page shows, so the page stays small and always matches the catalog.

Usage: python3 build_example.py
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CATALOG = HERE.parent / "data" / "tbim_symbols.json"
TEMPLATE = HERE / "template.html"
OUT = HERE / "tbim_example.html"

USED_IDS = [
    # Architectural sheet A1-01
    "TH.GENERAL.GRID_BUBBLE", "TH.GENERAL.GRID_LINE",
    "TH.GENERAL.DIMENSION_CENTRE_CENTRE",
    "TH.ARCH.SECTION_MARK", "TH.ARCH.ELEVATION_MARK",
    "TH.ARCH.ROOM_TAG", "TH.ARCH.LEVEL_MARK",
    "TH.ARCH.DOOR_TAG", "TH.ARCH.WINDOW_TAG",
    "TH.ARCH.DOOR_HINGED", "TH.ARCH.WINDOW_SLIDING", "TH.ARCH.WINDOW_AWNING",
    "TH.ARCH.HATCH_WALL_BRICK_FULL", "TH.ARCH.HATCH_WALL_BRICK_HALF",
    "TH.GENERAL.NORTH_ARROW", "TH.GENERAL.DRAWING_TITLE",
    "TH.GENERAL.TITLE_BLOCK", "TH.GENERAL.SHEET_NUMBER",
    "TH.GENERAL.NOTE_DO_NOT_SCALE",
    # Electrical / fire alarm / sanitary overlays
    "TH.ELEC.RECEPTACLE_DUPLEX", "TH.ELEC.SWITCH_1WAY",
    "TH.ELEC.LUMINAIRE_DOWNLIGHT", "TH.ELEC.PANEL_DB",
    "TH.FA.SMOKE_DETECTOR", "TH.SAN.FLOOR_DRAIN", "TH.SAN.CLEANOUT",
    # Structural beam section
    "TH.STR.BEAM_TAG", "TH.STR.REBAR_CALLOUT", "TH.STR.STIRRUP_CALLOUT",
    "TH.STR.REBAR_GRADE_NOTE", "TH.STR.CONCRETE_COVER_NOTE",
]

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
            for k in ("redraw_description", "nominal_size_mm", "size_basis",
                      "svg_path", "svg_basis", "insertion_point")
            if geom.get(k) is not None
        },
        "text_fields": rec.get("text_fields", []),
        "notation_grammar": rec.get("notation_grammar", []),
        "ifc_mapping": rec.get("ifc_mapping"),
        "standards": slim_standards(rec.get("standards")),
        "sources": slim_sources(rec.get("sources")),
    }


def main():
    cat = json.loads(CATALOG.read_text(encoding="utf-8"))
    by_id = {r["id"]: r for r in cat["symbols"]}
    missing = [i for i in USED_IDS if i not in by_id]
    if missing:
        raise SystemExit(f"missing ids in catalog: {missing}")

    vocab = cat["vocabularies"]
    clashes = [
        {k: e.get(k) for k in ("id", "code", "discipline", "meaning", "status", "used_by")}
        for e in vocab["tag_prefixes"]["entries"]
        if e.get("code") in CLASH_CODES
    ]
    rebar = [
        {k: e.get(k) for k in ("code", "meaning", "status", "standards", "attributes")}
        for e in vocab["rebar_designations"]["entries"]
        if e.get("code") in ("DB", "RB")
    ]

    payload = {
        "catalog": {
            "catalog_id": cat.get("catalog_id"),
            "catalog_version": cat.get("catalog_version"),
            "total_symbols": len(cat["symbols"]),
        },
        "status_definitions": cat["status_definitions"],
        "symbols": {i: slim(by_id[i]) for i in USED_IDS},
        "clashes": clashes,
        "rebar": rebar,
    }
    data = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    data = data.replace("</", "<\\/")
    html = TEMPLATE.read_text(encoding="utf-8").replace("__TBIM_DATA__", data)
    OUT.write_text(html, encoding="utf-8")
    print(f"wrote {OUT.name}: {len(USED_IDS)} symbols, {len(html) // 1024} KB")


if __name__ == "__main__":
    main()
