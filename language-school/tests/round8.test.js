const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[]; const p=await b.newPage({viewport:{width:390,height:844}}); p.on('pageerror',e=>errs.push(String(e)));
  await open(p,'#practice'); console.log('hub:', (await p.locator('.p-group .p-card .p-desc').allTextContents()).filter(t=>/ประโยค A1|เรื่อง|สถานการณ์จริง|ไวยากรณ์ \d+|ตอน/.test(t)).map(t=>t.slice(0,60)).join(' || '));
  await open(p,'#course'); console.log('course lede:', (await p.textContent('.lede')).slice(0,14), '| levels:', await p.locator('.level-code').allTextContents());
  await p.evaluate(()=>{const L={};for(let i=1;i<=20;i++)L['u'+i]={reached:5,done:true,best:90,stars:3,doneAt:Date.now()}; const s=JSON.parse(localStorage.getItem('eng-class-v1')||'{}'); s.lessons=L; localStorage.setItem('eng-class-v1',JSON.stringify(s))});
  await open(p,'#lesson-u21'); console.log('u21:', (await p.textContent('#app .h2')).trim());
  for(let s=0;s<3;s++){ await p.click('[data-act="next-step"]').catch(()=>{}); }
  await open(p,'#practice-dictation'); await p.click('[data-act="dlv"][data-lv="C2"]'); console.log('C2 dictation:', await p.textContent('.dict .mono'));
  await open(p,'#practice-pods'); console.log('pods:', await p.locator('[data-id^="pod."]').count());
  await open(p,'#practice-pod.p16'); console.log('p16:', (await p.textContent('h1')).trim());
  await open(p,'#practice-reading'); console.log('stories:', await p.locator('[data-id^="story."]').count());
  await open(p,'#practice-grammar'); console.log('grammar extras:', await p.locator('.section:has-text("หัวข้อเพิ่มเติม") .lrow').count());
  await open(p,'#practice-gram.caus'); await p.click('[data-act="gqstart"]'); console.log('caus quiz:', await p.textContent('.rn-top').catch(()=>'?'));
  await open(p,'#practice-phrasebook'); console.log('phrasebook:', await p.locator('[data-id^="pb."]').count());
  await open(p,'#practice-scenes'); console.log('scenes:', await p.locator('[data-id^="scene."]').count());
  await open(p,'#practice-shadow'); console.log('shadow lesson sets:', await p.locator('[data-id^="shadow.u-"]').count());
  await open(p,'#practice-lvtest'); console.log('lvtest rows:', await p.locator('[data-id^="lvtest."]').count());
  await open(p,'#report'); console.log('badges:', await p.textContent('.section:has(.badges) .section-head .muted'));
  await open(p,'#review'); await p.evaluate(()=>0);
  await open(p,'#home'); console.log('phrase card ok:', await p.locator('.phrase .ph-en').count());
  console.log('errors:', errs); await b.close();
})();
