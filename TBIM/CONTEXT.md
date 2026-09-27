# TBIM drawing-annotation data: context for the main chat

This brief is for any chat or agent that will use this folder as input for building TBIM. Read it first, then open the files it points to. All paths are relative to `TBIM/`.

## 1. What this is

TBIM is the user's BIM program, Thai-first. Most of the user's work is in Singapore. This folder holds the research and data for **drawing annotation symbols**: markers, tags, levels, grids, line types, hatches, and MEP devices. The goal is for TBIM to import these as structured data.

| Area | Where |
|---|---|
| Machine-readable catalog | `data/tbim_symbols.json` (source of truth) |
| Schema | `data/tbim_symbol.schema.json` (JSON Schema 2020-12) |
| Validator | `data/validate.py`. It checks the schema, requires unique ids, requires every URL to appear in `research_notes/`, and regenerates `data/tbim_symbols.csv`. |
| Human reports (Thai) | `reports/สัญลักษณ์งานเขียนแบบสำหรับ TBIM.md` (Thailand + international); `reports/มาตรฐานสิงคโปร์สำหรับ TBIM.md` (Singapore) |
| Evidence | `research_notes/<topic>/*.md`, with a URL on every claim |
| Rendering reference | `examples/`: SVG glyphs for every symbol plus a 10-sheet example drawing set built from the catalog |

## 2. Catalog shape (`data/tbim_symbols.json`)

The top level has `catalog_id` = `TBIM-SYM`, `catalog_version` = `0.2.0` and `schema_version` = `1.1.0`, plus:
- definitions (`status_definitions`, `region_profile_definitions`, `discipline_definitions`, `category_definitions`)
- `symbols` (233 records)
- `vocabularies` (22 lists, 661 entries)

Each symbol record contains:

- `id`: namespaced and stable, `<REGION>.<DISCIPLINE>.<NAME>`, for example `TH.ARCH.SECTION_MARK`, `SG.SURVEY.LOT_NUMBER` or `INTL.STR.BAR_SHAPE_CODE`.
  - `TH.*` is the Thai default and may carry other regions as profiles.
  - `INTL.*` covers concepts with no Thai counterpart.
  - `SG.*` covers concepts that exist only in Singapore.
- `discipline`: one of ARCH, GENERAL, STR, ELEC, ELV, FA, PLB, SAN, FP, GAS, HVAC, CIVIL, SURVEY.
- `category`: device, fixture, equipment, valve, line_type, hatch, tag, notation, level, reference_marker, dimension, grid, plan_symbol, sheet or schedule.
- `name` and `description`: each has `{th, en}`. `abbreviations` and `aliases` are also present.
- `status`: see section 3.
- `region_profiles[]`: one entry per region (TH, SG, ISO, IEC, US_NCS, US_NECA, NFPA, GB, JIS, DIN, AS, KS, …). Each entry has its own `status`, `geometry_notes {th,en}`, `standards[]` and `sources[]`. **The same concept is kept in one record; regional differences live in its profiles.**
- `geometry`:
  - `units: mm_paper`: symbols are sized on paper and scale with the view, not the model.
  - `insertion_point`, `nominal_size_mm`, `size_basis` (source / region_profile / tbim_proposed_default / unknown).
  - `svg_path`: present on only about 40 records; `null` otherwise.
  - `redraw_description {th,en}`.
- `text_fields[]`: each field is filled from a model element property or typed by the user.
- `notation_grammar[]`: a regex and examples for parsing text notations, for example `4-DB16`, `ป-RB6@0.15`, `STA 0+100`, `+0.20` and SG `4H16` / `H10-200`.
- `ifc_mapping`: see section 5.
- Also present: `classification`, `standards[]`, `sources[]` (`url`, `evidence` = full_text / search_snippet / …), `related_ids`, `licence_note`.

The vocabularies are code lists, each scoped by discipline and region:
- **Tags and drawing codes:** `tag_prefixes` (291; each entry carries `collides_with`), `sheet_number_prefixes`, `general_abbreviations`, `iec_symbol_ids`.
- **Pipes:** `pipe_services`, `pipe_colours`, `pipe_materials`.
- **Electrical:** `cable_codes`, `conduit_codes`, `conductor_colours`.
- **Structure:** `rebar_designations`, `steel_sections`, `pile_designations`.
- **Presentation:** `text_styles`, `line_weights`, `drawing_colours`, `cad_layer_codes`.
- **Datums and rules:** `crs_datums`, `drawing_scale_rules`.
- **Licensing:** `licence_prefixes`.
- **Reference lists:** `ifc_annotation_types`, `standards_register`.

## 3. Status: read it before relying on any value

| status | meaning | count |
|---|---|---|
| `standard` | Set by law or a numbered standard (มอก., มยผ., วสท., กฎกระทรวง, SS, ISO, IEC, NFPA…) | 9 |
| `agency` | Set by an agency manual or its standard drawings (DOH, DRR, RID, DOL, RTSD, PUB, LTA, SLA, BCA) | 11 |
| `observed_practice` | Seen on real drawings or in practitioner sources, with no governing standard | 58 |
| `unverified` | From general knowledge or inference, with no readable source yet | 155 |

- **Thailand has no law or มอก. that defines annotation symbol shapes.** What is formal:
  - the permit rules in กฎกระทรวง ฉบับที่ 4 (2526): plans at 1:100 or larger, site plans at 1:500 or larger, and the list of required sheets
  - material designations: DB/SD40 in มอก. 24-2559, RB/SR24 in มอก. 20-2559
  - agency manuals
  - the ASA drafting guideline (2549/2554). Its symbol plates were not read, which is the largest gap.
- All MEP symbol shapes are `unverified`.
- Most glyph shapes in `examples/glyphs/` were proposed by us (`basis: proposed`). Treat them as placeholders until they are checked against source legends.
- The research environment blocked most .go.th, .gov.sg, ISO, IEC and NFPA sites. Most evidence is search snippets.

## 4. Design decisions already made (build on these)

1. **Tag codes are discipline-scoped.** Store them as `DISCIPLINE:CODE`. F1 means floor finish on A sheets but footing on S sheets, and C means ceiling, column, downlight or CCTV depending on the discipline. The clashes are listed in `vocabularies.tag_prefixes[].collides_with`.
2. **Regional variants are profiles on one record, not separate records.** The UI picks the active profile (TH, SG, GB, JIS, US_NCS, …) and falls back to TH.
3. **Symbol sizes are in paper mm.** Proposed defaults: grid bubble and section head Ø10 mm; text 2.5 mm (names 3.5 mm).
4. **Symbol definitions stay separate from placed instances.** This follows Revit families, CAD blocks and the Bonsai pattern.
5. **Coordinate system and height datum are project settings, not symbol properties.**
   - TH: UTM 47N/48N on WGS84 or Indian 1975 (EPSG:24047/24048); heights to MSL at Ko Lak.
   - SG: SVY21 (EPSG:3414) with SHD heights (EPSG:6927 combined). The old datum added 100 m, so old RL − 100.000 = SHD.
6. **Symbols must be redrawn, not copied.**
   - IEC forbids commercial extraction of the IEC 60617 database.
   - ISO, NCS and NFPA figures are copyrighted.
   - Bonsai/IfcOpenShell is GPL, so use it only as a design reference.
   - Store standard clause and IEC S-numbers as metadata only.

## 5. IFC export approach

- A placed symbol becomes an `IfcAnnotation`.
  - IFC4 has no `PredefinedType` for this.
  - IFC4.3 ADD2 does: SYMBOL, TEXT, DIMENSION, LEADER, SURVEY, CONTOURLINE, … (listed in `vocabularies.ifc_annotation_types`).
- `ObjectType` holds the catalog id.
- The symbol links to its host element through `IfcRelAssignsToProduct`. `ifc_mapping.host_ifc_classes` names the host class, for example IfcDoor, IfcOutlet or IfcSensor.
- Classification uses `IfcClassificationReference`, which can point to bSDD.
- Singapore (CORENET X) uses IFC+SG, which is IFC4 plus `SGPset_*`: for example `SGPset_Door.FireAccessOpening`, `SGPset_Space.SpaceName` (the value must come from an official list) and `SGPset_Wall.ReferToDrawingNumber`.

## 6. Key facts by market

**Thailand**
- Sheet prefixes: A-, S-, E-, SN-, M-, FP-.
- Units: m in plans, mm for rebar.
- Levels: signed m to 2 d.p. (`+0.20`, `EL. +3.20`).
- Licence formats: ภ-สถ (architect) and ภย. (civil) are observed on real drawings. ภฟ. (electrical) and ภก. (mechanical) are used on the example sheets but are not in the catalog and are unverified.
- Conductor colours follow IEC: L1 brown, L2 black, L3 grey, N blue, PE green-yellow.
- Fire protection leans NFPA; lightning protection follows IEC 62305.

**Singapore**
- CAD standard: CP 83 parts 1–5 (2026 amendments).
- CORENET X Code of Practice, 3rd ed. (Sep 2025):
  - mandatory from 1 Oct 2025 for projects of ≥30,000 m²
  - from Oct 2026 for projects of ≥5,000 m² (vendors say all projects; this conflict is recorded)
- A&A colours per URA and CP 83-5: magenta = new, cyan = existing, yellow = demolished.
- Rebar: BS 8666 letters H/R and SS 560 grades B500B etc.
- Other codes:

| Topic | Code |
|---|---|
| Electrical | SS 638 |
| Fire alarm | SS 645:2019 |
| Sprinklers | CP 52 |
| Hydrants / hose reels | SS 575 |
| Water | SS 636 |
| Gas | SS 608:2024 |
| ACMV | SS 553:2026 |
| Fire Code | Fire Code 2023 |

- Endorsements: QP, PE and LEW.
- The full list with editions and URLs is in `vocabularies.standards_register` and the SG report.

## 7. Known gaps (verify before shipping)

- **Thailand:**
  - ASA drafting manual symbol plates
  - MEP legend sheets from government tenders (ops.go.th, smpkhos.go.th, customs.go.th and others listed in the reports)
  - the TISI catalogue
  - DOH 2558 drafting manual legend pages
- **Singapore:**
  - CP 83-2 (symbols), CP 83-4 (drafting), CP 83-5 (colours and linetypes)
  - the full CORENET X Code of Practice, the IFC+SG mapping file and the `SpaceName` list
  - the SCDF plan legend and colours
  - PE seal and registration-number formats
- **Naming:** "TBIM" is also the Thai BIM Association (tbim.or.th). This is a branding risk and a possible partner.

## 8. How to use or extend

- Add or edit records only in `data/tbim_symbols.json`, then run `python3 data/validate.py`.
  - A new URL must first appear in a `research_notes/` file.
  - Keep `status` honest.
  - Give each new record at least a TH profile, or an SG profile if it is an `SG.*` record.
- New glyphs go in `examples/glyphs/*.js` following `examples/glyphs/CONTRACT.md`:
  - paper mm
  - `currentColor`
  - only the classes `s`, `st`, `sk`, `f`, `bg`, `tx`
- After adding glyphs, run `python3 examples/build_example.py`. It reports any symbol that has no glyph.
- The example page `examples/tbim_example.html` shows how the catalog renders:
  - 10 A3 sheets, a legend on each sheet, and a sheet listing all 233 symbols
  - an inspector for each symbol
  - a TH/SG/GB/JIS/US region switch
  - a rebar-callout parser
  - Published privately at https://claude.ai/artifact/Ez2acHisGiP3QYwDTeReJ4.

## 9. 2D drafting tools (separate report)

`reports/เครื่องมือเขียนแบบ 2D สำหรับ TBIM.md` (Thai) lists the 2D drafting tools TBIM should ship, based on AutoCAD, Revit and Archicad. Use it when designing or building the drawing/editing tools, not the symbol catalog.

- 14 tool groups: precision aids (object snap, ortho, polar, coordinate input), draw, selection, modify, dimension, text/annotation, symbols, blocks/detail components, styles, BIM-specific 2D, measure, sheets/print, import/export, UX.
- Every tool has a priority: **P0** = MVP, **P1** = professional use, **P2** = nice to have. A three-phase roadmap groups them.
- Decisions that match this folder:
  - Every 2D element belongs to a view (`ownerViewId`; null = model element).
  - Annotation sizes are paper mm, scaled by the view (same as section 4 item 3).
  - Dimensions, tags and hatches keep references to host elements, not fixed coordinates.
  - Keep an AutoCAD-style command line and shortcuts, and first-class DWG/DXF import and export.
- The report ends with a suggested `Element2D` class tree and geometry-kernel notes (intersection, offset, region booleans, spatial index, Thai text shaping).
