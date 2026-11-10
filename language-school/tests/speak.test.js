// Guided speaking ("พาพูด"): the hub card and topic list; hints open one step at a time (key words, frame, answer);
// without a mic the learner grades themselves and missed items come back in a second round and on the review list;
// with a (fake) browser speech recogniser, saying the model answer without hints counts as "said it on my own",
// an answer split by a pause is joined and still accepted, a close mishearing ("says" for "say") passes,
// a wrong answer does not, listening ends by itself when nothing more is said, and a personal ("free") item only checks the fixed words of the frame.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[], bad=m=>errs.push(m);
  const dev=async(fake)=>{const c=await b.newContext({viewport:{width:390,height:844}});
    if(fake) await c.addInitScript(()=>{window.EC_FAKE_STT=true; window.__say='';
      window.__segs=[]; window.__starts=0;
      // like a phone recogniser: each start hears one stretch of speech and ends at the next pause
      window.SpeechRecognition=window.webkitSpeechRecognition=class{start(){window.__starts++; setTimeout(()=>{const t=window.__segs.length?window.__segs.shift():window.__say; window.__say=''; if(t) this.onresult&&this.onresult({results:[[{transcript:t}]]}); this.onend&&this.onend()},60)} stop(){}}});
    const p=await c.newPage(); p.on('pageerror',e=>errs.push(String(e))); return p};
  const data=p=>p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')||'{}'));
  // no mic: self grading
  const p=await dev(false);
  await open(p,'#practice');
  if(!await p.locator('[data-act="pgo"][data-id="speak"]').count()) bad('no hub card');
  await open(p,'#practice-speak');
  const topics=await p.locator('[data-id^="speak.sp"]').count(); console.log('topics',topics);
  await p.click('[data-act="spcat"][data-v="work"]'); const work=await p.locator('[data-id^="speak.sp"]').count();
  if(!(work>0&&work<topics)) bad('category filter: '+work+'/'+topics);
  await open(p,'#practice-speak.sp01');
  const items=await p.evaluate(()=>+document.querySelector('.sp-prog .muted').textContent.split('/')[1]);
  if(await p.locator('.sp-kw').count()) bad('hint shown before asking');
  await p.click('[data-act="sphint"]'); if(!await p.locator('.sp-kw').count()) bad('no key words');
  if(await p.locator('.sp-frame').count()) bad('frame too early');
  await p.click('[data-act="sphint"]'); if(!await p.locator('.sp-frame .sp-blank').count()) bad('no frame');
  await p.click('[data-act="sphint"]'); if(!await p.locator('.sp-ans .sp-en').count()) bad('no answer');
  if(await p.locator('[data-act="sphint"]').count()) bad('hint button after the answer');
  // grade: first item missed, the rest said on my own
  for(let i=0;i<items;i++){
    await p.click('[data-act="spself"][data-v="'+(i===0?'miss':'own')+'"]'); await p.click('[data-act="spnext"]');
  }
  const round2=(await p.textContent('.sp-prog .muted')).trim(); if(!/รอบทวน/.test(round2)||!/1 \/ 1/.test(round2)) bad('second round: '+round2);
  await p.click('[data-act="sphint"]'); await p.click('[data-act="sphint"]'); await p.click('[data-act="sphint"]');
  await p.click('[data-act="spself"][data-v="hint"]'); await p.click('[data-act="spnext"]');
  if(!await p.locator('.sp-done').count()) bad('no summary');
  const d=await data(p); console.log('spk',JSON.stringify(d.stats.spk),'hard',JSON.stringify(d.stats.spkHard));
  if(!d.stats.spk.sp01||d.stats.spk.sp01.best!==items-1) bad('best not saved');
  if(!d.stats.spkHard['sp01#0']) bad('missed item not on the hard list');
  await open(p,'#practice-speak'); if(!await p.locator('[data-id="speak.review"]').count()) bad('no review card');
  await open(p,'#practice-speak.review'); if(!/1 \/ 1/.test(await p.textContent('.sp-prog .muted'))) bad('review size');
  await p.click('[data-act="spself"][data-v="own"]'); await p.click('[data-act="spnext"]');
  if(Object.keys((await data(p)).stats.spkHard).length) bad('said on my own, still on the hard list');
  if(await p.locator('[data-act="spmic"]').count()) bad('mic shown without speech recognition');
  // with a (fake) recogniser
  const q=await dev(true);
  await open(q,'#practice-speak.sp02');
  const model=async()=>{await q.click('[data-act="sphint"]');await q.click('[data-act="sphint"]');await q.click('[data-act="sphint"]'); const t=(await q.textContent('.sp-ans .sp-en')).trim(); return t};
  const ans=await model(); await open(q,'#practice-speak.sp03'); await open(q,'#practice-speak.sp02');   // leaving and coming back starts a fresh round
  // wrong answer first: not accepted, no grade yet
  await q.evaluate(()=>{window.__say='banana banana banana'}); await q.click('[data-act="spmic"]'); await q.waitForSelector('.pron:not(.live)');
  if(await q.locator('[data-act="spnext"]').count()) bad('wrong answer accepted');
  await q.evaluate(a=>{window.__say=a},ans); await q.click('[data-act="spmic"]'); await q.waitForSelector('[data-act="spnext"]');
  console.log('heard score:',(await q.textContent('.pron b')).trim());
  // the same answer said in two stretches with a pause, with one word slightly misheard
  await open(q,'#practice-speak.sp03'); await open(q,'#practice-speak.sp02');
  const words=ans.replace(/[.?!,]/g,'').split(/\s+/), half=Math.ceil(words.length/2);
  let changed=''; const misheard=words.slice(half).map(w=>!changed&&w.length>=4&&!/s$/.test(w)?(changed=w,w+'s'):w).join(' ');
  if(!changed) bad('no word to mishear in: '+ans);
  await q.evaluate(([a,b])=>{window.__starts=0; window.__segs=[a,b]},[words.slice(0,half).join(' '),misheard]);
  await q.click('[data-act="spmic"]'); try{await q.waitForSelector('[data-act="spnext"]',{timeout:8000})}catch(e){bad('answer split by a pause not accepted: '+await q.textContent('.sp-card'))}
  console.log('split answer:',(await q.textContent('.pron .muted')).trim(),'| recogniser starts:',await q.evaluate(()=>window.__starts));
  // nothing said: listening stops by itself and the self-grade buttons are offered
  await open(q,'#practice-speak.sp03'); await open(q,'#practice-speak.sp02');
  await q.evaluate(()=>{window.__segs=[]; window.__say=''}); const t0=Date.now();
  await q.click('[data-act="spmic"]'); await q.waitForSelector('.pron:not(.live)',{timeout:10000});
  console.log('silent try ended after',Date.now()-t0,'ms | self-grade offered:',await q.locator('[data-act="spself"]').count()>0);
  if(!await q.locator('[data-act="spself"]').count()) bad('no self-grade after a try');
  await q.evaluate(a=>{window.__say=a},ans); await q.click('[data-act="spmic"]'); await q.waitForSelector('[data-act="spnext"]');
  await q.click('[data-act="spnext"]');
  const h=(await data(q)).stats||{}; if(h.spkHard&&Object.keys(h.spkHard).length) bad('own answer put on the hard list');
  // a "free" item: any name passes when the fixed words are said
  await open(q,'#practice-speak.sp01');
  await q.click('[data-act="sphint"]');await q.click('[data-act="sphint"]');
  const frame=(await q.textContent('.sp-frame')).replace(/\s+/g,' ').trim();
  const isFree=await q.locator('.sp-ans').count()===0;
  await q.evaluate(f=>{window.__say=f.replace(/ /g,' ').replace(/ +/g,' ').replace(/ \./,' Somchai.').replace(/ ,/,' Somchai,')},frame);
  await q.click('[data-act="spmic"]'); await q.waitForSelector('.pron:not(.live)');
  console.log('free item frame:',frame,'| accepted:',await q.locator('[data-act="spnext"]').count()>0);
  for(const w of [360,1280]){await q.setViewportSize({width:w,height:800}); for(const hh of ['#practice-speak','#practice-speak.sp10']){await open(q,hh); const sw=await q.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) bad('overflow '+w+' '+hh+' '+sw)}}
  console.log('errors:',errs); await b.close();
})().catch(e=>{console.log('errors: [',String(e),']'); process.exit(1)});
