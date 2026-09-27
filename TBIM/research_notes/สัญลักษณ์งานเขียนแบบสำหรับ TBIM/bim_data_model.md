# Annotation symbols as data in BIM/CAD and open standards: guidance for the TBIM symbol-library data model

Research date: 2026-09-27. Method note: many documentation hosts were blocked by this environment's egress proxy (ifc43-docs.standards.buildingsmart.org, technical.buildingsmart.org, docs.bonsaibim.org, help.autodesk.com, gdl.graphisoft.com, asa.or.th, tbim.or.th, thaibim.net, cadbimcenter.erdc.dren.mil). To compensate, I (a) checked IFC schema facts directly against the IFC4 and IFC4X3_ADD2 schemas that ship in the `ifcopenshell` 0.8.5 Python package from PyPI (https://pypi.org/project/ifcopenshell/), (b) read Bonsai's source and SVG assets from a clone of https://github.com/IfcOpenShell/IfcOpenShell (HEAD commit 0cd96645c69c44533c00f89d48029afaf3d42d49, 2026-09-25), and (c) relied on search-result snippets for pages I could not open. Claims that rest only on a snippet are marked "(snippet)".

---

## Q1. IFC (IFC4 / IFC4.3 ADD2 / ISO 16739-1:2024 / IFC5) and buildingSMART IDS and bSDD: how are annotation symbols represented?

### Takeaway
In IFC an annotation is an `IfcAnnotation` product. Its geometry uses 2D presentation items (`IfcTextLiteral`, `IfcAnnotationFillArea`, curves) and presentation styles (`IfcCurveStyle`, `IfcFillAreaStyleHatching`). IFC has no "symbol definition/catalog" entity and no standard tag or section-marker semantics. Only IFC4.3 adds `IfcAnnotation.PredefinedType`, and the enum is coarse (SYMBOL, TEXT, LEADER, DIMENSION…). Tags and section heads therefore travel as generic IfcAnnotation plus ObjectType plus custom property sets, or they don't travel at all. That makes IFC a sensible target for *export mapping*. It can't be the master schema of a symbol catalog. Classification links should use `IfcClassificationReference` with bSDD URIs.

### Cited Findings
- IFC 4.3 was ratified by ISO as ISO 16739-1:2024 (Edition 2, published 2024-03). buildingSMART announced the ratification on 4 January 2024. This edition added infrastructure (bridges, roads, rail, waterways, ports). Sources: [ISO 16739-1:2024](https://www.iso.org/standard/84123.html); [BibLus: IFC 4.3 approved as final](https://biblus.accasoftware.com/en/ifc-4-3-standard/) (snippet); [buildingSMART IFC page](https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/)
- IFC5 (rebranded "IFCX (formerly IFC5)") is still at **alpha** in 2026. Examples and a viewer are published on GitHub and at ifc5.technical.buildingsmart.org, and buildingSMART says they are "preliminary", "not suitable for production use". Sources: [buildingSMART/IFC5-development](https://github.com/buildingSMART/IFC5-development/); [IFC5 learning site/viewer](https://ifc5.technical.buildingsmart.org/); [ONESTRUCTION note on IFCX](https://note.com/onestruction/n/n956237d07ace?hl=en) (snippet); [bSI forums IFC5 (alpha)](https://forums.buildingsmart.org/c/developers/ifc5/98)
- **IfcAnnotation**, checked against the ifcopenshell 0.8.5 schemas:
  - In IFC4 `IfcAnnotation` is a subtype of `IfcProduct` with **no own attributes**, so there is no PredefinedType.
  - In IFC4X3_ADD2 it gains `PredefinedType`, and `IfcAnnotationTypeEnum` = `CONTOURLINE, DIMENSION, ISOBAR, ISOLUX, ISOTHERM, LEADER, SURVEY, SYMBOL, TEXT, USERDEFINED, NOTDEFINED`.
  - Sources: schema introspection of [ifcopenshell 0.8.5 on PyPI](https://pypi.org/project/ifcopenshell/); canonical doc page [IfcAnnotationTypeEnum (IFC4.3)](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcAnnotationTypeEnum.htm) (not fetchable here)
- **Other presentation entities** (attributes as they appear in both IFC4 and IFC4X3_ADD2 via ifcopenshell 0.8.5):
  - `IfcAnnotationFillArea(OuterBoundary, InnerBoundaries)`
  - `IfcTextLiteral(Literal, Placement, Path)`; `IfcTextLiteralWithExtent(+Extent, BoxAlignment)`; `IfcTextPath` = LEFT/RIGHT/UP/DOWN
  - `IfcFillAreaStyleHatching(HatchLineAppearance, StartOfNextHatchLine, PointOfReferenceHatchLine, PatternStart, HatchLineAngle)`
  - `IfcCurveStyle(CurveFont, CurveWidth, CurveColour, ModelOrDraughting)`; `IfcCurveStyleFont(Name, PatternList)`
  - `IfcDraughtingPreDefinedCurveFont`, a subtype of `IfcPreDefinedCurveFont`
  - `IfcPresentationLayerAssignment(Name, Description, AssignedItems, Identifier)`; `IfcPresentationLayerWithStyle(+LayerOn, LayerFrozen, LayerBlocked, LayerStyles)`
  - `IfcGrid(UAxes, VAxes, WAxes, PredefinedType)`, whose supertype changed from IfcProduct (IFC4) to **IfcPositioningElement** (IFC4.3)
  - `IfcGridAxis(AxisTag, AxisCurve, SameSense)`, which is a resource entity, not a product
  - `IfcGeometricProjectionEnum` includes PLAN_VIEW, REFLECTED_PLAN_VIEW, SECTION_VIEW, ELEVATION_VIEW, MODEL_VIEW, SKETCH_VIEW, GRAPH_VIEW
  - Sources: [ifcopenshell 0.8.5](https://pypi.org/project/ifcopenshell/) schema introspection; [IFC4.3 docs root](https://ifc43-docs.standards.buildingsmart.org/)
- There is no `IfcDraughtingPreDefinedTextFont` in IFC4 or IFC4X3_ADD2 (lookup failed in both schemas). Source: [ifcopenshell 0.8.5](https://pypi.org/project/ifcopenshell/)
- **How tags and markers are exchanged in practice.** The only reference implementation I found is Bonsai, which uses **IfcAnnotation + ObjectType + custom "EPset_" property sets** and an **IfcRelAssignsToProduct** link to the tagged element. Details are under Q2. It notes that `EPset_AnnotationSurveyArea` "is not standard! See bSI-4.3 proposal #660". Source: [Bonsai tool/drawing.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/tool/drawing.py)
- **bSDD linking.** A class in bSDD maps to `IfcClassificationReference`:
  - class code → `Identification` (IFC4+) / `ItemReference` (IFC2x3)
  - class URI → `Location`
  - dictionary URI → `IfcClassification.Specification` (IFC4.3) / `Location`
  - In IDS: `ids:classification value/uri`.
  - URI pattern: `https://identifier.buildingsmart.org/uri/<OrganizationCode>/<DictionaryCode>/<DictionaryVersion>/class/<ClassCode>`
  - Worked example (CCI Construction via Molio): `IFCCLASSIFICATIONREFERENCE('https://identifier.buildingsmart.org/uri/molio/cciconstruction/1.0/class/L-BD','L-BD','Wall structure',#1,...)`
  - Sources: [bSDD-IFC documentation (GitHub)](https://github.com/buildingSMART/bSDD/blob/master/Documentation/bSDD-IFC%20documentation.md); [Referencing bSDD in IDS and IFC](https://technical.buildingsmart.org/services/bsdd/referencing-bsdd-in-ids-and-ifc/) (snippet)
- bSDD content that reaches status "Active" keeps "an immutable identifier (URI)". The bSDD API exposes `LanguageIsoCode` and `LanguageOnly` fields, so it supports multilingual names. Sources: [Referencing bSDD in IDS and IFC](https://technical.buildingsmart.org/services/bsdd/referencing-bsdd-in-ids-and-ifc/) (snippet); [bSDD-IFC documentation](https://github.com/buildingSMART/bSDD/blob/master/Documentation/bSDD-IFC%20documentation.md)
- IfcOpenShell has bSDD support documented at [docs.ifcopenshell.org/bsdd.html](https://docs.ifcopenshell.org/bsdd.html) (snippet title only).

### Inferences
- In TBIM, "symbol" should be a **type/definition** record in the catalog. Placed instances map to `IfcAnnotation`:
  - IFC4.3: set `PredefinedType = SYMBOL | TEXT | LEADER | DIMENSION | USERDEFINED`, with `ObjectType` carrying the specific kind (e.g. "SECTION_MARK", "DOOR_TAG").
  - IFC4: use `ObjectType` only, because the attribute doesn't exist there.
- Symbols *can* be linked to bSDD classes through `IfcRelAssociatesClassification` → `IfcClassificationReference` on the annotation instance. Usually it is more meaningful to classify the *annotated element*, and to classify the symbol by a symbol-typology code.
- A Thai symbol dictionary could itself be published to bSDD (organization + dictionary), which would give stable URIs and Thai/English names. This is my inference from bSDD's design; I found no Thai dictionary in bSDD.
- Line types and hatches in the catalog should map to `IfcCurveStyleFont` (dash pattern list) and `IfcFillAreaStyleHatching`. Keep your own pattern definitions (DXF .lin/.pat-style) as the master copy.

### Gaps
- I could not open the IFC4.3 HTML docs, so I did not verify the exact enumerated names allowed for `IfcDraughtingPreDefinedCurveFont` (from memory: continuous, chain, chain double dash, dashed, dotted, by layer). **UNVERIFIED — check the doc before use.**
- I didn't check whether IFC4.3 "concept templates" formally define a symbol or annotation-tag concept. No source was obtained.
- I didn't verify Revit's and ArchiCAD's IFC export behaviour for 2D annotations (tags, section heads). No source was obtained.
- IFC5/IFCX alpha: I found no evidence of dedicated 2D annotation or drawing components as of 2026.

---

## Q2. How do mainstream tools model annotation (Revit, AutoCAD, ArchiCAD, Tekla, Bentley, Allplan, BricsCAD, FreeCAD, IfcOpenShell/Bonsai)?

### Takeaway
All mature tools separate a **reusable symbol definition** (Revit annotation family, AutoCAD block, ArchiCAD GDL library part, MicroStation cell) from **placed instances**. The definition carries parametric text fields: attributes, labels, or shared parameters. Tags read their values from the host element, while "generic" symbols store values themselves. Symbol size is fixed in **paper units** and scaled by the view scale.

Bonsai is the best open reference. It keeps symbol geometry in one SVG file of `<g id=...>` groups in paper millimetres, uses `data-type="text-template"` placeholders filled by `{{attribute}}` queries against the linked element, and records everything in IFC as IfcAnnotation plus psets.

### Cited Findings
**Revit**
- All Revit tags and symbols are annotation families. They are view-specific, "adjust to the scale of the view", and can be nested in other families. Sources: [Modelical: Annotation Families](https://www.modelical.com/en/gdocs/annotation-families/) (snippet); [NIBT Medium: Generic Annotations](https://medium.com/@nibtnashik/what-is-generic-annotations-in-revit-d7921ccfe878) (snippet)
- You create an annotation symbol by choosing the **family category** to associate it with, sketching it, and setting property values. Generic annotations start from the `Generic Annotation.rte` template. Sources: [Autodesk Help: Create an Annotation Symbol Family (2023)](https://help.autodesk.com/cloudhelp/2023/ENU/Revit-Customize/files/GUID-7B3C22B5-DC7C-45C9-8C3A-A75B203BFA4D.htm) (snippet); [Autodesk Help: Add a Generic Annotation](https://help.autodesk.com/view/RVT/2023/ENU/?guid=GUID-44F7A64A-C603-4497-AFAE-0CB1FCBF8DC4) (snippet)
- Generic Annotations have user-editable text fields. They are "basically a block with attributes from AutoCAD", and they are the only annotation families that report to **Note Block** schedules. Their data "lives in the fields of the Generic Annotation object itself", unlike tags, which report data from the model. Sources: [Paul F. Aubin: Generic Annotations in Revit](https://paulaubin.com/blog/generic-annotations-in-revit/) (snippet); [Autodesk forum: tag a generic annotation](https://forums.autodesk.com/t5/revit-mep-forum/how-to-tag-a-generic-annotation-symbol/td-p/10714724) (snippet)

**ArchiCAD (GDL)**
- Markers are GDL library parts with the subtype chain *Documentation Element > Drawing Symbol > Marker > Section-Elevation Marker > Section Marker*, flagged "Use as subtype" and "Placeable". Source: [Graphisoft Community: Custom Section marker creation](https://community.graphisoft.com/t5/GDL/Custom-Section-marker-creation/td-p/640596) (snippet)
- Detail, worksheet and change markers use the `MARKER_HEAD_ROT_MODE` global (from Archicad 22). In "Fixed Angle to Screen" mode `SYMB_ROTANGLE` is the opposite of the view rotation. In "Fixed Angle to Model" mode it equals `MARKER_HEAD_ANGLE`. Label parameters were introduced in Archicad 22. Sources: [GDL Center: Marker Parameters](https://gdl.graphisoft.com/reference-guide/marker-parameters/) (snippet); [GDL Center: Parameters for Labels](https://gdl.graphisoft.com/reference-guide/parameters-for-labels/) (snippet)

**Bonsai / IfcOpenShell (open-source reference implementation, GPL-3.0)**
- Annotation object types come from `ANNOTATION_TYPES_DATA` in `tool/drawing.py`: DIMENSION, ANGLE, RADIUS, DIAMETER, TEXT, TEXT_LEADER, STAIR_ARROW, PLAN_LEVEL, SECTION_LEVEL, BREAKLINE, SYMBOL, MULTI_SYMBOL, LINEWORK, BATTING, REVISION_CLOUD, FILL_AREA, FALL, IMAGE. These are stored as `IfcAnnotation.ObjectType`. Drawings themselves are `IfcAnnotation` with `ObjectType == "DRAWING"`, grouped via `IfcRelAssignsToGroup` (group ObjectType "DRAWING" / "DRAWINGS"). Source: [Bonsai tool/drawing.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/tool/drawing.py)
- `DEFAULT_SYMBOLS`: rectangle-tag, triangle-tag, hexagon-tag, capsule-tag, circle-tag, door-tag, window-tag, space-tag, elevation-arrow, elevation-tag, section-arrow, section-tag, dot, setout-tag, setout-point, control-point, traverse-point, spot-elevation. Source: [Bonsai tool/drawing.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/tool/drawing.py)
- **Symbol choice is stored in a property set.** `get_annotation_symbol()` reads `EPset_Annotation.Symbol`, with a fallback to the non-standard `EPset_AnnotationSurveyArea.PointType`. Text styling classes go in `EPset_Annotation.Classes` and line breaking in `EPset_Annotation.Newline_At`. Drawing flags go in `EPset_Drawing.HasLinework/HasAnnotation`. Source: [Bonsai tool/drawing.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/tool/drawing.py)
- **Tag-to-element link.** A tag is linked through `IfcRelAssignsToProduct.RelatingProduct`, the element the annotation describes. Grid axis labels use `IfcRelAssignsToProduct` to the IfcGrid, with `Name = AxisTag`. Source: [Bonsai tool/drawing.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/tool/drawing.py)
- **Parametric text.** `replace_text_literal_variables()` replaces `{{query}}` with `ifcopenshell.util.selector.get_element_value(product, query)` and ``` ``format`` ``` with `selector.format(...)`, evaluated against the related product. This is the equivalent of Revit tag labels and AutoCAD attributes. Source: [Bonsai tool/drawing.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/tool/drawing.py)
- **Symbol geometry storage.** `bim/data/assets/symbols.svg` holds one `<g id="...">` per symbol, drawn in paper millimetres around the origin (the insertion point).
  - `section-tag` and `elevation-tag` are `<circle r="5">` plus a horizontal line, i.e. a 10 mm diameter head with 0.25 stroke.
  - `door-tag` has two `<text ... data-type="text-template">` slots, above and below a divider line. The file has 7 such slots in total.
  - `markers.svg` holds line-end markers: dimension, radius, angle, diameter, grid, leader, stair, plan-level, section-level, breakline, fall.
  - `patterns.svg` holds hatch patterns: steel, brick, earth, glass, liquid, grass, honeycomb, wood, sand, concrete, crosshatch/diagonal/square/tile/board variants.
  - Source: [Bonsai assets folder](https://github.com/IfcOpenShell/IfcOpenShell/tree/v0.8.0/src/bonsai/bonsai/bim/data/assets)
- **Text sizes in default.css.** The comments give plotted sizes: title 7 mm, header 5 mm, large 3.5 mm, regular 2.5 mm, small 1.8 mm, GRID 5 mm. Fonts are 'OpenGost Type B TT', DejaVu Sans Condensed, Liberation Sans, Arial Narrow. Source: [Bonsai default.css](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/bim/data/assets/default.css)
- Bonsai drawing target views are PLAN_VIEW, ELEVATION_VIEW, SECTION_VIEW, REFLECTED_PLAN_VIEW and MODEL_VIEW, matching `IfcGeometricProjectionEnum`. Tag rotation options are NONE / LOCAL_X / LOCAL_Y / LOCAL_Z. Source: [Bonsai module/drawing/prop.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/bim/module/drawing/prop.py)
- Licences: the IfcOpenShell repository root has `COPYING` (GPL-3.0) and `COPYING.LESSER` (LGPL-3.0). Bonsai source file headers state GPL ("Bonsai is free software... GNU General Public License"). Source: [IfcOpenShell repo](https://github.com/IfcOpenShell/IfcOpenShell)

**QCAD (block library metadata precedent)**
- QCAD 3 library items can carry an RDF / Dublin Core XML metadata file that includes licence URIs: public domain, CC BY 3.0, CC BY-NC 3.0, CC0. Sources: [QCAD Library Item Metadata](https://qcad.org/en/78-qcad/117-library-item-metadata) (snippet); [QCAD Part Library tutorial](https://qcad.org/en/tutorial-working-with-the-part-library) (snippet)

### Inferences
- Adopt a **definition/instance split**. The catalog record is the "family / block / library part". Instances in a model are `IfcAnnotation` with `ObjectType = <catalog symbol code>`, placement, view assignment, `IfcRelAssignsToProduct` to the host, and text values.
- Model two field sources, as Revit (tag vs generic) and Bonsai (`{{query}}` vs literal) do:
  - `bound` fields evaluate a query on the linked element, e.g. `{{Name}}`, `{{Pset_DoorCommon.FireRating}}`.
  - `free` fields are typed by the user.
- Store geometry as an SVG fragment in paper mm with the origin at the insertion point, following Bonsai. Keep optional DXF block export for AutoCAD interoperability.
- Section, elevation and detail markers need **reference fields** (drawing number, sheet number), as in Revit view reference and ArchiCAD marker globals. These should be computed links to drawing/sheet objects, not free text.

### Gaps
- I could not open official docs for AutoCAD (attributes/annotative scaling), Tekla, Bentley (cells), Allplan, BricsCAD BIM, or FreeCAD BIM annotation internals. Background knowledge (not re-verified): AutoCAD blocks with ATTDEF, annotative objects scaled by annotation scale; MicroStation "cells" in .cel libraries; FreeCAD Draft/TechDraw uses SVG symbols. **Needs source verification.**
- Revit key schedules and shared parameters were not documented from a primary source here.

---

## Q3. Open symbol libraries and datasets that could be reused, and their licences

### Takeaway
Permissively reusable sources exist, but each licence carries different obligations:
- **US federal A/E/C CAD Standard**: public release, unlimited distribution, generally public domain as a US government work.
- **KiCad**: CC-BY-SA 4.0 with a design exception.
- **QCAD part library**: per-item licences, some public domain or CC0.
- **Bonsai SVGs**: GPL-3.0 (copyleft, so be careful if TBIM is proprietary).
- **LibreCAD**: GPLv2.
- **FreeCAD**: LGPL-2.1.

### Cited Findings
- **US A/E/C CAD Standard** (CAD/BIM Technology Center, ERDC/USACE): developed "to eliminate redundant CAD standardization efforts within DoD and the Federal Government". It is a nonproprietary standard covering levels/layers, file naming and standard symbology. Documents are "approved for public release; distribution unlimited". Releases include R4.0 (ERDC/ITL TR-09-2, 2009), R5 (TR-12-X), R6 (TR-12-6), and TR-19-7 (2019). Sources: [CAD/BIM Center A/E/C Standards](https://cadbimcenter.erdc.dren.mil/aeccadstandard) (snippet); [R4.0 PDF (USACE)](https://usace.contentdm.oclc.org/digital/api/collection/p266001coll1/id/2810/download); [R6 PDF (WBDG)](https://nibs-s3-wbdg3-production.s3.us-east-1.amazonaws.com/FFC/AECCAD/ERDCITL_TR12-6_r6.pdf); [TR-19-7 (2019) PDF](https://nibs-s3-wbdg3-production.s3.us-east-1.amazonaws.com/FFC/AECCAD/ERDC_ITL_TR-19-7_2019.pdf); [A/E/C Graphics Standard R2.2 (DTIC)](https://apps.dtic.mil/sti/trecms/pdf/AD1208384.pdf)
- **KiCad libraries**: CC-BY-SA 4.0 with the KiCad libraries exception, which waives article 3 for designs and generated files. KiCad says the licence "ensure[s] free use of library data for commercial, closed, and non-commercial projects". The exception is registered in SPDX as `KiCad-libraries-exception`. Sources: [KiCad Libraries License](https://www.kicad.org/libraries/license/); [SPDX KiCad-libraries-exception](https://spdx.org/licenses/KiCad-libraries-exception.html)
- **QCAD part library**: licence is set per item in metadata (public domain / CC0 / CC BY 3.0 / CC BY-NC 3.0). Source: [QCAD Library Item Metadata](https://qcad.org/en/78-qcad/117-library-item-metadata) (snippet)
- **LibreCAD**: GPLv2 ("## LibreCAD and the GPLv2 ##"). Source: [LibreCAD LICENSE](https://github.com/LibreCAD/LibreCAD/blob/master/LICENSE)
- **FreeCAD**: repository LICENSE is GNU LGPL v2.1. Source: [FreeCAD LICENSE](https://github.com/FreeCAD/FreeCAD/blob/main/LICENSE)
- **IfcOpenShell/Bonsai**: GPL-3.0 / LGPL-3.0 files in the repo. The Bonsai add-on is GPL. Asset SVGs sit in the Bonsai tree, so treat them as GPL-3.0 unless stated otherwise. Source: [IfcOpenShell repo](https://github.com/IfcOpenShell/IfcOpenShell)

### Inferences
- For a proprietary TBIM, the safest bulk sources are the US federal A/E/C standard symbology (a US government work, so no US copyright under 17 USC 105; verify per file), CC0 or public-domain QCAD items, and KiCad electrical symbols (under its exception). Use GPL Bonsai assets only as a *design reference*, or re-draw them.
- The per-symbol `licence` field should carry an SPDX identifier, e.g. `CC0-1.0`, `CC-BY-4.0`, `CC-BY-SA-4.0 WITH KiCad-libraries-exception`, `GPL-3.0-only`, `LicenseRef-US-Gov-PD`. Add a `source_url` and an `attribution` string, following QCAD's per-item Dublin Core approach.

### Gaps
- I didn't verify licences for OpenMEP, Wikimedia Commons electrical symbol sets (per-file licences vary), the US National CAD Standard (NCS is a *paid* NIBS product — background knowledge, unverified), or GSA CAD standards.
- I didn't confirm whether the A/E/C CAD Standard's downloadable DWG symbol libraries (as opposed to the PDFs) carry any explicit licence statement.

---

## Q4. Classification systems to link symbols to, and the Thai BIM landscape (is "TBIM" an existing initiative?)

### Takeaway
**"TBIM" is already the name/acronym of the Thai BIM Association (สมาคม TBIM, tbim.or.th, Bangkok).** The program name collides with an existing Thai BIM body. Either coordinate with it or rename.

Thai guidance consists of:
- ASA's Thailand BIM Guideline (2015 / พ.ศ. 2558)
- ASA Revit/ArchiCAD templates (2020 update)
- the Thailand BIM Object Standard / Construction Material Guideline, which includes a "Classification Code Guideline"

I found no public Thai standard specifically for drawing-annotation symbols. For classification, Uniclass 2015 is freely usable (CC BY-ND 4.0, no derivatives). bSDD URIs are the most future-proof way to link.

### Cited Findings
- **TBIM = Thai BIM Association** (TBIM – Thai BIM Association แบบจำลองสารสนเทศอาคาร). Website tbim.or.th, address 139 Pan Road, Silom, Bangrak, Bangkok 10500. Its aim is to "develop and disseminate good BIM standards for Thailand's construction industry". Members include architects and engineers from government, academia and the private sector. Sources: [tbim.or.th](https://tbim.or.th/); [TBIM about](https://tbim.or.th/about/) (snippet); [TBIM Facebook](https://www.facebook.com/ThaiBIMAssociation/) (snippet)
- TBIM distributes the **"Thailand BIM Object Construction Material Guideline"** as a free download. Topics: BIM Object Ecosystem, Project Information Requirement, Level of Development, Model Classification, Object and Material Naming Convention, **Classification Code Guideline**, Asset Information Management. Source: [TBIM download page](https://tbim.or.th/sdm_downloads/download-free-thailand-bim-object-construction-material-guideline/) (snippet)
- A "Thailand BIM Object Standard Guideline" was announced as downloadable on 2021-10-10. Source: [ThaiBIM.net](https://thaibim.net/2021/10/10/thailand-bim-object-standard-guideline-download/) (snippet)
- **ASA (สมาคมสถาปนิกสยาม ในพระบรมราชูปถัมภ์)** published แนวทางการใช้งานแบบจำลองสารสนเทศอาคารสำหรับประเทศไทย (Thailand BIM Guideline), edition พ.ศ. 2558 (2015). Sources: [ASA handbook page](https://asa.or.th/handbook/handbook20150427/) (snippet); [PongpanS blog 2015](http://www.pongpans.com/2015/05/thailand-bim-guideline.html) (snippet)
- An "ASA Template for Revit/ArchiCAD for Thailand BIM Guideline" update was published 2020-05-24. This is the closest Thai precedent for standardized annotation families and settings. Source: [ThaiBIM.net ASA template](https://thaibim.net/2020/05/24/update-asa-bim-template/) (snippet)
- ASA's site hosts the MQDC BIM Handbook V4 (uploaded 2025-01). Source: [MQDC BIM Handbook V4 PDF](https://asa.or.th/wp-content/uploads/2025/01/MQDC_BIM-Handbook_V4.pdf) (snippet)
- Academic study of BIM requirements in Thai government design TORs: [Sarasatr journal](https://so05.tci-thaijo.org/index.php/sarasatr/article/view/259125) (snippet)
- **Uniclass 2015** is licensed **CC BY-ND 4.0**. It can be shared and used on commercial projects, but users "should not adapt the tables and add their own codes"; NBS asks for proposed additions instead. Downloads are at uniclass.thenbs.com. Sources: [Uniclass download](https://uniclass.thenbs.com/download) (snippet); [Uniclass (Wikipedia)](https://en.wikipedia.org/wiki/Uniclass) (snippet)
- **CCI** (Molio, Denmark) is published in bSDD, e.g. `https://identifier.buildingsmart.org/uri/molio/cciconstruction/1.0`. Source: [bSDD-IFC documentation](https://github.com/buildingSMART/bSDD/blob/master/Documentation/bSDD-IFC%20documentation.md)

### Inferences
- TBIM's catalog should support **multiple classification references per symbol**, each as `{system, edition, code, uri, name_th, name_en}`, so it can hold Uniclass 2015 (e.g. a symbol for the Pr/Ss/EF of the annotated element), OmniClass, and a Thai code once the Thai guidelines define one.
- Because of CC BY-ND, TBIM must not insert Thai codes into Uniclass tables. It needs its own namespace (e.g. `TH-SYM-...`), mapped to Uniclass.
- The name collision with the Thai BIM Association is a significant product/branding risk, and also an opportunity to seek its endorsement of the symbol catalog.

### Gaps
- I couldn't open the Thai guideline PDFs (asa.or.th, tbim.or.th and thaibim.net were blocked). What they say about drawing annotation, sheet/drawing production, LOD definitions, and which classification (OmniClass vs Uniclass) the Thai Classification Code Guideline adopts is **unverified**.
- I didn't find guidance from the Department of Public Works and Town & Country Planning (กรมโยธาธิการและผังเมือง) or the Council of Engineers (สภาวิศวกร) on BIM drawing annotation.
- OmniClass, MasterFormat and UniFormat licence terms were not checked (background knowledge: OmniClass is CSI/CSC-administered with free use terms; MasterFormat is commercial; unverified).

---

## Q5. Symbol scaling rules and geometry storage (paper size vs model scale, SVG/DXF)

### Takeaway
The consistent precedent is to define symbols at **plotted paper size in mm** and scale them by the view scale at placement or plot time. Revit annotation families "adjust to the scale of the view". Archicad handles screen/model angle modes. Bonsai's SVG symbols are drawn in paper mm; its section head is a 10 mm circle and it uses text heights of 1.8/2.5/3.5/5/7 mm, which is the ISO 3098 series. SVG fragments are a practical canonical geometry format, with DXF blocks as an export.

### Cited Findings
- Revit annotation families are view-specific and adjust to view scale. Source: [NIBT Medium](https://medium.com/@nibtnashik/what-is-generic-annotations-in-revit-d7921ccfe878) (snippet)
- Archicad marker head rotation modes: "Fixed Angle to Screen" vs "Fixed Angle to Model". Source: [GDL Center: Marker Parameters](https://gdl.graphisoft.com/reference-guide/marker-parameters/) (snippet)
- Bonsai sizes:
  - section-tag and elevation-tag: circle r=5, i.e. 10 mm diameter, stroke 0.25 in the SVG units ([symbols.svg](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/bim/data/assets/symbols.svg))
  - rectangle-tag: 12×5; circle-tag: r=5
  - CSS text classes: 7/5/3.5/2.5/1.8 mm, with a px factor ≈1.65 px per mm (e.g. 2.5 mm = 4.13px) ([default.css](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/bim/data/assets/default.css))
- Bonsai supports scale presets including a "CUSTOM" option and imperial (e.g. `1'=1'-0"|1/1`). Source: [prop.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/bim/module/drawing/prop.py)

### Inferences
- The schema should store `paper_size_mm {width, height}`, an `insertion_point` in the symbol's local paper-mm frame, `scaling: "paper" | "model"`, and `rotation_mode: "model" | "screen" | "readable"`. Model-scaled items include hatches and some MEP equipment outlines that are drawn true size.
- Text should reference named text styles with a height in mm (1.8, 2.5, 3.5, 5, 7). Hard-coded sizes should be avoided. Thai text needs a Thai-capable font fallback.

### Gaps
- There is no primary source here for the claim that section heads are "typically 10–12 mm". Only Bonsai's 10 mm is verified. The ISO 128/ISO 3098 and Thai มยผ./ASA drafting-convention sizes were not retrieved.

---

## Q6. Proposed JSON schema for a TBIM symbol record, based on the precedents above

### Takeaway
The proposed record combines:
- Bonsai: SVG `<g>` geometry in paper mm, `{{query}}` text templates, IfcAnnotation + ObjectType + pset
- Revit: family category, tag vs generic field sources
- QCAD: per-item licence metadata
- bSDD: URI-based classification with language codes

### Cited Findings
- Design inputs cited in Q1–Q5:
  - [Bonsai drawing.py](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/tool/drawing.py)
  - [Bonsai symbols.svg](https://github.com/IfcOpenShell/IfcOpenShell/blob/v0.8.0/src/bonsai/bonsai/bim/data/assets/symbols.svg)
  - [bSDD-IFC documentation](https://github.com/buildingSMART/bSDD/blob/master/Documentation/bSDD-IFC%20documentation.md)
  - [QCAD metadata](https://qcad.org/en/78-qcad/117-library-item-metadata)
  - [Revit annotation symbol family](https://help.autodesk.com/cloudhelp/2023/ENU/Revit-Customize/files/GUID-7B3C22B5-DC7C-45C9-8C3A-A75B203BFA4D.htm)
  - [ifcopenshell schema](https://pypi.org/project/ifcopenshell/)

### Inferences (proposed schema, a design suggestion rather than a sourced fact)
```json
{
  "$schema": "https://tbim.example/schema/symbol/1.0",
  "id": "TH-ARC-SEC-001",
  "version": "1.0.0",
  "status": "active",
  "discipline": "ARC",
  "category": "view_reference",
  "subcategory": "section_mark",
  "kind": "tag|symbol|marker|linework|hatch|text_style",
  "names": { "th": "สัญลักษณ์รูปตัด", "en": "Section mark" },
  "descriptions": { "th": "...", "en": "..." },
  "aliases": { "th": ["หัวรูปตัด"], "en": ["section head", "section bubble"] },
  "region_sets": ["TH", "ISO"],
  "standard_refs": [
    { "org": "ASA", "doc": "Thailand BIM Guideline 2558", "clause": null, "url": "https://asa.or.th/handbook/handbook20150427/" },
    { "org": "ISO", "doc": "ISO 128", "clause": null }
  ],
  "geometry": {
    "format": "svg",
    "svg": "<g><circle r=\"5\"/><line x1=\"-5\" x2=\"5\"/></g>",
    "units": "mm_paper",
    "paper_size_mm": { "w": 10, "h": 10 },
    "insertion_point": [0, 0],
    "scaling": "paper",
    "rotation_mode": "readable",
    "variants": { "arrow": "svg-ref:section-arrow" },
    "dxf_block_name": "TH_SEC_HEAD"
  },
  "fields": [
    { "key": "detail_no", "slot": 0, "source": "bound", "query": "{{ref.drawing.number}}", "text_style": "TH-2.5", "required": true },
    { "key": "sheet_no",  "slot": 1, "source": "bound", "query": "{{ref.sheet.number}}",  "text_style": "TH-2.5" },
    { "key": "note", "source": "free", "type": "string", "i18n": true }
  ],
  "applies_to": { "ifc_classes": ["IfcAnnotation"], "hosts": ["IfcDoor"], "views": ["PLAN_VIEW","SECTION_VIEW"] },
  "ifc_mapping": {
    "entity": "IfcAnnotation",
    "predefined_type_ifc4x3": "SYMBOL",
    "object_type": "TH-ARC-SEC-001",
    "pset": { "name": "TBIM_Annotation", "props": { "SymbolId": "TH-ARC-SEC-001" } },
    "host_relation": "IfcRelAssignsToProduct",
    "layer": "A-ANNO-SYMB"
  },
  "classification": [
    { "system": "Uniclass 2015", "table": "Ss", "code": "...", "uri": null },
    { "system": "TBIM-SYM", "code": "TH-ARC-SEC", "uri": "https://identifier.buildingsmart.org/uri/<org>/<dict>/<ver>/class/<code>" }
  ],
  "styles": { "line_style": "ls:continuous-0.25", "fill_style": "fs:white", "hatch": null, "text_styles": ["TH-2.5"] },
  "provenance": {
    "source": "US A/E/C CAD Standard R6",
    "source_url": "...",
    "licence_spdx": "LicenseRef-US-Gov-PD",
    "attribution": "...",
    "redrawn": true
  },
  "audit": { "created": "2026-09-27", "author": "...", "reviewed_by": null }
}
```
Design notes for the report writer:
1. Separate **style libraries** (line types, hatches, text styles) as their own records referenced by id. These map to `IfcCurveStyleFont`, `IfcFillAreaStyleHatching`, and text styles.
2. Multilingual:
   - Use BCP-47 keys (`th`, `en`), mirroring bSDD's `LanguageIsoCode`.
   - Keep the `id` language-neutral (ASCII).
   - Fields flagged `i18n` hold per-language values.
   - Text styles need a Thai-capable font chain.
3. Instance data belongs in the model, not the catalog: IfcAnnotation + ObjectType + psets, placement, and the host via `IfcRelAssignsToProduct`. This is the Bonsai pattern.
4. Don't depend on `IfcAnnotation.PredefinedType` when exporting IFC4, because it doesn't exist there.

### Gaps
- No published industry-standard JSON schema for annotation-symbol catalogs was found. The schema above is original synthesis.
- The Thai drafting standard clauses (ASA/มยผ.) that `standard_refs` should cite are not identified, because the Thai guideline PDFs could not be retrieved.
