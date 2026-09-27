/* TBIM example engine: glyph placement, inspector, legend.
   All drawing units are paper millimetres. */
var TB = (function () {
  "use strict";
  var DATA = JSON.parse(document.getElementById("tbim-data").textContent);
  var SYM = DATA.symbols;
  var G = window.TBIM_GLYPHS || {};

  var STATUS_TH = { standard: "มาตรฐาน", agency: "มาตรฐานหน่วยงาน", observed_practice: "พบในแบบจริง", unverified: "ยังไม่ยืนยัน" };
  var REGION_TH = { TH: "ไทย", SG: "สิงคโปร์", GB: "จีน GB/T", JIS: "ญี่ปุ่น JIS", US_NCS: "สหรัฐฯ NCS", US_NECA: "สหรัฐฯ NECA", IEC: "IEC", ISO: "ISO", NFPA: "NFPA", DIN: "เยอรมนี DIN", AS: "ออสเตรเลีย AS", KS: "เกาหลี KS", BS: "อังกฤษ BS", EN: "ยุโรป EN" };
  var DISC_TH = { ARCH: "สถาปัตยกรรม", GENERAL: "ทั่วไป", STR: "โครงสร้าง", ELEC: "ไฟฟ้า", FA: "แจ้งเหตุเพลิงไหม้", SAN: "สุขาภิบาล", PLB: "ประปา", ELV: "ไฟฟ้ากระแสอ่อน", FP: "ดับเพลิง", HVAC: "ปรับอากาศ", CIVIL: "โยธา", SURVEY: "สำรวจ", GAS: "ก๊าซ" };
  var DISC_ORDER = ["ARCH", "GENERAL", "STR", "ELEC", "ELV", "FA", "PLB", "SAN", "FP", "GAS", "HVAC", "CIVIL", "SURVEY"];

  var state = { region: "TH", prefix: "latin", selected: null, sheet: null };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function f(n) { return Math.round(n * 100) / 100; }
  function color(id) { return "var(--d-" + (SYM[id] ? SYM[id].discipline : "GENERAL") + ")"; }
  function name(id) { return SYM[id] ? SYM[id].name.th : id; }
  function hatchId(id) { return "hp-" + id.replace(/[^A-Za-z0-9]/g, "_"); }

  // Region profile actually used by a record: the chosen region if the record has one, else TH.
  function profileFor(id) {
    var rec = SYM[id];
    if (!rec) return "TH";
    for (var i = 0; i < rec.region_profiles.length; i++) if (rec.region_profiles[i].region === state.region) return state.region;
    return "TH";
  }

  /* ---------- primitive SVG helpers ---------- */
  function text(x, y, s, size, o) {
    o = o || {};
    return '<text x="' + f(x) + '" y="' + f(y) + '" font-size="' + size + '" text-anchor="' + (o.anchor || "middle") +
      '" dominant-baseline="central" style="fill:' + (o.color || "var(--ink)") + ';font-family:var(--font-draw);font-weight:' + (o.weight || 400) + '"' +
      (o.rotate ? ' transform="rotate(' + o.rotate + " " + f(x) + " " + f(y) + ')"' : "") + ">" + esc(s) + "</text>";
  }
  function line(x1, y1, x2, y2, w, c, dash) {
    return '<line x1="' + f(x1) + '" y1="' + f(y1) + '" x2="' + f(x2) + '" y2="' + f(y2) + '" style="stroke:' + (c || "var(--ink)") +
      ";stroke-width:" + w + (dash ? ";stroke-dasharray:" + dash : "") + '"/>';
  }
  function poly(pts, w, c, dash, fill) {
    return '<polyline points="' + pts.map(function (p) { return f(p[0]) + "," + f(p[1]); }).join(" ") + '" style="fill:' + (fill || "none") +
      ";stroke:" + (c || "var(--ink)") + ";stroke-width:" + w + (dash ? ";stroke-dasharray:" + dash : "") + ';stroke-linejoin:round"/>';
  }
  function circle(x, y, r, w, c, fill) {
    return '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + r + '" style="stroke:' + (c || "var(--ink)") + ";stroke-width:" + w + ";fill:" + (fill || "var(--sheet)") + '"/>';
  }
  function rect(x, y, w, h, sw, c, fill, dash) {
    return '<rect x="' + f(x) + '" y="' + f(y) + '" width="' + f(w) + '" height="' + f(h) + '" style="stroke:' + (c || "var(--ink)") + ";stroke-width:" + sw +
      ";fill:" + (fill || "none") + (dash ? ";stroke-dasharray:" + dash : "") + '"/>';
  }

  /* ---------- clickable wrapper ---------- */
  var placed = {};
  function wrap(id, inner, box, label) {
    placed[id] = (placed[id] || 0) + 1;
    var pad = 0.6;
    return '<g class="sym" tabindex="0" role="button" data-id="' + esc(id) + '" aria-label="' + esc(label || name(id)) + '">' +
      '<rect class="hit" x="' + f(box[0] - pad) + '" y="' + f(box[1] - pad) + '" width="' + f(box[2] + 2 * pad) + '" height="' + f(box[3] + 2 * pad) + '" rx="1"/>' +
      inner + "</g>";
  }
  function resetPlaced() { placed = {}; }

  /* ---------- glyph placement ---------- */
  function fallbackGlyph(id) {
    var ab = (SYM[id] && SYM[id].abbreviations && SYM[id].abbreviations[0]) || "?";
    return { kind: "point", box: [-4, -3, 8, 6], svg: "<rect class='s' x='-4' y='-3' width='8' height='6' stroke-dasharray='0.8 0.6'/><text class='tx' x='0' y='0' font-size='2.2'>" + esc(ab) + "</text>", basis: "missing" };
  }
  function glyph(id) { return G[id] || fallbackGlyph(id); }
  // Text glyphs carry only their leader/frame in svg; the sample text is drawn centred on the insertion point.
  function glyphSvg(g) {
    var svg = g.svg || "";
    if (g.kind === "text" && g.samples && g.samples.length && svg.indexOf("<text") < 0) {
      svg += "<text class='tx' x='0' y='0' font-size='2.5'>" + esc(g.samples[0]) + "</text>";
    }
    return svg;
  }

  function rotBox(b, rot, s) {
    var pts = [[b[0], b[1]], [b[0] + b[2], b[1]], [b[0], b[1] + b[3]], [b[0] + b[2], b[1] + b[3]]];
    var a = (rot || 0) * Math.PI / 180, c = Math.cos(a), sn = Math.sin(a);
    var xs = [], ys = [];
    pts.forEach(function (p) { xs.push((p[0] * c - p[1] * sn) * s); ys.push((p[0] * sn + p[1] * c) * s); });
    var x0 = Math.min.apply(null, xs), y0 = Math.min.apply(null, ys);
    return [x0, y0, Math.max.apply(null, xs) - x0, Math.max.apply(null, ys) - y0];
  }

  // Point / block glyph at (x, y). o: {rot, scale, label}
  function P(id, x, y, o) {
    o = o || {};
    var g = glyph(id), s = o.scale || 1;
    if (g.kind === "hatch") return H(id, x - 6, y - 4, 12, 8, o);
    if (g.kind === "line") return L(id, [[x - 10, y], [x + 10, y]], o);
    var svg = glyphSvg(g);
    var box = g.box || [-3, -3, 6, 6];
    var rb = rotBox(box, o.rot, s);
    var inner = '<g class="gl" style="color:' + color(id) + '" transform="translate(' + f(x) + " " + f(y) + ")" + (o.rot ? " rotate(" + o.rot + ")" : "") + (s !== 1 ? " scale(" + s + ")" : "") + '">' + svg + "</g>";
    if (o.note) inner += text(x + rb[0] + rb[2] + 1, y, o.note, o.noteSize || 2, { anchor: "start", color: color(id) });
    return wrap(id, inner, [x + rb[0], y + rb[1], rb[2] + (o.note ? o.note.length * 1.3 + 1 : 0), rb[3]], o.label);
  }

  // Text notation: o.text overrides the sample.
  function T(id, x, y, o) {
    o = o || {};
    var g = glyph(id);
    var s = o.text != null ? o.text : (g.samples && g.samples[0]) || name(id);
    var size = o.size || 2.5, w = Math.max(4, s.length * size * 0.52);
    var anchor = o.anchor || "start";
    var bx = anchor === "middle" ? x - w / 2 : anchor === "end" ? x - w : x;
    var inner = text(x, y, s, size, { anchor: anchor, color: o.color || color(id), weight: o.weight || 500, rotate: o.rotate });
    if (o.leader) inner = poly(o.leader, 0.18, color(id)) + inner;
    return wrap(id, inner, o.rotate ? [x - size, y - w, size * 2, w] : [bx, y - size * 0.7, w, size * 1.4], o.label || s);
  }

  // Polyline drawn in the record's line style.
  function L(id, pts, o) {
    o = o || {};
    var g = glyph(id), ls = g.line || { weight: 0.3, dash: null };
    var c = o.color || color(id), w = o.weight || ls.weight || 0.3;
    var inner = "";
    if (ls.double) {
      inner += poly(offsetPts(pts, ls.double / 2), w, c, ls.dash) + poly(offsetPts(pts, -ls.double / 2), w, c, ls.dash);
    } else {
      inner += poly(pts, w, c, ls.dash);
    }
    var label = o.label !== undefined ? o.label : ls.label;
    if (label) {
      var every = ls.labelEvery || 40;
      for (var i = 0; i < pts.length - 1; i++) {
        var a = pts[i], b = pts[i + 1], len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        var n = Math.max(1, Math.floor(len / every));
        if (len < 12) continue;
        for (var k = 0; k < n; k++) {
          var t = (k + 0.5) / n, lx = a[0] + (b[0] - a[0]) * t, ly = a[1] + (b[1] - a[1]) * t;
          var ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
          if (ang > 90 || ang < -90) ang += 180;
          var lw = label.length * 1.2 + 1.4;
          inner += '<g transform="translate(' + f(lx) + " " + f(ly) + ") rotate(" + f(ang) + ')"><rect x="' + f(-lw / 2) + '" y="-1.3" width="' + f(lw) + '" height="2.6" style="fill:var(--sheet)"/>' +
            text(0, 0, label, 2, { color: c, weight: 600 }) + "</g>";
        }
      }
    }
    if (ls.arrow || o.arrow) {
      var p1 = pts[pts.length - 2], p2 = pts[pts.length - 1], an = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
      inner += '<polygon points="' + f(p2[0]) + "," + f(p2[1]) + " " + f(p2[0] - 2.2 * Math.cos(an) + 0.8 * Math.sin(an)) + "," + f(p2[1] - 2.2 * Math.sin(an) - 0.8 * Math.cos(an)) + " " +
        f(p2[0] - 2.2 * Math.cos(an) - 0.8 * Math.sin(an)) + "," + f(p2[1] - 2.2 * Math.sin(an) + 0.8 * Math.cos(an)) + '" style="fill:' + c + '"/>';
    }
    var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
    var x0 = Math.min.apply(null, xs), y0 = Math.min.apply(null, ys);
    return wrap(id, inner, [x0 - 0.8, y0 - 0.8, Math.max.apply(null, xs) - x0 + 1.6, Math.max.apply(null, ys) - y0 + 1.6], o.labelText || name(id));
  }
  function offsetPts(pts, d) {
    return pts.map(function (p, i) {
      var a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
      var dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
      return [p[0] - dy / l * d, p[1] + dx / l * d];
    });
  }

  // Hatched rectangle or polygon.
  function H(id, x, y, w, h, o) {
    o = o || {};
    var fill = G[id] && G[id].hatch ? "url(#" + hatchId(id) + ")" : "var(--sheet)";
    var inner = o.points
      ? '<polygon points="' + o.points.map(function (p) { return f(p[0]) + "," + f(p[1]); }).join(" ") + '" style="fill:' + fill + ";stroke:" + (o.stroke || "var(--ink)") + ";stroke-width:" + (o.sw || 0.3) + '"/>'
      : rect(x, y, w, h, o.sw != null ? o.sw : 0.3, o.stroke || "var(--ink)", fill);
    return wrap(id, inner, [x, y, w, h], o.label);
  }

  // Global pattern defs for every hatch glyph.
  function hatchDefs() {
    var out = "";
    Object.keys(G).forEach(function (id) {
      var g = G[id];
      if (!g || !g.hatch) return;
      out += '<pattern id="' + hatchId(id) + '" class="gl" width="' + g.hatch.w + '" height="' + g.hatch.h + '" patternUnits="userSpaceOnUse" style="color:' + color(id) + '">' +
        '<rect width="' + g.hatch.w + '" height="' + g.hatch.h + '" style="fill:var(--sheet)"/>' + g.hatch.svg + "</pattern>";
    });
    return out;
  }

  // Fit any glyph into a cell (legend rows / cards). Returns SVG without wrapper.
  function fitGlyph(id, cx, cy, cw, ch) {
    var g = glyph(id);
    if (g.kind === "hatch") return rect(cx - cw / 2, cy - ch / 2, cw, ch, 0.25, "var(--ink)", G[id] && G[id].hatch ? "url(#" + hatchId(id) + ")" : "var(--sheet)");
    if (g.kind === "line") {
      var ls = g.line || {}, c = color(id), w = ls.weight || 0.3, pts = [[cx - cw / 2, cy], [cx + cw / 2, cy]];
      var s = ls.double ? poly(offsetPts(pts, ls.double / 2), w, c, ls.dash) + poly(offsetPts(pts, -ls.double / 2), w, c, ls.dash) : poly(pts, w, c, ls.dash);
      if (ls.label) s += '<rect x="' + f(cx - ls.label.length * 0.6 - 0.6) + '" y="' + f(cy - 1.2) + '" width="' + f(ls.label.length * 1.2 + 1.2) + '" height="2.4" style="fill:var(--sheet)"/>' + text(cx, cy, ls.label, 1.9, { color: c, weight: 600 });
      return s;
    }
    var svg = glyphSvg(g);
    var b = g.box || [-3, -3, 6, 6];
    if (g.kind === "text" && !g.box) { var sm = (g.samples || [""])[0]; b = [-sm.length * 0.7, -1.5, sm.length * 1.4, 3]; }
    var s2 = Math.min(cw / Math.max(b[2], 0.1), ch / Math.max(b[3], 0.1), 1.6);
    var tx = cx - (b[0] + b[2] / 2) * s2, ty = cy - (b[1] + b[3] / 2) * s2;
    return '<g class="gl" style="color:' + color(id) + '" transform="translate(' + f(tx) + " " + f(ty) + ") scale(" + f(s2) + ')">' + svg + "</g>";
  }

  // Legend table drawn on a sheet: ids listed with glyph + Thai name.
  function legendTable(ids, x, y, w, h, title) {
    var out = rect(x, y, w, h, 0.3, "var(--ink)");
    out += text(x + w / 2, y + 4, title || "สัญลักษณ์", 3, { weight: 700 }) + line(x, y + 7.5, x + w, y + 7.5, 0.25);
    var avail = h - 9, n = ids.length, cols = n * 4.4 > avail ? 2 : 1;
    var rows = Math.ceil(n / cols), rh = Math.min(5.6, avail / rows), cw = w / cols;
    ids.forEach(function (id, i) {
      var c = Math.floor(i / rows), r = i % rows;
      var cx = x + c * cw, cy = y + 9 + r * rh + rh / 2;
      var fs = Math.min(1.9, rh * 0.42);
      var inner = fitGlyph(id, cx + 5, cy, 8, rh * 0.8) + text(cx + 10.5, cy, name(id), fs, { anchor: "start" });
      out += wrap(id, inner, [cx + 0.5, cy - rh / 2, cw - 1, rh], name(id));
    });
    return out;
  }

  /* ---------- inspector ---------- */
  function statusBadge(st) { return '<span class="badge status ' + st + '">' + esc(STATUS_TH[st] || st) + "</span>"; }
  function renderInspector() {
    var rec = SYM[state.selected];
    var el = document.getElementById("inspector");
    if (!rec) { el.innerHTML = '<p class="status-note">กดที่สัญลักษณ์บนแผ่นหรือในตารางสัญลักษณ์เพื่อดูข้อมูล</p>'; return; }
    var used = profileFor(rec.id), g = glyph(rec.id);
    var h = '<div class="insp-head"><div class="insp-id">' + esc(rec.id) + '</div><div class="insp-name">' + esc(rec.name.th) + '</div><div class="insp-en">' + esc(rec.name.en) + "</div></div>";
    h += '<div class="insp-glyph"><svg viewBox="0 0 40 20" aria-hidden="true"><rect width="40" height="20" style="fill:var(--sheet)"/>' + fitGlyph(rec.id, 20, 10, 34, 15) + "</svg></div>";
    h += '<div class="badges">' + statusBadge(rec.status) + '<span class="badge">' + esc(DISC_TH[rec.discipline] || rec.discipline) + '</span><span class="badge mono">' + esc(rec.category) + "</span>" +
      (rec.abbreviations || []).slice(0, 4).map(function (a) { return '<span class="badge mono">' + esc(a) + "</span>"; }).join("") + "</div>";
    var sd = DATA.status_definitions[rec.status];
    if (sd) h += '<p class="status-note">' + esc(sd.th) + "</p>";
    h += '<div class="kv"><span>คำอธิบาย</span><p>' + esc(rec.description.th) + "</p></div>";
    var geo = rec.geometry || {};
    if (geo.redraw_description) {
      var size = geo.nominal_size_mm ? " · " + geo.nominal_size_mm.w + "×" + geo.nominal_size_mm.h + " มม. (" + esc(geo.size_basis) + ")" : "";
      h += '<div class="kv"><span>วิธีวาด' + size + "</span><p>" + esc(geo.redraw_description.th) + "</p></div>";
    }
    if (G[rec.id]) h += '<div class="kv"><span>ภาพในหน้านี้ · ' + esc(g.basis) + "</span><p>" + esc(g.note_th || "") + "</p></div>";
    h += '<div class="kv"><span>รูปแบบตามภูมิภาค · ใช้ ' + esc(used) + '</span><div class="profiles">';
    rec.region_profiles.forEach(function (p) {
      var note = p.geometry_notes ? (p.geometry_notes.th || p.geometry_notes.en) : "";
      var stds = (p.standards || []).map(function (s) { return s.code; }).join(", ");
      h += '<div class="profile' + (p.region === used ? " active" : "") + '"><div class="row"><span class="region">' + esc(p.region) + " · " + esc(REGION_TH[p.region] || "") + "</span>" +
        (p.status ? statusBadge(p.status) : "") + "</div>" + (note ? "<div>" + esc(note) + "</div>" : "") + (stds ? '<div class="insp-id">' + esc(stds) + "</div>" : "") + "</div>";
    });
    if (state.region !== used) h += '<p class="status-note">ยังไม่มีข้อมูล ' + esc(REGION_TH[state.region] || state.region) + " ในระเบียนนี้ จึงแสดงแบบไทย</p>";
    h += "</div></div>";
    var m = rec.ifc_mapping;
    if (m) {
      h += '<div class="kv"><span>ส่งออกเป็น IFC</span><div class="code">' + esc(m.entity) + (m.predefined_type ? "\nPredefinedType = " + esc(m.predefined_type) : "") +
        (m.object_type ? "\nObjectType     = " + esc(m.object_type) : "") + (m.host_relation ? "\nผูกกับชิ้นส่วน  = " + esc(m.host_relation) : "") +
        (m.host_ifc_classes && m.host_ifc_classes.length ? " → " + esc(m.host_ifc_classes.join(", ")) : "") + "</div></div>";
    }
    if (rec.notation_grammar && rec.notation_grammar.length) {
      h += '<div class="kv"><span>รูปแบบข้อความ (regex)</span><div class="code">' + rec.notation_grammar.map(function (n) {
        return esc(n.name) + "\n" + esc(n.regex) + "\nเช่น " + esc((n.examples || []).join(", "));
      }).join("\n\n") + "</div></div>";
    }
    var srcs = (rec.sources || []).slice();
    rec.region_profiles.forEach(function (p) { if (p.region === used || p.region === "TH") srcs = srcs.concat(p.sources || []); });
    var seen = {};
    srcs = srcs.filter(function (s) { if (!s.url || seen[s.url]) return false; seen[s.url] = 1; return true; }).slice(0, 5);
    h += '<div class="kv"><span>แหล่งอ้างอิง</span>' + (srcs.length ? '<ul class="sources">' + srcs.map(function (s) {
      return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.title || s.url) + '</a> <span class="insp-id">(' + esc(s.evidence || "") + ")</span></li>";
    }).join("") + "</ul>" : "<p>ยังไม่มี (general practice, unverified)</p>") + "</div>";
    h += "<details><summary>ดูระเบียน JSON</summary><pre>" + esc(JSON.stringify(rec, null, 2)) + "</pre></details>";
    el.innerHTML = h;
  }

  function markSelected() {
    var nodes = document.querySelectorAll("[data-id]");
    for (var i = 0; i < nodes.length; i++) {
      var on = nodes[i].getAttribute("data-id") === state.selected;
      if (nodes[i].classList.contains("sym")) nodes[i].classList.toggle("selected", on);
      else nodes[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
  }
  function select(id) {
    if (!SYM[id]) return;
    state.selected = id;
    markSelected();
    renderInspector();
  }

  return {
    DATA: DATA, SYM: SYM, G: G, state: state, STATUS_TH: STATUS_TH, REGION_TH: REGION_TH, DISC_TH: DISC_TH, DISC_ORDER: DISC_ORDER,
    esc: esc, f: f, color: color, name: name, profileFor: profileFor,
    text: text, line: line, poly: poly, circle: circle, rect: rect, wrap: wrap, resetPlaced: resetPlaced, placedIds: function () { return placed; },
    P: P, T: T, L: L, H: H, hatchDefs: hatchDefs, fitGlyph: fitGlyph, legendTable: legendTable, glyph: glyph,
    renderInspector: renderInspector, select: select, markSelected: markSelected, statusBadge: statusBadge
  };
})();
