/* TBIM example drawing set. Every sheet is A3 landscape (420 x 297 mm paper). */
var SHEETS = (function (TB) {
  "use strict";
  var P = TB.P, T = TB.T, L = TB.L, H = TB.H, text = TB.text, line = TB.line, poly = TB.poly, circle = TB.circle, rect = TB.rect, wrap = TB.wrap, f = TB.f;
  var ST = TB.state;

  /* ---------- plan coordinates: 1:50, 1 m = 20 mm ---------- */
  var OX = 60, OY = 62, K = 20;
  function X(m) { return OX + m * K; }
  function Y(m) { return OY + m * K; }
  function pt(mx, my) { return [X(mx), Y(my)]; }

  var W = {
    FULL: "TH.ARCH.HATCH_WALL_BRICK_FULL", HALF: "TH.ARCH.HATCH_WALL_BRICK_HALF", BLOCK: "TH.ARCH.HATCH_WALL_CONCRETE_BLOCK",
    VENT: "TH.ARCH.HATCH_WALL_VENT_BLOCK", GYP: "TH.ARCH.HATCH_WALL_GYPSUM_PLYWOOD", RC: "TH.ARCH.HATCH_WALL_RC"
  };
  var WALLS = [
    [W.FULL, -0.1, -0.1, 1.2, 0.1], [W.FULL, 2.8, -0.1, 6.0, 0.1], [W.VENT, 6.0, -0.1, 7.0, 0.1], [W.FULL, 7.0, -0.1, 8.1, 0.1],
    [W.FULL, -0.1, 5.9, 1.5, 6.1], [W.FULL, 2.4, 5.9, 6.5, 6.1], [W.FULL, 7.3, 5.9, 8.1, 6.1],
    [W.FULL, -0.1, 0.1, 0.1, 1.0], [W.FULL, -0.1, 2.0, 0.1, 3.4], [W.FULL, -0.1, 5.0, 0.1, 5.9],
    [W.FULL, 7.9, 0.1, 8.1, 0.7], [W.FULL, 7.9, 2.3, 8.1, 5.9],
    [W.HALF, 3.95, 0.1, 4.05, 1.8], [W.HALF, 3.95, 2.6, 4.05, 4.5], [W.HALF, 3.95, 5.3, 4.05, 5.9],
    [W.BLOCK, 4.05, 2.95, 7.9, 3.05],
    [W.GYP, 6.15, 3.05, 6.25, 4.2],
    [W.RC, -0.075, 6.1, 0.075, 7.2]
  ];
  var GRIDX = [["1", 0], ["2", 4], ["3", 8]], GRIDY = [["A", 0], ["B", 3], ["C", 6]];

  /* ---------- parametric annotation (text fields filled per instance) ---------- */
  function gridBubble(x, y, label) {
    return wrap("TH.GENERAL.GRID_BUBBLE", circle(x, y, 5, 0.3) + text(x, y + 0.2, label, 4.2, { weight: 600 }), [x - 5.5, y - 5.5, 11, 11], "หัวเส้นพิกัด " + label);
  }
  function gridLines(y0, y1, x0, x1) {
    var out = "";
    GRIDX.forEach(function (g) { out += wrap("TH.GENERAL.GRID_LINE", line(X(g[1]), y0, X(g[1]), y1, 0.15, "var(--grid)", "6 1.2 0.8 1.2"), [X(g[1]) - 0.8, y0, 1.6, y1 - y0], "เส้นศูนย์กลางพิกัด " + g[0]); });
    GRIDY.forEach(function (g) { out += wrap("TH.GENERAL.GRID_LINE", line(x0, Y(g[1]), x1, Y(g[1]), 0.15, "var(--grid)", "6 1.2 0.8 1.2"), [x0, Y(g[1]) - 0.8, x1 - x0, 1.6], "เส้นศูนย์กลางพิกัด " + g[0]); });
    GRIDX.forEach(function (g) { out += gridBubble(X(g[1]), y0 - 5, g[0]); });
    GRIDY.forEach(function (g) { out += gridBubble(x0 - 5, Y(g[1]), g[0]); });
    return out;
  }
  function terminator(x, y, horizontal, dir, id) {
    var reg = TB.profileFor(id);
    if (reg === "JIS" || reg === "US_NCS") {
      var Ln = 2.5, Wd = 0.8, p = horizontal ? [[x, y], [x - dir * Ln, y - Wd / 2], [x - dir * Ln, y + Wd / 2]] : [[x, y], [x - Wd / 2, y - dir * Ln], [x + Wd / 2, y - dir * Ln]];
      return '<polygon points="' + p.map(function (q) { return f(q[0]) + "," + f(q[1]); }).join(" ") + '" style="fill:var(--ink)"/>';
    }
    return line(x - 1.1, y + 1.1, x + 1.1, y - 1.1, 0.45);
  }
  var DIM = { cc: "TH.GENERAL.DIMENSION_CENTRE_CENTRE", ee: "TH.GENERAL.DIMENSION_EDGE_EDGE", ce: "TH.GENERAL.DIMENSION_CENTRE_EDGE" };
  function dimH(kind, x1, x2, y, label, extFrom) {
    var id = DIM[kind];
    var inner = line(x1 - 2, y, x2 + 2, y, 0.18) + line(x1, extFrom, x1, y - 1.5 * Math.sign(extFrom - y || 1) * -1, 0.13) + line(x2, extFrom, x2, y + 1.5 * Math.sign(y - extFrom), 0.13) +
      terminator(x1, y, true, -1, id) + terminator(x2, y, true, 1, id) + text((x1 + x2) / 2, y - 2.1, label, 2.6);
    return wrap(id, inner, [x1, y - 4.2, x2 - x1, 5.6], TB.name(id) + " " + label);
  }
  function dimV(kind, y1, y2, x, label, extFrom) {
    var id = DIM[kind];
    var inner = line(x, y1 - 2, x, y2 + 2, 0.18) + line(extFrom, y1, x + 1.5 * Math.sign(x - extFrom), y1, 0.13) + line(extFrom, y2, x + 1.5 * Math.sign(x - extFrom), y2, 0.13) +
      terminator(x, y1, false, -1, id) + terminator(x, y2, false, 1, id) + text(x - 2.1, (y1 + y2) / 2, label, 2.6, { rotate: -90 });
    return wrap(id, inner, [x - 4.2, y1, 5.6, y2 - y1], TB.name(id) + " " + label);
  }
  function sectionMark(x, y, id, sheet) {
    var reg = TB.profileFor("TH.ARCH.SECTION_MARK"), inner = "", S = "TH.ARCH.SECTION_MARK";
    if (reg === "US_NCS") {
      var r = 6.35, tipY = y - 11, a = Math.acos(r / 11), sx = r * Math.sin(a), sy = r * Math.cos(a);
      inner = '<path d="M ' + f(x) + " " + f(tipY) + " L " + f(x - sx) + " " + f(y - sy) + " A " + r + " " + r + " 0 0 1 " + f(x + sx) + " " + f(y - sy) + ' Z" style="fill:var(--ink)"/>' +
        circle(x, y, r, 0.35) + line(x - r, y, x + r, y, 0.25) + text(x, y - 2.8, id, 3.6, { weight: 700 }) + text(x, y + 3, sheet, 2.6);
      return wrap(S, inner, [x - 7, y - 11.5, 14, 18.5], "สัญลักษณ์รูปตัด " + id);
    }
    if (reg === "GB") {
      inner = circle(x, y, 5, 0.25) + line(x - 5, y, x + 5, y, 0.25) + line(x - 6.5, y + 5, x + 6.5, y + 5, 0.7) + text(x, y - 2.3, id, 3.2, { weight: 700 }) + text(x, y + 2.4, sheet, 2.2);
      return wrap(S, inner, [x - 7, y - 6, 14, 12], "สัญลักษณ์รูปตัด " + id);
    }
    inner = '<polygon points="' + f(x) + "," + f(y - 9.5) + " " + f(x - 3.2) + "," + f(y - 3.9) + " " + f(x + 3.2) + "," + f(y - 3.9) + '" style="fill:var(--ink)"/>' +
      circle(x, y, 5, 0.3) + line(x - 5, y, x + 5, y, 0.25) + text(x, y - 2.3, id, 3.2, { weight: 700 }) + text(x, y + 2.4, sheet, 2.2);
    return wrap(S, inner, [x - 5.5, y - 10, 11, 15.5], "สัญลักษณ์รูปตัด " + id + " แผ่น " + sheet);
  }
  function detailCallout(x, y, n, sheet, tx, ty, r) {
    var inner = circle(tx, ty, r, 0.2, "var(--ink)", "none").replace("stroke-width:0.2", "stroke-width:0.2;stroke-dasharray:1.2 0.8") +
      line(tx + r * 0.7, ty - r * 0.7, x - 3.5, y + 3.5, 0.18) + circle(x, y, 4.5, 0.3) + line(x - 4.5, y, x + 4.5, y, 0.22) +
      text(x, y - 2, String(n), 2.8, { weight: 700 }) + text(x, y + 2.1, sheet, 1.9);
    return wrap("TH.ARCH.DETAIL_CALLOUT", inner, [Math.min(x - 5, tx - r), Math.min(y - 5, ty - r), Math.max(x + 5, tx + r) - Math.min(x - 5, tx - r), Math.max(y + 5, ty + r) - Math.min(y - 5, ty - r)], "แบบขยาย " + n + " แผ่น " + sheet);
  }
  function levelMark(x, y, value, caption, opt) {
    opt = opt || {};
    var reg = TB.profileFor("TH.ARCH.LEVEL_MARK"), inner, id = "TH.ARCH.LEVEL_MARK";
    var sign = value > 0 ? "+" : value < 0 ? "-" : "±";
    if (reg === "GB" || reg === "SG") {
      var v = reg === "SG" ? (caption && /FFL|พื้น/.test(caption) ? "FFL " : "") + (value + 3.3).toFixed(3) + " SHD" : sign + Math.abs(value).toFixed(3);
      inner = '<polygon points="' + f(x) + "," + f(y) + " " + f(x - 1.6) + "," + f(y - 1.6) + " " + f(x + 1.6) + "," + f(y - 1.6) + '" style="fill:' + (reg === "SG" ? "var(--ink)" : "none") + ';stroke:var(--ink);stroke-width:0.25"/>' +
        line(x - 1.6, y - 1.6, x + 18, y - 1.6, 0.25) + text(x + 1.2, y - 3.5, v, 2.4, { anchor: "start" });
      return wrap(id, inner, [x - 2, y - 5.5, 21, 6], "ค่าระดับ " + v);
    }
    var t = (opt.prefix || "EL.") + " " + sign + Math.abs(value).toFixed(2);
    inner = (caption ? text(x, y - 5.2, caption, 2.1, { anchor: "start", color: "var(--ink-2)" }) : "") + text(x, y - 2.2, t, 2.5, { anchor: "start", weight: 600 }) + line(x, y - 0.4, x + 14, y - 0.4, 0.2);
    return wrap(id, inner, [x - 0.5, y - (caption ? 7 : 4), 22, caption ? 7.4 : 4.4], (caption || "") + " " + t);
  }
  function roomTag(x, y, nm, finish, level) {
    var inner = text(x, y - 3.3, nm, 3.2, { weight: 600 }) + text(x, y + 0.5, finish, 2.3) + text(x, y + 3.5, (level >= 0 ? "+" : "-") + Math.abs(level).toFixed(2), 2.3);
    return wrap("TH.ARCH.ROOM_TAG", inner, [x - 9, y - 5.8, 18, 11], "ป้ายชื่อห้อง " + nm);
  }
  function openingTag(kind, x, y, n) {
    var isDoor = kind === "door", pre = ST.prefix === "thai" ? (isDoor ? "ป" : "น") : (isDoor ? "D" : "W");
    var id = isDoor ? "TH.ARCH.DOOR_TAG" : "TH.ARCH.WINDOW_TAG";
    var inner = '<rect x="' + f(x - 3.4) + '" y="' + f(y - 2.1) + '" width="6.8" height="4.2"' + (isDoor ? ' rx="2.1"' : "") + ' style="fill:var(--sheet);stroke:var(--ink);stroke-width:0.25"/>' + text(x, y + 0.1, pre + n, 2.4, { weight: 600 });
    return wrap(id, inner, [x - 3.6, y - 2.3, 7.2, 4.6], (isDoor ? "ป้ายรหัสประตู " : "ป้ายรหัสหน้าต่าง ") + pre + n);
  }
  function elevationMark(x, y, sheet) {
    var r = 6.5, inner = circle(x, y, r, 0.3) + line(x - r, y, x + r, y, 0.2) + line(x, y - r, x, y + r, 0.2);
    [["1", 0, 1], ["2", 1, 0], ["3", 0, -1], ["4", -1, 0]].forEach(function (d) {
      inner += '<polygon points="' + (d[1] === 0
        ? f(x - 1.6) + "," + f(y + d[2] * r) + " " + f(x + 1.6) + "," + f(y + d[2] * r) + " " + f(x) + "," + f(y + d[2] * (r + 2.6))
        : f(x + d[1] * r) + "," + f(y - 1.6) + " " + f(x + d[1] * r) + "," + f(y + 1.6) + " " + f(x + d[1] * (r + 2.6)) + "," + f(y)) + '" style="fill:var(--ink)"/>';
      inner += text(x + d[1] * 11, y + d[2] * 11, d[0], 2.5, { weight: 600 });
    });
    inner += text(x - 3.1, y - 3.1, sheet, 1.5) + text(x + 3.1, y + 3.1, sheet, 1.5);
    return wrap("TH.ARCH.ELEVATION_MARK", inner, [x - 13, y - 13, 26, 26], "สัญลักษณ์รูปด้าน 1–4 แผ่น " + sheet);
  }
  function memberTag(id, x, y, s, o) {
    o = o || {};
    var inner = text(x, y, s, o.size || 2.6, { weight: 700, color: TB.color(id), anchor: o.anchor || "middle" });
    if (o.box) inner = rect(x - s.length * 0.8 - 0.8, y - 1.9, s.length * 1.6 + 1.6, 3.8, 0.2, TB.color(id), "var(--sheet)") + inner;
    return wrap(id, inner, [x - s.length * 0.9 - 1, y - 2, s.length * 1.8 + 2, 4], TB.name(id) + " " + s);
  }

  /* ---------- plan drawing ---------- */
  function hinged(hx, hy, lx, ly, ax, ay, sweep, muted) {
    var c = muted ? "var(--under)" : "var(--ink)";
    var r = Math.hypot(lx - hx, ly - hy);
    var inner = line(hx, hy, lx, ly, muted ? 0.2 : 0.35, c) + '<path d="M ' + f(ax) + " " + f(ay) + " A " + f(r) + " " + f(r) + " 0 0 " + sweep + " " + f(lx) + " " + f(ly) + '" style="fill:none;stroke:' + c + ';stroke-width:0.15"/>';
    if (muted) return inner;
    var bx = Math.min(hx, lx, ax), by = Math.min(hy, ly, ay);
    return wrap("TH.ARCH.DOOR_HINGED", inner, [bx, by, Math.max(hx, lx, ax) - bx, Math.max(hy, ly, ay) - by], "ประตูบานเปิด");
  }
  function winH(id, x1, x2, y, muted) {
    var c = muted ? "var(--under)" : "var(--ink)", m = (x1 + x2) / 2;
    var inner = rect(x1, y - 2, x2 - x1, 4, 0.15, c, "var(--sheet)");
    if (id === "TH.ARCH.WINDOW_AWNING") inner += line(x1, y, x2, y, 0.3, c) + poly([[x1, y], [m, y + 4.5], [x2, y]], 0.15, c, "0.8 0.6");
    else inner += line(x1, y - 0.6, m + 2, y - 0.6, 0.3, c) + line(m - 2, y + 0.6, x2, y + 0.6, 0.3, c);
    return muted ? inner : wrap(id, inner, [x1, y - 2, x2 - x1, id === "TH.ARCH.WINDOW_AWNING" ? 7 : 4]);
  }
  function winV(id, y1, y2, x, muted, outward) {
    var c = muted ? "var(--under)" : "var(--ink)", m = (y1 + y2) / 2, inner = rect(x - 2, y1, 4, y2 - y1, 0.15, c, "var(--sheet)");
    if (id === "TH.ARCH.WINDOW_CASEMENT") {
      var d = outward, r = (y2 - y1) / 2;
      inner += line(x - 2, y1, x - 2 + d * r, y1, 0.3, c) + '<path d="M ' + f(x - 2) + " " + f(m) + " A " + f(r) + " " + f(r) + " 0 0 1 " + f(x - 2 + d * r) + " " + f(y1) + '" style="fill:none;stroke:' + c + ';stroke-width:0.15"/>';
      inner += line(x - 2, y2, x - 2 + d * r, y2, 0.3, c) + '<path d="M ' + f(x - 2) + " " + f(m) + " A " + f(r) + " " + f(r) + " 0 0 0 " + f(x - 2 + d * r) + " " + f(y2) + '" style="fill:none;stroke:' + c + ';stroke-width:0.15"/>';
      return muted ? inner : wrap(id, inner, [x - 2 + d * r, y1, r + 4, y2 - y1]);
    }
    inner += line(x - 0.6, y1, x - 0.6, m + 2, 0.3, c) + line(x + 0.6, m - 2, x + 0.6, y2, 0.3, c);
    return muted ? inner : wrap(id, inner, [x - 2, y1, 4, y2 - y1]);
  }
  function slidingDoorV(y1, y2, x, muted) {
    var c = muted ? "var(--under)" : "var(--ink)", m = (y1 + y2) / 2;
    var inner = rect(x - 2, y1, 4, y2 - y1, 0.12, c, "var(--sheet)") + rect(x - 1.4, y1, 0.9, m - y1 + 1.5, 0.25, c, "var(--sheet)") + rect(x + 0.5, m - 1.5, 0.9, y2 - m + 1.5, 0.25, c, "var(--sheet)") +
      line(x + 3, m - 5, x + 3, m + 5, 0.15, c) + poly([[x + 2.2, m + 3.6], [x + 3, m + 5], [x + 3.8, m + 3.6]], 0.15, c);
    return muted ? inner : wrap("TH.ARCH.DOOR_SLIDING", inner, [x - 2, y1, 6, y2 - y1], "ประตูบานเลื่อน");
  }

  function plan(muted) {
    var out = [];
    // Roof overhang (hidden line)
    if (!muted) out.push(L("TH.GENERAL.HIDDEN_LINE", [pt(-0.7, -0.7), pt(8.7, -0.7), pt(8.7, 6.7), pt(-0.7, 6.7), pt(-0.7, -0.7)], { labelText: "เส้นประ แนวชายคา" }));
    // Porch and steps
    var pc = muted ? "var(--under)" : "var(--ink)";
    out.push(poly([pt(0.075, 7.2), pt(2.9, 7.2), pt(2.9, 6.1)], muted ? 0.15 : 0.25, pc));
    [6.45, 6.8].forEach(function (s) { out.push(line(X(1.2), Y(s), X(2.7), Y(s), 0.15, pc)); });
    // Walls
    WALLS.forEach(function (w) {
      var x = X(w[1]), y = Y(w[2]), ww = X(w[3]) - x, hh = Y(w[4]) - y;
      out.push(muted ? rect(x, y, ww, hh, 0.2, "var(--under)", "var(--under-fill)") : H(w[0], x, y, ww, hh, { sw: 0.35 }));
    });
    // Columns
    GRIDX.forEach(function (gx) { GRIDY.forEach(function (gy) { out.push(rect(X(gx[1]) - 2, Y(gy[1]) - 2, 4, 4, 0, "none", muted ? "var(--under)" : "var(--ink)")); }); });
    // Openings
    out.push(hinged(X(1.5), Y(5.9), X(1.5), Y(5.0), X(2.4), Y(5.9), 0, muted));
    out.push(hinged(X(4.05), Y(1.8), X(4.85), Y(1.8), X(4.05), Y(2.6), 0, muted));
    out.push(hinged(X(4.05), Y(5.3), X(4.85), Y(5.3), X(4.05), Y(4.5), 1, muted));
    out.push(slidingDoorV(Y(3.4), Y(5.0), X(0), muted));
    out.push(winH("TH.ARCH.WINDOW_SLIDING", X(1.2), X(2.8), Y(0), muted));
    out.push(winV("TH.ARCH.WINDOW_SLIDING", Y(0.7), Y(2.3), X(8), muted));
    out.push(winH("TH.ARCH.WINDOW_AWNING", X(6.5), X(7.3), Y(6), muted));
    out.push(winV("TH.ARCH.WINDOW_CASEMENT", Y(1.0), Y(2.0), X(0), muted, -1));
    if (muted) {
      [["ห้องนั่งเล่น", 2.0, 3.0], ["ห้องนอน", 5.9, 1.5], ["ห้องน้ำ", 5.1, 4.6]].forEach(function (r) { out.push(text(X(r[1]), Y(r[2]), r[0], 2.8, { color: "var(--under-text)" })); });
    }
    return out.join("");
  }

  /* ---------- sheet furniture ---------- */
  var LIC = { ARCH: ["ARCHITECT  สถาปนิก", "ภ-สถ XXXXX"], STR: ["STRUCTURAL ENGINEER  วิศวกรโครงสร้าง", "ภย. XXXXX"], ELEC: ["ELECTRICAL ENGINEER  วิศวกรไฟฟ้า", "ภฟ. XXXXX"], MECH: ["MECHANICAL ENGINEER  วิศวกรเครื่องกล", "ภก. XXXXX"], CIVIL: ["CIVIL ENGINEER  วิศวกรโยธา", "ภย. XXXXX"] };
  var LIC_SG = { ARCH: ["QUALIFIED PERSON (ARCHITECT)", "Registered Architect · BOA"], STR: ["QUALIFIED PERSON (STRUCTURAL)", "Professional Engineer · PEB"], ELEC: ["LICENSED ELECTRICAL WORKER", "LEW licence · EMA"], MECH: ["PROFESSIONAL ENGINEER (M&E)", "Professional Engineer · PEB"], CIVIL: ["QUALIFIED PERSON (CIVIL)", "Professional Engineer · PEB"] };
  function titleBlock(sh) {
    var x = 362, w = 48, y = 7, sg = ST.region === "SG";
    var lic = (sg ? LIC_SG : LIC)[sh.lic];
    var rows = [
      ["REVISION  ครั้งที่ / รายการ / วันที่", "—", 16],
      ["PROJECT  โครงการ", sg ? "Residential house (example)" : "บ้านพักอาศัย 1 ชั้น (ตัวอย่าง)", 13],
      ["LOCATION  สถานที่", "— (สมมติ)", 11],
      ["OWNER  เจ้าของ", "— (สมมติ)", 11],
      [lic[0], lic[1], 13],
      ["DRAWN BY  ผู้เขียนแบบ", "TBIM", 11],
      ["DRAWING TITLE  ชื่อแบบ", sh.title, 15],
      ["SCALE  มาตราส่วน", sh.scale, 11],
      ["DATE  วันที่", sg ? "27 Sep 2026" : "27 ก.ย. 2569", 11]
    ];
    var inner = rect(x, y, w, 283, 0.4, "var(--ink)", "var(--sheet)"), yy = y;
    rows.forEach(function (r, i) {
      inner += text(x + 1.6, yy + 3, r[0], 1.7, { anchor: "start", color: "var(--ink-2)" }) + text(x + 1.6, yy + r[2] * 0.62, r[1], i === 6 ? 2.6 : 2.4, { anchor: "start", weight: i === 6 ? 700 : 400 });
      yy += r[2];
      inner += line(x, yy, x + w, yy, 0.2);
    });
    var tb = wrap("TH.GENERAL.TITLE_BLOCK", inner, [x, y, w, yy - y], "กรอบชื่อแบบ");
    var note = text(x + 1.6, yy + 3.2, sg ? "Do not scale. Verify on site." : "หมายเหตุ: ห้ามวัดระยะจากแบบ", 1.9, { anchor: "start" }) +
      text(x + 1.6, yy + 6, sg ? "" : "ให้ตรวจสอบระยะที่หน้างาน", 1.9, { anchor: "start" });
    var nt = wrap("TH.GENERAL.NOTE_DO_NOT_SCALE", note, [x, yy, w, 8], "หมายเหตุห้ามวัดระยะจากแบบ");
    var stamp = wrap("TH.GENERAL.PERMIT_STAMP", rect(x + 6, yy + 11, w - 12, 9, 0.4, "var(--d-GENERAL)", "none") +
      text(x + w / 2, yy + 15.5, sg ? "FOR SUBMISSION" : "แบบขออนุญาต", 2.8, { weight: 700, color: "var(--d-GENERAL)" }), [x + 6, yy + 11, w - 12, 9], "ตราแบบขออนุญาต");
    var sy = 256;
    var sn = line(x, sy, x + w, sy, 0.4) + text(x + 1.6, sy + 3, "DRAWING NO.  แผ่นที่", 1.7, { anchor: "start", color: "var(--ink-2)" }) +
      text(x + w / 2, sy + 15, sh.no, 8, { weight: 700 }) + text(x + w - 1.6, sy + 29.5, "NO./TOTAL " + sh.idx + "/" + SHEETS_LIST.length, 1.8, { anchor: "end", color: "var(--ink-2)" });
    return tb + nt + stamp + wrap("TH.GENERAL.SHEET_NUMBER", sn, [x, sy, w, 34], "เลขที่แผ่น " + sh.no);
  }
  function drawingTitle(x, y, t, scale) {
    return wrap("TH.GENERAL.DRAWING_TITLE", text(x, y, t, 4.2, { weight: 700 }) + line(x - t.length * 1.2, y + 3.4, x + t.length * 1.2, y + 3.4, 0.4) + text(x, y + 6.8, "มาตราส่วน " + scale, 2.6),
      [x - t.length * 1.3, y - 3, t.length * 2.6, 12], "ชื่อรูป " + t);
  }
  function frame(sh, body) {
    return '<rect x="0" y="0" width="420" height="297" style="fill:var(--sheet)"/>' + rect(10, 7, 400, 283, 0.6) + body +
      TB.legendTable(sh.legend, 298, 7, 62, 283, "สัญลักษณ์ · " + sh.legend.length + " รายการ") + titleBlock(sh);
  }

  /* ---------- A0-02 site plan (1:200, 1 m = 5 mm) ---------- */
  function siteSheet() {
    var o = [], sx = function (m) { return 62 + m * 5; }, sy = function (m) { return 40 + m * 5; };
    // Contours (existing ground)
    [["+1.00", 6], ["+1.50", 14], ["+2.00", 22]].forEach(function (c, i) {
      var y = sy(c[1]);
      o.push(L("TH.SURVEY.CONTOUR_LINE", [[sx(-4), y + 6], [sx(8), y + 2], [sx(20), y + 5], [sx(32), y], [sx(44), y + 3]], { label: c[0] }));
    });
    // Irrigation canal west
    o.push(rect(sx(-9), sy(-2), 18, 136, 0.2, "var(--d-CIVIL)", "var(--water)"));
    o.push(text(sx(-7.2), sy(12), "คลองส่งน้ำ", 2.4, { rotate: -90, color: "var(--d-CIVIL)" }));
    o.push(P("TH.CIVIL.RID_REGULATOR_GATE", sx(-7.2), sy(1)));
    o.push(P("TH.CIVIL.RID_CULVERT", sx(-7.2), sy(20)));
    o.push(P("TH.CIVIL.RID_FARM_TURNOUT", sx(-4.5), sy(9), { rot: 0 }));
    // Lot (property line) and boundary monuments
    var lot = [[sx(0), sy(0)], [sx(40), sy(0)], [sx(40), sy(24)], [sx(0), sy(24)], [sx(0), sy(0)]];
    o.push(L("TH.GENERAL.PROPERTY_LINE", lot));
    [[0, 0], [40, 0], [40, 24], [0, 24]].forEach(function (b) { o.push(P("TH.SURVEY.BOUNDARY_MONUMENT", sx(b[0]), sy(b[1]))); });
    o.push(T("TH.SURVEY.DOL_SHEET_REFERENCE", sx(1), sy(-3.5), {}));
    // House footprint (proposed) and existing shed (to be demolished)
    var sg = ST.region === "SG";
    o.push(L("TH.CIVIL.EXISTING_VS_PROPOSED", [[sx(26), sy(4)], [sx(33), sy(4)], [sx(33), sy(9)], [sx(26), sy(9)], [sx(26), sy(4)]], { labelText: "สิ่งปลูกสร้างเดิม", color: sg ? "var(--sg-demo)" : undefined }));
    o.push(P("INTL.ARCH.DEMOLITION_REPRESENTATION", sx(29.5), sy(6.5)));
    o.push(rect(sx(12), sy(8), 40, 30, 0.6, sg ? "var(--sg-new)" : "var(--ink)", "var(--under-fill)"));
    if (sg) o.push(rect(sx(2), sy(18), 16, 12, 0.4, "var(--sg-exist)", "none") + text(sx(3.6), sy(22), "เดิม (existing)", 1.9, { anchor: "start", color: "var(--sg-exist)" }) +
      text(20, 262, "สีตาม URA / CP 83-5: ม่วงแดง = ก่อสร้างใหม่, ฟ้า = ของเดิม, เหลือง = รื้อถอน", 2.2, { anchor: "start", color: "var(--ink-2)" }));
    o.push(text(sx(16), sy(14), "อาคารพักอาศัย 1 ชั้น", 2.6, { weight: 600 }));
    o.push(text(sx(16), sy(17.4), "FFL +0.20", 2.2));
    [[12, 8], [20, 8], [12, 14], [20, 14]].forEach(function (p) { o.push(P("INTL.SURVEY.SETOUT_POINT", sx(p[0]), sy(p[1]))); });
    // Landscape, levels, survey marks
    [[4, 4], [6, 20], [36, 17], [33, 21]].forEach(function (p) { o.push(P("INTL.CIVIL.LANDSCAPE_SYMBOL", sx(p[0]), sy(p[1]))); });
    [[3, 12, "+1.35"], [30, 15, "+1.62"], [38, 21, "+2.05"], [22, 21, "+1.94"]].forEach(function (p) { o.push(T("TH.SURVEY.SPOT_HEIGHT", sx(p[0]), sy(p[1]), { text: "× " + p[2], size: 2.2 })); });
    o.push(P("TH.SURVEY.BENCHMARK", sx(34), sy(3)));
    o.push(P("INTL.SURVEY.CONTROL_POINT", sx(3), sy(2), { note: "CP.1" }));
    o.push(P("INTL.SURVEY.TRAVERSE_POINT", sx(38), sy(12), { note: "T.3" }));
    // Road (south): right of way 14 m, two lanes each way
    var R = function (m) { return sy(26 + m); };
    o.push(L("TH.CIVIL.RIGHT_OF_WAY", [[sx(-9), R(0)], [sx(45), R(0)]]));
    o.push(L("TH.CIVIL.RIGHT_OF_WAY", [[sx(-9), R(14)], [sx(45), R(14)]]));
    o.push(L("TH.CIVIL.PAVEMENT_EDGE_LINE", [[sx(-9), R(1.5)], [sx(45), R(1.5)]]));
    o.push(L("TH.CIVIL.PAVEMENT_EDGE_LINE", [[sx(-9), R(12.5)], [sx(45), R(12.5)]]));
    o.push(L("TH.CIVIL.PAVEMENT_LANE_LINE", [[sx(-9), R(4.25)], [sx(45), R(4.25)]]));
    o.push(L("TH.CIVIL.PAVEMENT_LANE_LINE", [[sx(-9), R(9.75)], [sx(45), R(9.75)]]));
    o.push(L("TH.CIVIL.PAVEMENT_SEPARATION_LINE", [[sx(-9), R(7)], [sx(18), R(7)]]));
    o.push(L("TH.CIVIL.PAVEMENT_WARNING_LINE", [[sx(18), R(7)], [sx(45), R(7)]]));
    o.push(L("TH.CIVIL.CENTRELINE", [[sx(-9), R(7) + 3.2], [sx(45), R(7) + 3.2]], { weight: 0.15 }));
    [[-4, "STA 0+100"], [16, "STA 0+120"], [36, "STA 0+140"]].forEach(function (st) {
      o.push(T("TH.CIVIL.STATION_CHAINAGE", sx(st[0]), R(7) - 6.5, { text: st[1], anchor: "middle", size: 2.2, leader: [[sx(st[0]), R(7) - 4.8], [sx(st[0]), R(7)]] }));
    });
    // Drain along the road edge
    o.push(L("TH.CIVIL.EXISTING_VS_PROPOSED", [[sx(-9), R(0.8)], [sx(45), R(0.8)]], { color: "var(--d-CIVIL)", label: "" }));
    [[0, "TH.CIVIL.MANHOLE"], [20, "TH.CIVIL.CATCH_BASIN"], [40, "TH.CIVIL.MANHOLE"]].forEach(function (m) { o.push(P(m[1], sx(m[0]), R(0.8))); });
    o.push(P("TH.CIVIL.DRAINAGE_SLOPE_ARROW", sx(10), R(-0.9)));
    o.push(T("TH.CIVIL.INVERT_LEVEL", sx(0.8), R(2.8), {}));
    o.push(T("TH.CIVIL.RC_PIPE_CULVERT", sx(29), R(2.8), {}));
    o.push(T("TH.CIVIL.RC_BOX_CULVERT", sx(-8.6), R(15.6), {}));
    o.push(T("TH.CIVIL.SLOPE_NOTE", sx(12), sy(19), {}));
    // Driveway
    o.push(line(sx(22), sy(24), sx(22), R(1.5), 0.3) + line(sx(28), sy(24), sx(28), R(1.5), 0.3));
    o.push(P("TH.GENERAL.NORTH_ARROW", 280, 30));
    o.push(drawingTitle(160, 272, "ผังบริเวณ", "1:200"));
    return o.join("");
  }

  /* ---------- A1-01 floor plan ---------- */
  function planSheet() {
    var o = [];
    o.push(gridLines(Y(-2.1), Y(7.8), X(-2.1), X(9.4)));
    o.push(plan(false));
    // Dimensions: centre-centre (grid), edge-edge (openings), centre-edge
    o.push(dimH("cc", X(0), X(4), Y(-1.5), "4.00", Y(-1.9)));
    o.push(dimH("cc", X(4), X(8), Y(-1.5), "4.00", Y(-1.9)));
    o.push(dimH("ee", X(1.2), X(2.8), Y(-1.0), "1.60", Y(-0.15)));
    o.push(dimH("ee", X(6.0), X(7.0), Y(-1.0), "1.00", Y(-0.15)));
    o.push(dimV("cc", Y(0), Y(3), X(-1.5), "3.00", X(-1.9)));
    o.push(dimV("cc", Y(3), Y(6), X(-1.5), "3.00", X(-1.9)));
    o.push(dimV("ce", Y(0), Y(1.0), X(-1.0), "1.00", X(-0.15)));
    // Tags
    [["door", 2.85, 5.45, 1], ["door", 3.5, 2.2, 2], ["door", 3.5, 4.9, 3], ["door", 0.6, 4.2, 4]].forEach(function (t) { o.push(openingTag(t[0], X(t[1]), Y(t[2]), t[3])); });
    [["window", 2.0, 0.6, 1], ["window", 7.35, 1.5, 2], ["window", 6.9, 5.45, 3], ["window", 0.75, 1.5, 4]].forEach(function (t) { o.push(openingTag(t[0], X(t[1]), Y(t[2]), t[3])); });
    o.push(roomTag(X(2.1), Y(3.0), "ห้องนั่งเล่น", "F1,C1", 0.20));
    o.push(roomTag(X(5.9), Y(1.5), "ห้องนอน", "F2,C1", 0.20));
    o.push(roomTag(X(5.1), Y(4.6), "ห้องน้ำ", "F3,C2", 0.15));
    o.push(P("TH.ARCH.FINISH_CODE_TAG", X(6.9), Y(2.4)));
    o.push(L("TH.ARCH.STAIR_ARROW", [pt(1.95, 7.1), pt(1.95, 6.2)], { arrow: true }));
    o.push(P("TH.ARCH.FLOOR_LEVEL_PLAN", X(0.9), Y(6.75)));
    o.push(L("TH.GENERAL.BREAK_LINE", [pt(2.9, 6.4), pt(2.9, 7.4)]));
    o.push(detailCallout(X(8.9), Y(5.2), 1, "A-07", X(7.0), Y(4.9), 7));
    o.push(P("INTL.GENERAL.REVISION_CLOUD", X(8.55), Y(1.5)));
    // Section cut A-A at y = 4.5 m
    o.push(line(X(-2.2) + 5.5, Y(4.5), X(-1.2), Y(4.5), 0.7) + line(X(8.6), Y(4.5), X(9.1) - 5.5, Y(4.5), 0.7));
    o.push(sectionMark(X(-2.2), Y(4.5), "A", "A-06"));
    o.push(sectionMark(X(9.1), Y(4.5), "A", "A-06"));
    o.push(elevationMark(272, 214, "A-05"));
    o.push(P("TH.GENERAL.NORTH_ARROW", 272, 36));
    o.push(levelMark(X(-1.9), Y(7.8), 0, "ระดับพื้นดินเดิม"));
    o.push(L("TH.GENERAL.LINE_THICK_CONTINUOUS", [[20, 262], [60, 262]], { labelText: "เส้นเต็มหนา (ตัวอย่างน้ำหนักเส้น)" }));
    o.push(L("TH.GENERAL.LINE_THIN_CONTINUOUS", [[20, 268], [60, 268]], { labelText: "เส้นเต็มบาง" }));
    o.push(text(64, 262, "เส้นรูปตัด 0.5–0.7 มม.", 2, { anchor: "start", color: "var(--ink-2)" }) + text(64, 268, "เส้นบอกระยะ / เส้นช่วย 0.13–0.18 มม.", 2, { anchor: "start", color: "var(--ink-2)" }));
    o.push(drawingTitle(X(4), 262, "แปลนพื้นชั้น 1", "1:50"));
    return o.join("");
  }

  /* ---------- A2-01 elevation 1 and section A-A (1:75, 1 m = 13.33 mm) ---------- */
  function elevSectionSheet() {
    var o = [], k = 40 / 3;
    function ex(m) { return 40 + (m + 0.7) * k; }
    function ey(lv) { return 118 - lv * k; }
    // Elevation 1 (south)
    o.push(H("TH.GENERAL.HATCH_EARTH", ex(-1.4), ey(0), (10.8) * k, 8, { sw: 0 }));
    o.push(L("TH.GENERAL.LINE_THICK_CONTINUOUS", [[ex(-1.4), ey(0)], [ex(9.4), ey(0)]], { weight: 0.7, labelText: "แนวระดับดิน" }));
    o.push(L("TH.GENERAL.BREAK_LINE", [[ex(-1.4), ey(0) - 3], [ex(-1.4), ey(0) + 9]]));
    o.push(L("TH.GENERAL.BREAK_LINE", [[ex(9.4), ey(0) - 3], [ex(9.4), ey(0) + 9]]));
    o.push(rect(ex(0), ey(3.2), 8 * k, 3.0 * k, 0.4));
    o.push(L("TH.ARCH.PLASTER_GROOVE_LINE", [[ex(0), ey(1.0)], [ex(8), ey(1.0)]]));
    o.push(L("TH.ARCH.PLASTER_GROOVE_LINE", [[ex(0), ey(2.5)], [ex(8), ey(2.5)]]));
    o.push(poly([[ex(-0.7), ey(3.2)], [ex(1.5), ey(4.7)], [ex(6.5), ey(4.7)], [ex(8.7), ey(3.2)], [ex(-0.7), ey(3.2)]], 0.45));
    o.push(rect(ex(1.5), ey(2.2), 0.9 * k, 2.0 * k, 0.3) + rect(ex(6.5), ey(2.0), 0.8 * k, 0.6 * k, 0.3) + poly([[ex(6.5), ey(1.4)], [ex(6.9), ey(2.0)], [ex(7.3), ey(1.4)]], 0.15, "var(--ink)", "0.8 0.6"));
    o.push(rect(ex(0.2), ey(3.0), 7.6 * k, 0.2 * k, 0.2, "var(--ink)", "none"));
    [[0, "±0.00", "ระดับดินเดิม"], [0.2, "+0.20", "FFL"], [2.2, "+2.20", "หลังวงกบ"], [3.2, "+3.20", "หลังคาน"], [4.7, "+4.70", "สันหลังคา"]].forEach(function (l) {
      o.push(levelMark(ex(9.9) + (l[0] === 0 ? 24 : 0), ey(l[0]), l[0], l[2]));
    });
    GRIDX.forEach(function (g) { o.push(line(ex(g[1]), ey(0) + 9, ex(g[1]), ey(0) + 13, 0.15, "var(--grid)", "2 0.8") + gridBubble(ex(g[1]), ey(0) + 18, g[0])); });
    o.push(drawingTitle(ex(4), 150, "รูปด้าน 1", "1:75"));

    // Section A-A
    function sy(lv) { return 238 - lv * k; }
    var gl = sy(0);
    o.push(H("TH.GENERAL.HATCH_EARTH", ex(-1.4), gl, 10.8 * k, sy(-1.5) - gl, { sw: 0 }));
    o.push(L("TH.GENERAL.LINE_THICK_CONTINUOUS", [[ex(-1.4), gl], [ex(9.4), gl]], { weight: 0.6, labelText: "แนวระดับดิน" }));
    // Footings, stone base, lean concrete
    [0, 4, 8].forEach(function (m) {
      o.push(H("TH.GENERAL.HATCH_STONE", ex(m - 0.55), sy(-1.35), 1.1 * k, 0.1 * k, { sw: 0.2 }));
      o.push(H("TH.GENERAL.HATCH_CONCRETE_PLAIN", ex(m - 0.55), sy(-1.25), 1.1 * k, 0.05 * k, { sw: 0.2 }));
      o.push(H("TH.GENERAL.HATCH_REINFORCED_CONCRETE", ex(m - 0.5), sy(-0.9), 1.0 * k, 0.3 * k, { sw: 0.35 }));
      o.push(H("TH.GENERAL.HATCH_REINFORCED_CONCRETE", ex(m - 0.1), sy(0.2), 0.2 * k, 1.1 * k, { sw: 0.35 }));
    });
    // Sand fill, slab, ground beam
    o.push(H("TH.GENERAL.HATCH_SAND", ex(0.1), sy(0.1), 7.8 * k, 0.1 * k * 1.0 + 0.6, { sw: 0.2 }));
    o.push(H("TH.GENERAL.HATCH_REINFORCED_CONCRETE", ex(-0.1), sy(0.2), 8.2 * k, 0.1 * k, { sw: 0.35 }));
    // Walls cut (brick) and roof beam
    [0, 4, 8].forEach(function (m) {
      o.push(H("TH.GENERAL.HATCH_BRICK", ex(m - 0.1), sy(3.0), 0.2 * k * (m === 4 ? 0.5 : 1) + 0.01, 2.8 * k, { sw: 0.4 }));
      o.push(H("TH.GENERAL.HATCH_REINFORCED_CONCRETE", ex(m - 0.1), sy(3.2), 0.2 * k, 0.2 * k, { sw: 0.4 }));
    });
    // Ceiling, insulation, steel roof structure, timber fascia
    o.push(line(ex(0.1), sy(2.8), ex(7.9), sy(2.8), 0.3));
    o.push(H("TH.GENERAL.HATCH_INSULATION", ex(0.1), sy(2.88), 7.8 * k, 0.08 * k + 0.4, { sw: 0.15 }));
    o.push(poly([[ex(-0.7), sy(3.2)], [ex(4), sy(4.7)], [ex(8.7), sy(3.2)]], 0.35));
    [1, 2, 3, 5, 6, 7].forEach(function (m) {
      var yy = m < 4 ? sy(3.2 + (m + 0.7) / 4.7 * 1.5) : sy(3.2 + (8.7 - m) / 4.7 * 1.5);
      o.push(H("TH.GENERAL.HATCH_STEEL", ex(m) - 1.2, yy - 0.6, 2.4, 1.6, { sw: 0.2 }));
    });
    o.push(H("TH.GENERAL.HATCH_TIMBER", ex(-0.75), sy(3.2), 0.05 * k + 0.4, 0.25 * k, { sw: 0.2 }));
    o.push(H("TH.GENERAL.HATCH_TIMBER", ex(8.7) - 0.4, sy(3.2), 0.05 * k + 0.4, 0.25 * k, { sw: 0.2 }));
    o.push(text(ex(2), sy(1.6), "ห้องนั่งเล่น", 2.6, { color: "var(--ink-2)" }) + text(ex(6), sy(1.6), "ห้องน้ำ", 2.6, { color: "var(--ink-2)" }));
    [[0, "±0.00", "ระดับดินเดิม"], [0.2, "+0.20", "FFL"], [2.8, "+2.80", "ฝ้าเพดาน"], [3.2, "+3.20", "หลังคาน"], [-1.2, "-1.20", "ท้องฐานราก"]].forEach(function (l) {
      o.push(levelMark(ex(9.9) + (l[0] === 0 ? 24 : 0), sy(l[0]), l[0], l[2]));
    });
    o.push(drawingTitle(ex(4), 268, "รูปตัด A-A", "1:75"));
    o.push(text(20, 280, "ลายวัสดุในรูปตัด: ดิน, หินย่อย, คอนกรีตหยาบ, ค.ส.ล., ทรายถม, อิฐ, ฉนวน, เหล็ก, ไม้", 2.1, { anchor: "start", color: "var(--ink-2)" }));
    return o.join("");
  }

  /* ---------- S-01 foundation plan and details ---------- */
  function strSheet() {
    var o = [], S = "var(--d-STR)";
    o.push(gridLines(Y(-2.1), Y(7.8), X(-2.1), X(9.4)));
    // Ground beams
    var beams = [[0, 0, 8, 0], [0, 3, 8, 3], [0, 6, 8, 6], [0, 0, 0, 6], [4, 0, 4, 6], [8, 0, 8, 6]];
    beams.forEach(function (b, i) {
      var horiz = b[1] === b[3], x = X(b[0]) - (horiz ? 0 : 2), y = Y(b[1]) - (horiz ? 2 : 0), w = horiz ? X(b[2]) - X(b[0]) : 4, h = horiz ? 4 : Y(b[3]) - Y(b[1]);
      o.push(rect(x, y, w, h, 0.3, S, "none"));
    });
    [[2, 0], [6, 0], [2, 3], [6, 3], [2, 6], [6, 6]].forEach(function (p) { o.push(memberTag("TH.STR.GROUND_BEAM_TAG", X(p[0]), Y(p[1]) - 3.6, "GB1")); });
    [[0, 1.5], [4, 1.5], [8, 1.5], [0, 4.5], [4, 4.5], [8, 4.5]].forEach(function (p) { o.push(memberTag("TH.STR.GROUND_BEAM_TAG", X(p[0]) + 5, Y(p[1]), "GB1")); });
    // Footings with piles and columns
    GRIDX.forEach(function (gx) {
      GRIDY.forEach(function (gy) {
        var cx = X(gx[1]), cy = Y(gy[1]);
        o.push(rect(cx - 12, cy - 12, 24, 24, 0.25, S, "none", "2 1"));
        [[-6, -6], [6, -6], [-6, 6], [6, 6]].forEach(function (d) { o.push(P("TH.STR.PILE_MARK", cx + d[0], cy + d[1], { scale: 0.8 })); });
        o.push(rect(cx - 2, cy - 2, 4, 4, 0, "none", S));
      });
    });
    [[0, 0], [8, 6]].forEach(function (p) { o.push(memberTag("TH.STR.FOOTING_TAG", X(p[0]) + 8, Y(p[1]) + 15, "F1", { box: true })); });
    [[4, 0], [4, 6]].forEach(function (p) { o.push(memberTag("TH.STR.FOOTING_TAG", X(p[0]) + 8, Y(p[1]) + 15, "F2", { box: true })); });
    o.push(memberTag("TH.STR.COLUMN_TAG", X(0) + 4.5, Y(0) - 4.5, "C1"));
    o.push(memberTag("TH.STR.COLUMN_TAG", X(4) + 4.5, Y(3) - 4.5, "C1"));
    [[2, 1.5, "S1"], [6, 1.5, "S1"], [2, 4.5, "S2"], [6, 4.5, "S2"]].forEach(function (p) {
      o.push(line(X(p[0]) - 16, Y(p[1]) + 10, X(p[0]) + 16, Y(p[1]) - 10, 0.15, S) + "");
      o.push(memberTag("TH.STR.SLAB_TAG", X(p[0]), Y(p[1]), p[2], { box: true }));
    });
    o.push(memberTag("TH.STR.STAIR_TAG", X(1.95), Y(6.75), "ST1", { box: true }));
    o.push(rect(X(-0.075), Y(6.1), 3, 22, 0.3, S, "none") + memberTag("TH.STR.WALL_TAG", X(-0.9), Y(6.9), "W1", { box: true }));
    o.push(drawingTitle(X(4), 234, "แปลนฐานรากและเสาตอม่อ", "1:50"));

    // Footing detail F1 (1:25, 1 m = 40 mm) at bottom left
    var fx = 30, fy = 262;
    o.push(H("TH.GENERAL.HATCH_REINFORCED_CONCRETE", fx, fy - 12, 40, 12, { sw: 0.4 }));
    o.push(H("TH.GENERAL.HATCH_REINFORCED_CONCRETE", fx + 16, fy - 32, 8, 20, { sw: 0.4 }));
    o.push(line(fx + 2, fy - 3, fx + 38, fy - 3, 0.5, S));
    for (var i = 0; i < 7; i++) o.push('<circle cx="' + (fx + 3 + i * 5.6) + '" cy="' + (fy - 4.2) + '" r="0.6" style="fill:' + S + '"/>');
    o.push(T("TH.STR.REBAR_CALLOUT", fx + 44, fy - 4, { text: "DB12@0.15 ม. (สองทาง)", leader: [[fx + 36, fy - 3], [fx + 43, fy - 4]] }));
    o.push(T("TH.STR.STIRRUP_CALLOUT", fx + 30, fy - 26, { text: "ป-RB6@0.15", leader: [[fx + 24, fy - 24], [fx + 29, fy - 26]] }));
    o.push(T("TH.STR.REBAR_CALLOUT", fx + 30, fy - 31, { text: "4-DB16", leader: [[fx + 22, fy - 30], [fx + 29, fy - 31]] }));
    o.push(text(fx + 20, fy + 5, "แบบขยายฐานราก F1  มาตราส่วน 1:25", 2.6, { weight: 700 }));
    // Notes column
    var nx = 196, ny = 222;
    o.push(text(nx, ny, "หมายเหตุทั่วไป (โครงสร้าง)", 2.8, { anchor: "start", weight: 700 }));
    o.push(T("TH.STR.CONCRETE_STRENGTH_NOTE", nx, ny + 6, {}));
    o.push(T("TH.STR.REBAR_GRADE_NOTE", nx, ny + 11, {}));
    o.push(T("TH.STR.CONCRETE_COVER_NOTE", nx, ny + 16, {}));
    o.push(T("TH.STR.STEEL_SECTION_DESIGNATION", nx, ny + 21, {}));
    o.push(P("TH.STR.WELD_SYMBOL", nx + 8, ny + 34));
    o.push(P("INTL.STR.BAR_SHAPE_CODE", nx + 36, ny + 34));
    o.push(P("TH.STR.BEAM_TAG", nx + 62, ny + 34));
    o.push(P("TH.STR.STEEL_BEAM_TAG", nx + 80, ny + 34));
    o.push(P("TH.STR.RC_MEMBER_SCHEDULE", 150, 272, { scale: 0.7 }));
    return o.join("");
  }

  /* ---------- MEP helpers ---------- */
  function base() { return plan(true); }

  /* ---------- E-01 power & lighting + SLD ---------- */
  function elecSheet() {
    var o = [base()];
    // Receptacles on walls
    o.push(P("TH.ELEC.RECEPTACLE_DUPLEX", X(0.15), Y(2.6), { rot: 90 }));
    o.push(P("TH.ELEC.RECEPTACLE_DUPLEX", X(3.0), Y(5.85), { rot: 180 }));
    o.push(P("TH.ELEC.RECEPTACLE_SINGLE", X(7.85), Y(2.6), { rot: -90 }));
    o.push(P("TH.ELEC.SOCKET_OUTLET_IEC", X(5.2), Y(0.2)));
    o.push(P("TH.ELEC.RECEPTACLE_FLOOR", X(2.0), Y(4.2)));
    o.push(P("TH.ELEC.RECEPTACLE_3PHASE", X(0.2), Y(5.4)));
    o.push(P("TH.ELEC.AC_OUTLET_ISOLATOR", X(7.6), Y(0.2)));
    o.push(P("TH.ELEC.AC_OUTLET_ISOLATOR", X(0.2), Y(0.5)));
    // Switches by the doors
    o.push(P("TH.ELEC.SWITCH_1WAY", X(2.6), Y(5.6)));
    o.push(P("TH.ELEC.SWITCH_2WAY", X(4.3), Y(1.5)));
    o.push(P("TH.ELEC.SWITCH_2WAY", X(3.7), Y(1.5)));
    o.push(P("TH.ELEC.SWITCH_DIMMER", X(2.9), Y(5.6)));
    o.push(P("TH.ELEC.OCCUPANCY_SENSOR", X(4.3), Y(4.3)));
    o.push(P("INTL.ELEC.PUSH_BUTTON", X(0.35), Y(5.7)));
    o.push(P("INTL.ELEC.PUSH_BUTTON_PROTECTED", X(0.35), Y(4.9) + 1));
    o.push(P("INTL.ELEC.PULL_CORD_SWITCH", X(7.3), Y(3.3)));
    // Luminaires
    o.push(P("TH.ELEC.LUMINAIRE_LINEAR", X(2.0), Y(1.5)));
    o.push(P("TH.ELEC.LUMINAIRE_TROFFER", X(2.0), Y(3.8)));
    o.push(P("TH.ELEC.LUMINAIRE_DOWNLIGHT", X(5.9), Y(0.8)));
    o.push(P("TH.ELEC.LUMINAIRE_DOWNLIGHT", X(5.9), Y(2.2)));
    o.push(P("TH.ELEC.LUMINAIRE_DOWNLIGHT", X(5.0), Y(4.6)));
    o.push(P("TH.ELEC.LUMINAIRE_WALL", X(1.95), Y(6.25)));
    o.push(P("TH.ELEC.EMERGENCY_LIGHT", X(1.0), Y(5.6)));
    o.push(P("TH.ELEC.EXIT_SIGN", X(1.95), Y(5.55)));
    // Distribution
    o.push(P("TH.ELEC.CONSUMER_UNIT", X(0.35), Y(3.9)));
    o.push(P("TH.ELEC.JUNCTION_BOX", X(2.0), Y(2.6)));
    o.push(L("TH.ELEC.WIRING_CONCEALED", [pt(2.0, 1.8), pt(2.0, 2.45)]));
    o.push(L("TH.ELEC.WIRING_CONCEALED", [pt(2.0, 2.75), pt(2.0, 3.55)]));
    o.push(L("TH.ELEC.WIRING_CONCEALED", [pt(5.9, 1.05), pt(5.9, 1.95)]));
    o.push(L("TH.ELEC.WIRING_UNDERFLOOR", [pt(2.0, 4.35), pt(0.8, 4.35), pt(0.6, 3.9)]));
    o.push(P("TH.ELEC.HOME_RUN", X(1.1), Y(2.6)));
    o.push(P("TH.ELEC.HOME_RUN", X(5.2), Y(1.1)));
    o.push(drawingTitle(X(4), 212, "แปลนไฟฟ้ากำลังและแสงสว่าง", "1:50"));
    // Single line diagram
    var y = 252, xs = { tr: 30, m: 52, cb: 72, mdb: 96, ats: 140, db: 185, cb2: 215, mo: 238, cap: 262 };
    o.push(text(20, 228, "แผนภาพเส้นเดียว (Single line diagram)", 2.8, { anchor: "start", weight: 700 }));
    o.push(line(xs.tr + 5, y, xs.mdb - 7, y, 0.35, "var(--d-ELEC)") + line(xs.mdb + 7, y, xs.db - 7, y, 0.35, "var(--d-ELEC)") + line(xs.db + 7, y, xs.cap, y, 0.35, "var(--d-ELEC)"));
    o.push(line(xs.ats, y, xs.ats, y + 18, 0.35, "var(--d-ELEC)") + line(xs.mo, y, xs.mo, y + 12, 0.35, "var(--d-ELEC)"));
    o.push(P("TH.ELEC.TRANSFORMER", xs.tr, y, { note: "" }));
    o.push(P("TH.ELEC.KWH_METER", xs.m, y));
    o.push(P("TH.ELEC.CIRCUIT_BREAKER", xs.cb, y));
    o.push(T("INTL.ELEC.REFERENCE_DESIGNATION", xs.cb - 4, y - 7, { size: 2.2 }));
    o.push(P("TH.ELEC.PANEL_MDB", xs.mdb, y));
    o.push(P("TH.ELEC.ATS", xs.ats, y));
    o.push(P("TH.ELEC.GENERATOR", xs.ats, y + 22));
    o.push(P("TH.ELEC.PANEL_DB", xs.db, y));
    o.push(P("TH.ELEC.CIRCUIT_BREAKER", xs.cb2, y));
    o.push(P("TH.ELEC.MOTOR", xs.mo, y + 16));
    o.push(P("TH.ELEC.CAPACITOR_BANK", xs.cap, y + 8));
    o.push(text(xs.tr, y + 9, "22 kV/416-240 V", 1.8, { color: "var(--d-ELEC)" }) + text(xs.mdb, y + 9, "MDB", 2, { color: "var(--d-ELEC)" }) + text(xs.db, y + 9, "LP-1", 2, { color: "var(--d-ELEC)" }) +
      text(xs.mo + 6, y + 16, "ปั๊มน้ำ", 1.8, { anchor: "start", color: "var(--d-ELEC)" }));
    o.push(T("TH.ELEC.WIRING_CONCEALED", 100, y - 8, { text: "60227 IEC 01 (THW) 4×25 + G 16 sq.mm. in IMC 1 1/4\"", size: 1.9 }));
    return o.join("");
  }

  /* ---------- E-02 ELV + fire alarm ---------- */
  function elvFaSheet() {
    var o = [base()];
    o.push(P("TH.ELV.TELEPHONE_OUTLET", X(0.2), Y(3.0), { rot: 90 }));
    o.push(P("TH.ELV.DATA_OUTLET", X(3.8), Y(2.9), { rot: -90 }));
    o.push(P("TH.ELV.TV_OUTLET", X(3.8), Y(4.0), { rot: -90 }));
    o.push(P("TH.ELV.DATA_OUTLET", X(7.8), Y(1.0), { rot: -90 }));
    o.push(P("TH.ELV.CCTV_CAMERA", X(0.4), Y(6.4)));
    o.push(P("TH.ELV.SPEAKER", X(2.0), Y(2.0)));
    o.push(P("TH.ELV.ACCESS_CONTROL", X(2.7), Y(5.7)));
    o.push(P("TH.ELV.WIFI_AP", X(2.0), Y(4.9)));
    o.push(P("TH.ELV.RACK", X(0.45), Y(4.6)));
    o.push(P("TH.ELV.NURSE_CALL", X(7.5), Y(3.5)));
    // Fire alarm
    o.push(P("TH.FA.SMOKE_DETECTOR", X(1.3), Y(1.3)));
    o.push(P("TH.FA.SMOKE_DETECTOR", X(5.9), Y(1.5)));
    o.push(P("TH.FA.HEAT_DETECTOR", X(6.9), Y(4.6)));
    o.push(P("TH.FA.BEAM_DETECTOR", X(0.5), Y(2.5)));
    o.push(P("TH.FA.FLAME_DETECTOR", X(3.2), Y(3.6)));
    o.push(P("TH.FA.GAS_DETECTOR", X(3.2), Y(1.0)));
    o.push(P("TH.FA.DUCT_SMOKE_DETECTOR", X(5.0), Y(2.4)));
    o.push(P("TH.FA.MANUAL_STATION", X(1.1), Y(5.7)));
    o.push(P("TH.FA.BELL", X(3.6), Y(5.6)));
    o.push(P("TH.FA.HORN_STROBE", X(4.4), Y(0.35)));
    o.push(P("TH.FA.CONTROL_PANEL", X(-1.3), Y(5.5)));
    o.push(P("TH.FA.ANNUNCIATOR", X(-1.3), Y(4.2)));
    o.push(P("TH.FA.EOL_DEVICE", X(7.4), Y(0.35)));
    o.push(P("TH.FA.FLOW_TAMPER_INTERFACE", X(9.0), Y(6.3)));
    o.push(P("TH.FA.FIRE_TELEPHONE", X(-1.3), Y(2.9)));
    o.push(P("INTL.FA.EVACUATION_PLAN_VIEWER_POSITION", X(2.5), Y(5.0)));
    o.push(poly([pt(1.3, 1.3), pt(5.9, 1.5), pt(6.9, 4.6), pt(7.4, 0.35)], 0.2, "var(--d-FA)", "2 1"));
    o.push(text(X(-1.3), Y(6.6), "ตู้ควบคุมอยู่ที่โถงทางเข้า", 1.8, { color: "var(--d-FA)" }));
    o.push(drawingTitle(X(4), 212, "แปลนไฟฟ้ากระแสอ่อนและระบบแจ้งเหตุเพลิงไหม้", "1:50"));
    return o.join("");
  }

  /* ---------- E-03 lightning protection and earthing ---------- */
  function lpsSheet() {
    var o = [], rx = function (m) { return 60 + (m + 0.7) * 20; }, ry = function (m) { return 50 + (m + 0.7) * 20; };
    o.push(rect(rx(-0.7), ry(-0.7), 9.4 * 20, 7.4 * 20, 0.4));
    o.push(line(rx(1.5), ry(3), rx(6.5), ry(3), 0.4) + line(rx(-0.7), ry(-0.7), rx(1.5), ry(3), 0.25) + line(rx(-0.7), ry(6.7), rx(1.5), ry(3), 0.25) + line(rx(8.7), ry(-0.7), rx(6.5), ry(3), 0.25) + line(rx(8.7), ry(6.7), rx(6.5), ry(3), 0.25));
    o.push(text(rx(4), ry(1.4), "หลังคาปั้นหยา ลาด 30°", 2.4, { color: "var(--ink-2)" }));
    o.push(L("TH.ELEC.ROOF_CONDUCTOR", [[rx(1.5), ry(3)], [rx(6.5), ry(3)]]));
    o.push(L("TH.ELEC.ROOF_CONDUCTOR", [[rx(-0.6), ry(-0.6)], [rx(8.6), ry(-0.6)], [rx(8.6), ry(6.6)], [rx(-0.6), ry(6.6)], [rx(-0.6), ry(-0.6)]]));
    o.push(P("TH.ELEC.AIR_TERMINAL", rx(1.5), ry(3)));
    o.push(P("TH.ELEC.AIR_TERMINAL", rx(6.5), ry(3)));
    o.push(P("TH.ELEC.AIR_TERMINAL_ESE", rx(4), ry(3)));
    [[-0.6, -0.6], [8.6, -0.6], [8.6, 6.6], [-0.6, 6.6]].forEach(function (p, i) {
      o.push(P("TH.ELEC.DOWN_CONDUCTOR", rx(p[0]), ry(p[1])));
      o.push(P("TH.ELEC.TEST_JOINT", rx(p[0]) + (p[0] < 0 ? -7 : 7), ry(p[1])));
      o.push(P("TH.ELEC.GROUND_ROD", rx(p[0]) + (p[0] < 0 ? -7 : 7), ry(p[1]) + (p[1] < 0 ? -8 : 8)));
    });
    o.push(P("TH.ELEC.GROUND_PIT", rx(-1.4), ry(3)));
    o.push(P("TH.ELEC.MAIN_GROUND_BUSBAR", rx(-1.4), ry(4.4)));
    o.push(L("TH.ELEC.EQUIPOTENTIAL_BOND", [[rx(-1.4), ry(4.4) + 3], [rx(-1.4), ry(5.6)], [rx(0.5), ry(5.6)]]));
    o.push(text(rx(0.6), ry(5.6), "ต่อประสานท่อน้ำ/โครงเหล็ก", 1.8, { anchor: "start", color: "var(--d-ELEC)" }));
    o.push(drawingTitle(rx(4), 220, "ผังหลังคา ระบบป้องกันฟ้าผ่าและต่อลงดิน", "1:50"));
    o.push(text(20, 250, "ออกแบบตาม วสท. / มอก. IEC 62305 (ระดับการป้องกันตามการประเมินความเสี่ยง)", 2.2, { anchor: "start", color: "var(--ink-2)" }));
    return o.join("");
  }

  /* ---------- SN-01 plumbing and sanitary ---------- */
  function sanSheet() {
    var o = [base()];
    // Water supply from the street
    o.push(P("TH.PLB.WATER_METER", X(1.0), Y(8.6)));
    o.push(L("TH.PLB.COLD_WATER_LINE", [pt(1.4, 8.6), pt(3.0, 8.6)]));
    o.push(P("TH.PLB.GATE_VALVE", X(3.2), Y(8.6)));
    o.push(P("TH.PLB.Y_STRAINER", X(3.8), Y(8.6)));
    o.push(P("TH.PLB.CHECK_VALVE", X(4.4), Y(8.6)));
    o.push(L("TH.PLB.COLD_WATER_LINE", [pt(4.7, 8.6), pt(6.4, 8.6)]));
    o.push(P("TH.PLB.WATER_TANK", X(7.0), Y(8.6)));
    o.push(P("TH.PLB.FLOAT_VALVE", X(6.5), Y(8.1)));
    o.push(L("TH.PLB.COLD_WATER_LINE", [pt(7.6, 8.6), pt(8.4, 8.6)]));
    o.push(P("TH.PLB.PUMP", X(8.8), Y(8.6)));
    o.push(P("TH.PLB.PRESSURE_REDUCING_VALVE", X(9.3), Y(7.6)));
    o.push(L("TH.PLB.COLD_WATER_LINE", [pt(9.3, 8.3), pt(9.3, 7.9)]));
    o.push(L("TH.PLB.COLD_WATER_LINE", [pt(9.3, 7.3), pt(9.3, 5.0), pt(7.6, 5.0)]));
    o.push(P("TH.PLB.BALL_VALVE", X(7.3), Y(5.0)));
    o.push(L("TH.PLB.COLD_WATER_LINE", [pt(7.0, 5.0), pt(6.6, 5.0), pt(6.6, 3.4)]));
    o.push(P("TH.PLB.GLOBE_VALVE", X(6.6), Y(3.3)));
    o.push(P("TH.PLB.BUTTERFLY_VALVE", X(8.8), Y(9.3)));
    o.push(P("TH.PLB.HOSE_BIBB", X(8.25), Y(6.4)));
    o.push(L("TH.PLB.HOT_WATER_LINE", [pt(6.6, 4.0), pt(7.4, 4.0), pt(7.4, 3.4)]));
    // Drainage
    o.push(P("TH.SAN.FLOOR_DRAIN", X(5.0), Y(5.2)));
    o.push(P("TH.SAN.FLOOR_DRAIN", X(7.0), Y(3.7)));
    o.push(L("TH.SAN.WASTE_LINE", [pt(5.0, 5.4), pt(5.0, 6.8), pt(6.2, 6.8)]));
    o.push(L("TH.SAN.SOIL_LINE", [pt(5.6, 5.4), pt(5.6, 7.4), pt(6.2, 7.4)]));
    o.push(P("TH.SAN.CLEANOUT", X(5.0), Y(6.2)));
    o.push(P("TH.SAN.GREASE_TRAP", X(6.7), Y(6.8)));
    o.push(P("TH.SAN.SEPTIC_TANK", X(6.9), Y(7.8) + 2));
    o.push(L("TH.SAN.VENT_LINE", [pt(7.6, 3.6), pt(7.6, 3.2)]));
    o.push(P("TH.SAN.VENT_THROUGH_ROOF", X(7.6), Y(3.35) - 4));
    o.push(P("TH.SAN.ROOF_DRAIN", X(-0.4), Y(-0.4)));
    o.push(P("TH.SAN.ROOF_DRAIN", X(8.4), Y(-0.4)));
    o.push(L("TH.SAN.RAINWATER_LINE", [pt(8.4, -0.2), pt(8.9, -0.2), pt(8.9, 6.9)]));
    o.push(L("TH.SAN.RAINWATER_LINE", [pt(-0.4, -0.2), pt(-1.2, -0.2), pt(-1.2, 8.6), pt(0.3, 8.6)]));
    o.push(P("TH.SAN.MANHOLE", X(8.9), Y(7.3)));
    o.push(L("TH.SAN.CONDENSATE_DRAIN_LINE", [pt(7.5, 0.4), pt(7.5, -0.4), pt(8.3, -0.4)]));
    o.push(drawingTitle(X(4), 272, "แปลนระบบประปาและสุขาภิบาล", "1:50"));
    return o.join("");
  }

  /* ---------- FP-01 fire protection and gas ---------- */
  function fpSheet() {
    var o = [base()];
    o.push(L("TH.FP.FIRE_MAIN_LINE", [pt(9.3, 8.4), pt(9.3, 6.4), pt(9.3, 3.2), pt(4.2, 3.2), pt(4.2, 1.0), pt(2.0, 1.0)]));
    o.push(L("TH.FP.FIRE_MAIN_LINE", [pt(4.2, 3.2), pt(2.0, 3.2), pt(2.0, 4.8)]));
    [[2.0, 1.0], [6.0, 1.0], [2.0, 4.8]].forEach(function (p) { o.push(P("TH.FP.SPRINKLER_PENDENT", X(p[0]), Y(p[1]))); });
    o.push(L("TH.FP.FIRE_MAIN_LINE", [pt(4.2, 1.0), pt(6.0, 1.0)]));
    o.push(P("TH.FP.SPRINKLER_UPRIGHT", X(6.0), Y(2.2)));
    o.push(P("TH.FP.SPRINKLER_SIDEWALL", X(7.75), Y(4.6), { rot: 90 }));
    o.push(P("TH.FP.FIRE_HOSE_CABINET", X(0.45), Y(4.8) - 12));
    o.push(P("TH.FP.EXTINGUISHER", X(3.6), Y(5.55)));
    o.push(P("TH.FP.EXTINGUISHER", X(3.6), Y(0.4)));
    // Riser equipment outside
    o.push(P("TH.FP.FIRE_PUMP", X(9.3), Y(9.2)));
    o.push(P("TH.FP.ALARM_CHECK_VALVE", X(9.3), Y(7.9)));
    o.push(P("TH.FP.ZONE_CONTROL_VALVE", X(9.3), Y(6.4)));
    o.push(P("TH.FP.FLOW_SWITCH", X(9.3), Y(5.5)));
    o.push(P("TH.FP.TAMPER_SWITCH", X(9.85), Y(6.4)));
    o.push(P("TH.FP.INSPECTOR_TEST_VALVE", X(9.3), Y(4.2)));
    o.push(P("TH.FP.FIRE_DEPARTMENT_CONNECTION", X(10.2), Y(8.4)));
    o.push(P("TH.FP.HYDRANT", X(-1.3), Y(8.6)));
    // Gas
    o.push(P("TH.GAS.CYLINDER_BANK", X(-1.4), Y(1.0)));
    o.push(P("TH.GAS.REGULATOR", X(-1.4), Y(2.1)));
    o.push(L("TH.GAS.GAS_LINE", [pt(-1.4, 2.4), pt(-1.4, 2.7), pt(-0.2, 2.7)]));
    o.push(P("TH.GAS.GAS_VALVE", X(-0.7), Y(2.7)));
    o.push(P("TH.GAS.LEAK_DETECTOR", X(0.5), Y(2.4)));
    o.push(drawingTitle(X(4), 272, "แปลนระบบดับเพลิงและระบบก๊าซ", "1:50"));
    return o.join("");
  }

  /* ---------- M-01 air conditioning and ventilation ---------- */
  function hvacSheet() {
    var o = [base()];
    o.push(P("TH.HVAC.FCU", X(5.9), Y(0.55)));
    o.push(L("TH.HVAC.SUPPLY_DUCT", [pt(5.9, 0.9), pt(5.9, 1.9)]));
    o.push(P("TH.HVAC.SUPPLY_DIFFUSER", X(5.9), Y(2.2)));
    o.push(P("TH.HVAC.RETURN_GRILLE", X(6.9), Y(0.9)));
    o.push(P("TH.HVAC.VOLUME_DAMPER", X(5.9), Y(1.4)));
    o.push(P("TH.HVAC.FCU", X(2.0), Y(0.55)));
    o.push(L("TH.HVAC.SUPPLY_DUCT", [pt(2.0, 0.9), pt(2.0, 2.6), pt(1.0, 2.6)]));
    o.push(L("TH.HVAC.FLEX_DUCT", [pt(2.0, 2.6), pt(3.0, 2.6), pt(3.0, 3.6)]));
    o.push(P("TH.HVAC.SLOT_DIFFUSER", X(1.0), Y(2.9)));
    o.push(P("TH.HVAC.SUPPLY_DIFFUSER", X(3.0), Y(3.9)));
    o.push(L("TH.HVAC.RETURN_DUCT", [pt(1.2, 0.9), pt(1.2, 1.6)]));
    o.push(P("TH.HVAC.RETURN_GRILLE", X(1.2), Y(1.8)));
    o.push(P("TH.HVAC.FIRE_DAMPER", X(4.0), Y(2.6)));
    o.push(P("TH.HVAC.THERMOSTAT", X(3.8), Y(1.1)));
    o.push(P("TH.HVAC.THERMOSTAT", X(4.2), Y(0.6)));
    o.push(P("TH.HVAC.EXHAUST_GRILLE", X(7.0), Y(5.0)));
    o.push(P("TH.HVAC.EXHAUST_FAN", X(7.9) + 5, Y(5.0)));
    o.push(P("TH.HVAC.FRESH_AIR_LOUVER", X(0.0) - 4, Y(1.2) + 22));
    o.push(P("TH.HVAC.CONDENSING_UNIT", X(9.4), Y(1.2)));
    o.push(L("TH.HVAC.REFRIGERANT_PIPE", [pt(8.9, 1.2), pt(8.4, 1.2), pt(8.4, 0.3), pt(6.3, 0.3)]));
    o.push(L("TH.HVAC.REFRIGERANT_PIPE", [pt(8.9, 1.5), pt(8.6, 1.5), pt(8.6, -0.4), pt(2.3, -0.4), pt(2.3, 0.3)]));
    // Chilled water schematic (example for a larger building)
    var y = 250;
    o.push(text(20, 226, "แผนผังระบบน้ำเย็น (ตัวอย่างสำหรับอาคารขนาดใหญ่)", 2.8, { anchor: "start", weight: 700 }));
    o.push(P("TH.HVAC.CHILLER", 40, y));
    o.push(L("TH.HVAC.CHILLED_WATER_PIPE", [[50, y - 4], [150, y - 4]], { label: "CHS" }));
    o.push(L("TH.HVAC.CHILLED_WATER_PIPE", [[150, y + 4], [50, y + 4]], { label: "CHR" }));
    o.push(P("TH.HVAC.AHU", 165, y));
    o.push(P("GENERAL.ISA_INSTRUMENT_BUBBLE" in TB.SYM ? "GENERAL.ISA_INSTRUMENT_BUBBLE" : "INTL.GENERAL.ISA_INSTRUMENT_BUBBLE", 120, y - 16, { note: "TT-101" }));
    o.push(L("INTL.GENERAL.ISA_SIGNAL_LINES", [[120, y - 12], [120, y - 4]]));
    o.push(L("INTL.GENERAL.ISA_SIGNAL_LINES", [[124, y - 16], [150, y - 16], [160, y - 8]]));
    o.push(drawingTitle(X(4), 212, "แปลนระบบปรับอากาศและระบายอากาศ", "1:50"));
    return o.join("");
  }

  /* ---------- sheet list ---------- */
  function ids(pred) { return Object.keys(TB.SYM).filter(function (id) { return pred(TB.SYM[id], id); }); }
  var LIGHTNING = ["TH.ELEC.AIR_TERMINAL", "TH.ELEC.AIR_TERMINAL_ESE", "TH.ELEC.ROOF_CONDUCTOR", "TH.ELEC.DOWN_CONDUCTOR", "TH.ELEC.TEST_JOINT", "TH.ELEC.GROUND_ROD", "TH.ELEC.GROUND_PIT", "TH.ELEC.MAIN_GROUND_BUSBAR", "TH.ELEC.EQUIPOTENTIAL_BOND"];
  var SHEET_ITEMS = ["TH.GENERAL.TITLE_BLOCK", "TH.GENERAL.SHEET_NUMBER", "TH.GENERAL.DRAWING_TITLE", "TH.GENERAL.NOTE_DO_NOT_SCALE", "TH.GENERAL.PERMIT_STAMP"];
  var SHEETS_LIST = [
    { no: "A0-02", title: "ผังบริเวณ", tab: "ผังบริเวณ", scale: "1:200", lic: "CIVIL", draw: siteSheet,
      legend: ids(function (r, id) { return r.discipline === "CIVIL" || r.discipline === "SURVEY"; }).concat(["TH.GENERAL.PROPERTY_LINE", "INTL.ARCH.DEMOLITION_REPRESENTATION"]) },
    { no: "A1-01", title: "แปลนพื้นชั้น 1", tab: "สถาปัตย์ แปลน", scale: "1:50", lic: "ARCH", draw: planSheet,
      legend: ids(function (r, id) { return (r.discipline === "ARCH" && id.indexOf("HATCH") < 0 && id !== "INTL.ARCH.DEMOLITION_REPRESENTATION") || (r.discipline === "GENERAL" && id.indexOf("HATCH") < 0 && id.indexOf("ISA") < 0 && id !== "TH.GENERAL.PROPERTY_LINE" && SHEET_ITEMS.indexOf(id) < 0); })
        .concat(ids(function (r, id) { return id.indexOf("TH.ARCH.HATCH_WALL") === 0; })).concat(SHEET_ITEMS) },
    { no: "A2-01", title: "รูปด้าน 1 และรูปตัด A-A", tab: "สถาปัตย์ รูปด้าน/รูปตัด", scale: "1:75", lic: "ARCH", draw: elevSectionSheet,
      legend: ids(function (r, id) { return id.indexOf("TH.GENERAL.HATCH") === 0; }).concat(["TH.ARCH.LEVEL_MARK", "TH.ARCH.PLASTER_GROOVE_LINE", "TH.GENERAL.BREAK_LINE", "TH.GENERAL.GRID_BUBBLE"]) },
    { no: "S-01", title: "แปลนฐานรากและเสาตอม่อ", tab: "โครงสร้าง", scale: "1:50, 1:25", lic: "STR", draw: strSheet,
      legend: ids(function (r) { return r.discipline === "STR"; }) },
    { no: "E-01", title: "ไฟฟ้ากำลังและแสงสว่าง", tab: "ไฟฟ้า", scale: "1:50", lic: "ELEC", draw: elecSheet,
      legend: ids(function (r, id) { return r.discipline === "ELEC" && LIGHTNING.indexOf(id) < 0; }) },
    { no: "E-02", title: "ไฟฟ้ากระแสอ่อนและแจ้งเหตุเพลิงไหม้", tab: "กระแสอ่อน/แจ้งเหตุ", scale: "1:50", lic: "ELEC", draw: elvFaSheet,
      legend: ids(function (r) { return r.discipline === "ELV" || r.discipline === "FA"; }) },
    { no: "E-03", title: "ป้องกันฟ้าผ่าและต่อลงดิน", tab: "ล่อฟ้า/ต่อลงดิน", scale: "1:50", lic: "ELEC", draw: lpsSheet, legend: LIGHTNING },
    { no: "SN-01", title: "ระบบประปาและสุขาภิบาล", tab: "ประปา/สุขาภิบาล", scale: "1:50", lic: "MECH", draw: sanSheet,
      legend: ids(function (r) { return r.discipline === "PLB" || r.discipline === "SAN"; }) },
    { no: "FP-01", title: "ระบบดับเพลิงและระบบก๊าซ", tab: "ดับเพลิง/ก๊าซ", scale: "1:50", lic: "MECH", draw: fpSheet,
      legend: ids(function (r) { return r.discipline === "FP" || r.discipline === "GAS"; }) },
    { no: "M-01", title: "ระบบปรับอากาศและระบายอากาศ", tab: "ปรับอากาศ", scale: "1:50", lic: "MECH", draw: hvacSheet,
      legend: ids(function (r, id) { return r.discipline === "HVAC" || id.indexOf("ISA") >= 0; }) }
  ];
  SHEETS_LIST.forEach(function (s, i) { s.idx = i + 1; });

  function render(sh) {
    TB.resetPlaced();
    return frame(sh, sh.draw());
  }
  function coverage() {
    var all = {};
    SHEETS_LIST.forEach(function (s) { s.legend.forEach(function (id) { all[id] = 1; }); });
    return all;
  }
  return { list: SHEETS_LIST, render: render, coverage: coverage };
})(TB);
