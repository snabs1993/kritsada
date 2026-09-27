# International and National Standards for Annotation Symbols and Drafting Conventions (General / Architecture / Structure / Civil): A Comparative Catalog for TBIM

Research date: 2026-09-27. Method note: web *search* worked, but *page fetches* were blocked by the network egress proxy for nearly every primary host (iso.org, nationalcadstandard.org, thaistandard.org, wikipedia.org, iteh.ai, baunormenlexikon.de, soujianzhu.cn, etc.). As a result, the findings below come from search-result extracts of those primary pages. They are not full-text reads. Geometric values quoted from standards (mm sizes, angles) should be checked against the purchased standard before they are hard-coded in TBIM.

---

## Q1. ISO standards: numbers, editions, scope, key symbols, Thai TIS adoption

### Takeaway
The ISO 128 drawing-principles series was heavily consolidated in 2020–2022. Current editions are ISO 128-1:2020, ISO 128-2:2022 and ISO 128-3:2022. ISO 128-2 absorbed the old construction-lines part (128-23), and ISO 128-3 absorbed the old views, sections and hatching parts (128-30/-34/-40/-44/-50). Most construction-specific ISO standards date from the 1980s–1990s and are still valid: ISO 3766:2003, ISO 4157-1/2/3:1998, ISO 9431:1990, ISO 11091:1994, ISO 5261:1995, ISO 4067 and ISO 7518. ISO 7519, the general-arrangement drawing standard, was revised twice in quick succession (2024, then 2025). The only confirmed Thai adoption found is มอก. 1476-2540 (TIS 1476-1997) for prefabricated-structure construction drawings.

### Cited Findings

**ISO 128 series (general principles of representation)**
- ISO 128-1:2020 (*TPD — General principles of representation — Part 1: Introduction and fundamental requirements*) cancels and replaces ISO 128-1:2003. — [ISO 65296](https://www.iso.org/standard/65296.html); [BSI BS EN ISO 128-1:2020](https://knowledge.bsigroup.com/products/technical-product-documentation-tpd-general-principles-of-representation-introduction-and-fundamental-requirements)
- ISO 128-2:2020 (*Basic conventions for lines*) replaced ISO 128-20:1999, 128-21:1997, 128-22:1999 (leader and reference lines), **128-23:1999 (lines on construction drawings)**, 128-24:2014 and 128-25:1999. — [Wikipedia ISO 128 (search extract)](https://en.wikipedia.org/wiki/ISO_128); [ISO 69129](https://www.iso.org/standard/69129.html)
- **ISO 128-2:2022** is the current edition. It is a minor revision of the 2020 edition. It covers line types, designations, configurations and drafting rules, and also leader and reference lines. It includes annexes for mechanical, **construction** and shipbuilding drawings. — [ISO 83355](https://www.iso.org/standard/83355.html); [NEN-EN-ISO 128-2:2022](https://www.nen.nl/en/nen-en-iso-128-2-2022-en-303554); [iTeh catalog](https://standards.iteh.ai/catalog/standards/iso/ed38e2d0-844f-4eb5-97a9-8770b7a9acd6/iso-128-2-2022)
- Line width series: 0.13, 0.18, 0.25, 0.35, 0.5, 0.7, 1, 1.4 and 2 mm, a √2 progression. Extra-wide : wide : narrow = 4:2:1. Construction drawings normally use three widths (narrow/wide/extra-wide, 1:2:4). One secondary source says construction drawings may use up to four weights, with an extra weight for graphical symbols. — [draftsperson.net summary](https://blog.draftsperson.net/standard-colors-and-line-weights-in-cad/); [ISO 128-23:1999 (superseded origin)](https://www.iso.org/standard/22292.html)
- **ISO 128-3:2022** (*Views, sections and cuts*) cancels and replaces ISO 128-3:2020 and ISO 128-43:2015. — [ISO 83356](https://www.iso.org/standard/83356.html); [ISO OBP 128-3:2022](https://www.iso.org/obp/ui/en/#!iso:std:83356:en)
- ISO 128-3 consolidated ISO 128-30, -33, -34, -40, -44 and **-50 (hatching/area representation on cuts and sections)**. DIN Media lists DIN ISO 128-50 as replaced by DIN EN ISO 128-3:2022-02. — [DIN Media DIN ISO 128-50](https://www.dinmedia.de/en/standard/din-iso-128-50/46948186); [DIN EN ISO 128-3:2022-02](https://www.dinmedia.de/en/standard/din-en-iso-128-3/322190389)
- ISO 128-50:2001 specified methods for representing areas on cuts and sections: hatching, shading, outlines and similar. (The search tool described it as "six methods"; this count is unverified.) — [ISO 24240](https://www.iso.org/standard/24240.html)

**ISO 129-1 (dimensioning)**
- ISO 129-1:2018 (*TPD — Presentation of dimensions and tolerances — Part 1: General principles*) applies to 2D drawings in all disciplines, including construction. It covers dimension lines, extension lines, terminators, origin indication and leader lines. It was amended by ISO 129-1:2018/Amd 1:2020 (EN ISO 129-1:2019/A1:2020). — [ISO 64007](https://www.iso.org/standard/64007.html); [ISO 75971 (Amd 1:2020)](https://www.iso.org/standard/75971.html); [iTeh EN ISO 129-1/A1](https://standards.iteh.ai/catalog/standards/cen/767f0d2f-0db8-4f87-9473-e5a4ddb74876/en-iso-129-1-2019-a1-2020)

**ISO 3766 (reinforcement)**
- ISO 3766:2003 (*Construction drawings — Simplified representation of concrete reinforcement*) specifies the simplified representation of reinforcement in reinforced and prestressed concrete. It also sets out a bar-scheduling system: a method for specifying dimensions, a **bar shape coding system**, a schedule of preferred shapes, and shape/bending schedules. It defines line and symbol conventions for single bars, bundles, hooked bars, welded fabric, layers (top/bottom, near/far) and prestressing tendons. — [ISO 34171](https://www.iso.org/standard/34171.html); [ANSI webstore](https://webstore.ansi.org/Standards/ISO/ISO37662003)

**ISO 4157 (designation systems)**
- ISO 4157-1:1998 covers buildings and parts of buildings. It specifies designation systems and a designation code for buildings, spaces, building elements and components. — [ISO 26189](https://www.iso.org/standard/26189.html); [ISO OBP 4157-1](https://www.iso.org/obp/ui/#iso:std:iso:4157:-1:en)
- ISO 4157-2:1998 covers room names and numbers. Rooms are numbered in logical order on each floor, preferably consecutively, starting from **n01, where n is the floor number**. It was last reviewed and confirmed in 2023. — [ISO 26190](https://www.iso.org/standard/26190.html)
- ISO 4157-3:1998 covers room identifiers: a designation concept that identifies rooms, areas, spaces and voids across the whole life cycle. — [ISO 26950](https://www.iso.org/standard/26950.html)

**Other construction-drawing ISO standards**
- ISO 4067-1:1984 gives graphical symbols for plumbing, heating, ventilation and ducting. ISO 4067-2:1980 gives simplified representation of sanitary appliances. ISO 4067-6:1985 gives symbols for water supply and drainage in the ground. — [ISO 9778](https://www.iso.org/standard/9778.html); [ISO 9779](https://www.iso.org/standard/9779.html); [ISO 9782](https://www.iso.org/standard/9782.html)
- ISO 5455:1979 (*Technical drawings — Scales*) sets preferred scales in 1:2, 1:5 and 1:10 families and their multiples, which gives 1:20, 1:50, 1:100, 1:200 and so on. — [ISO 11500](https://www.iso.org/standard/11500.html); [BSI BS EN ISO 5455:1995](https://knowledge.bsigroup.com/products/technical-drawings-scales)
- ISO 7200:2004 specifies data fields in title blocks and document headers: field names, content and length, split into identifying, descriptive and administrative categories, each mandatory or optional. — [ISO 35446](https://www.iso.org/standard/35446.html)
- ISO 7518 (*Construction drawings — Simplified representation of demolition and rebuilding*) is at edition 1983, adopted in Europe as EN ISO 7518:1999. — [Accuris ISO 7518:1983](https://store.accuristech.com/standards/iso-7518-1983?product_id=228811); [iTeh EN ISO 7518:1999](https://standards.iteh.ai/catalog/standards/cen/154ae921-cb28-42cb-a69e-453e33abe5cd/en-iso-7518-1999)
- **ISO 7519** (*TPD — Construction documentation — General principles of presentation for general arrangement and assembly drawings*):
  - 1991 edition: superseded. — [ISO 14288](https://www.iso.org/standard/14288.html)
  - 2024 edition 2: published March 2024, 36 pages. It covers the building/architectural field, including line types, dimensioning and notation. — [ISO 83163](https://www.iso.org/standard/83163.html)
  - **ISO 7519:2025 (edition 3)**: listed by ISO. A search summary says the 2024 edition is withdrawn. — [ISO 89718](https://www.iso.org/standard/89718.html); [DIN Media ISO 7519:2025-02](https://www.dinmedia.de/en/standard/iso-7519/390009389)
  - See the German section (Q3) for the knock-on effect on DIN 1356-1. A German trade site refers to "ISO 7519:2026". This conflicts with ISO's own listing (2025), so the 2025 edition should be treated as current until verified. — [bauzeichner.org](http://bauzeichner.org/index.php/news/neue-zeichnungsnorm-din-en-iso-7519-2025-01-ersetzt-din-1356-1)
- ISO 9431:1990 (*Construction drawings — Spaces for drawing and for text, and title blocks on drawing sheets*) sets the placement, layout and content of drawing, text and title-block spaces. It was reviewed and confirmed in 2026. — [ISO 17133](https://www.iso.org/standard/17133.html)
- ISO 11091:1994 (*Construction drawings — Landscape drawing practice*) sets general rules, graphical symbols and simplified representations ("conventions") for landscape drawings. — [ISO 19080](https://www.iso.org/standard/19080.html)
- ISO 5261:1995 (*Simplified representation of bars and profile sections*) complements ISO 128 and ISO 129 for bars and profiles in assembly and detail drawings. — [ISO 21512](https://www.iso.org/standard/21512.html)
- ISO 13567-1:2017 and ISO 13567-2:2017 cover organization and naming of CAD layers for construction:
  - Names are built from fixed-length fields, some mandatory and some optional.
  - Mandatory fields: **Agent responsible** (2 characters, e.g. A- architect, S- structural, C- civil, E- electrical, H- HVAC, L- landscape), **Element** (6 characters) and **Presentation**.
  - Optional fields: Status (new, existing, demolished…), Sector, Phase, Projection, Scale, Work package and User-defined.
  - Sources: [SIS SS-EN ISO 13567-1:2017](https://www.sis.se/en/produkter/standardization/technical-product-documentation/ss-en-iso-13567-12017/); [iTeh ISO 13567-2:2017](https://standards.iteh.ai/catalog/standards/iso/392fa47f-9e0d-461c-a83f-97654fcb878d/iso-13567-2-2017); [draftsperson.net](https://blog.draftsperson.net/iso-13567-cad-layer-standard/)
- ISO 2553:2019 (welding symbols) contains two systems:
  - **System A**: a solid reference line plus a dashed identification line. A symbol on the solid line means arrow side; a symbol on the dashed line means other side.
  - **System B**: no dashed line. Arrow side is below the reference line and other side is above, as in AWS.
  - ISO specifies fillet welds by throat "a" and gives dimensions in mm.
  - Sources: [materialwelding.com](https://materialwelding.com/difference-between-iso-2553-and-aws-d1-1-welding-symbols/); [ANSI blog](https://blog.ansi.org/ansi/standard-welding-symbol-change-aws-a2-4-2020/)
- ISO 81714-1:2010 sets basic rules for *designing* graphical symbols in technical product documentation. It is a joint ISO/TC 10 and IEC/TC 3 standard. — [ISO 42100](https://www.iso.org/standard/42100.html); [IEC webstore](https://webstore.iec.ch/en/publication/11634)
- ISO 19650 (information management using BIM): the UK national annex naming is covered in Q3.

**Thai TIS (มอก.) adoption**
- **มอก. 1476-2540** is titled "การเขียนแบบทางเทคนิค การเขียนแบบก่อสร้าง กฎเกณฑ์ทั่วไปเพื่อการเขียนแบบก่อสร้างสำหรับชิ้นส่วนประกอบโครงสร้างสำเร็จรูป" (Technical drawings — Construction drawings — General rules for drawings for the assembly of prefabricated structures). The title matches the wording of ISO 4172. The ISO-equivalence itself is an inference; the page could not be fetched. — [thaistandard.org TIS 1476-2540](https://www.thaistandard.org/tis/1476-2540)
- A search extract of a Thai academic paper mentions Thai standards for construction-drawing dimensioning, lines and grid coordinates, and says "มอก. 440" was later updated. The details could not be verified. — [SAU Journal 2015 "แบบก่อสร้าง: มาตรฐาน การจัดทำ…"](https://www.sau.ac.th/SAUJournalST/2015_02_01_29-43.pdf)
- The Association of Siamese Architects publishes a CAD standard (ASA CAD standard 2554 / 2011). This is a professional guideline, not a TIS standard. — [AnyFlip ASA_CAD_std_2554](https://anyflip.com/evzsx/cwdq/basic/251-270); [Yotathai: คู่มือมาตรฐานการเขียนแบบก่อสร้าง ฉบับปี 2554](https://www.yotathai.com/yotanews/standard-drawing-2554)

### Inferences
- For a TBIM "ISO" symbol set, the base references are ISO 128-2:2022 (lines/weights), ISO 128-3:2022 (section/view indication and hatching), ISO 129-1:2018+A1:2020 (dimensions), ISO 7519:2025 (general-arrangement conventions), ISO 4157 (grid/room designation), ISO 3766 (rebar) and ISO 13567 (layers). References to ISO 128-23, -40, -44 or -50 in older Thai or Asian textbooks point to withdrawn parts.
- The TIS 14xx range from B.E. 2540 (1997) seems to hold a group of ISO-derived construction-drawing standards. Only TIS 1476 was confirmed.

### Gaps
- Could not open ISO OBP previews to extract exact geometry: ISO 128-3 cutting-plane arrow and letter layout, ISO 129-1 terminator dimensions, ISO 7519 level symbol.
- Could not confirm which other ISO drawing standards (ISO 128, 4157, 3766, 7519, 9431) have Thai TIS equivalents. The TISI list pages could not be fetched. A direct check of the TISI catalogue (appdb.tisi.go.th) is recommended.
- ISO 19650-1/-2 current edition years were not re-verified (they are believed to be 2018 editions).
- ISO 7519 edition confusion (2024 vs 2025 vs "2026") is unresolved.

---

## Q2. United States: NCS / UDS, AIA layers, ASME Y14, ACI 315, AWS A2.4

### Takeaway
The US National CAD Standard **V7** (NIBS, © 2025) bundles three parts: the AIA CAD Layer Guidelines, CSI's Uniform Drawing System (Modules 1–8) and the NIBS BIM Implementation & Plotting Guidelines. UDS defines sheet IDs such as "A-101", the drawing-set order, and a symbol library keyed to MasterFormat. It uses reference symbols with a circle split into drawing number over sheet number. NCS is a paid, licence-restricted product. Structural detailing follows ACI 315-18. Welding follows AWS A2.4:2020.

### Cited Findings
- NCS V7 = AIA CAD Layer Guidelines + CSI Uniform Drawing System Modules 1–8 + NIBS BIM Implementation & Plotting Guidelines. — [NCS V7 Content](https://www.nationalcadstandard.org/ncs7/content.php); [NIBS NCS page](https://nibs.org/projects/united-states-national-cad-standard-ncs/)
- UDS modules:
  1. Drawing Set Organization: set content and order, sheet identification, file naming.
  2. Sheet Organization: drawing, title-block and production areas; coordinate location grid; preferred sheet sizes.
  3. Schedules.
  4. Drafting Conventions: orientation, layout, symbols, material indications, line types, dimensions, scale, diagrams, notation, cross-referencing.
  5. Terms & Abbreviations.
  6. Symbols, categorized by **MasterFormat 2004 numbers plus a unique 3-digit extension**.
  7. Notations (see the UDS 7 PDF).
  8. Code Conventions.
  - Sources: [NCS V7 FAQ / content summary](https://www.nationalcadstandard.org/ncs7/faqs.php); [UDS Module 7 Notations (V5 PDF)](https://www.nationalcadstandard.org/ncs5/pdfs/ncs5_uds7.pdf); [UDS Module 6 Symbols (V5 PDF)](https://www.nationalcadstandard.org/ncs5/pdfs/ncs5_uds6.pdf)
- NCS V7 release and pricing:
  - The ordering pages give © 2025 NIBS and ISBN 978-0-9673513-6-6 (2024). V7 is an online web document, and DWG, linetype and pattern files of the symbols can be downloaded. — [NCS V7 ordering](https://nationalcadstandard.org/ncs7/ordering.php); [NCS V7 resources](https://nationalcadstandard.org/resources/standards/ncs7/)
  - Single-licence list price is reported as US$1,428 (academic/government US$707). A search extract of the FAQ quoted US$410, which conflicts; this needs verification. — [Single License List Price](https://www.nationalcadstandard.org/resources/standards/ncs7/ncs71a/); [Academic price](https://nationalcadstandard.org/resources/standards/ncs7/ncs71b/)
  - A Single License covers one employee at one office location, with one printed copy allowed. — [NCS V7 ordering](https://nationalcadstandard.org/ncs7/ordering.php)
- **Sheet ID format (UDS Module 1)** is `A A N N N`:
  - 1–2 letter discipline designator. The hyphen is a required placeholder when there is no second letter, and it is preferred over a period.
  - 1-digit sheet type designator (e.g. 1 = plans).
  - 2-digit sequence number.
  - So "A-101" = Architectural, plans, sheet 01.
  - Sources: [NCS V6 UDS Module 1 PDF](https://www.nationalcadstandard.org/ncs6/pdfs/ncs6_uds1.pdf); [NCS V5 UDS Module 1 PDF](https://www.nationalcadstandard.org/ncs5/pdfs/ncs5_uds1.pdf)
- UDS-style reference symbols (secondary/educational sources):
  - **Section mark**: a 1/2" diameter circle, a solid-filled arrow showing viewing direction, section number on top and sheet number below.
  - **Detail mark**: a 1/2" circle with detail number over sheet number. The area being detailed is enclosed in a larger circle and connected by a leader.
  - **Elevation indicator**: circle plus arrow pointing to the elevated surface.
  - UDS-derived federal templates show dashed-circle and dashed-rectangle detail indicators and 16 mm (5/8") elevation indicators.
  - Sources: [Graduate School USA tutorial](https://www.graduateschool.edu/learn/blueprint-reading/understanding-architectural-symbols-keynotes-elevations-sections-and-details); [Federal drawing standard PDF "SECTION, DETAIL, AND ELEVATION SYMBOL IDENTIFIERS"](https://imlive.s3.amazonaws.com/Federal%20Government/ID161340668832143895465238474714384190453/1.5_Drawings-ARCHITECTURE.pdf)
- ASME Y14 series (mechanical-oriented, used in US steel shop drawings and similar):
  - ASME Y14.5-2018 (reaffirmed 2024), dimensioning and tolerancing.
  - ASME Y14.1-2020 (sheet size and format; merged Y14.1 and Y14.1M).
  - Y14.100 (engineering drawing practices).
  - Y14.35 (revisions).
  - Sources: [ASME Y14.5](https://www.asme.org/codes-standards/find-codes-standards/y14-5-dimensioning-tolerancing); [ASME Y14.100](https://www.asme.org/codes-standards/find-codes-standards/y14-100-engineering-drawing-practices); [ASME Y14.35](https://www.asme.org/codes-standards/find-codes-standards/y14-35-revision-engineering-drawings-associated-documents); [Wikipedia ASME Y14.1](https://en.wikipedia.org/wiki/ANSI/ASME_Y14.1)
- **ACI 315-18** (*Details and Detailing of Concrete Reinforcement*) is a standard of practice in three parts: one for the architect/engineer, one for the detailer, and reference tables and figures such as standard hooks and bar bends. **ACI PRC-315-18 (formerly 315R-18)** is a non-mandatory guide to presenting rebar design details. Any system of letters and numerals is acceptable for bar marks. — [ACI FAQ on detailing standard](https://www.concrete.org/frequentlyaskedquestions.aspx?faqid=908); [ACI PRC-315-18](https://www.concrete.org/store/productdetail.aspx?ItemID=31518&Language=English&Units=US_AND_METRIC); [ACI 315 PDF (regbar)](https://regbar.com/wp-content/uploads/2019/09/ACI-315.pdf)
- **AWS A2.4:2020** is the current edition. Part A covers welding symbols, Part B brazing and Part C NDE. Arrow side is below the reference line and other side is above. — [AWS store A2.4:2020](https://pubs.aws.org/p/1999/a242020-standard-symbols-for-welding-brazing-and-nondestructive-examination); [ANSI blog](https://blog.ansi.org/ansi/standard-welding-symbol-change-aws-a2-4-2020/)
- AIA's *Architectural Graphic Standards* is the usual US reference for material hatch patterns in CAD. — [CADhatch AGS patterns](https://www.cadhatch.com/architectural-graphic-standard)

### Inferences
- For a "US" symbol set, TBIM can copy the *structure* (sheet-ID grammar, discipline codes, drawing number/sheet number bubble logic, layer-name grammar). The actual NCS symbol drawings and DWG blocks should not be copied without a licence.
- US drawings use imperial units and arrowhead or tick terminators, depending on office practice (not verified in the UDS text).

### Gaps
- nationalcadstandard.org could not be fetched. Exact V7 changes, exact UDS symbol dimensions (e.g. whether the reference-bubble diameter is 1/2" or 7/16"), and the full discipline designator list (A, S, C, M, E, P, FP, G, L, V, etc.) were not verified from primary text.
- The AIA CAD Layer Guidelines format (Discipline-Major-Minor-Status, e.g. A-WALL-FULL) is widely known but was not verified in this session.

---

## Q3. UK / Europe: BS 8888, BS 1192 to BS EN ISO 19650, Uniclass 2015, DIN 1356, DIN 919

### Takeaway
UK construction-drawing symbols formerly came from BS 1192-3:1987, which is withdrawn. BS 1192:2007 naming and layer rules were replaced by BS EN ISO 19650 with a UK National Annex (from 2019). Classification now uses Uniclass 2015 as container metadata, updated quarterly. BS 8888 (latest 2025) is a mechanical TPD umbrella, not an architectural one. Germany's DIN 1356-1 (2024-04 edition, with a new draft in 2026-09) is the main German building-drawing standard. It defines material hatching and, since 2024, colour fills. It has been in a tug-of-war with ISO 7519.

### Cited Findings
- BS 1192 was confirmed in 2018 to be replaced by BS EN ISO 19650, which was introduced in January 2019. — [Designing Buildings: BS 1192](https://www.designingbuildings.co.uk/wiki/BS_1192); [NBS: From BS 1192 to ISO 19650](https://www.thenbs.com/knowledge/from-bs-1192-to-iso-19650-and-everything-in-between)
- Under BS EN ISO 19650-2 with the UK NA, classification is **no longer a naming field**. It became metadata using Uniclass 2015. — [LinkedIn (J. Ford)](https://www.linkedin.com/pulse/bs-en-iso-19650-2-requirement-uniclass-metadata-assignment-john-ford)
- The updated UK NA container-naming order is Project – Originator – **Functional breakdown** (formerly "volume/system") – **Spatial breakdown** (formerly "levels/locations") – Form (type) – Discipline (role) – Number. Fields are hyphen-separated, and fixed field lengths were removed. — [Symetri ISO 19650 file naming update](https://www.symetri.co.uk/insights/blog/iso-19650-file-naming-update/); [GlobalCAD: UK NA updates](https://globalcad.co.uk/iso-19650-the-uk-national-annex-updates/); [CDBB National Annex Guidance](https://www.cdbb.cam.ac.uk/files/national_annex_guidance.pdf)
- Uniclass 2015 follows ISO 12006-2:2015. Codes are 4–5 pairs of characters.
  - Current table versions: Co v1.22 (Apr 2025), En v1.34 (Apr 2025), SL v1.36 (Jul 2026), EF v1.16 (Oct 2025), Ss v1.43 (Jul 2026), Pr v1.43 (Jul 2026), **Zz (CAD) v1.3 (Jan 2026)**, Ro v1.13 (Jan 2026).
  - Tables are free to download from NBS.
  - Sources: [Uniclass (NBS)](https://uniclass.thenbs.com/); [Uniclass download](https://uniclass.thenbs.com/download); [NBS: Uniclass tables explained](https://www.thenbs.com/knowledge/uniclass-tables-explained)
- BS 1192:2007 CAD layer naming lives on as an industry "Layer Standard" reference (bimuk). — [BIM UK Layer Standard](https://bimuk.co.uk/standards/layer-standard/)
- BS 1192-3:1987 (*Recommendations for symbols and other graphic conventions*) is withdrawn. — [BSI Knowledge](https://knowledge.bsigroup.com/products/construction-drawing-practice-recommendations-for-symbols-and-other-graphic-conventions)
- BS 8888:2020 was superseded by **BS 8888:2025**. BS 8888 compiles the ~200+ ISO TPD standards for manufacturing and engineering (mechanical, electrical, aerospace and similar). — [NBS Publication Index (BS 8888:2020 withdrawn)](https://www.thenbs.com/publicationindex/documents/details?Pub=BSI&DocId=328041); [BSI BS 8888](https://knowledge.bsigroup.com/products/technical-product-documentation-and-specification-2)
- **DIN 1356-1** (*Bauzeichnungen — Teil 1*):
  - The 1995-02 edition was replaced by **DIN 1356-1:2024-04** (*Arten, Inhalte und Grundregeln der Darstellung*).
  - The 2024 edition was adapted to CAD/BIM and officially allows **colour fills for cut materials** (e.g. red for masonry, grey for concrete) if a legend is shown.
  - Hatching is drawn in the thinnest line width (typically 0.13 or 0.18 mm) and cut-edge outlines are drawn in solid wide lines.
  - Sources: [DIN Media DIN 1356-1:2024-04](https://www.dinmedia.de/en/standard/din-1356-1/325728444); [Austrian Standards shop](https://www.austrian-standards.at/en/shop/din-1356-1-2024-04~p3318050); [baunormenlexikon DIN 1356-1:2024-04](https://www.baunormenlexikon.de/norm/din-1356-1/379167e5-3825-4bb6-86e2-5b05e092e322)
- DIN 1356-1 and ISO 7519 history:
  - DIN EN ISO 7519:2025-01 (German adoption of ISO 7519:2024) was presented as replacing DIN 1356-1.
  - It was later withdrawn because the ISO 7519 revision was published as ISO-only, without an EN version, after the Vienna Agreement route was dropped.
  - The German committee then decided to restore DIN 1356-1 content. One stated reason is that its material cut-surface designations differ from ISO 7519 examples.
  - DIN Media lists a **draft DIN 1356-1:2026-09**.
  - Sources: [bauzeichner.org news](http://bauzeichner.org/index.php/news/neue-zeichnungsnorm-din-en-iso-7519-2025-01-ersetzt-din-1356-1); [DIN Media draft DIN 1356-1 2026-09](https://www.dinmedia.de/de/norm-entwurf/din-1356-1/403956420); [DIN Media DIN EN ISO 7519:2025-01](https://www.dinmedia.de/en/standard/din-en-iso-7519/379472829)
- German hatching per DIN 1356-1 (secondary source):
  - Masonry: parallel thin 45° lines.
  - Unreinforced concrete: irregular dots plus small triangles (gravel).
  - Reinforced concrete: the same dot/triangle texture plus 45° parallel lines.
  - Table 4 defines general symbols, including height marks (Höhenkoten) for finished and structural surfaces.
  - Sources: [ingenieurkurse.de (search extract)](https://www.ingenieurkurse.de/technische-darstellungen-bauwesen/darstellung-und-kennzeichnung-bautechnischer-objekte-und-symbole-in-bauzeichnungen/schraffuren-und-deren-farbige-darstellung.html); [CAD-markt DIN 1356-1 Schraffuren](https://cad-markt.de/index.php/cad-tutuorials/normen/2555-01356-din-1356-1-schraffurdarstellungen-von-baumaterialien); [Europa-Lehrmittel sample](https://www.europa-lehrmittel.de/leseprobe/41415-8.pdf)
- DIN 919-1:2014 covers technical drawings for wood processing (furniture, windows, doors, interior fit-out). It replaced DIN 919-1:1991 and added OSB, MDF, composite boards and EN wood designations. — [DIN Media DIN 919-1:2014-08](https://www.dinmedia.de/en/standard/din-919-1/206892969); [GlobalSpec DIN 919-1](https://standards.globalspec.com/std/2055824/din-919-1)
- Hatching patterns are defined differently in EN 81714-2 (graphical symbols) and DIN 1356-1 (construction). — [Onshape forum (search extract)](https://forum.onshape.com/discussion/23923/which-standard-is-used-for-the-iso-hatching-patterns)

### Inferences
- A "UK" preset in TBIM should use BS EN ISO 19650-2 UK NA naming, Uniclass 2015 metadata (the free NBS tables are a licensing advantage) and ISO 128/7519 drafting conventions. BS 1192-3 symbols are historical only.
- A "DE" preset should follow DIN 1356-1:2024 hatches and optional colour fills. The German standard is still moving (2026 draft), so the TBIM symbol set should be versioned.

### Gaps
- The exact DIN 1356-1 colour table (RAL values) and the full hatch list (earth/soil, insulation, timber, steel) were not obtained because the pages were blocked.
- UK section, elevation and level symbol geometry is not covered by any current BS. Symbols in UK practice come from office standards and could not be sourced to a standard.

---

## Q4. Asia-Pacific: Japan, China, Singapore, Australia, Korea, Vietnam, Indonesia/Malaysia

### Takeaway
- **China** has the most detailed and most accessible symbol-geometry rules: GB/T 50001-2017 plus the 2010 discipline standards GB/T 50104/50105/50106/50114. Examples: 8–10 mm grid circles, 45° oblique-tick terminators, 24 mm north arrow, triangle level symbols.
- **Japan** relies on JIS A 0150:1999 (confirmed 2019), which uses plan symbols and material symbols.
- **Australia** uses AS 1100.301-2008 (reconfirmed 2018).
- **Korea** uses KS F 1501 (ISO 128/129 NEQ) and KS F 1502 (door/window symbols).
- **Singapore** uses CP 83 (CAD layers/symbols) and the CORENET X COP, 3rd edition (Sep 2025).
- **Vietnam** uses the TCVN "Hệ thống tài liệu thiết kế xây dựng" series.

### Cited Findings

**China**
- **GB/T 50001-2017** (房屋建筑制图统一标准, *Unified standard for building drawings*) was issued on 2017-09-27 and took effect on 2018-05-01. It covers architecture, structure, plumbing, HVAC and electrical. — [waizi.org.cn](https://www.waizi.org.cn/bz/131445.html); [China Building ebook](https://ebook.chinabuilding.com.cn/zbooklib/bookpdf/probation?SiteID=1&bookID=102879)
- Grid (定位轴线) bubbles:
  - Drawn as a thin solid circle, line width 0.25b, **diameter 8–10 mm**.
  - Horizontal grids use Arabic numerals left to right. Vertical grids use capital letters bottom to top.
  - **Letters I, O and Z are not used**. Double letters or subscripted letters are used when more are needed.
  - Sources: [soujianzhu GB/T 50001 ch.8](https://www.soujianzhu.cn/NormAndRules/gfnr.aspx?id=327&conid=7896); [QQ reading (textbook quoting the standard)](https://mnovel.read.qq.com/read/1044175206/27)
- Index symbols (索引符号) and section index:
  - Index symbol: circle **8–10 mm** with a horizontal diameter line, line width about 0.25b.
  - Section index: the same circle plus two perpendicular line segments tangent to it.
  - Sources: [waizi.org.cn](https://www.waizi.org.cn/bz/131445.html); [soujianzhu](https://www.soujianzhu.cn/NormAndRules/gfnr.aspx?id=327&conid=7896)
- Dimension terminators (尺寸起止符号):
  - **Medium-thick oblique short stroke, inclined 45° clockwise from the dimension line, 2–3 mm long**.
  - Radius, diameter, angle and arc-length dimensions use arrows at least 1 mm wide.
  - Axonometric drawings use 1 mm dots.
  - Source (clause 11.1.4 per search extract): [co188 forum quoting standard](https://bbs.co188.com/thread-10357926-1-1.html); [CSDN](https://blog.csdn.net/weixin_42146230/article/details/153537662)
- Level symbol (标高):
  - A thin-line **isosceles right triangle**, tip on the measured level, pointing down or up.
  - Site-plan outdoor ground levels use a **filled black** triangle.
  - Values are in metres to 3 decimal places (2 on site plans).
  - Sources: [119.news 11.8 标高](https://www.119.news/portal.php?mod=view&aid=16083&mobile=no); [Sohu symbol guide](https://www.sohu.com/a/413419456_485311)
- North arrow (指北针):
  - Thin circle **24 mm** in diameter, pointer tail **3 mm** wide, head marked "北" or "N".
  - For larger sizes, the tail width is 1/8 of the diameter. This is clause 7.4 (Other symbols) of GB/T 50001-2017.
  - Sources: [CABR fire-code site 7.4 其他符号](https://gf.cabr-fire.com/article-45617.htm); [Sohu](https://www.sohu.com/a/413419456_485311)
- GB/T 50104-2010 (建筑制图标准, *architectural drawing*): issued 2010-08-18, effective 2011-03-01, replaced the 2001 edition. It covers architecture and interior design. Revisions adjusted line-width groups and added index symbols and legend symbols. — [gongbiaoku GB/T 50104](https://www.gongbiaoku.com/mobile/book/nzg18501zaz); [yuanlin8](https://www.yuanlin8.com/guifan/jianzhu/8e7e47a1.html)
- GB/T 50105-2010 (structural; covers concrete, steel and timber), GB/T 50106-2010 (water supply and drainage) and GB/T 50114-2010 (HVAC) all took effect on 2011-03-01 and are current. — [NDLS GB/T 50105-2010](https://www.ndls.org.cn/standard/detail/e91b690ba7a9643a0c341a1fc5bd49c9); [gongbiaoku GB/T 50106](https://www.gongbiaoku.com/mobile/book/aub181439qg)

**Japan**
- **JIS A 0150:1999** (建築製図通則, *General rules for architectural drawing*) was revised on 1999-07-09 and confirmed in 2010, 2014 and **2019**. It covers drawings, lettering, scales, units, lines, **plan display symbols (平面表示記号)** for 1:100 and 1:200 plans, and **material/structure display symbols (材料構造表示記号)** for concrete, RC, steel, ground, rubble and so on, varying by scale. — [JSA Webdesk](https://webdesk.jsa.or.jp/books/W11M0090/index/?bunsyo_id=JIS+A+0150:1999); [kikakurui JIS A 0150](https://kikakurui.com/a0/A0150-1999-01.html); [ja.wikipedia 平面表示記号](https://ja.wikipedia.org/wiki/%E5%B9%B3%E9%9D%A2%E8%A1%A8%E7%A4%BA%E8%A8%98%E5%8F%B7)
- Japanese dimension terminators: arrows normally. In tight spaces an **oblique stroke or black dot** may be used, and one drawing must use only one of these. Gridlines (通り芯) use chain lines. — [iPros 建築製図の基礎知識2](https://marketing.ipros.jp/contents/basics/basic-architectural-drafting2/)
- JIS Z 8310:2010 (製図総則) sets the overall drawing system for industry and defers architecture to JIS A 0150. JIS B 0001 (mechanical) was revised on 2019-05-20. — [JSA Webdesk JIS Z 8310:2010](https://webdesk.jsa.or.jp/books/W11M0090/index/?bunsyo_id=JIS+Z+8310:2010); [kikakurui Z 8310](https://kikakurui.com/z8/Z8310-2010-01.html)

**Australia**
- **AS 1100.301-2008** (*Technical drawing — Architectural drawing*), 2nd edition, published 2008-12-02 with Amendment 1 (May 2011) and reconfirmed in 2018. It merged AS 1100.301-1985 and Supp 1-1986.
  - Section 3 covers levels and gradients. Section 4 covers door, window and other conventions.
  - Appendices cover cross-referencing, coordinate dimensioning and grids.
  - Levels are expressed in metres to 3 decimals, rounded to 5 mm.
  - Sources: [Techstreet](https://www.techstreet.com/standards/as-1100-301-2008?product_id=2060073); [Intertek Inform (R2018)](https://www.intertekinform.com/en-gb/standards/as-1100-301-2008-128770_saig_as_as_275241/); [ANSI AS 1100.301 Amdt 1-2011](https://webstore.ansi.org/standards/sai/11003012008amdt2011); [Mekel: levels on drawings](https://mekel.net/folio/buildersreg/content/res_levels_on_drawings.html)
- AS/NZS 1100.501:2002 covers structural engineering drawing and is a companion part. — [pdfcoffee AS 1100.501](https://pdfcoffee.com/as-1100-part-501-structural-engineering-drawing-pdf-free.html)

**Korea**
- **KS F 1501** (건축 제도 통칙): the edition found is dated 2010-12-10, published by KSA and declared **NEQ to ISO 128 and ISO 129**. The KSCI listing shows reformNo=13, so newer confirmations may exist. — [KSSN KS F 1501](https://www.kssn.net/search/stddetail.do?itemNo=K001010075951); [standard.go.kr KS F 1501](https://standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?tmprKsNo=KSF1501&reformNo=13&ksNo=KSF1501)
- KS F 1502 (창호 기호, door/window symbols) was confirmed in 2024. KS A ISO 128-1 is an identical Korean adoption of ISO 128-1. — [KSSN KS F 1502](https://www.kssn.net/search/stddetail.do?itemNo=K001010148683); [KSSN KS A ISO 128-1](https://kssn.net/search/stddetail.do?itemNo=K001010099620)
- A Korean common drawing guideline, "건축도면 공동 표준화지침 (KADIS) v1.1", exists. — [KADIS PDF](https://t1.daumcdn.net/cfile/tistory/9927C3335A011D202A)

**Singapore**
- **CP 83** (*Code of practice for construction computer-aided design*) has five parts:
  - Part 1 (2004, reconfirmed 2015/2020): layer organisation and naming, with originator, element, sub-element, presentation, status and optional fields.
  - Part 2: CAD symbols.
  - Part 3: file naming.
  - Part 4: drafting conventions.
  - Part 5: colour and linetype.
  - Sources: [Singapore Standards eShop CP 83-1:2004 (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/ce9e9f67-db4b-471c-b60a-d928a9ac4039); [NLB record](https://www.nlb.gov.sg/biblio/200100033); [JACIC summary](https://www.jacic.or.jp/acit/s_standardization.pdf)
- **CORENET X** submissions have been mandatory since 2025-10-01 for new projects of at least 30,000 m² GFA. The CORENET X Code of Practice is in its 3rd edition (2025-09). BIM models must be at 1:1 scale in metric units, with 2D views taken from the model. — [URA circular DC25-07](https://www.ura.gov.sg/Corporate/Guidelines/Circulars/dc25-07); [CORENET X COP 3rd ed. PDF](https://info.corenet.gov.sg/docs/default-source/default-document-library/corenet-x-cop---third-edition-2025-09.pdf?sfvrsn=a7e34c36_5); [BCA CORENET X](https://www1.bca.gov.sg/regulatory-info/building-control/corenet-x)

**Vietnam**
- The TCVN "Hệ thống tài liệu thiết kế xây dựng" series includes:
  - TCVN 5571:2012 (title block; replaces the 1991 edition).
  - TCVN 4455:1987 (dimensioning, headings, notes, tables; flagged "hết hiệu lực", i.e. expired, on Caselaw).
  - TCVN 5570 (lines and axis designation).
  - TCVN 5671/5672:1992 (architectural and construction documentation sets).
  - Sources: [LuatVietnam TCVN 5571:2012](https://luatvietnam.vn/xay-dung/tieu-chuan-tcvn-5571-2012-khung-ten-trong-ban-ve-xay-dung-160971-d3.html); [Caselaw TCVN 4455:1987](https://caselaw.vn/van-ban-phap-luat/259901-tieu-chuan-xay-dung-tcvn-4455-1987-ve-he-thong-tai-lieu-thiet-ke-xay-dung-quy-tac-ghi-kich-thuoc-chu-tieu-de-cac-yeu-cau-ky-thuat-va-bieu-bang-tren-ban-ve-nam-1987-van-ban-het-hieu-luc); [hethongphapluat TCVN 5671:1992](https://hethongphapluat.com/tieu-chuan-viet-nam-tcvn-5671-1992-ve-he-thong-tai-lieu-thiet-ke-xay-dung-ho-so-thiet-ke-kien-truc-do-bo-xay-dung-ban-hanh.html)

**Indonesia / Malaysia**
- In Indonesia, government (PUPR) and academic guidance on architectural drawing completeness and symbols exists, but no specific SNI drawing-symbol standard number was identified. — [IAI Jatim / PUPR 2021 Standar Kelengkapan Gambar Arsitektur](https://iai-jatim.com/wp-content/uploads/2023/11/Standar-Kelengkapan-Gambar-Arsitektur-PUPR-2021.pdf); [ITB Standar Informasi Dalam Gambar](https://multisite.itb.ac.id/prodi-arsitektur-fix/wp-content/uploads/sites/162/2016/08/Standar-Manual-2015.pdf)

### Inferences
- Chinese GB/T 50001 is the most "machine-implementable" source, because it states mm sizes on the printed sheet for bubbles, arrows and ticks. It is also the closest match to typical Thai practice: tick terminators, lettered and numbered grids, triangle levels.
- JIS A 0150 is old (1999) but still confirmed. A JP preset should focus on 平面表示記号 (door/window plan symbols) and 材料構造表示記号 (material symbols).

### Gaps
- GB/T 50104 detailed elevation and detail symbols were not extracted. Neither were JIS A 0150 exact symbol drawings (only listed, not described).
- AS 1100.301 exact symbol geometry (grid bubble size, section marker) is behind a paywall. Only scope-level information was obtained.
- The CP 83 Part 2–5 edition years are not confirmed.
- No SNI or Malaysian (MS) architectural-drawing standard number was found.
- KS F 1501's latest revision year beyond 2010 is uncertain.

---

## Q5. Cross-region comparison of common symbol geometry

### Takeaway
All regions share the circle-based reference bubble (drawing ID / sheet ID), lettered and numbered grid bubbles, and a triangle- or target-style level datum. They differ mainly in **dimension terminators**, **grid letter exclusions**, **bubble size**, **hatching/colour** and **units**. For TBIM, the terminator style, bubble size and hatch table should be regional parameters, not separate symbol families.

### Cited Findings (compiled from the sources above)

| Symbol / convention | ISO | US (NCS/UDS) | China GB/T 50001-2017 | Japan JIS A 0150 | Germany DIN 1356-1 | Australia AS 1100.301 |
|---|---|---|---|---|---|---|
| Dimension terminator | Arrow, oblique stroke or dot defined in ISO 129-1:2018 ([ISO](https://www.iso.org/standard/64007.html)) | (not verified) | 45° clockwise medium tick, 2–3 mm; arrows for radius, diameter and angle; 1 mm dot for axonometric ([co188](https://bbs.co188.com/thread-10357926-1-1.html)) | Arrow normally; oblique stroke or black dot in tight space, one style per sheet ([iPros](https://marketing.ipros.jp/contents/basics/basic-architectural-drafting2/)) | (not verified) | (not verified) |
| Grid bubble | Designation per ISO 4157 ([ISO](https://www.iso.org/standard/26189.html)) | (not verified) | Circle 8–10 mm, 0.25b; numbers L→R, letters B→T, no I/O/Z ([soujianzhu](https://www.soujianzhu.cn/NormAndRules/gfnr.aspx?id=327&conid=7896)) | Grid lines in chain line ([iPros](https://marketing.ipros.jp/contents/basics/basic-architectural-drafting2/)) | — | Grids in appendix ([Scribd/Course Hero summaries](https://www.scribd.com/doc/300142503/AS-1100-Part-301-Architectural-Drawing)) |
| Section / detail reference | Views, sections, cuts in ISO 128-3:2022 ([ISO](https://www.iso.org/standard/83356.html)) | 1/2" circle, drawing no. over sheet no., filled arrow for direction ([Graduate School](https://www.graduateschool.edu/learn/blueprint-reading/understanding-architectural-symbols-keynotes-elevations-sections-and-details)) | Index circle 8–10 mm with horizontal diameter; section index adds tangent perpendicular strokes ([waizi](https://www.waizi.org.cn/bz/131445.html)) | — | — | Cross-referencing appendix ([Scribd](https://www.scribd.com/doc/300142503/AS-1100-Part-301-Architectural-Drawing)) |
| Elevation indicator | — | Circle with arrow; 5/8" (16 mm) variant in federal template ([federal PDF](https://imlive.s3.amazonaws.com/Federal%20Government/ID161340668832143895465238474714384190453/1.5_Drawings-ARCHITECTURE.pdf)) | — | — | — | — |
| Level datum | — | — | Thin isosceles right triangle; filled for site; metres to 3 d.p. ([119.news](https://www.119.news/portal.php?mod=view&aid=16083&mobile=no)) | — | Höhenkoten in Table 4 ([ingenieurkurse](https://www.ingenieurkurse.de/technische-darstellungen-bauwesen/darstellung-und-kennzeichnung-bautechnischer-objekte-und-symbole-in-bauzeichnungen/schraffuren-und-deren-farbige-darstellung.html)) | Metres, 3 d.p., 5 mm rounding ([Mekel](https://mekel.net/folio/buildersreg/content/res_levels_on_drawings.html)) |
| North arrow | — | — | Circle 24 mm; tail 3 mm (1/8 of diameter if larger); "北"/"N" ([CABR](https://gf.cabr-fire.com/article-45617.htm)) | — | — | North point covered ([aimsindustrial summary](https://aimsindustrial.com.au/blogs/product-guides/engineering-drawing-symbols-guide)) |
| Hatching: concrete / RC / masonry | Area representation formerly ISO 128-50, now within ISO 128-3 ([DIN Media](https://www.dinmedia.de/en/standard/din-iso-128-50/46948186)) | AIA Architectural Graphic Standards patterns ([CADhatch](https://www.cadhatch.com/architectural-graphic-standard)) | Legends in GB/T 50001 / 50104 (not extracted) | 材料構造表示記号 table, scale-dependent ([kikakurui](https://kikakurui.com/a0/A0150-1999-01.html)) | Concrete = dots + triangles; RC = same + 45° lines; masonry = 45° lines; colour fills allowed since 2024 ([ingenieurkurse](https://www.ingenieurkurse.de/technische-darstellungen-bauwesen/darstellung-und-kennzeichnung-bautechnischer-objekte-und-symbole-in-bauzeichnungen/schraffuren-und-deren-farbige-darstellung.html); [DIN Media](https://www.dinmedia.de/en/standard/din-1356-1/325728444)) | — |
| Line widths | 0.13–2 mm √2 series; construction ratio 1:2:4 ([draftsperson](https://blog.draftsperson.net/standard-colors-and-line-weights-in-cad/)) | — | Line width groups b, 0.7b, 0.5b, 0.25b (b-based; the 0.25b bubble is cited above) | — | Hatch at thinnest pen, 0.13/0.18 mm ([DIN 1356-1 summary](https://www.baunormenlexikon.de/norm/din-1356-1/379167e5-3825-4bb6-86e2-5b05e092e322)) | — |
| Sheet ID | ISO 19650 container naming (UK NA: Project-Originator-Functional-Spatial-Form-Discipline-Number) ([Symetri](https://www.symetri.co.uk/insights/blog/iso-19650-file-naming-update/)) | A-101 = discipline + type + sequence ([NCS UDS1](https://www.nationalcadstandard.org/ncs6/pdfs/ncs6_uds1.pdf)) | — | — | — | — |
| Welding | ISO 2553:2019 System A (dashed line) or B | AWS A2.4:2020, arrow side below the line ([materialwelding](https://materialwelding.com/difference-between-iso-2553-and-aws-d1-1-welding-symbols/)) | — | — | — | — |
| Units | mm, metric scales ISO 5455 ([ISO](https://www.iso.org/standard/11500.html)) | Imperial common; ASME Y14.1 inch sheets ([Wikipedia](https://en.wikipedia.org/wiki/ANSI/ASME_Y14.1)) | mm; levels in m | mm | mm | mm; levels in m |

### Inferences
- "Tick versus arrow" is the most visible regional switch. Chinese practice uses ticks for linear dimensions and Japanese practice uses arrows. The US picture was not verified here but is widely believed to vary by office.
- The drawing-number-over-sheet-number split bubble is near-universal (US UDS, China index symbol, UK/AU practice). TBIM can use one parametric reference-bubble family with regional parameters: diameter (US 1/2" ≈ 12.7 mm; CN 8–10 mm), arrow style (solid filled or tangent strokes) and text order.
- Grid letter exclusions (I, O, Z in China) should be a regional parameter.

### Gaps
- No primary-source geometry for ISO, US, UK or AU section and level symbols. Recommended next step: buy ISO 7519:2025, NCS V7 and AS 1100.301 and verify.
- US and UK dimension-terminator conventions are unverified.
- The full hatch tables for earth, steel, timber and insulation in each region are not sourced.

---

## Q6. Licensing and copyright constraints for reuse in TBIM

### Takeaway
ISO, BSI, DIN, JIS, KS, AS, SS and GB texts and drawings are copyrighted and sold. NCS carries per-seat licence terms. Uniclass 2015 tables are freely downloadable from NBS. TBIM should implement symbols from the *rules* (dimensions, grammar) in its own drawings rather than copying figures or DWG blocks verbatim.

### Cited Findings
- NCS V7 licence scope: a Single License allows one employee at one location plus one printed copy. It is © 2025 NIBS, and the symbol DWG, linetype and pattern files are licensed downloads. — [NCS V7 ordering](https://nationalcadstandard.org/ncs7/ordering.php); [NCS V7 resources](https://nationalcadstandard.org/resources/standards/ncs7/)
- ISO standards are sold through ISO and national bodies. ISO OBP offers only previews. — [ISO 128-3 OBP](https://www.iso.org/obp/ui/en/#!iso:std:83356:en); [ANSI webstore ISO 128-1](https://webstore.ansi.org/standards/iso/iso1282020)
- Uniclass 2015 tables can be downloaded from NBS. — [Uniclass download](https://uniclass.thenbs.com/download)
- JIS A 0150 is sold through the JSA Webdesk. — [JSA](https://webdesk.jsa.or.jp/books/W11M0090/index/?bunsyo_id=JIS+A+0150:1999)
- KS F 1501 is sold through KSSN in PDF and print. — [KSSN](https://www.kssn.net/search/stddetail.do?itemNo=K001010075951)
- AS 1100.301 is sold via Standards Australia resellers. — [Intertek Inform](https://www.intertekinform.com/en-gb/standards/as-1100-301-2008-128770_saig_as_as_275241/)
- CP 83 is sold via the Singapore Standards eShop. — [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/ce9e9f67-db4b-471c-b60a-d928a9ac4039)
- Chinese GB/T construction standards are published by China Architecture & Building Press, with online reading via China Building ebook. Many third-party sites host PDFs of uncertain legitimacy. — [China Building ebook](https://ebook.chinabuilding.com.cn/zbooklib/bookpdf/probation?SiteID=1&bookID=102879); [kscecs cabplink](https://kscecs.cabplink.com/standard/searchStandardDetail.action?standardId=29674)
- CORENET X COP is a free government PDF. — [CORENET X COP](https://info.corenet.gov.sg/docs/default-source/default-document-library/corenet-x-cop---third-edition-2025-09.pdf?sfvrsn=a7e34c36_5)

### Inferences
- Geometric facts (e.g. "circle 8–10 mm, 45° tick 2–3 mm") are generally not copyrightable in themselves. Reproducing standards' figures, tables or vendor DWG/PAT files is a different matter. TBIM should redraw symbols from parameters and cite the standard clause, and ideally get legal review for commercial distribution of any "NCS-compliant" or "ISO-compliant" symbol libraries. (This is an inference, not legal advice.)
- The standards whose texts are published free by government bodies are CORENET X COP (Singapore) and Uniclass (UK). Chinese GB/T 50001 text is widely viewable online, but its official licensing status for commercial reuse was not established.

### Gaps
- No explicit statement was found from ISO, NIBS or others on reusing symbol geometry in commercial software. NCS licence terms for embedding symbols in distributed software were not retrieved because the FAQ was blocked.
