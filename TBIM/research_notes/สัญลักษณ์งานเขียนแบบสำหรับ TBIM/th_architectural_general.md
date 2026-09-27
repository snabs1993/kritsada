# Annotation Symbols and Drafting Conventions in Thai Architectural / General Construction Drawings (งานเขียนแบบสถาปัตยกรรม / แบบก่อสร้าง) — for TBIM

> **Method note, read this first.** The network egress proxy blocked WebFetch for almost every Thai domain tried (asa.or.th, dpt.go.th, doh.go.th, ku.ac.th, sut.ac.th, sau.ac.th, tumcivil.com, scribd, anyflip, dsignsomething, trdoci, apsthailand, yotathai, narongmicrospun, wikipedia). Two kinds of evidence were available:
> 1. **One primary document read in full**: a real Thai building-permit drawing set ("แบบขออนุญาต", 25+ sheets, a staff canteen project in อ.บางละมุง จ.ชลบุรี). Its sheet A0-01 is a legend sheet ("สัญลักษณ์แบบ สารบัญแบบ รายละเอียดพื้น ผนัง ฝ้าเพดาน"). The PDF text was extracted locally. Cited below as **[Permit set A0-01]** = https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf . This is **observed common practice from one office**. It is not a standard. Only the text layer could be extracted, so the drawn geometry of the symbols could not be seen. Symbol names and meanings come from the labels; geometry is inferred from label layout.
> 2. **Search-engine result summaries** (WebSearch snippets) of pages that could not be opened. These are marked "(search snippet)". Treat them as secondary and unverified against the full page.
>
> Status tags used: **[STANDARD]** = set by law or a published standard. **[ASA-GUIDE]** = professional-association guideline. **[OBSERVED]** = seen in real Thai drawings or practitioner articles. **[UNVERIFIED]** = practitioner knowledge that no source here confirms (these are in Inferences/Gaps only).

---

## Q1. Which Thai standards and authoritative references define drafting and annotation conventions?

### Takeaway
No Thai **law** or **TIS/มอก.** standard found here defines architectural annotation symbols (section bubbles, tags and so on). The main national reference is the Association of Siamese Architects' (ASA, สมาคมสถาปนิกสยาม) professional-practice manual **"มาตรฐานการเขียนแบบก่อสร้าง"**. It had a 2549/2006 edition and was revised in 2554/2011 with a CAD-layer part (ASA CAD Std 2554) that borrows from the US National CAD Standard (NCS). Law (the Building Control Act and its Ministerial Regulations) only sets what drawings must be submitted, their scales and who signs them. Line-type conventions come from vocational and engineering textbooks, which follow ISO, JIS and DIN.

### Cited Findings
- ASA published a professional-practice manual "คู่มือปฏิบัติวิชาชีพ มาตรฐานการเขียนแบบก่อสร้าง ฉบับปี พ.ศ. 2554"; compiler listed as รศ. ฐิติพัฒน์ ประทานทรัพย์ — [GooShared listing](https://www.gooshared.com/d/MzI3Mi01); [engfanatic/tumcivil article 1099](https://engfanatic.tumcivil.com/engfanatic/article/1099) (search snippet) **[ASA-GUIDE]**
- The 2549 (2006) ASA edition was developed into the 2554 (2011) edition by a working group from the Faculty of Architecture, **Silpakorn University**. The aim was a construction-drawing standard "equivalent to international levels" suited to Thai professional practice — [ASA_CAD_std_2554 PDF](https://engfanatic.tumcivil.com/tumcivil_1/media/ASA/ASA_CAD_std_2554.pdf); [tumcivil e-training "คู่มือมาตรฐานการเขียนแบบก่อสร้าง ฉบับ 2549 … (สมาคมสถาปนิกสยาม)"](https://etraining.tumcivil.com/courses/2078067/lectures/58402938) (search snippet) **[ASA-GUIDE]**
- The 2549 manual was distributed with a PDF, CAD files and a **CAD FONT** — [tumcivil e-training](https://etraining.tumcivil.com/courses/2078067/lectures/58402938) (search snippet). A copy is also on Scribd: [คู่มือมาตรฐานการเขียนแบบก่อสร้าง ฉบับ 2549](https://www.scribd.com/document/374115462/) (not accessible).
- ASA CAD Std 2554 sets **CAD layer standards**, "incorporating principles from NCS (National CAD Standard) and ASA 2554". It uses **Annotative scaling** for 2D drawing. Layer names have a fixed structure: a discipline code followed by a dash, a fixed name length, and underscores as placeholders for unused characters — [Scribd: ASA CAD STD 2554](https://www.scribd.com/doc/196348746/ASA-CAD-std-2554); [AnyFlip ASA_CAD_std_2554 pp.251-270](https://anyflip.com/evzsx/cwdq/basic/251-270) (search snippet) **[ASA-GUIDE]**
- The Silpakorn University Faculty of Architecture publishes "CAAD Silpakorn Drafting Utilities" — [arch.su.ac.th](https://arch.su.ac.th/index.php/publication/caadsilpakorn/caad2) (search result title only)
- ASA also publishes a standard specification, "รายการประกอบแบบก่อสร้าง". A 2566/2023 edition was announced, and an earlier "ASA Std Spec 2009" exists — [ASA news 42375](https://asa.or.th/news/42375/); [ASA_Std_Spec_2009.pdf](https://download.asa.or.th/ASA_Std_Spec_2009.pdf); ASA handbook index: [asa.or.th/handbooks-th](https://asa.or.th/handbooks-th/) (search snippet)
- The Engineering Institute of Thailand (วสท./EIT) reportedly also issued a standard on preparing construction drawings, dated September 2549 (search snippet; title and number not confirmed) — [search summary referencing ASA/EIT](https://download.asa.or.th/ASA_Std_Spec_2009.pdf) **[UNVERIFIED attribution]**
- A Thai engineering-drawing teaching source says: "มาตรฐานในประเทศไทยคือ มอก. แต่มาตรฐานที่พบส่วนใหญ่คือ มาตรฐานญี่ปุ่น เยอรมัน และมาตรฐานสากล ISO" (the Thai standard is มอก., but the standards most often met are JIS, DIN and ISO) — [KU Sriracha / SUT engineering drawing materials](https://academic.kus.ku.ac.th/ctech/e-book/D_2/pages/book.pdf); [SUT Engraph Week01](http://eng.sut.ac.th/me/2014/document/EngineeringGraphics/Engraph_Week01-1.pdf) (search snippet)
- The ISO drafting family used in Thai engineering-drawing courses: ISO 128 (general principles of presentation), ISO 129 (dimensioning), ISO 3098 (lettering), ISO 5455 (scales) — [SUT Engraph Week01](http://eng.sut.ac.th/me/2014/document/EngineeringGraphics/Engraph_Week01-1.pdf); [Wikipedia ISO 128](https://en.wikipedia.org/wiki/ISO_128) (search snippet)
- The Department of Highways (กรมทางหลวง) publishes "คู่มือการเขียนแบบ วิศวกรรมงานทาง" (2558/2015). It covers road engineering and includes level symbols — [bmm.doh.go.th manual_engineer_drawings2558.pdf](https://bmm.doh.go.th/website/download/manual59/manual_engineer_drawings2558.pdf) (could not open)
- The Department of Rural Roads (กรมทางหลวงชนบท) publishes standard drawings in PDF and CAD (2556) — [yotathai](https://www.yotathai.com/yotanews/standard-plan-cad-2556) (search snippet)
- Bangkok's สำนักการโยธา กทม. publishes free standard house plans, "แบบบ้านยิ้มเพื่อประชาชน" (120 plans). These are a possible reference for public-sector legend sheets — [tumcivil e-training](https://etraining.tumcivil.com/courses/2078067/lectures/46777310) (search snippet)
- A peer-reviewed Thai article on construction-drawing standards and how they are prepared, "แบบก่อสร้าง : มาตรฐาน การจัดทำ แนวทางการปรับปรุงและพัฒนา", exists in the Southeast Asia University journal (2015) — [sau.ac.th PDF](https://www.sau.ac.th/SAUJournalST/2015_02_01_29-43.pdf) (not accessible)
- Real permit sets cite **มอก.** only for materials (for example "มอก.24 … ชั้นคุณภาพ SD-30", "มอก. 1228", "มอก. 528"), and **ว.ส.ท.** for rebar hooking and piping. They do not cite any drafting standard — [Permit set A0-01](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**

### Inferences
- For annotation symbols, TBIM should treat the **ASA มาตรฐานการเขียนแบบก่อสร้าง 2549/2554** as the authoritative Thai reference and cite it as a professional guideline, not a legal standard. Law does not require any particular symbol vocabulary.
- The ASA 2554 CAD part is modelled on US NCS, while engineering-drawing teaching follows ISO, JIS and DIN. Thai practice is therefore a **hybrid**: US/NCS-style sheet and layer organisation, metric and ISO-style units and line work, and Thai-language labels.

### Gaps
- I found **no TIS/มอก. number for a technical-drawing (ISO 128-equivalent) standard**. The TISI catalogue ([appdb.tisi.go.th](https://appdb.tisi.go.th/tis_dev/p3_tis/p3tis.php?data=B), [tisi.go.th list](https://www.tisi.go.th/website/standardlist/list_measures)) could not be searched because fetches were blocked. Whether such a มอก. exists is still open.
- I found no **มยผ. (DPT) standard** on drafting or annotation symbols. The DPT results were about urban-planning colour standards only.
- The full symbol plates of the ASA 2549/2554 manual could not be read (every host was blocked). Circle diameters, text heights and exact marker geometry from that manual are still unknown. **This is the most important follow-up. Get the PDF directly from ASA or tumcivil.**
- Legend sheets from กองแบบแผน (กระทรวงสาธารณสุข), สพฐ. school standard drawings, กรมศิลปากร and vocational curricula (สอศ.) were not reached.

---

## Q2. Symbol inventory as used in Thai practice

### Takeaway
A real Thai permit set's legend sheet (A0-01) lists these annotation symbols with Thai labels:
- section marker (แสดงรูปตัดที่ _)
- four-way elevation marker (แสดงรูปด้านที่ _, quadrants 1–4, each with a sheet reference)
- detail callout (แสดงแบบขยาย)
- grid bubbles (แสดงพิกัดแนวนอนและแนวตั้ง) and grid centre line (แสดงแนวศูนย์กลางพิกัด)
- room tag (ห้อง____ + วัสดุพื้น + ฝ้าเพดาน + ระดับพื้นห้อง)
- level marks (ค่าระดับ; CL./EL. +0.00)
- stair direction arrow (ทิศทางขึ้นลงบันได)
- break line (แสดงเขตที่ไม่ต้องการและต่อรูป) and hidden line (แสดงส่วนที่มองไม่เห็นและส่วนปกคลุม)
- three dimension types
- property line (แนวเขตที่ดิน)
- door and window tags D and W
- wall-type hatch legend

Grids are numbered 1, 2, 3… in one direction and lettered A, B, C… in the other, using Latin letters. Finish codes are F1…F8 for floors and C0/C1 for ceilings, written together as "F1,C1" on plans.

### Cited Findings

#### 2.1 The observed legend sheet (primary, [OBSERVED])
All items in 2.1 come from [Permit set A0-01](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf). The sheet has three columns headed "สัญลักษณ์ | ความหมาย".

| # | Thai label on sheet (verbatim) | English equivalent | Fields and text seen in the symbol | Notes |
|---|---|---|---|---|
| 1 | แสดงแบบขยาย | Detail / enlarged-plan callout | Two-part label: an identifier ("1" or "A") over a sheet number ("A-00"). The label "แผ่นที่" (sheet no.) sits next to it | Same two-field layout as the section marker. The text layer suggests a circle split into top (ID) and bottom (sheet) |
| 2 | แสดงรูปตัดที่ _ | Section cut marker ("shows section no. _") | ID (for example "1" or "A") over sheet number "A-00". Labelled "แผ่นที่" | Section sheets are titled "รูปตัด A-A", "รูปตัด B-B", so section IDs are Latin letters and the title repeats the letter ("A-A") |
| 3 | แสดงรูปด้านที่ _ | Elevation marker ("shows elevation no. _") | Four quadrant numbers **1, 2, 3, 4**, each paired with a sheet number **A-05** (four times) | This is a four-direction interior/exterior elevation key. Elevation sheets are titled "รูปด้าน 1", "รูปด้าน 2", "รูปด้าน 3", "รูปด้าน 4", so elevations are numbered 1–4 and not named by compass direction |
| 4 | แสดงพิกัดแนวนอนและแนวตั้ง | Grid bubbles (horizontal and vertical grid references) | Bubble with one character. Elevations show "1 2 3 4 5" and "A B C D E" | Numbers along one axis, Latin capital letters along the other |
| 5 | แสดงแนวศูนย์กลางพิกัด | Grid / centre line (chain line) | none | Line type for grid axes |
| 6 | ห้อง______ / ชื่อห้อง | Room tag (room name) | Room name, plus "วัสดุพื้น" (floor material code) and "ฝ้าเพดาน" (ceiling code), plus a level | On plan sheets room tags appear as "F1,C1" or "F1,C0" (floor code, ceiling code) |
| 7 | ระดับพื้นห้อง | Room floor level | Signed level, for example +0.00 | Part of the room tag or placed next to it |
| 8 | ค่าระดับในผนัง,พื้น,รูปด้านและรูปตัด | Level value in walls/floors, elevations and sections | "CL. EL. +0.00", "CL-", "EL-" | CL = ceiling level, EL = elevation level (my reading of the abbreviations, not glossed on the sheet) |
| 9 | ทิศทางขึ้นลงบันได | Stair up/down direction arrow | Arrow, with ขึ้น/ลง text or UP/DN (text not captured) | |
| 10 | แสดงเขตที่ไม่ต้องการและต่อรูป | Break line ("area not required / drawing continues") | none | |
| 11 | แสดงส่วนที่มองไม่เห็นและส่วนปกคลุม | Hidden / overhead line ("invisible and covering parts") | none | Dashed line, used both for hidden and for overhead elements |
| 12 | ระยะริมถึงริม | Dimension, edge to edge | numeric | |
| 13 | ระยะกึ่งกลางถึงกึ่งกลาง | Dimension, centre to centre | numeric | |
| 14 | ระยะกึ่งกลางถึงริม | Dimension, centre to edge | numeric | Thai legends separate three dimension reference types |
| 15 | แนวเขตที่ดิน | Property / land boundary line | none | |
| 16 | D / สัญลักษณ์ประตู | Door tag and symbol | Letter **D** plus number | Door swing types shown: ประตูบานเปิด (hinged), ประตูบานเลื่อน (sliding) |
| 17 | W / สัญลักษณ์หน้าต่าง | Window tag and symbol | Letter **W** plus number | Window types: หน้าต่างบานเปิด (casement), หน้าต่างบานเลื่อน (sliding), หน้าต่างบานกระทุ้ง (awning/top-hung) |
| 18 | UGX | (not glossed) | — | Meaning unknown from the text layer |
| 19 | N | North arrow | letter "N" | Appears on แผนที่พอสังเขป, ผังโฉนด, ผังบริเวณ and แปลนพื้น |

- **Wall-type symbols (สัญลักษณ์ผนัง)**, as hatch or poché in plan, listed on the same legend:
  - ผนัง ค.ส.ล. (RC wall)
  - ผนังคอนกรีตบล็อค (concrete-block wall)
  - ผนังคอนกรีตบล็อคชนิดระบายอากาศ (ventilation block wall)
  - ผนังยิปซั่มบอร์ดหรือไม้อัด (gypsum board or plywood partition)
  - ผนังก่ออิฐมอญเต็มแผ่นหรือเต็มหน้าเสา (full-brick-thickness or full-column-width clay brick wall)
  - ผนังก่ออิฐมอญครึ่งแผ่น (half-brick clay brick wall)
  - plus a line symbol, "แนวเซาะร่อง ผนังปูนก่ออิฐฉาบปูน กว้าง 1 cm. ลึก 0.5 cm." (plaster groove line 1 cm wide × 0.5 cm deep)
  - Source: [Permit set A0-01](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- **Floor finish codes (สัญลักษณ์พื้น) F1…F8** with Thai descriptions [Permit set A0-01](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**:
  - Granito tile 60×60 anti-slip: "พื้น คสล. ปูกระเบื้องแกรนิตโต้ 60x60 ซม. ผิวหยาบกันลื่นระบุสี รุ่นภายหลัง"
  - Granito 60×120 polished
  - Ceramic 30×30 anti-slip
  - Makha timber flooring 1"×4": "พื้น คสล. กรุไม้มะค่า ขนาด 1"x4" ทำสีธรรมชาติ"
  - Synthetic wood
  - Stamped concrete: "พื้น คสล. ปรับระดับทำผิวคอนกรีตแสตมป์"
  - Pool tile (F8)
- **Ceiling codes (สัญลักษณ์ฝ้าเพดาน)**:
  - "ฝ้าเพดานยิปซั่มบอร์ด หนา 9 มม. ฉาบเรียบ ทาสี" (9 mm gypsum, skim coat, painted)
  - "ฝ้าเพดานยิปซั่มบอร์ดทนชื้น หนา 9 มม." (moisture-resistant)
  - "ฝ้าเพดานไม้ระแนง CONWOOD" (fibre-cement battens)
  - framing: "โครงคร่าวตัวซีเหล็กชุบสังกะสี" (galvanised C-channel)
  - Codes appear on plans as C0/C1
  - Source: [Permit set A0-01](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- **Wall finish descriptions (รายละเอียดผนัง)**:
  - "ผนังก่ออิฐมอญ ฉาบปูนเรียบ ทาสี ตามตัวอย่าง" (clay brick, smooth plaster, painted)
  - brick with ceramic, wood-look or marble-look tile
  - "ผนัง ค.ส.ล. กรุหินปูสระว่ายน้ำ"
  - "ผนังกระจกเขียวใสตัดแสง หนา 5 มม. โครงเคร่าอลูมิเนียม"
  - The wall codes themselves were not captured in the text layer.
  - Source: [Permit set A0-01](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- **Code collision**: in the same set, structural sheets use **F1, F2 = footing (ฐานราก)**, C1 = column, B1/B1A/B1B = beam and SB1/SB2 = steel beam (อะเส). Examples: "แบบขยายฐานราก F2", "F1,C1" on the foundation plan. Architectural sheets use **F1 = floor finish**. Sheet prefix (A vs S) is the only thing telling them apart — [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- **Level annotation on elevations**: "ระดับพื้นดินเดิม +0.00" (existing ground), "ระดับพื้นชั้น +0.20" (floor), "ระดับหลังคาน +3.70" (top of beam), "ระดับหลังคา +8.57" (roof). Levels are in **metres, 2 decimals, with an explicit + sign**. Details use "ระดับอ้างอิง" (reference level) — [Permit set A3-01](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- **Slope annotation**: "ท่อค.ส.ล.Ø 0.30 ม. SLOPE 1:200" on the site drainage plan, so slope is written as a ratio 1:n in English "SLOPE" — [Permit set A2-02](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- **Drawing titles** read "<title> / มาตราส่วน 1:100" (for example "เเปลนพื้น มาตราส่วน1:100", "ผังบริเวณ มาตราส่วน1:750", "ผังโฉนด มาตราส่วน1:250", "แบบขยายฐานราก F2 มาตราส่วน 1:25"). English "SCALE 1:25" and "มาตราส่วน AS SHOWN" also appear. The Thai and English labels are mixed — [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**

#### 2.2 Other sources (secondary)
- **Level datum**: "+0.00 คือระดับอ้างอิง เช่น พื้นชั้นล่าง ตัวเลข +0.15 หมายถึงสูงกว่าระดับอ้างอิง 15 ซม." (+0.00 is the reference level, for example the ground floor; +0.15 means 15 cm above the datum) — [KUTSUNSKILL อ่านแบบบ้านเบื้องต้น](https://kutsunskill.com/articles/read-house-plans-basics) (search snippet) **[OBSERVED]**
- **Thai-letter door/window tags**: door tags may carry the Thai prefix **"ป"** (ประตู) before the number (**ป1**), and window tags **"น"** (หน้าต่าง, **น1**). These tags link to the door/window schedule — [TOSTEM Thailand: คลายข้อสงสัย สัญลักษณ์ประตูหน้าต่าง](https://tostemthailand.com/en/2022/10/16/%E0%B8%84%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%AA%E0%B8%87%E0%B8%AA%E0%B8%B1%E0%B8%A2-%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B8%9B/); [Nitas Tessile: แบบประตู หน้าต่าง สัญลักษณ์](https://www.nitas-tessile.com/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95-%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B8%95%E0%B8%B2%E0%B8%87-%E0%B8%AA%E0%B8%8D%E0%B8%A5%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%81%E0%B8%9A%E0%B8%9A/) (search snippet; the search summary merged several pages, so which page said it is not confirmed) **[OBSERVED]**. The permit set above uses Latin **D/W** instead, so both conventions coexist.
- Codes such as W1, W2 are also written next to wall openings and cross-referenced to the door/window schedule (ตารางประตู-หน้าต่าง) — [KUTSUNSKILL](https://kutsunskill.com/articles/read-house-plans-basics) (search snippet)
- **Section marker geometry**: the section symbol is "a circle divided by a horizontal line, with numbers placed above and below it, and an arrow pointing in the direction of the section view". The **upper number is the section number and the lower number is the sheet (page) where the section is drawn** — search summary drawing on [ณรงค์ไมโครสปัน: สัญลักษณ์ที่ปรากฏในแบบสถาปัตยกรรมบ้าน](https://www.narongmicrospun.com/micropile-symbol/) and [Dsign Something: Dtip รู้จักสัญลักษณ์ในแบบกันเถอะ](https://dsignsomething.com/2016/08/09/dtip-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%81/) (search snippet) **[OBSERVED]**
- **รูปตัด (section)** is defined as cutting through the building along a line set on the floor plan, showing structural and architectural vertical details "from underground up to the roof". Its purpose is to show the heights of floor, ceiling and roof levels. **แบบขยาย (enlarged detail)** is "zooming in" on parts such as bathrooms and stairs at a larger scale — [DDproperty](https://www.ddproperty.com/) article "รู้จักบ้าน เข้าใจแบบ ตอนที่ 2"; [Bonus blogger การเขียนแบบสถาปัตยกรรม](http://bonusseaw.blogspot.com/2013/01/blog-post.html) (search snippet)
- **Material symbols (hatching) depend on scale**. The same material is drawn differently at small scale (1:100) and at large scale (1:25 or larger). At 1:100 you do not need elaborate material symbols; at 1:25+ they must be full — [Rangsit Univ. ARC257 "Drawing standard → material symbols"](https://sites.google.com/site/arc257rsu/lecture-list/drawing-standard/material-symbols) (search snippet) **[OBSERVED/teaching]**
- **Line types** in Thai vocational and engineering drawing curricula (general technical drawing; ISO/JIS-derived):
  - เส้นเต็มหนา (thick continuous) **0.50 mm**: visible outlines
  - เส้นเต็มบาง (thin continuous) **0.25 mm**: dimension lines and hatching
  - เส้นประ (dashed) **0.35 mm**, dash **3 mm**, gap **1 mm**: hidden edges
  - เส้นศูนย์กลาง (chain/centre line): symmetry axes
  - เส้นมือเปล่า (freehand): break lines
  - Sources: [KU Sriracha u2.pdf "มาตรฐานเส้นที่ใช้ในงานเขียนแบบ และมาตราส่วน"](https://academic.kus.ku.ac.th/ctech/Drawing/P2/u2.pdf); [DLTV ชนิดและความหมายของเส้น](https://dltv.ac.th/utils/files/download/150821); [Pattaya Tech หน่วยที่ 2 มาตรฐานการเขียนแบบ](http://www.pattayatech.ac.th/files/150511088525213_15051211111537.pdf) (search snippets) **[teaching convention]**
- Floor plans show room locations and sizes, door and window positions, and stairs. The symbol set "may differ from office to office". One example plan uses **B = คาน (beam), C = เสา (column), F = ฐานราก (footing)** — [A-West Property: 4 แบบแปลน ต้องรู้](https://www.a-westproperty.co.th/plan/) (search snippet) **[OBSERVED]**
- Sheet-set discipline letters: "A" for architectural plans and "S" for structural engineering plans — [SUT CE Drawing 02 (Dr. Mongkol Jirawacharadet)](http://eng.sut.ac.th/ce/CE_homework/T02PlanView.pdf) (search snippet) **[OBSERVED/teaching]**

### Inferences
- **Suggested TBIM catalog entries** (geometry partly inferred; see Gaps):
  - **Grid bubble** (เส้นกริด/แนวศูนย์กลางเสา): circle with a single ID. Numeric 1, 2, 3… on one axis and Latin A, B, C… on the other (observed). Chain line through the centre.
  - **Section marker** (สัญลักษณ์รูปตัด): circle halved by a horizontal line. Top = section ID (Latin letter A, B… or a number), bottom = sheet no. (for example A4-01). A direction arrow or filled triangle shows the view direction, placed at both ends of a cutting line. Title on the section sheet: "รูปตัด A-A".
  - **Detail callout** (แบบขยาย): same two-field bubble. Top = detail no., bottom = sheet no. Usually tied to a boundary circle or rectangle around the enlarged area.
  - **Elevation marker** (รูปด้าน): four-quadrant key with 1–4, each with a sheet reference. Exterior elevations titled "รูปด้าน 1…4" (numbered, not compass-named, in the observed set).
  - **Level mark** (ระดับ): "+0.00" style, metres, 2 decimals, explicit sign, optional prefix (ระดับพื้นชั้น / FFL, CL., EL.).
  - **Room tag**: room name, then floor/ceiling codes "F#,C#", then floor level.
  - **Door/window tag**: D#/W# (Latin) or ป#/น# (Thai). TBIM should support both prefix sets.
- Thai practice uses **Latin letters** for grids and section IDs even in Thai-language sets. Neither source here showed Thai-letter grids (ก ข ค). See Gaps.
- F, C and W are overloaded across disciplines: F is floor finish in A and footing in S, C is ceiling in A and column in S, W is window and sometimes wall. TBIM should namespace tag codes by discipline or sheet series.

### Gaps
- **Symbol geometry (circle diameters, text heights, arrow and triangle fill)**: no Thai source read here gives numbers. The ASA manual is the likely source but could not be opened. [UNVERIFIED] Many Thai offices use roughly 8–12 mm bubbles at plot scale, but I found no citation, so do not import this as a standard.
- **North arrow form**: observed only as the letter "N" with a symbol on site and plan sheets. The arrow's shape is not confirmed.
- **Hatch pattern definitions** for คอนกรีต, อิฐ, ดิน, ไม้, เหล็ก, ฉนวน, ทราย, หิน: only wall-type legend names were observed. Pattern geometry was not retrievable (the Rangsit ARC257 page and the engfanatic "ตัวอย่างสัญลักษณ์และอักษรย่อที่ใช้ในการเขียนแบบวิศวกรรม" page ([link](https://engfanatic.tumcivil.com/engfanatic/article/1518)) were blocked).
- **Revision cloud and triangle, match line, slope arrow geometry, scale bar**: not found in Thai sources. The observed title block has a "รายการแก้ไข / วันที่" table with rows 1–7, so revisions are numbered 1…n. The delta-triangle symbol is not confirmed.
- **Thai-letter grid lettering (ก ข ค)**: no evidence found either way.
- **Stair text (ขึ้น/ลง vs UP/DN)**: legend label observed, arrow text not captured.

---

## Q3. Title block, sheet numbering, paper, units and abbreviations

### Takeaway
Observed Thai title blocks are bilingual (English field labels, Thai content). They carry PROJECT, LOCATION, OWNER, ARCHITECT, STRUCTURAL ENGINEER, DRAWN BY, a numbered revision table, project code, DRAWING TITLE, DATE, DRAWING NO. and NO./TOTAL. They also carry the designer's name with licence number: ภ-สถ##### for a ภาคีสถาปนิก, ภย.##### for a ภาคีวิศวกรโยธา. There is a "not to scale / verify on site" note and a "แบบขออนุญาต" stamp. Sheets use US/NCS-like discipline prefixes (A, S, SN, E) with a group-dash-sequence format.

### Cited Findings
- **Title block fields** (verbatim), from [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**:
  - PROJECT :
  - LOCATION :
  - OWNER :
  - ARCHITECT :
  - STRUCTURAL ENGINEER :
  - DRAWN BY :
  - รายการแก้ไข / วันที่ (rows 1–7)
  - รหัสโครงการ
  - DRAWING TITLE :
  - DATE
  - DRAWING NO.
  - NO./TOTAL
  - หมายเหตุ : "ไม่อนุญาตให้วัดระยะจากแบบ ทุกระยะให้ตรวจสอบจากสถานที่ก่อสร้าง" (do not scale from drawings; verify all dimensions on site)
  - stamp text "แบบขออนุญาต" (permit drawing)
  - architect's name with licence "(ภ-สถ#####)"
  - structural engineer's name with licence "(ภย.#####)"
  - design firm name
- **Licence levels** of architects under the Architect Council (สภาสถาปนิก): วุฒิสถาปนิก, สามัญสถาปนิก, ภาคีสถาปนิก and ภาคีสถาปนิกพิเศษ — [Wikipedia TH: ใบอนุญาตประกอบวิชาชีพสถาปัตยกรรม](https://th.wikipedia.org/wiki/%E0%B9%83%E0%B8%9A%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1) (search snippet) **[STANDARD, via the Architect Act]**
- Permit submissions include a **หนังสือรับรองของผู้ประกอบวิชาชีพสถาปัตยกรรมควบคุม** (certificate of the licensed architect) that refers to "แผนผังบริเวณ แบบก่อสร้าง รายการก่อสร้าง ที่ลงนามรับรองไว้" (the site plan, drawings and specifications the architect signed) — [Nongoo SAO form](https://nongoo.go.th/public/list_upload/backend/list_1166/files_3406_1.pdf) (search snippet) **[STANDARD]**
- The application form **แบบ ข.1** (คำขออนุญาตก่อสร้าง ดัดแปลง รื้อถอน หรือเคลื่อนย้ายอาคาร) requires signatures of the engineer/architect and the applicant — [Bangphrachon form ข.1](https://bangphrachon.go.th/public/list_upload/backend/list_4086/files_11037_4.pdf); [Sok-Saeng ข.1](https://www.sok-saeng.go.th/wp-content/uploads/2024/04/) (search snippet) **[STANDARD]**
- **Sheet numbering observed** [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**:
  - Architecture: `A<group>-<nn>`
    - A0-00 cover
    - A0-01 legend and index
    - A0-02 specs and Ministerial Regulation notes (รายการประกอบแบบ ข้อกำหนดกฎกระทรวง (1)(2))
    - A1-01 แผนที่พอสังเขป / ผังโฉนด
    - A1-02 ผังโฉนดที่ดิน
    - A2-xx ผังบริเวณ / plans
    - A3-xx รูปด้าน
    - A4-xx (sections, inferred)
    - A5-xx แบบขยายประตู/หน้าต่าง
    - A6-xx แบบขยายห้องน้ำ/บันได
    - A7-xx, A8-xx
  - Structure: `S-01…S-15` (รายการประกอบโครงสร้าง, ผังฐานราก, ผังโครงสร้างเสา คาน พื้น, แบบขยายฐานราก เสา คาน, ผังโครงสร้างหลังคา)
  - Sanitary: `SN-01…SN-07` (ข้อกำหนดทั่วไปงานวิศวกรรมสุขาภิบาล, ผังระบบสุขาภิบาล/ประปา, บ่อเกรอะ-บ่อซึม)
  - Electrical: `E-01…E-05` (รายการประกอบแบบ, ผังระบบไฟส่องสว่าง, ผังระบบปลั๊กไฟ)
  - The index table columns are "หน้าแผ่นที่ | รายการ", and every sheet also has a running page number (1…57).
- **Units**: dimensions in **metres** in detail drawings (0.20, 0.60, 1.20, "@ 2.00 ม."). Rebar is in mm ("DB16 mm.", "RB 6mm.@0.15m."). Material sizes are in ซม. and มม. ("60x60 ซม.", "หนา 9 มม."), and some timber in inches ("1 1/2"x3""). Levels are in metres with sign — [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- **Abbreviations observed**:
  - ค.ส.ล. and คสล. (both spellings in one set) = คอนกรีตเสริมเหล็ก (reinforced concrete)
  - DB = deformed bar
  - RB = round bar
  - Ø = diameter
  - @ = spacing
  - SD-30 = rebar grade
  - มอก., ว.ส.ท.
  - Source: [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf); ค.ส.ล. definition also in [Kacha: ค.ส.ล. คืออะไร](https://www.kacha.co.th/articles/%E0%B8%84-%E0%B8%AA-%E0%B8%A5-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3/) (search snippet) **[OBSERVED]**
- Public-sector specification sheets use the same wording: "ผนังก่ออิฐมอญ…", "ฝ้าเพดานยิปซั่มบอร์ด หนา 9 มม. ฉาบเรียบทาสี", "ฝ้าเพดานยิปซั่มบอร์ด ขนาด 1.20 x 2.40 ม. ชนิดมีฟอยด์…" — [IEAT รายการประกอบแบบ สถาปัตยกรรม](https://www.ieat.go.th/web-upload/1xff0d34e409a13ef56eea54c52a291126/m_document/8135/17111/file_download/c1bd101bb3cfa12c4181596ad19d861c.pdf); [CMRU รายการประกอบแบบก่อสร้างหมวดงานสถาปัตยกรรม](https://www.cmru.ac.th/file/download/1851/); [SWU Specification](https://eprocurement.swu.ac.th/upload_tor/T_4605.pdf) (search snippets) **[OBSERVED]**

### Inferences
- TBIM title-block template (minimum): project name, location (ตำบล/อำเภอ/จังหวัด), owner, architect (name, licence level and number, signature), engineer (name, licence number, signature), drafter, revision table (no./date/description), project code, drawing title, scale, date, sheet no., sheet i/N, "do not scale" note, permit/construction status stamp.
- Licence-number prefix formats seen: ภ-สถ (ภาคีสถาปนิก) and ภย. (ภาคีวิศวกรโยธา). The analogous prefixes for other levels (ส-สถ, วส., สย., วย.) follow the same pattern, but no source here confirms them. Mark as [UNVERIFIED].
- Dates in Thai title blocks are commonly in พ.ศ. (Buddhist Era, CE + 543). The standards themselves are named by พ.ศ. (2549, 2554, 2566). The observed title block did not show a date value.

### Gaps
- **Paper sizes (A1, A2, A3)**: no source retrieved states Thai permit or construction paper size. The observed set's page size was not checked. Legal text only requires prints, copies or ink drawings.
- The sheet-numbering rules in ASA 2554 (discipline codes such as A, S, EE, SN, M, and any Thai letters such as ก- or ส-) were not confirmed in the manual itself. Only the observed set and a SUT teaching doc are available.
- Mandated title-block fields in law: none found. Only signature and certification requirements are sourced.

---

## Q4. Legal and regulatory requirements for drawings in Thai building-permit submissions

### Takeaway
Under พ.ร.บ.ควบคุมอาคาร พ.ศ. 2522 and กฎกระทรวง ฉบับที่ 4 (พ.ศ. 2526), an applicant submits:
- แผนผังบริเวณ (site plan) at ≥ 1:500
- แบบแปลน (drawings) at ≥ 1:100 (≥ 1:250 allowed if any building dimension exceeds 90 m), including floor plans, at least 2 elevations, cross and longitudinal sections, beam plans and foundation plan
- รายการประกอบแบบแปลน (specifications)
- รายการคำนวณ (calculations)

All must be prints, copies, photographs or ink drawings, signed by licensed professionals.

### Cited Findings
- Drawings must use a scale **not smaller than 1:100**. They must show **floor plans, elevations (at least 2 sides), cross section, longitudinal section, floor beam plans and foundation plan** — [OIC: คู่มือการขออนุญาตก่อสร้างอาคาร ตาม พ.ร.บ.ควบคุมอาคาร พ.ศ. 2522](https://infocenter.oic.go.th/FILEWEB/CABINFOCENTER69/DRAWER003/GENERAL/DATA0000/00000058.PDF); [Thakat municipality manual](https://thakat.go.th/upload/documents_file/documents_file_902_53_34_974796.pdf) (search snippet) **[STANDARD]**
- Site plan (แผนผังบริเวณ) **not smaller than 1:500**. It is defined as a map showing the location and boundaries of the land and the building — [OIC manual](https://infocenter.oic.go.th/FILEWEB/CABINFOCENTER69/DRAWER003/GENERAL/DATA0000/00000058.PDF); [houseandhomeplans: หลักเกณฑ์ที่ใช้ในการจัดทำแบบเพื่อขออนุญาต](https://en.houseandhomeplans.com/post/criteria-used-in-the-request-permission-to-construct-buildings) (search snippet) **[STANDARD]**
- If the building's width, length or height **exceeds 90 m**, a scale smaller than 1:100 may be used, but **not smaller than 1:250** — [OIC manual](https://infocenter.oic.go.th/FILEWEB/CABINFOCENTER69/DRAWER003/GENERAL/DATA0000/00000058.PDF) (search snippet) **[STANDARD]**
- The site plan, drawings, specifications and calculations must be **"สิ่งพิมพ์ สำเนา ภาพถ่าย หรือเขียนด้วยหมึก"** (print, copy, photograph or ink) — [OIC manual](https://infocenter.oic.go.th/FILEWEB/CABINFOCENTER69/DRAWER003/GENERAL/DATA0000/00000058.PDF) (search snippet) **[STANDARD]**
- The source regulation is **กฎกระทรวง ฉบับที่ 4 (พ.ศ. 2526)** under พ.ร.บ.ควบคุมอาคาร พ.ศ. 2522. ASA hosts current consolidated versions — [ASA: กฎกระทรวง ฉบับที่ 4 (updated 67)](https://download.asa.or.th/03media/04law/cba/mr/mr26-04-upd67.pdf); [ASA building-control law index](https://asa.or.th/laws-and-regulations/cba/); [KU consolidated building law](https://fpei.ku.ac.th/wp-content/uploads/2022/01/total_law1.pdf) (search snippet) **[STANDARD]**
- The observed permit set restates Ministerial Regulation requirements on dedicated sheets ("รายการประกอบแบบ ข้อกำหนดกฎกระทรวง (1)(2)"), for example lighting lux tables, ventilation air-change tables and fire extinguisher sizes. It also includes a construction-safety detail citing "…ควบคุมอาคาร พ.ศ.2522 ลงวันที่ 1 พฤศจิกายน 2526" (the 1983 regulation date) — [Permit set A0-02](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- The observed permit set also includes a location map and title-deed plan (แผนที่พอสังเขป, ผังโฉนด at 1:250) with north "N", and a site plan at 1:750 — [Permit set A1-01/A2-02](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**. Note: 1:750 appears to conflict with the ≥1:500 site-plan rule. The 1:750 may be a key/overall plan, or a scale label the office did not update. Not resolved.
- Vocational training material on permit drawings exists: "วิชา การเขียนแบบก่อสร้าง เรื่อง แบบที่ใช้ในการยื่นขออนุญาตฯ (Permit Drawings)" — [TRDOCI](https://trdoci.com/) (not accessible)

### Inferences
- TBIM permit-set validation could check:
  - plan and section scale ≤ 1:100 (≤ 1:250 when any dimension exceeds 90 m)
  - site plan ≤ 1:500
  - at least 2 elevations, 2 sections (cross and long), beam plan and foundation plan
  - north arrow on the site plan
  - licensed signatures on every sheet

### Gaps
- The exact clause text of กฎกระทรวง ฉบับที่ 4 (ข้อ numbering, and whether the site plan must show direction, levels, distances to boundaries and roads) could not be read because the ASA PDF was blocked.
- The ASA "C3-1 bcmr68e-64" Ministerial Regulation ([link](https://download.asa.or.th/03media/04law/fubr/c3_bcmr68e-64.pdf)) came up in search. Its content (it may be a 2564 regulation on building control) is unknown.
- Electronic-submission (e-Permit / BIM submission) rules current in 2026 were not researched here.

---

## Q5. Where Thai practice differs from US (AIA/NCS) or ISO/BS conventions, and which influence dominates

### Takeaway
Thai practice is a hybrid:
- **Units and line work** follow metric ISO-style conventions (levels in metres ±0.00, 1:100 scales, JIS, DIN and ISO taught in schools).
- **Sheet and layer organisation** follows US NCS (ASA CAD Std 2554 explicitly incorporates NCS; A/S/E sheet prefixes; English title-block labels).
- **Labels** are Thai, sometimes with Thai-letter tags (ป/น), Thai abbreviations (ค.ส.ล.) and Thai legal notes.
- Elevations are often numbered (รูปด้าน 1–4) rather than named by compass direction.

### Cited Findings
- ASA CAD Std 2554 incorporates **NCS** principles for layers — [Scribd ASA CAD STD 2554](https://www.scribd.com/doc/196348746/ASA-CAD-std-2554) (search snippet)
- Thai engineering-drawing education references **มอก.**, but in practice **JIS, DIN and ISO** are most common — [KU Sriracha book.pdf](https://academic.kus.ku.ac.th/ctech/e-book/D_2/pages/book.pdf) (search snippet)
- Observed: English title-block labels (PROJECT, ARCHITECT, DRAWING NO.) and "SCALE", "SLOPE", "AS SHOWN" appear alongside Thai labels. Discipline prefixes A, S, SN and E are used. Levels are in metres with sign — [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- Observed: elevations named "รูปด้าน 1…4" and sections "รูปตัด A-A / B-B" — [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**
- "SN" (sanitary) is a Thai-practice discipline code. US NCS uses P (plumbing). Seen in the permit set index (SN-01…SN-07) — [Permit set](https://fw-fileupload-th.s3.ap-southeast-1.amazonaws.com/jobs/48467c64-4901-41e5-baf4-d8476cdfaa80/brief/a9b2bf75-f49f-4633-a5d0-39e217d81af3.pdf) **[OBSERVED]**

### Inferences
- **US influence dominates annotation graphics and sheet organisation.** The two-field bubbles (ID over sheet no.), grid numbers vs letters, and D/W tags match AIA/NCS habits. The three-dimension-type legend (edge-edge, centre-centre, centre-edge) and metric levels reflect ISO and metric teaching. TBIM should default to NCS-like graphics with metric units and Thai labels, and should offer Thai-prefix tag options (ป/น).
- The pattern of Thai sheet numbers: A0 general, A1 maps/deed, A2 site/plans, A3 elevations, A4 sections, A5 doors/windows, A6 enlarged plans (bath/stair)… This is similar to, but not the same as, the NCS sheet-type digit (0 general, 1 plans, 2 elevations, 3 sections, 4 large-scale, 5 details, 6 schedules). Confirm against ASA 2554 before hard-coding.

### Gaps
- No Thai source directly comparing Thai, AIA/NCS and ISO/BS annotation symbols was found.
- BS 1192 / ISO 19650 influence on Thai BIM practice in 2026 was not researched in this scope.
