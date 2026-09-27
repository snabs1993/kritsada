(function (G) {
  // ---------------------------------------------------------------- ARCH reference markers
  G["TH.ARCH.SECTION_MARK"] = {
    kind: "point",
    box: [-5, -5, 10, 10],
    svg: "<path class='s' d='M -5 0 A 5 5 0 1 0 5 0 A 5 5 0 1 0 -5 0 Z M -5 0 L 5 0'/>" +
      "<text class='tx' x='0' y='-2.3' font-size='2.5' font-weight='700'>A</text>" +
      "<text class='tx' x='0' y='2.4' font-size='2'>A-05</text>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø10 ตาม svg_path บนเป็นหมายเลขรูปตัด ล่างเป็นเลขแผ่น ไม่วาดลูกศรทิศทางเพราะรูปทรงยังไม่ยืนยัน"
  };

  G["TH.ARCH.DETAIL_CALLOUT"] = {
    kind: "point",
    box: [-5, -5, 10, 10],
    svg: "<path class='s' d='M -5 0 A 5 5 0 1 0 5 0 A 5 5 0 1 0 -5 0 Z M -5 0 L 5 0'/>" +
      "<text class='tx' x='0' y='-2.3' font-size='2.5' font-weight='700'>1</text>" +
      "<text class='tx' x='0' y='2.4' font-size='2'>A-00</text>",
    basis: "catalog_svg",
    note_th: "วงกลม Ø10 ตาม svg_path บนเป็นหมายเลขแบบขยาย ล่างเป็นเลขแผ่น กรอบล้อมบริเวณขยายวาดแยกต่อกรณี"
  };

  G["TH.ARCH.ELEVATION_MARK"] = {
    kind: "point",
    box: [-6.5, -6.5, 13, 13],
    svg: "<polygon class='s' points='0,-6.5 6.5,0 0,6.5 -6.5,0'/>" +
      "<circle class='bg' cx='0' cy='0' r='4'/>" +
      "<path class='st' d='M -2.83 -2.83 L 2.83 2.83 M 2.83 -2.83 L -2.83 2.83'/>" +
      "<text class='tx' x='0' y='-2.3' font-size='1.8'>1</text>" +
      "<text class='tx' x='2.3' y='0' font-size='1.8'>2</text>" +
      "<text class='tx' x='0' y='2.3' font-size='1.8'>3</text>" +
      "<text class='tx' x='-2.3' y='0' font-size='1.8'>4</text>",
    basis: "proposed",
    note_th: "เสนอรูปวงกลม Ø8 ในสี่เหลี่ยมข้าวหลามตัด แบ่งสี่ส่วนเลข 1–4 เพราะแหล่งไทยเห็นเฉพาะข้อความ เลขแผ่นใส่ต่อกรณี"
  };

  // ---------------------------------------------------------------- ARCH tags / levels
  G["TH.ARCH.ROOM_TAG"] = {
    kind: "point",
    box: [-7, -4.5, 14, 9],
    svg: "<text class='tx' x='0' y='-2.9' font-size='2.5' font-weight='700'>ห้องนอน</text>" +
      "<text class='tx' x='0' y='0.3' font-size='2'>F1,C1</text>" +
      "<text class='tx' x='0' y='3.2' font-size='2'>+0.00</text>",
    basis: "description",
    note_th: "ข้อความสามบรรทัด ชื่อห้อง / F#,C# / ระดับพื้น ตามคำอธิบาย ไม่มีกรอบ ขนาดตัวอักษร 2.5/2 มม. เป็นค่าที่เสนอ"
  };

  G["TH.ARCH.FINISH_CODE_TAG"] = {
    kind: "point",
    box: [-4.5, -1.5, 9, 3],
    svg: "<text class='tx' x='0' y='0' font-size='2.5'>F1,C1</text>",
    basis: "description",
    note_th: "ข้อความ F#,C# ไม่มีกรอบตามคำอธิบาย ความสูงตัวอักษร 2.5 มม. เป็นค่าที่เสนอ"
  };

  G["TH.ARCH.FLOOR_LEVEL_PLAN"] = {
    kind: "text",
    samples: ["+0.00", "+0.15", "+0.20"],
    box: [-4, -1.25, 8, 2.5],
    basis: "description",
    note_th: "ข้อความค่าระดับมีเครื่องหมายเสมอ ไม่วาดกรอบ/สามเหลี่ยมเพราะยังไม่ยืนยัน ความสูง 2.5 มม. เป็นค่าที่เสนอ"
  };

  G["TH.ARCH.LEVEL_MARK"] = {
    kind: "text",
    samples: ["EL. +0.00", "+3.70", "ระดับพื้นชั้น +0.20", "ระดับหลังคาน +3.70", "+8.57"],
    svg: "<path class='s' d='M -8 1.8 L 8 1.8'/>",
    box: [-8, -1.5, 16, 3.6],
    basis: "description",
    note_th: "ข้อความระดับมีคำนำหน้าวางบนเส้นระดับตามคำอธิบาย ไม่วาดสามเหลี่ยมเพราะยังไม่ยืนยัน"
  };

  G["TH.ARCH.STAIR_ARROW"] = {
    kind: "line",
    svg: "<circle class='f' cx='-15' cy='0' r='0.6'/>" +
      "<path class='s' d='M -15 0 L 13.5 0'/>" +
      "<polygon class='f' points='15,0 12.5,-0.8 12.5,0.8'/>" +
      "<text class='tx' x='-8' y='-1.6' font-size='2'>ขึ้น</text>",
    line: { weight: 0.25, dash: null, label: "ขึ้น", labelEvery: 1000, double: 0, arrow: true },
    box: [-15.6, -2.8, 30.6, 3.6],
    basis: "description",
    note_th: "เส้นกึ่งกลางบันไดมีจุดเริ่มและหัวลูกศรที่ปลาย พร้อมคำว่า ขึ้น ตามคำอธิบาย (จุดเริ่มเป็นการเสนอ)"
  };

  G["TH.ARCH.PLASTER_GROOVE_LINE"] = {
    kind: "line",
    svg: "<path class='st' d='M -15 0 L 15 0'/>",
    line: { weight: 0.18, dash: null, label: null, labelEvery: 40, double: 0, arrow: false },
    box: [-15, -0.5, 30, 1],
    basis: "proposed",
    note_th: "เสนอเส้นบางต่อเนื่อง เพราะร่องกว้าง 1 ซม. ที่ 1:50 เหลือ 0.2 มม. และแหล่งไม่ระบุรูปแบบเส้น"
  };

  G["TH.ARCH.DOOR_TAG"] = {
    kind: "point",
    box: [-3, -3, 6, 6],
    svg: "<circle class='bg' cx='0' cy='0' r='3'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>D1</text>",
    basis: "proposed",
    note_th: "เสนอกรอบวงกลม Ø6 เพราะรูปกรอบยังไม่ยืนยัน ใช้ ป1 แทน D1 ได้"
  };

  G["TH.ARCH.WINDOW_TAG"] = {
    kind: "point",
    box: [-3.5, -2.5, 7, 5],
    svg: "<rect class='bg' x='-3.5' y='-2.5' width='7' height='5' rx='2.5' ry='2.5'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>W1</text>",
    basis: "proposed",
    note_th: "เสนอกรอบมนหัวท้าย 7×5 มม. เพื่อแยกจากป้ายประตู เพราะรูปกรอบยังไม่ยืนยัน ใช้ น1 แทน W1 ได้"
  };

  // ---------------------------------------------------------------- doors / windows (1:50, wall 4 mm)
  G["TH.ARCH.DOOR_HINGED"] = {
    kind: "point",
    box: [-13, -2, 26, 22],
    svg: "<path class='sk' d='M -13 -2 L -9 -2 L -9 2 L -13 2 M 13 -2 L 9 -2 L 9 2 L 13 2'/>" +
      "<path class='sk' d='M -9 2 L -9 20'/>" +
      "<path class='st' d='M -9 20 A 18 18 0 0 0 9 2'/>",
    basis: "proposed",
    note_th: "ประตูกว้าง 0.90 ม. ที่ 1:50 (18 มม.) บานพับซ้าย เปิดเข้าด้านล่าง 90° พร้อมเส้นโค้งวงสวิง ผนังหนา 4 มม. แหล่งไทยไม่ยืนยันรูปแบบ"
  };

  G["TH.ARCH.DOOR_SLIDING"] = {
    kind: "point",
    box: [-13, -2, 26, 6.5],
    svg: "<path class='sk' d='M -13 -2 L -9 -2 L -9 2 L -13 2 M 13 -2 L 9 -2 L 9 2 L 13 2'/>" +
      "<rect class='s' x='-9' y='-1.2' width='9.8' height='0.8'/>" +
      "<rect class='s' x='-0.8' y='0.4' width='9.8' height='0.8'/>" +
      "<path class='st' d='M 1 3.5 L 7 3.5'/>" +
      "<polygon class='f' points='8,3.5 6.6,3 6.6,4'/>",
    basis: "proposed",
    note_th: "ประตูบานเลื่อนสองบานซ้อนในช่อง 0.90 ม. ที่ 1:50 (18 มม.) พร้อมลูกศรทิศเลื่อน ผนังหนา 4 มม. รูปแบบเป็นการเสนอ"
  };

  G["TH.ARCH.WINDOW_CASEMENT"] = {
    kind: "point",
    box: [-16, -14, 32, 16],
    svg: "<path class='sk' d='M -16 -2 L -12 -2 L -12 2 L -16 2 M 16 -2 L 12 -2 L 12 2 L 16 2'/>" +
      "<path class='st' d='M -12 -2 L 12 -2 M -12 2 L 12 2'/>" +
      "<path class='s' d='M -12 -2 L -12 -14 M 12 -2 L 12 -14'/>" +
      "<path class='st' stroke-dasharray='1 0.6' d='M -12 -14 A 12 12 0 0 1 0 -2 M 12 -14 A 12 12 0 0 0 0 -2'/>",
    basis: "proposed",
    note_th: "หน้าต่าง 1.20 ม. ที่ 1:50 (24 มม.) สองบานเปิดออกด้านบน (ภายนอก) เส้นโค้งประ ผนังหนา 4 มม. รูปแบบเป็นการเสนอ"
  };

  G["TH.ARCH.WINDOW_SLIDING"] = {
    kind: "point",
    box: [-16, -2, 32, 6.5],
    svg: "<path class='sk' d='M -16 -2 L -12 -2 L -12 2 L -16 2 M 16 -2 L 12 -2 L 12 2 L 16 2'/>" +
      "<path class='st' d='M -12 -2 L 12 -2 M -12 2 L 12 2'/>" +
      "<path class='s' d='M -12 -0.6 L 1 -0.6 M -1 0.6 L 12 0.6'/>" +
      "<path class='st' d='M 2 3.5 L 8 3.5'/>" +
      "<polygon class='f' points='9,3.5 7.6,3 7.6,4'/>",
    basis: "proposed",
    note_th: "หน้าต่างบานเลื่อน 1.20 ม. ที่ 1:50 (24 มม.) สองบานซ้อน พร้อมลูกศรทิศเลื่อน ผนังหนา 4 มม. รูปแบบเป็นการเสนอ"
  };

  G["TH.ARCH.WINDOW_AWNING"] = {
    kind: "point",
    box: [-16, -6, 32, 8],
    svg: "<path class='sk' d='M -16 -2 L -12 -2 L -12 2 L -16 2 M 16 -2 L 12 -2 L 12 2 L 16 2'/>" +
      "<path class='st' d='M -12 -2 L 12 -2 M -12 2 L 12 2'/>" +
      "<path class='s' d='M -12 0 L 12 0'/>" +
      "<path class='st' stroke-dasharray='1 0.6' d='M -12 -2 L -12 -6 L 12 -6 L 12 -2'/>",
    basis: "proposed",
    note_th: "หน้าต่างบานกระทุ้ง 1.20 ม. ที่ 1:50 (24 มม.) กระจกกลางผนัง เส้นประแสดงบานที่ยื่นออกภายนอก ผนังหนา 4 มม. รูปแบบเป็นการเสนอ"
  };

  // ---------------------------------------------------------------- wall hatches (tiles in paper mm)
  G["TH.ARCH.HATCH_WALL_RC"] = {
    kind: "hatch",
    hatch: {
      w: 2, h: 2,
      svg: "<path class='st' d='M 0 2 L 2 0'/>" +
        "<circle class='f' cx='0.5' cy='0.5' r='0.15'/>" +
        "<circle class='f' cx='1.5' cy='1.5' r='0.12'/>"
    },
    box: [-6, -4, 12, 8],
    svg: "<rect class='s' x='-6' y='-4' width='12' height='8'/>",
    basis: "proposed",
    note_th: "เสนอเส้นทแยง 45° ระยะ 1.4 มม. ผสมจุดมวลรวมแทนคอนกรีตเสริมเหล็ก เพราะแหล่งไม่ได้บันทึกลาย"
  };

  G["TH.ARCH.HATCH_WALL_CONCRETE_BLOCK"] = {
    kind: "hatch",
    hatch: {
      w: 2, h: 2,
      svg: "<path class='st' d='M 0 2 L 2 0 M 0 0 L 2 2'/>"
    },
    box: [-6, -4, 12, 8],
    svg: "<rect class='s' x='-6' y='-4' width='12' height='8'/>",
    basis: "proposed",
    note_th: "เสนอลายตารางทแยงไขว้ 45° แทนผนังคอนกรีตบล็อก เพราะแหล่งไม่ได้บันทึกลาย"
  };

  G["TH.ARCH.HATCH_WALL_VENT_BLOCK"] = {
    kind: "hatch",
    hatch: {
      w: 2, h: 2,
      svg: "<rect class='st' x='0.5' y='0.5' width='1' height='1'/>"
    },
    box: [-6, -4, 12, 8],
    svg: "<rect class='s' x='-6' y='-4' width='12' height='8'/>",
    basis: "proposed",
    note_th: "เสนอช่องสี่เหลี่ยมเล็กเรียงเป็นตาราง แทนช่องลมของบล็อกช่องลม เพราะแหล่งไม่ได้บันทึกลาย"
  };

  G["TH.ARCH.HATCH_WALL_GYPSUM_PLYWOOD"] = {
    kind: "hatch",
    hatch: {
      w: 2, h: 1,
      svg: "<circle class='f' cx='0.5' cy='0.25' r='0.12'/>" +
        "<circle class='f' cx='1.5' cy='0.75' r='0.12'/>"
    },
    box: [-6, -4, 12, 8],
    svg: "<rect class='s' x='-6' y='-4' width='12' height='8'/>",
    basis: "proposed",
    note_th: "เสนอจุดเล็กโปร่งสลับแถว แทนผนังเบายิปซัม/ไม้อัด เพราะแหล่งไม่ได้บันทึกลาย"
  };

  G["TH.ARCH.HATCH_WALL_BRICK_FULL"] = {
    kind: "hatch",
    hatch: {
      w: 1, h: 1,
      svg: "<path class='st' d='M 0 1 L 1 0'/>"
    },
    box: [-6, -4, 12, 8],
    svg: "<rect class='s' x='-6' y='-4' width='12' height='8'/>",
    basis: "proposed",
    note_th: "เสนอเส้นทแยง 45° ถี่ (ระยะ 0.7 มม.) แทนผนังอิฐเต็มแผ่น เพราะแหล่งไม่ได้บันทึกลาย"
  };

  G["TH.ARCH.HATCH_WALL_BRICK_HALF"] = {
    kind: "hatch",
    hatch: {
      w: 2, h: 2,
      svg: "<path class='st' d='M 0 2 L 2 0'/>"
    },
    box: [-6, -4, 12, 8],
    svg: "<rect class='s' x='-6' y='-4' width='12' height='8'/>",
    basis: "proposed",
    note_th: "เสนอเส้นทแยง 45° ห่าง (ระยะ 1.4 มม.) แทนผนังอิฐครึ่งแผ่น เพราะแหล่งไม่ได้บันทึกลาย"
  };

  // ---------------------------------------------------------------- STR member tags
  G["TH.STR.FOOTING_TAG"] = {
    kind: "point",
    box: [-4, -2.5, 8, 5],
    svg: "<polygon class='bg' points='-4,0 -2.5,-2.5 2.5,-2.5 4,0 2.5,2.5 -2.5,2.5'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>F1</text>",
    basis: "description",
    note_th: "ข้อความ F# ในกรอบหกเหลี่ยมตามคำอธิบาย ขนาด 8×5 มม. เป็นค่าที่เสนอ"
  };

  G["TH.STR.COLUMN_TAG"] = {
    kind: "point",
    box: [-2.5, -2.5, 5, 5],
    svg: "<rect class='bg' x='-2.5' y='-2.5' width='5' height='5'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>C1</text>",
    basis: "proposed",
    note_th: "เสนอกรอบสี่เหลี่ยมจัตุรัส 5 มม. เพราะแหล่งระบุว่ากรอบยังไม่ยืนยัน"
  };

  G["TH.STR.GROUND_BEAM_TAG"] = {
    kind: "point",
    box: [-4, -2, 8, 4],
    svg: "<rect class='bg' x='-4' y='-2' width='8' height='4'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>GB1</text>",
    basis: "proposed",
    note_th: "เสนอกรอบสี่เหลี่ยม 8×4 มม. วางตามแนวคาน เพราะแหล่งระบุเพียงข้อความ GB#"
  };

  G["TH.STR.BEAM_TAG"] = {
    kind: "point",
    box: [-3.5, -2, 7, 4],
    svg: "<rect class='bg' x='-3.5' y='-2' width='7' height='4'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>B1</text>",
    basis: "proposed",
    note_th: "เสนอกรอบสี่เหลี่ยม 7×4 มม. วางตามแนวคาน เพราะแหล่งระบุเพียงข้อความ B#"
  };

  G["TH.STR.STEEL_BEAM_TAG"] = {
    kind: "point",
    box: [-4, -2, 8, 4],
    svg: "<rect class='bg' x='-4' y='-2' width='8' height='4'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>SB1</text>",
    basis: "proposed",
    note_th: "เสนอกรอบสี่เหลี่ยม 8×4 มม. วางตามแนวคาน เพราะแหล่งระบุเพียงข้อความ SB#"
  };

  G["TH.STR.SLAB_TAG"] = {
    kind: "point",
    box: [-4, -2.6, 8, 5.2],
    svg: "<ellipse class='bg' cx='0' cy='0' rx='4' ry='2.6'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>S1</text>",
    basis: "description",
    note_th: "ข้อความ S# ในวงรีตามคำอธิบาย (แนวปฏิบัติที่ยังไม่ยืนยัน) ขนาด 8×5.2 มม. เป็นค่าที่เสนอ"
  };

  G["TH.STR.STAIR_TAG"] = {
    kind: "point",
    box: [-4, -2, 8, 4],
    svg: "<rect class='bg' x='-4' y='-2' width='8' height='4'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>ST1</text>",
    basis: "proposed",
    note_th: "เสนอกรอบสี่เหลี่ยม 8×4 มม. เพราะแหล่งระบุเพียงข้อความ ST#"
  };

  G["TH.STR.PILE_MARK"] = {
    kind: "point",
    box: [-1.5, -4, 7.5, 5.5],
    svg: "<circle class='s' cx='0' cy='0' r='1.5'/>" +
      "<path class='st' d='M -1.5 0 L 1.5 0 M 0 -1.5 L 0 1.5'/>" +
      "<text class='tx' x='4' y='-2.6' font-size='2'>P1</text>",
    basis: "description",
    note_th: "วงกลมเล็ก Ø3 ที่ตำแหน่งเสาเข็มพร้อมข้อความ P# ตามคำอธิบาย ศูนย์กลางเข็มอยู่ที่จุดแทรก ขนาดเป็นค่าที่เสนอ"
  };

  G["TH.STR.WALL_TAG"] = {
    kind: "point",
    box: [-3.5, -2, 7, 4],
    svg: "<rect class='bg' x='-3.5' y='-2' width='7' height='4'/>" +
      "<text class='tx' x='0' y='0' font-size='2.2'>W1</text>",
    basis: "proposed",
    note_th: "เสนอกรอบสี่เหลี่ยม 7×4 มม. เพราะแหล่งระบุเพียงข้อความ W#/RW# (ระวังซ้ำกับป้ายหน้าต่าง)"
  };

  // ---------------------------------------------------------------- STR notations
  G["TH.STR.REBAR_CALLOUT"] = {
    kind: "text",
    samples: ["4-DB16", "10-DB12", "RB9@0.20", "DB12@0.15 ม.", "RB9@15 ซม."],
    svg: "<path class='st' d='M 4.8 1.6 L -4.8 1.6 L -8.5 5.5'/>" +
      "<circle class='f' cx='-8.5' cy='5.5' r='0.45'/>",
    box: [-9, -1.25, 13.8, 7.2],
    basis: "description",
    note_th: "ข้อความเหล็กเสริมพร้อมเส้นชี้ไปยังเหล็ก ปลายเป็นจุด ตามคำอธิบาย ความสูง 2.5 มม. และรูปเส้นชี้เป็นค่าที่เสนอ"
  };

  G["TH.STR.STIRRUP_CALLOUT"] = {
    kind: "text",
    samples: ["ป-RB6@0.15", "ป-RB9@0.20", "ปลอก RB9@0.15"],
    svg: "<path class='st' d='M 7.2 1.6 L -6.5 1.6 L -9.5 5'/>" +
      "<polygon class='f' points='-10.2,5.8 -9.9,4.5 -9,5.3'/>",
    box: [-10.5, -1.25, 17.7, 7.2],
    basis: "description",
    note_th: "ข้อความเหล็กปลอก ป-RB#@ระยะ พร้อมเส้นชี้หัวลูกศรไปยังปลอก ตามคำอธิบาย ความสูง 2.5 มม. เป็นค่าที่เสนอ"
  };

  G["TH.STR.REBAR_GRADE_NOTE"] = {
    kind: "text",
    samples: ["SD40", "SD30", "SD-30", "SD50", "SR24", "SD40T"],
    box: [-3.5, -1.25, 7, 2.5],
    basis: "description",
    note_th: "ข้อความชั้นคุณภาพเหล็กในหมายเหตุทั่วไป ตามตัวอย่างในชุดข้อมูล ความสูง 2.5 มม. เป็นค่าที่เสนอ"
  };

  G["TH.STR.CONCRETE_STRENGTH_NOTE"] = {
    kind: "text",
    samples: ["fc' = 240 ksc (cylinder)", "f'c = 280 กก./ตร.ซม. (cube)"],
    box: [-14, -1.25, 28, 2.5],
    basis: "description",
    note_th: "ข้อความกำลังอัดคอนกรีตต้องระบุชนิดตัวอย่าง (cylinder/cube) ตามรูปแบบที่ TBIM แนะนำ ความสูง 2.5 มม. เป็นค่าที่เสนอ"
  };

  G["TH.STR.CONCRETE_COVER_NOTE"] = {
    kind: "text",
    samples: ["7.5 ซม.", "3 ซม.", "3.5 cm"],
    box: [-5, -1.25, 10, 2.5],
    basis: "description",
    note_th: "ข้อความระยะหุ้มคอนกรีตในหมายเหตุทั่วไป ตามตัวอย่างในชุดข้อมูล ความสูง 2.5 มม. เป็นค่าที่เสนอ"
  };

  G["TH.STR.STEEL_SECTION_DESIGNATION"] = {
    kind: "text",
    samples: ["C 100x50x20x2.3", "C 100x50x20x3.2", "LC 100x50x20x2.3", "H 200x100x5.5x8", "L 50x50x5", "□ 100x100x3.2"],
    svg: "<path class='st' d='M 11 1.6 L -11 1.6 L -14 5'/>" +
      "<polygon class='f' points='-14.7,5.8 -14.4,4.5 -13.5,5.3'/>",
    box: [-15, -1.25, 26, 7.2],
    basis: "description",
    note_th: "ข้อความหน้าตัดเหล็กพร้อมเส้นชี้หัวลูกศร ตามคำอธิบาย ความสูง 2.5 มม. เป็นค่าที่เสนอ"
  };

  G["TH.STR.WELD_SYMBOL"] = {
    kind: "point",
    box: [-0.5, -6, 18.5, 6.5],
    svg: "<path class='s' d='M 0.9 -0.9 L 4 -4 L 16 -4'/>" +
      "<polygon class='f' points='0,0 1.38,-0.74 0.74,-1.38'/>" +
      "<path class='s' d='M 8 -4 L 8 -2 L 10 -4'/>" +
      "<path class='s' d='M 16 -4 L 17.5 -5.5 M 16 -4 L 17.5 -2.5'/>",
    basis: "description",
    note_th: "เส้นอ้างอิงแนวนอนมีลูกศรชี้รอยต่อที่จุดแทรก สัญลักษณ์เชื่อมมุมใต้เส้น = ด้านลูกศร ตามคำอธิบาย (AWS/ISO 2553 ระบบ B) ขนาดเป็นค่าที่เสนอ"
  };

  G["TH.STR.RC_MEMBER_SCHEDULE"] = {
    kind: "block",
    box: [-30, -12.5, 60, 22],
    svg: "<text class='tx' x='0' y='-10.3' font-size='2.5' font-weight='700'>ตารางคาน</text>" +
      "<rect class='s' x='-30' y='-7' width='60' height='16'/>" +
      "<path class='st' d='M -30 -3 L 30 -3 M -30 1 L 30 1 M -30 5 L 30 5 M -23 -7 L -23 9 M -12 -7 L -12 9 M -2 -7 L -2 9 M 8 -7 L 8 9 M 19 -7 L 19 9'/>" +
      "<text class='tx' x='-26.5' y='-5' font-size='1.5' font-weight='700'>MARK</text>" +
      "<text class='tx' x='-17.5' y='-5' font-size='1.5' font-weight='700'>SIZE</text>" +
      "<text class='tx' x='-7' y='-5' font-size='1.5' font-weight='700'>TOP</text>" +
      "<text class='tx' x='3' y='-5' font-size='1.5' font-weight='700'>BOTTOM</text>" +
      "<text class='tx' x='13.5' y='-5' font-size='1.5' font-weight='700'>STIRRUP</text>" +
      "<text class='tx' x='24.5' y='-5' font-size='1.5' font-weight='700'>REMARK</text>" +
      "<text class='tx' x='-26.5' y='-1' font-size='1.5'>B1</text>" +
      "<text class='tx' x='-17.5' y='-1' font-size='1.5'>0.20x0.40</text>" +
      "<text class='tx' x='-7' y='-1' font-size='1.5'>3-DB16</text>" +
      "<text class='tx' x='3' y='-1' font-size='1.5'>2-DB16</text>" +
      "<text class='tx' x='13.5' y='-1' font-size='1.5'>RB6@0.15</text>" +
      "<text class='tx' x='-26.5' y='3' font-size='1.5'>B2</text>" +
      "<text class='tx' x='-17.5' y='3' font-size='1.5'>0.20x0.50</text>" +
      "<text class='tx' x='-7' y='3' font-size='1.5'>3-DB16</text>" +
      "<text class='tx' x='3' y='3' font-size='1.5'>3-DB16</text>" +
      "<text class='tx' x='13.5' y='3' font-size='1.5'>RB9@0.20</text>" +
      "<text class='tx' x='24.5' y='3' font-size='1.5'>EXTRA TOP</text>",
    basis: "description",
    note_th: "ตารางย่อ คอลัมน์ รหัส/ขนาด/เหล็กบน/เหล็กล่าง/ปลอก/หมายเหตุ ตามคำอธิบาย (คอลัมน์ยังไม่ยืนยัน) ค่าในแถวเป็นตัวอย่าง"
  };

  // ---------------------------------------------------------------- INTL
  G["INTL.ARCH.DEMOLITION_REPRESENTATION"] = {
    kind: "point",
    box: [-8, -2, 16, 4],
    svg: "<rect class='s' stroke-dasharray='1 0.6' x='-8' y='-2' width='16' height='4'/>" +
      "<path class='st' d='M -8 -2 L -4 2 M -4 -2 L -8 2 M -2 -2 L 2 2 M 2 -2 L -2 2 M 4 -2 L 8 2 M 8 -2 L 4 2'/>",
    basis: "proposed",
    note_th: "เสนอผนังส่วนที่รื้อถอนเป็นเส้นประมีกากบาท เพราะไม่ได้ดึงรูปทรงจาก ISO 7518 มาไว้ในชุดข้อมูล"
  };

  G["INTL.STR.BAR_SHAPE_CODE"] = {
    kind: "point",
    box: [-6, -5, 12, 9],
    svg: "<path class='sk' d='M -4 -4 L -4 2 L 5 2'/>" +
      "<text class='tx' x='0.5' y='3.3' font-size='1.8'>B</text>" +
      "<text class='tx' x='-5.3' y='-1' font-size='1.8'>A</text>",
    basis: "proposed",
    note_th: "เสนอภาพร่างเหล็กงอฉากพร้อมตัวอักษรมิติ A, B เพราะไม่ได้ดึงรหัสรูปทรงจาก ISO 3766 มาไว้ในชุดข้อมูล จึงไม่ใส่เลขรหัส"
  };
})(window.TBIM_GLYPHS = window.TBIM_GLYPHS || {});
