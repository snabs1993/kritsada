// Builds the public website (GitHub Pages) from the same lesson file the phone app and the claude.ai page use.
// Output: _site/ with index.html (document head added: the shared file starts at <title>), a web app manifest and
// icons, so Safari on iPad / Chrome can "Add to Home Screen" and open it full screen like an app.
// Progress is kept in the browser (localStorage); an installed home-screen web app keeps it.
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, '..');
const out = join(repo, '_site');
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const page = readFileSync(join(repo, 'language-school', 'index.html'), 'utf8');
if (!page.startsWith('<title>')) throw new Error('language-school/index.html no longer starts with <title>');

const head = [
  '<!DOCTYPE html>',
  '<html lang="th">',
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  '<meta name="theme-color" content="#F2F2F7">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="default">',
  '<meta name="apple-mobile-web-app-title" content="เรียนอังกฤษ">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" href="icon-512.png">',
  '<link rel="apple-touch-icon" href="icon-512.png">',
  '',
].join('\n');
writeFileSync(join(out, 'index.html'), head + page);

copyFileSync(join(repo, 'language-school-app', 'assets', 'icon-only.png'), join(out, 'icon-512.png'));
writeFileSync(join(out, 'manifest.webmanifest'), JSON.stringify({
  name: 'ห้องเรียนอังกฤษส่วนตัว',
  short_name: 'เรียนอังกฤษ',
  start_url: './',
  scope: './',
  display: 'standalone',
  background_color: '#F2F2F7',
  theme_color: '#F2F2F7',
  icons: [{ src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' }],
}, null, 2));
writeFileSync(join(out, '.nojekyll'), '');
console.log('_site built');
