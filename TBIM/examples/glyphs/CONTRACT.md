# TBIM glyph contract

Each glyph file draws the symbols of one group so the example page
(`TBIM/examples/tbim_example.html`) can place every catalog symbol on a sheet.
The ids for each group are listed in `groups.json`. The symbol data is in
`TBIM/data/tbim_symbols.json`; for every id, read `name`, `description`,
`geometry` (`svg_path`, `nominal_size_mm`, `redraw_description`, `glyph_text`,
`line_pattern`, …), `abbreviations` and `category` before drawing.

## File format

`TBIM/examples/glyphs/<group>.js`, plain ES5, no imports:

```js
(function (G) {
  G["TH.ELEC.RECEPTACLE_DUPLEX"] = {
    kind: "point",                 // point | line | hatch | text | block
    box: [-3, -3, 6, 6],           // [x, y, w, h] bbox relative to the insertion point, paper mm
    svg: "<path class='s' d='M -1.5 0 A 1.5 1.5 0 1 0 1.5 0 A 1.5 1.5 0 1 0 -1.5 0 Z'/>",
    basis: "catalog_svg",          // catalog_svg | description | proposed
    note_th: "วาดตาม svg_path ในชุดข้อมูล"   // one short Thai sentence: what was assumed
  };
})(window.TBIM_GLYPHS = window.TBIM_GLYPHS || {});
```

Every id in the group must have exactly one entry.

## Drawing rules

- Units are **paper millimetres**, y points down, insertion point at (0, 0).
  Point symbols are centred on (0, 0) unless the catalog says otherwise
  (e.g. wall-mounted symbols tangent to a wall: put the wall side at y = 0
  and the symbol below it, and say so in `note_th`).
- Size: use `geometry.nominal_size_mm` when present; otherwise the size in
  `redraw_description`; otherwise a sensible drafting size (devices 3–8 mm,
  text 2.5 mm) with `basis: "proposed"`.
- If `geometry.svg_path` exists, use it unchanged as the main outline and set
  `basis: "catalog_svg"`; add inner letters/fills from the description.
- Colour is always `currentColor` (the page sets a discipline colour). Use
  ONLY these classes, no inline colours, no `style`, no `id`, no `<defs>`,
  no `url(#…)`, no scripts, no external references:
  - `s`  stroke 0.25, no fill
  - `st` stroke 0.18, no fill
  - `sk` stroke 0.5, no fill
  - `f`  solid fill, no stroke
  - `bg` paper-coloured fill with 0.25 stroke (use for shapes that must mask lines behind them)
  - `tx` text, centred on x/y (text-anchor middle, dominant-baseline central). Always set `font-size`
    (mm). Thai text allowed. Add `font-weight='700'` if bold.
  Allowed attributes: d, x, y, x1, y1, x2, y2, cx, cy, r, rx, ry, width, height,
  points, transform, font-size, font-weight, text-anchor, stroke-dasharray,
  stroke-width (only to override weight). Use single quotes inside the JS string.
- Keep each `svg` under ~1500 characters. Text glyphs (letters like "S", "FD")
  are fine and often the correct symbol.

## Kinds

- `point`: devices, fixtures, valves, equipment, markers, tags. `svg` + `box`.
- `line`: line types (pipes, cables, grid lines, property lines, contour…).
  Give `svg` as a 30 mm horizontal sample from x = -15 to 15 and a `line`
  object the page uses to stroke any polyline:
  `line: { weight: 0.35, dash: "3 1" | null, label: "CW" | null, labelEvery: 40, double: 0 | offsetMm, arrow: false }`
- `hatch`: material hatches. `hatch: { w, h, svg }` is a repeating tile
  (tile-sized svg using the classes above; the page wraps it in a pattern),
  plus `box` for a 12 × 8 swatch. `svg` may be omitted.
- `text`: notations (rebar callouts, stations, slope notes, levels written as
  text). `samples: ["4-DB16", "RB9@0.20"]` (take them from
  `notation_grammar[].examples` or the description) and optional `svg` for
  any leader/arrow/frame, with `box` covering the first sample.
- `block`: sheet-level items (title block, schedule, permit stamp, legend).
  `svg` drawn inside `box` (≤ 60 × 40 mm), simplified.

## Honesty

`basis` must be `catalog_svg` only when you used `geometry.svg_path`;
`description` when you followed a size/shape in the record text;
`proposed` when you had to choose the shape or size yourself. Never claim a
standard the record does not cite.

## Check before finishing

1. Load the file in Node (`global.window = {}; require(file)`) and assert every
   id of your group in `groups.json` is present, `kind` valid, `box` has 4 numbers.
2. Parse every `svg` (and `hatch.svg`) as XML wrapped in
   `<svg xmlns='http://www.w3.org/2000/svg'>…</svg>` (e.g. Python
   `xml.etree.ElementTree`) and reject any `id=`, `style=`, `url(` or colour literal.
3. Render a contact sheet of all your glyphs once to PNG with Playwright
   (Chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, pass it as
   `executablePath`; do not run `playwright install`), look at it once, fix
   anything clearly wrong, and stop. Put scratch files in your scratchpad, not in the repo.
