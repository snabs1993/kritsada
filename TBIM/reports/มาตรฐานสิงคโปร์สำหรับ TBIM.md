# มาตรฐานสิงคโปร์สำหรับ TBIM (ภาคผนวกโปรไฟล์ SG)

**สำหรับงานในสิงคโปร์ สิ่งที่ TBIM ต้องทำให้ถูกก่อนรูปร่างสัญลักษณ์คือ "ข้อมูล" ได้แก่ ค่าระดับอ้างอิง Singapore Height Datum (SHD) พิกัด SVY21 ค่าควบคุมของ IFC+SG และสีงาน A&A แบบ Magenta/Cyan/Yellow** ตั้งแต่ 1 ต.ค. 2025 การยื่นแบบโครงการใหม่ขนาด GFA 30,000 ตร.ม. ขึ้นไปต้องผ่าน CORENET X ด้วยโมเดล IFC+SG และระยะต่อไปจะขยายไปยังโครงการที่เล็กลง หน่วยงานตรวจโมเดลจากค่าคุณสมบัติ (SGPset) มากกว่าจากเส้นในแบบ ส่วนรูปร่างสัญลักษณ์บนแบบ 2 มิติของสิงคโปร์กำหนดไว้ใน SS CP 83-2 ซึ่งเราเปิดอ่านไม่ได้ในรอบนี้ แคตตาล็อก TBIM จึงบันทึกรูปทรงของสิงคโปร์ส่วนใหญ่เป็น `unverified` และให้น้ำหนักกับพื้นหลักฐาน ชื่อเลเยอร์ สี และค่าคุณสมบัติที่มีหลักฐานแทน

รายงานนี้เป็นภาคผนวกของ `สัญลักษณ์งานเขียนแบบสำหรับ TBIM.md` สรุปจากบันทึก 3 ฉบับใน `TBIM/research_notes/มาตรฐานสิงคโปร์สำหรับ TBIM/` เท่านั้น ไม่ได้ค้นเว็บเพิ่ม ข้อมูลที่เพิ่มลงแคตตาล็อกอธิบายไว้ใน `TBIM/data/README.md` หัวข้อ 11

## ข้อจำกัดของหลักฐาน: เว็บ .gov.sg และ SS eShop ถูกบล็อก

ระหว่างค้นคว้า proxy ของระบบบล็อกการเปิดหน้าเว็บของรัฐบาลสิงคโปร์ทั้งหมด (corenet.gov.sg, info.corenet.gov.sg, ura.gov.sg, bca.gov.sg, scdf.gov.sg, pub.gov.sg, sla.gov.sg, ema.gov.sg, enterprisesg.gov.sg และ isomer-user-content.by.gov.sg) รวมถึงร้านมาตรฐาน singaporestandardseshop.sg, scribd, pdfcoffee, studylib และเว็บที่ปรึกษาเกือบทั้งหมด ผลที่ตามมาคือ

- **ข้อมูลส่วนใหญ่มาจาก snippet ของเครื่องมือค้นหา** ไม่ได้อ่านเอกสารฉบับเต็ม ในแคตตาล็อกจึงเป็น `evidence: "search_snippet"`
- ชื่อและฉบับของมาตรฐานที่มาจากชื่อสินค้าใน SS eShop เชื่อถือได้ค่อนข้างมาก เพราะเป็นบันทึกของผู้จัดพิมพ์เอง ส่วนเนื้อหาที่มาจาก snippet เชื่อถือได้น้อยกว่า
- **มีเพียง 2 ไฟล์ที่อ่านครบ** จาก GitHub คือไฟล์แมปคุณสมบัติ IFC-SG ของ Autodesk ([IFC-SG Property Mapping Export.txt](https://github.com/Autodesk/revit-ifc/blob/master/Install/Program%20Files%20to%20Install/IFC-SG%20Property%20Mapping%20Export.txt)) และตารางเลเยอร์ CP 83 ของ Revit ([exportlayers-dwg-CP83.txt](https://github.com/jeremytammik/RevitSdkSamples/blob/master/snapshot/2024/REX%20SDK/Samples/DRevitFreezeDrawing/DRevitFreezeDrawing/Configuration/exportlayers-dwg-CP83.txt)) ทั้งสองเป็นการตีความของผู้ขาย ไม่ใช่เอกสารของหน่วยงาน
- ข้อความบางส่วนในบันทึกระบุว่ามาจาก "ความรู้ของผู้ค้นคว้าเอง" เช่น อักษรย่อระบบท่อ ปรับอากาศ ดับเพลิง และรหัสชิ้นส่วนโครงสร้าง รายการเหล่านี้เข้าแคตตาล็อกเป็น `unverified` ทั้งหมด

## มาตรฐานหลักแยกตามสาขา

**งานเขียนแบบ CAD ของสิงคโปร์อยู่ใน SS CP 83 ห้าส่วน ซึ่งทุกส่วนได้รับการยืนยันพร้อมฉบับแก้ไขในปี 2026** (เปิดรับความเห็น 5 ธ.ค. 2025 ถึง 6 ม.ค. 2026 และไฟล์ฉบับแก้ไขลงวันที่ 27 มี.ค. 2026 ดู [ประกาศ ACES](http://aces.org.sg/wp-content/pdf/2025/384_2025-Singapore%20Standards%20for%20Public%20Comment%20-%20Dec%202025.pdf) และ [ราชกิจจานุเบกษาสิงคโปร์ 13 มี.ค. 2026](https://assets.egazette.gov.sg/2026/Government%20Gazette/Notices%20under%20other%20Acts/1364.pdf)) CP 83 บังคับใช้กับการยื่นไฟล์อิเล็กทรอนิกส์ต่อ URA ตั้งแต่ 1 ส.ค. 2006

| สาขา | มาตรฐาน / ข้อกำหนด | ฉบับที่พบ | แหล่ง |
|---|---|---|---|
| CAD | CP 83-1 การตั้งชื่อเลเยอร์ | CP 83-1:2004(2026)+A1:2026 | [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/239ec7aa-0210-491c-81c1-3931fc4e9e75) |
| CAD | CP 83-2 สัญลักษณ์ CAD (สถาปัตย์ / โยธา-โครงสร้าง / M&E) | CP 83-2:2000(2026)+A2:2026 | [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/88a13125-7ec9-459c-be92-338552a31d6c) |
| CAD | CP 83-3 การตั้งชื่อไฟล์ | CP 83-3:2001(2026)+A1:2026 | [SS eShop (2020)](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/0acde4d9-479a-4de6-b4d6-9dda6a2aeb0c) |
| CAD | CP 83-4 ข้อกำหนดการเขียนแบบ (กรอบชื่อแบบ มาตราส่วน ลายแรเงา ชนิดเส้น อักษรย่อ) | CP 83-4:2001(2026)+A1:2026 | [Amd 1](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=260327113535Amd+1+to+CP+83-4.pdf&pdtid=440a72be-55ae-499b-b6ff-d1ab460d373f) |
| CAD | CP 83-5 สีและชนิดเส้น | CP 83-5:2001(2026)+A1:2026 | [Amd 1](https://www.singaporestandardseshop.sg/Product/GetPdf?fileName=260327114043Amd+1+to+CP+83-5.pdf&pdtid=aa5fda6f-4d15-42d1-9443-819a352f14a6) |
| วาดแบบทั่วไป | SS ISO 128 / SS ISO 406 (รับ ISO ฉบับเก่า) | 1982 / 1987 | [SS ISO 128](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/12791838-b8c9-46e5-a393-a31105ccf570) |
| BIM/ยื่นแบบ | Code of Practice for CORENET X | ฉบับที่ 3 ก.ย. 2025 (+ Annex COP 3.1) | [COP PDF](https://info.corenet.gov.sg/docs/default-source/default-document-library/corenet-x-cop---third-edition-2025-09.pdf?sfvrsn=a7e34c36_5) |
| BIM/ยื่นแบบ | IFC+SG (IFC4 + SGPset) | ไฟล์ Excel Mapping (ไม่ได้อ่าน) | [What is IFC+SG](https://info.corenet.gov.sg/ifc-sg/start-here/WhatIsIFCSG) |
| ดับเพลิง | SCDF Fire Code 2023 | เผยแพร่ 25 ส.ค. 2023 มีผล 1 มี.ค. 2024 แก้ไขแล้ว 6 ชุด | [SCDF](https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023) |
| แจ้งเหตุเพลิงไหม้ | SS 645 (เดิม CP 10) | 2019 บังคับตั้งแต่ 1 เม.ย. 2020 | [หนังสือเวียน SCDF](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/downloads/circulars/circular--implementation-of-ss-645-2019-code-of-practice-for-the-installation-and-servicing-of-electrical-fire-alarm-systems.pdf?sfvrsn=9f5efcb0_1) |
| สปริงเกอร์ | CP 52 | 2004 (+Erratum 1) กำหนดปรับปรุงครึ่งหลังปี 2026 | [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/d20796ad-7c95-4e7f-bc87-bac9bed123de) |
| หัวรับน้ำ/ท่อยืน/สายฉีด | SS 575 (เดิม CP 29) | 2012+A1:2021 | [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/39ec1405-7ab1-4542-bca1-7a2f32eea7dd) |
| เครื่องดับเพลิง | SS 578 (เดิม CP 55) | 2019+A1:2022 | [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/98dc5bba-533c-45a5-aafd-3fbafcd7a605) |
| ป้ายทางออก/ความปลอดภัย | SS 508-1, -3, -5 | 2013 | [SS 508-5](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/a20b326c-a63d-4ccc-9b60-92fb7502cb84) |
| ไฟฉุกเฉิน | SS 563-1 / -2 | 2010 (2017) | [SS 563-1](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/4822c432-b465-454b-91ec-07a03cbf8b13) |
| ไฟฟ้า | SS 638 (ดัดแปลงจาก BS 7671:2008 แทน CP 5) | 2018+C1:2020+A1:2022 | [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/fd1f48ab-6e55-49f4-a725-5addcb22654e) |
| ป้องกันฟ้าผ่า | SS 555 ส่วนที่ 1–4 (IEC 62305) | 2018 (ส่วนที่ 1 +C1:2019) | [SS 555-1](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/788a1d1a-8c65-40e7-9717-449a6f025f26) |
| สื่อสาร | IMDA COPIF | 2018 มีผล 15 ธ.ค. 2018 | [COPIF 2018](https://www.imda.gov.sg/-/media/imda/files/regulation-licensing-and-consultations/consultations/completed-consultations/consultation-papers/11/copif-2018.pdf) |
| ประปา | SS 636 (เดิม CP 48) | 2018+A4:2021 | [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/243b25fd-7b06-4d49-a5e3-4527d82001f8) |
| สุขาภิบาล | PUB COP on Sewerage and Sanitary Works | ฉบับที่ 3 มี.ค. 2025 ข้อกำหนดใหม่มีผล 1 ก.ย. 2025 | [PUB](https://www.pub.gov.sg/-/media/PUB/PDF/Code-of-Practice-on-Sewerage-and-Sanitary-Works-3rd-Edition--Mar-2025.pdf) |
| ระบายน้ำผิวดิน | PUB COP on Surface Water Drainage | ฉบับที่ 7 ธ.ค. 2018 + Addendum 3 เม.ย. 2025 | [PUB](https://www.pub.gov.sg/-/media/PUB/PDF/Compliance/Earth-Control-Measures/Code-of-Practice-on-Surface-Water-Drainage.pdf) |
| ก๊าซ | SS 608 | 2024 EMA บังคับตั้งแต่ 1 ก.ย. 2025 | [SS eShop](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/20af1379-6a78-42bb-aeeb-f5a69a163646) |
| ปรับอากาศ | SS 553 / SS 530 | 2026 / 2024 | [SS 553:2026](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/c417dc9a-0cca-4562-a19e-b076c9a4957e) |
| ออกแบบคอนกรีต | SS EN 1992-1-1 + ภาคผนวกแห่งชาติ | 2008 (ฉบับรุ่นที่ 2 ปี 2024 ยังไม่บังคับ) | [AEC Technical SG](https://www.aectechnicalsg.com/ss-en-1992-1-12024-singapore-pes-guide-to-the-second-generation-eurocode-2/) |
| เหล็กเสริม | SS 560 / SS 561 (ตะแกรง) | 2016(2024)+A1:2024 / 2010(2022)+A2:2022 | [SS 560](https://www.singaporestandardseshop.sg/Product/SSPdtDetail/cd702a96-43de-468a-8c4f-3fd94ae7b39b) |
| คอนกรีต | SS EN 206 + SS 544-1/-2 | 2014 + 2019 | [SOCOTEC](https://www.socotec-certification-international.sg/product-certification/construction-related-industries/ready-mixed-concrete-ss-en-206-ss-544) |
| เหล็กโครงสร้าง | BCA Design Guide BC1 | 2012 | [BCA BC1 handbook](https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/for-industry/sustainable-construction/bc1_handbook_amd_c.pdf) |
| ถนน | LTA Standard Details of Road Elements | Apr 2014 Rev F (2024); Rev H มีผล 1 มี.ค. 2026 | [LTA](https://www.lta.gov.sg/content/ltagov/en/industry_innovations/industry_matters/development_construction_resources/Transport_Infrastructure_Design_Criteria_and_Specifications.html) |
| สำรวจ | SVY21 (EPSG:3414), SHD (EPSG datum 1140) | SHD บังคับในแผนที่สำรวจตั้งแต่ 15 มิ.ย. 2015 | [epsg.io 3414](https://epsg.io/3414), [ประกาศ LSB](https://www.sisv.org.sg/Publications/CS_Circular/LSB%20NOTICE%20ON%20SHD%20IN%20SURVEY%20PLANS%20%20IMPLEMENTATION%20ADVICE_RS%20(2).pdf) |

งานระบบของสิงคโปร์อยู่ในสาย British/IEC ทั้งหมด SS 638 มาจาก BS 7671 ส่วน SS 555 มาจาก IEC 62305 สีสายไฟใช้ชุด IEC และ SLD ใช้สัญลักษณ์ IEC 60617 ([SmartSLD](https://smartsld.com/blog/single-line-diagram-symbols/)) แต่ **ไม่พบมาตรฐาน SS ใดที่กำหนดสัญลักษณ์งานระบบในแปลนโดยตรง** legend เป็นของที่ปรึกษาแต่ละราย ตัวอย่างเดียวที่พบคือแผ่น "00-ACMV-001 ACMV Symbols & Legend" ใน [Scribd](https://www.scribd.com/document/386409634/00-ACMV-001) ซึ่งให้อักษรย่อ FCU, TEF, KEF, VCD

## CORENET X และ IFC+SG: ผลต่อ TBIM

**CORENET X เป็นช่องทางยื่นแบบเดียวของหลายหน่วยงาน** (BCA, URA, SCDF, PUB, LTA, NEA) ตาม Code of Practice ฉบับที่ 3 ([COP](https://info.corenet.gov.sg/docs/default-source/default-document-library/corenet-x-cop---third-edition-2025-09.pdf?sfvrsn=a7e34c36_5)) มี 3 gateway หลักคือ Design, Construction และ Completion และมี Piling Gateway ที่ไม่บังคับ ([submission workflows](https://info.corenet.gov.sg/regulatory-process/about-the-new-submission-process/submission-workflows)) ที่ Completion Gateway ยังต้องยื่นแบบโครงสร้างเสริม รายการคำนวณ และรายงาน AC/ACO ของ Part ST เป็นเอกสาร 2 มิติ ([key updates](https://info.corenet.gov.sg/docs/default-source/default-document-library/key-updates-to-corenet-x-code-of-practice.pdf?sfvrsn=beba456a_1)) แปลว่า TBIM ต้องส่งออกได้ทั้งโมเดลและแผ่นแบบ

การบังคับใช้เป็นระยะ

| ระยะ | วันที่ | ขอบเขต | แหล่ง |
|---|---|---|---|
| 1 | 1 ต.ค. 2025 | โครงการใหม่ GFA ≥ 30,000 ตร.ม. | [URA DC25-07](https://www.ura.gov.sg/guidelines/circulars/dc25-07/) |
| 2 | 1 ต.ค. 2026 | โครงการใหม่ GFA ≥ 5,000 ตร.ม. (ต่ำกว่านั้นสมัครใจ) **หรือ** "โครงการใหม่ทั้งหมด" (ขัดกัน ดูด้านล่าง) | [CORENET X FAQ](https://support.corenet.gov.sg/hc/en-us/articles/14813415847695-What-is-the-implementation-timeline-for-CORENET-X) |
| 3 | 1 ต.ค. 2027 | โครงการที่ดำเนินการอยู่ทั้งหมด | [URA DC25-01](https://www.ura.gov.sg/guidelines/circulars/dc25-01/) |

**ข้อมูลขัดกันเรื่องระยะที่ 2 (บันทึกไว้ ไม่ได้ตัดสิน):** FAQ ของ CORENET X และหนังสือเวียน URA ระบุเกณฑ์ 5,000 ตร.ม. แต่บล็อกผู้ขาย ([Bimeco](https://www.bim.com.sg/blog/corenet-guide-singapore/), [CVC Engineers](https://www.cvcengineers.com/post/pe-endorsement-in-singapore-when-you-need-one-what-it-costs-and-what-s-at-stake)) และ [GovInsider](https://govinsider.asia/intl-en/article/one-stop-digital-platform-for-built-environment-industry-to-be-mandatory-from-october) ระบุว่า "โครงการใหม่ทั้งหมดไม่ว่าขนาดใด" บันทึกแนะนำให้ถือถ้อยคำทางการ (5,000 ตร.ม.) จนกว่าจะอ่านต้นฉบับได้ ทั้งนี้บริษัทที่ทำโครงการในสิงคโปร์เป็นหลักควรเตรียม IFC+SG สำหรับทุกโครงการใหม่ไว้ก่อน

ผลต่อ TBIM มีห้าข้อ

1. **ส่งออก IFC4 พร้อมชุดคุณสมบัติ `SGPset_*`** ไฟล์ของ Autodesk มี 152 ชุด เช่น SGPset_Door (48 คุณสมบัติ เช่น FireAccessOpening, BarrierFreeAccessibility, SwingOut), SGPset_Window (OperationType, PercentageOfOpening), SGPset_Space, SGPset_BuildingStorey (GroundLevel, RoofLevel, RefugeFloor) และ SGPset_Wall ที่มี `ReferToDrawingNumber` เชื่อมโมเดลกับเลขแผ่น 2 มิติ ([ไฟล์ Autodesk](https://github.com/Autodesk/revit-ifc/blob/master/Install/Program%20Files%20to%20Install/IFC-SG%20Property%20Mapping%20Export.txt)) **ไม่มี SGPset สำหรับ IfcGrid หรือ IfcAnnotation** สัญลักษณ์กำกับแบบของ TBIM จึงไม่ถูกตรวจโดยตรง
2. **ป้ายห้องต้องแยก "ชื่อที่แสดง" ออกจาก "ค่า SpaceName"** ค่าใน IFC ต้องเป็นค่าควบคุม เช่น "Office" ไม่ใช่ "CEO Office" มิฉะนั้นโมเดลไม่ผ่านการตรวจและคำนวณจำนวนผู้ใช้อาคารไม่ได้ ([& Senibina](https://senibina.com.sg/blog/ifc-file-checking-corenet-x)) รายการค่า SpaceName ยังไม่ได้อ่าน
3. **ตารางชั้นเดียวทั้งโครงการ** ทุกสาขาต้องใช้ชื่อชั้นและค่า Z เดียวกัน มิฉะนั้น CORENET X จะไม่ประมวลผลโมเดลรวม ([Checking Levels](https://info.corenet.gov.sg/ifc-sg/model-setup-and-coordination/checking-levels-(z-coordinates)))
4. **พิกัดและระดับ** x, y ใช้ SVY21 และ z ใช้ SHD ([URA geo-referencing](https://www.ura.gov.sg/guidelines/best-practices/geo-referencing-bim-submissions/))
5. **ป้าย gateway บนแผ่น** ไม่มีแหล่งใดบังคับ TBIM เพิ่มระเบียน `SG.GENERAL.CORENET_X_SUBMISSION_LABEL` เป็นข้อเสนอ (สถานะ unverified) เพื่อระบุชุดแบบว่ายื่น gateway ใด

## ไทยกับสิงคโปร์ต่างกันอย่างไรในสัญลักษณ์หลัก

ฝั่งไทยสรุปจากรายงานหลักและแคตตาล็อก ฝั่งสิงคโปร์มาจากบันทึก SG

| เรื่อง | ไทย (โปรไฟล์ TH) | สิงคโปร์ (โปรไฟล์ SG) | สถานะฝั่ง SG |
|---|---|---|---|
| ค่าระดับ | ค่าสัมพัทธ์กับระดับอ้างอิงโครงการ เมตร ทศนิยม 2 ตำแหน่ง เช่น `+0.20`, `EL. +0.00` | เมตร ทศนิยม 3 ตำแหน่ง อ้างอิง SHD เช่น `FFL 4.500 SHD` แบบเก่าใช้ +100 ม. (`104.500 mRL` = 4.500 SHD) | พื้นหลักฐาน agency / รูปแบบข้อความ unverified |
| พิกัด | UTM 47N/48N (WGS 84) หรือ Indian 1975 | SVY21 / Singapore TM (EPSG:3414) + SHD (EPSG:6927) | standard / agency |
| เหล็กเสริม | `4-DB16`, `RB9@0.20` ระยะเป็นเมตร (บางสำนักงานเป็น ซม.) เกรด SD30/40/50 ตาม มอก. 24-2559 | `4H16`, `H10-200` ระยะเป็นมิลลิเมตร รูปแบบเต็มตาม BS 8666 `12H16-01-200 B1` เกรด B500B ตาม SS 560 ตะแกรง A7/A8/A10 (200×200) | เกรด standard / รูปแบบป้าย unverified / ตะแกรง observed_practice |
| คอนกรีต | `fc' = 240 ksc (cylinder)` ต้องระบุชนิดตัวอย่าง | `C32/40` (MPa ทรงกระบอก/ลูกบาศก์) ตาม SS EN 206 + SS 544 ชื่อเก่า "Grade 40" | observed_practice |
| สีงานใหม่/เดิม/รื้อ | ไม่มีแหล่งยืนยัน (งานเดิมเส้นประ/สีเทา เป็นแนวปฏิบัติทั่วไป) | ใหม่ Magenta (ACI 6), เดิม Cyan (ACI 4), รื้อ Yellow (ACI 2) ตาม URA และ CP 83-5; แบบ A&A ย่อยของ SCDF รื้อเป็นเส้นประสีเหลือง | agency |
| การรับรองแบบ | ลายมือชื่อและเลขใบอนุญาต `ภ-สถ`, `ภย.` ตามกฎกระทรวงฉบับที่ 4; ตรา "แบบขออนุญาต" | QP (สถาปนิกขึ้นทะเบียนหรือ PE) ยื่นแบบ BP และ ST แยกกัน; PE ประทับตรา PE พร้อมเลขทะเบียน PEB และส่งทางอิเล็กทรอนิกส์; LEW รับรอง SLD ที่ยื่น SP ไม่พบรูปแบบตราและเลขทะเบียน | ผู้มีสิทธิ์ standard / ตรา observed_practice |
| หน่วยวัด | ระยะในแบบเป็นเมตร/มม. ปนกัน ค่าระดับเมตร 2 ตำแหน่ง | ระยะเป็นมิลลิเมตร ค่าระดับเมตร 3 ตำแหน่ง ระยะเหล็กเป็นมิลลิเมตร | observed_practice |
| ชื่อเลเยอร์ | ASA CAD 2554 (อิง NCS) | CP 83-1 เช่น `A-_WALL----_E`, `A-_DOOR----_A` (การตีความของ Autodesk) | observed_practice |
| สีสายไฟ | L1 น้ำตาล L2 ดำ L3 เทา N ฟ้า PE เขียวเหลือง (วสท./มอก. 11-2553) | ชุดเดียวกัน บังคับโดย EMA ตั้งแต่ 1 มี.ค. 2009 (สีเก่า แดง/เหลือง/น้ำเงิน) | agency |
| ระยะสถานี | `STA 0+000` (กม.+ม.) | LTA: เมตร ทศนิยม 3 ตำแหน่ง ตามแนวศูนย์กลางราง (`CH 12345.678`) | agency / คำนำหน้า CH unverified |
| ก๊าซ | LPG ถังและถังเก็บ | ก๊าซเมือง/ก๊าซธรรมชาติทางท่อ ตาม SS 608:2024 | standard |
| การยื่นแบบ | ชุดแบบกระดาษ/PDF ต่อท้องถิ่น | ดิจิทัลผ่าน CORENET X gateway พร้อมโมเดล IFC+SG | agency |

ข้อสังเกตเรื่องรหัสชนกัน: ในสิงคโปร์ `T` เป็นทั้งชื่อเก่าของเหล็กกำลังสูงและ "Top" ([Quora](https://www.quora.com/What-is-the-difference-between-T-rebars-and-H-rebars)) และ `CL` ในงานสุขาภิบาลคือระดับฝาบ่อ (cover level) ขณะที่แบบไทยใช้ `CL.` เป็นระดับฝ้าเพดาน TBIM จึงต้องค้นรหัสด้วย (ภูมิภาค, หมวดงาน, รหัส) เสมอ

## สิ่งที่เพิ่มในแคตตาล็อก TBIM

| รายการ | จำนวน |
|---|---:|
| โปรไฟล์ SG บนระเบียนเดิม | 117 |
| ระเบียน `SG.*` ใหม่ | 7 |
| โปรไฟล์ SG ทั้งหมด (รวมระเบียนใหม่) | 124 (standard 1, agency 21, observed_practice 29, unverified 73) |
| ไวยากรณ์สัญกรณ์ของ SG | 15 |
| รายการคำศัพท์ภูมิภาค SG | 226 ใน 15 ชุด (ชุดใหม่ `drawing_colours`, `standards_register`) |

ระเบียนใหม่คือ ป้าย gateway ของ CORENET X, การอ้างอิงคุณสมบัติ IFC+SG, ชื่อเลเยอร์ CP 83, เส้นส่วนกันไฟในแบบ SCDF, เลขแปลงที่ดิน `MK 10 Lot 123X` ([SLA](https://www.sla.gov.sg/regulatory/property-boundaries/allocation-of-lot-numbers/)), สัญกรณ์ระดับ SHD และระดับพื้นขั้นต่ำของ PUB (ถนน/พื้นดิน + 300 มม. สิ่งอำนวยความสะดวกพิเศษ + 600 มม.) สถานะส่วนใหญ่เป็น unverified เพราะอักษรย่องานระบบและรหัสชิ้นส่วนโครงสร้างในบันทึกมาจากความรู้ของผู้ค้นคว้าเอง ไม่ใช่เอกสารที่อ่านได้

## ข้อมูลที่ขัดกันในบันทึก

- เกณฑ์ CORENET X ระยะที่ 2: 5,000 ตร.ม. กับ "ทุกโครงการ" (ดูด้านบน)
- รหัส EPSG ของความสูง SHD: บันทึกสถาปัตย์อ้าง [epsg.io/6916](https://epsg.io/6916) ส่วนบันทึกโครงสร้างระบุว่า "เชื่อว่าเป็น" EPSG:6916
- จุดกำเนิดของ EPSG:3414: 1°22′N / 103°50′E กับ 1°22'02.9154"N / 103°49'31.9752"E (ฉบับหลังไม่ได้ยืนยัน)
- จำนวนหมุดโครงข่าย ISN: ประมาณ 39 หมุดปฐมภูมิ ([SLA](https://www.sla.gov.sg/regulatory/property-boundaries/survey-reference-system/)) กับประมาณ 65 หมุดชั้นที่ 1 ([UN-GGIM](https://ggim.un.org/2unwgic/documents/Kean%20Huat%20Soon.pdf))
- ปีที่เปลี่ยนจาก AMSL เป็น SHD: SLA เริ่มปี 2015 แต่ [103 EAST](http://www.103east.sg/architectural-dictionary/s/singapore-height-datum-shd/) เขียนว่า "ตั้งแต่ปี 2019"
- ค่า MPL สัมบูรณ์ 104.5 / 104.0 m RL มาจาก [เว็บรวบรวมข้อมูล](https://www.aectechnicalsg.com/pub-drainage-requirements-in-singapore-2026-guide/) และอยู่ในระบบ +100 ม. จึงไม่ได้ใส่ในแคตตาล็อก
- ความหมายของ `A-_` ในตารางเลเยอร์ของ Autodesk และโครงฟิลด์ 2/6/2 ของ CP 83-1 ซึ่ง snippet อาจอธิบาย ISO 13567 แทน

## ช่องว่างและรายการที่ต้องตรวจสอบ

| ลำดับ | สิ่งที่ต้องหา | เพื่อยืนยันอะไร | วิธีได้มา |
|---:|---|---|---|
| 1 | CP 83-2:2000(2026)+A2:2026 | รูปทรงสัญลักษณ์ระดับ หัวกริด หัวรูปตัด ทิศเหนือ สัญลักษณ์ M&E | ซื้อจาก SS eShop |
| 2 | CP 83-4 และ CP 83-5 ฉบับ 2026 | ขนาดกระดาษและกรอบชื่อแบบ มาตราส่วน ลายแรเงา ชนิดเส้น อักษรย่อ สีตามสาขา | ซื้อจาก SS eShop |
| 3 | CP 83-1 และ CP 83-3 | นิยามฟิลด์เลเยอร์ รหัสสาขา/วิวสำหรับเลขแผ่น | ซื้อจาก SS eShop |
| 4 | COP CORENET X ฉบับที่ 3 + Annex 3.1 | แผ่นแบบ 2 มิติที่ต้องยื่นในแต่ละ gateway กฎตั้งชื่อชั้น ลายเซ็นดิจิทัล | ดาวน์โหลดฟรี ([COP](https://info.corenet.gov.sg/docs/default-source/default-document-library/corenet-x-cop---third-edition-2025-09.pdf?sfvrsn=a7e34c36_5)) จากเครือข่ายที่เข้า .gov.sg ได้ |
| 5 | IFC+SG Excel Mapping File และ Resource Kit | รายการค่า SpaceName คุณสมบัติงานระบบ/ดับเพลิง | ดาวน์โหลดฟรี ([Excel Mapping](https://info.corenet.gov.sg/ifc-sg/requirements---submission/ifc-sg-excel-mapping-file)) |
| 6 | SCDF Fire Safety Checklist for Building Plan Submissions และ Table 1.2A ของ Fire Code 2023 | สี legend ส่วนกันไฟ/ทางหนีไฟ รายการมาตรฐานที่อ้างพร้อมฉบับ | ดาวน์โหลดฟรี ([checklist](https://www.scdf.gov.sg/docs/default-source/fire-safety-docs/downloads/forms/fire-safety-checklist-for-building-plan-submissions.pdf?sfvrsn=83f335a6_9)) |
| 7 | แนวทาง CAD ของ URA ฉบับเต็ม | ยืนยันตารางสี A&A และกฎเลเยอร์ | ดาวน์โหลดฟรี ([URA](https://www.ura.gov.sg/Corporate/Guidelines/Development-Control/Planning-Permission/~/media/5E09E71E0AA04496BF89744458693403.ashx)) |
| 8 | SS 561 (ตารางตะแกรง), SS 645 / CP 52 / SS 575 (ภาคผนวกสัญลักษณ์) | ขนาดตะแกรง A-series และสัญลักษณ์อุปกรณ์ดับเพลิง | ซื้อจาก SS eShop |
| 9 | PUB COPSSW ฉบับที่ 3 และแบบมาตรฐาน PUB, LTA SDRE บทที่ 8, SLA Utility Survey Standard v1.0 | อักษรย่อสุขาภิบาล ความกว้างเส้นจราจร สัญลักษณ์งานสำรวจสาธารณูปโภค | ดาวน์โหลดฟรี ([SLA utility survey](https://www.sla.gov.sg/qql/slot/u143/Newsroom/Circulars/Survey%20Services/Other%20Information/Standard%20and%20Specifications%20for%20Utility%20Survey%20in%20Singapore%20Version%201.0%20-%20Aug%202017.pdf)) |
| 10 | บทความ FIG 2015 เรื่อง SHD | ค่าต่างระหว่าง SHD กับ RL เดิมหลังการปรับโครงข่าย 2009 | ดาวน์โหลดฟรี ([FIG](https://fig.net/resources/proceedings/2015/2015_07_vrfp_comm5/5A_Khoo_Singapore_Height_Datum.pdf)) |
| 11 | คู่มือ CAD/BIM ของสำนักงาน แม่แบบกรอบชื่อแบบ แผ่น legend และตารางเหล็กจริง | ยืนยันรายการ unverified ทั้งหมด (อักษรย่อ รูปแบบป้ายเหล็ก ตราสถานะ เลขแผ่น) | ขอจากสำนักงานของผู้ใช้ |

## บทสรุป

โปรไฟล์ SG ใน TBIM วางรากฐานที่มีหลักฐานไว้แล้ว คือ พื้นหลักฐาน SHD/SVY21 สี A&A ของ URA ชื่อเลเยอร์ CP 83 ค่าคุณสมบัติ IFC+SG ชั้นคุณภาพเหล็ก SS 560 และรายชื่อมาตรฐานพร้อมฉบับ ส่วนที่ยังขาดคือ "หน้าตา" ของสัญลักษณ์และถ้อยคำบนแบบ ซึ่งอยู่ใน CP 83-2 และ CP 83-4 ที่ต้องซื้อ และใน COP CORENET X, ไฟล์ IFC+SG และ checklist ของ SCDF ที่ดาวน์โหลดได้ฟรีเมื่อเข้าเว็บรัฐบาลสิงคโปร์ได้ ขั้นต่อไปที่คุ้มที่สุดคือหาเอกสาร 3 รายการฟรีนั้นก่อน แล้วจึงซื้อ CP 83-2/-4/-5 และขอคู่มือ CAD ของสำนักงานมายืนยันรายการที่ยังเป็น unverified
