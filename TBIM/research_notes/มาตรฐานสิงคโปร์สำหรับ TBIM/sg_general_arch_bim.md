# Singapore standards and conventions for construction drawings, architecture and BIM submission (for a TBIM "SG" profile)

Research date: 2026-09-27. Scope: Singapore only.

**How much to trust this evidence (read this first).** The sandbox egress proxy blocked every page fetch to *.gov.sg (corenet.gov.sg, info.corenet.gov.sg, ura.gov.sg, bca.gov.sg, scdf.gov.sg, enterprisesg.gov.sg, isomer-user-content.by.gov.sg). It also blocked singaporestandardseshop.sg, scribd, pdfcoffee, aces.org.sg, sisv.org.sg, 103east.sg, senibina.com.sg and bim.com.sg. As a result:
- Most findings below come from **search-engine snippets of the cited URLs**, not from full-text reading. They are marked "(snippet)".
- Two primary data files **were** read in full from GitHub:
  - Autodesk's IFC-SG property mapping file shipped with the Revit IFC exporter.
  - Autodesk's CP 83 layer-mapping table shipped with Revit.
  They are marked "(file read)".
- Each item carries a tag: **[standard]** (Singapore Standard or statute), **[agency]** (BCA/URA/SCDF/PUB/SLA/CORENET X requirement or guidance), **[observed_practice]** (industry or vendor practice), or **[unverified]** (plausible but not confirmed by a primary source here).

---

## Q1. CORENET X / IFC-SG and agency plan-submission requirements (BCA, URA, SCDF, PUB)

### Takeaway
- **CORENET X** is Singapore's one-stop regulatory submission platform, governed by the *Code of Practice for CORENET X*. The current edition is the Third Edition, dated September 2025.
- Mandatory use is phased: new projects of 30,000 m² GFA or more from 1 Oct 2025, then new projects of 5,000 m² GFA or more from 1 Oct 2026. Some sources say "all new projects regardless of size" from 1 Oct 2026, which conflicts with the official FAQ wording.
- BIM goes in as **IFC+SG**: IFC4 plus Singapore "SGPset_*" property sets.
- Doors, windows, spaces and storeys are identified by IFC entity plus SGPset properties. Spaces use a controlled `SpaceName` value, not free architectural names.
- For A&A (addition and alteration) drawings, URA's CAD colour convention is **Magenta = proposed/new, Cyan = existing/approved, Yellow = deleted/demolished**.

### Cited Findings

**Code of Practice (COP) for CORENET X: edition and status**
- [agency] The COP PDF file is named "corenet-x-cop---third-edition-2025-09", i.e. **Third Edition, September 2025**. A companion "Annex – Summary of Changes (COP Edition 3.1)" and a "Key Updates to CORENET X Code of Practice" PDF also exist. (snippet/URL evidence) — [COP 3rd ed PDF](https://info.corenet.gov.sg/docs/default-source/default-document-library/corenet-x-cop---third-edition-2025-09.pdf?sfvrsn=a7e34c36_5); [Annex – Summary of Changes ed.3.1](https://info.corenet.gov.sg/docs/default-source/default-document-library/annex---summary-of-changes-cop-edition-3-1.pdf?Status=Master&sfvrsn=3be9c09f_1); [Key updates to COP](https://info.corenet.gov.sg/docs/default-source/default-document-library/key-updates-to-corenet-x-code-of-practice.pdf?sfvrsn=beba456a_1); [COP landing page](https://info.corenet.gov.sg/overview/about-corenet-x/corenet-x-code-of-practice)
- [agency] The COP "details the envisaged end state of CORENET X". Because CORENET X is built with Agile methods, "features and requirements mentioned in this COP will be developed progressively". The COP complements the **IFC+SG Resource Kit**, which holds templates for the proprietary BIM tools. (snippet) — [COP PDF](https://info.corenet.gov.sg/docs/default-source/default-document-library/corenet-x-cop---third-edition-2025-09.pdf?sfvrsn=a7e34c36_5)
- [agency] The COP helps practitioners "prepare multi-agency regulatory submissions across the key submission gateways" and includes good practices for common BIM issues. (snippet) — [COP PDF (alt version)](https://info.corenet.gov.sg/docs/default-source/default-document-library/corenet-x-cop---third-edition-2025-09.pdf?sfvrsn=a7e34c36_3)

**Mandatory dates**
- [agency] Phase 1: from **1 Oct 2025**, CORENET X submission is mandatory for new projects with GFA **≥ 30,000 m²**. The source is URA circular DC25-07 together with BCA circular APPBCA-2025-20 (released 10 Sep 2025). — [URA DC25-07](https://www.ura.gov.sg/guidelines/circulars/dc25-07/); [BCA/URA joint circular APPBCA-2025-20](https://info.corenet.gov.sg/docs/default-source/bca-circulars/circular-for-corenet-x-implementation-2025464fd83c-24ac-473b-bd7d-83c4048f8d36.pdf?sfvrsn=43dad967_1)
- [agency] Phase 2, per snippets of the FAQ and URA circulars:
  - From **1 Oct 2026**, submission via the CORENET X Gateway Processes (Three-Gateway Process and Direct Submission Process) is mandatory for new projects with GFA **≥ 5,000 m²**.
  - Below 5,000 m² it is voluntary, and teams may continue on CORENET 2 "for now".
  - Phase 3, from **1 Oct 2027**: all ongoing projects are onboarded.
  - Sources: [CORENET X FAQ – implementation timeline](https://support.corenet.gov.sg/hc/en-us/articles/14813415847695-What-is-the-implementation-timeline-for-CORENET-X); [URA DC25-01 Updates to implementation plan](https://www.ura.gov.sg/guidelines/circulars/dc25-01/)
  - **Contradicted by** vendor blogs, which say "From 1 October 2026, submission via CORENET X will be mandatory for all new projects regardless of size": [Bimeco guide](https://www.bim.com.sg/blog/corenet-guide-singapore/); [CVC Engineers](https://www.cvcengineers.com/post/pe-endorsement-in-singapore-when-you-need-one-what-it-costs-and-what-s-at-stake). Treat the official FAQ and circular wording (the 5,000 m² threshold) as authoritative until the primary text is checked.
- [agency] BIM submission in IFC-SG is mandatory for new erections, or major A&A with new GFA ≥ 5,000 m², under the Gateway process. (snippet) — [CORENET X FAQ](https://support.corenet.gov.sg/hc/en-us/articles/14813415847695-What-is-the-implementation-timeline-for-CORENET-X)

**Gateways**
- [agency] There are three key Gateways: **Design, Construction and Completion**. The **Piling Gateway** is optional, for teams that want to start piling before the Construction Gateway, and can be submitted concurrently with it. (snippet) — [CORENET X submission workflows](https://info.corenet.gov.sg/regulatory-process/about-the-new-submission-process/submission-workflows); [BCA/URA circular APPBCA-2025-02](https://www.ura.gov.sg/services/download_file.aspx?f=%7B49B03AD0-4677-4601-A952-E1EA0018FA91%7D)
- [agency] At the Completion Gateway, only regulated aspects of M&E need to be modelled per the COP. Supplementary structural drawings, detailed calculations and AC/ACO reports are still required for "Part ST" submissions. This implies 2D drawings and PDFs continue alongside the model for some parts. (snippet) — [Key updates to COP](https://info.corenet.gov.sg/docs/default-source/default-document-library/key-updates-to-corenet-x-code-of-practice.pdf?sfvrsn=beba456a_1)

**IFC+SG schema and property sets (file read)**
- [agency] IFC+SG is "Singapore's extension of the internationally-recognized IFC4 schema", with extra parameters for regulatory agencies. The **IFC+SG Excel Mapping File** defines the entities, SGPsets, properties and controlled values required. — [What is IFC+SG](https://info.corenet.gov.sg/ifc-sg/start-here/WhatIsIFCSG); [IFC+SG Excel Mapping File](https://info.corenet.gov.sg/ifc-sg/requirements---submission/ifc-sg-excel-mapping-file); [IFC+SG Data Structure](https://info.corenet.gov.sg/ifc-sg/requirements---submission/ifcsg-data-structure); [CORENET X FAQ – IFC format](https://support.corenet.gov.sg/hc/en-us/articles/13750763606671-What-is-the-IFC-format-supported-in-CORENET-X-submissions)
- [agency, file read] Autodesk's Revit IFC exporter ships "IFC-SG Property Mapping Export.txt" (1,951 lines, 152 PropertySet definitions). Selected sets relevant to annotation and tagging:
  - **SGPset_Door** (IfcDoor): 48 properties, e.g. `BarrierFreeAccessibility`, `FireAccessOpening`, `MainEntrance`, `SingleLeaf`, `SwingOut`, `PowerOperated`, `SelfLocking`, `OpeningSize`, `Orientation`, `TransomFireRating`, `WithFanlight`, `ExternalReference`.
  - **SGPset_DoorDimension**: `Width`.
  - **SGPset_Window** (IfcWindow): `OperationType`, `PercentageOfOpening`, `FireAccessOpening`, `Fixed`, `WithFanlight`, `ShadingCoefficient`, etc.
  - **SGPset_WindowDimension**: `InnerDiameter`, `OuterDiameter`.
  - **SGPset_Space** (IfcSpace): **`SpaceName`** [Label], `PurposeGroup`, `BarrierFreeAccessibility`, `SeatingCapacity`, `ConstructionPhase`, `EmergencyUse`, etc.
  - **SGPset_SpaceDimension**: `Area`, `Height`, `Volume`.
  - **SGPset_SpaceArea_GFA**: `DetailedUse`, `MasterplanUseType`.
  - **SGPset_SpaceFireSafetyRequirements**: `FireExit`, `AirPressurization`, `SprinklerProtectionAutomatic`, `FlammableStorage`.
  - **SGPset_BuildingStorey** (IfcBuildingStorey): `GroundLevel`, `RoofLevel`, `MezzanineLevel`, `AtticLevel`, `TypicalFloor`, `RefugeFloor`, `DesignatedFloor`, `AlternateDesignatedFloor`, `AlternateLiftHomingFloor`, `PurposeGroup`, `OccupancyType`.
  - **SGPset_Wall**: includes **`ReferToDrawingNumber`** [Label] and **`ReferTo2DDetail`** [Boolean], which link the model to 2D detail sheets.
  - Structural sets (SGPset_BeamDimension, ColumnDimension, PileDimension) carry **`Mark`** [Label]. ColumnDimension also has `StartingStorey`/`EndStorey`.
  - No SGPset targets IfcGrid or IfcAnnotation.
  - Sources: [Autodesk/revit-ifc – IFC-SG Property Mapping Export.txt](https://github.com/Autodesk/revit-ifc/blob/master/Install/Program%20Files%20to%20Install/IFC-SG%20Property%20Mapping%20Export.txt); [raw file](https://raw.githubusercontent.com/Autodesk/revit-ifc/master/Install/Program%20Files%20to%20Install/IFC-SG%20Property%20Mapping%20Export.txt)
- [observed_practice] Spaces must use the official IFC-SG SpaceName enumeration, e.g. "Office", not "CEO Office". Non-standard names fail schema validation, and occupant-load factors cannot be computed. Common failures include:
  - doors without a fire rating;
  - spaces with null OccupantLoad;
  - walls mapped to Pset_WallCommon instead of SGPset_*.
  - CORENET X auto-rejects models that lack mandatory SGPset parameters before an officer reviews them.
  - (snippet; vendor) — [& Senibina SCDF lookup](https://senibina.com.sg/corenet-x-lookup/scdf); [& Senibina IFC checking blog](https://senibina.com.sg/blog/ifc-file-checking-corenet-x)
- [observed_practice] Open-source third-party mapping JSONs per agency (BCA, SCDF, NEA) list SGPset_Door properties by agency. Examples: SCDF – `FireAccessOpening`, `OperationType`; BCA – `PowerOperated`, `VisionPanel`; NEA – `MainEntrance`. — [JHJHJHJH/COREY industry-mapping JSONs (GitHub)](https://github.com/JHJHJHJH/COREY/tree/main/public/resources)

**Levels, storeys and grids in the model**
- [agency] All disciplines must adopt a coordinated set of levels and zones with **identical names**. "Only multi-disciplinary models with identical names and 'Z' values for levels will be processed" in the CORENET X Collaboration Platform. (snippet) — [CORENET X – Checking Levels (Z-coordinates)](https://info.corenet.gov.sg/ifc-sg/model-setup-and-coordination/checking-levels-(z-coordinates))
- [observed_practice] Inconsistent level names across disciplines, such as "01-FIRST FLOOR" vs "L1", are cited as a common coordination failure. (snippet) — [same CORENET X page](https://info.corenet.gov.sg/ifc-sg/model-setup-and-coordination/checking-levels-(z-coordinates)); [& Senibina](https://senibina.com.sg/corenet-x-lookup/bca)

**Geo-referencing**
- [agency] Submission BIM models should use **SVY21** for Easting/Northing (x, y) and **Singapore Height Datum (SHD)** for height (z). (snippet) — [URA – Geo-referencing BIM submissions](https://www.ura.gov.sg/guidelines/best-practices/geo-referencing-bim-submissions/)
- [agency] The older BCA *Code of Practice for BIM e-Submission* states: "All elements shall be geo-referenced to global coordinates (as per SVY21) for x-y coordinates and in Singapore Height Datum (SHD) for z coordinate." (snippet) — [CP for BIM e-Submission (CORENET, CS v1)](https://www.corenet.gov.sg/media/2032996/3_cp_for_bim-esubmission_cs_v1.pdf)

**URA CAD submission conventions (legacy CORENET 2; also shows URA colour intent)**
- [agency] For A&A or amendment proposals (snippet of URA CAD guideline):

  | Element | Colour | DWG ACI | DGN |
  |---|---|---|---|
  | Proposed/additional | **Magenta** | 6 | 5 |
  | Existing/approved | **Cyan** | 4 | 7 |
  | Deleted | **Yellow** | 2 | 4 |

  Other rules: no hidden layers; formats .dwg/.dgn/.rvt/.pla; xrefs bound; no raster images. — [URA Guidelines for submission of CAD files](https://www.ura.gov.sg/Corporate/Guidelines/Development-Control/Planning-Permission/~/media/5E09E71E0AA04496BF89744458693403.ashx); [URA reminder to comply with CAD guidelines](https://www.ura.gov.sg/guidelines/best-practices/cad-submission-guidelines/)
- [agency] For A&A, only the affected areas need full detail. Other parts of the existing development need only the building outline (unless GFA for the whole development is recomputed). — [URA CAD guidelines](https://www.ura.gov.sg/Corporate/Guidelines/Development-Control/Planning-Permission/~/media/5E09E71E0AA04496BF89744458693403.ashx)
- [agency] URA also has "Submission Guidelines for Digital Calculation Plans" (GFA plans). Content was not retrieved. — [URA digital calculation plans guideline](https://www.ura.gov.sg/uol/~/media/4CD9B0787E144A069E2EEE63BB48AB80.ashx); [URA GFA Verification submission guidelines](https://www.ura.gov.sg/eservices-info/development-control/gfasubmissionguidelines/)

**SCDF**
- [agency] Fire Code 2023 is the current SCDF code. Amendment batches so far:
  - 1st: Mar 2024
  - 2nd: Sep 2024
  - 3rd: Mar 2025
  - 4th: circular 1 Sep 2025
  - 5th: grace period 2 Mar–2 Sep 2026
  - 6th: circular hosted by REDAS, 2026
  - Sources: [SCDF Fire Code 2023](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023); [4th batch circular](https://info.corenet.gov.sg/docs/default-source/scdf-circulars/20250901_circular-amendments-to-fire-code-2023---4th-batch-of-amendments.pdf?sfvrsn=ffc2b8db_1); [5th batch circular](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/downloads/circulars/circular-amendments-to-fire-code-2023-5th-batch-of-amendments.pdf?sfvrsn=361c2e5c_3); [6th batch (REDAS copy)](https://redas.com/wp-content/uploads/2026/09/circular-amendments-to-fire-code-2023-6th-batch-of-amendments-1.pdf)
- [agency] SCDF publishes a "Fire Safety Checklist for Building Plan Submissions". Content was not retrieved. — [SCDF checklist PDF](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/downloads/forms/fire-safety-checklist-for-building-plan-submissions.pdf?sfvrsn=83f335a6_9)
- [observed_practice] Consultancy blogs say:
  - fire door, fire shutter and compartmentation colour-coding legends must be consistent on every sheet;
  - SCDF expects metric scales, gridlines and a drawing list;
  - escape routes, corridors and exit staircases are highlighted "using appropriate colours, directional signs and words".
  - No specific colour values were found. (snippet) — [structures.com.sg – SCDF submission requirements](https://structures.com.sg/scdf-submission-requirements-contractors/); [Aman Engineering – QP guide to SCDF plan](https://www.amanengineering.com.sg/the-flawless-qps-guide-to-scdf-plan/)

**Legacy BIM guides**
- [agency] **Singapore BIM Guide Version 2** was published by BCA in 2013. The BIM e-Submission Guidelines (architectural, C&S, MEP) and templates came from the CORENET-era BIM e-submission. The "BIM Essential Guide" series was also issued by BCA. — [Singapore BIM Guide v2 PDF](https://info.corenet.gov.sg/docs/default-source/bim-guides/singapore/singapore-bim-guide_v2.pdf); [BCA BIM links](https://www.bca.gov.sg/bim/bimlinks.html); [BIM Submission Guideline v3.5 (Jan 2010)](https://corenet.gov.sg/media/586032/BIM_Submission_Guideline-v3-5-_Jan10-Official-Release-.pdf)
- [agency] **HDB BIM Guide Version 2.0, July 2015** exists. Content was not retrieved. — [HDB BIM Guide v2.0](https://www.hdb.gov.sg/-/media/doc/BQG/bim-guide-v2.pdf)

### Inferences
- TBIM's SG profile should do three things:
  - Export IFC4 with SGPset_* property sets.
  - Enforce a controlled `SpaceName` list on room tags. The room tag can show a free-text display name, but the IFC value must be the enumerated one.
  - Keep one project-wide level table with identical names and Z values in SHD.
- Door and window tags in Singapore practice show a type mark (e.g. D1, W1). IFC+SG adds no Singapore-specific "Mark" property for doors and windows, so the tag should use standard IFC `Tag`/`Name` or `Pset_DoorCommon.Reference` (standard IFC4, not verified here).
- A default "A&A colour" preset of Magenta (ACI 6) = new, Cyan (ACI 4) = existing, Yellow (ACI 2) = demolished is well supported by both the URA CAD guideline and CP 83-5.

### Gaps
- The full COP 3rd ed. text could not be read (proxy block), so the following are unknown:
  - required 2D drawing sheets and scales per gateway;
  - north point and legend rules;
  - the COP's exact storey-naming rules;
  - the IFC+SG "SpaceName" value list;
  - whether 2D PDFs must be generated from the model.
- The SCDF colour conventions for fire compartments, exits, fire-rated walls and doors were not found in primary text.
- A BCA/URA list of required plan scales (e.g. 1:100 plans / 1:1000 location plan) was not confirmed.
- It was not confirmed whether IfcGrid or grid naming (e.g. numbers vs letters) is regulated in IFC+SG.

---

## Q2. SS CP 83 (Construction CAD) and SS ISO technical-drawing adoptions

### Takeaway
- **CP 83 has five parts**:
  1. Layers
  2. CAD symbols
  3. File naming
  4. Drafting conventions (sheet sizes/title block, plot scales, hatches, linetypes, abbreviations)
  5. Colour and linetype
- All five were **confirmed with amendment in 2026**: public comment 5 Dec 2025–6 Jan 2026, amendments dated around Feb–Mar 2026.
- CP 83 was made mandatory for URA electronic submissions from 1 Aug 2006.
- Singapore also carries old adoptions **SS ISO 128:1982** and **SS ISO 406:1987**, and sells ISO 19650.

### Cited Findings

**CP 83 editions (2026)**

| Part | Title | Current edition (2026) | Previous |
|---|---|---|---|
| 1 | Organisation and naming of CAD layers | **CP 83-1:2004(2026)+A1:2026** | CP 83-1:2004 (2020) |
| 2 | CAD symbols | **CP 83-2:2000(2026)+A2:2026** | CP 83-2:2000 (2020) |
| 3 | Organising and naming of CAD files | **CP 83-3:2001(2026)+A1:2026** | CP 83-3:2001 (2020) |
| 4 | CAD drafting conventions | **CP 83-4:2001(2026)+A1:2026** | CP 83-4:2001 (2020) |
| 5 | Colour and linetype | **CP 83-5:2001(2026)+A1:2026** | CP 83-5:2001 (2020); earlier CP 83:Part 5:2001(2015)+C1:2017 |

- [standard] Part 1: [eShop CP 83-1:2004(2026)+A1:2026](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/239ec7aa-0210-491c-81c1-3931fc4e9e75); [CP 83-1:2004 (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/ce9e9f67-db4b-471c-b60a-d928a9ac4039)
- [standard] Part 2: [eShop CP 83-2:2000(2026)+A2:2026](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/88a13125-7ec9-459c-be92-338552a31d6c); [CP 83-2:2000 (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/138e9eb3-8ecb-4e86-8fbb-482ee3a9cbce)
- [standard] Part 3: [CP 83-3:2001 (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/0acde4d9-479a-4de6-b4d6-9dda6a2aeb0c)
- [standard] Part 4: [CP 83-4:2001 (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/36da02f3-b8ad-45d7-a985-1a41724f5a96); [Amd 1 to CP 83-4 (file dated 2026-03-27)](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=260327113535Amd+1+to+CP+83-4.pdf&pdtid=440a72be-55ae-499b-b6ff-d1ab460d373f)
- [standard] Part 5: [CP 83-5:2001 (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/c7e02284-7e86-4e20-af21-4cc761b80363); [Amd 1 to CP 83-5](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=260327114043Amd+1+to+CP+83-5.pdf&pdtid=aa5fda6f-4d15-42d1-9443-819a352f14a6); [Part 5 2015+C1:2017 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180331133455CP+83-5-2001+%282015%29%28plus%29Corr1_Preview.pdf&pdtid=c7e02284-7e86-4e20-af21-4cc761b80363)
- [standard] The 2026 editions were confirmed with amendment. Public comment ran 5 Dec 2025–6 Jan 2026, and confirmation was around 6 Feb 2026 (snippet). Amendment PDFs carry file timestamps of 27 Mar 2026. The Amd 1 to CP 83-4 reportedly updates the plot-scale and abbreviation annexes (snippet; not verified). — [ACES notice of SS for public comment, Dec 2025](http://aces.org.sg/wp-content/pdf/2025/384_2025-Singapore%20Standards%20for%20Public%20Comment%20-%20Dec%202025.pdf); [CORENET X PC notice 5 Dec 2025](https://info.corenet.gov.sg/docs/default-source/corenet-x-event/pc-notice---5-dec-2025-v2.pdf?sfvrsn=6b9b2823_1); [Gazette notice 13 Mar 2026 No.1364](https://assets.egazette.gov.sg/2026/Government%20Gazette/Notices%20under%20other%20Acts/1364.pdf)

**What each part standardises**
- [standard] **Part 1 (layers)** gives concepts, categories, formats and codes for layer names, to "facilitate communication, data management and submission to approving agencies". Fields cover originator, element, presentation, status and optional information.
  - A snippet gives the mandatory fields as agent responsible (2 characters), element (6) and presentation (2); optional fields are status, sector, phase, projection, scale and work package.
  - This matches the ISO 13567 structure, so the snippet may describe ISO 13567 rather than CP 83. Unverified.
  - Sources: [CP 83-1 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180331124755CP+83-1-2004+%282015%29_Preview%28vA1383282%29.pdf&pdtid=ce9e9f67-db4b-471c-b60a-d928a9ac4039); [Scribd CP83 Part1 2004](https://www.scribd.com/doc/116804718/CP83-Part1-2004); [MorphoCAD ISO 13567](https://morphocad.com/guides/iso-13567-layer-standard)
- [observed_practice, file read] Revit ships a **CP83 layer-mapping table** ("exportlayers-dwg-CP83.txt"). Autodesk's interpretation of CP 83 layer names:

  | Revit category | Layer | Colour |
  |---|---|---|
  | Walls | `A-_WALL----_E` | 2 |
  | Walls, hidden lines | `A-_WALL----_H` | |
  | Doors | `A-_DOOR----_E` | 1 |
  | Door Tags | `A-_DOOR----_A` | 6 |
  | Windows | `A-_WIND----_E` | 6 |
  | Window Tags | `A-_WIND----_A` | 6 |
  | Grids | `A-_ANOTGRID_E` | 1 |
  | Levels | `A-_FLORLEVL_E` | 6 |
  | Sections / Callouts / Matchline | `A-_ANOTSYBL_E` | 6 |
  | Room/Area Tags | `A-_ROOMNAME_A` | 2 |
  | Text Notes | `A-_ANOTTEXT_A` | 2 |
  | Dimensions and Spot Elevations | `A-ANOT----_D` | 1 |
  | Title Blocks | `A-ANOTTBLK_E` | |
  | Stairs | `A-_STRC----_E` | |
  | Stair UP/DOWN text | `A-_STRC----_A` | |
  | Columns | `A-_COLN----_E` | |
  | Floors | `A-_FLOR----_E` | |
  | Curtain panels | `A-_CLAD----_E` | |

  - Suffix letters seen: E = element graphics, A = annotation/text, D = dimensions, H = hidden, T = tags (casework).
  - The file was also listed in Revit's export options as "CP83 – Singapore standard 83" alongside AIA, ISO13567 and BS1192.
  - Sources: [RevitSdkSamples exportlayers-dwg-CP83.txt](https://github.com/jeremytammik/RevitSdkSamples/blob/master/snapshot/2024/REX%20SDK/Samples/DRevitFreezeDrawing/DRevitFreezeDrawing/Configuration/exportlayers-dwg-CP83.txt); [ExportDWGOptionsData.cs](https://github.com/jeremytammik/RevitSdkSamples/blob/master/SDK/Samples/ImportExport/CS/Export/ExportDWGOptionsData.cs)
- [standard] **Part 2 (CAD symbols)** is "a standard set of 2D graphical symbols to represent entities of building components" in three groups: architectural; civil & structural; and M&E. No geometry was retrievable. — [CP 83-2:2000 (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/138e9eb3-8ecb-4e86-8fbb-482ee3a9cbce); [Scribd CP 83 Part 2 2000](https://www.scribd.com/document/532358122/CP-83-part-2-2000-Construction-Computer-Aided-Design-CAD); [Facebook post "CP-83 Part 2 CAD symbols"](https://www.facebook.com/100057049045937/posts/cp-83code-of-practice-forconstruction-computer-aided-designcadpart-2-cad-symbols/1067033060504518/)
- [standard] **Part 3 (file naming)** sets "general principles and formats for the naming of CAD files". Fields: **project name, discipline, type of work, view, author, revision**. The author field is 2 alphanumeric characters. It includes example directory structures. — [Scribd CP 83-3 preview](https://www.scribd.com/document/231246370/CP-83-3-2001-Preview); [Studocu CP 83 Part 3](https://www.studocu.com/sg/document/singapore-polytechnic/naval-architecture/cp-83-part-3-2001-code-of-practice-for-cad-file-naming/153228085)
- [standard] **Part 4 (drafting conventions)** is "a set of drafting conventions to be used by all parties in building industry ... preparing and using technical documentation by means of CAD". Annexes:
  - A.1 Sheet sizes and title block
  - A.2 Standard plot scales
  - A.3 Hatch patterns
  - A.4 Line-type representation
  - A.5 Abbreviations
  - Sources: [CP 83-4 preview (2001)](https://www.singaporestandardseshop.sg/data/ECopyFileStore/060419163832Preview%20-%20CP%2083-4-2001.pdf); [CP 83-4 (2015) preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180331133348CP+83-4-2001+(2015)_Preview.pdf&pdtid=36da02f3-b8ad-45d7-a985-1a41724f5a96); [Scribd CP 83 Part 4](https://www.scribd.com/document/827689902/CP-83-Part-4-2001)
- [standard] **Part 5 (colour and linetype)** gives colour and linetype usage per discipline.
  - The colour standard was changed from Red/Blue/Yellow to **Magenta/Cyan/Yellow**: Red becomes Magenta, Blue becomes Cyan. This is consistent with URA's A&A colours.
  - Part 5 also adds layer names for digital submission.
  - "CP 83 was made mandatory for electronic submissions to URA with effect from 1st August 2006."
  - (snippet) — [Scribd CP 83 Part 5](https://www.scribd.com/document/827689715/CP-83-Part-5-2001); [CP 83-5 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180331133455CP+83-5-2001+%282015%29%28plus%29Corr1_Preview.pdf&pdtid=c7e02284-7e86-4e20-af21-4cc761b80363)

**SS ISO / ISO for technical drawing and BIM**
- [standard] **SS ISO 128:1982** (Technical drawings – general principles of presentation) and **SS ISO 406:1987** (Technical drawings – tolerancing of linear and angular dimensions) are listed on the SS eShop. These are old identical adoptions. — [SS ISO 128:1982](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/12791838-b8c9-46e5-a393-a31105ccf570); [SS ISO 406:1987](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/2122381d-e798-4802-a4ae-17348ad1a5cc)
- [standard] The eShop also sells the international ISO 19650-4:2022 and ISO 19650-5:2020, as ISO, not SS ISO. — [ISO 19650-4 on SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/4f778e71-e006-25a9-f44a-3a05a1891c10); [ISO 19650-5](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/7df88d63-2345-9432-d084-39fc449f60ef)
- [observed_practice] buildingSMART Singapore runs a Design Work Group (DWG) related to these standards. — [bSSG DWG](https://www.buildingsmartsingapore.org/work-groups/design-work-group-dwg/)

### Inferences
- In this profile, the name "SS CP 83" is correct usage for "CP 83", a Singapore Standard code of practice. The current citation form is e.g. "CP 83-4:2001(2026)+A1:2026".
- A TBIM SG profile can reasonably ship three presets:
  - a CP 83 layer mapping (the Revit CP83 table is a practical, verifiable seed);
  - the CP 83-5 / URA colour scheme;
  - the CP 83-4 sheet sizes (ISO A-series presumed) and plot scales.
- No SS ISO adoption of ISO 7519, ISO 4157 or ISO 13567 was found. Symbol geometry for Singapore office practice therefore likely comes from CP 83-2 plus BS/ISO lineage (BS 1192 / BS 8888 / ISO 128 conventions). Unverified.

### Gaps
- The actual symbol geometry in CP 83-2 (e.g. level datum symbol, grid bubble diameter, section marker form, north point) could not be retrieved, because every copy is behind the eShop or scribd (blocked).
- The exact CP 83-4 lists of plot scales, sheet sizes and title-block zones, and the abbreviation list, were not retrieved.
- The exact CP 83-1 field definition was not retrieved. It is unclear whether it is ISO 13567-derived, and what "A-_" means in Autodesk's table.
- The content of the 2026 amendments (A1/A2) is unknown.
- No SS adoption of ISO 7519, ISO 4157, ISO 9431 or ISO 3766 was found.

---

## Q3. Title block, endorsement and professional seals (QP, RA, PE)

### Takeaway
- Singapore statutes (Architects Act 1991 / Architects Rules; Professional Engineers Act 1991 / PE Rules) restrict the preparation and endorsement of plans to registered architects or PEs holding a current practising certificate.
- Plans are endorsed by the **Qualified Person (QP)**.
- The exact physical or digital seal format (wording, dimensions, registration-number pattern) could **not** be retrieved from primary text.

### Cited Findings
- [standard] Under the Architects Act, no person shall draw or prepare "any architectural plan, drawing, tracing, design, specification or other document intended to govern the construction, enlargement or alteration of any building" unless they are a registered architect with a practising certificate, or work under the direction or supervision of one. (snippet) — [Architects Act 1991 (SSO)](https://sso.agc.gov.sg/Act/AA1991); [BOA FAQ](https://www.boa.gov.sg/faq/)
- [standard] The Architects Rules 1991 (made under s.38; revised edition 30 May 2025) and the Architects (Professional Conduct and Ethics) Rules 2001 are the subsidiary legislation. Seal provisions were not retrieved. — [Architects Rules 1991](https://sso.agc.gov.sg/SL/AA1991-R1); [Rules 2025 rev PDF](https://sso.agc.gov.sg/SL-Rev/AA1991-R1/Published/20250530?DocDate=20250530&ViewType=Pdf&_=20250805012028); [BOA Rules and laws](https://www.boa.gov.sg/who-we-are/rules-and-laws/)
- [standard] The Professional Engineers Board (PEB) is a statutory board under MND, established in 1971 under the Professional Engineers Act. A practising certificate is renewed annually and authorises work in the PE's branch. — [PE Act 1991](https://sso.agc.gov.sg/Act/PEA1991); [PEB](https://www1.peb.gov.sg/); [PE Rules 1971 PDF](https://isomer-user-content.by.gov.sg/422/5b7b519a-2397-436d-a06d-ebe7ae600494/perule71.pdf)
- [observed_practice] PE-endorsed documents are "stamped with the PE seal and PEB registration number, signed, and delivered electronically". (vendor blog) — [QP.sg PE endorsement](https://qp.sg/pe-endorsement.html); [structures.com.sg PE guide](https://structures.com.sg/the-professional-engineer-singapore-guide-endorsement-responsibilities-liabilities/)
- [observed_practice] Building plans (BP) and structural plans (ST) are separate BCA submissions endorsed by the respective QP (architect or PE). (vendor blog) — [TCA – BP and ST in BCA submission](https://tcadesignbuild.com/blog/f/understanding-bp-and-st-in-bca-drawings-submission); [BCA Structural Plan submission](https://www1.bca.gov.sg/safety-and-standards/applications-and-licenses/structural-plan-submission/)
- [agency] The Register of Architects is publicly searchable. — [BOA Register](https://www.boa.gov.sg/find-architects/register-of-architects/)

### Inferences
- The TBIM SG title block should provide fields for:
  - QP name
  - QP role (Architect / PE (Civil) / PE (Mech/Elec))
  - Registration number
  - Firm name
  - Signature/seal placeholder
  - Project reference / CORENET X project number
- Since CORENET X is a digital channel, a seal placeholder area is more useful than a rendered seal graphic.
- Do not fabricate a registration-number pattern: make it a free-text field.

### Gaps
- No primary text was found for seal specifications (PE Rules schedule, Architects Rules) or for the registration-number format (e.g. whether PE numbers are plain integers).
- It was not confirmed whether CORENET X requires digital signatures on PDF sheets or relies on portal authentication (Corppass/Singpass). Not retrieved.

---

## Q4. Units and datums (mm, SHD, SVY21, platform levels)

### Takeaway
- Model and plan coordinates use **SVY21 / Singapore TM (EPSG:3414)**. Heights use **Singapore Height Datum (SHD; EPSG datum 1140, height CRS EPSG:6916)**. The combined CRS is EPSG:6927.
- The pre-2015 practice used a **false datum of +100 m** ("PWD datum" / "AMSL", e.g. "104.500 mRL"). SHD is a 0.000 m datum, mandated for survey plans from **15 June 2015**.
- An SG level tag should therefore support both "xx.xxx SHD" and legacy "1xx.xxx RL".

### Cited Findings
- [standard] **EPSG:3414 SVY21 / Singapore TM**:
  - Transverse Mercator
  - latitude of origin 1°22′ N (1.3666667°)
  - central meridian 103°50′ E (103.8333333°)
  - scale factor 1.0
  - false easting **28001.642 m**
  - false northing **38744.572 m**
  - WGS 84 ellipsoid
  - axis order N, E
  - Sources: [epsg.io 3414](https://epsg.io/3414); [spatialreference.org 3414](https://spatialreference.org/ref/epsg/3414/)
- [standard] SHD is registered as EPSG datum 1140 and SHD height as EPSG:6916. Compound CRSs: EPSG:6927 "SVY21 / Singapore TM + SHD height" and EPSG:6917 "SVY21 + SHD height". — [epsg.org SHD datum 1140](https://epsg.org/datum_1140/Singapore-Height-Datum.html); [epsg.io 6916](https://epsg.io/6916); [epsg.io 6927](https://epsg.io/6927); [epsg.io 6917](https://epsg.io/6917)
- [agency] SLA introduced SHD in 2015. For survey plans, SHD applies to all jobs submitted to the Chief Surveyor from **15 June 2015** (Chief Surveyor's Circular 2/2015). The old false datum of **+100 m ("PWD Datum")** had been used in topographic, engineering and building contracts. SHD "should be adopted for all new contracts henceforth where heights are concerned". (snippet) — [LSB notice (sgnyss mirror)](https://sgnyss.wordpress.com/2016/02/10/lsb-notice-singapore-height-datum-shd-in-survey-plans-implementation-advice/); [SISV copy of LSB notice](https://www.sisv.org.sg/Publications/CS_Circular/LSB%20NOTICE%20ON%20SHD%20IN%20SURVEY%20PLANS%20%20IMPLEMENTATION%20ADVICE_RS%20(2).pdf); [FIG 2015 – Khoo, SLA, SHD paper](https://fig.net/resources/proceedings/2015/2015_07_vrfp_comm5/5A_Khoo_Singapore_Height_Datum.pdf)
- [observed_practice] An architect's glossary says:
  - "AMSL" is a datum at 100.00 m, so "AMSL of 104.5" means 4.5 m above sea level.
  - SHD is at 0.000 m.
  - "Since the year 2019, most authorities in Singapore now use the term Singapore Height Datum or SHD to replace AMSL."
  - (snippet) — [103 EAST – SHD](http://www.103east.sg/architectural-dictionary/s/singapore-height-datum-shd/); [103 EAST – AMSL](http://www.103east.sg/architectural-dictionary/a/amsl/)
- [agency] The LSB Directives on Land Survey and Geomatics Practices 2022 require reduced levels to be established from SLA Vertical Control Points (VCP) in SHD. (snippet) — [LSB Directives 2022](https://lsb.mlaw.gov.sg/files/LSB_Directives_ver1.pdf)
- [agency] SLA SiReNT and the SGEOID09 geoid model are used for GNSS heights. — [SLA SiReNT SGEOID09](https://app.sla.gov.sg/sirent/About/SGEOID09)
- [agency / unverified] PUB Code of Practice on Surface Water Drainage:
  - 7th Edition, Dec 2018, with Addendum No. 3 of Apr 2025 per an aggregator. It sets Minimum Platform Levels (MPL).
  - An aggregator gives MPL values of "104.5 m RL (Northern coast) / 104.0 m RL (Southern coast)". These are unverified and appear to use the +100 m RL convention.
  - A new PUB Code of Practice on Coastal Protection was reportedly introduced 17 Jun 2026 (aggregator; unverified).
  - Sources: [PUB COP page](https://www.pub.gov.sg/Professionals/Resources/Code-of-Practices); [PUB COP on Surface Water Drainage PDF](https://www.pub.gov.sg/-/media/PUB/PDF/Compliance/Earth-Control-Measures/Code-of-Practice-on-Surface-Water-Drainage.pdf); [aectechnicalsg 2026 guide (aggregator)](https://www.aectechnicalsg.com/pub-drainage-requirements-in-singapore-2026-guide/); [URA DC16-16 MPL landed housing (archived)](https://www.ura.gov.sg/guidelines/archived-circulars/dc16-16/)
- [observed_practice] FFL (finished floor level), SFL/SSL (structural floor/slab level) and "+"/"−" prefixes are the common level abbreviations, from BS/UK lineage. General, not Singapore-specific. — [draftsperson blog FFL](https://blog.draftsperson.net/what-does-ffl-mean-on-a-drawing/); [Archinect FFL vs SFL vs SSL](https://archinect.com/forum/thread/150178787/arhitectural-drawing-levels-ffl-vs-sfl-vs-ssl)

### Inferences
- Dimensions are in mm, and levels in metres to 3 decimals. This is standard SG/UK practice, but no primary SG text quoting it was retrieved, so treat it as observed_practice.
- A TBIM level tag format for SG might be `FFL 4.500 SHD`, or legacy `FFL 104.500` (RL, +100 m).
- A project setting "Height datum: SHD (0 m) | Legacy RL (+100 m)" avoids silent 100 m errors.
- The CORENET X rule that levels be "identical names and Z values" across disciplines implies that TBIM should store levels in SHD metres and generate tags from them.
- For MPL, TBIM should not hard-code values. Expose a "PUB MPL" reference line whose value the user enters.

### Gaps
- It was not confirmed whether the SHD-to-old-RL conversion is exactly −100.000 m or includes a small datum shift. The FIG/SLA paper was not read.
- The current PUB MPL numeric rule was not verified in primary text.
- No primary SG source was found prescribing the level-annotation text format (e.g. "FFL +4.500 mSHD").

---

## Q5. Common Singapore office practice (markers, grids, tags, sheets, status, revisions)

### Takeaway
- No Singapore-specific primary standard for section/elevation marker geometry, grid bubbles, door/window/room tags, sheet numbering, drawing status stamps or revision conventions was retrievable.
- CP 83-2 (symbols) and CP 83-4 (drafting conventions, title block, abbreviations) are the documents that would govern these, but their content is paywalled or blocked.
- Practice follows BS/UK lineage, with Singapore-specific layer and colour presets.

### Cited Findings
- [standard] CP 83-4 Annex A.1 covers sheet sizes and title block; A.5 covers abbreviations. CP 83-2 covers architectural symbols. — [CP 83-4 preview](https://www.singaporestandardseshop.sg/data/ECopyFileStore/060419163832Preview%20-%20CP%2083-4-2001.pdf); [CP 83-2 (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/138e9eb3-8ecb-4e86-8fbb-482ee3a9cbce)
- [observed_practice, file read] Autodesk's CP83 table puts Sections, Callouts and Matchlines on a single "ANOTSYBL" (annotation symbol) layer, and Grids on "ANOTGRID". Door, window and room tags sit on the element layer with the `_A` annotation suffix (e.g. `A-_DOOR----_A`). — [exportlayers-dwg-CP83.txt](https://github.com/jeremytammik/RevitSdkSamples/blob/master/snapshot/2024/REX%20SDK/Samples/DRevitFreezeDrawing/DRevitFreezeDrawing/Configuration/exportlayers-dwg-CP83.txt)
- [observed_practice] Singapore project stages produce tender or contract drawings, then construction drawings ("good for construction"). Drawing-register templates circulate. — [koontakhong.com – types of drawings issued](https://koontakhong.com/2024/05/23/types-of-drawings-issued-in-construction-project-and-contractual-implications/); [Swing Architects – tender process](https://www.swingarchitects.com/articles-what-goes-on-in-a-tender-process/); [Scribd drawing register template](https://www.scribd.com/document/522637410/CP-6-4-F4-Drawing-Register)
- [agency, file read] IFC+SG includes `SGPset_Wall.ReferToDrawingNumber` and `ReferTo2DDetail`. These imply regulators expect model-to-sheet cross-referencing by drawing number. — [Autodesk IFC-SG mapping](https://github.com/Autodesk/revit-ifc/blob/master/Install/Program%20Files%20to%20Install/IFC-SG%20Property%20Mapping%20Export.txt)
- [observed_practice] NTU (a Singapore university owner) publishes "As-built drawings and BIM standards", showing that owner-specific CAD/BIM standards exist on top of CP 83. Content was not retrieved. — [NTU as-built drawings and BIM standards](https://www.ntu.edu.sg/docs/default-source/odfm-documents/as-built-drawings-and-bim-standards.pdf?sfvrsn=f7c5fa10_2)

### Inferences
These are unverified and intended as TBIM defaults to be confirmed by the user's firm:
- **Grid bubbles:** circles with numbers along one axis and letters along the other, BS/UK style.
- **Section/elevation markers:** circle split horizontally, with the drawing ref on top and the sheet number below, plus an arrow.
- **Door/window tags:** e.g. D1, W1 in a box or hexagon, mapped to IFC `Tag`.
- **Room tags:** display name plus the IFC+SG SpaceName plus area in m².
- **Sheet numbering:** discipline prefix per CP 83-3 discipline codes (e.g. A-, S-, M-/E-).
- **Status stamps:** "PRELIMINARY / FOR APPROVAL / FOR SUBMISSION / FOR TENDER / FOR CONSTRUCTION / AS-BUILT".
- **Revisions:** letter or number revision column with date and description, and revision clouds on the Revit CP83 layer `A-_--------_A-`.

### Gaps
- There is no primary SG source for:
  - marker or bubble geometry (sizes, text heights);
  - the exact status wording;
  - the revision-code scheme;
  - the sheet-numbering scheme.
- CP 83-3 discipline and view codes (which would define sheet or file prefixes) were not retrieved.
- Recommended next steps:
  - obtain the CP 83 parts from the SS eShop (the purchase is paid);
  - ask the user's firm for its office CAD/BIM manual;
  - obtain the COP 3rd ed. PDF, the IFC+SG Excel mapping file and the SCDF building-plan checklist from a network that can reach *.gov.sg.
