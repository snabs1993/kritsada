// Sentence review: ☆ saves sentences from a lesson dialogue, a grammar example and the phrasebook; the review card
// shows Thai first, grades on the word schedule, "too easy" keeps a sentence out, hard sentences get their own run,
// "add from lessons" fills in grammar examples, and the list can undo and delete.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const p=await b.newPage({viewport:{width:390,height:844}}); const errs=[], bad=m=>errs.push(m);
  p.on('pageerror',e=>errs.push(String(e)));
  const sents=()=>p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')).sents||{});
  await open(p,'#lesson-u1');
  await p.locator('[data-act="step"]').nth(1).click(); await p.locator('.ex-list .sent-btn').first().click();
  await p.locator('[data-act="step"]').nth(2).click(); await p.locator('.dlg .sent-btn').first().click();
  if((await p.locator('.dlg .sent-btn').first().textContent()).trim()!=='★') bad('dialogue star not filled');
  await open(p,'#practice-phrasebook'); await p.locator('[data-id^="pb."]').first().click(); await p.locator('.pb-item .sent-btn').first().click();
  let s=await sents(); const keys=Object.keys(s); if(keys.length!==3) bad('saved '+keys.length+' sentences');
  if(!keys.every(k=>s[k].th)) bad('a saved sentence has no Thai');
  // tapping a filled star removes the sentence again
  await p.locator('.pb-item .sent-btn').first().click(); s=await sents(); if(Object.keys(s).length!==2) bad('unsave failed'); await p.locator('.pb-item .sent-btn').first().click();
  // review: Thai first, then English
  await open(p,'#review');
  const head=await p.textContent('[data-act="st-start"]'); if(!/3/.test(head)) bad('start button: '+head);
  await p.click('[data-act="st-start"]');
  const first=(await p.textContent('.review-card .sent-th')).trim(); if(!first) bad('card front has no Thai');
  if(await p.locator('.review-card .sent-en').count()) bad('English shown before reveal');
  await p.click('[data-act="st-hard"]');                 // hard
  await p.click('[data-act="st-reveal"]'); const hardEn=(await p.textContent('.review-card .sent-en')).trim(); await p.click('[data-act="st-grade"][data-g="2"]');
  const easyTh=(await p.textContent('.review-card .sent-th')).trim(); await p.click('[data-act="st-easy-now"]');   // too easy, straight from the front
  await p.click('[data-act="st-reveal"]'); await p.click('[data-act="st-grade"][data-g="1"]');
  if(await p.locator('.review-card').count()) bad('session did not end');
  s=await sents(); if(!s[hardEn]||!s[hardEn].hard) bad('hard not saved'); const easyK=Object.keys(s).find(k=>s[k].easy); if(!easyK||s[easyK].th!==easyTh) bad('easy not saved');
  // make everything due again: the easy one must stay out
  await p.evaluate(()=>{const v=JSON.parse(localStorage.getItem('eng-class-v1')); for(const k in v.sents) if(!v.sents[k].easy) v.sents[k].due=0; localStorage.setItem('eng-class-v1',JSON.stringify(v))});
  await open(p,'#review'); const st=await p.textContent('[data-act="st-start"]'); if(!/2/.test(st)) bad('easy sentence still due: '+st);
  await p.click('[data-act="st-hardrun"]'); await p.click('[data-act="st-reveal"]'); const hk=(await p.textContent('.review-card .sent-en')).trim(); if(hk!==hardEn) bad('hard run showed '+hk); await p.click('[data-act="st-end"]');
  // add grammar examples from lessons already opened (u1)
  await p.click('[data-act="st-lessons"]'); s=await sents(); if(Object.keys(s).length<4) bad('add from lessons added nothing');
  // list: undo easy, delete one
  await p.click('details.card summary >> nth=0').catch(()=>{});
  await p.locator('.sent-list [data-act="st-easy"][aria-pressed="true"]').first().click(); s=await sents(); if(s[easyK].easy) bad('easy not undone');
  const before=Object.keys(s).length; await p.locator('.sent-list [data-act="st-del"]').first().click(); s=await sents(); if(Object.keys(s).length!==before-1) bad('delete failed');
  if(await p.evaluate(()=>document.documentElement.scrollWidth>390)) bad('review page wider than the phone');
  await p.screenshot({path:require('path').join(__dirname,'out','sentences.png'),fullPage:false});
  console.log('saved:',Object.keys(s).length,'| hard:',hardEn.slice(0,40));
  console.log('errors:',errs); await b.close();
})();
