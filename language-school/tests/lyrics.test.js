// Lyrics reading (no video): on the website (no app) a song is found by search, its lyrics show line by line with
// Thai from the web translator, the three view modes work (tap-to-reveal hides Thai until a line is tapped), no
// YouTube player is created, the song is counted as read, and a line can be saved for sentence review.
// LRCLIB and the translator are faked; nothing goes to the network.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
const LRC={syncedLyrics:"[00:01.00] Hello there\n[00:03.00] How are you\n[00:05.00]\n[00:06.00] Goodbye now",plainLyrics:"Hello there",duration:200,trackName:"Fake Song",artistName:"Test Band"};
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[], bad=m=>errs.push(m);
  const p=await b.newPage({viewport:{width:820,height:1180}}); p.on('pageerror',e=>errs.push(String(e)));
  let yt=0, tr=0;
  await p.route('https://lrclib.net/api/search?q=**',r=>r.fulfill({contentType:'application/json',headers:{'access-control-allow-origin':'*'},body:JSON.stringify([Object.assign({},LRC)])}));
  await p.route('https://lrclib.net/api/get?**',r=>r.fulfill({contentType:'application/json',headers:{'access-control-allow-origin':'*'},body:JSON.stringify(LRC)}));
  await p.route('https://translate.googleapis.com/**',r=>{tr++; const q=decodeURIComponent(r.request().url().split('&q=')[1]);
    r.fulfill({contentType:'application/json',headers:{'access-control-allow-origin':'*'},body:JSON.stringify([[[q.split('\n').map(l=>'ไทย '+l).join('\n'),q]]])})});
  await p.route('https://www.youtube.com/**',r=>{yt++; r.abort()});
  await open(p,'#practice');
  if(!(await p.locator('[data-act="pgo"][data-id="lyrics"]').count())) bad('no lyrics tile on the practice hub');
  await open(p,'#practice-lyrics');
  if(await p.locator('[data-form="sgspot"]').count()) bad('Spotify import shown on the website');
  await p.fill('#sg-q','fake song'); await p.click('[data-form="sgfind"] button[type="submit"]');
  await p.waitForSelector('[data-act="lropen"]'); await p.click('[data-act="lropen"]');
  await p.waitForFunction(()=>document.querySelectorAll('#lr-box .sg-th').length===3,null,{timeout:10000});
  const lines=await p.locator('#lr-box .lr-line').count(); if(lines!==3) bad('lines shown: '+lines);
  const th=(await p.locator('#lr-box .lr-line').nth(2).locator('.sg-th').textContent()).trim(); if(th!=='ไทย Goodbye now') bad('translation: '+th);
  if(!(await p.locator('#lr-box .lr-gap').count())) bad('empty lyric line not kept as a gap');
  if(await p.locator('#sg-player, iframe').count()) bad('a video player was created'); if(yt) bad('YouTube was requested');
  if(!tr) bad('translator not used');
  // modes
  const vis=()=>p.locator('#lr-box .lr-line').first().locator('.sg-th').isVisible();
  await p.click('[data-act="lrsub"][data-v="tap"]');
  if(await vis()) bad('tap mode shows Thai before tapping');
  if(!(await p.locator('.lr-taphint').isVisible())) bad('tap hint hidden');
  await p.locator('#lr-box .lr-line').first().click(); if(!(await vis())) bad('tapping a line does not show Thai');
  await p.click('[data-act="lrsub"][data-v="th"]');
  if(await p.locator('#lr-box .lr-line').first().locator('.sg-en').isVisible()) bad('Thai-only mode shows English');
  await p.click('[data-act="lrsub"][data-v="both"]');
  // save a line, read count, cache reused without asking the translator again
  await p.locator('#lr-box .sent-btn').first().click();
  const s=await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')));
  if(!(s.sents&&s.sents['Hello there'])) bad('line not saved for review');
  if(!(s.stats&&s.stats.lyr&&Object.keys(s.stats.lyr).length===1)) bad('song not counted as read');
  const before=tr; await open(p,'#practice-lyrics'); await p.click('[data-act="lropen"]');
  await p.waitForFunction(()=>document.querySelectorAll('#lr-box .sg-th').length===3,null,{timeout:10000});
  if(tr!==before) bad('translated again instead of using the cache');
  if(!/อ่านแล้ว 1 เพลง/.test(await (async()=>{await open(p,'#practice'); return p.textContent('#app')})())) bad('hub tile count');
  console.log('errors:',errs); await b.close();
})().catch(e=>{console.log('errors: [',String(e),']'); process.exit(1)});
