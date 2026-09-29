const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+'';
let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  for(const [w,h] of [[360,740],[390,844],[820,1180],[1100,800],[1101,800],[1180,820],[1280,900]]){
    const p=await b.newPage({viewport:{width:w,height:h}}); p.on('pageerror',e=>errs.push(w+':'+e));
    await open(p,'#practice'); await p.waitForTimeout(200);
    console.log(w, JSON.stringify(await p.evaluate(()=>({doc:document.documentElement.scrollWidth,bar:document.querySelector('.topbar-in').scrollWidth,barW:document.querySelector('.topbar-in').clientWidth,nav:getComputedStyle(document.querySelector('.nav')).position}))));
    await p.close();
  }
  const p=await b.newPage({viewport:{width:1280,height:900}}); p.on('pageerror',e=>errs.push(String(e)));
  await open(p,''); await p.waitForTimeout(200);
  console.log('home daily goals:', await p.locator('.daily .goal').count(), '| phrase:', (await p.textContent('.phrase .ph-en')).trim());
  // lesson: a wrong answer lands in the mistakes notebook
  await p.click('.class-card [data-act="open"]'); await p.click('[data-act="next-step"]'); await p.click('[data-act="next-step"]'); await p.click('[data-act="next-step"]');
  await p.click('[data-act="r-opt"] >> nth=0').catch(()=>{});
  await p.fill('#fill-in','wrongword'); await p.click('form[data-form="fill"] button');
  await open(p,'#practice'); await p.waitForTimeout(150);
  console.log('hub cards:', await p.locator('.p-card').count(), '| goals step:', (await p.textContent('.goal >> nth=1')).replace(/\s+/g,' '), '| mistakes meta:', await p.textContent('[data-id="mistakes"] .p-meta'));
  // dictation
  await p.click('[data-act="pgo"][data-id="dictation"]');
  const target=await p.evaluate(()=>{return null});
  await p.fill('#dict-in','my name is tom and i am a student'); await p.press('#dict-in','Enter');
  console.log('dictation result:', (await p.textContent('.dict-res')).replace(/\s+/g,' ').slice(0,90));
  await p.click('[data-act="dnext"]'); console.log('next sentence:', await p.textContent('.dict .mono'));
  // sounds
  await open(p,'#practice-sounds'); await p.click('[data-act="sgroup"][data-g="lr"]');
  for(let i=0;i<10;i++){ await p.click('[data-act="spick"] >> nth=0'); await p.click('[data-act="snext"]'); }
  console.log('sounds done:', (await p.textContent('.card h2')).trim());
  // reading
  await open(p,'#practice-story.a2a'); await p.waitForTimeout(100);
  console.log('gloss words:', await p.locator('.gw').count());
  await p.click('.gw >> nth=0'); console.log('gloss panel:', (await p.textContent('.gloss-panel')).replace(/\s+/g,' ').slice(0,60));
  await p.click('[data-act="gadd"]'); console.log('after add:', (await p.textContent('.gloss-panel')).includes('อยู่ในคลัง'));
  for(const [q,o] of [[0,1],[1,1],[2,0]]) await p.click(`[data-act="stq"][data-q="${q}"][data-o="${o}"]`);
  console.log('story result:', (await p.textContent('.comp .feedback')).trim());
  await p.click('[data-act="gaddall"]');
  // grammar
  await open(p,'#practice-gram.cond'); await p.click('[data-act="gqstart"]');
  for(let i=0;i<5;i++){ await p.click('[data-act="r-opt"] >> nth=0'); await p.click('[data-act="r-next"]'); }
  console.log('grammar quiz:', (await p.textContent('.section .card h2')).trim());
  // mistakes practice
  await open(p,'#practice-mistakes'); const before=await p.locator('.mist-item').count();
  await p.click('[data-act="mstart"]'); console.log('mistakes listed:', before, '| runner items:', (await p.textContent('.rn-top .mono')).trim());
  // exam mistakes (TOEIC reading blank submit)
  await open(p,'#exam-toeic-reading-1'); await p.click('[data-act="xstart"][data-mode="practice"]'); await p.click('[data-act="xsubmit"]'); await p.click('[data-act="xsubmit"]');
  await open(p,'#practice-mistakes'); console.log('mistakes after TOEIC:', await p.locator('.mist-item').count(), '| sources:', (await p.$$eval('.section h2.h3',hs=>hs.map(h=>h.textContent.split(' ·')[0]))).join(' | '));
  // scenes + journal render
  await open(p,'#practice-scenes'); console.log('scene cards:', await p.locator('.p-card').count());
  await open(p,'#practice-scene.job'); console.log('scene chat mount:', await p.locator('[data-chat="scene:job"]').count(), (await p.textContent('[data-chat]')).slice(0,40));
  await open(p,'#teacher'); console.log('teacher modes:', await p.locator('.tabs button').count());
  // review page decks + custom word
  await open(p,'#review'); console.log('decks:', await p.locator('.deck').count());
  await p.click('[data-act="deck-add"][data-id="phrasal"]'); await p.fill('#aw-en','serendipity'); await p.fill('#aw-th','ความบังเอิญที่ดี'); await p.click('form[data-form="addword"] button');
  console.log('word bank rows:', await p.locator('.section table tbody tr').count());
  await p.click('[data-act="rv-start"]'); for(let i=0;i<3;i++){ await p.click('[data-act="rv-reveal"]'); await p.click('[data-act="rv-grade"][data-g="2"]'); }
  await open(p,''); console.log('home goals:', (await p.textContent('.daily .goals')).replace(/\s+/g,' '));
  await p.screenshot({path:OUT+'home-daily.png',fullPage:false});
  const m=await b.newPage({viewport:{width:390,height:844}}); m.on('pageerror',e=>errs.push('m:'+e));
  await open(m,'#practice'); await m.waitForTimeout(200); await m.screenshot({path:OUT+'prac-phone.png'});
  await open(m,'#practice-story.b1a'); await m.click('.gw >> nth=2'); await m.screenshot({path:OUT+'story-phone.png'});
  console.log('errors:', errs);
  await b.close();
})();
