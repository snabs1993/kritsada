// TBIM glyphs, group g3_plumb_hvac (plumbing, sanitary, HVAC). Paper mm, y down, insertion at (0,0).
(function (G) {
  G["TH.PLB.COLD_WATER_LINE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='s' stroke-width='0.35' d='M -15 0 H -2.04 M 2.04 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>CW</text>",
    line: {"weight": 0.35, "dash": null, "label": "CW", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มเว้นช่วงเขียน CW ตามคำอธิบาย ความหนาเส้น 0.35 มม. เลือกเอง"
  };
  G["TH.PLB.HOT_WATER_LINE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='s' stroke-width='0.35' d='M -15 0 H -2.04 M 2.04 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>HW</text>",
    line: {"weight": 0.35, "dash": null, "label": "HW", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มมีอักษร HW (ท่อไหลกลับใช้ HWR) ความหนาเส้น 0.35 มม. เลือกเอง"
  };
  G["TH.SAN.SOIL_LINE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='sk' d='M -15 0 H -1.32 M 1.32 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>S</text>",
    line: {"weight": 0.5, "dash": null, "label": "S", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มหนา 0.5 มม. ตาม weight_class thick มีอักษร S"
  };
  G["TH.SAN.WASTE_LINE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='s' stroke-width='0.35' d='M -15 0 H -1.32 M 1.32 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>W</text>",
    line: {"weight": 0.35, "dash": null, "label": "W", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มมีอักษร W ความหนาเส้น 0.35 มม. เลือกเอง"
  };
  G["TH.SAN.VENT_LINE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='s' stroke-width='0.35' stroke-dasharray='3 1' d='M -15 0 H -1.32 M 1.32 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>V</text>",
    line: {"weight": 0.35, "dash": "3 1", "label": "V", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นประมีอักษร V ระยะประ 3-1 มม. เลือกเอง"
  };
  G["TH.SAN.RAINWATER_LINE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='s' stroke-width='0.35' d='M -15 0 H -2.04 M 2.04 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>RW</text>",
    line: {"weight": 0.35, "dash": null, "label": "RW", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มมีอักษร RW (หรือ RWL) ชนิดเส้นเต็มเลือกเอง"
  };
  G["TH.SAN.CONDENSATE_DRAIN_LINE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='s' stroke-width='0.35' d='M -15 0 H -2.04 M 2.04 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>CD</text>",
    line: {"weight": 0.35, "dash": null, "label": "CD", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มมีอักษร CD (หรือ D) ชนิดเส้นเต็มเลือกเอง"
  };
  G["TH.SAN.FLOOR_DRAIN"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='M -3 0 A 3 3 0 1 0 3 0 A 3 3 0 1 0 -3 0 Z'/><text class='tx' x='0' y='0' font-size='1.8'>FD</text>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø6 ตาม svg_path ใส่อักษร FD สูง 1.8 มม. (เลือกแบบอักษรแทนลายตาราง)"
  };
  G["TH.SAN.CLEANOUT"] = {
    kind: "point",
    box: [-2, -2, 4, 4],
    svg: "<path class='s' d='M -2 0 A 2 2 0 1 0 2 0 A 2 2 0 1 0 -2 0 Z'/><text class='tx' x='0' y='0' font-size='1.6'>CO</text>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø4 ตาม svg_path ใส่อักษร CO (ใช้ FCO/WCO ตามตำแหน่ง) ย่ออักษรเป็น 1.6 มม. ให้พอดีวง"
  };
  G["TH.SAN.VENT_THROUGH_ROOF"] = {
    kind: "point",
    box: [-1.5, -1.5, 9, 3],
    svg: "<circle class='s' cx='0' cy='0' r='1.5'/><text class='tx' x='4.8' y='0' font-size='1.8'>VTR</text>",
    basis: "proposed",
    note_th: "วงกลม Ø3 ที่ปลายท่อ ขนาดเลือกเอง ข้อความ VTR สูง 1.8 มม. วางด้านขวา"
  };
  G["TH.SAN.ROOF_DRAIN"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='M -3 0 A 3 3 0 1 0 3 0 A 3 3 0 1 0 -3 0 Z'/><circle class='st' cx='0' cy='0' r='1.5'/><path class='st' d='M -3 0 H 3 M 0 -3 V 3'/>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø6 ตาม svg_path เพิ่มโดม (วงใน Ø3) และกากบาท สัดส่วนภายในเลือกเอง"
  };
  G["TH.SAN.GREASE_TRAP"] = {
    kind: "point",
    box: [-4.5, -3, 9, 6],
    svg: "<rect class='s' x='-4.5' y='-3' width='9' height='6'/><text class='tx' x='0' y='0' font-size='2.5'>GT</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมผืนผ้า 9×6 มม. ขนาดเลือกเอง อักษร GT สูง 2.5 มม. ตามข้อมูล"
  };
  G["TH.SAN.MANHOLE"] = {
    kind: "point",
    box: [-3.5, -3.5, 7, 7],
    svg: "<rect class='s' x='-3.5' y='-3.5' width='7' height='7'/><text class='tx' x='0' y='0' font-size='2.5'>MH</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมจัตุรัส 7 มม. (แบบบ่อพักท่อระบาย) ขนาดเลือกเอง อักษร MH สูง 2.5 มม."
  };
  G["TH.SAN.SEPTIC_TANK"] = {
    kind: "point",
    box: [-10, -4, 20, 8],
    svg: "<rect class='s' x='-10' y='-4' width='20' height='8'/><text class='tx' x='0' y='-1.3' font-size='1.8'>ถังบำบัดน้ำเสีย</text><text class='tx' x='0' y='1.5' font-size='1.8'>สำเร็จรูป</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมผืนผ้า 20×8 มม. ขนาดเลือกเอง เขียนข้อความ ถังบำบัดน้ำเสียสำเร็จรูป สองบรรทัด"
  };
  G["TH.PLB.GATE_VALVE"] = {
    kind: "point",
    box: [-2, -1.25, 4, 2.5],
    svg: "<path class='s' d='M -2 -1.25 L 0 0 L -2 1.25 Z M 2 -1.25 L 0 0 L 2 1.25 Z'/>",
    basis: "proposed",
    note_th: "สามเหลี่ยมโปร่งชนยอด กว้าง 4 สูง 2.5 มม. ขนาดเลือกเอง"
  };
  G["TH.PLB.GLOBE_VALVE"] = {
    kind: "point",
    box: [-2, -1.25, 4, 2.5],
    svg: "<path class='s' d='M -2 -1.25 L 0 0 L -2 1.25 Z M 2 -1.25 L 0 0 L 2 1.25 Z'/><circle class='f' cx='0' cy='0' r='0.55'/>",
    basis: "proposed",
    note_th: "รูปโบว์ไท 4×2.5 มม. มีจุดทึบกลาง ขนาดเลือกเอง"
  };
  G["TH.PLB.BALL_VALVE"] = {
    kind: "point",
    box: [-2, -1.25, 4, 2.5],
    svg: "<path class='s' d='M -2 -1.25 L 0 0 L -2 1.25 Z M 2 -1.25 L 0 0 L 2 1.25 Z'/><circle class='bg' cx='0' cy='0' r='0.7'/>",
    basis: "proposed",
    note_th: "รูปโบว์ไท 4×2.5 มม. มีวงกลมโปร่งกลาง ขนาดเลือกเอง"
  };
  G["TH.PLB.CHECK_VALVE"] = {
    kind: "point",
    box: [-2, -1.25, 4, 2.5],
    svg: "<path class='s' d='M -2 -1.25 L 0 0 L -2 1.25 Z'/><path class='f' d='M 2 -1.25 L 0 0 L 2 1.25 Z'/>",
    basis: "proposed",
    note_th: "รูปโบว์ไททึบข้างเดียว 4×2.5 มม. ข้างทึบคือด้านปลายน้ำ (สมมติไหลซ้ายไปขวา)"
  };
  G["TH.PLB.BUTTERFLY_VALVE"] = {
    kind: "point",
    box: [-2, -1.75, 4, 3.5],
    svg: "<path class='s' d='M -2 -1.25 L 0 0 L -2 1.25 Z M 2 -1.25 L 0 0 L 2 1.25 Z M 0 -1.75 V 1.75'/>",
    basis: "proposed",
    note_th: "รูปโบว์ไท 4×2.5 มม. มีเส้นตั้งผ่านกลาง ขนาดเลือกเอง"
  };
  G["TH.PLB.FLOAT_VALVE"] = {
    kind: "point",
    box: [-2, -2.9, 5.7, 4.15],
    svg: "<path class='s' d='M -2 -1.25 L 0 0 L -2 1.25 Z M 2 -1.25 L 0 0 L 2 1.25 Z M 0 0 V -2.1 H 2.1'/><circle class='s' cx='2.9' cy='-2.1' r='0.8'/>",
    basis: "proposed",
    note_th: "รูปโบว์ไท 4×2.5 มม. มีก้านและลูกลอยวงกลม Ø1.6 ด้านบน ขนาดเลือกเอง"
  };
  G["TH.PLB.PRESSURE_REDUCING_VALVE"] = {
    kind: "point",
    box: [-2, -2.2, 4.2, 4.2],
    svg: "<path class='s' d='M -2 -1.25 L 0 0 L -2 1.25 Z M 2 -1.25 L 0 0 L 2 1.25 Z'/><path class='st' d='M -1.6 1.6 L 1.3 -1.3'/><path class='f' d='M 2 -2 L 0.7 -1.5 L 1.5 -0.7 Z'/>",
    basis: "proposed",
    note_th: "รูปโบว์ไท 4×2.5 มม. มีลูกศรเฉียงผ่าน (ไม่เขียนอักษร PRV) ขนาดเลือกเอง"
  };
  G["TH.PLB.Y_STRAINER"] = {
    kind: "point",
    box: [-2.5, -0.2, 5, 2.8],
    svg: "<path class='s' d='M -2.5 0 H 2.5 M -0.6 0 L 1.1 1.7'/><path class='s' d='M 0.4 2.4 L 1.8 1'/>",
    basis: "proposed",
    note_th: "เส้นท่อมีกิ่งเฉียงรูปตัว Y และขีดปิดปลายตะแกรง ขนาดและรูปเลือกเอง"
  };
  G["TH.PLB.WATER_METER"] = {
    kind: "point",
    box: [-2.25, -2.25, 4.5, 4.5],
    svg: "<circle class='s' cx='0' cy='0' r='2.25'/><text class='tx' x='0' y='0' font-size='1.6'>WM</text>",
    basis: "proposed",
    note_th: "วงกลม Ø4.5 มม. ขนาดเลือกเอง อักษร WM (ย่อเป็น 1.6 มม. ให้พอดีวง)"
  };
  G["TH.PLB.HOSE_BIBB"] = {
    kind: "point",
    box: [-2.5, -1.6, 4.9, 4.8],
    svg: "<path class='s' d='M -2.5 0 H 0.8 Q 1.9 0 1.9 1.2 M -0.6 -1.3 H 0.6 M 0 -1.3 V 0'/><text class='tx' x='-0.6' y='2.3' font-size='1.4'>HB</text>",
    basis: "proposed",
    note_th: "รูปก๊อกน้ำเล็ก (ท่อ ด้ามหมุน และปากก๊อก) กว้างราว 4.5 มม. รูปและขนาดเลือกเอง ผนังอยู่ด้านซ้าย"
  };
  G["TH.PLB.PUMP"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<circle class='s' cx='0' cy='0' r='3'/><polygon class='s' points='-1.5,-2.598 3,0 -1.5,2.598'/>",
    basis: "proposed",
    note_th: "วงกลม Ø6 มม. มีสามเหลี่ยมแนบในชี้ไปทางท่อส่ง (ขวา) ขนาดเลือกเอง"
  };
  G["TH.PLB.WATER_TANK"] = {
    kind: "point",
    box: [-5, -3, 10, 6],
    svg: "<rect class='s' x='-5' y='-3' width='10' height='6'/><text class='tx' x='0' y='0' font-size='2.5'>WT</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมผืนผ้า 10×6 มม. มีอักษร WT ขนาดเลือกเอง"
  };
  G["TH.HVAC.SUPPLY_DIFFUSER"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='M -3 -3 H 3 V 3 H -3 Z M -3 -3 L 3 3 M -3 3 L 3 -3'/>",
    basis: "catalog_svg",
    note_th: "svg_path เป็นหน่วยมิลลิเมตรจริง 600×600 จึงย่อ 1:100 เป็น 6×6 มม. บนกระดาษ ไม่ได้วาดลูกศรทิศลม"
  };
  G["TH.HVAC.RETURN_GRILLE"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='M -3 -3 H 3 V 3 H -3 Z M -3 3 L 3 -3'/>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 600×600 ที่มาตราส่วน 1:100 (6×6 มม.) มีเส้นทแยงเส้นเดียว ขนาดเลือกเอง"
  };
  G["TH.HVAC.EXHAUST_GRILLE"] = {
    kind: "point",
    box: [-3, -2, 6, 6.6],
    svg: "<path class='s' d='M -3 -2 H 3 V 2 H -3 Z M -3 -2 L 3 2'/><text class='tx' x='0' y='3.6' font-size='1.6'>EAG</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมผืนผ้า 6×4 มม. (1:100) มีเส้นทแยงเส้นเดียว อักษร EAG ใต้รูป ขนาดเลือกเอง"
  };
  G["TH.HVAC.FRESH_AIR_LOUVER"] = {
    kind: "point",
    box: [-4, -1.5, 8, 3],
    svg: "<rect class='s' x='-4' y='-1.5' width='8' height='3'/><path class='st' d='M -3.4 1.5 L -2.4 -1.5 M -2 1.5 L -1 -1.5 M -0.6 1.5 L 0.4 -1.5 M 0.8 1.5 L 1.8 -1.5 M 2.2 1.5 L 3.2 -1.5'/>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมผืนผ้า 8×3 มม. มีครีบเฉียงขนานกัน ขนาดและมุมครีบเลือกเอง"
  };
  G["TH.HVAC.SLOT_DIFFUSER"] = {
    kind: "point",
    box: [-6, -0.9, 12, 1.8],
    svg: "<rect class='s' x='-6' y='-0.9' width='12' height='1.8'/><path class='st' d='M -5.4 -0.3 H 5.4 M -5.4 0.3 H 5.4'/>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมยาว 12×1.8 มม. มีเส้นช่องลม 2 เส้น ขนาดเลือกเอง"
  };
  G["TH.HVAC.SUPPLY_DUCT"] = {
    kind: "line",
    box: [-15, -1.5, 30, 3],
    svg: "<path class='s' d='M -15 -1.5 H 15 M -15 1.5 H 15'/><rect class='bg' x='-1.5' y='-1.5' width='3' height='3'/><path class='st' d='M -1.5 -1.5 L 1.5 1.5 M -1.5 1.5 L 1.5 -1.5'/>",
    line: {"weight": 0.25, "dash": null, "label": null, "labelEvery": 40, "double": 3, "arrow": false},
    basis: "proposed",
    note_th: "ท่อลมเส้นคู่ ห่างกัน 3 มม. (ความกว้างจริงขึ้นกับขนาดท่อ) กล่องหน้าตัดมีกากบาทแสดงลมส่ง"
  };
  G["TH.HVAC.RETURN_DUCT"] = {
    kind: "line",
    box: [-15, -1.5, 30, 3],
    svg: "<path class='s' d='M -15 -1.5 H 15 M -15 1.5 H 15'/><rect class='bg' x='-1.5' y='-1.5' width='3' height='3'/><path class='st' d='M -1.5 1.5 L 1.5 -1.5'/>",
    line: {"weight": 0.25, "dash": null, "label": null, "labelEvery": 40, "double": 3, "arrow": false},
    basis: "proposed",
    note_th: "ท่อลมเส้นคู่ ห่างกัน 3 มม. (ความกว้างจริงขึ้นกับขนาดท่อ) กล่องหน้าตัดมีเส้นทแยงเดียวแสดงลมกลับ"
  };
  G["TH.HVAC.FIRE_DAMPER"] = {
    kind: "point",
    box: [-0.6, -2, 2.6, 6.9],
    svg: "<path class='s' d='M 0 -2 V 2'/><path class='f' d='M 0 -2 L 1.8 -2 L 0 0 Z'/><text class='tx' x='0.6' y='4' font-size='1.6'>FD</text>",
    basis: "proposed",
    note_th: "เส้นขวางท่อลมยาว 4 มม. มีสามเหลี่ยมทึบ และอักษร FD (MFD/SD) ใต้รูป ขนาดเลือกเอง"
  };
  G["TH.HVAC.VOLUME_DAMPER"] = {
    kind: "point",
    box: [-0.8, -2, 1.6, 4],
    svg: "<path class='s' d='M -0.8 -2 L 0.8 2'/><circle class='bg' cx='0' cy='0' r='0.5'/>",
    basis: "proposed",
    note_th: "ใบลิ้นเฉียงขวางท่อยาวราว 4 มม. มีวงกลมจุดหมุน Ø1 ขนาดเลือกเอง"
  };
  G["TH.HVAC.FLEX_DUCT"] = {
    kind: "line",
    box: [-15, -1.9, 30, 3.8],
    svg: "<path class='st' d='M -15 -1.5 L -14 -1.9 L -13 -1.1 L -12 -1.9 L -11 -1.1 L -10 -1.9 L -9 -1.1 L -8 -1.9 L -7 -1.1 L -6 -1.9 L -5 -1.1 L -4 -1.9 L -3 -1.1 L -2 -1.9 L -1 -1.1 L 0 -1.9 L 1 -1.1 L 2 -1.9 L 3 -1.1 L 4 -1.9 L 5 -1.1 L 6 -1.9 L 7 -1.1 L 8 -1.9 L 9 -1.1 L 10 -1.9 L 11 -1.1 L 12 -1.9 L 13 -1.1 L 14 -1.9 L 15 -1.1 M -15 1.5 L -14 1.1 L -13 1.9 L -12 1.1 L -11 1.9 L -10 1.1 L -9 1.9 L -8 1.1 L -7 1.9 L -6 1.1 L -5 1.9 L -4 1.1 L -3 1.9 L -2 1.1 L -1 1.9 L 0 1.1 L 1 1.9 L 2 1.1 L 3 1.9 L 4 1.1 L 5 1.9 L 6 1.1 L 7 1.9 L 8 1.1 L 9 1.9 L 10 1.1 L 11 1.9 L 12 1.1 L 13 1.9 L 14 1.1 L 15 1.9'/>",
    line: {"weight": 0.18, "dash": null, "label": null, "labelEvery": 40, "double": 3, "arrow": false},
    basis: "proposed",
    note_th: "เส้นคู่ซิกแซกห่าง 3 มม. ตัวอย่างเป็นซิกแซก แต่ line ใช้เส้นคู่ตรงแทนเพราะหน้ากระดาษวาดคลื่นไม่ได้"
  };
  G["TH.HVAC.FCU"] = {
    kind: "point",
    box: [-5, -2, 10, 4],
    svg: "<rect class='s' x='-5' y='-2' width='10' height='4'/><ellipse class='bg' cx='0' cy='0' rx='3.3' ry='1.3'/><text class='tx' x='0' y='0' font-size='1.4'>FCU-1</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 10×4 มม. (ปกติวาดตามขนาดจริง) มีป้าย FCU-1 ในวงรี ขนาดเลือกเอง"
  };
  G["TH.HVAC.AHU"] = {
    kind: "point",
    box: [-8, -4, 16, 8],
    svg: "<rect class='s' x='-8' y='-4' width='16' height='8'/><text class='tx' x='0' y='0' font-size='2.5'>AHU-1</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 16×8 มม. (ปกติวาดตามขนาดจริง) มีป้าย AHU-1 ขนาดเลือกเอง"
  };
  G["TH.HVAC.CONDENSING_UNIT"] = {
    kind: "point",
    box: [-6, -3.5, 12, 7],
    svg: "<rect class='s' x='-6' y='-3.5' width='12' height='7'/><circle class='s' cx='-2.8' cy='0' r='2.6'/><path class='st' d='M -2.8 -2.6 V 2.6 M -5.4 0 H -0.2'/><text class='tx' x='2.9' y='0' font-size='1.4'>CDU-1</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 12×7 มม. มีวงกลมพัดลมและป้าย CDU-1 ขนาดเลือกเอง"
  };
  G["TH.HVAC.EXHAUST_FAN"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<circle class='s' cx='0' cy='0' r='3'/><path class='st' transform='rotate(0)' d='M 0 0 C 0.9 -0.5 0.9 -1.9 0 -2.4 C -0.6 -1.7 -0.5 -0.6 0 0 Z'/><path class='st' transform='rotate(90)' d='M 0 0 C 0.9 -0.5 0.9 -1.9 0 -2.4 C -0.6 -1.7 -0.5 -0.6 0 0 Z'/><path class='st' transform='rotate(180)' d='M 0 0 C 0.9 -0.5 0.9 -1.9 0 -2.4 C -0.6 -1.7 -0.5 -0.6 0 0 Z'/><path class='st' transform='rotate(270)' d='M 0 0 C 0.9 -0.5 0.9 -1.9 0 -2.4 C -0.6 -1.7 -0.5 -0.6 0 0 Z'/><circle class='f' cx='0' cy='0' r='0.35'/>",
    basis: "proposed",
    note_th: "วงกลม Ø6 มม. มีใบพัด 4 ใบ ใช้ได้กับ EF/SF/PF ขนาดเลือกเอง"
  };
  G["TH.HVAC.CHILLER"] = {
    kind: "point",
    box: [-8, -4, 16, 8],
    svg: "<rect class='s' x='-8' y='-4' width='16' height='8'/><text class='tx' x='0' y='0' font-size='2.5'>CH-1</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 16×8 มม. (ปกติวาดตามขนาดจริง) มีป้าย CH-1 ขนาดเลือกเอง"
  };
  G["TH.HVAC.CHILLED_WATER_PIPE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='s' stroke-width='0.35' d='M -15 0 H -2.76 M 2.76 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>CHS</text>",
    line: {"weight": 0.35, "dash": null, "label": "CHS", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มมีอักษร CHS ใช้ CHR/CDS/CDR เปลี่ยนป้ายตามชนิดท่อ"
  };
  G["TH.HVAC.REFRIGERANT_PIPE"] = {
    kind: "line",
    box: [-15, -1.2, 30, 2.4],
    svg: "<path class='s' stroke-width='0.35' d='M -15 0 H -1.32 M 1.32 0 H 15'/><text class='tx' x='0' y='0' font-size='2.0'>R</text>",
    line: {"weight": 0.35, "dash": null, "label": "R", "labelEvery": 40, "double": 0, "arrow": false},
    basis: "description",
    note_th: "เส้นเต็มมีอักษร R (แยกเป็น RL/RS ได้) ชนิดเส้นเต็มเลือกเอง"
  };
  G["TH.HVAC.THERMOSTAT"] = {
    kind: "point",
    box: [-2, -2, 4, 4],
    svg: "<path class='s' d='M -2 0 A 2 2 0 1 0 2 0 A 2 2 0 1 0 -2 0 Z'/><text class='tx' x='0' y='0' font-size='2.5'>T</text>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø4 ตาม svg_path มีอักษร T สูง 2.5 มม. จุดแทรกที่ศูนย์กลาง"
  };
})(window.TBIM_GLYPHS = window.TBIM_GLYPHS || {});
