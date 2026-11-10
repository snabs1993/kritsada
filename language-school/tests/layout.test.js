// App layout: five tabs (home · learn · speak · practice · me) with the right one marked current on inner pages;
// the home page stays short; the course shows one level at a time with bonus units behind a fold; long lists
// (podcasts, stories, grammar, shadowing) show one level; the practice hub can be searched and remembers what was
// opened last; the review word bank and the per-unit report sit behind folds; no page scrolls sideways.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[], bad=m=>errs.push(m);
  const p=await b.newPage({viewport:{width:390,height:844}}); p.on('pageerror',e=>errs.push(String(e)));
  await open(p,'#home');
  const tabs=await p.locator('.nav button').evaluateAll(bs=>bs.filter(x=>getComputedStyle(x).display!=='none').map(x=>x.dataset.to).join(','));
  if(tabs!=='home,course,talk,practice,report') bad('tabs: '+tabs);
  const cur=async()=>p.locator('.nav button[aria-current="page"]').evaluateAll(bs=>bs.map(x=>x.dataset.to).join(','));
  for(const [h,want] of [['#home','home'],['#course','course'],['#lesson-u1','course'],['#practice-talk','talk'],['#practice-shadow','talk'],['#practice-speak.sp01','talk'],['#practice-phrasebook','talk'],
      ['#practice','practice'],['#practice-pods','practice'],['#review','practice'],['#exam','practice'],['#report','report'],['#account','report']]){
    await open(p,h); const c=await cur(); if(c!==want) bad(h+' marks '+c+' not '+want);
  }
  // home is short and its shortcuts work
  await open(p,'#home'); const hh=await p.evaluate(()=>document.documentElement.scrollHeight); console.log('home height',hh);
  if(hh>844*2.6) bad('home too long: '+hh);
  if(await p.locator('#app .lrow').count()) bad('unit list on home');
  await p.click('.quick [data-id^="speak"]'); if(!/practice-speak/.test(await p.evaluate(()=>location.hash))) bad('speak shortcut');
  // course: one level, bonus units folded
  await open(p,'#course');
  const lv=await p.getAttribute('.lv-tabs [aria-pressed="true"]','data-v'), rows=await p.locator('.lrow').count();
  console.log('course level',lv,'rows',rows); if(lv!=='A1'||rows!==4) bad('course shows '+lv+' with '+rows+' rows');
  await p.click('[data-act="fold"][data-k="bonus1"]'); const withBonus=await p.locator('.lrow').count(); if(withBonus<=4) bad('bonus fold did not open');
  if(!await p.locator('.lrow .chip.bonus').count()) bad('no bonus rows');
  await p.click('.lv-tabs [data-v="B2"]'); if(!await p.locator('.lrow[data-id="u13"]').count()) bad('B2 not shown'); if(await p.locator('.lrow[data-id="u1"]').count()) bad('A1 still shown');
  // long lists show one level
  for(const [h,sel,max] of [['#practice-pods','[data-id^="pod."]',40],['#practice-reading','[data-id^="story."]',40],['#practice-grammar','[data-id^="gram."]',60],['#practice-shadow','[data-id^="shadow."]',60]]){
    await open(p,h); const n=await p.locator(sel).count(), chips=await p.locator('.lv-tabs button').count(); console.log(h,'rows',n,'levels',chips);
    if(!n||n>max||chips<3) bad(h+' rows '+n+' chips '+chips);
    await p.locator('.lv-tabs button').last().click(); if(!await p.locator(sel).count()) bad(h+' empty after switching level');
  }
  // practice hub: search and recent
  await open(p,'#practice-grammar'); await open(p,'#practice');
  if(!/คลังไวยากรณ์/.test(await p.textContent('.hub-recent'))) bad('recent row missing grammar');
  const all=await p.locator('.hub-grid .p-card:visible').count(); await p.fill('#hub-q','ไวยากรณ์');
  const hit=await p.locator('.hub-grid .p-card:visible').count(); console.log('hub tiles',all,'| search hits',hit);
  if(!(hit>0&&hit<all)) bad('search '+hit+'/'+all);
  await p.fill('#hub-q','zzzz'); if(!await p.isVisible('.hub-none')) bad('no empty-search note');
  await p.fill('#hub-q',''); await p.click('.hub-tile[data-to="review"]'); if(!/#review/.test(await p.evaluate(()=>location.hash))) bad('review tile');
  // folds on review and me pages
  await open(p,'#review'); if(await p.locator('#app table').count()) bad('word bank open by default');
  await open(p,'#report'); if(await p.locator('.rep-tbl').count()) bad('unit table open by default');
  await p.click('[data-act="fold"][data-k="reptbl"]'); if(!await p.locator('.rep-tbl tr').count()) bad('unit table did not open');
  await p.click('.me-row[data-to="account"]'); if(!/#account/.test(await p.evaluate(()=>location.hash))) bad('account row');
  // nothing scrolls sideways, light or dark, phone or desktop
  for(const dark of [false,true]){await p.emulateMedia({colorScheme:dark?'dark':'light'});
    for(const w of [360,820,1280]){await p.setViewportSize({width:w,height:800});
      for(const h of ['#home','#course','#practice','#practice-talk','#report','#review','#practice-shadow']){await open(p,h); const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) bad('overflow '+w+(dark?' dark ':' ')+h+' '+sw)}}}
  console.log('errors:',errs); await b.close();
})().catch(e=>{console.log('errors: [',String(e),']'); process.exit(1)});
