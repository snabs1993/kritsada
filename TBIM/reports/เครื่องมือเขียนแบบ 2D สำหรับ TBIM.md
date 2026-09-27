# เครื่องมือเขียนแบบ 2 มิติ (2D Drafting Tools) สำหรับโปรแกรม TBIM

> เอกสารศึกษาและค้นคว้า: โปรแกรม BIM ควรมีเครื่องมือ 2D อะไรบ้าง
> อ้างอิงจากโปรแกรมที่ใช้กันแพร่หลาย ได้แก่ **AutoCAD**, **Revit**, **Archicad**, **BricsCAD** และ **Tekla**
> แล้วจัดลำดับความสำคัญเพื่อนำไปพัฒนาใน **TBIM**

---

## สารบัญ

1. [หลักคิด: 2D ในโปรแกรม BIM ต่างจาก CAD อย่างไร](#1-หลักคิด-2d-ในโปรแกรม-bim-ต่างจาก-cad-อย่างไร)
2. [ระดับความสำคัญ (Priority)](#2-ระดับความสำคัญ-priority)
3. [กลุ่มที่ 1 — เครื่องมือช่วยความแม่นยำ (Precision / Drawing Aids)](#กลุ่มที่-1--เครื่องมือช่วยความแม่นยำ-precision--drawing-aids)
4. [กลุ่มที่ 2 — เครื่องมือวาด (Draw)](#กลุ่มที่-2--เครื่องมือวาด-draw)
5. [กลุ่มที่ 3 — การเลือกวัตถุ (Selection)](#กลุ่มที่-3--การเลือกวัตถุ-selection)
6. [กลุ่มที่ 4 — เครื่องมือแก้ไข (Modify)](#กลุ่มที่-4--เครื่องมือแก้ไข-modify)
7. [กลุ่มที่ 5 — การบอกขนาด (Dimension)](#กลุ่มที่-5--การบอกขนาด-dimension)
8. [กลุ่มที่ 6 — ข้อความและคำอธิบาย (Text & Annotation)](#กลุ่มที่-6--ข้อความและคำอธิบาย-text--annotation)
9. [กลุ่มที่ 7 — สัญลักษณ์งานสถาปัตย์/วิศวกรรม (Symbols)](#กลุ่มที่-7--สัญลักษณ์งานสถาปัตย์วิศวกรรม-symbols)
10. [กลุ่มที่ 8 — Block / Detail Component / Library](#กลุ่มที่-8--block--detail-component--library)
11. [กลุ่มที่ 9 — สไตล์และคุณสมบัติ (Styles & Properties)](#กลุ่มที่-9--สไตล์และคุณสมบัติ-styles--properties)
12. [กลุ่มที่ 10 — เครื่องมือเฉพาะ BIM (BIM-specific 2D)](#กลุ่มที่-10--เครื่องมือเฉพาะ-bim-bim-specific-2d)
13. [กลุ่มที่ 11 — วัดและสอบถามข้อมูล (Measure & Inquiry)](#กลุ่มที่-11--วัดและสอบถามข้อมูล-measure--inquiry)
14. [กลุ่มที่ 12 — Sheet / Layout / Print](#กลุ่มที่-12--sheet--layout--print)
15. [กลุ่มที่ 13 — Import / Export](#กลุ่มที่-13--import--export)
16. [กลุ่มที่ 14 — UX และการควบคุม](#กลุ่มที่-14--ux-และการควบคุม)
17. [ตารางเปรียบเทียบกับโปรแกรมอ้างอิง](#ตารางเปรียบเทียบกับโปรแกรมอ้างอิง)
18. [Roadmap แนะนำสำหรับ TBIM](#roadmap-แนะนำสำหรับ-tbim)
19. [ข้อเสนอโครงสร้างข้อมูล (Data Model)](#ข้อเสนอโครงสร้างข้อมูล-data-model)
20. [แหล่งอ้างอิง](#แหล่งอ้างอิง)

---

## 1. หลักคิด: 2D ในโปรแกรม BIM ต่างจาก CAD อย่างไร

| ประเด็น | CAD ทั่วไป (AutoCAD) | BIM (Revit / Archicad) | ข้อแนะนำสำหรับ TBIM |
|---|---|---|---|
| ที่อยู่ของเส้น 2D | อยู่ใน Model Space เดียว | **ผูกกับ View** (View-specific) เห็นเฉพาะ view ที่วาด | ต้องแยก **Model element** กับ **View-specific (Detail) element** |
| ขนาดตัวอักษร/สัญลักษณ์ | ต้องตั้ง Annotative Scale เอง | ปรับตามมาตราส่วนของ View อัตโนมัติ | ใช้หน่วย **"ขนาดบนกระดาษ" (paper size)** สำหรับ annotation ทั้งหมด |
| ความหนาเส้น | Lineweight ต่อ layer/object | Line weight ตาม **Object Style + Scale** | มีตาราง Line weight แยกตามมาตราส่วน |
| การบอกขนาด | ผูกกับเส้น (associative) | ผูกกับ **ชิ้นส่วน BIM** (ผนัง, แกน Grid) อัปเดตอัตโนมัติ | Dimension ต้องอ้างอิง reference ของวัตถุ ไม่ใช่พิกัดตายตัว |
| Tag / ป้ายกำกับ | ข้อความธรรมดา | อ่านค่าจาก **Parameter** ของวัตถุ | Tag = template ที่ดึงข้อมูลจาก property |
| การจัดกลุ่ม | Layer | Category / Subcategory (+ Layer ใน Archicad) | ใช้ **Category** เป็นหลัก และรองรับ Layer เพื่อ export DWG |

**สรุปหลักการสำคัญ 3 ข้อ**
1. **ทุกอย่างที่เป็น 2D ต้องรู้ว่าตัวเองอยู่ใน View ไหน** และมาตราส่วนอะไร
2. **Annotation ต้องฉลาด** — เชื่อมกับข้อมูล BIM แก้โมเดลแล้วแบบ 2D อัปเดตตาม
3. **ความแม่นยำต้องเท่า CAD** — Snap, พิมพ์ค่า, Ortho, Tracking ต้องดีพอ ๆ กับ AutoCAD ไม่งั้นผู้ใช้จะกลับไปเขียนใน CAD

---

## 2. ระดับความสำคัญ (Priority)

| ระดับ | ความหมาย |
|---|---|
| **P0** | จำเป็นต้องมี (MVP) — ไม่มีแล้วเขียนแบบไม่ได้ |
| **P1** | ควรมี — ใช้บ่อยในงานจริง ทำให้เขียนแบบก่อสร้างได้ครบ |
| **P2** | ดีถ้ามี — เพิ่มความเร็ว/ความสะดวก หรือใช้เฉพาะงาน |

---

## กลุ่มที่ 1 — เครื่องมือช่วยความแม่นยำ (Precision / Drawing Aids)

> เป็น **หัวใจของโปรแกรมเขียนแบบ** ต้องทำก่อนเครื่องมือวาด

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| จุดยึดวัตถุ | **Object Snap (OSNAP)** | ยึดจุด: Endpoint, Midpoint, Center, Intersection, Perpendicular, Tangent, Nearest, Quadrant, Node, Extension, Parallel, Apparent Intersection, Insertion | **P0** (Endpoint, Mid, Center, Intersection, Perp, Nearest) / P1 (ที่เหลือ) |
| โหมดตั้งฉาก | **Ortho Mode** | บังคับเส้นให้อยู่แนวนอน/ตั้ง | **P0** |
| ติดตามมุม | **Polar Tracking** | ล็อกมุมทุก ๆ 15°, 30°, 45°, 90° หรือกำหนดเอง | **P0** |
| ติดตามจุดวัตถุ | **Object Snap Tracking** | ลากเส้นประอ้างอิงจากจุด snap เพื่อหาจุดตัดแนว | P1 |
| ป้อนพิกัด | **Coordinate Input** | พิมพ์ค่าแบบ Absolute (x,y), Relative (@dx,dy), Polar (@ระยะ<มุม) | **P0** |
| ป้อนค่าบนเคอร์เซอร์ | **Dynamic Input / Temporary Dimension** | พิมพ์ความยาว/มุมระหว่างวาดได้ทันที (แบบ Revit/Archicad Tracker) | **P0** |
| กริด | **Grid / Snap Grid** | ตารางช่วยวาดและจับจุดตามระยะกริด | P1 |
| ระนาบอ้างอิง | **Reference Plane / Construction Line (XLINE, RAY)** | เส้นช่วยอ้างอิงไม่มีที่สิ้นสุด ไม่พิมพ์ออก | **P0** |
| ระยะจากจุดอ้างอิง | **From / Temporary Tracking Point** | วาดโดยอ้างระยะห่างจากจุดที่กำหนด | P1 |
| ระบบพิกัดผู้ใช้ | **UCS / Work Plane / Rotate View** | หมุนระบบพิกัดเพื่อเขียนแนวเอียง | P1 |
| ล็อกทิศทาง | **Shift-Constrain / Axis Lock** | กด Shift เพื่อล็อกแกน | P1 |
| ความแม่นยำหน่วย | **Units & Precision** | มม./ซม./ม., ทศนิยม, มุม (องศา/องศา-ลิปดา) | **P0** |

---

## กลุ่มที่ 2 — เครื่องมือวาด (Draw)

| เครื่องมือ | ชื่ออังกฤษ | โหมด/ตัวเลือกที่ควรมี | Priority |
|---|---|---|---|
| เส้นตรง | **Line** | ต่อเนื่อง (chain), ปิดรูป (Close), Undo จุดล่าสุด | **P0** |
| เส้นต่อเนื่อง | **Polyline** | ส่วนตรง + ส่วนโค้ง, ความกว้างเส้น, ปิด/เปิด | **P0** |
| สี่เหลี่ยม | **Rectangle** | 2 มุม, จากจุดศูนย์กลาง, หมุนได้ (Rotated Rectangle), มุมมน/ลบมุม | **P0** |
| วงกลม | **Circle** | Center-Radius, Center-Diameter, 2 จุด, 3 จุด, Tangent-Tangent-Radius | **P0** |
| ส่วนโค้ง | **Arc** | 3 จุด, Center-Start-End, Start-End-Radius, Tangent (ต่อจากเส้น), Fillet Arc | **P0** |
| รูปหลายเหลี่ยม | **Polygon** | จำนวนด้าน, แนบใน/แนบนอกวงกลม | P1 |
| วงรี | **Ellipse / Elliptical Arc** | Center-Axis, Axis-End | P1 |
| เส้นโค้งอิสระ | **Spline** | Fit points, Control vertices, Bezier | P1 |
| จุด | **Point** | สไตล์จุด (x, +, o) | P2 |
| เส้นคู่ | **Double Line / Multiline** | ระยะห่างกำหนดเอง ใช้เขียนผนัง 2D/ถนน | P1 |
| ลายฟักหรือพื้นที่ระบาย | **Hatch / Filled Region** | Pattern (คอนกรีต, อิฐ, ดิน, ไม้, ฉนวน…), Solid fill, Gradient, เลือกขอบเขต (pick point / pick boundary), Associative | **P0** |
| พื้นที่บังวัตถุ | **Masking Region / Wipeout** | พื้นที่ทึบสีขาวปิดทับเส้นด้านหลัง | **P0** |
| หาขอบเขตอัตโนมัติ | **Boundary** | คลิกในพื้นที่ปิดแล้วสร้าง polyline รอบขอบ | P1 |
| เมฆแก้ไข | **Revision Cloud** | วาดอิสระ/สี่เหลี่ยม/จาก polyline, ผูกกับ Revision | P1 |
| วงแหวน | **Donut** | วงกลมทึบ (ใช้เป็นจุดเหล็กเสริม) | P2 |
| วาดมือเปล่า | **Sketch / Freehand** | สำหรับ markup | P2 |
| เส้นแตกหัก | **Break Line** | สัญลักษณ์ตัดทอน (zig-zag) ปรับขนาดได้ | P1 |

---

## กลุ่มที่ 3 — การเลือกวัตถุ (Selection)

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| คลิกเลือก | **Pick** | คลิกทีละชิ้น, Shift/Ctrl เพิ่ม-ลด | **P0** |
| กรอบเลือก | **Window / Crossing** | ลากซ้าย→ขวา = ต้องอยู่ในกรอบทั้งหมด; ขวา→ซ้าย = แตะก็เลือก | **P0** |
| เลือกด้วยเส้น | **Fence / Lasso** | ลากเส้นตัดผ่าน / วาดรูปอิสระ | P1 |
| เลือกทั้งหมด | **Select All** | ใน view ปัจจุบัน | **P0** |
| เลือกวัตถุเหมือนกัน | **Select Similar / Select All Instances** | เลือกทุกชิ้นประเภท/สไตล์เดียวกัน | P1 |
| ตัวกรอง | **Filter / Quick Select** | กรองตาม Category, Layer, สไตล์, ค่า property | P1 |
| วนเลือกวัตถุทับซ้อน | **Tab Cycling** | กด Tab เพื่อสลับวัตถุที่ซ้อนกัน / เลือกเส้นต่อเนื่องทั้งสาย | P1 |
| เลือกก่อนหน้า | **Previous Selection** | เรียก selection ล่าสุด | P2 |

---

## กลุ่มที่ 4 — เครื่องมือแก้ไข (Modify)

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| ลบ | **Erase / Delete** | | **P0** |
| ย้าย | **Move** | จุดฐาน → จุดปลายทาง / ระยะที่พิมพ์ | **P0** |
| คัดลอก | **Copy** | คัดลอกครั้งเดียว/หลายครั้ง (Multiple) | **P0** |
| หมุน | **Rotate** | หมุนตามมุม / อ้างอิงมุม (Reference) / หมุนพร้อมคัดลอก | **P0** |
| ย่อ-ขยาย | **Scale** | ตัวคูณ / อ้างอิงความยาว | **P0** |
| กลับด้าน | **Mirror** | สะท้อนตามแกน, เลือกเก็บ/ลบต้นฉบับ | **P0** |
| เส้นขนาน | **Offset** | ระยะที่กำหนด / ผ่านจุด / หลายครั้ง | **P0** |
| ตัด | **Trim** | ตัดส่วนเกินด้วยเส้นขอบ, Quick Trim (ลากผ่าน) | **P0** |
| ยืด | **Extend** | ยืดไปชนเส้นขอบ | **P0** |
| **Trim/Extend to Corner** | (แบบ Revit TR) | ต่อ 2 เส้นให้เป็นมุมในคำสั่งเดียว | **P0** |
| มุมโค้ง | **Fillet** | รัศมีกำหนด, R=0 เพื่อต่อมุม | **P0** |
| ลบมุม | **Chamfer** | ระยะ-ระยะ / ระยะ-มุม | P1 |
| ตัดแบ่ง | **Break / Split** | ตัดที่จุด / ตัดช่วงระหว่าง 2 จุด / Split with gap | **P0** |
| เชื่อม | **Join** | รวมเส้นที่ต่อกันเป็น polyline | **P0** |
| แตกวัตถุ | **Explode** | แตก polyline/block/hatch เป็นชิ้นย่อย | P1 |
| ยืด-หด | **Stretch** | ย้ายบางส่วนโดยรักษาการเชื่อมต่อ | **P0** |
| ยืด-หดความยาว | **Lengthen** | เพิ่ม/ลด/กำหนดความยาวรวม | P2 |
| จัดแนว | **Align** | จัดวัตถุให้ชิดแนวอ้างอิง (แบบ Revit AL) | P1 |
| อาร์เรย์ | **Array** | สี่เหลี่ยม (Rectangular), วงกลม (Polar), ตามเส้นทาง (Path), แบบ Associative | **P0** (Rect/Polar) / P1 (Path) |
| หารระยะ | **Divide / Measure** | วางจุด/บล็อกแบ่งเท่า ๆ กัน หรือทุกระยะ | P2 |
| แก้ polyline | **Edit Polyline** | เพิ่ม/ลบจุดยอด, แปลงส่วนตรง↔โค้ง | P1 |
| แก้ด้วย Grip | **Grip Editing** | ลากจุดควบคุม (endpoint, mid, center) เพื่อแก้ | **P0** |
| คัดลอกคุณสมบัติ | **Match Properties** | คัดลอกสไตล์/layer/pattern จากวัตถุหนึ่งไปอีกวัตถุ | **P0** |
| ลำดับการซ้อน | **Draw Order** | Bring to Front / Send to Back | **P0** |
| จัดกลุ่ม | **Group / Ungroup** | Detail Group | P1 |
| ปักหมุด/ล็อก | **Pin / Lock** | ป้องกันการเลื่อนโดยไม่ตั้งใจ | P1 |
| ซ่อนชั่วคราว | **Hide / Isolate Temporary** | ซ่อน/แยกวัตถุชั่วคราวระหว่างทำงาน | P1 |
| ย้อน/ทำซ้ำ | **Undo / Redo** | หลายระดับ + Undo list | **P0** |
| คลิปบอร์ด | **Cut / Copy / Paste / Paste Aligned** | วางที่ตำแหน่งเดิม, วางใน view อื่น | **P0** |
| ข้อจำกัดเชิงพาราเมตริก | **Constraints** | Lock, Equal (EQ), Parallel, Perpendicular, Fixed distance | P2 |

---

## กลุ่มที่ 5 — การบอกขนาด (Dimension)

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| ระยะแนวนอน/ตั้ง | **Linear** | | **P0** |
| ระยะตามแนวเส้น | **Aligned** | ขนานกับวัตถุ | **P0** |
| ระยะต่อเนื่อง | **Continuous / Chain** | บอกขนาดต่อกันเป็นแถว (ใช้มากที่สุดในแบบสถาปัตย์) | **P0** |
| ระยะจากฐาน | **Baseline** | ทุกค่าวัดจากจุดเดียวกัน | P1 |
| บอกขนาดทั้งผนัง | **Auto Dimension (Wall / Grid)** | คลิกผนังแล้วได้ขนาดช่องเปิด, แกน, ความหนา อัตโนมัติ | P1 |
| มุม | **Angular** | | **P0** |
| รัศมี / เส้นผ่านศูนย์กลาง | **Radius / Diameter** | | **P0** |
| ความยาวส่วนโค้ง | **Arc Length** | | P1 |
| พิกัด | **Ordinate** | | P2 |
| ระดับ | **Spot Elevation / Level Mark** | ระดับพื้น (+0.00), ระดับในรูปตัด | **P0** |
| พิกัดจุด | **Spot Coordinate** | N / E | P2 |
| ความลาดชัน | **Spot Slope / Slope Arrow** | % หรือ 1:x | P1 |
| ป้ายบอกขนาดพื้นที่ | **Area Dimension** | ตร.ม. | P1 |
| **คุณสมบัติที่ต้องรองรับ** | | Associative (ผูกกับวัตถุ), Override text, Prefix/Suffix, EQ, Tolerance, Dimension Style (ลูกศร/ขีด 45°/จุด), ปรับตามมาตราส่วน View | **P0** |

---

## กลุ่มที่ 6 — ข้อความและคำอธิบาย (Text & Annotation)

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| ข้อความ | **Text (Single-line / Multi-line)** | ฟอนต์ไทย (TH Sarabun, Angsana), จัดย่อหน้า, ตัวหนา/เอียง/ขีดเส้นใต้, ยก/ห้อย (m², m³) | **P0** |
| ลูกศรชี้ | **Leader / Multileader** | ชี้ + ข้อความ, หลายหัวลูกศร, เส้นตรง/โค้ง | **P0** |
| ป้ายกำกับอัจฉริยะ | **Tag** | ดึงค่าจาก parameter เช่น ประตู D1, หน้าต่าง W2, ห้อง, คาน B1, เสา C1 | **P0** |
| แท็กทั้งหมด | **Tag All Not Tagged** | ใส่ tag ให้ทุกวัตถุที่ยังไม่มี tag ใน view | P1 |
| Keynote | **Keynote** | รหัสวัสดุ/งาน ผูกกับตาราง Legend | P2 |
| ตาราง | **Table / Schedule** | ตารางข้อความ และตารางที่ดึงจากโมเดล (ตารางประตู-หน้าต่าง, ตารางวัสดุ) | P1 |
| หมายเหตุทั่วไป | **General Notes** | กล่องข้อความยาว | P1 |
| สัญลักษณ์ | **Symbol** | (ดูกลุ่มที่ 7) | **P0** |
| ค้นหา/แทนที่ | **Find & Replace** | ในข้อความทั้งโปรเจกต์ | P1 |
| ตรวจคำสะกด | **Spell Check** | รองรับภาษาไทย/อังกฤษ | P2 |
| ฟิลด์อัตโนมัติ | **Field** | ชื่อโปรเจกต์, วันที่, เลขแผ่น, มาตราส่วน | P1 |

---

## กลุ่มที่ 7 — สัญลักษณ์งานสถาปัตย์/วิศวกรรม (Symbols)

> รายละเอียดรูปทรง ขนาด และมาตรฐานของสัญลักษณ์แต่ละตัว ดูแคตาล็อก [`data/tbim_symbols.json`](../data/tbim_symbols.json) และรายงาน [`สัญลักษณ์งานเขียนแบบสำหรับ TBIM.md`](สัญลักษณ์งานเขียนแบบสำหรับ%20TBIM.md) — ตารางด้านล่างเป็นเพียงรายการเครื่องมือที่ต้องมี

| สัญลักษณ์ | ชื่ออังกฤษ | Priority |
|---|---|---|
| ทิศเหนือ | **North Arrow** | **P0** |
| เส้นตัด / สัญลักษณ์รูปตัด | **Section Mark** (สร้าง view รูปตัดอัตโนมัติ) | **P0** |
| สัญลักษณ์รูปด้าน | **Elevation Mark** | **P0** |
| วงขยายแบบ | **Callout / Detail Mark** | **P0** |
| หัวเส้นแกน | **Grid Bubble** (A, B, C / 1, 2, 3) | **P0** |
| ระดับ | **Level Marker** | **P0** |
| มาตราส่วนกราฟิก | **Scale Bar** | P1 |
| เส้นแบ่งแผ่น | **Match Line** | P2 |
| ป้ายแก้ไข | **Revision Tag** (สามเหลี่ยม + เลข) | P1 |
| ลูกศรลาดเอียง / ทางขึ้นบันได | **Slope Arrow / Stair Arrow** | P1 |
| ชื่อ view | **View Title** (ชื่อแบบ + มาตราส่วน) | **P0** |
| เส้นศูนย์กลาง | **Centerline / Center Mark** | P1 |
| สัญลักษณ์เชื่อม / เหล็กเสริม | **Weld Symbol / Rebar Symbol** | P2 (งานโครงสร้าง) |
| สัญลักษณ์ไฟฟ้า-สุขาภิบาล | **MEP Symbols** (ปลั๊ก, สวิตช์, โคม, ท่อ) | P2 (งานระบบ) |

---

## กลุ่มที่ 8 — Block / Detail Component / Library

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| บล็อก / ชิ้นส่วนรายละเอียด | **Block / Detail Component** | ชิ้นส่วน 2D นำกลับมาใช้ซ้ำ แก้ต้นฉบับแล้วทุกชิ้นเปลี่ยนตาม | **P0** |
| บล็อกพาราเมตริก | **Dynamic / Parametric Block** | ปรับขนาด/รูปแบบได้ (เช่น เหล็กรูปพรรณ, อิฐ, กรอบบาน) | P1 |
| ชิ้นส่วนเรียงซ้ำ | **Repeating Detail Component** | ลากเส้นแล้ววางอิฐ/บล็อกเรียงต่อกันอัตโนมัติ | P1 |
| ฉนวน | **Insulation Tool** | ลายฉนวนใยแก้วตามความหนา | P1 |
| คลังสัญลักษณ์ | **Symbol / Component Library** | คลังมาตรฐานไทย (มยผ., วสท.) พร้อมค้นหา | P1 |
| แก้ในที่ | **Edit In-Place (Block Editor)** | | P1 |
| แอตทริบิวต์บล็อก | **Block Attributes** | ข้อความ/ค่าในบล็อกที่แก้ได้ต่อชิ้น | P1 |
| อ้างอิงภายนอก | **External Reference (XRef / Link DWG)** | | P1 |
| View สำหรับ Detail ล้วน | **Drafting View** | view 2D ที่ไม่ผูกกับโมเดล ใช้เขียนแบบขยายมาตรฐาน | **P0** |

---

## กลุ่มที่ 9 — สไตล์และคุณสมบัติ (Styles & Properties)

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| ชั้นข้อมูล | **Layer / Category / Subcategory** | เปิด/ปิด, ล็อก, สี, ชนิดเส้น, ความหนา | **P0** |
| ชนิดเส้น | **Line Pattern / Linetype** | ต่อเนื่อง, ประ (Hidden), ศูนย์กลาง (Center), เส้นแบ่ง (Phantom), กำหนดเอง | **P0** |
| ความหนาเส้น | **Line Weight** | ตารางความหนาแยกตามมาตราส่วน (1:20, 1:50, 1:100) | **P0** |
| สไตล์เส้น | **Line Style** | รวม สี + ชนิด + ความหนา เป็นชื่อเดียว (เช่น "เส้นตัด", "เส้นซ่อน") | **P0** |
| ลายระบาย | **Fill / Hatch Pattern** | Drafting pattern (ขนาดตามกระดาษ) vs Model pattern (ขนาดจริง เช่น กระเบื้อง 60×60) + นำเข้า .pat | **P0** |
| สไตล์ข้อความ | **Text Style** | ฟอนต์, ความสูงบนกระดาษ, ความกว้าง | **P0** |
| สไตล์บอกขนาด | **Dimension Style** | หัวลูกศร, ระยะห่าง, หน่วย, ทศนิยม | **P0** |
| หน้าต่างคุณสมบัติ | **Properties Palette** | ดู/แก้ค่าของวัตถุที่เลือก | **P0** |
| กำหนดการแสดงผล | **Visibility / Graphics Override** | แก้สี/ความหนา/ซ่อน ต่อ view, ต่อ category, ต่อวัตถุ | **P0** |
| ตัวกรองการแสดงผล | **View Filters** | เช่น ผนังทนไฟ = สีแดง | P1 |
| แม่แบบ view | **View Template** | บันทึกการตั้งค่าแสดงผลแล้วใช้ซ้ำ | P1 |
| มาตราส่วน View | **View Scale** | ทุก annotation ปรับตาม | **P0** |
| ระดับรายละเอียด | **Detail Level (Coarse/Medium/Fine)** | | P1 |
| จัดการสไตล์ | **Purge Unused / Transfer Standards** | ลบสไตล์ที่ไม่ใช้, โอนมาตรฐานข้ามไฟล์ | P1 |

---

## กลุ่มที่ 10 — เครื่องมือเฉพาะ BIM (BIM-specific 2D)

> **จุดต่างที่ทำให้ TBIM เหนือกว่า CAD ธรรมดา**

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| เส้นเฉพาะ view vs เส้นโมเดล | **Detail Line vs Model Line** | Detail line เห็นเฉพาะ view นั้น, Model line เห็นทุก view | **P0** |
| แก้การแสดงเส้นของโมเดล | **Linework Override** | เปลี่ยนสไตล์เส้นของขอบวัตถุ 3D ที่ถูกตัดใน view (เช่น ทำเส้นซ่อน) | P1 |
| สร้าง 2D จาก 3D อัตโนมัติ | **Plan / Section / Elevation Generation** | ตัด 3D เป็นเส้น 2D พร้อม hatch วัสดุที่ถูกตัด | **P0** |
| วาดโครงร่างวัตถุ BIM | **Sketch Mode** | วาดขอบเขตพื้น, หลังคา, ฝ้า, ห้อง ด้วยเครื่องมือ 2D (ใช้ Line/Arc/Pick Lines/Offset ชุดเดียวกัน) | **P0** |
| เลือกเส้นจากวัตถุ | **Pick Lines / Pick Walls** | สร้างเส้นจากขอบวัตถุที่มีอยู่ (รองรับ offset) | **P0** |
| เส้นแกนและระดับ | **Grid / Level** | 2D ที่เป็นข้อมูลอ้างอิงของโมเดล | **P0** |
| ขอบเขตห้อง/พื้นที่ | **Room Separation / Area Boundary** | เส้นแบ่งห้องสำหรับคำนวณพื้นที่ | P1 |
| ป้ายห้อง | **Room / Area Tag** | ชื่อ + พื้นที่ อัปเดตอัตโนมัติ | P1 |
| กรอบตัดมุมมอง | **Crop Region / View Boundary** | กำหนดขอบเขตภาพของ view | **P0** |
| แปลงวัตถุ 2D → 3D | **2D to 3D (Extrude / Convert)** | แปลงรูปปิดเป็นพื้น/ผนัง/เสา | P2 |
| Hotspot | **Hotspot** (Archicad) | จุดที่ snap ได้แต่ไม่พิมพ์ | P2 |
| เปรียบเทียบเวอร์ชัน | **Revision / Phase Display** | แสดงของเดิม-ของรื้อ-ของใหม่ ด้วยสไตล์เส้นต่างกัน | P2 |

---

## กลุ่มที่ 11 — วัดและสอบถามข้อมูล (Measure & Inquiry)

| เครื่องมือ | ชื่ออังกฤษ | Priority |
|---|---|---|
| วัดระยะ | **Measure Distance** (ระหว่าง 2 จุด / ตามเส้นทาง) | **P0** |
| วัดพื้นที่/เส้นรอบรูป | **Measure Area / Perimeter** | **P0** |
| วัดมุม | **Measure Angle** | P1 |
| ข้อมูลวัตถุ | **List / Inquiry** (ความยาว, พื้นที่, พิกัด) | P1 |
| พิกัดเคอร์เซอร์ | **Coordinate Display** (แสดงบน status bar) | **P0** |

---

## กลุ่มที่ 12 — Sheet / Layout / Print

| เครื่องมือ | ชื่ออังกฤษ | คำอธิบาย | Priority |
|---|---|---|---|
| แผ่นงาน | **Sheet / Layout** | ขนาด A0–A4, กำหนดเอง | **P0** |
| กรอบแบบ | **Title Block** | กรอบแบบพร้อมฟิลด์ (ชื่อโครงการ, ผู้ออกแบบ, เลขแผ่น, วันที่, ลายเซ็น) | **P0** |
| ช่องมองภาพ | **Viewport** | วาง view ลงแผ่นพร้อมมาตราส่วน, ย้าย/ครอบตัด | **P0** |
| สารบัญแบบ | **Sheet Index / Drawing List** | สร้างอัตโนมัติ | P1 |
| การพิมพ์ | **Print / Plot** | ขนาดกระดาษ, มาตราส่วน, สี/ขาวดำ, ความหนาเส้น (Plot Style) | **P0** |
| พิมพ์หลายแผ่น | **Batch Print / Publish** | | P1 |
| ตารางแก้ไข | **Revision Schedule** | ตารางการแก้ไขแบบบน Title block | P1 |

---

## กลุ่มที่ 13 — Import / Export

| รูปแบบ | ใช้งาน | Priority |
|---|---|---|
| **DWG / DXF** (นำเข้า/ส่งออก, Layer mapping) | แลกเปลี่ยนกับ AutoCAD — **สำคัญมากในตลาดไทย** | **P0** |
| **PDF** (ส่งออก vector, ชั้นข้อมูล) | ส่งแบบ, ยื่นขออนุญาต | **P0** |
| **PDF / Image underlay** (นำเข้าเป็นพื้นหลัง + snap ได้) | วาดทับแบบเดิม | P1 |
| **SVG / PNG / JPG** (ส่งออก) | งานนำเสนอ | P2 |
| **IFC** (2D annotation / IfcAnnotation) | แลกเปลี่ยน BIM แบบเปิด | P2 |
| **.pat / .lin** (นำเข้าลาย hatch / ชนิดเส้น) | ใช้มาตรฐานเดิมของบริษัท | P1 |

---

## กลุ่มที่ 14 — UX และการควบคุม

| คุณสมบัติ | คำอธิบาย | Priority |
|---|---|---|
| **Command Line** | พิมพ์คำสั่ง/ค่า (ผู้ใช้ AutoCAD คุ้นเคย) | **P0** |
| **Keyboard Shortcuts** (ตั้งเองได้) | เช่น L=Line, C=Circle, M=Move, CO=Copy, TR=Trim, O=Offset, DI=Dimension | **P0** |
| **Ribbon / Toolbar** แบ่งหมวด | Draw, Modify, Annotate, View, Manage | **P0** |
| **Context Menu** (คลิกขวา) | Repeat last command, Cancel, Enter | **P0** |
| **Repeat Last Command** (Enter/Space) | | **P0** |
| **Pan / Zoom** (ล้อเมาส์, Zoom Extents, Zoom Window) | | **P0** |
| **Snap Indicator & Tooltip** | แสดงไอคอนชนิด snap ขณะเล็ง | **P0** |
| **Preview ขณะวาด** (Rubber-band) | | **P0** |
| **Status Bar Toggles** | เปิด/ปิด Snap, Ortho, Polar, Grid เร็ว ๆ (F3, F8, F10) | **P0** |
| **Project Browser** | ต้นไม้ View/Sheet/Family | **P0** |
| **Multi-language UI** (ไทย/อังกฤษ) | | P1 |
| **Auto-save / Backup** | | **P0** |

---

## ตารางเปรียบเทียบกับโปรแกรมอ้างอิง

| หมวด | AutoCAD | Revit | Archicad | TBIM ควรทำ |
|---|---|---|---|---|
| Line / Polyline / Arc / Circle | ✅ ครบมาก | ✅ (Detail Line แบบรวมในคำสั่งเดียว) | ✅ Line, Arc/Circle, Polyline, Spline | รวมเป็น **Line tool เดียวที่มีหลายรูปแบบ** (แบบ Revit) + มีคำสั่งแยก (แบบ AutoCAD) สำหรับ command line |
| Hatch / Fill | ✅ Hatch | ✅ Filled Region | ✅ Fill | ✅ แยก Drafting / Model pattern |
| Masking | ✅ Wipeout | ✅ Masking Region | ✅ Fill (ทึบ) | ✅ |
| Trim / Extend / Offset | ✅ ครบมาก | ✅ (TR, Split, Offset) | ✅ (Trim, Split, Offset, Adjust) | ✅ + Trim to corner |
| Array | ✅ Rect/Polar/Path | ✅ Linear/Radial | ✅ Multiply | ✅ |
| Dimension | ✅ ครบ | ✅ ผูกกับวัตถุ BIM | ✅ ผูกกับวัตถุ BIM + auto | ✅ Associative + Auto wall dim |
| Tag อ่านค่า parameter | ⚠️ (Field จำกัด) | ✅ | ✅ Label | ✅ |
| Block | ✅ Block / Dynamic Block | ✅ Detail Component / Group | ✅ Object (GDL) / Group | ✅ |
| Repeating detail / Insulation | ❌ | ✅ | ⚠️ (Fill / Object) | ✅ |
| View-specific 2D | ❌ (ใช้ Layout) | ✅ | ✅ | ✅ **หัวใจของ BIM** |
| Command line | ✅ | ❌ (shortcut เท่านั้น) | ❌ | ✅ **จุดขาย: คุ้นมือผู้ใช้ CAD** |
| Object Snap | ✅ ละเอียดมาก | ⚠️ พอใช้ | ✅ ดี (Tracker/Guide lines) | ✅ ระดับ AutoCAD |

---

## Roadmap แนะนำสำหรับ TBIM

### Phase 1 — MVP (เขียนแบบ 2D ได้จริง)
- **Precision:** Object Snap (6 ชนิดหลัก), Ortho, Polar, Coordinate input, Dynamic input, Reference line
- **Draw:** Line, Polyline, Rectangle, Circle, Arc, Hatch/Filled Region, Masking Region
- **Select:** Pick, Window/Crossing, Select All
- **Modify:** Move, Copy, Rotate, Scale, Mirror, Offset, Trim, Extend, Trim-to-corner, Fillet, Split, Join, Stretch, Array (Rect/Polar), Grip edit, Match Properties, Draw Order, Undo/Redo, Clipboard
- **Annotate:** Linear/Aligned/Continuous/Angular/Radius dimension, Spot elevation, Text, Leader, Tag พื้นฐาน, Symbol หลัก (ทิศเหนือ, Section, Elevation, Callout, Grid, Level, View Title)
- **Styles:** Layer/Category, Line style, Line weight ตามมาตราส่วน, Fill pattern, Text style, Dim style, Properties palette, Visibility override
- **BIM:** Detail vs Model line, Drafting view, Plan/Section auto 2D, Sketch mode, Crop region
- **Output:** Sheet, Title block, Viewport, Print, PDF, DWG/DXF
- **UX:** Command line, Shortcuts, Ribbon, Pan/Zoom, Status toggles, Auto-save

### Phase 2 — ใช้งานระดับมืออาชีพ
- Polygon, Ellipse, Spline, Double line, Revision cloud, Break line, Boundary
- Fence/Lasso, Select similar, Filter, Tab cycling
- Chamfer, Explode, Align, Path array, Edit polyline, Group, Pin, Temporary hide/isolate
- Baseline dim, Auto dimension, Arc length, Slope, Area
- Tag All, Table/Schedule, Field, Find & Replace, Revision tag, Scale bar
- Parametric block, Repeating detail, Insulation, Symbol library มาตรฐานไทย, Block attributes, XRef
- View filters, View template, Detail level, Purge
- Linework override, Room/Area boundary & tag
- PDF/Image underlay, นำเข้า .pat/.lin, Batch print, Sheet index

### Phase 3 — ฟีเจอร์ขั้นสูง
- Parametric constraints, Lengthen, Divide/Measure
- Ordinate, Spot coordinate, Keynote, Spell check (ไทย)
- MEP / Rebar / Weld symbols
- 2D → 3D conversion, Hotspot, Phase display, IFC annotation export, SVG export

---

## ข้อเสนอโครงสร้างข้อมูล (Data Model)

โครงสร้างคลาสแนะนำสำหรับวัตถุ 2D ใน TBIM (ภาษากลาง ใช้ได้กับ C#/C++/TypeScript):

```text
Element2D  (base)
 ├─ id, ownerViewId (null = model element), categoryId, layerId
 ├─ styleOverride { color, linePatternId, lineWeight }
 ├─ drawOrder, isPinned, groupId
 │
 ├─ Curve2D
 │   ├─ LineSeg        (p1, p2)
 │   ├─ ArcSeg         (center, radius, startAngle, endAngle)  // Circle = arc 360°
 │   ├─ EllipseSeg     (center, majorAxis, ratio, start, end)
 │   ├─ SplineSeg      (degree, controlPts, knots, weights)
 │   └─ Polyline       (vertices[], bulges[], widths[], isClosed)
 │
 ├─ Region2D           (outerLoop, innerLoops[], fillPatternId, isMasking, isAssociative)
 ├─ Text2D             (content, textStyleId, position, rotation, alignment, paperHeight)
 ├─ Leader2D           (points[], arrowType, attachedText)
 ├─ Dimension2D        (type, references[] → element + geometry ref, dimStyleId, overrideText)
 ├─ Tag2D              (hostElementId, tagTemplateId, leader?)   // อ่านค่า parameter
 ├─ Symbol2D           (symbolDefId, insertPoint, rotation, scale, attributes{})
 └─ BlockInstance2D    (blockDefId, transform, parameters{})

View  (Plan | Section | Elevation | Drafting | Sheet)
 ├─ scale, cropRegion, detailLevel, viewTemplateId
 └─ visibilityOverrides { categoryId → style / hidden }
```

**ข้อควรระวังเชิงเทคนิค**
- **Geometry kernel:** ต้องมีฟังก์ชัน intersection (line/arc/ellipse/spline), offset curve, closest point, curve splitting และ boolean ของ region — เป็นพื้นฐานของ Snap, Trim, Extend, Offset, Hatch ทั้งหมด (พิจารณาไลบรารีเช่น Clipper2 สำหรับ polygon boolean/offset)
- **Tolerance:** กำหนดค่าความคลาดเคลื่อนกลาง (เช่น 1e-6 ม.) ใช้ทั้งระบบ
- **Spatial index:** ใช้ R-tree / Quadtree สำหรับ snap และ selection เร็ว ๆ เมื่อวัตถุหลักแสน
- **Annotation scale:** เก็บขนาดข้อความ/สัญลักษณ์เป็น "มม. บนกระดาษ" แล้วคูณด้วย view scale ตอนแสดงผล
- **Associativity:** Dimension/Tag/Hatch เก็บ **reference** ไปยังวัตถุ ไม่ใช่พิกัด → ใช้ระบบ dependency/regeneration เมื่อวัตถุต้นทางเปลี่ยน
- **Command pattern:** ทุกคำสั่งแก้ไขเป็น Command ที่ Undo ได้ (Undo/Redo stack)
- **ฟอนต์ไทย:** รองรับการตัดคำและสระ/วรรณยุกต์ซ้อน (ใช้ text shaping เช่น HarfBuzz) และ map ฟอนต์ตอน export DWG/PDF

---

## แหล่งอ้างอิง

- Autodesk Revit Help — [Detailing Tools](https://help.autodesk.com/cloudhelp/2021/ENU/Revit-DocumentPresent/files/GUID-AE0A058B-3615-4DBF-A973-3E0ED3338919.htm)
- [practicalBIM-Revit — Detailing Tools](https://sites.google.com/site/practicalbimrevit/the-practicalbim-revit-manual/revit-for-project-architects/detailing-tools)
- [Parametric Monkey — Detailing & Documenting in Revit](https://parametricmonkey.com/2017/01/14/detailing-in-revit/)
- [Chapter 10: Details and Annotations — BIM using Revit (UTA Pressbooks)](https://uta.pressbooks.pub/buildinginformationmodeling/chapter/chapter-10-details-and-annotations/)
- Graphisoft Archicad Help — [Lines, Circles, Polylines, Splines](https://help.graphisoft.com/AC/26/INT/_AC26_Help/070_Documentation/070_Documentation-17.htm)
- Graphisoft Community — [How to draft 2D Elements in Archicad](https://community.graphisoft.com/t5/Getting-started/How-to-draft-2D-Elements-in-Archicad/ta-p/304008)
- [CAD Training Online — AutoCAD Command Cheat Sheet](https://www.cadtrainingonline.com/autocad-command-cheat-sheet-for-beginners/)
- [CAD Training Institute — Essential Modify Panel Commands in AutoCAD](https://www.cadtraininginstitute.com/essential-modify-panel-commands-in-autocad/)
- [CAD Master Coach — AutoCAD Commands List](https://cadmastercoach.com/commands)
