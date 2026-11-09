// Back up / move progress: a code made on one device restores the same progress on a fresh device after a confirm
// step; a broken code is refused with a message; cancelling keeps this device's progress.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[], bad=m=>errs.push(m);
  // device 1: some progress
  const c1=await b.newContext({viewport:{width:390,height:844}}); const p=await c1.newPage(); p.on('pageerror',e=>errs.push('d1:'+e));
  await open(p,'#lesson-u1'); await p.locator('[data-act="step"]').nth(2).click(); await p.locator('.dlg .sent-btn').first().click();
  const s1=await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')));
  await open(p,'#account'); await p.click('[data-act="bk-make"]'); await p.waitForSelector('#bk-code');
  const code=await p.inputValue('#bk-code'); if(!/^EC[01]:/.test(code)) bad('code format: '+code.slice(0,10));
  // device 2: fresh, other progress
  const c2=await b.newContext({viewport:{width:820,height:1180}}); const q=await c2.newPage(); q.on('pageerror',e=>errs.push('d2:'+e));
  await open(q,'#lesson-u1'); await q.locator('[data-act="step"]').nth(2).click(); await q.locator('.dlg .sent-btn').last().click();
  const s0=await q.evaluate(()=>localStorage.getItem('eng-class-v1')); if(!s0) bad('device 2 saved nothing');
  await open(q,'#account');
  // checking a code is async (decompression), so wait for its result instead of reading the page at once
  await q.fill('#bk-in','EC1:notreal'); await q.click('[data-act="bk-check"]');
  try{await q.waitForFunction(()=>/รหัสไม่ถูกต้อง/.test(document.querySelector('#app').textContent),null,{timeout:5000})}catch(e){bad('broken code accepted')}
  await q.fill('#bk-in',code); await q.click('[data-act="bk-check"]');
  try{await q.waitForSelector('[data-act="bk-yes"]',{timeout:5000})}catch(e){bad('no confirm step')}
  await q.click('[data-act="bk-no"]'); let s2=await q.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')));
  if(JSON.stringify(Object.keys(s2.sents||{}))!==JSON.stringify(Object.keys(JSON.parse(s0).sents||{}))) bad('cancel changed progress');
  await q.fill('#bk-in',code); await q.click('[data-act="bk-check"]'); await q.click('[data-act="bk-yes"]'); await q.waitForSelector('[data-act="bk-make"]');
  s2=await q.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')));
  if(JSON.stringify(Object.keys(s2.words).sort())!==JSON.stringify(Object.keys(s1.words).sort())) bad('words differ after restore');
  if(JSON.stringify(Object.keys(s2.sents||{}))!==JSON.stringify(Object.keys(s1.sents||{}))) bad('saved sentences differ after restore');
  if(Object.keys(JSON.parse(s0).sents||{}).some(k=>!(k in (s1.sents||{}))&&k in (s2.sents||{}))) bad('old progress kept after restore');
  console.log('code length',code.length,'| words',Object.keys(s2.words).length,'| sentences',Object.keys(s2.sents||{}).length);
  console.log('errors:',errs); await b.close();
})();
