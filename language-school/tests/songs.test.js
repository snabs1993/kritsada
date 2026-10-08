// Song mode: old app asks for the new app; new app imports a Spotify playlist, finds lyrics (LRCLIB) and a video,
// translates every line, highlights the line being sung, switches subtitles, shifts timing and searches songs.
// Spotify, YouTube, LRCLIB and the translator are all faked; nothing goes to the network.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const fs=require('fs'), path=require('path');
const { chromium } = require('./pw');
const NATIVE=fs.readFileSync(path.join(__dirname,'shadow.test.js'),'utf8').match(/const NATIVE=`([\s\S]*?)`;/)[1];
const FAKEYT=fs.readFileSync(path.join(__dirname,'youtube.test.js'),'utf8').match(/const FAKEYT=`([\s\S]*?)`;/)[1];
const SONGNB=`window.__fetched=[]; window.__translated=0;
const SPOT='<script id="__NEXT_DATA__" type="application/json">'+JSON.stringify({props:{pageProps:{state:{data:{entity:{name:"My Mix",trackList:[{title:"Fake Song",subtitle:"Test Band",duration:200000},{title:"Other Song",subtitle:"Someone",duration:180000}]}}}}}})+'</script>';
const YTR='"videoRenderer":{"videoId":"wrongLen001","title":{"runs":[{"text":"Fake Song live"}]},"lengthText":{"accessibility":{"accessibilityData":{"label":"x"}},"simpleText":"5:10"}}'
 +'"videoRenderer":{"videoId":"rightLen002","title":{"runs":[{"text":"Fake Song audio"}]},"lengthText":{"accessibility":{"accessibilityData":{"label":"x"}},"simpleText":"3:21"}}';
EnglishClassNative.fetchText=async u=>{__fetched.push(u); if(u.includes("open.spotify.com/embed/playlist/")) return SPOT; if(u.includes("youtube.com/results")) return YTR; throw new Error("unexpected "+u)};
EnglishClassNative.translate=async(lines,onP)=>{__translated++; const out=lines.map(l=>l?"แปล: "+l:""); out.forEach((_,i)=>onP&&onP(i+1,lines.length)); return out};`;
const LRC={syncedLyrics:"[00:01.00] Hello there\n[00:03.00] How are you\n[00:05.00]\n[00:06.00] Goodbye now",plainLyrics:"Hello there",duration:200,trackName:"Fake Song",artistName:"Test Band"};
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[], bad=m=>errs.push(m);
  // an app installed before song mode: no translator -> asks for the new app
  const o=await b.newPage({viewport:{width:390,height:844}}); o.on('pageerror',e=>errs.push('old:'+e));
  await o.addInitScript(NATIVE); await open(o,'#practice-songs');
  const oldTxt=(await o.textContent('#app .card')).replace(/\s+/g,' ');
  if(!/ต้องลงแอปเวอร์ชันใหม่/.test(oldTxt)||!(await o.locator('a[href$="english-class.apk"]').count())) bad('old app message: '+oldTxt.slice(0,80));
  // the new app
  const q=await b.newPage({viewport:{width:390,height:844}}); q.on('pageerror',e=>errs.push('new:'+e));
  await q.route('https://lrclib.net/**',r=>{const u=r.request().url(); r.fulfill({contentType:'application/json',body:JSON.stringify(u.includes('/api/search')?[LRC,Object.assign({},LRC,{trackName:"Hello Again",syncedLyrics:null})]:LRC)})});
  await q.addInitScript(NATIVE); await q.addInitScript(SONGNB); await q.addInitScript(FAKEYT);
  await open(q,'#practice'); if(!(await q.locator('[data-act="pgo"][data-id="songs"]').count())) bad('no song card in practice hub');
  await open(q,'#practice-songs');
  await q.fill('#sg-spot','https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=abc'); await q.click('[data-form="sgspot"] button[type="submit"]');
  await q.waitForSelector('details summary'); const pl=(await q.textContent('details summary')).replace(/\s+/g,' ').trim();
  if(!/My Mix/.test(pl)||!/2 เพลง/.test(pl)) bad('playlist summary: '+pl);
  await q.click('details summary'); await q.click('details [data-act="sgopen"]');
  await q.waitForFunction(()=>document.querySelectorAll('#sg-lyrics .sg-th').length>=3,null,{timeout:10000});
  const n=await q.locator('#sg-lyrics .sg-line').count(); if(n!==4) bad('lyric lines: '+n);
  const vid=await q.textContent('#sg-player'); if(!/rightLen002/.test(vid)) bad('picked video: '+vid);   // the one whose length matches Spotify's
  // play from line 2 and follow along
  await q.click('#sg-l1'); await q.waitForTimeout(700);
  let on=await q.getAttribute('.sg-line.on','id'); if(on!=='sg-l1') bad('highlight after seek: '+on);
  await q.waitForTimeout(3300); on=await q.getAttribute('.sg-line.on','id'); if(on!=='sg-l3') bad('highlight later: '+on);
  if(!(await q.locator('#sg-slot #sg-player').count())) bad('player lost');
  // subtitles: Thai only hides English; off hides lines
  await q.click('[data-act="sgsub"][data-v="th"]');
  const enShown=await q.evaluate(()=>getComputedStyle(document.querySelector('.sg-en')).display); if(enShown!=='none') bad('English still shown in Thai mode');
  await q.click('[data-act="sgsub"][data-v="off"]');
  const lineShown=await q.evaluate(()=>getComputedStyle(document.querySelector('.sg-line')).display); if(lineShown!=='none') bad('lines shown with subtitles off');
  await q.click('[data-act="sgsub"][data-v="both"]');
  await q.click('[data-act="sgoff"][data-d="0.5"]'); const off=await q.textContent('#sg-offv'); if(!/\+0\.5/.test(off)) bad('offset text: '+off);
  await q.screenshot({path:path.join(__dirname,'out','songs.png')});
  // reopening uses the cache: no new YouTube search, no new translation
  const before=await q.evaluate(()=>({f:__fetched.length,t:__translated}));
  await open(q,'#practice-songs'); await q.click('[data-act="sgopen"]');
  await q.waitForFunction(()=>document.querySelectorAll('#sg-lyrics .sg-th').length>=3,null,{timeout:10000});
  // the page reloaded, so the fake's counters restarted at zero: anything above zero is a new request
  const after=await q.evaluate(()=>({f:__fetched.length,t:__translated})); if(before.f<1||before.t<1||after.f!==0||after.t!==0) bad('cache not used: '+JSON.stringify([before,after]));
  // search by name
  await open(q,'#practice-songs'); await q.fill('#sg-q','hello'); await q.click('[data-form="sgfind"] button[type="submit"]');
  await q.waitForFunction(()=>document.querySelectorAll('[data-form="sgfind"] [data-act="sgopen"]').length>0,null,{timeout:10000});
  const found=await q.locator('[data-form="sgfind"] [data-act="sgopen"]').count(); if(found<1) bad('search found nothing');
  if(await q.evaluate(()=>document.documentElement.scrollWidth>390)) bad('page wider than the phone');
  console.log('lines:',n,'| video:',vid.trim(),'| search results:',found,'| fetched:',JSON.stringify(after));
  console.log('errors:',errs); await b.close();
})();
