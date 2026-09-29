const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[]; const p=await b.newPage({viewport:{width:390,height:844}}); p.on('pageerror',e=>errs.push(String(e)));
  await open(p,'#course'); console.log('lede:', (await p.textContent('.lede')).slice(0,80));
  const rows=await p.locator('.level').first().locator('.lrow').allInnerTexts(); console.log('A1 rows:', rows.map(r=>r.replace(/\s+/g,' ').slice(0,40)).join(' || '));
  console.log('bonus chips:', await p.locator('.chip.bonus').count(), '| A1 bonus open?:', await p.locator('[data-act="open"][data-id="xa1a"]').count(), '| A2 bonus locked:', await p.locator('[data-act="testout"][data-id="xa2a"]').count());
  // finish u1..u4 -> u5 unlocked without bonus
  await p.evaluate(()=>{const L={};['u1','u2','u3','u4'].forEach(k=>L[k]={reached:5,done:true,best:90,stars:3,doneAt:Date.now()}); localStorage.setItem('eng-class-v1',JSON.stringify({v:1,updatedAt:1,lessons:L}))});
  await open(p,'#course'); console.log('u5 open:', await p.locator('[data-act="open"][data-id="u5"]').count(), '| xa2a open:', await p.locator('[data-act="open"][data-id="xa2a"]').count());
  await open(p,'#home'); console.log('home next:', (await p.textContent('.class-card .eyebrow')).trim());
  await open(p,'#lesson-xa1b'); console.log('bonus lesson:', (await p.textContent('.lesson-head .eyebrow')).trim(), '|', (await p.textContent('.lesson-head h1')).trim());
  await open(p,'#report'); console.log('certs:', await p.locator('.cert').count());
  await open(p,'#practice-lvtest.1'); console.log('lvtest units:', (await p.textContent('.lede')).slice(0,40));
  await open(p,'#practice-shadow'); console.log('shadow lesson sets:', await p.locator('[data-id^="shadow.u-"]').count());
  await open(p,'#practice-pods'); console.log('pods:', await p.locator('[data-id^="pod."]').count());
  await open(p,'#practice-reading'); console.log('stories:', await p.locator('[data-id^="story."]').count());
  await open(p,'#practice-phrasebook'); console.log('phrasebook:', await p.locator('[data-id^="pb."]').count());
  await open(p,'#practice-scenes'); console.log('scenes:', await p.locator('[data-id^="scene."]').count());
  await open(p,'#exam'); console.log('toeic sets:', await p.locator('[data-act="xset"][data-e="toeic"]').count(), '| ielts sets:', await p.locator('[data-act="xset"][data-e="ielts"]').count());
  await open(p,'#exam-ielts-writing-6'); await p.click('[data-act="xstart"][data-mode="practice"]'); console.log('ielts w6 chart:', await p.locator('.xchart polyline').count());
  for(const w of [360,1280]){await p.setViewportSize({width:w,height:800}); for(const h of ['#course','#lesson-xc2b','#practice-pod.p32']){await open(p,h); const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) console.log('OVERFLOW',w,h,sw)}}
  console.log('errors:', errs); await b.close();
})();
