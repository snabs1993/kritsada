const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[]; const p=await b.newPage({viewport:{width:360,height:800}}); p.on('pageerror',e=>errs.push(String(e)));
  const hs=[];
  ['xa1g','xa1h','xa2g','xa2h','xb1g','xb1h','xb2g','xb2h','xc1g','xc1h','xc2g','xc2h'].forEach(u=>hs.push('#lesson-'+u));
  for(let i=41;i<=56;i++)hs.push('#practice-pod.p'+i);
  ['a1h','a2h','b1i','b2h','c1g','c2b','a1i','a2i','b1j','b2i','c1h','c2c'].forEach(s=>hs.push('#practice-story.'+s));
  ['indef','degree','futpast','purpose','motion','unless'].forEach(g=>hs.push('#practice-gram.'+g));
  ['market','roommate','partyplan','optician'].forEach(s=>hs.push('#practice-scene.'+s));
  hs.push('#practice-email','#practice-stress','#practice-verbs','#practice-wf','#practice-phrasebook','#practice-decks','#practice-reading','#practice-thaiglish','#practice-wordform');
  for(const h of hs){await open(p,h); await p.waitForTimeout(60);
    const t=(await p.evaluate(()=>{const e=document.querySelector('h1');return e?e.textContent:'NO H1'})).replace(/\s+/g,' ').slice(0,70);
    const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
    console.log(h.padEnd(26),sw>360?'OVERFLOW '+sw:'',t);}
  // walk every step of each new unit
  await p.evaluate(()=>{const L={};for(let i=1;i<=24;i++)L['u'+i]={reached:5,done:true,best:90,stars:3,doneAt:Date.now()};localStorage.setItem('eng-class-v1',JSON.stringify({v:1,updatedAt:1,lessons:L}))});
  for(const u of ['xa1g','xa1h','xa2g','xa2h','xb1g','xb1h','xb2g','xb2h','xc1g','xc1h','xc2g','xc2h']){await open(p,'#lesson-'+u); const steps=await p.locator('[data-act="step"]').count(); for(let i=0;i<steps;i++){await p.locator('[data-act="step"]').nth(i).click(); await p.waitForTimeout(40);} console.log(u,'steps',steps);}
  console.log('errors:',errs); await b.close();
})();
