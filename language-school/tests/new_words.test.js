// New words every day: opening the review page adds 10 unseen words once per day, the count can be changed or
// switched off, "add 10 more" works, new words carry a label on the card, and "review more" picks least-seen words.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const p=await b.newPage({viewport:{width:390,height:844}}); const errs=[], bad=m=>errs.push(m);
  p.on('pageerror',e=>errs.push(String(e)));
  const words=()=>p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')).words);
  await open(p,'#lesson-u1'); let w=await words(); const base=Object.keys(w).length; if(base!==8) bad('lesson words: '+base);
  await open(p,'#review'); w=await words(); const fresh=Object.keys(w).filter(k=>w[k].fresh);
  if(fresh.length!==10) bad('daily new words: '+fresh.length);
  await open(p,'#review'); w=await words(); if(Object.keys(w).length!==base+10) bad('added again on the same day');
  await p.click('[data-act="rv-more"]'); w=await words(); if(Object.keys(w).length!==base+20) bad('add 10 more failed');
  // next day with 5 per day
  await p.click('[data-act="rv-newn"][data-n="5"]');
  await p.evaluate(()=>{const s=JSON.parse(localStorage.getItem('eng-class-v1')); s.newWordsDay='2000-01-01'; localStorage.setItem('eng-class-v1',JSON.stringify(s))});
  await open(p,'#review'); w=await words(); if(Object.keys(w).length!==base+25) bad('next day with 5: '+Object.keys(w).length);
  // switched off
  await p.click('[data-act="rv-newn"][data-n="0"]');
  await p.evaluate(()=>{const s=JSON.parse(localStorage.getItem('eng-class-v1')); s.newWordsDay='2000-01-02'; localStorage.setItem('eng-class-v1',JSON.stringify(s))});
  await open(p,'#review'); w=await words(); if(Object.keys(w).length!==base+25) bad('added while switched off');
  // the card labels a brand-new word
  await p.click('[data-act="rv-start"]'); let label=false;
  for(let i=0;i<40&&await p.locator('.review-card').count();i++){if(/คำใหม่/.test(await p.textContent('.review-card .flash-top'))) {label=true; break} await p.click('[data-act="rv-reveal"]'); await p.click('[data-act="rv-grade"][data-g="2"]')}
  if(!label) bad('no คำใหม่ label on a new word');
  // review more picks words never reviewed before ones reviewed today
  await open(p,'#review'); await p.evaluate(()=>{const s=JSON.parse(localStorage.getItem('eng-class-v1')); for(const k in s.words) s.words[k].due=Date.now()+86400000*5; localStorage.setItem('eng-class-v1',JSON.stringify(s))});
  await open(p,'#review'); await p.click('[data-act="rv-extra"]'); const k=(await p.textContent('.review-card .flash-word')).trim();
  w=await words(); if(w[k].seen) bad('review more showed a word seen today: '+k);
  if(await p.evaluate(()=>document.documentElement.scrollWidth>390)) bad('page wider than the phone');
  console.log('base',base,'| fresh day 1',fresh.length,'| total',Object.keys(w).length);
  console.log('errors:',errs); await b.close();
})();
