const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[]; const p=await b.newPage({viewport:{width:360,height:800}}); p.on('pageerror',e=>errs.push(String(e)));
  const hs=[];
  const NEW=['xa1k','xa1l','xa1m','xa1n','xa2k','xa2l','xa2m','xa2n','xb1k','xb1l','xb1m','xb1n','xb2k','xb2l','xb2m','xb2n','xc1k','xc1l','xc1m','xc1n','xc2k','xc2l','xc2m','xc2n','xa1o','xa1p','xa1q','xa1r','xa1s','xa1t','xa1u','xa1v','xa2o','xa2p','xa2q','xa2r','xa2s','xa2t','xa2u','xa2v'];
  NEW.forEach(u=>hs.push('#lesson-'+u));
  for(let i=65;i<=76;i++)hs.push('#practice-pod.p'+i);
  ['a1k','a1l','a2k','a2l','b1l','b1m','b2k','b2l','c1j','c1k','c2e','c2f'].forEach(s=>hs.push('#practice-story.'+s));
  ['able','other','during','likeas','compadj','every'].forEach(g=>hs.push('#practice-gram.'+g));
  ['breakdown','wedding','allergy','enrol'].forEach(s=>hs.push('#practice-scene.'+s));
  hs.push('#practice-email','#practice-stress','#practice-verbs','#practice-wf','#practice-phrasebook','#practice-decks','#practice-reading','#practice-thaiglish','#practice-wordform');
  for(const h of hs){await open(p,h); await p.waitForTimeout(60);
    const t=(await p.evaluate(()=>{const e=document.querySelector('h1');return e?e.textContent:'NO H1'})).replace(/\s+/g,' ').slice(0,70);
    const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
    console.log(h.padEnd(26),sw>360?'OVERFLOW '+sw:'',t);
    if(/^#(lesson-|practice-pod\.|practice-story\.)/.test(h)&&(t==='NO H1'||sw>360)) console.log('ERROR new page broken:',h);}
  // walk every step of each new unit
  await p.evaluate(()=>{const L={};for(let i=1;i<=24;i++)L['u'+i]={reached:5,done:true,best:90,stars:3,doneAt:Date.now()};localStorage.setItem('eng-class-v1',JSON.stringify({v:1,updatedAt:1,lessons:L}))});
  for(const u of NEW){await open(p,'#lesson-'+u); const steps=await p.locator('[data-act="step"]').count(); for(let i=0;i<steps;i++){await p.locator('[data-act="step"]').nth(i).click(); await p.waitForTimeout(40);} console.log(u,'steps',steps); if(steps!==6) console.log('ERROR',u,'should have 6 steps');}
  console.log('errors:',errs); await b.close();
})();
