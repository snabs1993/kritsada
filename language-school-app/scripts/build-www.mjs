// Builds www/ for Capacitor from the shared web page in ../language-school/index.html.
// The web page is written for the claude.ai artifact skeleton, so this script adds the
// document head, swaps Google Fonts for the bundled copies, and loads the native bridge.
import { build } from 'esbuild';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const www = join(root, 'www');
const src = readFileSync(join(root, '..', 'language-school', 'index.html'), 'utf8');

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
@media (max-width:960px){
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

rmSync(www, { recursive: true, force: true });
mkdirSync(join(www, 'fonts'), { recursive: true });
writeFileSync(join(www, 'index.html'), html);
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
console.log('www/ built');
