// Builds www/ for Capacitor from the shared web page in ../language-school/index.html.
// The web page is written for the claude.ai artifact skeleton, so this script adds the
// document head, swaps Google Fonts for the bundled copies, and loads the native bridge.
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const www = join(root, 'www');
const src = readFileSync(join(root, '..', 'language-school', 'index.html'), 'utf8');

// Lesson bundles are versioned by the time of the last commit that touched the lessons or
// the app shell, so every build of the same commit (CI, a Mac) gets the same version.
// Bump REQUIRES_SHELL together with SHELL in src/native.js.
const REQUIRES_SHELL = 1;
function contentVersion() {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%ct', '--', '../language-school/index.html', 'src', 'scripts', 'fonts'], { cwd: root, encoding: 'utf8' }).trim();
    if (out) return Number(out);
  } catch (e) {}
  return Math.floor(Date.now() / 1000);
}
const version = contentVersion();

const fontLinks = /<link rel="preconnect"[^>]*>\s*<link rel="preconnect"[^>]*>\s*<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/;
if (!fontLinks.test(src)) throw new Error('Google Fonts links not found in index.html');
const headEnd = src.indexOf('</style>') + '</style>'.length;
const scriptStart = src.lastIndexOf('<script>');
if (headEnd < 8 || scriptStart < headEnd) throw new Error('Unexpected index.html layout');

// Same reset the artifact skeleton provides, plus app-shell tweaks.
const base = `<style>
:root{color-scheme:light}
body{margin:0}
img{max-width:100%}
[hidden]{display:none!important}
</style>`;
const safe = (side) => `max(env(safe-area-inset-${side},0px),var(--safe-area-inset-${side},0px))`;
const native = `<style>
/* app shell: the header paints behind the status bar instead of leaving a gap */
.topbar{top:0;padding-top:${safe('top')}}
:root{padding-bottom:${safe('bottom')}}
button{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
@media (max-width:1100px){
  .nav{padding-bottom:calc(6px + ${safe('bottom')})}
  .toast{bottom:calc(88px + ${safe('bottom')})}
}
</style>`;

const head = src.slice(0, headEnd).replace(fontLinks, '<link rel="stylesheet" href="fonts/fonts.css">');
const body = src.slice(headEnd, scriptStart);
const script = src.slice(scriptStart);

const html = `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="color-scheme" content="light dark">
${base}
${head}
${native}
</head>
<body>${body}<script src="native.js"></script>
${script}
</body>
</html>
`;

// index.html is a small loader: it boots a downloaded lesson bundle when one is newer
// than the lessons built into the app, otherwise the built-in app.html. A downloaded
// bundle that never reports a finished boot is thrown away on the next launch.
const loader = `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<style>html,body{margin:0;height:100%;background:#F2F2F7}@media (prefers-color-scheme:dark){html,body{background:#000000}}</style>
<script src="native.js"></script>
</head>
<body>
<script>
(async function () {
  var BUILTIN = ${version};
  var html = null, run = { version: BUILTIN, source: 'builtin' };
  try {
    var NB = window.EnglishClassNative;
    var b = NB ? await NB.storedBundle() : null;
    var trying = null;
    try { trying = localStorage.getItem('ota-trying'); } catch (e) {}
    if (b && trying && Number(trying) === b.version) { await NB.discardBundle(b.version); b = null; }
    if (b && b.version > BUILTIN) {
      html = b.html; run = { version: b.version, source: 'update' };
      try { localStorage.setItem('ota-trying', String(b.version)); } catch (e) {}
    }
  } catch (e) { html = null; run = { version: BUILTIN, source: 'builtin' }; }
  if (!html) html = await (await fetch('app.html')).text();
  window.__OTA_RUNNING = run;
  document.open(); document.write(html); document.close();
})();
</script>
</body>
</html>
`;

rmSync(www, { recursive: true, force: true });
mkdirSync(join(www, 'fonts'), { recursive: true });
writeFileSync(join(www, 'app.html'), html);
writeFileSync(join(www, 'index.html'), loader);

// The update manifest CI publishes as a release asset (lessons-latest/lessons.json).
const ota = join(root, 'dist-ota');
mkdirSync(ota, { recursive: true });
writeFileSync(join(ota, 'lessons.json'), JSON.stringify({
  version,
  requiresShell: REQUIRES_SHELL,
  builtAt: new Date().toISOString(),
  sha256: createHash('sha256').update(html, 'utf8').digest('hex'),
  html,
}));
cpSync(join(root, 'fonts'), join(www, 'fonts'), { recursive: true });
await build({
  entryPoints: [join(root, 'src', 'native.js')],
  bundle: true,
  format: 'iife',
  target: ['es2019'],
  minify: true,
  outfile: join(www, 'native.js'),
  logLevel: 'warning',
});
console.log('www/ built, lesson version ' + version);
