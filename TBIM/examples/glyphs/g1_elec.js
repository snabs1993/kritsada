/* TBIM glyphs - group g1_elec (electrical / ELV). See CONTRACT.md. Paper mm, y down. */
(function (G) {
  var C15 = "M -1.5 0 A 1.5 1.5 0 1 0 1.5 0 A 1.5 1.5 0 1 0 -1.5 0 Z";
  var C2 = "M -2 0 A 2 2 0 1 0 2 0 A 2 2 0 1 0 -2 0 Z";
  var C25 = "M -2.5 0 A 2.5 2.5 0 1 0 2.5 0 A 2.5 2.5 0 1 0 -2.5 0 Z";
  var C3 = "M -3 0 A 3 3 0 1 0 3 0 A 3 3 0 1 0 -3 0 Z";
  function tx(t, fs, x, y, bold) {
    return "<text class='tx' x='" + (x || 0) + "' y='" + (y || 0) + "' font-size='" + fs + "'" +
      (bold ? " font-weight='700'" : "") + ">" + t + "</text>";
  }
  function p(cls, d) { return "<path class='" + cls + "' d='" + d + "'/>"; }

  /* ---------- receptacles / outlets ---------- */
  G["TH.ELEC.RECEPTACLE_DUPLEX"] = {
    kind: "point", box: [-1.5, -2.5, 3, 5],
    svg: p("s", "M -1.5 0 A 1.5 1.5 0 1 0 1.5 0 A 1.5 1.5 0 1 0 -1.5 0 Z M -0.5 -2.5 L -0.5 2.5 M 0.5 -2.5 L 0.5 2.5"),
    basis: "catalog_svg",
    note_th: "วาดตาม svg_path ในชุดข้อมูล จุดแทรกอยู่กลางวงกลม (วางให้วงกลมสัมผัสแนวผนังเอง)"
  };
  G["TH.ELEC.RECEPTACLE_SINGLE"] = {
    kind: "point", box: [-1.5, -2.5, 3, 5],
    svg: p("s", "M -1.5 0 A 1.5 1.5 0 1 0 1.5 0 A 1.5 1.5 0 1 0 -1.5 0 Z M 0 -2.5 L 0 2.5"),
    basis: "catalog_svg",
    note_th: "วาดตาม svg_path ในชุดข้อมูล จุดแทรกอยู่กลางวงกลม"
  };
  G["TH.ELEC.SOCKET_OUTLET_IEC"] = {
    kind: "point", box: [-2, 0, 4, 3],
    svg: p("s", "M 0 0 L 0 1 M -2 3 A 2 2 0 0 1 2 3"),
    basis: "description",
    note_th: "ครึ่งวงกลม Ø4 ตามคำบรรยาย ด้านผนังอยู่ที่ y=0 สัญลักษณ์อยู่ด้านล่าง ก้านยาว 1 มม. เป็นค่าที่สมมติ แบบไม่มีสายดิน"
  };
  G["TH.ELEC.RECEPTACLE_FLOOR"] = {
    kind: "point", box: [-2.5, -2.5, 5, 5],
    svg: p("s", "M -2.5 -2.5 H 2.5 V 2.5 H -2.5 Z M -1.5 0 A 1.5 1.5 0 1 0 1.5 0 A 1.5 1.5 0 1 0 -1.5 0 Z M -0.5 -2.5 L -0.5 2.5 M 0.5 -2.5 L 0.5 2.5"),
    basis: "catalog_svg",
    note_th: "วาดตาม svg_path ในชุดข้อมูล (เต้ารับคู่ในกรอบ 5×5)"
  };
  G["TH.ELEC.RECEPTACLE_3PHASE"] = {
    kind: "point", box: [-2, -2, 4, 4],
    svg: p("s", C2) + "<polygon class='f' points='0,-1.3 1.15,0.7 -1.15,0.7'/>",
    basis: "catalog_svg",
    note_th: "วงกลมตาม svg_path เติมสามเหลี่ยมทึบด้านในตามคำบรรยาย"
  };
  G["TH.ELEC.AC_OUTLET_ISOLATOR"] = {
    kind: "point", box: [-2, -2, 4, 4],
    svg: p("s", "M -2 -2 H 2 V 2 H -2 Z") + tx("AC", 1.8),
    basis: "catalog_svg",
    note_th: "สี่เหลี่ยม 4×4 ตาม svg_path พร้อมอักษร AC สูง 1.8 มม."
  };

  /* ---------- switches / sensors ---------- */
  G["TH.ELEC.SWITCH_1WAY"] = {
    kind: "point", box: [-1, -1.25, 2, 2.5],
    svg: tx("S", 2.5),
    basis: "description",
    note_th: "ใช้อักษร S สูง 2.5 มม. ตามคำบรรยาย (แบบ US)"
  };
  G["TH.ELEC.SWITCH_2WAY"] = {
    kind: "point", box: [-1.4, -1.25, 3, 2.9],
    svg: tx("S", 2.5, -0.4, 0) + tx("3", 1.6, 0.9, 0.8),
    basis: "description",
    note_th: "ใช้อักษร S ห้อย 3 (S₃ แบบ US) สูง 2.5 มม. ตามคำบรรยาย"
  };
  G["TH.ELEC.SWITCH_DIMMER"] = {
    kind: "point", box: [-1.4, -1.25, 3.2, 2.9],
    svg: tx("S", 2.5, -0.4, 0) + tx("D", 1.6, 1.0, 0.8),
    basis: "description",
    note_th: "ใช้อักษร S ห้อย D สูง 2.5 มม. ตามคำบรรยาย"
  };
  G["TH.ELEC.OCCUPANCY_SENSOR"] = {
    kind: "point", box: [-2.5, -2.5, 5, 5],
    svg: p("s", C25) + tx("OS", 1.8),
    basis: "catalog_svg",
    note_th: "วงกลม Ø5 ตาม svg_path พร้อมอักษร OS"
  };

  /* ---------- luminaires ---------- */
  G["TH.ELEC.LUMINAIRE_LINEAR"] = {
    kind: "point", box: [-6, -0.5, 12, 1],
    svg: p("s", "M -6 -0.5 H 6 V 0.5 H -6 Z M -6 0 L 6 0"),
    basis: "catalog_svg",
    note_th: "รูปทรงตาม svg_path (มม.จริง 1200×100) ย่อเป็นมาตราส่วน 1:100 บนกระดาษ ควรวาดตามขนาดโคมจริง"
  };
  G["TH.ELEC.LUMINAIRE_TROFFER"] = {
    kind: "point", box: [-3, -3, 6, 6],
    svg: p("s", "M -3 -3 H 3 V 3 H -3 Z M -3 3 L 3 -3"),
    basis: "catalog_svg",
    note_th: "รูปทรงตาม svg_path (มม.จริง 600×600) ย่อเป็นมาตราส่วน 1:100 บนกระดาษ แบบเส้นทแยง"
  };
  G["TH.ELEC.LUMINAIRE_DOWNLIGHT"] = {
    kind: "point", box: [-3, -3, 6, 6],
    svg: p("s", C3),
    basis: "catalog_svg",
    note_th: "วงกลมโปร่ง Ø6 ตาม svg_path (แบบ LED spot เติมวงกลมทึบเล็กด้านใน)"
  };
  G["TH.ELEC.LUMINAIRE_WALL"] = {
    kind: "point", box: [-2, 0, 4, 2],
    svg: p("f", "M 0 0 L -2 0 A 2 2 0 0 0 0 2 Z") + p("s", "M -2 0 A 2 2 0 0 0 2 0 Z"),
    basis: "proposed",
    note_th: "ครึ่งวงกลม Ø4 (ขนาดสมมติ) ด้านผนังอยู่ที่ y=0 สัญลักษณ์อยู่ด้านล่าง ระบายทึบครึ่งซ้าย"
  };
  G["TH.ELEC.EMERGENCY_LIGHT"] = {
    kind: "point", box: [-4, -2, 8, 4],
    svg: p("s", "M -4 -2 H 4 V 2 H -4 Z") +
      "<polygon class='f' points='-3.4,0 -1.8,-1.1 -1.8,1.1'/><polygon class='f' points='3.4,0 1.8,-1.1 1.8,1.1'/>",
    basis: "catalog_svg",
    note_th: "กรอบ 8×4 ตาม svg_path หัวโคม 2 หัวเป็นสามเหลี่ยมทึบชี้ออก (ขนาดหัวสมมติ)"
  };
  G["TH.ELEC.EXIT_SIGN"] = {
    kind: "point", box: [-4, -2, 8, 4],
    svg: p("s", "M -4 -2 H 4 V 2 H -4 Z") + tx("EXIT", 1.8, 0, 0, true),
    basis: "catalog_svg",
    note_th: "กรอบ 8×4 ตาม svg_path พร้อมอักษร EXIT สูง 1.8 มม."
  };

  /* ---------- panels / boxes ---------- */
  G["TH.ELEC.PANEL_MDB"] = {
    kind: "point", box: [-7, -3, 14, 6],
    svg: "<rect class='f' x='-7' y='-3' width='14' height='6'/>" + p("s", "M -7 -3 H 7 V 3 H -7 Z"),
    basis: "proposed",
    note_th: "สี่เหลี่ยมทึบขนาด 14×6 มม. (ขนาดสมมติ ใหญ่กว่า DB)"
  };
  G["TH.ELEC.PANEL_DB"] = {
    kind: "point", box: [-5, -2, 10, 4],
    svg: "<polygon class='f' points='-5,2 5,-2 5,2'/>" + p("s", "M -5 -2 H 5 V 2 H -5 Z M -5 2 L 5 -2"),
    basis: "catalog_svg",
    note_th: "กรอบ 10×4 และเส้นทแยงตาม svg_path ระบายครึ่งทึบ = ตู้ฝังผนัง"
  };
  G["TH.ELEC.CONSUMER_UNIT"] = {
    kind: "point", box: [-3, -1.5, 6, 3],
    svg: "<rect class='f' x='0' y='-1.5' width='3' height='3'/>" + p("s", "M -3 -1.5 H 3 V 1.5 H -3 Z"),
    basis: "proposed",
    note_th: "สี่เหลี่ยม 6×3 มม. (ขนาดสมมติ) ระบายทึบครึ่งขวา"
  };
  G["TH.ELEC.JUNCTION_BOX"] = {
    kind: "point", box: [-1.5, -1.5, 3, 3],
    svg: p("s", C15) + tx("J", 1.8),
    basis: "catalog_svg",
    note_th: "วงกลม Ø3 ตาม svg_path พร้อมอักษร J"
  };

  /* ---------- wiring ---------- */
  G["TH.ELEC.HOME_RUN"] = {
    kind: "point", box: [-12, -3.6, 12, 5],
    svg: p("f", "M 0 0 L -3 -1 L -3 1 Z") +
      p("s", "M -3 0 L -12 0 M -6 -0.8 L -6 0.8 M -7 -0.8 L -7 0.8 M -8 -1.3 L -8 1.3") +
      tx("LP-1/3,5", 1.8, -6.5, -2.6),
    basis: "catalog_svg",
    note_th: "หัวลูกศรทึบตาม svg_path ปลายลูกศรที่จุดแทรก ชี้ไปทางตู้ เส้นขีดสั้น=เฟส ยาว=นิวทรัล (แบบ US) และรหัสวงจรตัวอย่าง"
  };
  G["TH.ELEC.WIRING_CONCEALED"] = {
    kind: "line", box: [-15, -3, 30, 3.5],
    svg: p("s", "M -15 0 Q 0 -5 15 0"),
    line: { weight: 0.25, dash: null, label: null, labelEvery: 40, double: 0, arrow: false },
    basis: "description",
    note_th: "เส้นทึบโค้งตามคำบรรยาย ความหนาเส้นเป็นค่าสมมติ"
  };
  G["TH.ELEC.WIRING_UNDERFLOOR"] = {
    kind: "line", box: [-15, -0.5, 30, 1],
    svg: "<path class='s' stroke-dasharray='2 1' d='M -15 0 L 15 0'/>",
    line: { weight: 0.25, dash: "2 1", label: null, labelEvery: 40, double: 0, arrow: false },
    basis: "description",
    note_th: "เส้นประตามคำบรรยาย ระยะขีด 2 มม. เว้น 1 มม. เป็นค่าสมมติ"
  };

  /* ---------- power equipment / SLD ---------- */
  G["TH.ELEC.KWH_METER"] = {
    kind: "point", box: [-3, -3, 6, 6],
    svg: p("s", C3) + tx("kWh", 1.8),
    basis: "catalog_svg",
    note_th: "วงกลม Ø6 ตาม svg_path พร้อมอักษร kWh"
  };
  G["TH.ELEC.TRANSFORMER"] = {
    kind: "point", box: [-2, -4.3, 4, 8.6],
    svg: "<circle class='s' cx='0' cy='-1.3' r='2'/><circle class='s' cx='0' cy='1.3' r='2'/>" +
      p("s", "M 0 -3.3 L 0 -4.3 M 0 3.3 L 0 4.3"),
    basis: "proposed",
    note_th: "วงกลมซ้อนกัน 2 วง Ø4 (ขนาดสมมติ) วางแนวตั้งสำหรับ single line diagram"
  };
  G["TH.ELEC.CIRCUIT_BREAKER"] = {
    kind: "point", box: [-1.8, -4, 2.4, 8],
    svg: p("s", "M 0 4 L 0 1.5 L -1.5 -1.3 M 0 -1.5 L 0 -4 M -0.45 -1.95 L 0.45 -1.05 M -0.45 -1.05 L 0.45 -1.95"),
    basis: "proposed",
    note_th: "แบบ IEC ใบมีดสวิตช์พร้อมเครื่องหมาย × ที่หน้าสัมผัสคงที่ ขนาดสมมติ ยาวรวม 8 มม."
  };
  G["TH.ELEC.ATS"] = {
    kind: "point", box: [-4, -3.5, 8, 7],
    svg: p("s", "M -4 -2 H 4 V 2 H -4 Z M -2 -2 L -2 -3.5 M 2 -2 L 2 -3.5 M 0 2 L 0 3.5") + tx("ATS", 2.5),
    basis: "proposed",
    note_th: "กรอบ 8×4 มม. (ขนาดสมมติ) อักษร ATS สายเข้า 2 เส้นด้านบน สายออก 1 เส้นด้านล่าง"
  };
  G["TH.ELEC.GENERATOR"] = {
    kind: "point", box: [-3, -3, 6, 6],
    svg: p("s", C3) + tx("G", 2.5),
    basis: "proposed",
    note_th: "วงกลม Ø6 (ขนาดสมมติเท่ามอเตอร์) พร้อมอักษร G"
  };
  G["TH.ELEC.CAPACITOR_BANK"] = {
    kind: "point", box: [-2, -2.5, 4, 5],
    svg: p("s", "M 0 -2.5 L 0 -0.5 M 0 0.5 L 0 2.5") + p("sk", "M -2 -0.5 L 2 -0.5 M -2 0.5 L 2 0.5"),
    basis: "proposed",
    note_th: "แผ่นขนาน 2 แผ่นกว้าง 4 มม. ห่าง 1 มม. (ขนาดสมมติ)"
  };
  G["TH.ELEC.MOTOR"] = {
    kind: "point", box: [-3, -3, 6, 6],
    svg: p("s", C3) + tx("M", 2.5),
    basis: "catalog_svg",
    note_th: "วงกลม Ø6 ตาม svg_path พร้อมอักษร M"
  };

  /* ---------- lightning protection / earthing ---------- */
  G["TH.ELEC.AIR_TERMINAL"] = {
    kind: "point", box: [-1.5, -1.5, 3, 3],
    svg: p("s", C15) + "<circle class='f' cx='0' cy='0' r='0.35'/>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø3 ตาม svg_path พร้อมจุดทึบตรงกลางตามคำบรรยาย"
  };
  G["TH.ELEC.AIR_TERMINAL_ESE"] = {
    kind: "point", box: [-3, -3, 6, 6],
    svg: p("s", C3) + "<circle class='f' cx='0' cy='0' r='0.4'/>" +
      p("st", "M 0.9 0 L 2.4 0 M 0.636 0.636 L 1.697 1.697 M 0 0.9 L 0 2.4 M -0.636 0.636 L -1.697 1.697 M -0.9 0 L -2.4 0 M -0.636 -0.636 L -1.697 -1.697 M 0 -0.9 L 0 -2.4 M 0.636 -0.636 L 1.697 -1.697"),
    basis: "catalog_svg",
    note_th: "วงกลม Ø6 ตาม svg_path พร้อมเส้นแผ่รัศมี 8 เส้น (ESE ตาม NF C 17-102 ไม่ใช่ IEC)"
  };
  G["TH.ELEC.ROOF_CONDUCTOR"] = {
    kind: "line", box: [-15, -1, 30, 2],
    svg: p("sk", "M -15 0 L 15 0") +
      p("s", "M -10.6 -0.6 L -9.4 0.6 M -10.6 0.6 L -9.4 -0.6 M -0.6 -0.6 L 0.6 0.6 M -0.6 0.6 L 0.6 -0.6 M 9.4 -0.6 L 10.6 0.6 M 9.4 0.6 L 10.6 -0.6"),
    line: { weight: 0.5, dash: null, label: "×", labelEvery: 10, double: 0, arrow: false },
    basis: "description",
    note_th: "เส้นหนาพร้อมเครื่องหมาย × เป็นระยะตามคำบรรยาย ระยะห่าง 10 มม. เป็นค่าสมมติ"
  };
  G["TH.ELEC.DOWN_CONDUCTOR"] = {
    kind: "point", box: [-1.5, -1.5, 3, 6],
    svg: p("s", C15 + " M 0 1.5 L 0 3.3") + "<circle class='f' cx='0' cy='0' r='0.35'/>" +
      "<polygon class='f' points='0,4.5 -0.6,3.2 0.6,3.2'/>",
    basis: "proposed",
    note_th: "วงกลม Ø3 ที่ตำแหน่งตัวนำลง พร้อมลูกศรชี้ลง (ขนาดและทิศลูกศรสมมติ)"
  };
  G["TH.ELEC.TEST_JOINT"] = {
    kind: "point", box: [-2, -2, 4, 4],
    svg: p("s", "M -2 -2 H 2 V 2 H -2 Z") + tx("TJ", 1.8),
    basis: "proposed",
    note_th: "สี่เหลี่ยมเล็ก 4×4 มม. (ขนาดสมมติ) พร้อมอักษร TJ"
  };
  G["TH.ELEC.GROUND_ROD"] = {
    kind: "point", box: [-2, -2, 4, 4],
    svg: p("s", "M -2 0 A 2 2 0 1 0 2 0 A 2 2 0 1 0 -2 0 Z M -2 0 L 2 0 M 0 -2 L 0 2"),
    basis: "catalog_svg",
    note_th: "วาดตาม svg_path ในชุดข้อมูล (วงกลม Ø4 กากบาทตั้ง)"
  };
  G["TH.ELEC.GROUND_PIT"] = {
    kind: "point", box: [-3, -3, 6, 6],
    svg: p("s", "M -3 -3 H 3 V 3 H -3 Z M -2 0 A 2 2 0 1 0 2 0 A 2 2 0 1 0 -2 0 Z M -2 0 L 2 0 M 0 -2 L 0 2"),
    basis: "proposed",
    note_th: "สี่เหลี่ยม 6×6 มม. (ขนาดสมมติ) ล้อมสัญลักษณ์หลักดิน"
  };
  G["TH.ELEC.MAIN_GROUND_BUSBAR"] = {
    kind: "point", box: [-6, -0.6, 12, 1.2],
    svg: "<rect class='f' x='-6' y='-0.6' width='12' height='1.2'/>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมยาวบางทึบ 12×1.2 มม. (ขนาดสมมติ)"
  };
  G["TH.ELEC.EQUIPOTENTIAL_BOND"] = {
    kind: "line", box: [-15, -0.6, 30, 1.2],
    svg: "<path class='s' stroke-dasharray='2 1' d='M -15 0 L 15 0'/>" +
      "<circle class='f' cx='-14.4' cy='0' r='0.5'/><circle class='f' cx='14.4' cy='0' r='0.5'/>",
    line: { weight: 0.25, dash: "2 1", label: null, labelEvery: 40, double: 0, arrow: false },
    basis: "description",
    note_th: "เส้นประพร้อมจุดทึบที่ปลายแต่ละจุดต่อประสาน ระยะขีดเป็นค่าสมมติ"
  };

  /* ---------- ELV ---------- */
  G["TH.ELV.TELEPHONE_OUTLET"] = {
    kind: "point", box: [-2, -3.464, 4, 3.464],
    svg: p("f", "M -2 0 L 2 0 L 0 -3.464 Z"),
    basis: "catalog_svg",
    note_th: "สามเหลี่ยมทึบด้าน 4 มม. ตาม svg_path จุดแทรกที่กึ่งกลางฐานบนแนวผนัง สามเหลี่ยมอยู่เหนือ y=0"
  };
  G["TH.ELV.DATA_OUTLET"] = {
    kind: "point", box: [-2.5, -4.33, 5, 4.33],
    svg: p("s", "M -2.5 0 L 2.5 0 L 0 -4.33 Z") + tx("D", 1.8, 0, -1.4),
    basis: "proposed",
    note_th: "สามเหลี่ยมโปร่งด้าน 5 มม. (ขนาดสมมติ) ฐานที่แนวผนัง y=0 แบบเดียวกับเต้ารับโทรศัพท์ พร้อมอักษร D"
  };
  G["TH.ELV.TV_OUTLET"] = {
    kind: "point", box: [-2, -2, 4, 4],
    svg: p("s", C2) + tx("TV", 1.6),
    basis: "catalog_svg",
    note_th: "วงกลม Ø4 ตาม svg_path อักษร TV (ลดเป็น 1.6 มม. ให้พอดีวงกลม)"
  };
  G["TH.ELV.CCTV_CAMERA"] = {
    kind: "point", box: [-3, -1.5, 7.5, 3],
    svg: p("s", "M -3 -1.5 H 3 V 1.5 H -3 Z M 3 -0.7 L 4.5 -1.5 L 4.5 1.5 L 3 0.7"),
    basis: "catalog_svg",
    note_th: "ตัวกล้อง 6×3 ตาม svg_path เลนส์คางหมูด้านขวาขนาดสมมติ"
  };
  G["TH.ELV.SPEAKER"] = {
    kind: "point", box: [-2.5, -2.5, 5, 5],
    svg: p("s", C25) + tx("S", 2.5),
    basis: "catalog_svg",
    note_th: "วงกลม Ø5 ตาม svg_path พร้อมอักษร S"
  };
  G["TH.ELV.ACCESS_CONTROL"] = {
    kind: "point", box: [-2, -2, 4, 4],
    svg: p("s", "M -2 -2 H 2 V 2 H -2 Z") + tx("CR", 1.8),
    basis: "catalog_svg",
    note_th: "สี่เหลี่ยม 4×4 ตาม svg_path อักษร CR (เครื่องอ่านบัตร) ใช้ DC/EB/EM สำหรับอุปกรณ์อื่น"
  };
  G["TH.ELV.WIFI_AP"] = {
    kind: "point", box: [-2.5, -2.5, 5, 5],
    svg: p("s", C25) + tx("AP", 1.8),
    basis: "proposed",
    note_th: "วงกลม Ø5 (ขนาดสมมติ) พร้อมอักษร AP"
  };
  G["TH.ELV.RACK"] = {
    kind: "point", box: [-5, -2.5, 10, 5],
    svg: p("st", "M -5 -1 L -3.5 -2.5 M -5 0.5 L -2 -2.5 M -5 2 L -0.5 -2.5 M -4 2.5 L 1 -2.5 M -2.5 2.5 L 2.5 -2.5 M -1 2.5 L 4 -2.5 M 0.5 2.5 L 5 -2 M 2 2.5 L 5 -0.5 M 3.5 2.5 L 5 1") +
      p("s", "M -5 -2.5 H 5 V 2.5 H -5 Z"),
    basis: "proposed",
    note_th: "สี่เหลี่ยม 10×5 มม. (ขนาดสมมติ) แรเงาเส้นเฉียง 45°"
  };
  G["TH.ELV.NURSE_CALL"] = {
    kind: "point", box: [-2.5, -2.5, 5, 5],
    svg: p("s", C25) + tx("NC", 1.8),
    basis: "proposed",
    note_th: "วงกลม Ø5 (ขนาดสมมติ) พร้อมอักษร NC"
  };

  /* ---------- IEC 60617 installation symbols ---------- */
  G["INTL.ELEC.PUSH_BUTTON"] = {
    kind: "point", box: [-1.5, -1.5, 3, 3],
    svg: p("s", C15),
    basis: "proposed",
    note_th: "วงกลมโปร่ง Ø3 (รูปและขนาดสมมติ ยังไม่ได้ตรวจกับ IEC 60617 S00475)"
  };
  G["INTL.ELEC.PUSH_BUTTON_PROTECTED"] = {
    kind: "point", box: [-2.3, -2.3, 4.6, 4.6],
    svg: p("s", C15) + "<circle class='s' cx='0' cy='0' r='2.3'/>",
    basis: "proposed",
    note_th: "วงกลมปุ่มกดล้อมด้วยวงกลมป้องกัน (รูปสมมติ ยังไม่ได้ตรวจกับ IEC 60617 S00477)"
  };
  G["INTL.ELEC.PULL_CORD_SWITCH"] = {
    kind: "point", box: [-0.75, -3.6, 5.4, 4.4],
    svg: p("s", "M -0.75 0 A 0.75 0.75 0 1 0 0.75 0 A 0.75 0.75 0 1 0 -0.75 0 Z M 0.53 -0.53 L 3.36 -3.36 L 4.07 -2.65 L 4.07 -0.2") +
      "<polygon class='f' points='4.07,0.8 3.62,-0.3 4.52,-0.3'/>",
    basis: "proposed",
    note_th: "สวิตช์ทางเดียวแบบ IEC (วงกลม Ø1.5 เส้น 45° ยาว 4 มม. มีขีดปลาย) เพิ่มเชือกดึงพร้อมลูกศรลง (รูปสมมติ ยังไม่ได้ตรวจกับ S00474)"
  };
  G["INTL.ELEC.REFERENCE_DESIGNATION"] = {
    kind: "text", box: [-2.25, -1.25, 4.5, 2.5],
    samples: ["=A1", "-Q1", "+R101"],
    basis: "description",
    note_th: "ข้อความรหัสอ้างอิง IEC 81346 ตัวอย่างจาก notation_grammar ความสูงอักษร 2.5 มม. เป็นค่าสมมติ"
  };
})(window.TBIM_GLYPHS = window.TBIM_GLYPHS || {});
