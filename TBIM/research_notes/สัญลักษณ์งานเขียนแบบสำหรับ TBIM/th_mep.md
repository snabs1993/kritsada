# Thai MEP (ระบบงานวิศวกรรมอาคาร) drawing symbols for TBIM

> **Research-method caveat (read first).** In this session the network egress proxy blocked every page fetch (WebFetch/curl to eit.or.th, go.th, ac.th, yotathai.com, blockdit.com, tumcivil.com, wikipedia.org all returned `EGRESS_BLOCKED` / `CONNECT 403`). Only WebSearch result lists and their auto-generated snippet summaries were available. So:
> - "Cited Findings" below are limited to what the search snippets actually showed, with the URL of the page the snippet came from. The underlying pages were **not** read in full.
> - The **symbol catalog** (the TBIM-importable part) is under "Inferences". It comes from general knowledge of Thai consultant and government MEP legend sheets and has **not** been checked against a fetched Thai source in this session. Every row is tagged `status: observed-practice (unverified)`. Do not tag any row as "standardized" until someone checks it against one of the primary legend PDFs listed in the Gaps sections.
> - Primary Thai legend PDFs were found (URLs listed under each Gaps section). A follow-up session with open egress should read them and confirm or correct the catalog geometry.

---

## Q1. What do วสท. (EIT) standards specify, and do they include a symbols appendix?

### Takeaway
None of the EIT standards identified (wiring, fire alarm, fire protection, emergency lighting, lightning) was shown, in the available search evidence, to contain a normative drawing-symbol appendix. EIT standards govern design and installation rules. Symbol legends in Thai drawings are defined per project on the legend sheet ("สัญลักษณ์" / "LEGEND") and are not imposed by an EIT symbol standard. No EIT "มาตรฐานสัญลักษณ์ไฟฟ้า" was found.

### Cited Findings
- EIT publishes "มาตรฐานการติดตั้งทางไฟฟ้าสำหรับประเทศไทย". The 2556 (2013) edition was circulated online on 16 May 2017. The 2556 edition defines LV conductor colours: 1-phase L = brown, N = blue (ฟ้า), G = green-yellow. 3-phase L1 brown, L2 black, L3 grey, N blue, G green-yellow — [FlipHTML5 copy of มาตรฐานการติดตั้งทางไฟฟ้าฯ 2556](https://fliphtml5.com/wfrt/taov/basic); [Scribd: 65 วสท มาตรฐานการติดตั้งทางไฟฟ้าสำหรับประเทศไทย](https://www.scribd.com/document/614517446/65-%E0%B8%A7%E0%B8%AA%E0%B8%97-%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1-%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%9F%E0%B8%9F-%E0%B8%B2%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A21)
- A 2564 (2021) edition of the EIT wiring standard exists. Thai Yazaki's installation handbook is "ฉบับปรับปรุงตามมาตรฐาน … (EIT Standard 2564)" — [Thai Yazaki: Electrical Installation Book (EIT Standard 2564)](https://thaiyazaki-electricwire.co.th/images/downloadcatalog/_20240341042441Electrical%20Installation%20Book%20(EIT%20Standard%202564)%20Revise-compressed.pdf); [Scribd: มาตรฐาน วสท. 2564](https://www.scribd.com/document/718402155/%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99-%E0%B8%A7%E0%B8%AA%E0%B8%97-2564)
- The current fire alarm standard is **มาตรฐานระบบแจ้งเหตุเพลิงไหม้ พ.ศ. 2567 (วสท. 021002-24)** — [ศูนย์หนังสือจุฬาฯ listing](https://www.chulabook.com/engineering-book/202978)
- The EIT fire alarm standard has these parts: ภาค 6 อุปกรณ์ตรวจจับควัน (smoke detectors), ภาค 7 อุปกรณ์ตรวจจับเปลวเพลิง (flame detectors), ภาค 8 ข้อกำหนดการติดตั้ง (installation), ภาค 9 อุปกรณ์แจ้งสัญญาณ (notification appliances), ภาค 10 ปฏิบัติการตรวจสอบ (inspection). The snippet listed no symbol part — [EIT fire alarm standard PDF (hosted by a fire-equipment vendor)](https://xn----5wfabe2ebfb1ceabca4dxa0bufh5b0k7djjeg1fn38amb3gb5muag.com/image/file/file_20230805083943.pdf)
- Detector types named in Thai fire alarm literature: Smoke Detector อุปกรณ์ตรวจจับควัน, Beam Smoke Detector อุปกรณ์ตรวจจับควันชนิดลำแสง, Heat Detector อุปกรณ์ตรวจจับความร้อน, Flame Detector อุปกรณ์ตรวจจับเปลวไฟ, Gas Detector อุปกรณ์ตรวจจับแก๊ส — [MRTA KM: ระบบแจ้งเหตุเพลิงไหม้ Fire alarm system](https://km.mrta.co.th/files/article/attachment/9e4f6147b5aa13e33b3d243a6c61962a.pdf); [firepump-firealarm.com](https://www.firepump-firealarm.com/TH/service/fire-alarm.html)
- A 2024 COE (สภาวิศวกร) seminar deck covers the 2567 fire alarm standard and alarm sequence — [COE: FUSION 1 มาตรฐานและขั้นตอนการแจ้งเหตุเพลิงไหม้ (พิชญะ จันทรานุวัฒน์)](https://coe.or.th/wp-content/uploads/2024/09/PreFA-Seq-2567-TEMCA-_-COE-2hrs.pdf)
- Standard numbers as a Thai engineering-audit site lists them: **วสท. 3002-45 / 3002-51 มาตรฐานการป้องกันอัคคีภัย**, and **วสท. 3003-43 มาตรฐานระบบไฟฟ้าแสงสว่างฉุกเฉิน และป้ายทางออกฉุกเฉิน**. It also states that 3002-51 is used together with NFPA as a reference for inspection — [ei-auditor.com: มาตรฐานวิศวกรรม](https://www.ei-auditor.com/standard.html); fire-protection e-book listing at [eitstandard.com](https://eitstandard.com/%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%B1%E0%B8%84%E0%B8%84%E0%B8%B5-2/); [Scribd: วสท มาตรฐานการป้องกันอัคคีภัย](https://www.scribd.com/document/662918082/%E0%B8%A7%E0%B8%AA%E0%B8%97-%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B-%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%B1%E0%B8%84%E0%B8%84%E0%B8%B5%E0%B8%A0%E0%B8%B1%E0%B8%A2). **Conflict:** the assignment assumed "วสท. 3003" was the HVAC standard. The ei-auditor listing gives 3003 as the emergency lighting and exit sign standard. The HVAC standard number was not confirmed.
- Lightning: Thai sources say air-terminal selection is calculated "ตามมาตรฐาน IEC 62305 หรือมาตรฐาน วสท.". Thai regulation defines ตัวนำล่อฟ้า (air terminal) as part of the lightning protection system — [changfi.com: ประเภทของ Air Terminal](https://www.changfi.com/fix/2025/12/26/air-terminal/); [ราชกิจจานุเบกษา เล่ม 130 ตอน 29 ก (27 มี.ค. 2556), DOEB](http://elaw.doeb.go.th/document_doeb/404_0001.pdf); [Scribd: มาตรฐานการป้องกันฟ้าผ่า ภาคที่ 3](https://www.scribd.com/document/345933977/%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B-%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%9F-%E0%B8%B2%E0%B8%9C-%E0%B8%B2-%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%97%E0%B8%B5-3) (the EIT lightning standard is multi-part, "ภาคที่ 3" exists, mirroring IEC 62305 part structure); DOEB lightning manual — [คู่มือปฏิบัติงาน…ระบบป้องกันอันตรายจากฟ้าผ่า (DOEB)](https://www.doeb.go.th/mis_manual/manual_lightning_threat_prevention_lpg_spp110367.pdf)
- Sanitary piping has a กรมโยธาธิการและผังเมือง (DPT) standard, **มยผ. 3101-51 มาตรฐานท่อระบบสุขาภิบาล** (2551/2008), and a plumbing installation standard **มยผ. 3501-51 มาตรฐานการติดตั้งท่อประปา**. These are DPT standards, not EIT — [YOTATHAI: มยผ. 3101-51](https://www.yotathai.com/yotanews/myp-3101-51); [YOTATHAI: มยผ. 3501-51](https://www.yotathai.com/plan/3501-51); [AnyFlip copy of มยผ. 3101-51](https://anyflip.com/mlwet/yzpp/basic)

### Inferences
- Symbols are specified at project level. Each Thai drawing set carries its own legend sheet (e.g. "EE-01 สัญลักษณ์" / "SN-01 สัญลักษณ์และอักษรย่อ"). TBIM should therefore model symbols as a **default library that can be overridden per project**, not as a single normative set.
- Standard numbering changed recently. EIT moved from 4-digit codes (2001-56, 3002-51, 3003-43) to 6-digit codes (e.g. 021002-24 for fire alarm). TBIM metadata should store both the old and the new code where known.

### Gaps
- No evidence was found for or against an annex of drawing symbols in วสท. 022001 (2564). The full text could not be fetched.
- The number and title of the EIT HVAC standard (มาตรฐานระบบปรับอากาศและระบายอากาศ) and the EIT lightning standard number (the assignment's "2311"; others cite "022013") were not confirmed.
- No EIT "มาตรฐานสัญลักษณ์ไฟฟ้า" was found. Treat its existence as unconfirmed.

---

## Q2. Does สมอ. (TISI) have a TIS adopting IEC 60617 or ISO 14617?

### Takeaway
No มอก. identical to IEC 60617 or ISO 14617 was found. Thai practice appears to use IEC 60617 directly, or US symbol conventions, without a TIS adoption. This is a negative search result, not a confirmed absence.

### Cited Findings
- IEC 60617 is a database of more than 1,500 graphical symbols, including "architectural and topographical installation plans and diagrams". The current edition is IEC 60617:2026 DB — [IEC webstore IEC 60617 DB](https://webstore.iec.ch/en/publication/2723)
- The TISI standards list is searchable at appdb.tisi.go.th. No IEC 60617 adoption surfaced in the searches — [รายชื่อมาตรฐาน มอก. (TISI)](https://appdb.tisi.go.th/tis_dev/p3_tis/p3tis.php?data=A)
- TIS fire-protection product standards exist, e.g. **มอก. 2541 เล่ม 8–2560 การป้องกันอัคคีภัย** — [TISI PDF a2541_8-2560](https://www.tisi.go.th/data/standard/pdf_files/tis/a2541_8-2560.pdf)
- Cable standard **มอก. 11-2553** (PVC-insulated cables, aligned with IEC 60227, e.g. "60227 IEC 01") — [DSD: มาตรฐานสายไฟฟ้าใหม่ มอก. 11-2553](https://www.dsd.go.th/DSD/Doc/Download/17093)

### Inferences
- For TBIM, IEC 60617 is the safest normative fallback for single-line or schematic symbols, and US/ANSI-style plan symbols cover building plans. See Q6.

### Gaps
- No มอก. number for graphical symbols (IEC 60617 / ISO 14617 / ISO 7000 / ISO 6790 fire-safety plan symbols) was confirmed. A direct TISI catalogue query with open egress is needed.

---

## Q3. What do MEA / PEA publish for drawing symbols (service entrance, meters, transformers, SLD)?

### Takeaway
No MEA or PEA symbol legend was found. Available sources describe only what a Thai SLD must show (meter, main switch, cable sizes). Utility symbology remains a gap.

### Cited Findings
- A Thai single-line diagram (แผนภาพเส้นเดียว) submitted for service must show the kWh meter (เครื่องวัดหน่วยไฟฟ้า), main switch (เมนสวิตซ์) and conductor sizes. Devices such as circuit breakers, transformers, capacitors, bus bars and conductors are drawn with standard schematic symbols — [YOTATHAI: คู่มือการเขียนแบบแปลนผังไฟฟ้า… SINGLE LINE DIAGRAM](https://www.yotathai.com/yotanews/single-line-diagram); [changfi.com: Single Line diagram คืออะไร](https://www.changfi.com/fix/2021/08/16/single-line-diagram/); [นายช่างมาแชร์: SLD](https://naichangmashare.com/2025/03/11/single-line-diagram-sld-drawing/)
- The Provincial Waterworks Authority publishes an electrical works standard, **กปภ.04-2558 มาตรฐานงานระบบไฟฟ้า** (LV switchgear, conduit, motors) — [npdwebsite: กปภ.04-2558](http://www.npdwebsite.net/knowledge/store_act/p416011974955.pdf)

### Inferences
- The YOTATHAI "คู่มือการเขียนแบบแปลนผังไฟฟ้า… SINGLE LINE DIAGRAM" appears to be a utility-style (likely MEA or PEA) drafting guide. It is the best lead for utility SLD symbols.

### Gaps
- MEA "ระเบียบการใช้ไฟฟ้า / ข้อกำหนดการเดินสายและติดตั้งอุปกรณ์ไฟฟ้า" and PEA equivalents: no symbol legend was confirmed. mea.or.th and pea.co.th were not reachable.

---

## Q4. Symbol inventory from Thai legend sheets (catalog for TBIM)

### Takeaway
Thai government tender drawings contain explicit legend sheets for electrical and communications, sanitary, fire protection and HVAC. Sources were found at ops.go.th, swu.ac.th, npru.ac.th, ieat.go.th, customs.go.th, rmutr.ac.th, chula.ac.th and dad.co.th. Their contents could not be read. The catalog below is observed practice for TBIM seeding and must be verified against those PDFs.

### Cited Findings
- สำนักงานปลัดกระทรวงการพัฒนาสังคมฯ (ops.go.th) tender set includes a sheet titled "**สัญลักษณ์และอักษรย่อระบบสุขาภิบาล และระบบป้องกันอัคคีภัย**" — [ops.go.th แบบ 4.3 ระบบสุขาภิบาล และระบบป้องกันอัคคีภัย](https://www.ops.go.th/images/%E0%B9%81%E0%B8%9A%E0%B8%9A4.3_%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B2%E0%B8%A0%E0%B8%B4%E0%B8%9A%E0%B8%B2%E0%B8%A5_%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%B1%E0%B8%84%E0%B8%84%E0%B8%B5%E0%B8%A0%E0%B8%B1%E0%B8%A2_%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AF.pdf_part_1.pdf)
- A hospital (smpkhos.go.th) procurement document is titled "**รายการสัญลักษณ์ประกอบแบบงานไฟฟ้า**" — [smpkhos.go.th 9101430.pdf](https://www.smpkhos.go.th/supplies/9101430.pdf)
- A university tender set (SWU) includes "สารบัญแบบงานระบบไฟฟ้าและสื่อสาร" and "แบบระบบสุขาภิบาล ดับเพลิงและป้องกันอัคคีภัย" — [SWU A_1801.pdf](https://eprocurement.swu.ac.th/upload_att/A_1801.pdf); [SWU T_1636.pdf](https://eprocurement.swu.ac.th/upload_tor/T_1636.pdf)
- Other tender and legend PDFs found: [NPRU แบบไฟฟ้า(ใหม่).pdf](https://news.npru.ac.th/userfiles/PROCUREMENT/nm_files/20160309151202_%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2(%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88).pdf); [กรมศุลกากร AC-04 แบบแสดงระบบปรับอากาศ… สัญลักษณ์ รายละเอียด](https://www.customs.go.th/data_files/2ee04418c6a22b841841ad2a614b3e07.pdf); [IEAT รายการประกอบแบบ ระบบไฟฟ้า (สำนักงานใหญ่ กนอ.)](https://www.ieat.go.th/web-upload/1xff0d34e409a13ef56eea54c52a291126/202303/m_document/8130/17083/file_download/9f44bb9c770c99e9067424a820ef7b2b.pdf); [IEAT รายการประกอบแบบ ระบบสุขาภิบาลและดับเพลิง](https://www.ieat.go.th/web-upload/1xff0d34e409a13ef56eea54c52a291126/202303/m_document/8130/17083/file_download/9e50707c18d6fa13194ad034f6052c0f.pdf); [RMUTR สัญลักษณ์ ท่อ ข้อต่อ ประตูน้ำ](https://fis.rmutr.ac.th/wp-content/uploads/2014/11/rmutr_fis_20-10-63_Plan_DLTV-building-sn.pdf); [Chula แบบงานวิศวกรรมระบบสุขาภิบาล](https://www.edu.chula.ac.th/sites/default/files/2020-11/5_%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B2%E0%B8%A0%E0%B8%B4%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%AD.%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%95%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1.pdf); [DAD แบบงานระบบสุขาภิบาล อาคารทิศตะวันออก](https://www.dad.co.th/download/announce_Procurement/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B4%E0%B8%A8%E0%B8%95%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%81/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B2%E0%B8%A0%E0%B8%B4%E0%B8%9A%E0%B8%B2%E0%B8%A5%20%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B4%E0%B8%A8%E0%B8%95%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%81_1.pdf); [pui108diy การเขียนแบบและอ่านแบบ (ไฟฟ้า)](https://www.pui108diy.com/wp/wp-content/uploads/2015/03/02.pdf); [Scribd สัญลักษณ์ไฟฟ้า1](https://www.scribd.com/document/424869055/%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93-%E0%B9%84%E0%B8%9F%E0%B8%9F-%E0%B8%B21)
- Thai fire-fighting legends include sprinkler heads by temperature rating (68/79/93 °C), CO2 and dry-powder extinguishers, FHC and valve symbols. The source is a generic CAD legend block and may not be Thai — [freecads.com Fire Fighting Legend](https://www.freecads.com/cad/sprinkler-head-extinguisher-symbol-legend-cad-block/)
- Fire alarm component names in Thai use: Smoke Detector (อุปกรณ์ตรวจจับควันไฟ), Heat Detector (อุปกรณ์ตรวจจับความร้อน), Manual Pull Station (อุปกรณ์แจ้งเหตุเพลิงไหม้ด้วยมือ), Alarm Bell (กระดิ่ง), Graphic Annunciator (ตู้กราฟฟิก), FCP/FACP (ตู้ควบคุม) — [uptech-shop FACP page](https://www.uptech-shop.com/15569641/%E0%B8%95%E0%B8%B9%E0%B9%89%E0%B8%84%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%A1%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%95%E0%B8%B8%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B9%89-fire-alarm-control-panel); [VECL Bell/Horn/Strobe/Speaker](https://www.vecthai.com/main/?p=2059)
- Main distribution boards: MDB takes supply from the utility or transformer LV side and feeds building loads. LP (load panel) is fed from an MDB breaker — [Pantip: วงจร MDB และ LP](https://pantip.com/topic/32310879); [pmswitchboard](https://www.pmswitchboard.com/th/pages/7051)
- "60227 IEC 01 (THW)" is the general building wire — [Scribd: IEC-01 (THW)](https://www.scribd.com/doc/316218609/IEC-01-THW)
- An FDC (หัวรับน้ำดับเพลิง, Fire Department Connection) supplies water into the building sprinkler piping — [saturnfire: หัวรับน้ำดับเพลิง FDC](https://www.saturnfire.com/post/%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%87-fdc)
- Industrial fire code: the ประกาศกระทรวงอุตสาหกรรม เรื่องการป้องกันและระงับอัคคีภัยภายในโรงงาน พ.ศ. 2552 defines sprinkler systems (ระบบหัวกระจายน้ำดับเพลิงอัตโนมัติ) and hose cabinets (สายฉีดน้ำดับเพลิงและตู้เก็บสายฉีด) — [ราชกิจจานุเบกษา 30 ก.ย. 2552 (ckenso copy)](https://www.ckenso.com/wp-content/uploads/2018/12/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A3%E0%B8%B0%E0%B8%87%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%B1%E0%B8%84%E0%B8%84%E0%B8%B5%E0%B8%A0%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%9E.%E0%B8%A8.-2552.pdf)

### Inferences — TBIM seed catalog (status: observed-practice (unverified) for every row)

Geometry convention: sizes are given at 1:1 paper scale in mm (typical plot size for a 1:100 plan). "ø" = circle diameter. The source column says which lineage the glyph follows (US = ANSI Y32.9 / NFPA 170 / ASPE; IEC = IEC 60617-11). A verifying session should replace the source column with the Thai legend PDF URL.

#### 4.1 Electrical power & lighting (ไฟฟ้ากำลังและแสงสว่าง)
| code | Thai | English | geometry | label | lineage |
|---|---|---|---|---|---|
| EL-REC-DUP | เต้ารับคู่ 2P+G | Duplex receptacle | ø3 open circle, two parallel short lines (5 mm) passing through the circle perpendicular to the wall. Circle tangent to the wall line | — ; suffix "GFCI"/"RCD", "WP" (กันน้ำ), "E" (ฉุกเฉิน), "+1.20" mounting height | US |
| EL-REC-SGL | เต้ารับเดี่ยว | Single receptacle | ø3 circle, one line through | — | US |
| EL-REC-IEC | เต้ารับ (แบบ IEC) | Socket outlet (IEC) | Semicircle (ø4) open toward the room, flat side parallel to the wall, with a short stem to the wall. The ground variant adds a bar across the semicircle | — | IEC 60617 S00478-type |
| EL-REC-FLR | เต้ารับฝังพื้น | Floor outlet | Duplex receptacle glyph enclosed in a 5×5 square | FB | US |
| EL-REC-3P | เต้ารับ 3 เฟส / เต้ารับกำลัง | 3-phase power outlet | ø4 circle with a filled triangle inside or three short lines, with a text tag | "3φ 16A/32A" | US-derived |
| EL-REC-AC | จุดต่อเครื่องปรับอากาศ | A/C outlet / isolator | Square 4×4 with "AC", or a circle with a diagonal | AC / ISO | local |
| EL-SW-1 | สวิตช์ทางเดียว | Single-pole switch | Letter "S" (2.5 mm text) at the switch location, or IEC: ø1.5 dot with a 4 mm line at 45° ending in a short tick | S, S₁ | US / IEC |
| EL-SW-2G | สวิตช์ 2 ทาง / 3 ทาง | 3-way (Thai "two-way") switch | "S₃" (US) or IEC: dot, 45° line with a tick at both ends | S3 | US / IEC |
| EL-SW-DIM | สวิตช์หรี่ไฟ | Dimmer | "S_D" or the IEC switch glyph with an arrow | SD | US |
| EL-SW-OCC | สวิตช์ตรวจจับการเคลื่อนไหว | Occupancy sensor | ø5 circle with "OS" / "PIR" | OS | US |
| EL-LT-FL | โคมฟลูออเรสเซนต์/LED T8 | Linear luminaire | Rectangle drawn at luminaire size (e.g. 1200×100 real size), with a centre line along its length. Lamp-count tag nearby | "A" type tag, e.g. 2x18W LED T8 | US |
| EL-LT-TBAR | โคมตะแกรง (ฝังฝ้า) | Recessed troffer 600×600 | Square 600×600 real size, with one diagonal or 2 internal lines per lamp | B | US |
| EL-LT-DL | โคมดาวน์ไลท์ | Downlight | ø6 circle, open; a filled small inner circle for LED spot | C | US |
| EL-LT-WALL | โคมติดผนัง | Wall bracket | Semicircle against the wall, half-filled | D | US |
| EL-LT-EM | ไฟฉุกเฉิน | Emergency light (self-contained twin-head) | Rectangle 8×4 with two small circles/triangles (lamp heads). Alternative: luminaire glyph with filled/half-black fill = on emergency circuit | EL / "E" | US |
| EL-LT-EXIT | ป้ายทางออกฉุกเฉิน | Exit sign | Rectangle 8×4 with "EXIT" text or an X in a circle. Filled triangles show arrow direction | EXIT | US |
| EL-PNL-MDB | ตู้เมนไฟฟ้า | Main distribution board | Large rectangle, fully filled black (or hatched) | MDB, EMDB | US |
| EL-PNL-DB | ตู้ย่อย | Distribution board / load panel | Rectangle 10×4, half filled diagonally. Surface = fully filled, flush = half filled | DB-x, LP-x, PP-x, EDB | US |
| EL-PNL-CU | ตู้คอนซูเมอร์ | Consumer unit | Rectangle half-black | CU | local |
| EL-JB | กล่องต่อสาย | Junction box | ø3 circle with "J", or a small square | JB | US |
| EL-HR | ลูกศรโฮมรัน | Home-run arrow | Arrowhead (filled, 3 mm) at the end of a wiring run pointing toward the panel. Circuit ID text beside it; tick marks across the run = number of conductors (long tick = neutral, short = phase, dotted = ground in US practice) | "LP-1/3,5" | US |
| EL-WR-CONC | สายเดินในฝ้า/ผนัง | Wiring concealed in ceiling/wall | Solid curved line | — | US |
| EL-WR-FLR | สายเดินใต้พื้น | Wiring in floor/underground | Dashed line | — | US |
| EL-MTR | มิเตอร์ (kWh) | kWh meter | ø6 circle with "kWh" or "M" | kWh | IEC/US |
| EL-TR | หม้อแปลง | Transformer (SLD) | Two overlapping circles (IEC) | TR, kVA | IEC |
| EL-CB | เซอร์กิตเบรกเกอร์ (SLD) | Circuit breaker | IEC: switch line with an "×" at the fixed contact. US: arc over two terminals | MCCB/ACB 3P xxAT/xxAF | IEC/US mixed |
| EL-ATS | สวิตช์สลับอัตโนมัติ | ATS | Rectangle "ATS" with two inputs | ATS | local |
| EL-GEN | เครื่องกำเนิดไฟฟ้า | Generator | Circle with "G" / "~" | GEN | IEC |
| EL-CAP | คาปาซิเตอร์แบงค์ | Capacitor bank | Two parallel plates | CAP, kVAR | IEC |
| EL-MOT | มอเตอร์ | Motor | ø6 circle with "M" | M | IEC |

Wiring notation (observed practice): e.g. `2x2.5 sq.mm. 60227 IEC 01 (THW) + G-2.5 sq.mm. in ø1/2" EMT` or `4x95, G-35 sq.mm. NYY on cable tray`. Cable codes seen in Thai specs: **60227 IEC 01** (THW, single-core PVC), **60227 IEC 10** (sheathed multi-core), **VAF** (flat 2-core, มอก. 11), **NYY / NYY-G**, **VCT**, **CV / XLPE (มอก. 2143)**, **FRC** (fire-resistant, BS 6387 CWZ, for fire alarm/emergency). Conduit codes: **EMT, IMC, RSC** (US, UL), **PVC** (rigid, มอก. 216 electrical conduit), **HDPE** (underground), **FMC / FLEX**. Only "60227 IEC 01 (THW)" is sourced in this session; the rest are unverified.

#### 4.2 Communications / ELV (สื่อสารและระบบสัญญาณอ่อน)
| code | Thai | English | geometry | label |
|---|---|---|---|---|
| CM-TEL | เต้ารับโทรศัพท์ | Telephone outlet | Filled triangle (side 4 mm), base on the wall | TEL / T |
| CM-DATA | เต้ารับ LAN | Data outlet | Open triangle with "D" (or "LAN"); combined tel+data = triangle split | D / DT |
| CM-TV | เต้ารับทีวี (MATV) | TV/MATV outlet | ø4 circle with "TV" | TV |
| CM-CCTV | กล้องวงจรปิด | CCTV camera | Rectangle 6×3 (body) with a trapezoid lens on one end. Dome variant = circle with a half-filled inner circle | CCTV / C |
| CM-SPK | ลำโพง | Ceiling speaker (PA/BGM) | ø5 circle with "S" or a speaker-cone glyph | SP |
| CM-AC | ระบบควบคุมการเข้าออก | Card reader / access control | Square 4×4 with "CR"; door-contact "DC"; exit button "EB"; magnetic lock "EM" | CR, EM, EB |
| CM-WAP | จุดกระจายสัญญาณไร้สาย | Wi-Fi AP | Circle with "AP" or radiating arcs | AP |
| CM-RACK | ตู้ Rack | Rack / MDF / IDF | Rectangle hatched | MDF, IDF, TTB |
| CM-NC | ระบบเรียกพยาบาล | Nurse call | Circle with "NC" | NC |

#### 4.3 Fire alarm (ระบบแจ้งเหตุเพลิงไหม้)
| code | Thai | English | geometry | label |
|---|---|---|---|---|
| FA-SD | อุปกรณ์ตรวจจับควัน | Smoke detector | ø6 circle with "S" (or "SD"). Photoelectric sometimes marked "P" | SD |
| FA-HD | อุปกรณ์ตรวจจับความร้อน | Heat detector (fixed/ROR) | ø6 circle with "H"; "F" fixed-temp / "R" rate-of-rise | HD |
| FA-BSD | อุปกรณ์ตรวจจับควันลำแสง | Beam detector | Tx and Rx boxes joined by a dashed line with an arrow | BD-T / BD-R |
| FA-FD | อุปกรณ์ตรวจจับเปลวไฟ | Flame detector | Circle with "F" and flame | FD |
| FA-GD | อุปกรณ์ตรวจจับแก๊ส | Gas detector | Circle with "G" | GD |
| FA-DD | อุปกรณ์ตรวจจับควันในท่อลม | Duct smoke detector | Square with "SD" inside the duct | DSD |
| FA-MS | อุปกรณ์แจ้งเหตุด้วยมือ | Manual pull station | Square 5×5 with "F" (US NFPA 170), or with "MS" | MS / MCP |
| FA-BELL | กระดิ่ง | Fire alarm bell | ø6 circle with a bell outline or "B"; wall-mounted | FB |
| FA-HS | ไซเรน/แฟลช | Horn/strobe | Square with "H" plus a lightning "X" glyph, or a triangle with "HS" | H/S |
| FA-FCP | ตู้ควบคุม | Fire alarm control panel | Rectangle with "FACP"/"FCP" | FCP |
| FA-ANN | ตู้แสดงผล | Annunciator / graphic panel | Rectangle "ANN" / "GA" | ANN |
| FA-EOL | ตัวต้านทานปลายสาย | End-of-line device | Small rectangle "EOL" | EOL |
| FA-FS/TS | สวิตช์ตรวจการไหล / สวิตช์ตรวจวาล์ว | Flow switch / tamper switch (interface) | Square "FS" / "TS" | FS, TS |
| FA-FT | โทรศัพท์ดับเพลิง | Fire telephone jack | Triangle "FT" | FT |

#### 4.4 Lightning protection & grounding (ป้องกันฟ้าผ่าและต่อลงดิน)
| code | Thai | English | geometry | label |
|---|---|---|---|---|
| LP-AT | ตัวนำล่อฟ้า (แท่ง) | Air terminal | ø3 circle with a centre dot (plan) or a filled dot | AT |
| LP-ESE | ล่อฟ้าแบบ ESE | ESE air terminal (non-IEC; NF C 17-102) | ø6 circle with a star/radiating lines | ESE |
| LP-RC | ตัวนำบนหลังคา | Roof conductor | Heavy line with regular X or short cross-ticks | — |
| LP-DC | ตัวนำลงดิน | Down conductor | Line with a circle-and-arrow "down" mark at the riser | DC |
| LP-TJ | จุดทดสอบ | Test joint / test box | Small square "TJ" | TJ |
| LP-GR | หลักดิน | Ground rod | ø4 circle with a cross, or IEC earth glyph (three decreasing horizontal bars) | GR |
| LP-GW | บ่อตรวจหลักดิน | Ground inspection pit | Square with a ground rod inside | GP |
| LP-MGB | บัสบาร์ต่อลงดินหลัก | Main ground busbar | Long thin filled rectangle | MGB / MET |
| LP-EQ | การต่อประสานศักย์ | Equipotential bond | Dashed line with a small dot at each bond | EB |

#### 4.5 Plumbing / water supply (ประปา) & sanitary (สุขาภิบาล)
| code | Thai | English | geometry | label |
|---|---|---|---|---|
| PL-CW | ท่อน้ำดี (น้ำเย็น) | Cold water line | Solid line broken at intervals with "CW" | CW |
| PL-HW | ท่อน้ำร้อน | Hot water line | Solid line with "HW"; hot-water return "HWR" | HW |
| PL-S | ท่อโสโครก | Soil line | Heavy solid line with "S" | S |
| PL-W | ท่อน้ำทิ้ง | Waste line | Solid line with "W" | W |
| PL-V | ท่ออากาศ | Vent line | Dashed line with "V" | V |
| PL-RW | ท่อน้ำฝน | Rainwater leader | Line with "RW" / "RWL" | RWL |
| PL-D | ท่อน้ำทิ้งแอร์ | Condensate drain | Line with "D" / "CD" | CD |
| SN-FD | ท่อระบายน้ำพื้น | Floor drain | ø6 circle with a cross-hatch grid, or ø6 circle with "FD" | FD |
| SN-CO | ที่เปิดล้าง | Cleanout | ø4 circle with "CO"; floor cleanout "FCO", wall "WCO" | CO |
| SN-VTR | ท่ออากาศทะลุหลังคา | Vent through roof | Circle at the vent end with "VTR" | VTR |
| SN-RD | ตะแกรงรับน้ำฝน | Roof drain | ø6 circle with a dome/cross | RD |
| SN-GT | บ่อดักไขมัน | Grease trap | Rectangle "GT" | GT |
| SN-MH | บ่อพัก | Manhole / inspection chamber | Square (ท่อระบาย) or circle, with "MH" / "บ่อพัก" | MH |
| SN-ST | ถังบำบัด | Septic / treatment tank | Rectangle / circle "ถังบำบัดน้ำเสียสำเร็จรูป" | ST / WWT |
| VL-GATE | ประตูน้ำ | Gate valve | Two triangles tip to tip (bow-tie), open | GV |
| VL-GLOBE | วาล์วลูกโลก | Globe valve | Bow-tie with a filled dot at the centre | GLV |
| VL-BALL | บอลวาล์ว | Ball valve | Bow-tie with an open circle at the centre | BV |
| VL-CHK | เช็ควาล์ว | Check valve | Bow-tie with one triangle filled, or a line with an arrow and a diagonal slash | CV |
| VL-BFV | วาล์วปีกผีเสื้อ | Butterfly valve | Bow-tie with a vertical line through the centre | BFV |
| VL-FCV | วาล์วลูกลอย | Float control valve | Bow-tie with a float ball on an arm | FCV |
| VL-PRV | วาล์วลดแรงดัน | Pressure reducing valve | Bow-tie with an arrow / "PRV" | PRV |
| VL-STR | ตัวกรอง | Y-strainer | "Y" branch glyph | STR |
| PL-MTR | มาตรวัดน้ำ | Water meter | Rectangle / circle "M" / "WM" | WM |
| PL-HB | ก๊อกสนาม | Hose bibb | Small tap glyph | HB |
| PL-PUMP | เครื่องสูบน้ำ | Pump | Circle with an internal triangle pointing to the discharge | P |
| PL-TANK | ถังเก็บน้ำ | Water tank | Rectangle / circle | WT |

#### 4.6 Fire protection / sprinkler (ดับเพลิง)
| code | Thai | English | geometry | label |
|---|---|---|---|---|
| FP-LINE | ท่อดับเพลิง | Fire protection main | Line with "FP" (or "F") | FP |
| FP-SPR-P | หัวกระจายน้ำคว่ำ | Pendent sprinkler | ø3 open circle | SP |
| FP-SPR-U | หัวกระจายน้ำหงาย | Upright sprinkler | ø3 circle with a centre dot, or filled | SU |
| FP-SPR-SW | หัวกระจายน้ำติดผนัง | Sidewall sprinkler | Semicircle against the wall | SW |
| FP-FHC | ตู้สายฉีดน้ำดับเพลิง | Fire hose cabinet | Rectangle 8×4 split diagonally, half filled. A hose-reel circle inside for "FHR" | FHC |
| FP-FDC | หัวรับน้ำดับเพลิง | Fire department connection (Siamese) | "Y" glyph with two circles | FDC |
| FP-FH | หัวดับเพลิง (ภายนอก) | Fire hydrant | Circle with a filled centre + branch | FH |
| FP-FE | ถังดับเพลิง | Portable extinguisher | Filled triangle, or "FE" in a rectangle. Type suffix CO2 / ABC (dry powder) | FE |
| FP-ACV | วาล์วสัญญาณเตือน | Alarm check valve | Check-valve glyph in a circle, "ACV" | ACV |
| FP-ZCV | ชุดวาล์วควบคุมโซน | Zone control valve assembly | OS&Y gate + FS + TS + test/drain | ZCV |
| FP-FS | สวิตช์ตรวจการไหล | Flow switch | Square "FS" on the pipe | FS |
| FP-TS | สวิตช์ตรวจวาล์ว | Tamper / supervisory switch | Square "TS" | TS |
| FP-FP | เครื่องสูบน้ำดับเพลิง | Fire pump / jockey pump | Pump circle "FP" / "JP" | FP, JP |
| FP-ITV | ชุดทดสอบ | Inspector's test valve | Valve + "ITV" | ITV |

#### 4.7 HVAC (ปรับอากาศและระบายอากาศ)
| code | Thai | English | geometry | label |
|---|---|---|---|---|
| AC-SAD | หัวจ่ายลมเย็น | Supply air diffuser (square/4-way) | Square at size with both diagonals (X). Arrows show throw | SAD 600x600 |
| AC-RAG | หน้ากากลมกลับ | Return air grille | Square/rectangle with one diagonal | RAG |
| AC-EAG | หน้ากากลมดูดออก | Exhaust air grille | Rectangle with one diagonal, "EAG" | EAG |
| AC-FAL | หน้ากากลมภายนอก | Fresh air louver | Rectangle with parallel slats | FAL / OAL |
| AC-SLD | หัวจ่ายลมแบบสล็อต | Linear slot diffuser | Long rectangle with slot lines | SLD |
| AC-DUCT-S | ท่อลมส่ง | Supply duct | Double-line duct, cross-section box with "X" (supply) | W×H mm |
| AC-DUCT-R | ท่อลมกลับ | Return duct | Double-line duct, section box with one diagonal | W×H |
| AC-FD | ลิ้นกันไฟ | Fire damper | Duct line with a filled triangle / "FD"; motorized "MFD", smoke "SD" | FD |
| AC-VD | ลิ้นปรับปริมาณลม | Volume damper | Line across the duct with a small circle (pivot) | VD |
| AC-FLEX | ท่อลมอ่อน | Flexible duct | Wavy/zig-zag double line | — |
| AC-FCU | เครื่องเป่าลมเย็น | Fan coil unit | Rectangle at size, tag in an ellipse/hexagon "FCU-1" | FCU |
| AC-AHU | เครื่องส่งลมเย็น | Air handling unit | Rectangle, tag "AHU-1" | AHU |
| AC-CDU | คอยล์ร้อน | Condensing unit | Rectangle with a fan circle, "CDU-1" | CDU |
| AC-EF | พัดลมระบายอากาศ | Exhaust fan | Circle with a fan/propeller glyph, or rectangle "EF-1" | EF / SF / PF |
| AC-CH | เครื่องทำน้ำเย็น | Chiller | Rectangle "CH-1" | CH |
| AC-PIPE | ท่อน้ำเย็นส่ง/กลับ | Chilled water supply/return | Lines "CHS" / "CHR"; condenser "CDS/CDR" | CHS/CHR |
| AC-REF | ท่อสารทำความเย็น | Refrigerant piping | Lines "RL" (liquid) / "RS" (suction) or "R" | RL/RS |
| AC-TH | เทอร์โมสตัท | Thermostat | ø4 circle with "T" | T |

#### 4.8 Gas (ก๊าซ LPG)
| code | Thai | English | geometry | label |
|---|---|---|---|---|
| GS-LINE | ท่อก๊าซ | Gas line | Line with "G" / "LPG" | G |
| GS-VLV | วาล์วก๊าซ | Gas shut-off valve | Gate/ball bow-tie with "G" | GV |
| GS-REG | ตัวปรับความดัน | Regulator | Circle/box "REG" | REG |
| GS-CYL | ถังก๊าซ / ถังเก็บ | Cylinder bank / bulk tank | Rectangle / circles, "LPG" | LPG |
| GS-DET | อุปกรณ์ตรวจจับแก๊ส | Gas leak detector | Circle "G" | GD |

### Gaps
- None of the catalog rows is verified against a fetched Thai legend PDF. All were egress-blocked. Priority verification sources, in order: ops.go.th "สัญลักษณ์และอักษรย่อระบบสุขาภิบาล และระบบป้องกันอัคคีภัย"; smpkhos.go.th "รายการสัญลักษณ์ประกอบแบบงานไฟฟ้า"; customs.go.th AC-04; SWU A_1801 and T_1636; NPRU แบบไฟฟ้า; RMUTR sanitary; IEAT specifications.
- Legends of กรมโยธาธิการ, กองแบบแผน (กระทรวงสาธารณสุข) and กรมบัญชีกลาง e-GP were not located specifically.
- A Thai MEA/PEA "home-run tick-mark" convention (tick count per conductor) is not confirmed.

---

## Q5. Pipe line-type conventions, abbreviations and pipe material codes

### Takeaway
The Thai abbreviations for sanitary lines follow US plumbing usage: CW, HW, S, W, V, plus FD and CO for fixtures. A pipe colour scheme is commonly cited: blue for water, brown for waste, black for soil, grey for vent, red for fire. Material codes and PVC class notation (ชั้น 8.5 / 13.5) come from TIS pipe standards. Material details were not confirmed in this session.

### Cited Findings
- Abbreviations: **CW** = ท่อน้ำดี (cold water supply); **HW** = ท่อน้ำร้อน; **W** = ท่อน้ำเสีย/น้ำทิ้ง (waste, from washing); **S** = ท่อส้วม/ท่อน้ำโสโครก (soil, carrying solids from WCs); **V** = ท่อระบายอากาศ (vent) — [EEC Academy post (Blockdit)](https://www.blockdit.com/posts/648bc980d071a9c985b96fb7); [ConTel Home: ระบบท่อในอาคาร](https://contelhome.com/pipe-system-in-buildings/); [Thai PP-R: ระบบท่อในอาคาร](https://thaippr.com/pipe-system-in-buildings/); [Wazzadu: ระบบสุขาภิบาลในงานสถาปัตยกรรม](https://www.wazzadu.com/article/4847)
- Pipe colour convention cited in Thai articles: **blue = ท่อน้ำดี; brown = ท่อน้ำทิ้ง; black = ท่อน้ำเสีย/โสโครก; grey = ท่ออากาศ; red = ท่อดับเพลิง**. The same articles say pipes are marked with abbreviations "ตามหลักสากล" by label or spray paint — [ConTel Home](https://contelhome.com/pipe-system-in-buildings/); [SAP Home Center: 7 ประเภท ระบบท่อภายในอาคาร](https://www.saphomecenter.com/17376849/7-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97-%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B9%88%E0%B8%AD%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%A1%E0%B8%B5%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87). The search snippet merged several pages, so which page gives the colour list is uncertain. It is an industry article, not a standard.
- **CO** = Clean Out (ที่เปิดทำความสะอาด), **FD** = Floor Drain — search-snippet summary for [SaenTriputh: สัญลักษณ์ของท่อ](http://www.saentriputh.com/blog.php?b=8) and [RMUTR sanitary legend](https://fis.rmutr.ac.th/wp-content/uploads/2014/11/rmutr_fis_20-10-63_Plan_DLTV-building-sn.pdf). The snippet attributed these to "English-language sources". Weak evidence.
- A YouTube tutorial shows Thai drafting of W, S, V and CW pipe runs in plan — [ตัวอย่างการเขียนแนวท่อ W, S, V และ CW](https://www.youtube.com/watch?v=lCr-ox-RBOM)
- The DPT sanitary pipe standard **มยผ. 3101-51** covers drainage pipe materials and installation — [YOTATHAI](https://www.yotathai.com/yotanews/myp-3101-51); [download.yotathai.com](https://download.yotathai.com/2021/02/3101-51.html)

### Inferences (observed practice, unverified)
- Further line abbreviations common on Thai sheets: **RWL/RL** rain water leader, **VTR** vent through roof, **FP/F** fire protection, **SP** sprinkler main, **G/LPG** gas, **CD/D** condensate drain, **CHS/CHR** chilled water, **IW** irrigation, **SW/STW** storm water, **HWR** hot water return, **TW/RW** treated/recycled water.
- Material notation: **PVC ชั้น 8.5** (PN 8.5 bar, มอก. 17) for drainage and vent, **PVC ชั้น 13.5** for pressure water supply; **PPR PN20** (hot/cold, มอก. 2585?); **GSP** galvanized steel pipe (มอก. 276, class "BS-M" / "ชั้นกลาง"); **BSP** black steel pipe Sch.40 for fire (ASTM A53 / มอก. 427); **HDPE PE100 PN10** for site mains; **CI** cast iron; **uPVC** in specs; **Cu type L** refrigerant copper. The TIS numbers are recalled and must be verified.

### Gaps
- TIS numbers for PVC pressure pipe (commonly cited as มอก. 17), GSP (มอก. 276), PPR and HDPE (มอก. 982) were not confirmed in this session.
- No Thai standard mandating pipe colour coding was located. ISO/ASME A13.1 or DIN 2403 lineage is unconfirmed.

---

## Q6. How much of Thai MEP symbology follows US (NFPA 170, ANSI/IEEE 315, ASHRAE) vs IEC?

### Takeaway
The evidence points to a hybrid system. Codes and standards reference IEC for cables and conductor colours (EIT 2556 moved to IEC colours; cables are named "60227 IEC 01") and for lightning (IEC 62305). Fire protection references NFPA, and installation-plan vocabulary (MDB/LP, EMT/IMC, FACP, FHC, FCU/AHU, CW/HW/S/W/V) is US-derived. Thai consultants' legend sheets commonly mix both. No Thai standard fixes one convention.

### Cited Findings
- EIT 2556 wiring standard adopted IEC-style conductor colours (brown/black/grey/blue/green-yellow) — [FlipHTML5 EIT 2556](https://fliphtml5.com/wfrt/taov/basic)
- Thai building wire is designated per IEC 60227 ("60227 IEC 01 (THW)"), keeping the legacy US-style trade name THW in brackets — [Scribd IEC-01 (THW)](https://www.scribd.com/doc/316218609/IEC-01-THW); [DSD มอก. 11-2553](https://www.dsd.go.th/DSD/Doc/Download/17093)
- Fire protection: EIT 3002-51 is used alongside NFPA as the inspection reference — [ei-auditor.com](https://www.ei-auditor.com/standard.html)
- Lightning protection design in Thailand is calculated per IEC 62305 or the EIT standard — [changfi.com Air Terminal](https://www.changfi.com/fix/2025/12/26/air-terminal/)
- Pipe abbreviations are described in Thai sources as following international ("สากล") practice — [ConTel Home](https://contelhome.com/pipe-system-in-buildings/)
- Thai-language symbol tutorials present both IEC and ANSI/IEEE 315 symbol sets (hmong.in.th mirrors of "IEEE 315-1975" and "Electrical symbol") — [hmong.in.th IEEE 315](https://hmong.in.th/wiki/IEEE_315-1975); [klangfaifa: สัญลักษณ์ไฟฟ้า](https://www.klangfaifa.com/Knowledge-about-Electrical-equipment/ElectricalSymbols%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2.html); [leetech: สัญลักษณ์ทางไฟฟ้า](https://leetech.co.th/article/basic-electrical-symbols-meaning/)

### Inferences
- For TBIM, each symbol should carry a `lineage` attribute (US / IEC / local-Thai) and allow alternate glyphs. For example, the switch has an "S" text glyph (US) and a dot-and-slash glyph (IEC). The receptacle has a circle with two lines (US) and a semicircle (IEC).
- Rough split: plan-view device symbols for power, lighting, ELV, fire alarm, sprinkler and HVAC air devices are mostly US-lineage (NFPA 170 / ANSI Y32.9 / ASHRAE / ASPE). SLD switchgear symbols are mixed, trending IEC 60617. Lightning and earthing symbols trend IEC. Conductor colours and cable designations are IEC.

### Gaps
- No quantitative survey of Thai legend sheets (share using US vs IEC glyphs) exists in the evidence gathered.
- NFPA 170 adoption by Thai fire code or EIT 021002-24 (e.g. an annex referencing NFPA 170 symbols) is unconfirmed.
