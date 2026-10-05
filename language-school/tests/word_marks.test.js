// "Too easy" and "hard word" buttons: mark from the lesson and the review card, review hard words on their own,
// easy words never come back in reviews, and both marks can be undone from the word list.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const p=await b.newPage({viewport:{width:390,height:844}}); const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
  const bad=m=>errs.push(m);
  const words=()=>p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')).words);
  // lesson vocab step: first word of u1 -> hard
  await open(p,'#lesson-u1');
  const first=(await p.textContent('.flash-word')).trim();
  await p.click('.flash [data-act="w-hard"]');
  let w=await words(); if(!w[first]||!w[first].hard) bad('lesson hard mark not saved for '+first);
  // second word -> too easy
  await p.click('[data-act="v-go"][data-i="1"]');
  const second=(await p.textContent('.flash-word')).trim();
  await p.click('.flash [data-act="w-easy"]');
  w=await words(); if(!w[second]||!w[second].easy) bad('lesson easy mark not saved for '+second);
  // make everything due, then the easy word must not be in today's review
  await p.evaluate(()=>{const s=JSON.parse(localStorage.getItem('eng-class-v1')); for(const k in s.words){if(!s.words[k].easy) s.words[k].due=0} localStorage.setItem('eng-class-v1',JSON.stringify(s))});
  await open(p,'#review');
  const hardHead=(await p.textContent('h2.h3')).trim(); if(!/คำยากของฉัน 1 คำ/.test(hardHead)) bad('hard section header: '+hardHead);
  const startTxt=(await p.textContent('[data-act="rv-start"]')).trim(); console.log('start button:',startTxt,'| hard:',hardHead);
  await p.click('[data-act="rv-start"]');
  const seen=[]; let easyFromCard=null; for(let i=0;i<20&&await p.locator('.review-card').count();i++){const k=(await p.textContent('.review-card .flash-word').catch(()=>'')).trim(); seen.push(k);
    if(!easyFromCard&&k!==first){easyFromCard=k; await p.click('[data-act="rv-easy"]'); continue}   // easy straight from the card, before revealing (not the hard word: easy clears hard)
    await p.click('[data-act="rv-reveal"]'); await p.click('[data-act="rv-grade"][data-g="2"]')}
  if(seen.includes(second)) bad('easy word came back in review');
  w=await words(); if(!easyFromCard||!w[easyFromCard].easy) bad('rv-easy did not mark '+easyFromCard);
  if(!w[first].hard) bad('hard mark lost during review');
  // review only the hard words
  await open(p,'#review'); await p.click('[data-act="rv-hard"]');
  const hk=(await p.textContent('.review-card .flash-word')).trim(); if(hk!==first) bad('hard review showed '+hk);
  // undo both marks from the word list
  await open(p,'#review');
  await p.click('td [data-act="w-easy"][data-w="'+second+'"]'); await p.click('td [data-act="w-hard"][data-w="'+first+'"]');
  w=await words(); if(w[second].easy) bad('easy not undone'); if(w[first].hard) bad('hard not undone');
  console.log('reviewed:',seen.length,'| first:',first,'| easy:',second);
  console.log('errors:',errs); await b.close();
})();
