# Singapore (SG) Standards and Drawing Symbols for MEP and Fire Safety Drawings (for a TBIM "SG" profile)

Research date: 2026-09-27. Evidence method note: the egress proxy blocked every page fetch (scdf.gov.sg, singaporestandardseshop.sg, pub.gov.sg, ema.gov.sg, spgroup.com.sg, imda.gov.sg, info.corenet.gov.sg, scribd, pdfcoffee, studylib, medium, wikipedia, and consultant sites were all refused; see proxy log). **All findings below come from web-search result snippets and the titles/URLs of primary documents**, not from reading the documents in full. Standard numbers and editions shown in eShop product titles (e.g. "SS 575:2012+A1:2021") are strong evidence, since those titles are the publisher's own record. Content claims taken from snippets are weaker. Each item carries one of these tags:
- **[standard]**: a Singapore Standard (SS/CP) record, such as an eShop title or preview
- **[agency]**: SCDF / EMA / PUB / IMDA / URA / SP Group document or page
- **[observed_practice]**: consultant, vendor or tender material
- **[unverified]**: my own knowledge or inference, not confirmed by a source reached in this session

---

## Q1. Electrical: SS 638, EMA/LEW, SP Group, SLD conventions, cable designations, conductor colours, SS 555, SS 563, COPIF

### Takeaway
Singapore electrical design follows the BS 7671 / IEC lineage. SS 638:2018 (current consolidated edition SS 638:2018+C1:2020+A1:2022) is a modified adoption of BS 7671:2008 and replaced CP 5. The IEC harmonised core colours (brown/black/grey, blue, green-yellow) have been mandatory since 1 March 2009. No Singapore Standard for electrical graphical symbols was found; practice uses IEC 60617 symbols. Lightning protection follows SS 555 Parts 1-4:2018 (an adoption of IEC 62305). Emergency lighting follows SS 563-1/-2:2010 (2017). Telecom follows IMDA COPIF 2018.

### Cited Findings
**SS 638 (Code of practice for electrical installations)**
- [standard] The current eShop record is **SS 638:2018+C1:2020+A1:2022**. — [SS eShop product page](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/fd1f48ab-6e55-49f4-a725-5addcb22654e); the NLB catalogue lists "SS 638:2018+C1/A1:2022" — [NLB](https://eresources.nlb.gov.sg/publicationsg/details.html?uuid=ceece5ee-a36a-4f52-8807-8808fff48749)
- [standard] SS 638:2018 is a revision of CP 5:1998, renumbered as SS 638. It is a **modified adoption of BS 7671:2008** "Requirements for electrical installations" and incorporates Amendments 1, 2 and 3. It covers installations up to 1000 V a.c. / 1500 V d.c., wiring systems and cables, external consumer installations, and fixed wiring for ICT/signalling/control. — [SS 638:2018 preview (eShop)](https://www.singaporestandardseshop.sg/product/getpdf?filename=190215172027ss+638-2018+-+preview.pdf&pdtid=fd1f48ab-6e55-49f4-a725-5addcb22654e)
- [agency] SP Group hosts an SS 638 overview PDF — [SP Group SS638 PDF](https://www.spgroup.com.sg/dam/jcr:c39d8297-143c-4bc4-88f8-f6a2c71f4b23/%20SS638%20Code%20of%20Practice%20for%20Electrical%20Installations.pdf). EMA publishes a list of the Singapore Standards and Technical References it applies — [EMA standards page](https://www.ema.gov.sg/regulations-licences/regulations/standards-guidelines/singapore-standards-and-technical-references) (not readable; blocked).
- [observed_practice] Context: the UK base document has moved on. BS 7671:2018+A4:2026 was issued on 15 April 2026, and the previous version is withdrawn on 15 October 2026. SS 638 still traces to BS 7671:2008+A3 and has not caught up. — [BSI Knowledge](https://knowledge.bsigroup.com/articles/bs-7671-2018-a4-2026-get-the-latest-amendment-to-the-uks-wiring-regulations)
- No search snippet said whether SS 638 contains graphical symbols or refers to IEC 60617 / BS EN 60617 (see Gaps).

**Conductor colours**
- [agency] EMA made the new (IEC harmonised) cable colour code mandatory for all new electrical installations from **1 March 2009**, after a transition period. The code was introduced through Amendment No. 1 to CP 5:1998. — [EMA media release 2009](https://www.ema.gov.sg/news-events/news/media-releases/2009/new-wiring-cable-colour-code-for-fixed-electrical-installations); [EMA fact sheet on CP5 Amd 1](https://elise.ema.gov.sg/safety/CP5-Amd%201_27-Feb-2009-%20Fact-Sheet.pdf); [EMA Circular RD-E01-09 to all LEWs](https://elise.ema.gov.sg/eguides/Circular_No_RD-E01-09.pdf)
- [agency / observed_practice] The three live phases are **brown, black, grey**, replacing the old red, yellow, blue. Neutral is **blue** and protective earth is **green-and-yellow**. For single phase, live is brown. — [EMA ELISE "New Cable Colour Code"](https://elise.ema.gov.sg/safety/about.html); [fixmove.sg blog](https://www.fixmove.sg/blog/electrical-wire-colour-codes-singapore.html)

**EMA / LEW / SP Group submission conventions**
- [agency] SP Group's handbook "How to Apply for Electricity Connection" says single-line diagrams (SLDs) go to the Electrical Installation Section of SP Services (SPSL), and the LEW must be present when SPSL inspects the installation. — [SP Group handbook PDF](https://www.spgroup.com.sg/dam/jcr:66289889-80d2-4559-a479-a804d5323f19/How%20to%20Apply%20for%20Electricity%20Connection.pdf); mirror: [bengbeng.com.sg copy](https://www.bengbeng.com.sg/downloads/sp_guide.pdf)
- [agency] For a consumer substation, **the LEW submits 2 sets of plans to SP PowerGrid (SPPG) for vetting** before construction. The set contains the site/location plan, detailed layout plans, sections and elevations, the electrical layout with a single-line drawing, and other details. One endorsed set is returned to the LEW. The Supply Agreement follows after the substation plans are endorsed. Endorsement is handled by East and West zones. — [SP Group handbook](https://www.spgroup.com.sg/dam/jcr:66289889-80d2-4559-a479-a804d5323f19/How%20to%20Apply%20for%20Electricity%20Connection.pdf)
- [agency] EMA handbook on applying for an Electrical Installation Licence — [EMA handbook PDF](https://www.ema.gov.sg/content/dam/corporate/resources/educational-materials/handbook/handbook-pdfs/english/EMA-Resources-Educational-Materials-Handbook-Application-Electrical-Installation-Licence.pdf) (content not read)
- [observed_practice] An older SP PowerGrid document, "SPPG 66kV Ed. 7.2 Feb 2012", exists as a mirror — [pdfcoffee](https://pdfcoffee.com/sppg-66kv-ed72-feb-2012-pdf-free.html); the "PowerGrid Handbook" also has a mirror — [pdfcoffee](https://pdfcoffee.com/powergrid-handbook-pdf-free.html)

**SLD symbols**
- [observed_practice] IEC 60617 is described as the single-line-diagram symbol standard used in Europe, China, Australia, the Middle East and most of Asia, **including Singapore**. ANSI/IEEE 315 is its US counterpart. — [SmartSLD cheat sheet](https://smartsld.com/blog/single-line-diagram-symbols/); IEC 60617 online database — [IEC std.iec.ch/iec60617](https://std.iec.ch/iec60617)
- Caution: one search-engine summary expanded "LEW" as "Lewden/cable gland". **That is wrong.** In Singapore, LEW means Licensed Electrical Worker, as the EMA circular addressed "All Licensed Electrical Workers" shows — [EMA Circular RD-E01-09](https://elise.ema.gov.sg/eguides/Circular_No_RD-E01-09.pdf)

**Lightning protection SS 555**
- [standard] SS 555 is issued in 4 parts, all aligned with IEC 62305. Current records: **SS 555-1:2018+C1:2019 (IEC 62305-1:2010, MOD)** — [eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/788a1d1a-8c65-40e7-9717-449a6f025f26); **SS 555-4:2018 (IEC 62305-4:2010, IDT)** — [eShop preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180829102511SS+555-4-2018+Preview.pdf&pdtid=225398a8-954b-44b9-815d-93dfbcce0ba4); SS 555-3:2018 preview mirror — [studylib](https://studylib.net/doc/27741045/ss-555-3-2018-preview). These replaced the 2010 parts — [SS 555-1:2010 preview](http://www.singaporestandardseshop.sg/data/ECopyFileStore/101118175258SS%20555-1-2010%20-%20Preview.pdf)
- [observed_practice] SS 555 is described as the deemed-to-satisfy standard adopted by BCA for lightning protection design. — [aectechnicalsg.com](https://www.aectechnicalsg.com/lightning-protection-requirements)

**Emergency lighting SS 563**
- [standard] **SS 563-1:2010 (2017)** and **SS 563-2:2010 (2017)**+Amd 1, "Code of practice for the design, installation and maintenance of emergency lighting and power supply systems in buildings". No newer edition was found. — [eShop SS 563-1](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/4822c432-b465-454b-91ec-07a03cbf8b13); [eShop SS 563-2](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/7da463a1-dfa3-48bc-a08f-4f04759fed2d)
- [observed_practice] Escape route centre-line illuminance must be at least 0.5 lux at floor level for at least 1 h, and the failure of a single luminaire must not leave an area in darkness. — [brite.sg checklist](https://www.brite.sg/post/the-ultimate-emergency-lighting-scdf-ss-563-compliance-checklist-for-singapore-mcsts)

**Telecom COPIF**
- [agency] **COPIF 2018** (Code of Practice for Info-communication Facilities in Buildings) and the COPIF Guidelines took effect on **15 December 2018**. COPIF first came into force on 1 April 2000. — [IMDA consultation page](https://www.imda.gov.sg/regulations-and-licences/regulations/consultations/consultation-papers/2018/review-of-the-code-of-practice-for-info-communication-facilities-in-buildings-copif); [COPIF 2018 PDF](https://www.imda.gov.sg/-/media/imda/files/regulation-licensing-and-consultations/consultations/completed-consultations/consultation-papers/11/copif-2018.pdf); [IMDA Codes of Practice listing](https://www.imda.gov.sg/regulations-and-licences/regulations/codes-of-practice/codes-of-practice-and-guidelines---infocomm)
- [observed_practice] Allen & Gledhill reports that IMDA has consulted on amendments to COPIF. Whether a post-2018 edition is now in force was not confirmed. — [Allen & Gledhill](https://www.allenandgledhill.com/sg/publication/articles/32849/imda-consults-on-amendments-to-code-of-practice-for-info-communication-facilities-in-buildings)

### Inferences
- A TBIM SG electrical profile should use **IEC 60617 symbols** for SLDs and layouts, and **IEC harmonised colours**: L1 brown, L2 black, L3 grey, N blue, PE green-yellow.
- Title blocks and SLD sheets should carry an LEW endorsement field (name, licence number, grade). This is inferred from the SP/EMA workflow, which puts LEW-submitted SLDs and substation plans at the centre. **[unverified]**: the exact title-block wording required by EMA/SP was not found.
- **[unverified]** From my own knowledge of SG consultant practice, not confirmed this session: common SLD abbreviations are MSB, SSB (sub-switchboard), DB, EMSB (essential MSB), ACB, MCCB, MCB, RCCB/ELCB, ATS, CT/VT, kWh meter, SPD. A typical cable designation reads "4 x 1C 240mm² Cu/XLPE/PVC + 1C 120mm² Cu/PVC CPC", or "E" instead of CPC for the earth conductor, and fire-rated circuits are marked "FR". This fits the BS 7671/BS 6724-type naming lineage, but I found no SG source that defines the format.

### Gaps
- Could not confirm whether SS 638 contains a graphical-symbols annex or normatively cites IEC 60617 / BS EN 60617. The eShop and EMA pages were blocked.
- Could not confirm whether SS 638 is being revised (for example, towards BS 7671:2018). The Enterprise SG work programme PDF was blocked. Only for CP 52 did a snippet show the programme's contents.
- No official SG cable-designation format was found. The SP Group template or checklist for SLD content (MSB layout, meter position, tariff metering) could not be read.
- No source was found for COPIF symbols; COPIF is mostly about space and facility provision (MDF/TER, risers, lead-in pipes), not symbols.

---

## Q2. Fire: SCDF Fire Code 2023, plan submission colours/legends, and fire-system standards (SS 645, CP 52, SS 575, SS 578, SS 508, SS 563)

### Takeaway
The **Fire Code 2023** was published on 25 Aug 2023 and took effect on **1 March 2024**. At least 5 batches of amendments have been issued since. The standards it relies on are: fire alarm **SS 645:2019** (replaced CP 10, from 1 Apr 2020); sprinklers **CP 52:2004**, still current and scheduled for revision in 2H 2026; hydrant/rising main/hose reel **SS 575:2012+A1:2021**; extinguishers **SS 578:2019+A1:2022**; safety signs **SS 508 (parts 1/3/5:2013)**; emergency lighting **SS 563:2010(2017)**. Fire Code clause 6.7 requires fire-protection equipment to be painted red, or given ≥20 mm red bands plus labels. For A&A plan submissions, new work is shown in **magenta** and deletions as **yellow dotted lines**. No SCDF-published colour legend for compartment lines or escape routes was found.

### Cited Findings
**Fire Code 2023**
- [agency] SCDF published the Code of Practice for Fire Precautions in Buildings 2023 on **25 August 2023**, effective **1 March 2024** for plans submitted on or after that date. Earlier voluntary adoption was allowed. — [SCDF circular on publication of Fire Code 2023](https://www.scdf.gov.sg/docs/default-source/fssd-downloads/circulars/circular-publication-of-the-code-of-practice-for-fire-precautions-in-buildings-2023-edition.pdf?sfvrsn=5122041a_1); [Fire Code 2023 PDF (consolidated version dated 11-12-2024 per filename)](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/firecode-2023-111220241013.pdf?sfvrsn=b3dc3c15_2); [SCDF Fire Code 2023 page](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023)
- [agency] Amendments exist through at least a **5th batch**: [Circular 5th batch (CORENET info)](https://info.corenet.gov.sg/docs/default-source/scdf-circulars/circular-amendments-to-fire-code-2023---5th-batch-of-amendments.pdf?sfvrsn=8d510320_1); [2nd batch](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/downloads/circulars/circular-amendments-to-fire-code-2023-2nd-batch-of-amendments.pdf?sfvrsn=a3942654_1). The dates of the amendment batches were not visible.
- [agency] Clause 1.2 (Codes and Standards) states that fire protection systems must be maintained to the standards listed in **Table 1.2A**. — [SCDF Clause 1.2](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-1-general/clause-1.2-codes-and-standards). The table's contents could not be read.
- [agency] Relevant chapters: Ch.2 Means of Escape (cl. 2.2, 2.3), Ch.6 Fire-fighting Systems (cl. 6.3 electrical fire alarm, 6.4 sprinklers, 6.7 colour scheme), Ch.8 Emergency lighting & voice communication (cl. 8.1 exit lighting and exit sign). — [cl. 6.3](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-6-firefighting-systems/clause-6.3-electrical-fire-alarm-system); [cl. 6.4](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-6-firefighting-systems/clause-6.4-fire-sprinkler-installation); [cl. 8.1](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-8-emergency-lighting-voice-communication-systems/clause-8.1-exit-lighting-and-exit-sign); [cl. 2.3](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-2-means-of-escape/clause-2.3-means-of-escape-requirements)

**Colour conventions**
- [agency] **Clause 6.7, Colour Scheme of Fire Protection Systems:** equipment, fixtures and fittings of fire protection systems shall be painted **red**. Where pipework, conduits, trunkings and cable trays of fire protection systems are not required to be painted red, **red colour bands at least 20 mm wide and labelling** shall be provided. — [SCDF cl. 6.7](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-6-firefighting-systems/clause-6.7-colour-scheme-of-fire-protection-systems) (text from search snippet only)
- [agency] **Minor Addition & Alteration works:** "all proposed works shall be coloured **magenta** on plan whereas deletion shall be indicated in **yellow dotted lines**". — [SCDF Minor A&A page](https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/minor-addition-alterationworks)
- [agency] SCDF publishes a "Fire Safety Checklist for Building Plan Submissions". Snippets say floor plans must carry gridlines and dimensions. — [SCDF checklist PDF](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/downloads/forms/fire-safety-checklist-for-building-plan-submissions.pdf?sfvrsn=83f335a6_9); [SCDF Plan Approval page](https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/plan-approval)
- [observed_practice] Legends for fire doors, fire shutters and compartmentation colour coding must be consistent across every sheet, not only the cover drawing. The checklist sets metric scales, gridlines, a drawing list, and CAD/BIM file naming. — [structures.com.sg](https://structures.com.sg/scdf-submission-requirements-contractors/)
- [observed_practice] Fire escape plans highlight escape routes, corridors and exit staircases with colours, directional signs and words. The specific colours were not given. — [search snippet summarising SCDF MoE pages](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-2-means-of-escape/clause-2.3-means-of-escape-requirements)
- [observed_practice] Plans are submitted by a QP (registered architect/PE). An alternative solution needs a Fire Safety Engineer plus a peer reviewer. — [structures.com.sg fire engineering](https://structures.com.sg/fire-engineering-design-scdf-compliance-sg/); [aectechnicalsg who submits](https://www.aectechnicalsg.com/who-submits-plans-to-scdf)

**Fire alarm: SS 645 (not CP 10)**
- [standard/agency] **SS 645:2019** "Code of practice for the installation and servicing of electrical fire alarm systems" (formerly CP 10) was launched by Enterprise SG on 29 Aug 2019. SCDF made it mandatory for plans submitted from **1 April 2020**. It covers MCPs, heat, smoke, flame and video-image fire detectors. — [SCDF circular on implementation of SS 645](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/downloads/circulars/circular--implementation-of-ss-645-2019-code-of-practice-for-the-installation-and-servicing-of-electrical-fire-alarm-systems.pdf?sfvrsn=9f5efcb0_1); [SS 645:2019 eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/29b073ce-b184-4cd5-9088-d27f5d9a5022)

**Sprinklers: CP 52**
- [standard] **CP 52:2004** (+Erratum 1) "Code of practice for automatic fire sprinkler system" is still the listed edition. — [eShop CP 52:2004](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/d20796ad-7c95-4e7f-bc87-bac9bed123de); [CP 52 preview](https://www.singaporestandardseshop.sg/product/getpdf?filename=180331123424cp+52-2004%28plus%29err+1_preview.pdf&pdtid=80590a28-6537-4b5d-9cd0-3196f92f0119)
- [agency] The Enterprise SG Work Programme lists CP 52:2004 **for revision in the second half of 2026**. — [Enterprise SG Singapore Standards Work Programme PDF](https://www.enterprisesg.gov.sg/-/media/esg/files/quality-and-standards/standards/singapore_standards_work_programme.pdf) (from snippet)
- [observed_practice] CP 52 is described as based on the BS 5306-2 / LPC lineage and aligned with NFPA 13 / BS EN 12845. — [Medium, Dr T.L. Ang](https://medium.com/@TL.Ang/singapore-standard-code-of-practice-on-automatic-sprinkler-system-7eac259943bc); [CYPE](https://info.cype.com/en/new-feature/code-for-singapore-cp-522004/)

**Hydrant / rising mains / hose reel: SS 575**
- [standard] **SS 575:2012+A1:2021** "Code of practice for fire hydrant, rising mains and hose reel systems" (formerly CP 29). It covers on-premises hydrants, wet and dry rising mains, and hose reels, but not street hydrants. — [eShop SS 575](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/39ec1405-7ab1-4542-bca1-7a2f32eea7dd); [SS 575:2012 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180331114406SS+575-2012_Preview.pdf&pdtid=39ec1405-7ab1-4542-bca1-7a2f32eea7dd)

**Extinguishers: SS 578**
- [standard] **SS 578:2019+A1:2022** "Code of practice for the use and maintenance of portable fire extinguishers" (A1 published Apr 2022). It revises SS 578:2012, which replaced CP 55. — [eShop SS 578](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/98dc5bba-533c-45a5-aafd-3fbafcd7a605); [SCDF FSM briefing on SS 578:2019](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/fire-safety-manager-(fsm)/fsm-2021/fsm-briefing-2021---ss-578-2019.pdf?sfvrsn=ce006f54_1); [Changi Airport circular: CP 55 to SS 578](https://www.changiairport.com/content/dam/cacorp/documents/firepreventioncirculars/2013/2013-04%20Changes%20from%20CP%2055%20to%20SS%20578.pdf)

**Safety signs / exit signs: SS 508 (+ SS 563)**
- [standard] The SS 508 "Graphical symbols – Safety colours and safety signs" series: **SS 508-1:2013** (colours and design principles), **SS 508-2:2008 (2016)**, **SS 508-3:2013**+Amd1 (design of graphical symbols), **SS 508-5:2013** (signs for accident prevention, fire protection and emergency evacuation). — [SS 508-1](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/0b3a7336-b8cf-49df-8ead-1c08a8b1075b); [SS 508-2](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/fda22744-6da1-4429-b031-11e7034a1002); [SS 508-3](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/34676405-d52e-46a1-a053-bb9f6ec99131); [SS 508-5](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/a20b326c-a63d-4ccc-9b60-92fb7502cb84)
- [agency] Fire Code cl. 8.1: the legends, dimensions, design and installation of exit signs and directional signs shall comply with **SS 563 and SS 508**. Graphic or text format may be used. Photoluminescent exit directional signs use the word "EXIT" or the SS 508 exit legend, with an arrow on a **green** ground. The wall-mounted sign is at least 300 mm × 150 mm and is placed 150 to 400 mm above the landing level. — [SCDF cl. 8.1](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-8-emergency-lighting-voice-communication-systems/clause-8.1-exit-lighting-and-exit-sign)
- [observed_practice] The ISO 7010 E001 "running man" pictogram is recorded as used in Singapore. — [People's Graphic Design Archive](https://peoplesgdarchive.org/item/13588/iso-7010-e001-running-man-exit-sign)

**Smoke control**
- No SG-specific smoke-control standard was confirmed this session. Smoke control sits in Fire Code 2023 Ch.7, and ACMV is covered by SS 553 (see Q4). **[unverified]**

### Inferences
- An SG fire legend layer set in TBIM should be driven by Fire Code 2023, with a reference table: FA → SS 645:2019, SPK → CP 52:2004 (flag "revision pending 2026"), hydrant/HR/DRM/WRM → SS 575:2012+A1:2021, extinguisher → SS 578:2019+A1:2022, signs → SS 508-1/3/5:2013 + ISO 7010, EL/exit → SS 563:2010(2017).
- Provide an "A&A mode" preset with proposed work = magenta and deletions = yellow dotted lines. This is agency-sourced.
- **[unverified]** Colours for compartment walls, fire-rated doors, escape routes and smoke-stop lobbies seem to be set per project in the QP's legend, not by SCDF. The only sourced guidance says the legend must be consistent across all sheets. TBIM should make these user-configurable rather than hard-coded.
- **[unverified]** Typical SG fire abbreviations (my own knowledge): MCP/BG (manual call point/break glass), SD, HD, FAP/MFAP (main fire alarm panel), FACP, ASB (alarm stop bell), EVC/EVCP (emergency voice communication), FM (fireman's intercom), DRM/WRM (dry/wet rising main), BI (breeching inlet), HR (hose reel), FH (fire hydrant), SCV (subsidiary control valve), FS (flow switch), TOV/ZCV, EXT (extinguisher), SSL (smoke-stop lobby), FSL (fire-fighting lobby), FC (fire command centre), FE (fire engine) access road. Verify these against a consultant legend before shipping.

### Gaps
- Table 1.2A of Fire Code 2023 (the full list of referenced standards with editions) could not be read, and neither could the text of the plan-submission checklist or the dates of amendment batches 1 to 5.
- No SCDF-mandated drawing symbol set for fire alarm or sprinkler devices was found. It is not known whether SS 645 or CP 52 contain a symbols annex.
- No source was found on smoke-control standards (for example, whether SS 553 or a separate SS governs engineered smoke control).

---

## Q3. Plumbing / sanitary / water / gas: SS 636, PUB COPSSW, NEA, SS 608

### Takeaway
Water services follow **SS 636:2018+A4:2021**, the former CP 48. Sanitary plumbing and drainage follow **PUB's Code of Practice on Sewerage and Sanitary Works, 3rd Edition (Mar 2025)** together with PUB Standard Drawings (e.g. IC frame/cover PUB/WRN/STD/017A). Surface water follows PUB's COP on Surface Water Drainage, 7th Ed (Dec 2018). Gas follows **SS 608:2024**, which EMA made mandatory from 1 Sep 2025. No official list of sanitary drawing abbreviations was reachable.

### Cited Findings
- [standard] **SS 636:2018+A4:2021** "Code of practice for water services" (formerly CP 48:2005). Licensed Plumbers must comply with it under the Public Utilities (Water Supply) Regulations. It covers the path from the PUB supply to the draw-off points, including storage. — [eShop SS 636](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/243b25fd-7b06-4d49-a5e3-4527d82001f8); [SS 636:2018 preview](https://www.singaporestandardseshop.sg/product/getpdf?filename=181017173153ss+636-2018+preview.pdf&pdtid=243b25fd-7b06-4d49-a5e3-4527d82001f8)
- [agency] PUB "Stipulation of Standards & Requirements for Water Fittings" (updated 1 Mar 2023). — [PUB S&R PDF](https://www.pub.gov.sg/-/media/PUB/PDF/PUBStipulationStandardsRequirementsForWaterFittings_1Mar23.pdf)
- [agency] **Code of Practice on Sewerage and Sanitary Works, 3rd Edition, Mar 2025** supersedes the 2nd Edition of Jan 2019. — [PUB COPSSW 3rd ed PDF](https://www.pub.gov.sg/-/media/PUB/PDF/Code-of-Practice-on-Sewerage-and-Sanitary-Works-3rd-Edition--Mar-2025.pdf); [2nd ed PDF](https://www.pub.gov.sg/-/media/PUB/PDF/Compliance/Used-Water/GreaseTrap/COPSSW2nded2019.pdf); [PUB Codes of Practice & Standard Drawings page](https://www.pub.gov.sg/Professionals/Resources/Code-of-Practices)
- [agency] COP on Surface Water Drainage, **7th Edition, Dec 2018**, is listed on the PUB codes page. — [PUB Codes page](https://www.pub.gov.sg/Professionals/Resources/Code-of-Practices)
- [agency] COPSSW snippets: IC (inspection chamber) frames and covers shall comply with **PUB Standard Drawing PUB/WRN/STD/017A** and **SS 30**. Floor traps and floor wastes shall have gratings complying with **SS 213**. Drain-lines connect to the public sewer at a PUB-approved manhole. PUB also publishes standard drawings for floor traps, ICs and grease traps. — [PUB COPSSW](https://www.pub.gov.sg/-/media/PUB/PDF/Code-of-Practice-on-Sewerage-and-Sanitary-Works-3rd-Edition--Mar-2025.pdf); [PUB Standard Drawings & Appendices](https://www.pub.gov.sg/Professionals/Resources/Code-of-Practices/Standard-Drawings?subject=%7BF20C2091-941A-45DB-A10F-22501178CB7C%7D)
- [observed_practice] An SG consultant's M&E specification, "Sanitary Plumbing Installations", for an FAS office A&A project is available as an example of local terminology. — [FAS spec PDF](https://www.fas.org.sg/wp-content/uploads/2020/02/1962-FAS-09-ME-Specifications-Sec.-A-Sanitary-Plumbing-Installations.pdf) (not readable)
- [standard/agency] **SS 608:2024** "Code of practice for gas installation" applies downstream of the gas service isolation valve (GSIV) for town gas or natural gas up to 50 kPa gauge. EMA requires LGSWs and PEs to comply with **SS 608:2024 from 1 September 2025** (EMA Circular RD/G02/2025, issued 1 Sep 2025). — [eShop SS 608:2024](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/20af1379-6a78-42bb-aeeb-f5a69a163646); [EMA circular RD/G02/2025 (REDAS mirror)](https://redas.com/wp-content/uploads/2025/10/EMA-Circular-Amendment-To-The-Gas-Supply-Regulations-Relating-To-Reference-To-Singapore-Standard-SS-608-Code-Of-Practice-For-Gas-Installation-G02_2025.pdf); [EMA Gas Supply Code (Oct 2024)](https://www.ema.gov.sg/content/dam/corporate/regulatory-publications/codes-of-practice/files/EMA-Regulatory-Publications-Codes-of-Practice-Gas-Supply-Code-20241007.pdf)
- [agency/observed_practice] City Energy (the town gas retailer) publishes a Handbook on Gas Supply (v0, Dec 2021) and gas pipe-sizing guidance (Nov 2022). — [City Energy Handbook](https://www.cityenergy.com.sg/wp-content/uploads/2021/11/City-Energy-Handbook-on-Gas-Supply-Dec-2021.pdf); [City Energy pipe sizing](https://www.cityenergy.com.sg/wp-content/uploads/2023/06/Gas-Pipe-Sizing_caa-25-Nov-2022.pdf)

### Inferences
- TBIM SG plumbing families should reference SS 636 (water), COPSSW 3rd ed (sanitary, drainage lines, ICs, manholes, grease traps) and SS 608:2024 (gas). A "PUB standard drawing ref" parameter on IC, manhole and floor-trap families would be useful, for example PUB/WRN/STD/017A.
- **[unverified]** Common SG sanitary abbreviations (my own knowledge, unconfirmed): IC (inspection chamber), MH (manhole), FT (floor trap), FW (floor waste), GT (grease trap, sometimes gully trap, so check the context), SP (soil pipe), WP (waste pipe), VP (vent pipe), SVP (soil & vent pipe), RWDP (rain water down pipe), CO/RE (cleaning eye / rodding eye), TB (terminal branch), SS (soil stack), IL (invert level), CL (cover level). Water: WM (water meter), BV/GV/CV (ball/gate/check valve), HWS/CWS, BT (break tank), TK (tank). Gas: GSIV, GM (gas meter).

### Gaps
- No PUB or COPSSW legend or abbreviation table could be read. It is unknown whether COPSSW 3rd ed has a symbols appendix.
- The NEA requirements that affect drawings (for example refuse chutes, bin centres, kitchen exhaust, grease trap sizing for F&B) were not researched in depth because of the tool budget and the fetch blocks.
- The current revision status of SS 30 and SS 213 was not checked.

---

## Q4. ACMV: SS 553, SS 530, symbol conventions

### Takeaway
**SS 553:2026** is now the current ACMV code of practice. It replaces SS 553:2009 (incl. Amd 2:2016)+A1:2017. **SS 530:2024** is the current energy-efficiency standard for building services and equipment. SG ACMV abbreviations such as FCU, AHU, TEF, KEF and VCD follow BS/UK practice. They appear in consultant tender legends but are not set by any standard.

### Cited Findings
- [standard] **SS 553:2026** eShop record — [eShop SS 553:2026](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/c417dc9a-0cca-4562-a19e-b076c9a4957e); a copy titled "SS 553-2026 Code of Practice Air Con and MV in Building" exists on Scribd — [Scribd](https://www.scribd.com/document/1043015204/SS-553-2026-Code-of-Practice-Air-Con-and-MV-in-Building). The previous edition was SS 553:2009 (incl. Amd 2:2016)+A1:2017 — [eShop SS 553 2016](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/112b67fc-8c96-4dd4-8d8a-e71a5b4d4df8); [2016+A1:2017 preview](https://www.singaporestandardseshop.sg/product/getpdf?filename=180331102351ss+553-2016%28plus%29a1-2017_preview.pdf&pdtid=112b67fc-8c96-4dd4-8d8a-e71a5b4d4df8)
- [standard] SS 553 covers design, construction, installation, T&C, operation and maintenance of ACMV in commercial, office and institutional buildings (excluding healthcare), for an acceptable indoor thermal environment achieved in an energy-efficient way (scope as in previous edition). — [SS 553:2009 preview](http://www.singaporestandardseshop.sg/data/ECopyFileStore/091117110542Preview%20-%20SS%20553-2009.pdf)
- [standard] **SS 530:2024** "Energy efficiency standard for building services and equipment" — [SS 530:2024 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=241021171845SS+530-2024+Preview.pdf&pdtid=390acc34-7c99-437a-889f-bb329e5a2ec3)
- [observed_practice] An SG-style tender drawing "00-ACMV-001, ACMV – Symbols & Legend: For Tender" exists (Scribd / pdfcoffee). Abbreviations seen in snippets: **TEF** = toilet exhaust fan, **VCD** = volume control damper, **KEF** = kitchen extract/exhaust fan, **FCU** = fan coil unit. — [Scribd 00-ACMV-001](https://www.scribd.com/document/386409634/00-ACMV-001); [pdfcoffee mirror](https://pdfcoffee.com/download/acmv-symbols-amp-legend-for-tender-pdf-free.html)

### Inferences
- The TBIM SG ACMV template should cite SS 553:2026 and SS 530:2024. The details of what changed in the 2026 edition (fresh-air rates, filtration, and so on) were not reached.
- **[unverified]** Additional SG/UK-lineage abbreviations (my own knowledge): AHU, PAU (pre-cool air unit), FCU, CT (cooling tower), CH (chiller), CHWS/CHWR (chilled water supply/return), CWS/CWR (condenser water), CHWP/CWP (pumps), SAD (supply air diffuser), RAG (return air grille), EAG, FAL (fresh air louvre), VCD, FD (fire damper), MFD (motorised fire damper), SD/SFD (smoke/fire damper), MD (motorised damper), CAV/VAV, KEF, TEF, CPEF (car park exhaust fan), JF (jet fan), SPF/PF (staircase pressurisation fan), ESP, FA/RA/SA/EA/OA. Verify against the 00-ACMV-001 legend if it becomes reachable.

### Gaps
- The content and change summary of SS 553:2026 (publication month, SCDF/BCA adoption date) were not confirmed.
- No SG standard defining ACMV drawing symbols was found.

---

## Q5. Pipe / service colour coding and labelling in Singapore

### Takeaway
The only SG-mandated colour rule found is for fire protection: Fire Code 2023 cl. 6.7 requires red paint, or ≥20 mm red bands plus labels. General building-services pipe colours in SG appear to follow the **BS 1710** lineage (a green basic colour for water with a red safety band for fire water, and so on), but no SG standard or agency document confirming that was reached.

### Cited Findings
- [agency] Fire protection equipment, fixtures and fittings are painted red. Fire protection pipework, conduits, trunking and trays not painted red get red bands ≥20 mm wide plus labelling. — [SCDF Fire Code 2023 cl. 6.7](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-6-firefighting-systems/clause-6.7-colour-scheme-of-fire-protection-systems)
- [observed_practice, UK source] BS 1710:2014 defines 8 basic identification colours, using BS 4800 colour references. Water pipes of any use have a green basic colour. Fire-fighting water uses green-red-green banding, with red as the safety colour for fire services. — [Silver Fox BS 1710 guide](https://silverfox.co.uk/blogs/news/bs-1710-pipe-colour-codes-uk-guide); [Label Source](https://www.labelsource.co.uk/news/post/bs-1710-the-british-way-of-marking-pipelines)
- [standard] SS 508-1:2013 sets safety identification colours and design principles for safety signs and markings (red = prohibition/fire equipment, green = safe condition, per the ISO 3864 lineage). — [eShop SS 508-1](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/0b3a7336-b8cf-49df-8ead-1c08a8b1075b)

### Inferences
- **[unverified]** TBIM SG should ship a BS 1710-style pipe colour table as the default. Fire services must be red (agency-mandated), and project specifications override everything else. Consultants' M&E specifications usually define the colour schedule per project.

### Gaps
- No Singapore Standard for pipe identification colours was found, and no evidence was found of SS adopting BS 1710 or ISO 14726. The electrical conduit/trunking colours for non-fire services were not found.

---

## Q6. Which symbol lineage dominates in SG, and does any SS define MEP plan symbols? (plus the CORENET X / IFC-SG context)

### Takeaway
SG practice follows the **British/IEC lineage**. SS 638 comes from BS 7671, SS 555 is IEC 62305, conductor colours are IEC, SLD symbols are IEC 60617, safety signs are SS 508/ISO 7010, and ACMV abbreviations are UK-style. No Singapore Standard was found that defines MEP plan symbols directly; the symbol legends are consultant-defined. The bigger driver for a BIM tool is **CORENET X with IFC+SG** (an IFC4 extension). It has been mandatory for new projects of 30,000 m² GFA and above since 1 Oct 2025, and it expands in scope from Oct 2026.

### Cited Findings
- [standard] SS 638 is a modified adoption of BS 7671 — [SS 638 preview](https://www.singaporestandardseshop.sg/product/getpdf?filename=190215172027ss+638-2018+-+preview.pdf&pdtid=fd1f48ab-6e55-49f4-a725-5addcb22654e). SS 555 adopts IEC 62305 (MOD/IDT) — [SS 555-4 preview](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=180829102511SS+555-4-2018+Preview.pdf&pdtid=225398a8-954b-44b9-815d-93dfbcce0ba4)
- [observed_practice] IEC 60617 is the SLD symbol standard in "most of Asia, which includes Singapore" — [SmartSLD](https://smartsld.com/blog/single-line-diagram-symbols/)
- [observed_practice] CP 52 is described as aligned with NFPA 13 / BS EN 12845 practice — [Medium, Dr T.L. Ang](https://medium.com/@TL.Ang/singapore-standard-code-of-practice-on-automatic-sprinkler-system-7eac259943bc)
- [agency] CORENET X: mandatory submissions for new projects of **≥30,000 m² GFA from 1 Oct 2025** (URA circular DC25-07) — [URA circular](https://www.ura.gov.sg/guidelines/circulars/dc25-07/); [CORENET X support timeline](https://support.corenet.gov.sg/hc/en-us/articles/14813415847695-What-is-the-implementation-timeline-for-CORENET-X)
- [observed_practice] Sources conflict on the next phase. One says CORENET X becomes mandatory for new projects of **≥5,000 m² GFA from 1 Oct 2026** — [aectechnicalsg](https://www.aectechnicalsg.com/building-regulations-singapore-2026). GovInsider says **all new projects regardless of GFA** from Oct 2026, with ongoing projects onboarded by Oct 2027 — [GovInsider](https://govinsider.asia/intl-en/article/one-stop-digital-platform-for-built-environment-industry-to-be-mandatory-from-october); see also [Bimeco](https://www.bimeco.io/blog/corenetx-vs-corenet2/). The URA circular or the CORENET X support page should settle it; neither was readable.
- [observed_practice] IFC+SG extends IFC4 with parameters required by URA, NEA, BCA, PUB, LTA and SCDF. CORENET X routes a federated architectural, structural and MEP model to BCA, URA, SCDF, LTA and PUB at the same time. — [CVC Engineers CORENET-X guide](https://www.cvcengineers.com/post/corenet-x-singapore-complete-guide); [aectechnicalsg CORENET X workflow](https://www.aectechnicalsg.com/corenet-x-workflow)

### Inferences
- A TBIM "SG" profile should (a) use IEC 60617-based electrical symbols and UK/BS-style MEP abbreviations, and (b) give the most weight to **IFC+SG property sets and classification for MEP/fire elements**. Agency checks in CORENET X are model-parameter driven, so symbol geometry matters much less for compliance than it does for readable 2D output.
- Symbol geometry for SG plans should be treated as configurable project or consultant legends, seeded from IEC 60617 (electrical), SS 508 / ISO 7010 (safety signs) and UK-style M&E legends. There is no SS "MEP symbols" standard to comply with.

### Gaps
- IFC+SG MEP/fire parameter names (the IFC+SG Industry Mapping / COP 3.x) were not researched in this session. This is a high-value follow-up for TBIM.
- No SG-specific symbol geometry (dimensions or shapes) could be verified. All geometry would need to come from IEC 60617 / ISO 7010 or from a real SG consultant legend sheet, such as the 00-ACMV-001 tender legend on Scribd, which was not readable.
