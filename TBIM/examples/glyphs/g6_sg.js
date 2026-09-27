/* TBIM glyphs - Singapore-only records (SG.*). See CONTRACT.md. Paper mm, y down. */
(function (G) {
  G["SG.GENERAL.CORENET_X_SUBMISSION_LABEL"] = {
    kind: "block",
    box: [-17, -5, 34, 10],
    svg: "<rect class='s' x='-17' y='-5' width='34' height='10'/><text class='tx' x='0' y='-1.6' font-size='2.6' font-weight='700'>DESIGN GATEWAY</text>" +
      "<text class='tx' x='0' y='2.2' font-size='1.8'>CORENET X ref. (project)</text>",
    basis: "proposed",
    note_th: "กรอบข้อความชื่อ Gateway ตามคำอธิบาย ขนาดและตำแหน่งเสนอเอง (ไม่มีแหล่งกำหนด)"
  };
  G["SG.GENERAL.IFC_SG_PROPERTY_REFERENCE"] = {
    kind: "text",
    box: [-19, -1.6, 38, 3.2],
    samples: ["SGPset_Door.FireAccessOpening", "SGPset_Space.SpaceName"],
    basis: "description",
    note_th: "ข้อความอ้างอิงคุณสมบัติ IFC+SG ตามตัวอย่างในระเบียน"
  };
  G["SG.GENERAL.CP83_LAYER_NAME"] = {
    kind: "text",
    box: [-10, -1.6, 20, 3.2],
    samples: ["A-_WALL----_E", "A-_DOOR----_A"],
    basis: "description",
    note_th: "ชื่อเลเยอร์ตามรูปแบบ CP 83-1 (จากตาราง Revit) ไม่ใช่สัญลักษณ์ที่วาดบนแบบ"
  };
  G["SG.ARCH.FIRE_COMPARTMENT_LINE"] = {
    kind: "line",
    box: [-15, -1, 30, 2],
    svg: "<line class='sk' x1='-15' y1='0' x2='15' y2='0' stroke-dasharray='6 1.2 1 1.2'/>",
    line: { weight: 0.5, dash: "6 1.2 1 1.2", label: null },
    basis: "proposed",
    note_th: "เส้นลูกโซ่หนาตามแนวขอบเขตส่วนกันไฟ สีและน้ำหนักเสนอเอง (SCDF ไม่ได้ระบุในบันทึก)"
  };
  G["SG.SURVEY.LOT_NUMBER"] = {
    kind: "text",
    box: [-11, -1.8, 22, 3.6],
    samples: ["MK 10 Lot 123X"],
    basis: "description",
    note_th: "ข้อความเลขแปลงในแปลงที่ดินตามตัวอย่างในระเบียน"
  };
  G["SG.SURVEY.SHD_LEVEL_NOTATION"] = {
    kind: "text",
    box: [-10, -1.6, 20, 3.2],
    samples: ["FFL 4.500 SHD"],
    basis: "description",
    note_th: "ค่าระดับทศนิยม 3 ตำแหน่ง ต่อท้ายด้วย SHD ตามตัวอย่างในระเบียน"
  };
  G["SG.CIVIL.MIN_PLATFORM_LEVEL"] = {
    kind: "point",
    box: [-15, -4, 30, 5],
    svg: "<line class='s' x1='-15' y1='0' x2='15' y2='0' stroke-dasharray='2 1'/><text class='tx' x='-15' y='-2' font-size='2.2' text-anchor='start'>MPL 3.300 SHD</text>",
    basis: "proposed",
    note_th: "เส้นประอ้างอิงพร้อมข้อความ MPL ค่าตัวเลขเป็นตัวอย่าง ชนิดเส้นเป็นข้อเสนอ TBIM"
  };
})(window.TBIM_GLYPHS = window.TBIM_GLYPHS || {});
