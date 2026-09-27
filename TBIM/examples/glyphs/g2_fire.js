/* TBIM glyphs, group g2_fire: fire alarm, fire protection, gas, ISA instrument, evacuation plan.
   Paper mm, y down, insertion point (0,0). See CONTRACT.md. */
(function (G) {
  var CIRC3 = "M -3 0 A 3 3 0 1 0 3 0 A 3 3 0 1 0 -3 0 Z";
  var SPR = "M -1.5 0 A 1.5 1.5 0 1 0 1.5 0 A 1.5 1.5 0 1 0 -1.5 0 Z";

  /* ---------------- Fire alarm (TH.FA) ---------------- */

  G["TH.FA.SMOKE_DETECTOR"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='" + CIRC3 + "'/><text class='tx' x='0' y='0' font-size='2.5'>S</text>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø6 ตาม svg_path พร้อมอักษร S สูง 2.5 มม. ตาม glyph_text (ชนิดโฟโตอิเล็กทริกอาจใช้ P)"
  };

  G["TH.FA.HEAT_DETECTOR"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='" + CIRC3 + "'/><text class='tx' x='0' y='0' font-size='2.5'>H</text>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø6 ตาม svg_path พร้อมอักษร H (ชนิดอุณหภูมิคงที่ใช้ F ชนิดอัตราเพิ่มใช้ R)"
  };

  G["TH.FA.BEAM_DETECTOR"] = {
    kind: "point",
    box: [-9, -2, 18, 4],
    svg: "<path class='s' d='M -9 -2 H -5 V 2 H -9 Z'/><text class='tx' x='-7' y='0' font-size='1.8'>T</text>" +
      "<path class='s' d='M 5 -2 H 9 V 2 H 5 Z'/><text class='tx' x='7' y='0' font-size='1.8'>R</text>" +
      "<path class='st' d='M -5 0 H 4' stroke-dasharray='1 0.6'/><path class='f' d='M 5 0 L 3.6 -0.6 L 3.6 0.6 Z'/>",
    basis: "proposed",
    note_th: "กล่องตัวส่ง (T) และตัวรับ (R) ขนาด 4×4 มม. ต่อด้วยเส้นประมีหัวลูกศร ขนาดกำหนดเอง จุดแทรกอยู่กึ่งกลางระหว่างสองกล่อง"
  };

  G["TH.FA.FLAME_DETECTOR"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='" + CIRC3 + "'/><text class='tx' x='-0.9' y='0' font-size='2.5'>F</text>" +
      "<path class='f' d='M 1.3 1.4 C 0.5 1.4 0.3 0.4 0.8 -0.3 C 0.9 0.1 1.1 0.3 1.3 0.3 C 1.2 -0.4 1.4 -1.1 1.7 -1.4 C 1.8 -0.6 2.3 -0.1 2.2 0.5 C 2.2 1 1.8 1.4 1.3 1.4 Z'/>",
    basis: "proposed",
    note_th: "วงกลมมีอักษร F และรูปเปลวไฟตามคำอธิบาย ขนาด Ø6 มม. กำหนดเองให้เท่ากับอุปกรณ์ตรวจจับอื่น"
  };

  G["TH.FA.GAS_DETECTOR"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='" + CIRC3 + "'/><text class='tx' x='0' y='0' font-size='2.5'>G</text>",
    basis: "proposed",
    note_th: "วงกลมมีอักษร G ตามคำอธิบาย ขนาด Ø6 มม. กำหนดเองให้เท่ากับอุปกรณ์ตรวจจับควัน"
  };

  G["TH.FA.DUCT_SMOKE_DETECTOR"] = {
    kind: "point",
    box: [-6, -3, 12, 6],
    svg: "<path class='st' d='M -6 -3 H 6 M -6 3 H 6'/>" +
      "<path class='s' d='M -2 -2 H 2 V 2 H -2 Z'/><text class='tx' x='0' y='0' font-size='1.8'>SD</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 4×4 มม. มีอักษร SD วางในท่อลม เส้นผนังท่อบางสองเส้นแสดงเพื่อบอกตำแหน่งเท่านั้น ขนาดกำหนดเอง"
  };

  G["TH.FA.MANUAL_STATION"] = {
    kind: "point",
    box: [-2.5, -2.5, 5, 5],
    svg: "<path class='s' d='M -2.5 -2.5 H 2.5 V 2.5 H -2.5 Z'/><text class='tx' x='0' y='0' font-size='2.5'>F</text>",
    basis: "catalog_svg",
    note_th: "สี่เหลี่ยม 5×5 ตาม svg_path พร้อมอักษร F (อาจใช้ MS แทน)"
  };

  G["TH.FA.BELL"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='" + CIRC3 + "'/><text class='tx' x='0' y='0' font-size='2.5'>B</text>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø6 ตาม svg_path พร้อมอักษร B จุดแทรกที่กึ่งกลางตาม insertion_note (ติดผนังให้วางสัมผัสแนวผนัง)"
  };

  G["TH.FA.HORN_STROBE"] = {
    kind: "point",
    box: [-3.5, -2.5, 7, 5],
    svg: "<path class='s' d='M -3.5 -2.5 H 3.5 V 2.5 H -3.5 Z'/><text class='tx' x='-1.3' y='0' font-size='2.5'>H</text>" +
      "<path class='s' d='M 2.4 -1.8 L 1 0.2 L 2.4 0.2 L 1.1 1.9'/>",
    basis: "proposed",
    note_th: "เลือกแบบสี่เหลี่ยมมีอักษร H และสายฟ้าแทนแฟลช (อีกแบบคือสามเหลี่ยม HS) ขนาด 7×5 มม. กำหนดเอง"
  };

  G["TH.FA.CONTROL_PANEL"] = {
    kind: "point",
    box: [-6, -2.5, 12, 5],
    svg: "<path class='s' d='M -6 -2.5 H 6 V 2.5 H -6 Z'/><text class='tx' x='0' y='0' font-size='2.5'>FACP</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมผืนผ้ามีอักษร FACP ตามคำอธิบาย ขนาด 12×5 มม. กำหนดเองให้พอดีตัวอักษร"
  };

  G["TH.FA.ANNUNCIATOR"] = {
    kind: "point",
    box: [-5, -2.5, 10, 5],
    svg: "<path class='s' d='M -5 -2.5 H 5 V 2.5 H -5 Z'/><text class='tx' x='0' y='0' font-size='2.5'>ANN</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมผืนผ้ามีอักษร ANN (หรือ GA) ขนาด 10×5 มม. กำหนดเอง"
  };

  G["TH.FA.EOL_DEVICE"] = {
    kind: "point",
    box: [-2.75, -1.4, 5.5, 2.8],
    svg: "<path class='s' d='M -2.75 -1.4 H 2.75 V 1.4 H -2.75 Z'/><text class='tx' x='0' y='0' font-size='1.8'>EOL</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยมเล็กมีอักษร EOL สูง 1.8 มม. ตาม glyph_text ขนาดกรอบ 5.5×2.8 มม. กำหนดเอง"
  };

  G["TH.FA.FLOW_TAMPER_INTERFACE"] = {
    kind: "point",
    box: [-2, -2, 4, 4],
    svg: "<path class='s' d='M -2 -2 H 2 V 2 H -2 Z'/><text class='tx' x='0' y='0' font-size='1.8'>FS</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 4×4 มม. มีอักษร FS (เปลี่ยนเป็น TS สำหรับสวิตช์ตรวจวาล์ว) ขนาดกำหนดเอง"
  };

  G["TH.FA.FIRE_TELEPHONE"] = {
    kind: "point",
    box: [-3, -3, 6, 5.2],
    svg: "<path class='s' d='M 0 -3 L 3 2.2 L -3 2.2 Z'/><text class='tx' x='0' y='0.9' font-size='1.8'>FT</text>",
    basis: "proposed",
    note_th: "สามเหลี่ยมมีอักษร FT สูง 1.8 มม. ตาม glyph_text ขนาดฐาน 6 มม. กำหนดเอง"
  };

  /* ---------------- Fire protection (TH.FP) ---------------- */

  G["TH.FP.FIRE_MAIN_LINE"] = {
    kind: "line",
    box: [-15, -1.5, 30, 3],
    svg: "<path class='sk' d='M -15 0 H -2.5 M 2.5 0 H 15'/><text class='tx' x='0' y='0' font-size='2.5'>FP</text>",
    line: { weight: 0.5, dash: null, label: "FP", labelEvery: 40, double: 0, arrow: false },
    basis: "description",
    note_th: "เส้นต่อเนื่องมีอักษร FP แทรกเป็นระยะตาม line_pattern ความหนา 0.5 มม. กำหนดเอง"
  };

  G["TH.FP.SPRINKLER_PENDENT"] = {
    kind: "point",
    box: [-1.5, -1.5, 3, 3],
    svg: "<path class='s' d='" + SPR + "'/>",
    basis: "catalog_svg",
    note_th: "วงกลมโปร่ง Ø3 ตาม svg_path"
  };

  G["TH.FP.SPRINKLER_UPRIGHT"] = {
    kind: "point",
    box: [-1.5, -1.5, 3, 3],
    svg: "<path class='s' d='" + SPR + "'/><circle class='f' cx='0' cy='0' r='0.5'/>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø3 ตาม svg_path เพิ่มจุดกลางตามคำอธิบาย (บางแบบระบายทึบทั้งวง)"
  };

  G["TH.FP.SPRINKLER_SIDEWALL"] = {
    kind: "point",
    box: [-1.5, 0, 3, 1.5],
    svg: "<path class='s' d='M -1.5 0 A 1.5 1.5 0 0 0 1.5 0 Z'/>",
    basis: "proposed",
    note_th: "ครึ่งวงกลมรัศมี 1.5 มม. (เท่าหัวกระจายน้ำอื่น) ด้านผนังอยู่ที่ y = 0 และตัวสัญลักษณ์อยู่ด้านล่าง ขนาดกำหนดเอง"
  };

  G["TH.FP.FIRE_HOSE_CABINET"] = {
    kind: "point",
    box: [-4, -2, 8, 4],
    svg: "<path class='f' d='M -4 2 L 4 -2 L 4 2 Z'/><path class='s' d='M -4 -2 H 4 V 2 H -4 Z M -4 2 L 4 -2'/>",
    basis: "catalog_svg",
    note_th: "สี่เหลี่ยม 8×4 แบ่งทแยงตาม svg_path ระบายทึบครึ่งล่างขวา (แบบ FHR เพิ่มวงกลมสายม้วนภายใน ไม่ได้วาด)"
  };

  G["TH.FP.FIRE_DEPARTMENT_CONNECTION"] = {
    kind: "point",
    box: [-3.7, -3.7, 7.4, 6.7],
    svg: "<path class='s' d='M 0 3 V 0 L -2 -2 M 0 0 L 2 -2'/>" +
      "<circle class='s' cx='-2.7' cy='-2.7' r='1'/><circle class='s' cx='2.7' cy='-2.7' r='1'/>",
    basis: "proposed",
    note_th: "รูปตัว Y มีวงกลมสองวงที่ปลายหัวรับน้ำ จุดแทรกที่จุดแยก ขนาดกำหนดเอง"
  };

  G["TH.FP.HYDRANT"] = {
    kind: "point",
    box: [-2.5, -2.5, 7, 5],
    svg: "<circle class='s' cx='0' cy='0' r='2.5'/><circle class='f' cx='0' cy='0' r='1.1'/>" +
      "<path class='s' d='M 2.5 0 H 4.5 M 4.5 -1 V 1'/>",
    basis: "proposed",
    note_th: "วงกลมมีจุดทึบกลางและแขนแยกหนึ่งข้าง ตีความแขนเป็นท่อต่อแบบตัว T ขนาด Ø5 มม. กำหนดเอง"
  };

  G["TH.FP.EXTINGUISHER"] = {
    kind: "point",
    box: [-2.5, -2.5, 5, 4.5],
    svg: "<path class='f' d='M 0 -2.5 L 2.5 2 L -2.5 2 Z'/>",
    basis: "proposed",
    note_th: "เลือกแบบสามเหลี่ยมทึบ (อีกแบบคือกรอบสี่เหลี่ยม FE) ต่อท้ายชนิด CO2/ABC เป็นข้อความแยก ขนาดกำหนดเอง"
  };

  G["TH.FP.ALARM_CHECK_VALVE"] = {
    kind: "point",
    box: [-3.5, -3.5, 7, 9.6],
    svg: "<circle class='s' cx='0' cy='0' r='3.5'/><path class='s' d='M -3.5 0 H -2 M 2 0 H 3.5'/>" +
      "<path class='s' d='M -2 -1.2 L 2 1.2 L 2 -1.2 L -2 1.2 Z'/><path class='f' d='M 0 0 L 2 -1.2 L 2 1.2 Z'/>" +
      "<text class='tx' x='0' y='5.1' font-size='1.8'>ACV</text>",
    basis: "proposed",
    note_th: "วาล์วกันกลับแบบโบว์ไท (ครึ่งทึบบอกทิศทางไหล) ในวงกลม Ø7 มม. และอักษร ACV ใต้วงกลม ขนาดกำหนดเอง"
  };

  G["TH.FP.ZONE_CONTROL_VALVE"] = {
    kind: "point",
    box: [-11, -5.2, 22, 10.4],
    svg: "<path class='s' d='M -11 0 H 11'/>" +
      "<path class='bg' d='M -7.5 -1.2 L -4.5 1.2 L -4.5 -1.2 L -7.5 1.2 Z'/><path class='s' d='M -6 0 V -3 M -7 -3 H -5'/>" +
      "<path class='s' d='M -6 1.2 V 1.6'/><path class='bg' d='M -7.6 1.6 H -4.4 V 4.8 H -7.6 Z'/><text class='tx' x='-6' y='3.2' font-size='1.3'>TS</text>" +
      "<path class='bg' d='M -1.6 -1.6 H 1.6 V 1.6 H -1.6 Z'/><text class='tx' x='0' y='0' font-size='1.3'>FS</text>" +
      "<path class='s' d='M 6 0 V 5'/><path class='bg' d='M 5 1.4 L 7 3.4 L 5 3.4 L 7 1.4 Z'/>" +
      "<text class='tx' x='8.6' y='2.4' font-size='1.1'>T&amp;D</text>" +
      "<text class='tx' x='0' y='-3.9' font-size='1.8'>ZCV</text>",
    basis: "proposed",
    note_th: "ชุดประกอบแบบย่อ: วาล์วประตู OS&Y (ก้านและแอก) + TS + FS บนท่อ + วาล์วทดสอบ/ระบายน้ำ (T&D) ขนาดและการจัดวางกำหนดเอง"
  };

  G["TH.FP.FLOW_SWITCH"] = {
    kind: "point",
    box: [-4, -2, 8, 4],
    svg: "<path class='st' d='M -4 0 H -2 M 2 0 H 4'/>" +
      "<path class='bg' d='M -2 -2 H 2 V 2 H -2 Z'/><text class='tx' x='0' y='0' font-size='1.8'>FS</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 4×4 มม. มีอักษร FS วางบนท่อ (เส้นท่อสั้นแสดงแนวท่อเท่านั้น) ขนาดกำหนดเอง"
  };

  G["TH.FP.TAMPER_SWITCH"] = {
    kind: "point",
    box: [-2, -2, 4, 4],
    svg: "<path class='s' d='M -2 -2 H 2 V 2 H -2 Z'/><text class='tx' x='0' y='0' font-size='1.8'>TS</text>",
    basis: "proposed",
    note_th: "สี่เหลี่ยม 4×4 มม. มีอักษร TS สูง 1.8 มม. ตาม glyph_text ขนาดกรอบกำหนดเอง"
  };

  G["TH.FP.FIRE_PUMP"] = {
    kind: "point",
    box: [-4.5, -3, 9, 6],
    svg: "<circle class='s' cx='0' cy='0' r='3'/><path class='s' d='M -4.5 0 H -3 M 0 -3 H 4.5'/>" +
      "<text class='tx' x='0' y='0.3' font-size='2'>FP</text>",
    basis: "proposed",
    note_th: "วงกลมปั๊มมีท่อดูดด้านซ้ายและท่อจ่ายสัมผัสด้านบน อักษร FP (ปั๊มรักษาแรงดันใช้ JP) ขนาด Ø6 มม. กำหนดเอง"
  };

  G["TH.FP.INSPECTOR_TEST_VALVE"] = {
    kind: "point",
    box: [-3.5, -1.2, 7, 5],
    svg: "<path class='s' d='M -3.5 0 H -2 M 2 0 H 3.5'/><path class='s' d='M -2 -1.2 L 2 1.2 L 2 -1.2 L -2 1.2 Z'/>" +
      "<text class='tx' x='0' y='2.8' font-size='1.8'>ITV</text>",
    basis: "proposed",
    note_th: "วาล์วแบบโบว์ไทบนท่อพร้อมอักษร ITV ด้านล่าง ขนาดกำหนดเอง"
  };

  /* ---------------- Gas (TH.GAS) ---------------- */

  G["TH.GAS.GAS_LINE"] = {
    kind: "line",
    box: [-15, -1.25, 30, 2.5],
    svg: "<path class='s' d='M -15 0 H -1.8 M 1.8 0 H 15'/><text class='tx' x='0' y='0' font-size='2.5'>G</text>",
    line: { weight: 0.35, dash: null, label: "G", labelEvery: 40, double: 0, arrow: false },
    basis: "description",
    note_th: "เส้นต่อเนื่องมีอักษร G แทรกเป็นระยะตาม line_pattern (ก๊าซหุงต้มอาจใช้ LPG) ความหนา 0.35 มม. กำหนดเอง"
  };

  G["TH.GAS.GAS_VALVE"] = {
    kind: "point",
    box: [-3.5, -3.8, 7, 5.3],
    svg: "<path class='s' d='M -3.5 0 H -2.5 M 2.5 0 H 3.5'/><path class='s' d='M -2.5 -1.5 L 2.5 1.5 L 2.5 -1.5 L -2.5 1.5 Z'/>" +
      "<text class='tx' x='0' y='-2.8' font-size='1.8'>G</text>",
    basis: "proposed",
    note_th: "วาล์วแบบโบว์ไทบนท่อ มีอักษร G เหนือวาล์ว ขนาดกำหนดเอง"
  };

  G["TH.GAS.REGULATOR"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='" + CIRC3 + "'/><text class='tx' x='0' y='0' font-size='1.8'>REG</text>",
    basis: "proposed",
    note_th: "เลือกแบบวงกลม (อีกแบบคือกรอบสี่เหลี่ยม) มีอักษร REG สูง 1.8 มม. ตาม glyph_text ขนาด Ø6 มม. กำหนดเอง"
  };

  G["TH.GAS.CYLINDER_BANK"] = {
    kind: "point",
    box: [-6, -3.5, 12, 7],
    svg: "<path class='s' d='M -6 -3.5 H 6 V 3.5 H -6 Z'/>" +
      "<circle class='s' cx='-3.5' cy='-1' r='1.5'/><circle class='s' cx='0' cy='-1' r='1.5'/><circle class='s' cx='3.5' cy='-1' r='1.5'/>" +
      "<text class='tx' x='0' y='2.2' font-size='1.6'>LPG</text>",
    basis: "proposed",
    note_th: "กรอบสี่เหลี่ยมล้อมถังก๊าซสามใบ (วงกลม) และอักษร LPG ขนาดและจำนวนถังกำหนดเอง"
  };

  G["TH.GAS.LEAK_DETECTOR"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<path class='s' d='" + CIRC3 + "'/><text class='tx' x='0' y='0' font-size='2.5'>G</text>",
    basis: "proposed",
    note_th: "วงกลมมีอักษร G ตามคำอธิบาย เหมือนอุปกรณ์ตรวจจับแก๊สในระบบแจ้งเหตุ ขนาด Ø6 มม. กำหนดเอง"
  };

  /* ---------------- International ---------------- */

  G["INTL.GENERAL.ISA_INSTRUMENT_BUBBLE"] = {
    kind: "point",
    box: [-4, -4, 8, 8],
    svg: "<circle class='s' cx='0' cy='0' r='4'/>" +
      "<text class='tx' x='0' y='-1.1' font-size='2'>PT</text><text class='tx' x='0' y='1.4' font-size='1.8'>101</text>",
    basis: "proposed",
    note_th: "วงกลมเครื่องมือวัดติดตั้งภาคสนาม (ไม่มีเส้นแบ่ง) ตามที่บันทึกอ้าง ISA-5.1 แสดงแท็กตัวอย่าง PT/101 ขนาด Ø8 มม. กำหนดเอง"
  };

  G["INTL.GENERAL.ISA_SIGNAL_LINES"] = {
    kind: "line",
    box: [-15, -4, 30, 8],
    svg: "<path class='st' d='M -15 -3 H 15'/>" +
      "<path class='st' d='M -10.4 -2.2 L -9.6 -3.8 M -9.6 -2.2 L -8.8 -3.8 M -0.4 -2.2 L 0.4 -3.8 M 0.4 -2.2 L 1.2 -3.8 M 9.6 -2.2 L 10.4 -3.8 M 10.4 -2.2 L 11.2 -3.8'/>" +
      "<path class='st' d='M -15 0 H 15' stroke-dasharray='2 1'/>" +
      "<path class='st' d='M -15 3 H 15'/>" +
      "<circle class='bg' cx='-12' cy='3' r='0.45' stroke-width='0.18'/><circle class='bg' cx='-8' cy='3' r='0.45' stroke-width='0.18'/>" +
      "<circle class='bg' cx='-4' cy='3' r='0.45' stroke-width='0.18'/><circle class='bg' cx='0' cy='3' r='0.45' stroke-width='0.18'/>" +
      "<circle class='bg' cx='4' cy='3' r='0.45' stroke-width='0.18'/><circle class='bg' cx='8' cy='3' r='0.45' stroke-width='0.18'/>" +
      "<circle class='bg' cx='12' cy='3' r='0.45' stroke-width='0.18'/>",
    line: { weight: 0.18, dash: "2 1", label: null, labelEvery: 40, double: 0, arrow: false },
    basis: "description",
    note_th: "ตัวอย่างสามแถว: ลมมีขีดทแยงคู่ / ไฟฟ้าเส้นประ / ข้อมูลซอฟต์แวร์มีวงกลมเล็ก ค่า line ใช้แบบไฟฟ้า (เส้นประ) ระยะขีดและวงกลมกำหนดเอง บันทึกระบุว่าแหล่งรองขัดกันต้องตรวจกับมาตรฐาน"
  };

  G["INTL.FA.EVACUATION_PLAN_VIEWER_POSITION"] = {
    kind: "point",
    box: [-6, -2.6, 12, 9.2],
    svg: "<circle class='s' cx='0' cy='0' r='2.6'/><circle class='f' cx='0' cy='0' r='1.5'/>" +
      "<text class='tx' x='0' y='3.8' font-size='1.6'>คุณอยู่ที่นี่</text><text class='tx' x='0' y='5.8' font-size='1.1'>YOU ARE HERE</text>",
    basis: "proposed",
    note_th: "จุดทึบในวงแหวนพร้อมข้อความ คุณอยู่ที่นี่ รูปและขนาดกำหนดเองทั้งหมด (บันทึกอ้าง ISO 23601 แต่ไม่ได้ให้รูป และไม่ใช้สีตามข้อกำหนดของหน้า)"
  };
})(window.TBIM_GLYPHS = window.TBIM_GLYPHS || {});
