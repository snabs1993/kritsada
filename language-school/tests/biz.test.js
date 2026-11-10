// Business English: list by theme, every lesson opens with all tabs, role-play practice runs to the end in both roles,
// the quiz records a score, vocabulary goes into word review, theme reviews draw 12 questions, nothing is wider than a phone.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const p=await b.newPage({viewport:{width:360,height:800}}); const errs=[], bad=m=>errs.push(m);
  p.on('pageerror',e=>errs.push(String(e)));
  await p.addInitScript(()=>{speechSynthesis.speak=u=>setTimeout(()=>u.onend&&u.onend(),5)});
  await open(p,'#practice'); if(!(await p.locator('[data-act="pgo"][data-id="biz"]').count())) bad('no Business English card');
  await open(p,'#practice-biz');
  const ids=await p.$$eval('[data-act="pgo"][data-id^="biz.b"]',bs=>bs.map(x=>x.dataset.id.slice(4)));
  const reviews=await p.locator('[data-act="pgo"][data-id^="biz.r"]').count();
  console.log('lessons:',ids.length,'| theme reviews:',reviews); if(ids.length!==30||reviews!==6) bad('expected 30 lessons and 6 reviews');
  for(const id of ids){
    await open(p,'#practice-biz.'+id);
    for(const t of ['rp','vocab','phr','talk','quiz']){await p.click('[data-act="bz-tab"][data-t="'+t+'"]'); if(await p.evaluate(()=>document.documentElement.scrollWidth>360)) bad(id+' '+t+' wider than the phone')}
    await p.click('[data-act="bz-tab"][data-t="play"]');
    for(const r of ['A','B']){
      await p.click('[data-act="bz-role"][data-r="'+r+'"]');
      for(let i=0;i<20&&await p.locator('[data-act="bz-next"]').count();i++){if(await p.locator('[data-act="bz-show"]').count()) await p.click('[data-act="bz-show"]'); await p.click('[data-act="bz-next"]')}
      if(!/จบบทแล้ว/.test(await p.textContent('#app'))) bad(id+' role '+r+' did not reach the end');
    }
  }
  // quiz on lesson 1: answer everything with the first option, a score is saved
  await open(p,'#practice-biz.b1'); await p.click('[data-act="bz-tab"][data-t="quiz"]');
  for(let i=0;i<4;i++) await p.locator('[data-act="bz-ans"][data-q="'+i+'"]').first().click();
  const st=await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')).stats.biz.done.b1); if(st==null) bad('quiz score not saved');
  // vocabulary into word review
  await p.click('[data-act="bz-tab"][data-t="vocab"]'); await p.click('[data-act="bz-words"]');
  const w=await p.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('eng-class-v1')).words).length); if(w<8) bad('words not added: '+w);
  await open(p,'#review'); await p.click('[data-act="fold"][data-k="bank"]'); if(!/accountant/.test(await p.textContent('#app'))) bad('business word missing from the word list');
  // theme review
  await open(p,'#practice-biz.r1'); const q=await p.locator('[data-act="bz-ans"]').count(); if(q!==36) bad('theme review has '+q/3+' questions');
  console.log('errors:',errs); await b.close();
})();
