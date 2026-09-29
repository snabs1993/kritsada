const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  const p=await b.newPage({viewport:{width:390,height:844}}); p.on('pageerror',e=>errs.push(String(e)));
  await open(p,'#report'); console.log('report table width vs box:', await p.evaluate(()=>{const t=document.querySelector('.rep-tbl'); return [t.scrollWidth,t.parentElement.clientWidth]}));
  await p.locator('.rep-tbl').screenshot({path:OUT+'qa_ui/after_report.png'});
  await open(p,'#practice-verbs'); console.log('verb table:', await p.evaluate(()=>{const t=document.querySelector('.vb-tbl'); return [t.scrollWidth,t.parentElement.clientWidth]}));
  console.log('back height:', await p.evaluate(()=>document.querySelector('.back').getBoundingClientRect().height), '| body margin:', await p.evaluate(()=>getComputedStyle(document.body).margin));
  await open(p,'#lesson-u1'); await p.evaluate(()=>{}); 
  for(const w of [360,390,820,1024,1280]) for(const dark of [false,true]){await p.setViewportSize({width:w,height:800}); await p.emulateMedia({colorScheme:dark?'dark':'light'});
    for(const h of ['#home','#report','#practice-verbs','#exam-ielts-writing-2','#lesson-u1','#practice']){await open(p,h); const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) console.log('OVERFLOW',w,dark,h,sw)}}
  await p.setViewportSize({width:1024,height:1100}); await p.emulateMedia({colorScheme:'light'});
  await open(p,'#exam-ielts-reading-1'); await p.click('[data-act="xstart"][data-mode="practice"]');
  console.log('xpass bottom vs nav top:', await p.evaluate(()=>{const x=document.querySelector('.xpass'); window.scrollTo(0,x.offsetTop); return [Math.round(x.getBoundingClientRect().top+x.clientHeight), Math.round(document.querySelector('.nav').getBoundingClientRect().top)]}));
  console.log('errors:', errs); await b.close();
})();
