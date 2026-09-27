# Singapore (SG) Standards and Notation for Structural, Civil/Infrastructure and Survey Drawings (for a TBIM "SG" profile)

> **Evidence note (read first):** The network egress proxy blocked **every** direct fetch attempted: bca.gov.sg, www1.bca.gov.sg, corenet.gov.sg, info.corenet.gov.sg, pub.gov.sg, sso.agc.gov.sg, epsg.io, brc.com.sg, ssss.org.sg, fig.net, concrete.org.uk, pdfcoffee.com, cvcengineers.sg, 103east.sg and sgnyss.wordpress.com. As a result, **all findings below come from web-search result snippets and summaries**, not from reading full documents. Each URL is the page the snippet was attributed to. Evidence tags:
> - **[standard]**: a published Singapore Standard (SS) or an international standard adopted in Singapore.
> - **[agency]**: an agency document or circular from BCA, LTA, PUB, SLA, NParks or URA.
> - **[observed_practice]**: consultant, supplier or blog practice.
> - **[unverified]**: from background knowledge or inference; no source was read. Confirm before hard-coding.

---

## Q1. Structural design basis: SS EN 1990–1998 + Singapore National Annexes, BS 8110 withdrawal, BCA Design Guides

### Takeaway
Singapore designs to the Eurocodes (SS EN 1990–1998) with Singapore National Annexes (NAs). BS 8110 and BS 5950 were fully replaced after the co-existence period ended on **1 April 2015**. BCA's Approved Document pairs each Eurocode part with its NA; the latest version found is v7.08 (BCA circular, 1 Oct 2025). As of late 2025, the 2nd-generation Eurocode 2 (SS EN 1992-1-1:2024) was forthcoming but not yet mandated.

### Cited Findings
- **[agency]** The Eurocode co-existence period ended **1 April 2015**. After that date Singapore fully adopted the Eurocode suite, and SS EN 1992-1-1 with the Singapore NA replaced BS 8110 for concrete design. — [AEC Technical SG](https://www.aectechnicalsg.com/eurocodes-adapted-for-singapore-how-singapore-national-annexes-shape-structural-design); [SSSS "Implementation of Structural Eurocodes in Singapore"](http://www.ssss.org.sg/~ssssorgs/images/stories/docs/IMPLEMENTATION_OF_STRUCTURAL_EUROCODES_IN_SINGAPORE.pdf) (fetch blocked; snippet only)
- **[observed_practice]** The transition to Eurocodes began in October 2006. The search summary also says formal implementation started on 1 April 2013, i.e. a 2013–2015 co-existence period. The 2013 date is only a summary claim and could not be checked against the BCA text. — same search result set: [AEC Technical SG](https://www.aectechnicalsg.com/eurocodes-adapted-for-singapore-how-singapore-national-annexes-shape-structural-design)
- **[standard]** BS 8110 was withdrawn in the UK in 2010 and replaced by EN 1992. — [Wikipedia BS 8110](https://en.wikipedia.org/wiki/BS_8110)
- **[agency]** BCA's Approved Document ("Acceptable Solutions") pairs each Eurocode part with its Singapore NA. — [BCA Approved Document 7.02 PDF](https://www1.bca.gov.sg/docs/default-source/docs-corp-regulatory/building-control/approveddoc_7-02.pdf?sfvrsn=95ecf1f9_0) (fetch blocked)
- **[observed_practice]** A BCA circular dated **1 Oct 2025** announced **Approved Document Version 7.08**. It still refers generically to "SS EN 1992" and does not mandate the 2024 second-generation version, so the 2008-era SS EN 1992-1-1 remains the compliance basis. — [AEC Technical SG, SS EN 1992-1-1:2024 guide](https://www.aectechnicalsg.com/ss-en-1992-1-12024-singapore-pes-guide-to-the-second-generation-eurocode-2/)
- **[observed_practice]** SS EN 1992-1-1:2024 (2nd generation) is to be published by Enterprise Singapore after review by the Building and Construction Standards Committee. It consolidates EN 1992-1-1:2004, EN 1992-2 (bridges) and EN 1992-3 (liquid-retaining structures). CEN has set **March 2028** as the withdrawal date for the old EN. — [AEC Technical SG](https://www.aectechnicalsg.com/ss-en-1992-1-12024-singapore-pes-guide-to-the-second-generation-eurocode-2/)
- **[standard]** The current SG concrete design standard is SS EN 1992-1-1:2008 (preview on the SS eShop). — [Singapore Standards eShop preview](http://www.singaporestandardseshop.sg/data/ECopyFileStore/081014164134Preview%20-%20SS%20EN%201992-1-1-2008.pdf)
- **[agency]** **BCA Design Guide BC1:2012** covers the use of alternative structural steel in design to BS 5950 and SS EN 1993. Steel materials are sorted into Class 1, 2 and 3. The guide lists certified BS EN and non-BS EN materials (ASTM, AS/NZS, JIS, GB). — [BCA BC1 handbook (Amd C)](https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/for-industry/sustainable-construction/bc1_handbook_amd_c.pdf); [Handbook to BC1:2012 (SSSS)](http://www.ssss.org.sg/~ssssorgs/images/stories/docs/Handbook_to_BC1_2012.pdf)
- **[agency]** BCA also has a published "Technical requirements … Chapter 3: Structural requirements" document. — [BCA chapter_3_technical_requirements_for_ss_2015.pdf](https://www1.bca.gov.sg/docs/default-source/docs-corp-regulatory/building-control/chapter_3_technical_requirements_for_ss_2015.pdf?sfvrsn=d3dfce93_0) (title only; content not read)
- **[observed_practice]** In Singapore, foundation design is endorsed by a registered PE (Geotechnical) and submitted to BCA. — [CVC Engineers foundation guide](https://www.cvcengineers.com/post/foundation-design-singapore-pile-types-site-investigation)
- **[observed_practice]** A blog source says CORENET X requires BIM (IFC-SG) submission for **all new building projects from 1 Oct 2026**. — [Bimeco CORENET X guide](https://www.bimeco.io/blog/corenet-guide-singapore/); IFC-SG component glossary: [CORENET IFC-SG glossary](https://info.corenet.gov.sg/ifc-sg/bim-data-(ifc-sg)/glossary-of-identified-components)

### Inferences
- TBIM's SG profile should default to "SS EN 1992-1-1 + NA to SS EN 1992-1-1" for concrete and "SS EN 1993 + NA / BC1:2012" for steel. It should also allow a future switch to the 2nd-generation SS EN 1992-1-1:2024 once BCA mandates it.
- Because CORENET X / IFC-SG is becoming mandatory, TBIM's SG member tagging should map to IFC-SG property sets. This is likely more consequential than 2D drafting conventions.

### Gaps
- The exact list of SS EN parts and NA edition years in Approved Document v7.08 could not be read (BCA blocked).
- There is no confirmed BCA date for adopting SS EN 1992-1-1:2024.
- No list of the current BCA Design Guides (other than BC1:2012) could be verified. Snippets also showed no current "BC2/BC3" design-guide titles.

---

## Q2. Reinforcement standards and drawing notation (SS 560, SS 561, bar letters, BS 8666 scheduling, fabric designations)

### Takeaway
The rebar standard is **SS 560:2016(2024)+A1:2024**. It covers grades B500A/B/C and B600A/B/C. Welded fabric follows **SS 561:2010(2022)+A2:2022**. SG detailing follows UK BS 8666 conventions: "H" for high yield bars (B500), "R" for legacy mild steel, and BS 8666 shape codes. Locally, fabric is sold and specified as **A6/A7/A8/A10 …** at 200 × 200 mm (the "A" number appears to equal the wire diameter), not by UK names such as A393. The exact SG bar-label syntax is not documented in any source that could be reached.

### Cited Findings
- **[standard]** **SS 560:2016(2024)+A1:2024**, "Specification for steel for the reinforcement of concrete — weldable reinforcing steel — bar, coil and decoiled product". — [SS eShop SS 560](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/cd702a96-43de-468a-8c4f-3fd94ae7b39b)
- **[standard]** SS 560 provides for six grades at 500 MPa and 600 MPa characteristic yield: **B500A, B500B, B500C, B600A, B600B, B600C**. The final letter is the ductility class. Grade B500B bars have two or more series of parallel transverse ribs. — [SS 560:2016 preview (BRC)](https://www.brc.com.sg/wp-content/uploads/2020/09/SS-560-2016_Preview.pdf) (snippet)
- **[standard]** An older standard, **SS 2-2:1999 (2020) "Steel for the reinforcement of concrete"**, is still listed on the SS eShop. — [SS eShop SS 2-2](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/91e79244-17b8-42e3-b5b3-ff5e0b2f0b44)
- **[standard]** **SS 561:2010 (2022)+A2:2022** covers factory-made, machine-welded steel fabric made from ribbed bars conforming to SS 560. An earlier consolidated version was SS 561:2010+A1:2020. — [SS eShop SS 561](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/e668313c-58c2-406f-9c86-dde3d491c8f4); [SS 561 preview PDF](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=200708164014SS+561-2010(plus)Amd+1+Preview.pdf&pdtid=e668313c-58c2-406f-9c86-dde3d491c8f4)
- **[observed_practice]** BRC Asia (Singapore's main supplier) certifies its mesh to SS 561:2010. It sells **A6, A7, A8, A10** mesh at **200 mm × 200 mm**, in sheets of 3 m × 2 m and 6 m × 2.4 m. Wire diameters run from about 6 to 12 mm, with 100 × 100 mm also available. — [BRC Asia Mesh](https://www.brc.com.sg/products-services/mesh/); [Chi Han Trading BRC mesh](https://www.chihantrading.com.sg/product/brc-welded-mesh/); [Buildmate SG](https://www.buildmate.com.sg/product/brc-welded-mesh-flat/)
- **[agency]** BCA's Buildability Series has a "Welded Wire Fabric Dimensions" appendix in its prefabricated reinforcement handbook. — [BCA prh_appd.pdf](https://www.bca.gov.sg/publications/BuildabilitySeries/others/prh_appd.pdf); [BCA Prefabricated Reinforcement Handbook](https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/for-industry/buildability-series/prefabricated_reinforcement_handbook_lowres.pdf) (both blocked; titles only)
- **[standard]** On bar-type letters: BS 1478:1967 used R = round mild steel and H = high yield. Under **BS 8666:2005**, H = grade B500A, B500B or B500C to BS 4449:2005. A typical general note reads "All reinforcement shall be cut or bent to comply with BS 8666:2005". — search summary citing [Concrete Society "Detailing symbols (previous & current)"](https://www.concrete.org.uk/fingertips/detailing-symbols-previous-current/) and [Scribd BS 8666:2005](https://www.scribd.com/document/99962070/BS-Code-8666-2005-Steel-Reinforcement-for-Concrete) (UK sources; SG usage inferred)
- **[observed_practice]** Where 'T' appears in drawings, it is used both for legacy "high tensile" bars and for "Top" (with 'B' for Bottom), so it is ambiguous. — [Quora T vs H rebars](https://www.quora.com/What-is-the-difference-between-T-rebars-and-H-rebars); [Joitech symbols guide](https://www.joitech.com/post/standard-symbols-and-notations-in-rebar-drawings-a-complete-guide) (low-quality sources)
- **[unverified]** Background knowledge of BS 8666:2020, the current UK edition, which SG detailers widely use: H = B500A, B or C; B = B500B or B500C; C = B500C; S = stainless; X = other. Shape codes run 00–99 in two digits (e.g. 00 straight, 11 L-bar, 21 U-bar, 51 closed link, 99 special). Layer and face codes are T1/T2 (top), B1/B2 (bottom), NF/FF (near/far face) and EF (each face). The standard label syntax is `<number><type><dia>-<bar mark>-<spacing> <layer>`, e.g. `12H16-01-200 B1`, with simpler forms such as `4H25` or `H10-200`.
- **[unverified]** SG rebar sizes are said to include **13 mm** (H13) alongside 10, 12, 16, 20, 25, 32 and 40. One search summary noted "Singapore rebar products are available in 13mm diameters" without a primary source. — cf. [BRC Asia Rebar](https://www.brc.com.sg/products-services/rebar/); [HG Construction Steel rebar](https://www.hgmetal.com/hgcs/rebar/)

### Inferences
- The SG fabric code "A10" is best read as 10 mm wire @ 200 mm both ways, about 393 mm²/m and close to UK A393. Likewise A8 ≈ A252 and A7 ≈ A193. This is inferred from the BRC catalogue (A-number = diameter, 200 × 200 spacing). It is **not** from the SS 561 table, which could not be read. TBIM should keep an SG fabric table (A6…A13, plus B- and D-type if needed) separate from the UK table.
- TBIM should use BS 8666 as the scheduling engine (shape codes, labels) with bar type "H" as the default. It should allow "R" for legacy mild steel, and treat "T" as a legacy alias that must not be confused with the "T1/T2" layer codes.

### Gaps
- Whether SS 560 (or an SS equivalent to BS 8666) specifies its own bar-type letter or scheduling standard was not established. No SS scheduling standard was found; SG appears to use BS 8666 directly.
- The SS 561 preferred-fabric table (designations, diameters, pitches, areas) was not read, because the BRC/SS preview PDFs were blocked.
- No SG consultant's published "general notes" sheet with lap/anchorage/cover wording was reached.

---

## Q3. Concrete grade notation, structural steel, welding and bolts

### Takeaway
Concrete is specified to **SS EN 206:2014 + SS 544-1/-2:2019**, using Eurocode strength classes (e.g. C32/40). "Grade 40" is the legacy BS 8110 cube-grade notation. The steel basis is SS EN 1993 with BC1:2012 for material acceptance. Welding-symbol and bolt-grade standards specific to SG were not found.

### Cited Findings
- **[standard]** **SS 544** holds Singapore's complementary provisions to **SS EN 206** (the SG equivalent of UK BS 8500). Together they cover the specification, production and conformity of fresh concrete. SS 544-1 allows **100 mm cubes** with the same conformity criteria as 150 mm cubes. — [SS 544-1:2014 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180521094432SS+544-1-2014+-+Preview.pdf&pdtid=44ed810d-7395-41d3-819f-66c6d92ae2f3); [SS EN 206:2014 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180331122758SS+EN+206-2014_Preview.pdf&pdtid=34648f22-eb78-43db-93c1-5fbe1a7b8866); [SS 544-1:2019 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=200220170943SS+544-1-2019+Preview.pdf&pdtid=8fca07f8-e70d-4573-8b13-6be0b5c92cf2); [SS 544-2:2019 Amd1](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=210629084312SS+544-2_Amd1.pdf&pdtid=5bdec927-6c6e-4c36-87f5-037aadd58599)
- **[agency]** A 2025 BCA circular on SS EN 206 / SS 544 exists: APPBCA-2025-19. — [BCA circular appbca-2025-19](https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/circulars/appbca-2025-19-ss-en-206-ss-544.pdf) (blocked; title only)
- **[observed_practice]** Ready-mixed concrete is certified to SS EN 206:2014 and SS 544 Parts 1 & 2:2019. — [SOCOTEC Singapore](https://www.socotec-certification-international.sg/product-certification/construction-related-industries/ready-mixed-concrete-ss-en-206-ss-544)
- **[observed_practice]** Class notation **C32/40** (cylinder/cube) is in use. A paper notes a design margin of 8 MPa for C32/40, with production at about (40±4) MPa. — [IEM "EN 206 Conformity Testing"](https://www.myiem.org.my/download/downloadlink.aspx?fn=12078_EN+206+Conformity+Testing+for+Concrete+Strength.pdf&id=12078) (Malaysian source discussing SS 544)
- **[agency]** BC1:2012 governs acceptance of structural steel materials (BS EN and non-BS EN) for SS EN 1993 design. — [BCA BC1 handbook](https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/for-industry/sustainable-construction/bc1_handbook_amd_c.pdf)
- **[unverified]** Background knowledge, not verified this session:
  - SG steel sections use UK names (UB, UC, PFC, CHS/RHS/SHS, e.g. `UB 457x191x67`) in steel grades S275/S355 to (BS) EN 10025.
  - Welding symbols follow BS EN ISO 2553.
  - Bolts are property class 8.8/10.9 to ISO 898-1 / BS EN 14399 (HSFG/preloaded).
  - No "SS 540" steel standard was confirmed.

### Inferences
- The SG profile should show concrete as `C32/40`-style classes, with an optional legacy alias of "Grade 40". It should reuse the UK/Eurocode steel-section library, not an AISC or JIS one.

### Gaps
- No SG source confirmed the welding-symbol standard, bolt-grade conventions, or whether SS EN 10025 exists as an SS identical adoption.

---

## Q4. Member marking conventions and pile notation

### Takeaway
No authoritative SG standard for member marks was found. Marking is firm-specific practice, increasingly constrained by the IFC-SG component list. Bored piles are the dominant deep foundation, with spun piles, barrettes and caissons also used.

### Cited Findings
- **[observed_practice]** Columns are marked C1, C2… on the grid layout. Tags seen include BMxx (concrete beams), Cxx (columns) and Bxx (slab bottom reinforcement). — [PocketPillar "How to read structural drawings"](https://pocketpillar.com/blog/how-to-read-structural-drawings); [Scribd "S1-03 Structural symbols and notations"](https://www.scribd.com/document/705942403/S1-03-STRUCTURAL-SYMBOLS-AND-NOTATIONS) (neither is confirmed as SG-specific)
- **[agency]** CORENET published a structural BIM e-submission template (2011) and a Singapore BIM Guide v2. Both likely define element naming, but neither could be read. — [CORENET structural e-submission template](https://corenet.gov.sg/media/585987/01BIMSubmissionTemplate_Struc-Apr11_A1.pdf); [Singapore BIM Guide V2](https://www.corenet.gov.sg/media/586132/Singapore-BIM-Guide_V2.pdf); [Code of Practice for BIM e-Submission](https://www.corenet.gov.sg/media/2032996/3_cp_for_bim-esubmission_cs_v1.pdf)
- **[observed_practice]** Bored cast-in-situ piles are Singapore's most common deep foundation. Barrette, large-diameter caisson and pre-stressed concrete spun piles are also used for high-rises. — [T.G. Ng, "Piled Foundation for High-Rise Buildings in Singapore" (ISSMGE)](https://htc.issmge.org/uploads/contributions/L8-piled-foundation-for-high-rise-buildings-in-singapore.pdf); [CVC Engineers](https://www.cvcengineers.com/post/foundation-design-singapore-pile-types-site-investigation)
- **[agency/observed]** "Guidelines on local practices for pile foundation design and construction" (hosted on a gov.sg isomer site). — [Guideline PDF](https://isomer-user-content.by.gov.sg/338/4dd6e04e-963c-450e-888a-8c2fe30828ac/Guideline%20on%20local%20practices%20for%20pile%20foundation%20design%20and%20construction_.pdf) (not read)
- **[unverified]** Common SG practice from background knowledge:
  - Storey-prefixed beam marks: `2B1` = 2nd-storey beam 1, `RB1` = roof beam, `GB1` = ground beam.
  - Other marks: `TB` (transfer beam, sometimes tie beam), `C1`/`2C1`, `S1` (slab), `W1`/`SW1` (wall/shear wall), `P1`/`BP1` (bored pile), `SP` (spun pile), `MP` (micropile), `PC1` (pile cap).
  - Pile schedules list pile type, diameter, working load, cut-off level (SHD) and toe level.

### Inferences
- TBIM should make member-mark prefixes a configurable table in the SG profile, not a hard-coded convention, because no SG standard fixes them.

### Gaps
- The IFC-SG glossary and the CORENET structural template, the best candidates for an "official" naming list, were blocked.
- No micropile notation evidence was found.

---

## Q5. Civil: LTA (roads/rail), PUB (drainage, sewerage), NParks (trees)

### Takeaway
The key current documents are:
- **LTA:** Standard Details of Road Elements (SDRE), April 2014 edition. Revision F is dated April 2024, and **Revision H (Sep 2025) takes effect 1 Mar 2026**. Chapter 8 covers Road Markings & Signs.
- **LTA:** Civil Design Criteria for Road and Rail Transit Systems. Chainages are in metres to 3 decimals.
- **PUB:** COP on Surface Water Drainage, **7th Ed. (Dec 2018) + Addendum No. 3 (Apr 2025)**.
- **PUB:** COP on Sewerage & Sanitary Works, **3rd Ed. (Mar 2025)**, with new requirements effective 1 Sep 2025.
- **NParks:** Parks and Trees Act 2005. Tree Conservation Areas are defined by girth > 1.0 m measured 0.5 m above ground.

### Cited Findings
- **[agency]** SDRE, "April 2014 Edition, Revision F: April 2024". — [LTA SDRE content page Apr 2024](https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/Content_Page_April_2024.pdf)
- **[agency]** SDRE has 11 chapters: pavements, drains, kerbs, footpaths, railings, guardrails, signs, markings, traffic management measures, sign supports and bus stops. The latest is **Revision H (Sep 2025), effective 1 Mar 2026**. — [LTA Transport Infrastructure Design Criteria & Specifications](https://www.lta.gov.sg/content/ltagov/en/industry_innovations/industry_matters/development_construction_resources/Transport_Infrastructure_Design_Criteria_and_Specifications.html) (search summary)
- **[agency]** Chapter 8 "Road Markings & Signs" is file **SDRE14-8 RMS 1-14 (March 2025)**. It specifies thermoplastic marking thickness from **1.5 mm to 5 mm** by marking type, and includes double zig-zag yellow lines at road edges (no stopping). Line widths and dash/gap lengths were not captured. — [LTA SDRE14-8_RMS_1-14_March_2025.pdf](https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14_March_2025.pdf); older revision mirror: [Scribd SDRE14-8 RMS REV17](https://www.scribd.com/document/431254592/SDRE14-8-RMS-1-14-REV17)
- **[observed_practice]** Singapore road signs closely follow UK traffic sign regulations, with local deviations. — [Wikipedia Road signs in Singapore](https://en.wikipedia.org/wiki/Road_signs_in_Singapore)
- **[agency]** LTA publishes lane-marking geometry as open data (GeoJSON). — [data.gov.sg LTA Lane Marking](https://data.gov.sg/datasets/d_fa71cc0c433275f4d2b0133358cc4fbf/view)
- **[agency]** Civil Design Criteria chainage rule: "Chainages shall be quoted in metres to three decimal places and shall be measured along the centre line of each individual track in plan with no correction for differences in elevation." A nominal **10 m jump in chainage** is provided on each track at each station centre line. — [LTA Civil Design Criteria (Scribd mirror)](https://es.scribd.com/doc/178365596/LTA-Civil-standards-Civil-Design-Criteria); [PDFCOFFEE mirror](https://pdfcoffee.com/lta-civilstandards-civil-design-criteria-3-pdf-free.html)
- **[agency]** PUB COP on Surface Water Drainage: the current version is the **Seventh Edition (December 2018) with amendments under Addendum No. 3 (April 2025)**. It covers design storms, minimum platform levels, discharge limits, drainage reserves and Earth Control Measures. Minimum platform, crest and reclamation levels were raised for more intense rainfall and sea-level rise. Critical M&E equipment must sit at or above the minimum platform level. — [PUB COP SWD PDF](https://www.pub.gov.sg/-/media/PUB/PDF/Compliance/Earth-Control-Measures/Code-of-Practice-on-Surface-Water-Drainage.pdf); [PUB Codes of Practice & Standard Drawings](https://www.pub.gov.sg/Professionals/Resources/Code-of-Practices)
- **[agency]** MPL rules (search summary of the PUB COP):
  - The minimum platform level must be at least **300 mm above adjacent road/ground level**.
  - For special facilities and developments linked to underground special facilities, it must be at least **600 mm above adjacent road/ground level**, or other PUB-specified levels, whichever is highest.
  - Critical or key infrastructure uses **300 mm above PUB-modelled flood levels**.
  - Sources: [PUB COP SWD](https://www.pub.gov.sg/-/media/PUB/PDF/Compliance/Earth-Control-Measures/Code-of-Practice-on-Surface-Water-Drainage.pdf); URA circulars on landed housing and MPL: [URA DC16-16](https://www.ura.gov.sg/Corporate/Guidelines/Circulars/dc16-16), [URA DC18-05](https://www.ura.gov.sg/Corporate/Guidelines/Circulars/dc18-05)
- **[agency]** An older 6th Edition (Dec 2011) is available as a readable mirror (FAO). — [FAOLEX COP SWD 6th ed](https://faolex.fao.org/docs/pdf/sin182169.pdf)
- **[agency]** PUB **COP on Sewerage and Sanitary Works, 3rd Edition, Mar 2025**, with new requirements effective **1 Sep 2025**:
  - Minimum manhole depth (cover top to invert) is **1.5 m**.
  - Manholes are spaced at no more than **120 m**.
  - Sewers joining at manholes connect at **soffit levels**. The exception is a new 200 mm sewer joining an existing 150 mm sewer downstream, which connects at **invert** level.
  - Sources: [PUB COP SSW 3rd Ed PDF](https://www.pub.gov.sg/-/media/PUB/PDF/Code-of-Practice-on-Sewerage-and-Sanitary-Works-3rd-Edition--Mar-2025.pdf); [Yumpu older edition](https://www.yumpu.com/en/document/view/8545299/code-of-practice-sewerage-and-sanitary-works-pub/16). Some figures may come from older editions.
- **[agency]** NParks Tree Conservation Areas were gazetted on **2 Aug 1991** (Parks and Trees (Preservation of Trees) Order 1991). "Mature" means girth > **1.0 m measured 0.5 m above ground**. Written approval from the Commissioner of Parks & Recreation is needed to fell such trees in a TCA or on vacant land. Submission plans must state species, girth and height of existing trees, and an arborist report may be required. — [NParks DC submission RNPB00006](https://www.corenet.gov.sg/einfo/Uploads/Codes/RNPB00006.pdf); [Parks and Trees Act 2005](https://sso.agc.gov.sg/Act/PTA2005); [Wikipedia TCAs](https://en.wikipedia.org/wiki/Tree_conservation_areas_in_Singapore); TCA polygons: [data.gov.sg Tree Conservation Area](https://data.gov.sg/dataset/tree-conservation-area)
- **[unverified]** The chainage label format `CH 0+000` (km+m) is common international practice. LTA's text only requires metres to 3 decimals, so rail drawings may show e.g. `CH 12345.678`. SG road-marking colours are white for lane and edge lines, and yellow for single/double yellow parking prohibitions and zig-zags ([Wikipedia Yellow line](https://en.wikipedia.org/wiki/Yellow_line_(road_marking))). Exact widths (e.g. 100/150/200 mm) are not verified.

### Inferences
- TBIM civil annotation for SG should label levels as `xx.xxx m SHD` (see Q6). Drain and sewer invert labels should be "IL xx.xxx" in SHD. Platform checks should compare against MPL = max(road/ground + 300 mm, other PUB-specified levels), with a 600 mm case for special facilities.
- LTA open data (lane markings) and NParks TCA polygons can be imported directly into a TBIM site model.

### Gaps
- SDRE line widths, dash/gap lengths and drain drawing numbers were not captured (PDF text not read).
- PUB standard drawing symbols for drains, culverts and sumps were not obtained, and neither were the absolute MPL values in m SHD (e.g. coastal/reclamation levels).
- No NParks symbol legend for tree-protection drawings was found.

---

## Q6. Survey: SVY21, SHD, ISN, boundary marks, lot numbering, benchmarks

### Takeaway
- **Horizontal:** SVY21 / Singapore TM (**EPSG:3414**), a transverse Mercator projection on WGS84.
- **Vertical:** **Singapore Height Datum (SHD, EPSG datum 1140)**, based on the mean sea level at Victoria Dock (Tanjong Pagar) from 1935–1937. The network was readjusted in 2009, and SLA/LSB pushed SHD use from 2015/2016.
- **Old datum:** the old "PWD datum" of **+100 m** (so SHD = old RL − 100.000 m) is deprecated.
- **Compound CRS:** EPSG:6927 = SVY21/Singapore TM + SHD height.
- **Cadastre:** coordinate-based since 2004. Lots are identified as `MK nn Lot nnnnX` or `TS nn Lot nnnnX`, with `U` marking strata lots.

### Cited Findings
- **[agency]** SVY21 is EPSG:3414. BCA's CORENET X geo-referencing guidance says models must use SVY21 (EPSG:3414) for x,y and SHD for z. — [BCA CORENET X geo-referencing](https://www1.bca.gov.sg/regulatory-info/building-control/corenet-x/resources/geo-referencing); [CORENET IFC-SG "Checking Levels (Z-Coordinates)"](https://info.corenet.gov.sg/ifc-sg/model-setup-and-coordination/checking-levels-(z-coordinates)); [epsg.io/3414](https://epsg.io/3414); [spatialreference.org 3414](https://spatialreference.org/ref/epsg/3414/)
- **[standard]** **EPSG:6927** is "SVY21 / Singapore TM + SHD height". — [epsg.io/6927](https://epsg.io/6927)
- **[observed_practice]** SVY21 is a transverse-Mercator projection on the WGS84 ellipsoid, with its origin near the centre of Singapore and N/E in metres. It is used for cadastral, engineering and topographic survey, onshore and offshore. — [Easepect blog](https://easepect.com/blog/svy21-coordinate-system-explained/)
- **[unverified]** EPSG:3414 parameters (background knowledge):
  - Latitude of origin 1°22'02.9154"N; central meridian 103°49'31.9752"E.
  - Scale factor 1.0.
  - False easting 28001.642 m; false northing 38744.572 m.
  - Check against [epsg.io/3414](https://epsg.io/3414).
- **[standard]** SHD is EPSG datum 1140. It is based on mean sea level at the Victoria Dock tide gauge (Tanjong Pagar), 1935–1937, and the network was readjusted in 2009. — [epsg.org datum 1140](https://epsg.org/datum_1140/Singapore-Height-Datum.html); [pacificprojections 1140](http://pacificprojections.spc.int/1140-datum); SLA geoid model [SGEOID09 (SiReNT)](https://app.sla.gov.sg/sirent/About/SGEOID09); [Victor Khoo, SLA, FIG 2015 "Singapore Height Datum"](https://fig.net/resources/proceedings/2015/2015_07_vrfp_comm5/5A_Khoo_Singapore_Height_Datum.pdf)
- **[agency]** LSB/SLA notice "Singapore Height Datum (SHD) in Survey Plans — Implementation Advice" (Feb 2016):
  - SHD is at height 0.000 m.
  - A false datum of **+100 m ("PWD Datum")** was previously used in topographical, engineering and building contracts.
  - SHD should be adopted for all new contracts, because the +100 m false datum causes confusion for underground levels that may lie more than 100 m below SHD.
  - Sources: [SISV copy of LSB notice](https://www.sisv.org.sg/Publications/CS_Circular/LSB%20NOTICE%20ON%20SHD%20IN%20SURVEY%20PLANS%20%20IMPLEMENTATION%20ADVICE_RS%20(2).pdf); [SGNYSS blog repost](https://sgnyss.wordpress.com/2016/02/10/lsb-notice-singapore-height-datum-shd-in-survey-plans-implementation-advice/); [Scribd copy](https://www.scribd.com/document/489805342/SLA-Singapore-Height-Datum-in-Survey-Plans)
- **[observed_practice]** SLA introduced the SHD term in 2015 for industry standardisation, replacing the "AMSL" +100.00 m usage. — [103 EAST Architects dictionary](http://www.103east.sg/architectural-dictionary/s/singapore-height-datum-shd/)
- **[agency]** Survey control:
  - SLA maintains a horizontal and a vertical control network.
  - The horizontal ISN (Integrated Survey Network) has Primary and Secondary networks. The primary network has about **39 points**, mostly on HDB rooftops.
  - The precise levelling network has about **500 benchmarks at ~1 km intervals** along major roads.
  - Another source says the ISN has been in place since 1999, with about **65 first-order markers** established since 1995. This conflicts with the "about 39 primary points" figure and may be a different count or date.
  - Sources: [SLA Survey Reference System](https://www.sla.gov.sg/regulatory/property-boundaries/survey-reference-system/); [UN-GGIM paper (Soon Kean Huat)](https://ggim.un.org/2unwgic/documents/Kean%20Huat%20Soon.pdf); [UNRCCAP CRP9](https://unstats.un.org/unsd/geoinfo/rcc/docs/rccap17/crp/17th_UNRCCAP_econf.97_5_CRP9.pdf); SLA circular [Survey Control Marks](https://www.sla.gov.sg/qql/slot/u143/Newsroom/Circulars/2014/csdsgsd/surveycontrolmarks.pdf) (not read)
- **[agency]** SLA launched the SVY21 cadastral system in **August 2004**. The "Coordinated Cadastre" replaced the Cassini-based system, so boundaries are defined by **coordinates** instead of bearings and distances. Previously, physical boundary marks and monuments defined positions, and many were lost over time. — [ask.gov.sg SLA SVY21](https://ask.gov.sg/sla?topic=Approval+of+Survey+Plans+and+Maintenance+of+National+Land+Survey+System&subtopic=SVY21+and+other+cadastral+survey+systems); [SLA Property Boundaries](https://www1.sla.gov.sg/property-boundary-n-ownership/property-boundaries)
- **[agency]** Statutory rules: Boundaries and Survey Maps (Conduct of Cadastral Surveys) Rules 2005, under BSMA 1998. These specify boundary marks and plan content, but the text could not be read. — [SSO BSMA1998-R5](https://sso.agc.gov.sg/SL/BSMA1998-R5?DocDate=20070702); professional directives: [LSB Directives on Land Survey and Geomatics Practices 2022](https://lsb.mlaw.gov.sg/files/LSB_Directives_ver1.pdf)
- **[agency]** Lot identifier = survey district (Mukim **MK** or Town Subdivision **TS** number) + lot number. There are **34 Mukims** (outer areas) and **30 Town Subdivisions** (city area). A land lot looks like `MK 10 Lot 123X`, with no letter after the MK/TS number. A strata lot looks like `MK 20 Lot U123X`, where **U** marks a strata unit. SLA allocates lot numbers, and a survey plan shows each lot's location and boundaries. — [SLA Allocation of Lot Numbers](https://www.sla.gov.sg/regulatory/property-boundaries/allocation-of-lot-numbers/); [SLA Survey Maps and Plans](https://www.sla.gov.sg/regulatory/property-boundaries/survey-maps-and-plans/); [C&H Regulations](https://regulations.candh.com.sg/home-for-sale-in-singapore-identification/)
- **[agency]** SLA has a "Standard and Specifications for Utility Survey in Singapore, Version 1.0 (Aug 2017)". It is likely the best source for utility and survey symbology, but could not be read. — [SLA Utility Survey Standard PDF](https://www.sla.gov.sg/qql/slot/u143/Newsroom/Circulars/Survey%20Services/Other%20Information/Standard%20and%20Specifications%20for%20Utility%20Survey%20in%20Singapore%20Version%201.0%20-%20Aug%202017.pdf)
- **[unverified]** The SHD-height EPSG code is believed to be **EPSG:6916**. The trailing letter in lot numbers (e.g. "123**X**") is believed to be a check letter.

### Inferences
- The TBIM SG profile should:
  - Default CRS to EPSG:3414, with vertical SHD (compound EPSG:6927).
  - Display levels as e.g. `+12.350 m SHD` or `RL 12.350 (SHD)`.
  - Offer a one-click legacy conversion: **SHD = old PWD RL − 100.000 m**. This is a nominal false-origin shift. Any small datum-realisation differences from the 2009 readjustment are not quantified here.
  - Use the lot-number pattern `^(MK|TS)\s?\d{1,2}\s+Lot\s+U?\d+[A-Z]$`, which is inferred from the SLA examples.

### Gaps
- Not found: official boundary-mark types and symbols (e.g. granite stone, concrete, iron pin, nail, cut mark), certified plan (CP) legends, and a benchmark/spot-level label format. The SSO rules and SLA circulars were blocked.
- The SHD 2009 readjustment's offsets from pre-2009 heights were not found.

---

**Method note:** About 36 tool calls were made. All 20 direct WebFetch attempts were EGRESS_BLOCKED, so every citation above rests on search-engine snippets and summaries of the cited URL. Items tagged [unverified] come from background knowledge and should be confirmed against the SS eShop, BCA, LTA, PUB or SLA originals before being hard-coded in TBIM.
