/* Page wiring: tabs, legend grid, rebar tool, clash table. */
(function (TB, SHEETS) {
  "use strict";
  var ST = TB.state, esc = TB.esc, f = TB.f, SYM = TB.SYM, DATA = TB.DATA;

  /* ---------- global pattern defs ---------- */
  document.getElementById("defs").innerHTML = "<defs>" + TB.hatchDefs() + "</defs>";

  /* ---------- tabs ---------- */
  var tabs = document.getElementById("tabs");
  var TAB_LEGEND = "legend", TAB_BEAM = "beam";
  tabs.innerHTML = SHEETS.list.map(function (s) {
    return '<button type="button" role="tab" data-tab="' + s.no + '"><span class="tab-no">' + s.no + "</span>" + esc(s.tab) + "</button>";
  }).join("") + '<button type="button" role="tab" data-tab="' + TAB_BEAM + '"><span class="tab-no">S-02</span>รูปตัดคาน (เครื่องมือ)</button>' +
    '<button type="button" role="tab" data-tab="' + TAB_LEGEND + '"><span class="tab-no">A0-01</span>สัญลักษณ์ทั้งหมด ' + Object.keys(SYM).length + "</button>";

  function showTab(key) {
    ST.sheet = key;
    var btns = tabs.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute("aria-selected", btns[i].getAttribute("data-tab") === key ? "true" : "false");
    document.getElementById("sheet-view").hidden = key === TAB_LEGEND || key === TAB_BEAM;
    document.getElementById("legend-view").hidden = key !== TAB_LEGEND;
    document.getElementById("beam-view").hidden = key !== TAB_BEAM;
    if (key === TAB_LEGEND) renderLegendGrid();
    else if (key === TAB_BEAM) renderRebar();
    else drawSheet();
    try { localStorage.setItem("tbim-tab", key); } catch (e) {}
  }
  tabs.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) showTab(b.getAttribute("data-tab")); });

  function drawSheet() {
    var sh = SHEETS.list.filter(function (s) { return s.no === ST.sheet; })[0] || SHEETS.list[0];
    document.getElementById("sheet").innerHTML = SHEETS.render(sh);
    document.getElementById("sheet").setAttribute("aria-label", "แผ่น " + sh.no + " " + sh.title);
    document.getElementById("sheet-caption").textContent = sh.no + " · " + sh.title + " · มาตราส่วน " + sh.scale + " · สัญลักษณ์ในตาราง " + sh.legend.length + " รายการ";
    if (!ST.selected || !SYM[ST.selected]) ST.selected = sh.legend[0];
    TB.markSelected();
    TB.renderInspector();
  }

  /* ---------- legend grid (all symbols) ---------- */
  var filt = { disc: "ALL", status: "ALL", q: "" };
  function renderLegendGrid() {
    var ids = Object.keys(SYM).filter(function (id) {
      var r = SYM[id];
      if (filt.disc !== "ALL" && r.discipline !== filt.disc) return false;
      if (filt.status !== "ALL" && r.status !== filt.status) return false;
      if (filt.q) {
        var q = filt.q.toLowerCase();
        var hay = (id + " " + r.name.th + " " + r.name.en + " " + (r.abbreviations || []).join(" ")).toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
    ids.sort(function (a, b) { return TB.DISC_ORDER.indexOf(SYM[a].discipline) - TB.DISC_ORDER.indexOf(SYM[b].discipline) || (a < b ? -1 : 1); });
    var html = "", last = null;
    ids.forEach(function (id) {
      var r = SYM[id];
      if (r.discipline !== last) {
        if (last !== null) html += "</div>";
        html += '<h3 class="grid-h">' + esc(TB.DISC_TH[r.discipline] || r.discipline) + ' <span class="mono">' + r.discipline + "</span></h3><div class=\"cards\">";
        last = r.discipline;
      }
      html += '<button type="button" class="card" data-id="' + esc(id) + '" aria-pressed="false"><svg viewBox="0 0 40 22" aria-hidden="true"><rect width="40" height="22" style="fill:var(--sheet)"/>' +
        TB.fitGlyph(id, 20, 11, 32, 16) + '</svg><span class="card-name"><i class="dot ' + r.status + '"></i>' + esc(r.name.th) + '</span><span class="card-id">' + esc(id) + "</span></button>";
    });
    if (last !== null) html += "</div>";
    if (!ids.length) html = '<p class="status-note">ไม่พบสัญลักษณ์ที่ตรงกับตัวกรอง</p>';
    document.getElementById("legend-grid").innerHTML = html;
    document.getElementById("legend-count").textContent = "แสดง " + ids.length + " จาก " + Object.keys(SYM).length + " รายการ";
    TB.markSelected();
    TB.renderInspector();
  }
  (function buildFilters() {
    var discs = TB.DISC_ORDER.filter(function (d) { return Object.keys(SYM).some(function (id) { return SYM[id].discipline === d; }); });
    document.getElementById("f-disc").innerHTML = '<option value="ALL">ทุกสาขา</option>' + discs.map(function (d) { return '<option value="' + d + '">' + esc(TB.DISC_TH[d]) + "</option>"; }).join("");
    document.getElementById("f-status").innerHTML = '<option value="ALL">ทุกสถานะ</option>' + ["standard", "agency", "observed_practice", "unverified"].map(function (s) { return '<option value="' + s + '">' + TB.STATUS_TH[s] + "</option>"; }).join("");
    document.getElementById("f-disc").addEventListener("change", function (e) { filt.disc = e.target.value; renderLegendGrid(); });
    document.getElementById("f-status").addEventListener("change", function (e) { filt.status = e.target.value; renderLegendGrid(); });
    document.getElementById("f-q").addEventListener("input", function (e) { filt.q = e.target.value.trim(); renderLegendGrid(); });
  })();

  /* ---------- selection ---------- */
  function onPick(e) { var g = e.target.closest("[data-id]"); if (g) TB.select(g.getAttribute("data-id")); }
  ["sheet", "legend-grid", "beam"].forEach(function (id) {
    var el = document.getElementById(id);
    el.addEventListener("click", onPick);
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { var g = e.target.closest("g[data-id]"); if (g) { e.preventDefault(); TB.select(g.getAttribute("data-id")); } }
    });
  });

  /* ---------- toolbar ---------- */
  function setPressed(groupId, attr, value) {
    var btns = document.querySelectorAll("#" + groupId + " button");
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute("aria-pressed", btns[i].getAttribute(attr) === value ? "true" : "false");
  }
  function refresh() {
    if (ST.sheet === TAB_LEGEND) renderLegendGrid();
    else if (ST.sheet === TAB_BEAM) renderRebar();
    else drawSheet();
  }
  document.getElementById("region-seg").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    ST.region = b.getAttribute("data-region");
    setPressed("region-seg", "data-region", ST.region);
    document.getElementById("region-note").textContent = REGION_NOTES[ST.region] || "";
    if (ST.region === "SG") setBeamDefaults("SG"); else if (lastBeamRegion === "SG") setBeamDefaults("TH");
    refresh();
  });
  var REGION_NOTES = {
    TH: "แบบไทย: ฟองกริด/หัวรูปตัด Ø10 มม. เป็นค่าที่ TBIM เสนอ · ระดับเป็นเมตร ทศนิยม 2 ตำแหน่ง",
    SG: "แบบสิงคโปร์: ระดับอ้างอิง SHD (ในหน้านี้สมมติดินเดิม = 3.300 m SHD) · สีงานต่อเติม: ม่วงแดง = ใหม่, ฟ้า = เดิม, เหลือง = รื้อ (URA / CP 83-5) · กรอบชื่อแบบแสดง QP / PE / LEW",
    GB: "แบบจีน GB/T 50001: ระดับเป็นสามเหลี่ยม ทศนิยม 3 ตำแหน่ง · ขีดปลายเส้นบอกระยะเอียง 45°",
    JIS: "แบบญี่ปุ่น JIS: ปลายเส้นบอกระยะเป็นหัวลูกศร",
    US_NCS: "แบบสหรัฐฯ NCS: หัวรูปตัด Ø1/2\" มีลูกศรทึบ"
  };
  document.getElementById("prefix-seg").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    ST.prefix = b.getAttribute("data-prefix");
    setPressed("prefix-seg", "data-prefix", ST.prefix);
    refresh();
  });
  document.getElementById("zoom-btn").addEventListener("click", function (e) {
    var fr = document.getElementById("sheet-frame"), on = !fr.classList.contains("zoomed");
    fr.classList.toggle("zoomed", on);
    e.currentTarget.setAttribute("aria-pressed", on ? "true" : "false");
    e.currentTarget.textContent = on ? "พอดีจอ" : "ขยายแผ่น";
  });

  /* ---------- rebar tool ---------- */
  var SG_BAR = /^(\d+)\s*([HRT])\s*(\d{1,2})$/;
  var SG_LINK = /^([HR])\s*(\d{1,2})\s*[-@]\s*(\d{2,4})$/;
  function grammar(id) { return (SYM[id] && SYM[id].notation_grammar) || []; }
  function normSpacing(v, unit) { if (unit && /ซม|cm/.test(unit)) return v / 100; if (!unit && v >= 1) return v / 100; return v; }
  function parseBar(s) {
    s = s.trim();
    var gs = grammar("TH.STR.REBAR_CALLOUT");
    for (var i = 0; i < gs.length; i++) {
      try {
        var m = new RegExp(gs[i].regex).exec(s);
        if (m && m[2] && (m[2] === "DB" || m[2] === "RB")) return { count: m[1] ? parseInt(m[1], 10) : null, type: m[2], d: parseInt(m[3], 10), sys: "TH" };
      } catch (e) {}
    }
    var g = SG_BAR.exec(s);
    if (g) return { count: parseInt(g[1], 10), type: g[2], d: parseInt(g[3], 10), sys: "SG" };
    return null;
  }
  function parseLink(s) {
    s = s.trim();
    var gs = grammar("TH.STR.STIRRUP_CALLOUT");
    for (var i = 0; i < gs.length; i++) {
      try {
        var m = new RegExp(gs[i].regex).exec(s);
        if (m && m[1] && (m[1] === "RB" || m[1] === "DB")) return { type: m[1], d: parseInt(m[2], 10), spacing: normSpacing(parseFloat(m[3]), m[4]), sys: "TH" };
      } catch (e) {}
    }
    var g = SG_LINK.exec(s);
    if (g) return { type: g[1], d: parseInt(g[2], 10), spacing: parseInt(g[3], 10) / 1000, sys: "SG" };
    return null;
  }
  function rebarInfo(code) { for (var i = 0; i < DATA.rebar.length; i++) if (DATA.rebar[i].code === code) return DATA.rebar[i]; return null; }
  var BAR_TH = { DB: "เหล็กข้ออ้อย", RB: "เหล็กเส้นกลม", H: "เหล็กข้ออ้อยกำลังสูง (H)", R: "เหล็กเส้นกลม (R)", T: "เหล็กกำลังสูง (T แบบเก่า)" };
  function stdFor(p, grade) {
    if (p.sys === "SG") return p.type === "R" ? "BS 8666 · R (mild steel)" : "SS 560 · " + (grade === "SD50" ? "B500C" : "B500B");
    var info = rebarInfo(p.type), std = info && info.standards && info.standards[0] ? info.standards[0].code : "";
    return std + " · " + (p.type === "DB" ? grade : "SR24");
  }
  function kgm(d) { return 0.00617 * d * d; }
  var lastBeamRegion = "TH";
  function setBeamDefaults(reg) {
    lastBeamRegion = reg;
    var v = reg === "SG" ? ["2H12", "4H16", "H10-150"] : ["2-DB12", "4-DB16", "ป-RB6@0.15"];
    document.getElementById("rb-top").value = v[0];
    document.getElementById("rb-bot").value = v[1];
    document.getElementById("rb-stir").value = v[2];
  }
  function renderRebar() {
    var tag = document.getElementById("beam-tag").value.trim() || "B1";
    var size = document.getElementById("beam-size").value.split("x").map(parseFloat);
    var grade = document.getElementById("db-grade").value;
    var res = {}, rows = [];
    [{ el: "rb-top", out: "parse-top", pos: "top" }, { el: "rb-bot", out: "parse-bot", pos: "bottom" }, { el: "rb-stir", out: "parse-stir", pos: "stir" }].forEach(function (it) {
      var input = document.getElementById(it.el), raw = input.value, out = document.getElementById(it.out);
      var p = it.pos === "stir" ? parseLink(raw) : parseBar(raw);
      if (p && it.pos !== "stir" && !p.count) p = null;
      if (!p) {
        input.classList.add("bad"); out.className = "parse err";
        out.textContent = it.pos === "stir" ? "อ่านไม่ได้ ลองเขียน ป-RB6@0.15 (ไทย) หรือ H10-150 (สิงคโปร์)" : "อ่านไม่ได้ ลองเขียน 4-DB16 (ไทย) หรือ 4H16 (สิงคโปร์)";
        return;
      }
      input.classList.remove("bad");
      res[it.pos] = p;
      var meaning, weight;
      if (it.pos !== "stir") {
        meaning = (it.pos === "top" ? "เหล็กบน " : "เหล็กล่าง ") + p.count + " เส้น " + BAR_TH[p.type] + " Ø" + p.d + " มม.";
        weight = p.count * kgm(p.d);
      } else {
        var perM = Math.ceil(1 / p.spacing), per = 2 * ((size[0] - 0.06) + (size[1] - 0.06)) + 0.12;
        meaning = "เหล็กปลอก " + BAR_TH[p.type] + " Ø" + p.d + " มม. ทุก " + p.spacing.toFixed(2) + " ม. (≈" + perM + " ตัว/ม.)";
        weight = perM * per * kgm(p.d);
      }
      rows.push([raw.trim(), meaning + (p.sys === "SG" ? " · รูปแบบสิงคโปร์" : ""), stdFor(p, grade), f(weight).toFixed(2)]);
      out.className = "parse"; out.textContent = "→ " + meaning;
    });
    document.getElementById("rebar-table").innerHTML = rows.map(function (r) {
      return '<tr><td class="mono">' + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td><td>" + esc(r[2]) + '</td><td class="num">' + esc(r[3]) + "</td></tr>";
    }).join("");
    drawBeam(tag, size, res);
    TB.renderInspector();
  }
  function drawBeam(tag, size, res) {
    var k = 100, b = size[0] * k, h = size[1] * k, x0 = 14, y0 = 8, c = 3;
    var vbW = b + 76, vbH = h + 30, svg = [], line = TB.line, text = TB.text, wrap = TB.wrap;
    svg.push('<rect x="0" y="0" width="' + vbW + '" height="' + vbH + '" style="fill:var(--sheet)"/>');
    var fill = TB.G["TH.GENERAL.HATCH_REINFORCED_CONCRETE"] ? "url(#hp-TH_GENERAL_HATCH_REINFORCED_CONCRETE)" : "var(--sheet)";
    svg.push(wrap("TH.STR.BEAM_TAG", '<rect x="' + x0 + '" y="' + y0 + '" width="' + b + '" height="' + h + '" style="fill:' + fill + ';stroke:var(--ink);stroke-width:0.5"/>', [x0, y0, b, h], "คาน " + tag));
    var st = res.stir, sd = st ? st.d / 10 : 0.6, ix = x0 + c, iy = y0 + c, iw = b - 2 * c, ih = h - 2 * c, S = "var(--d-STR)";
    svg.push(wrap("TH.STR.STIRRUP_CALLOUT", '<rect x="' + f(ix + sd / 2) + '" y="' + f(iy + sd / 2) + '" width="' + f(iw - sd) + '" height="' + f(ih - sd) + '" rx="' + f(sd * 1.5) +
      '" style="fill:none;stroke:' + S + ';stroke-width:' + f(sd) + '"/>' + line(ix + sd + 1, iy + sd, ix + sd + 5, iy + sd + 4, sd, S), [ix, iy, iw, ih], "เหล็กปลอก"));
    function bars(p, top) {
      var d = p.d / 10, r = d / 2, n = Math.max(1, p.count), left = ix + sd + r, right = ix + iw - sd - r, y = top ? iy + sd + r : iy + ih - sd - r, s = "";
      for (var i = 0; i < n; i++) { var x = n === 1 ? (left + right) / 2 : left + (right - left) * i / (n - 1); s += '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + f(r) + '" style="fill:' + S + '"/>'; }
      return s;
    }
    if (res.top) svg.push(wrap("TH.STR.REBAR_CALLOUT", bars(res.top, true), [ix, iy, iw, 6], "เหล็กบน"));
    if (res.bottom) svg.push(wrap("TH.STR.REBAR_CALLOUT", bars(res.bottom, false), [ix, iy + ih - 6, iw, 6], "เหล็กล่าง"));
    var lx = x0 + b + 6;
    function callout(y, fx, fy, label) { return line(fx, fy, lx, y, 0.2) + line(lx, y, lx + 2, y, 0.2) + text(lx + 3, y, label, 3.4, { anchor: "start", weight: 600, color: S }); }
    if (res.top) svg.push(callout(y0 + 4, ix + iw - 3, iy + 3, document.getElementById("rb-top").value.trim()));
    if (st) svg.push(callout(y0 + h / 2, ix + iw - sd / 2, y0 + h / 2, document.getElementById("rb-stir").value.trim()));
    if (res.bottom) svg.push(callout(y0 + h - 4, ix + iw - 3, iy + ih - 3, document.getElementById("rb-bot").value.trim()));
    svg.push(line(x0, y0 + h + 5, x0 + b, y0 + h + 5, 0.2) + line(x0 - 1, y0 + h + 6, x0 + 1, y0 + h + 4, 0.45) + line(x0 + b - 1, y0 + h + 6, x0 + b + 1, y0 + h + 4, 0.45) + text(x0 + b / 2, y0 + h + 8.4, size[0].toFixed(2), 3));
    svg.push(line(x0 - 5, y0, x0 - 5, y0 + h, 0.2) + line(x0 - 6, y0 + 1, x0 - 4, y0 - 1, 0.45) + line(x0 - 6, y0 + h + 1, x0 - 4, y0 + h - 1, 0.45) + text(x0 - 8, y0 + h / 2, size[1].toFixed(2), 3, { rotate: -90 }));
    svg.push(wrap("TH.STR.BEAM_TAG", text(x0, y0 + h + 15.5, "รูปตัดคาน " + tag, 4.2, { anchor: "start", weight: 700 }) + text(x0, y0 + h + 20.5, "มาตราส่วน 1:10 · ระยะหุ้ม 3 ซม.", 2.8, { anchor: "start", color: "var(--ink-2)" }),
      [x0, y0 + h + 12, 60, 11], "ป้ายรหัสคาน " + tag));
    var beam = document.getElementById("beam");
    beam.setAttribute("viewBox", "0 0 " + f(vbW + 30) + " " + f(vbH));
    beam.innerHTML = svg.join("");
    TB.markSelected();
  }
  (function () {
    var db = rebarInfo("DB"), sel = document.getElementById("db-grade");
    var grades = db && db.attributes && db.attributes.grades ? db.attributes.grades : ["SD40"];
    sel.innerHTML = grades.map(function (g) { return '<option value="' + g + '"' + (g === "SD40" ? " selected" : "") + ">" + g + "</option>"; }).join("");
  })();
  ["beam-tag", "rb-top", "rb-bot", "rb-stir"].forEach(function (id) { document.getElementById(id).addEventListener("input", renderRebar); });
  ["beam-size", "db-grade"].forEach(function (id) { document.getElementById(id).addEventListener("change", renderRebar); });

  /* ---------- clash table ---------- */
  (function () {
    var order = ["F", "C", "W"];
    var rows = DATA.clashes.slice().sort(function (a, b) { return order.indexOf(a.code) - order.indexOf(b.code); });
    document.getElementById("clash-table").innerHTML = rows.map(function (e) {
      return '<tr><td class="mono"><b>' + esc(e.code) + '</b></td><td class="mono">' + esc(e.id) + "</td><td>" + esc(TB.DISC_TH[e.discipline] || e.discipline) + "</td><td>" + esc(e.meaning.th) + "</td><td>" + TB.statusBadge(e.status) + "</td></tr>";
    }).join("");
  })();

  /* ---------- coverage + footer ---------- */
  var cov = SHEETS.coverage(), total = Object.keys(SYM).length, onSheets = Object.keys(SYM).filter(function (id) { return cov[id]; }).length;
  var counts = {};
  Object.keys(SYM).forEach(function (id) { counts[SYM[id].status] = (counts[SYM[id].status] || 0) + 1; });
  document.getElementById("stats").innerHTML =
    '<span><b>' + SHEETS.list.length + "</b> แผ่นแบบ</span><span><b>" + onSheets + "/" + total + "</b> สัญลักษณ์อยู่ในตารางสัญลักษณ์ของแผ่น</span>" +
    ["standard", "agency", "observed_practice", "unverified"].map(function (s) { return '<span><i class="dot ' + s + '"></i>' + TB.STATUS_TH[s] + " <b>" + (counts[s] || 0) + "</b></span>"; }).join("");
  document.getElementById("footer-cat").textContent = "ข้อมูลจาก " + DATA.catalog.catalog_id + " เวอร์ชัน " + DATA.catalog.catalog_version + " · " + total + " ระเบียน · สร้างด้วย TBIM/examples/build_example.py";
  document.getElementById("region-note").textContent = REGION_NOTES.TH;

  var start = SHEETS.list[1].no;
  try { var saved = localStorage.getItem("tbim-tab"); if (saved) start = saved; } catch (e) {}
  showTab(start);
})(TB, SHEETS);
