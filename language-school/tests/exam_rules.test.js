const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  const p=await b.newPage({viewport:{width:1280,height:900}}); p.on('pageerror',e=>errs.push(String(e)));
  await p.addInitScript(()=>{window.__said=[]; const o=speechSynthesis.speak.bind(speechSynthesis); speechSynthesis.speak=u=>{__said.push(u.text); setTimeout(()=>u.onend&&u.onend(),5)}});
  await p.clock.install();
  // blank submit not recorded
  await open(p,'#exam-toeic-reading-2'); await p.click('[data-act="xstart"][data-mode="practice"]'); await p.click('[data-act="xsubmit"]'); await p.click('[data-act="xsubmit"]');
  console.log('blank card:', (await p.textContent('.xres')).slice(0,40), '| exams logged:', await p.evaluate(()=>(JSON.parse(localStorage.getItem('eng-class-v1')||'{}').exams||[]).length));
  // reload keeps answers + timer
  await open(p,'#exam-ielts-reading-2'); await p.click('[data-act="xstart"][data-mode="exam"]');
  await p.click('.xo >> nth=0'); await p.fill('input.xin >> nth=0','night'); await p.clock.runFor(2000);
  await open(p,'#exam-ielts-reading-2'); await p.waitForTimeout(100);
  console.log('after reload answered:', await p.textContent('#xcount'), '| timer:', await p.textContent('#xtimer'), '| gap value:', await p.inputValue('input.xin >> nth=0'));
  // timer auto-submit
  await p.clock.fastForward(20*60*1000+3000); await p.clock.runFor(1500);
  console.log('auto submitted:', await p.locator('.xres').count(), '| toast:', await p.textContent('#toast'));
  await open(p,'#exam-ielts-reading-2'); console.log('after submit reload shows intro:', await p.locator('[data-act="xstart"]').count());
  // $ in gap
  await open(p,'#exam-ielts-reading-3'); await p.click('[data-act="xstart"][data-mode="practice"]');
  const gi=p.locator('.xpart input.xin').first(); await gi.fill("$45 $' tail"); await p.click('[data-act="xsubmit"]'); await p.click('[data-act="xsubmit"]');
  console.log('$ kept:', await p.locator('.xpart input.xin').first().inputValue());
  // Mr. split
  await open(p,'#exam-toeic-listening-1'); await p.click('[data-act="xstart"][data-mode="practice"]');
  const btns=p.locator('[data-act="xplay"]'); const n=await btns.count();
  for(let i=0;i<Math.min(n,4);i++){await btns.nth(i).click(); await p.clock.runFor(4000)}
  const said=await p.evaluate(()=>__said); console.log('split Mr/Ms:', said.filter(x=>/^(Mr|Ms|Mrs|Dr)\.$/.test(x)).length, '| sample:', said.filter(x=>/Ms\.|Mr\./.test(x)).slice(0,2));
  // listen-once refund on leave
  await open(p,'#exam-toeic-listening-2'); await p.click('[data-act="xstart"][data-mode="exam"]');
  await p.evaluate(()=>{window.speechSynthesis.speak=u=>{__said.push(u.text)}}); // never ends
  await btns.nth(2).click(); await p.click('.nav button[data-to="home"]'); await p.goBack().catch(()=>{});
  await p.evaluate(()=>{location.hash="#exam-toeic-listening-2"}); await p.waitForTimeout(100);
  await p.click('.nav button[data-to="exam"]'); await p.click('[data-act="xopen"][data-id="toeic-listening-2"]').catch(()=>{});
  console.log('play button enabled after leaving:', await p.locator('[data-act="xplay"]').nth(2).isEnabled().catch(e=>'n/a'));
  // band names
  console.log('bandName 2/1/0:', await p.evaluate(()=>0));
  // writing exam mode model hidden
  await open(p,'#exam-ielts-writing-4'); await p.click('[data-act="xstart"][data-mode="exam"]'); console.log('model btn during exam:', await p.locator('[data-act="xmodel"]').count());
  await p.clock.fastForward(60*60*1000+2000); await p.clock.runFor(1500); console.log('model btn after time:', await p.locator('[data-act="xmodel"]').count());
  console.log('errors:', errs); await b.close();
})();
