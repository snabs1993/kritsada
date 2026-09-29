const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
const NATIVE=`window.__spoken=[]; window.__listened=[];
window.EnglishClassNative={platform:"android",
 speak:async(t,o)=>{__spoken.push([t,o&&o.rate]); await new Promise(r=>setTimeout(r,20))}, stopSpeak:()=>{},
 sttAvailable:async()=>true, sttPermission:async()=>true,
 listen:async({maxMs,hints,onPartial,done})=>{__listened.push(maxMs); const t=hints[0]; const words=t.split(" "); const heard=words.slice(0,Math.max(1,words.length-1)).join(" "); onPartial&&onPartial(heard); await new Promise(r=>setTimeout(r,30)); return heard},
 stopListening:async()=>{}, load:async()=>null, save:async()=>{}, bootOk:()=>{}, onBack:()=>{}, exit:()=>{},
 running:()=>({version:1,source:"builtin"}), checkUpdate:async()=>({status:"latest"}), pendingVersion:async()=>0, applyUpdate:()=>{}};`;
(async()=>{
  const b=await chromium.launch(); const errs=[];
  // web
  const p=await b.newPage({viewport:{width:390,height:844}}); p.on('pageerror',e=>errs.push('web:'+e));
  await p.addInitScript(()=>{window.__said=[]; speechSynthesis.speak=u=>{__said.push([u.text,u.rate]); setTimeout(()=>u.onend&&u.onend(),10)}});
  await p.clock.install();
  await open(p,'#practice'); console.log('hub first card:', (await p.textContent('.p-group .p-card .p-title')).trim());
  await open(p,'#practice-shadow'); console.log('lesson sets:', await p.locator('[data-id^="shadow.u-"]').count());
  for(const c of ['pod','story','pb']){await p.click(`[data-act="shcat"][data-c="${c}"]`); console.log(c, await p.locator('[data-id^="shadow."]').count())}
  await p.click('[data-act="shcat"][data-c="lesson"]'); await p.click('[data-id="shadow.u-u1"]');
  console.log('first sentence:', (await p.textContent('.sh-en')).trim());
  await p.click('.sh-set summary'); await p.click('[data-act="shopt"][data-k="speed"][data-v="slow"]'); await p.click('[data-act="shopt"][data-k="text"][data-v="after"]');
  console.log('hidden before play:', (await p.textContent('.sh-en')).trim());
  await p.click('[data-act="shplay"][data-auto="1"]');
  for(let i=0;i<40;i++){await p.clock.runFor(4000); if(await p.locator('.feedback.ok').count()) break}
  console.log('web done:', (await p.textContent('.feedback')).replace(/\s+/g,' ').slice(0,60), '| rate used:', await p.evaluate(()=>__said[0][1]), '| said:', await p.evaluate(()=>__said.length));
  console.log('stat:', await p.evaluate(()=>JSON.stringify(JSON.parse(localStorage.getItem('eng-class-v1')).stats.shadow)));
  // native with scoring
  const q=await b.newPage({viewport:{width:390,height:844}}); q.on('pageerror',e=>errs.push('native:'+e));
  await q.addInitScript(NATIVE); await q.clock.install();
  await open(q,'#practice-shadow.b-hotel'); await q.waitForTimeout(100);
  console.log('mic option shown:', await q.locator('[data-act="shopt"][data-k="mic"]').count());
  await q.click('[data-act="shplay"][data-auto="1"]');
  for(let i=0;i<40;i++){await q.clock.runFor(4000); if(await q.locator('.feedback.ok').count()) break}
  console.log('native done:', (await q.textContent('.feedback')).replace(/\s+/g,' ').slice(0,70));
  console.log('score chips:', await q.locator('.sh-list .chip').count(), '| listened:', await q.evaluate(()=>__listened.length), '| stored:', await q.evaluate(()=>JSON.stringify(JSON.parse(localStorage.getItem('eng-class-v1')).stats.shadow.sets)));
  await q.click('[data-act="shjump"][data-i="2"]'); console.log('jump score view:', (await q.locator('.sh-card .pron').textContent().catch(()=>'none')).replace(/\s+/g,' ').slice(0,80));
  // stop mid-run + navigate
  await q.click('[data-act="shplay"][data-auto="1"]'); await q.clock.runFor(500); await q.click('.nav button[data-to="home"]'); await q.clock.runFor(8000);
  console.log('no errors after leaving; route home:', await q.evaluate(()=>location.hash));
  await q.screenshot({path:OUT+'sh-native.png'});
  await open(p,'#practice-shadow.p-p5'); await p.screenshot({path:OUT+'sh-web.png',fullPage:false});
  for(const w of [360,820]){await p.setViewportSize({width:w,height:800}); for(const h of ['#practice-shadow','#practice-shadow.u-u20','#practice-shadow.s-c1a']){await open(p,h); const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) console.log('OVERFLOW',w,h,sw)}}
  console.log('errors:', errs); await b.close();
})();
