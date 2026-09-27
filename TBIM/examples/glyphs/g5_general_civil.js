/* TBIM glyphs, group g5_general_civil: general sheet items, line types, material hatches,
   civil / road / irrigation and survey notation. Paper mm, y down, origin = insertion point.
   Road pavement lines are scaled for a 1:500 site plan (1 m = 2 mm). See CONTRACT.md. */
(function (G) {
  G["TH.GENERAL.GRID_BUBBLE"] = {
    kind: "point",
    box: [-5, -5, 10, 10],
    svg: "<path class='s' d='M -5 0 A 5 5 0 1 0 5 0 A 5 5 0 1 0 -5 0 Z'/><text class='tx' x='0' y='0' font-size='5'>A</text>",
    basis: "catalog_svg",
    note_th: "วาดวงกลม Ø10 มม. ตาม svg_path และใส่อักษรตัวอย่าง A สูง 5 มม. ไว้กลางวง"
  };
  G["TH.GENERAL.GRID_LINE"] = {
    kind: "line",
    box: [-15, -2, 30, 4],
    svg: "<path class='s' d='M -15 0 L 15 0' stroke-dasharray='12 3 2 3'/>",
    line: {"weight": 0.25, "dash": "12 3 2 3", "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "proposed",
    note_th: "เส้นลูกโซ่บาง 0.25 มม. ตามรายละเอียด แต่ความยาวขีด 12-3-2-3 มม. กำหนดเองเพราะแหล่งไทยไม่ระบุ"
  };
  G["TH.GENERAL.BREAK_LINE"] = {
    kind: "line",
    box: [-15, -3, 30, 6],
    svg: "<path class='s' d='M -15 0 L -1.5 0 L -0.75 -2.5 L 0.75 2.5 L 1.5 0 L 15 0'/>",
    line: {"weight": 0.25, "dash": null, "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "proposed",
    note_th: "เส้นบาง 0.25 มม. มีรอยหยักซิกแซกกลางเส้น ขนาดหยักสูง 5 มม. กำหนดเอง (หน้าเว็บวาดได้เฉพาะเส้นตรง รอยหยักอยู่ในตัวอย่าง svg)"
  };
  G["TH.GENERAL.HIDDEN_LINE"] = {
    kind: "line",
    box: [-15, -2, 30, 4],
    svg: "<path class='s' d='M -15 0 L 15 0' stroke-width='0.35' stroke-dasharray='3 1'/>",
    line: {"weight": 0.35, "dash": "3 1", "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นประหนา 0.35 มม. ขีด 3 มม. เว้น 1 มม. ตามค่าในรายละเอียด"
  };
  G["TH.GENERAL.LINE_THICK_CONTINUOUS"] = {
    kind: "line",
    box: [-15, -2, 30, 4],
    svg: "<path class='sk' d='M -15 0 L 15 0'/>",
    line: {"weight": 0.5, "dash": null, "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มหนา 0.50 มม. ตามค่าในรายละเอียด"
  };
  G["TH.GENERAL.LINE_THIN_CONTINUOUS"] = {
    kind: "line",
    box: [-15, -2, 30, 4],
    svg: "<path class='s' d='M -15 0 L 15 0'/>",
    line: {"weight": 0.25, "dash": null, "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มบาง 0.25 มม. ตามค่าในรายละเอียด"
  };
  G["TH.GENERAL.PROPERTY_LINE"] = {
    kind: "line",
    box: [-15, -2, 30, 4],
    svg: "<path class='sk' d='M -15 0 L 15 0' stroke-dasharray='12 1.5 1.5 1.5 1.5 1.5'/>",
    line: {"weight": 0.5, "dash": "12 1.5 1.5 1.5 1.5 1.5", "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "proposed",
    note_th: "ชุดข้อมูลไม่ทราบรูปแบบเส้น จึงเสนอเส้นหนา 0.5 มม. แบบขีดยาวสลับขีดสั้นสองขีด (phantom)"
  };
  G["TH.GENERAL.DIMENSION_EDGE_EDGE"] = {
    kind: "text",
    box: [-13, -1.5, 26, 12],
    svg: "<path class='s' d='M -12 5 H -8 V 9 H -12 Z M 8 5 H 12 V 9 H 8 Z'/><path class='s' d='M -8 0.5 V 4.2 M 8 0.5 V 4.2 M -9.5 2 H 9.5'/><path class='sk' d='M -8.7 2.7 L -7.3 1.3 M 7.3 2.7 L 8.7 1.3'/>",
    samples: ["1.20", "0.20", "@ 2.00 ม."],
    basis: "description",
    note_th: "เส้นบอกระยะบาง 0.25 มม. พร้อมเส้นช่วยวัดขอบถึงขอบ ค่าระยะเป็นเมตรอยู่เหนือเส้น ส่วนขีดปลายเฉียง 45° ยาว 2 มม. ยืมจากโปรไฟล์ GB เพราะแบบไทยยังไม่ยืนยัน"
  };
  G["TH.GENERAL.DIMENSION_CENTRE_CENTRE"] = {
    kind: "text",
    box: [-13, -1.5, 26, 12],
    svg: "<path class='s' d='M -12 5 H -8 V 9 H -12 Z M 8 5 H 12 V 9 H 8 Z'/><path class='st' d='M -10 3.5 V 10.5 M 10 3.5 V 10.5' stroke-dasharray='2 0.6 0.4 0.6'/><path class='s' d='M -10 0.5 V 4.2 M 10 0.5 V 4.2 M -11.5 2 H 11.5'/><path class='sk' d='M -10.7 2.7 L -9.3 1.3 M 9.3 2.7 L 10.7 1.3'/>",
    samples: ["1.20", "0.20", "@ 2.00 ม."],
    basis: "description",
    note_th: "เส้นบอกระยะบาง 0.25 มม. พร้อมเส้นช่วยวัดศูนย์กลางถึงศูนย์กลาง ค่าระยะเป็นเมตรอยู่เหนือเส้น ส่วนขีดปลายเฉียง 45° ยาว 2 มม. ยืมจากโปรไฟล์ GB เพราะแบบไทยยังไม่ยืนยัน"
  };
  G["TH.GENERAL.DIMENSION_CENTRE_EDGE"] = {
    kind: "text",
    box: [-13, -1.5, 26, 12],
    svg: "<path class='s' d='M -12 5 H -8 V 9 H -12 Z M 8 5 H 12 V 9 H 8 Z'/><path class='st' d='M -10 3.5 V 10.5' stroke-dasharray='2 0.6 0.4 0.6'/><path class='s' d='M -10 0.5 V 4.2 M 8 0.5 V 4.2 M -11.5 2 H 9.5'/><path class='sk' d='M -10.7 2.7 L -9.3 1.3 M 7.3 2.7 L 8.7 1.3'/>",
    samples: ["1.20", "0.20", "@ 2.00 ม."],
    basis: "description",
    note_th: "เส้นบอกระยะบาง 0.25 มม. พร้อมเส้นช่วยวัดศูนย์กลางถึงขอบ ค่าระยะเป็นเมตรอยู่เหนือเส้น ส่วนขีดปลายเฉียง 45° ยาว 2 มม. ยืมจากโปรไฟล์ GB เพราะแบบไทยยังไม่ยืนยัน"
  };
  G["TH.GENERAL.NORTH_ARROW"] = {
    kind: "point",
    box: [-12, -17, 24, 29],
    svg: "<path class='s' d='M -12 0 A 12 12 0 1 0 12 0 A 12 12 0 1 0 -12 0 Z M -1.5 12 L 0 -12 L 1.5 12 Z'/><path class='f' d='M 0 -12 L 1.5 12 L 0 12 Z'/><text class='tx' x='0' y='-14.5' font-size='5' font-weight='700'>N</text>",
    basis: "catalog_svg",
    note_th: "วาดวงกลม Ø24 มม. และเข็มกว้าง 3 มม. ตาม svg_path (โปรไฟล์ GB) ระบายทึบครึ่งเข็มและใส่อักษร N สูง 5 มม. ที่หัวเข็ม"
  };
  G["TH.GENERAL.HATCH_CONCRETE_PLAIN"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 6, "h": 6, "svg": "<path class='f' d='M 0.8 0.9 h 0.25 v 0.25 h -0.25 Z M 3.1 0.5 h 0.25 v 0.25 h -0.25 Z M 4.9 2.3 h 0.25 v 0.25 h -0.25 Z M 1.9 3.4 h 0.25 v 0.25 h -0.25 Z M 5.5 5.1 h 0.25 v 0.25 h -0.25 Z M 0.4 5.6 h 0.25 v 0.25 h -0.25 Z M 3.6 4.4 h 0.25 v 0.25 h -0.25 Z'/><path class='st' d='M 2.2 1.2 l 0.9 0.2 l -0.6 0.7 Z M 4.2 3.6 l 0.5 0.8 l -0.9 0.1 Z M 1.0 4.2 l 0.8 -0.3 l 0 0.9 Z M 5.0 0.4 l 0.7 0.5 l -0.8 0.3 Z'/>"},
    basis: "description",
    note_th: "ลายไทยไม่ทราบ จึงใช้ลายตามโปรไฟล์ DIN ในชุดข้อมูล คือจุดกระจายกับสามเหลี่ยมเล็ก (หิน) ขนาดแผ่นลาย 6 มม. กำหนดเอง"
  };
  G["TH.GENERAL.HATCH_REINFORCED_CONCRETE"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 6, "h": 6, "svg": "<path class='st' d='M 0 6 L 6 0 M -3 3 L 3 -3 M 3 9 L 9 3'/><path class='f' d='M 0.8 0.9 h 0.25 v 0.25 h -0.25 Z M 3.1 0.5 h 0.25 v 0.25 h -0.25 Z M 4.9 2.3 h 0.25 v 0.25 h -0.25 Z M 1.9 3.4 h 0.25 v 0.25 h -0.25 Z M 5.5 5.1 h 0.25 v 0.25 h -0.25 Z M 0.4 5.6 h 0.25 v 0.25 h -0.25 Z M 3.6 4.4 h 0.25 v 0.25 h -0.25 Z'/><path class='st' d='M 2.2 1.2 l 0.9 0.2 l -0.6 0.7 Z M 4.2 3.6 l 0.5 0.8 l -0.9 0.1 Z M 1.0 4.2 l 0.8 -0.3 l 0 0.9 Z M 5.0 0.4 l 0.7 0.5 l -0.8 0.3 Z'/>"},
    basis: "description",
    note_th: "ลายไทยไม่ทราบ จึงใช้ลายตามโปรไฟล์ DIN คือจุดและสามเหลี่ยมเล็กซ้อนเส้นเอียง 45° ระยะเส้นและขนาดแผ่นลายกำหนดเอง"
  };
  G["TH.GENERAL.HATCH_BRICK"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 1.5, "h": 1.5, "svg": "<path class='st' d='M 0 1.5 L 1.5 0 M -0.75 0.75 L 0.75 -0.75 M 0.75 2.25 L 2.25 0.75'/>"},
    basis: "description",
    note_th: "ลายไทยไม่ทราบ จึงใช้เส้นบางเอียง 45° ตามโปรไฟล์ DIN สำหรับงานก่อ ระยะห่าง 1.06 มม. กำหนดเอง"
  };
  G["TH.GENERAL.HATCH_EARTH"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 4, "h": 4, "svg": "<path class='st' d='M 0.2 0.4 H 1.8 M 0.2 1.0 H 1.8 M 0.2 1.6 H 1.8 M 2.4 2.2 V 3.8 M 3.0 2.2 V 3.8 M 3.6 2.2 V 3.8'/>"},
    basis: "proposed",
    note_th: "ลายไทยไม่ทราบ จึงเสนอลายดินแบบกลุ่มเส้นสั้นแนวนอนสลับแนวตั้ง (คล้ายลาย EARTH ของ CAD)"
  };
  G["TH.GENERAL.HATCH_TIMBER"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 8, "h": 2, "svg": "<path class='st' d='M 0 0.6 C 2 0.1 2 1.1 4 0.6 C 6 0.1 6 1.1 8 0.6 M 0 1.6 C 1.5 1.3 2.5 1.9 4 1.6 C 5.5 1.3 6.5 1.9 8 1.6'/>"},
    basis: "proposed",
    note_th: "ลายไทยไม่ทราบ จึงเสนอลายเสี้ยนไม้เป็นเส้นโค้งคลื่นขนานกัน"
  };
  G["TH.GENERAL.HATCH_STEEL"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 2, "h": 2, "svg": "<path class='st' d='M 0 2 L 2 0 M -1 1 L 1 -1 M 1 3 L 3 1 M 0.5 2 L 2 0.5 M 0 1.5 L 1.5 0 M -0.5 0.5 L 0.5 -0.5 M 1.5 2.5 L 2.5 1.5'/>"},
    basis: "proposed",
    note_th: "ลายไทยไม่ทราบ จึงเสนอเส้นเอียง 45° เป็นคู่ชิดกัน (คล้าย ANSI32) สำหรับหน้าตัดเหล็ก"
  };
  G["TH.GENERAL.HATCH_INSULATION"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 2, "h": 4, "svg": "<path class='st' d='M 0 1 A 0.5 0.5 0 0 1 1 1 L 1 3 A 0.5 0.5 0 0 0 2 3 L 2 1'/>"},
    basis: "proposed",
    note_th: "ลายไทยไม่ทราบ จึงเสนอลายฉนวนใยแบบเส้นวนต่อเนื่องเต็มความหนา"
  };
  G["TH.GENERAL.HATCH_SAND"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 4, "h": 4, "svg": "<path class='f' d='M 0.5 0.6 h 0.2 v 0.2 h -0.2 Z M 2.1 0.3 h 0.2 v 0.2 h -0.2 Z M 3.3 1.2 h 0.2 v 0.2 h -0.2 Z M 1.2 1.7 h 0.2 v 0.2 h -0.2 Z M 2.6 2.4 h 0.2 v 0.2 h -0.2 Z M 0.3 2.9 h 0.2 v 0.2 h -0.2 Z M 1.7 3.5 h 0.2 v 0.2 h -0.2 Z M 3.4 3.3 h 0.2 v 0.2 h -0.2 Z M 3.0 0.1 h 0.15 v 0.15 h -0.15 Z M 0.9 3.9 h 0.15 v 0.1 h -0.15 Z'/>"},
    basis: "proposed",
    note_th: "ลายไทยไม่ทราบ จึงเสนอจุดเล็กกระจายหนาแน่นสำหรับทราย"
  };
  G["TH.GENERAL.HATCH_STONE"] = {
    kind: "hatch",
    box: [0, 0, 12, 8],
    hatch: {"w": 8, "h": 6, "svg": "<path class='st' d='M 0.4 0.5 L 2.8 0.3 L 3.4 2.0 L 1.6 2.8 L 0.3 1.9 Z M 4.2 0.4 L 7.4 0.8 L 7.2 2.6 L 4.6 2.9 L 3.9 1.6 Z M 0.6 3.5 L 2.6 3.3 L 3.3 5.4 L 0.8 5.6 Z M 4.0 3.6 L 6.1 3.4 L 7.5 4.6 L 6.6 5.7 L 4.3 5.5 Z'/>"},
    basis: "proposed",
    note_th: "ลายไทยไม่ทราบ จึงเสนอรูปหลายเหลี่ยมไม่สม่ำเสมอแทนหินใหญ่/หินเรียง"
  };
  G["TH.GENERAL.DRAWING_TITLE"] = {
    kind: "text",
    box: [-18, -1.5, 36, 4.5],
    svg: "<path class='sk' d='M -17 2 H 17'/><path class='st' d='M -17 2.8 H 17'/>",
    samples: ["ผังบริเวณ มาตราส่วน1:750", "เเปลนพื้น มาตราส่วน1:100", "แบบขยายฐานราก F2 มาตราส่วน 1:25", "SCALE 1:25", "มาตราส่วน AS SHOWN"],
    basis: "description",
    note_th: "ใช้ข้อความชื่อรูปกับมาตราส่วนจาก notation_grammar ส่วนเส้นใต้คู่ (หนา+บาง) เสนอเองเพราะยังไม่ยืนยันว่าไทยขีดเส้นใต้"
  };
  G["TH.GENERAL.SHEET_NUMBER"] = {
    kind: "text",
    box: [-5, -2, 10, 4],
    svg: "<rect class='s' x='-5' y='-2' width='10' height='4'/>",
    samples: ["A0-01", "A2-02", "S-01", "SN-07", "E-05"],
    basis: "description",
    note_th: "ใช้เลขแผ่นตามรูปแบบ A0-01 / S-01 ในชุดข้อมูล กรอบสี่เหลี่ยมรอบเลขแทนช่อง DRAWING NO. ในกรอบชื่อแบบ"
  };
  G["TH.GENERAL.TITLE_BLOCK"] = {
    kind: "block",
    box: [-60, -40, 60, 40],
    svg: "<rect class='sk' x='-60' y='-40' width='60' height='40'/><path class='s' d='M -40 -40 V 0 M -40 -33 H 0 M -40 -28 H 0 M -40 -23 H 0 M -40 -18 H 0 M -40 -11 H 0 M -40 -6 H 0 M -20 -11 V 0 M -60 -36 H -40 M -60 -15 H -40'/><path class='st' d='M -60 -33 H -40 M -60 -30 H -40 M -60 -27 H -40 M -60 -24 H -40 M -60 -21 H -40 M -60 -18 H -40 M -56 -36 V -15'/><text class='tx' x='-50' y='-38' font-size='1.4' font-weight='700'>REVISION</text><text class='tx' x='-58' y='-34.5' font-size='1.2'>1</text><text class='tx' x='-58' y='-16.5' font-size='1.2'>7</text><text class='tx' x='-20' y='-36.5' font-size='1.6' font-weight='700'>PROJECT</text><text class='tx' x='-20' y='-30.5' font-size='1.4'>OWNER</text><text class='tx' x='-20' y='-25.5' font-size='1.4'>ARCHITECT (ภ-สถ12345)</text><text class='tx' x='-20' y='-20.5' font-size='1.4'>STRUCTURAL ENGINEER (ภย.12345)</text><text class='tx' x='-20' y='-14.5' font-size='1.8' font-weight='700'>DRAWING TITLE</text><text class='tx' x='-30' y='-8.5' font-size='1.3'>DATE</text><text class='tx' x='-10' y='-8.5' font-size='1.3'>DRAWN BY</text><text class='tx' x='-30' y='-3' font-size='2.5' font-weight='700'>A0-01</text><text class='tx' x='-10' y='-3' font-size='2.2'>1/12</text><rect class='s' x='-58' y='-12' width='16' height='5'/><text class='tx' x='-50' y='-9.5' font-size='1.6' font-weight='700'>แบบขออนุญาต</text><text class='tx' x='-50' y='-4.5' font-size='1.1'>ห้ามวัดระยะจากแบบ</text>",
    basis: "proposed",
    note_th: "ย่อกรอบชื่อแบบเป็น 60×40 มม. จุดสอดที่มุมล่างขวา ช่องตามรายการในรายละเอียด (ตารางแก้ไข 1–7, ชื่อโครงการ, ผู้ออกแบบพร้อมเลขใบอนุญาต, ชื่อแบบ, เลขแผ่น) แต่การจัดวางกำหนดเอง"
  };
  G["TH.GENERAL.NOTE_DO_NOT_SCALE"] = {
    kind: "text",
    box: [-40, -1.5, 80, 3],
    samples: ["ไม่อนุญาตให้วัดระยะจากแบบ ทุกระยะให้ตรวจสอบจากสถานที่ก่อสร้าง"],
    basis: "description",
    note_th: "ใช้ข้อความคงที่ตามรายละเอียด สูง 2.5 มม. ไม่มีเส้นประกอบ"
  };
  G["TH.GENERAL.PERMIT_STAMP"] = {
    kind: "block",
    box: [-14, -5, 28, 10],
    svg: "<rect class='sk' x='-14' y='-5' width='28' height='10'/><rect class='s' x='-13' y='-4' width='26' height='8'/><text class='tx' x='0' y='0' font-size='4' font-weight='700'>แบบขออนุญาต</text>",
    basis: "proposed",
    note_th: "ข้อความ แบบขออนุญาต ตามรายละเอียด ใส่ในกรอบเส้นคู่ขนาด 28×10 มม. ที่กำหนดเอง"
  };
  G["TH.CIVIL.STATION_CHAINAGE"] = {
    kind: "text",
    box: [-10, -1.5, 20, 7.5],
    svg: "<path class='st' d='M -10 4 H 10' stroke-dasharray='4 1 1 1'/><path class='s' d='M 0 2 V 6'/>",
    samples: ["STA 0+000", "0+000", "STA. 1+250", "กม. 12+500"],
    basis: "description",
    note_th: "ขีดตั้งฉากกับแนวศูนย์กลางทางพร้อมข้อความระยะสถานีตามรายละเอียด ข้อความสูง 2.5 มม. อยู่เหนือขีด"
  };
  G["TH.CIVIL.RC_PIPE_CULVERT"] = {
    kind: "text",
    box: [-12, -1.5, 24, 5],
    svg: "<path class='s' d='M -12 2.3 H 12 M -12 2.9 H 12'/>",
    samples: ["ท่อค.ส.ล.Ø 0.30 ม.", "RCP Ø1.00 ม."],
    basis: "description",
    note_th: "แนวท่อเส้นคู่ห่าง 0.6 มม. (Ø0.30 ม. ที่มาตราส่วน 1:500) พร้อมข้อความขนาดท่อจาก notation_grammar"
  };
  G["TH.CIVIL.SLOPE_NOTE"] = {
    kind: "text",
    box: [-10, -1.5, 20, 4],
    svg: "<path class='s' d='M -10 2.2 H 10'/>",
    samples: ["SLOPE 1:200", "SLOPE 1:100"],
    basis: "description",
    note_th: "ข้อความ SLOPE 1:n เขียนเหนือแนวท่อ/ผิว ตามรายละเอียด เส้นใต้แทนแนวท่อ"
  };
  G["TH.CIVIL.RC_BOX_CULVERT"] = {
    kind: "text",
    box: [-7, -1.5, 14, 9.5],
    svg: "<path class='s' d='M -5.3 2.5 H 5.3 V 8 H -5.3 Z M 0 2.5 V 8'/><path class='st' d='M -4.9 2.9 H -0.4 V 7.6 H -4.9 Z M 0.4 2.9 H 4.9 V 7.6 H 0.4 Z'/>",
    samples: ["2-2.40x2.40", "RCBC 1-1.80x1.80"],
    basis: "proposed",
    note_th: "ข้อความจำนวนช่อง-กว้างxสูง จากชุดข้อมูล ส่วนรูปตัดท่อเหลี่ยมสองช่องใต้ข้อความเสนอเอง (สัญลักษณ์กรมทางหลวงยังไม่ได้ตรวจ)"
  };
  G["TH.CIVIL.MANHOLE"] = {
    kind: "point",
    box: [-1.8, -1.8, 3.6, 3.6],
    svg: "<rect class='bg' x='-1.5' y='-1.5' width='3' height='3'/><path class='s' d='M -1 0 A 1 1 0 1 0 1 0 A 1 1 0 1 0 -1 0 Z'/>",
    basis: "proposed",
    note_th: "เสนอเป็นบ่อสี่เหลี่ยม 3×3 มม. (ประมาณ 1.5 ม. ที่ 1:500) มีวงกลมฝาบ่ออยู่ใน เพราะสัญลักษณ์กรมทางหลวงยังไม่ได้ตรวจ"
  };
  G["TH.CIVIL.CATCH_BASIN"] = {
    kind: "point",
    box: [-1.8, -1.3, 3.6, 2.6],
    svg: "<rect class='bg' x='-1.5' y='-1' width='3' height='2'/><path class='st' d='M -0.9 -1 V 1 M -0.3 -1 V 1 M 0.3 -1 V 1 M 0.9 -1 V 1'/>",
    basis: "proposed",
    note_th: "เสนอเป็นสี่เหลี่ยม 3×2 มม. มีซี่ตะแกรงขนาน เพราะสัญลักษณ์ในแบบยังไม่ได้ตรวจ"
  };
  G["TH.CIVIL.CENTRELINE"] = {
    kind: "line",
    box: [-15, -2, 30, 4],
    svg: "<path class='s' d='M -15 0 L 15 0' stroke-dasharray='12 3 2 3'/><rect class='bg' x='-2.2' y='-1.4' width='4.4' height='2.8' stroke-width='0'/><text class='tx' x='0' y='0' font-size='2' font-weight='700'>CL</text>",
    line: {"weight": 0.25, "dash": "12 3 2 3", "label": "CL", "labelEvery": 60, "double": 0, "arrow": false},
    basis: "proposed",
    note_th: "รูปแบบเส้นยังไม่ทราบ จึงเสนอเส้นลูกโซ่บาง 0.25 มม. มีป้าย CL เป็นระยะ"
  };
  G["TH.CIVIL.RIGHT_OF_WAY"] = {
    kind: "line",
    box: [-15, -2, 30, 4],
    svg: "<path class='s' d='M -15 0 L 15 0' stroke-width='0.35' stroke-dasharray='8 1.5 1.5 1.5'/><rect class='bg' x='-3.2' y='-1.4' width='6.4' height='2.8' stroke-width='0'/><text class='tx' x='0' y='0' font-size='2'>ROW</text>",
    line: {"weight": 0.35, "dash": "8 1.5 1.5 1.5", "label": "ROW", "labelEvery": 60, "double": 0, "arrow": false},
    basis: "proposed",
    note_th: "รูปแบบเส้นยังไม่ทราบ จึงเสนอเส้นขีดยาวสลับขีดสั้น 0.35 มม. มีป้าย ROW เป็นระยะ"
  };
  G["TH.CIVIL.RID_REGULATOR_GATE"] = {
    kind: "point",
    box: [-3.5, -3, 7, 8],
    svg: "<path class='s' d='M -3.5 -2 H 3.5 M -3.5 2 H 3.5'/><rect class='bg' x='-1.5' y='-2.5' width='3' height='5'/><path class='sk' d='M -0.5 -2 V 2 M 0.5 -2 V 2'/><text class='tx' x='0' y='4' font-size='1.8'>ปตร.</text>",
    basis: "proposed",
    note_th: "เสนอเป็นอาคารคร่อมคลอง (ตลิ่งสองเส้น) มีบานประตูกลาง และอักษรย่อ ปตร. เพราะสัญลักษณ์กรมชลประทานยังไม่ได้ตรวจ"
  };
  G["TH.CIVIL.RID_CULVERT"] = {
    kind: "point",
    box: [-4, -2, 8, 7],
    svg: "<path class='s' d='M -3 -0.6 H 3 M -3 0.6 H 3'/><path class='sk' d='M -3 -1.6 V 1.6 M 3 -1.6 V 1.6'/><text class='tx' x='0' y='3.5' font-size='1.8'>ทรบ.</text>",
    basis: "proposed",
    note_th: "เสนอเป็นแนวท่อเส้นคู่มีกำแพงหัวท่อสองปลาย พร้อมอักษรย่อ ทรบ. เพราะสัญลักษณ์กรมชลประทานยังไม่ได้ตรวจ"
  };
  G["TH.CIVIL.RID_FARM_TURNOUT"] = {
    kind: "point",
    box: [-2, -2.5, 6, 7.5],
    svg: "<path class='s' d='M -2 -2 V 2'/><path class='s' d='M -2 -0.4 H 2 M -2 0.4 H 2'/><path class='f' d='M 2 -1 L 3.6 0 L 2 1 Z'/><text class='tx' x='0.8' y='3.5' font-size='1.8'>ทรม.</text>",
    basis: "proposed",
    note_th: "เสนอเป็นท่อสั้นออกจากตลิ่งคลองพร้อมหัวลูกศรทิศน้ำเข้านา และอักษรย่อ ทรม. เพราะสัญลักษณ์กรมชลประทานยังไม่ได้ตรวจ"
  };
  G["TH.CIVIL.DRAINAGE_SLOPE_ARROW"] = {
    kind: "text",
    box: [-5, -1.5, 10, 4.5],
    svg: "<path class='s' d='M -5 2.3 H 3.5'/><path class='f' d='M 5 2.3 L 3.2 1.6 L 3.2 3 Z'/>",
    samples: ["0.5%", "1%"],
    basis: "description",
    note_th: "ลูกศรทิศการไหลใต้ค่าความลาดเป็นร้อยละ ตามรายละเอียด (ลูกศร → ในตัวอย่างวาดเป็นเส้นแทนตัวอักษร) ขนาดลูกศรกำหนดเอง"
  };
  G["TH.CIVIL.INVERT_LEVEL"] = {
    kind: "text",
    box: [-12, -1.5, 19, 7],
    svg: "<path class='st' d='M 7 1.8 H -7 L -10.5 5'/><path class='f' d='M -10.9 4.6 h 0.8 v 0.8 h -0.8 Z'/>",
    samples: ["IL. +1.250", "ร.ท. -0.85"],
    basis: "description",
    note_th: "ข้อความ IL./ร.ท. ตามด้วยค่าระดับจาก notation_grammar เส้นชี้พร้อมจุดปลายชี้ท้องท่อเสนอเอง"
  };
  G["TH.CIVIL.EXISTING_VS_PROPOSED"] = {
    kind: "line",
    box: [-15, -3, 30, 6],
    svg: "<path class='st' d='M -15 -1.5 H 15' stroke-dasharray='2 1'/><path class='sk' d='M -15 1.5 H 15'/>",
    line: {"weight": 0.18, "dash": "2 1", "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "ตามแนวปฏิบัติทั่วไปในรายละเอียด: ของเดิมเป็นเส้นประบาง (บน) ของใหม่เป็นเส้นเต็มหนา (ล่าง) ค่า line ใช้กับเส้นของเดิม"
  };
  G["TH.CIVIL.PAVEMENT_SEPARATION_LINE"] = {
    kind: "line",
    box: [-15, -1.5, 30, 3],
    svg: "<path class='s' d='M -15 -0.5 H 15 M -15 0.5 H 15' stroke-width='0.2'/>",
    line: {"weight": 0.2, "dash": null, "label": null, "labelEvery": 40, "double": 1.0, "arrow": false},
    basis: "proposed",
    note_th: "ชุดข้อมูลให้แค่สีเหลืองทึบหรือประ จึงเสนอเส้นทึบคู่ กว้าง 10 ซม. ห่างกัน 0.5 ม. ย่อที่ 1:500 (เส้นประเดี่ยวใช้แบบเส้นแบ่งช่องจราจร)"
  };
  G["TH.CIVIL.PAVEMENT_LANE_LINE"] = {
    kind: "line",
    box: [-15, -1, 30, 2],
    svg: "<path class='s' d='M -15 0 H 15' stroke-width='0.2' stroke-dasharray='4 4'/>",
    line: {"weight": 0.2, "dash": "4 4", "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นประขาวกว้าง 10 ซม. ขีด 2 ม. เว้น 2 ม. ตามค่าในรายละเอียด ย่อที่ 1:500 เป็น 0.2 มม. ขีด 4 มม. เว้น 4 มม."
  };
  G["TH.CIVIL.PAVEMENT_WARNING_LINE"] = {
    kind: "line",
    box: [-15, -1, 30, 2],
    svg: "<path class='s' d='M -15 0 H 15' stroke-width='0.3' stroke-dasharray='6 2'/>",
    line: {"weight": 0.3, "dash": "6 2", "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นประเตือนกว้าง 15 ซม. ขีด 3 ม. เว้น 1 ม. ตามค่าในรายละเอียด ย่อที่ 1:500 เป็น 0.3 มม. ขีด 6 มม. เว้น 2 มม."
  };
  G["TH.CIVIL.PAVEMENT_EDGE_LINE"] = {
    kind: "line",
    box: [-15, -1, 30, 2],
    svg: "<path class='s' d='M -15 0 H 15' stroke-width='0.3'/>",
    line: {"weight": 0.3, "dash": null, "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "proposed",
    note_th: "ไม่พบขนาดในชุดข้อมูล จึงเสนอเส้นทึบกว้าง 15 ซม. ย่อที่ 1:500 เป็น 0.3 มม."
  };
  G["TH.SURVEY.BOUNDARY_MONUMENT"] = {
    kind: "point",
    box: [-1.2, -3.2, 6.8, 4.4],
    svg: "<path class='bg' d='M -1 0 A 1 1 0 1 0 1 0 A 1 1 0 1 0 -1 0 Z'/><path class='f' d='M -0.25 0 A 0.25 0.25 0 1 0 0.25 0 A 0.25 0.25 0 1 0 -0.25 0 Z'/><text class='tx' x='3.6' y='-2.2' font-size='1.8'>0123</text>",
    basis: "description",
    note_th: "วงกลมเล็ก Ø2 มม. มีจุดศูนย์กลางและเลขหลักเขต 4 หลักตามแนวปฏิบัติในรายละเอียด ขนาดวงกลมกำหนดเอง"
  };
  G["TH.SURVEY.BENCHMARK"] = {
    kind: "point",
    box: [-1.7, -1.7, 30.5, 3.4],
    svg: "<path class='s' d='M -1.5 0 A 1.5 1.5 0 1 0 1.5 0 A 1.5 1.5 0 1 0 -1.5 0 Z M -1.5 0 H 1.5'/><path class='f' d='M -1.5 0 A 1.5 1.5 0 0 1 1.5 0 Z'/><text class='tx' x='15.5' y='0' font-size='1.8'>BM.1 RL. +2.345 ม.(รทก.)</text>",
    basis: "proposed",
    note_th: "รูปหมุดยังไม่ยืนยัน จึงเสนอวงกลม Ø3 มม. ระบายทึบครึ่งบน พร้อมข้อความ BM และค่าระดับตาม notation_grammar"
  };
  G["TH.SURVEY.SPOT_HEIGHT"] = {
    kind: "text",
    box: [-4, -1.5, 8, 4.5],
    svg: "<path class='st' d='M -0.6 1.9 L 0.6 3.1 M -0.6 3.1 L 0.6 1.9'/>",
    samples: ["+2.35", "+12.50"],
    basis: "proposed",
    note_th: "กากบาทเล็กที่ตำแหน่งจุดใต้ค่าระดับ ค่าตัวอย่างสมมติ เพราะรูปแบบและตัวอย่างไม่มีในชุดข้อมูล"
  };
  G["TH.SURVEY.CONTOUR_LINE"] = {
    kind: "line",
    box: [-15, -2, 30, 4],
    svg: "<path class='st' d='M -15 0 L 15 0'/>",
    line: {"weight": 0.18, "dash": null, "label": null, "labelEvery": 40, "double": 0, "arrow": false},
    basis: "proposed",
    note_th: "รูปแบบเส้นไม่ทราบ จึงเสนอเส้นเต็มบาง 0.18 มม. ไม่มีป้ายค่าระดับ (เส้นหลักยังไม่กำหนด)"
  };
  G["TH.SURVEY.DOL_SHEET_REFERENCE"] = {
    kind: "text",
    box: [-8.5, -2, 17, 4],
    svg: "<rect class='s' x='-8.5' y='-2' width='17' height='4'/>",
    samples: ["5136II9214", "5136 II 9214"],
    basis: "description",
    note_th: "ข้อความเลขระวางตาม notation_grammar ในกรอบแผนที่ กรอบสี่เหลี่ยมรอบข้อความเสนอเอง"
  };
  G["INTL.GENERAL.REVISION_CLOUD"] = {
    kind: "point",
    box: [-10.5, -6.5, 21, 13],
    svg: "<path class='sk' d='M -9 -5 a 1.5 1.5 0 0 1 3 0 a 1.5 1.5 0 0 1 3 0 a 1.5 1.5 0 0 1 3 0 a 1.5 1.5 0 0 1 3 0 a 1.5 1.5 0 0 1 3 0 a 1.5 1.5 0 0 1 3 0 a 1.25 1.25 0 0 1 0 2.5 a 1.25 1.25 0 0 1 0 2.5 a 1.25 1.25 0 0 1 0 2.5 a 1.25 1.25 0 0 1 0 2.5 a 1.5 1.5 0 0 1 -3 0 a 1.5 1.5 0 0 1 -3 0 a 1.5 1.5 0 0 1 -3 0 a 1.5 1.5 0 0 1 -3 0 a 1.5 1.5 0 0 1 -3 0 a 1.5 1.5 0 0 1 -3 0 a 1.25 1.25 0 0 1 0 -2.5 a 1.25 1.25 0 0 1 0 -2.5 a 1.25 1.25 0 0 1 0 -2.5 a 1.25 1.25 0 0 1 0 -2.5 Z'/>",
    basis: "proposed",
    note_th: "เส้นโค้งหยักแบบเมฆล้อมพื้นที่ 18×10 มม. ขนาดโค้ง 3 มม. กำหนดเองเพราะชุดข้อมูลไม่ระบุ ไม่ใส่สามเหลี่ยมเลขแก้ไขเพราะไม่มีแหล่งยืนยัน"
  };
  G["INTL.SURVEY.CONTROL_POINT"] = {
    kind: "point",
    box: [-2, -2, 4, 3.5],
    svg: "<path class='s' d='M 0 -2 L 1.73 1 L -1.73 1 Z'/><path class='f' d='M -0.3 0 A 0.3 0.3 0 1 0 0.3 0 A 0.3 0.3 0 1 0 -0.3 0 Z'/>",
    basis: "proposed",
    note_th: "ชุดข้อมูลไม่มีรูปทรง จึงเสนอสามเหลี่ยมด้านเท่ามีจุดศูนย์กลางตามที่นิยมใช้กับหมุดควบคุม"
  };
  G["INTL.SURVEY.TRAVERSE_POINT"] = {
    kind: "point",
    box: [-1.5, -1.5, 3, 3],
    svg: "<path class='s' d='M -1.5 0 A 1.5 1.5 0 1 0 1.5 0 A 1.5 1.5 0 1 0 -1.5 0 Z'/><path class='f' d='M -0.3 0 A 0.3 0.3 0 1 0 0.3 0 A 0.3 0.3 0 1 0 -0.3 0 Z'/>",
    basis: "proposed",
    note_th: "ชุดข้อมูลไม่มีรูปทรง จึงเสนอวงกลม Ø3 มม. มีจุดศูนย์กลาง"
  };
  G["INTL.SURVEY.SETOUT_POINT"] = {
    kind: "point",
    box: [-2.5, -2.5, 5, 5],
    svg: "<path class='s' d='M -1.2 0 A 1.2 1.2 0 1 0 1.2 0 A 1.2 1.2 0 1 0 -1.2 0 Z'/><path class='st' d='M -2.5 0 H 2.5 M 0 -2.5 V 2.5'/>",
    basis: "proposed",
    note_th: "ชุดข้อมูลไม่มีรูปทรง จึงเสนอวงกลม Ø2.4 มม. มีเส้นกากบาทยื่นเกินแสดงตำแหน่งวางผัง"
  };
  G["INTL.CIVIL.LANDSCAPE_SYMBOL"] = {
    kind: "point",
    box: [-5.5, -5.5, 11, 11],
    svg: "<path class='s' d='M 4.00 0.00 A 1.5 1.5 0 0 1 3.24 2.35 A 1.5 1.5 0 0 1 1.24 3.80 A 1.5 1.5 0 0 1 -1.24 3.80 A 1.5 1.5 0 0 1 -3.24 2.35 A 1.5 1.5 0 0 1 -4.00 0.00 A 1.5 1.5 0 0 1 -3.24 -2.35 A 1.5 1.5 0 0 1 -1.24 -3.80 A 1.5 1.5 0 0 1 1.24 -3.80 A 1.5 1.5 0 0 1 3.24 -2.35 A 1.5 1.5 0 0 1 4.00 0.00 Z'/><path class='st' d='M -1 0 H 1 M 0 -1 V 1'/><path class='f' d='M -0.3 0 A 0.3 0.3 0 1 0 0.3 0 A 0.3 0.3 0 1 0 -0.3 0 Z'/>",
    basis: "proposed",
    note_th: "ใช้ต้นไม้ในผังเป็นตัวแทน ทรงพุ่มหยัก Ø8 มม. มีจุดลำต้น เพราะไม่ได้สกัดรูปจาก ISO 11091"
  };
})(window.TBIM_GLYPHS = window.TBIM_GLYPHS || {});
