const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  const p=await b.newPage({viewport:{width:1280,height:900}}); p.on('pageerror',e=>errs.push(String(e)));
  await p.addInitScript(()=>{window.__said=[]; speechSynthesis.speak=u=>{__said.push(u.text); setTimeout(()=>u.onend&&u.onend(),5)}});
  await open(p,'#practice'); console.log('hub cards:', await p.locator('.p-group .p-card').count());
  // pods
  await open(p,'#practice-pods'); console.log('pod rows:', await p.locator('[data-id^="pod."]').count());
  await p.click('[data-id="pod.p5"]'); await p.click('[data-act="podplay"]'); await p.waitForTimeout(1500);
  console.log('pod said lines:', (await p.evaluate(()=>__said.length)), '| now:', await p.textContent('#pod-now').catch(()=>'-'));
  for(let q=0;q<4;q++) await p.click(`[data-act="podq"][data-q="${q}"][data-o="0"]`);
  console.log('pod result:', (await p.textContent('.comp .feedback')).trim().slice(0,30));
  await p.click('[data-act="podscript"]'); await p.click('[data-act="podth"]'); console.log('script lines:', await p.locator('.pod-dlg li').count(), '| tr:', await p.locator('.pod-dlg .tr').count());
  await p.screenshot({path:OUT+'pod-desk.png'});
  // thaiglish
  await open(p,'#practice-thaiglish'); console.log('tg items:', await p.locator('.tg-item').count());
  await p.click('[data-act="tgcat"]>>nth=2'); console.log('tg filtered:', await p.locator('.tg-item').count());
  await p.click('[data-act="tgquiz"]'); for(let i=0;i<10;i++){await p.click('[data-act="r-opt"]>>nth=0'); await p.click('[data-act="r-next"]')}
  console.log('tg quiz:', (await p.textContent('.section .h2')).trim(), '| stat:', await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')).stats.tg));
  // word forms
  await open(p,'#practice-wordforms'); console.log('wf rows:', await p.locator('.wf-tbl tbody tr').count());
  await p.click('[data-act="wftab"][data-t="quiz"]'); await p.click('[data-act="wfstart"]'); for(let i=0;i<10;i++){await p.click('[data-act="r-opt"]>>nth=1'); await p.click('[data-act="r-next"]')}
  console.log('wf quiz:', (await p.textContent('.card .h2')).trim());
  // stress
  await open(p,'#practice-stress'); await p.click('[data-act="ssnew"]');
  for(let i=0;i<10;i++){await p.click('[data-act="sspick"]>>nth=0'); await p.click('[data-act="ssnext"]')}
  console.log('stress:', (await p.textContent('.card .h2')).trim(), '| missed list:', await p.locator('.sp-miss li').count());
  // goal
  await open(p,'#report'); await p.click('[data-act="goaltype"][data-v="toeic"]'); await p.selectOption('#goal-target','750'); await p.fill('#goal-date','2026-12-20'); await p.locator('#goal-date').dispatchEvent('change');
  console.log('goal saved:', JSON.stringify(await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')).goal)));
  await open(p,'#home'); console.log('home goal:', (await p.textContent('.goal-card')).replace(/\s+/g,' '));
  // review typing mode
  await p.evaluate(()=>{const s=JSON.parse(localStorage.getItem('eng-class-v1')); s.words={"hello":{b:0,due:0},"name":{b:0,due:0}}; localStorage.setItem('eng-class-v1',JSON.stringify(s))});
  await open(p,'#review'); await p.click('[data-act="rv-start"]'); await p.click('[data-act="rv-mode"]');
  const th=await p.textContent('.flash-th'); console.log('typing prompt:', th, '| masked:', (await p.locator('.flash-ex').textContent().catch(()=>'')).slice(0,60));
  const ans=await p.evaluate(()=>0); await p.fill('#rv-in','hello'); await p.press('#rv-in','Enter');
  console.log('typed fb:', (await p.textContent('.feedback')).replace(/\s+/g,' '));
  await p.click('[data-act="rv-grade"][data-g="2"]'); console.log('next prompt has input:', await p.locator('#rv-in').count());
  await p.click('[data-act="rv-type-check"][data-skip="1"]'); console.log('skip fb:', (await p.textContent('.feedback b')));
  // story shadowing
  await open(p,'#practice-story.b1c'); await p.click('[data-act="stshadow"]'); await p.waitForTimeout(600);
  console.log('shadow box:', (await p.textContent('#shadow-now')).slice(0,70));
  await p.click('[data-act="stshadow"]'); console.log('shadow stopped:', await p.locator('#shadow-now').count());
  // decks count & new decks words in lookup
  await open(p,'#practice-lookup'); await p.fill('#dq','carbon'); console.log('lookup carbon:', await p.locator('.dq-item').count());
  await open(p,'#report'); console.log('badges:', await p.textContent('.section:has(.badges) .section-head .muted'));
  for(const w of [360,390,820]){ await p.setViewportSize({width:w,height:800});
    for(const h of ['#practice','#practice-pod.p7','#practice-thaiglish','#practice-wordforms','#practice-stress','#home','#report','#review']){
      await open(p,h); const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) console.log('OVERFLOW',w,h,sw)}
    if(w===390){await open(p,'#practice-pod.p3'); await p.click('[data-act="podscript"]'); await p.screenshot({path:OUT+'pod-phone.png'}); await open(p,'#practice-thaiglish'); await p.screenshot({path:OUT+'tg-phone.png'}); await open(p,'#home'); await p.locator('.goal-card').screenshot({path:OUT+'goal-phone.png'}); await open(p,'#practice-stress'); await p.click('[data-act="ssnew"]'); await p.screenshot({path:OUT+'stress-phone.png'});}
  }
  console.log('errors:', errs); await b.close();
})();
