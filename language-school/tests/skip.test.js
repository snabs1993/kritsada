const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[]; const p=await b.newPage({viewport:{width:390,height:844}}); p.on('pageerror',e=>errs.push(String(e)));
  await p.addInitScript(()=>{speechSynthesis.speak=u=>{setTimeout(()=>u.onend&&u.onend(),5)}});
  await open(p,'#course');
  console.log('locked chip:', (await p.textContent('[data-act="testout"] .lstat')).trim(), '| level skip buttons:', await p.locator('.lv-skip').count());
  // lesson: jump to any step, skip to quiz
  await open(p,'#lesson-u1'); await p.click('[data-act="step"][data-s="3"]'); console.log('jumped to step:', (await p.textContent('.step.is-current')).replace(/\s+/g,' '));
  await p.click('[data-act="skip-quiz"]'); console.log('quiz shown:', (await p.textContent('.stepper .is-current')).replace(/\s+/g,' '), '| skip btn gone:', await p.locator('[data-act="skip-quiz"]').count()===0);
  // test out a locked unit (u5) with correct answers: harvest from runner by answering and reading feedback is hard; just answer and check flow
  await open(p,'#course'); await p.click('[data-act="testout"][data-id="u5"]');
  console.log('testout route:', await p.evaluate(()=>location.hash), '| banner:', (await p.textContent('.feedback b')).trim());
  // answer quiz: try each option until correct is known via feedback: simple loop pick first option / fill guess
  const answerAll=async()=>{for(let i=0;i<20;i++){ if(await p.locator('.result').count()) break;
      if(await p.locator('[data-act="r-opt"]').count()){await p.click('[data-act="r-opt"]>>nth=0')}
      else if(await p.locator('#fill-in').count()){await p.fill('#fill-in','x'); await p.press('#fill-in','Enter')}
      else if(await p.locator('[data-act="r-tile"]').count()){while(await p.locator('.pool [data-act="r-tile"]').count()) await p.click('.pool [data-act="r-tile"]>>nth=0'); await p.click('[data-act="r-order"]')}
      await p.click('[data-act="r-next"]').catch(()=>{}); }};
  await answerAll(); console.log('testout result:', (await p.textContent('.result h2').catch(()=>'?')).trim());
  // level skip: force pass by editing? use lvtest page and verify text
  await open(p,'#practice-lvtest.1'); console.log('lvtest lede:', (await p.textContent('.lede')).slice(0,60));
  // simulate a passing level test by setting stats via runner is random; instead check logic via localStorage after a real run with correct answers is not trivial -> inject: open lvtest, answer via known keys from page script
  // review "too easy"
  await p.evaluate(()=>{const s=JSON.parse(localStorage.getItem('eng-class-v1')); s.words={"hello":{b:0,due:0},"name":{b:0,due:0}}; localStorage.setItem('eng-class-v1',JSON.stringify(s))});
  await open(p,'#review'); await p.click('[data-act="rv-start"]'); await p.click('[data-act="rv-reveal"]').catch(()=>{});
  await p.click('[data-act="rv-easy"]');   // the "too easy" button now sits on the card itself (word_marks.test.js covers it in full)
  const w=await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')).words);
  console.log('easy word:', JSON.stringify(Object.entries(w).map(([k,v])=>[k,v.b,Math.round((v.due-Date.now())/864e5)])));
  await open(p,'#course'); await p.screenshot({path:OUT+'skip-course.png'});
  await open(p,'#lesson-u2'); await p.screenshot({path:OUT+'skip-lesson.png'});
  console.log('errors:', errs); await b.close();
})();
