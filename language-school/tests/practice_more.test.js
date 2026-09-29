const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+'';
let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  const p=await b.newPage({viewport:{width:1280,height:900}}); p.on('pageerror',e=>errs.push(String(e)));
  // pretend the first 12 units are passed so B2 unlocks
  await p.addInitScript(()=>{ if(localStorage.getItem('__seeded')) return; localStorage.setItem('__seeded','1');
    const lessons={}; for(let i=1;i<=12;i++) lessons['u'+i]={reached:5,done:true,best:90,stars:2,doneAt:Date.now()};
    const days=[]; for(let i=0;i<9;i++){const d=new Date(Date.now()-i*864e5); days.push(d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'))}
    localStorage.setItem('eng-class-v1',JSON.stringify({v:1,updatedAt:1,xp:950,days,placement:{done:false,level:1,score:0},lessons,words:{},settings:{slow:false}}));});
  await open(p,'#course'); await p.waitForTimeout(200);
  console.log('levels:', await p.locator('.level').count(), '| lesson rows:', await p.locator('.lrow').count(), '| B2 first unlocked:', !(await p.locator('.lrow[data-id="u13"]').isDisabled()), '| u14 locked:', await p.locator('.lrow[data-id="u14"]').isDisabled());
  // B2 lesson: practice to full marks via harvested answers
  await p.click('.lrow[data-id="u13"]'); for(let i=0;i<3;i++) await p.click('[data-act="next-step"]');
  console.log('practice q:', (await p.textContent('.runner .q')).slice(0,60));
  await open(p,'#lesson-u16'); console.log('u16 locked (redirect home?):', (await p.textContent('#app h1')).slice(0,30));
  // badges and calendar on the report
  await open(p,'#report'); await p.waitForTimeout(200);
  console.log('badges earned:', await p.locator('.badge.on').count(), '/', await p.locator('.badge').count(), '| calendar studied cells:', await p.locator('.cal .cd.on').count(), '| certs:', await p.locator('.cert').count());
  await p.locator('.cal-wrap').screenshot({path:OUT+'cal.png'});
  // games
  await open(p,'#practice-games'); console.log('game cards:', await p.locator('.p-card').count());
  await open(p,'#practice-game.match'); await p.waitForTimeout(100);
  const pairs=await p.$$eval('[data-s="en"]',bs=>bs.map(b=>b.dataset.k));
  await p.click(`[data-s="en"][data-k="${pairs[0]}"]`); await p.click(`[data-s="th"][data-k="${pairs[1]}"]`); // wrong on purpose
  for(const k of pairs){ await p.click(`[data-s="en"][data-k="${k}"]`); await p.click(`[data-s="th"][data-k="${k}"]`); }
  console.log('match result:', (await p.textContent('.card h2')).trim(), '|', (await p.textContent('.card .lede')).trim());
  await open(p,'#practice-game.spell'); await p.waitForTimeout(100);
  await p.click('[data-act="sbhint"]'); const hint=await p.textContent('[data-act="sbhint"]');
  await p.fill('#sb-in','zzz'); await p.press('#sb-in','Enter'); console.log('spell wrong:', (await p.textContent('.feedback')).replace(/\s+/g,' '), '| hint:', hint);
  await open(p,'#practice-game.scramble'); await p.click('[data-act="scrstart"]');
  console.log('scramble:', (await p.textContent('.rn-top .mono')).trim(), '| tiles:', await p.locator('.pool .tl').count());
  // new content
  await open(p,'#practice-dictation'); await p.click('[data-act="dlv"][data-lv="B2"]'); console.log('B2 dictation:', (await p.textContent('.dict .mono')).trim());
  await open(p,'#practice-reading'); console.log('stories:', await p.locator('.lrow').count());
  await open(p,'#practice-scenes'); console.log('scenes:', await p.locator('.p-card').count());
  await open(p,'#review'); console.log('decks:', await p.locator('.deck').count());
  await open(p,''); console.log('home level tile:', (await p.textContent('.stats div:nth-child(3)')).trim());
  await p.screenshot({path:OUT+'home-b2.png'});
  const m=await b.newPage({viewport:{width:390,height:844}}); m.on('pageerror',e=>errs.push('m:'+e));
  await open(m,'#practice-game.match'); await m.waitForTimeout(200); await m.screenshot({path:OUT+'match-phone.png'});
  console.log('phone overflow match/report:', await m.evaluate(()=>document.documentElement.scrollWidth));
  await open(m,'#report'); await m.waitForTimeout(200); console.log('phone report overflow:', await m.evaluate(()=>document.documentElement.scrollWidth));
  console.log('errors:', errs);
  await b.close();
})();
