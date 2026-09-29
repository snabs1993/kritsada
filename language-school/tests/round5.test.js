const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+'';
let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  const ctx=await b.newContext({viewport:{width:1280,height:900}});
  const p=await ctx.newPage(); p.on('pageerror',e=>errs.push(String(e)));
  await p.clock.install();
  await open(p,'#home');
  await p.evaluate(()=>{const L={};for(let i=1;i<=16;i++)L['u'+i]={reached:5,done:true,best:90,stars:3,doneAt:Date.now()};
    localStorage.setItem('eng-class-v1',JSON.stringify({v:1,updatedAt:1,name:'Test',xp:100,days:[],placement:{done:false,level:1,score:0},lessons:L,words:{},exams:[],mistakes:[],custom:[],stats:{},settings:{slow:false}}))});
  await open(p,'#course'); await p.waitForTimeout(200);
  console.log('brand:', await p.textContent('.brand-sub'), '| lede:', (await p.textContent('.lede')).slice(0,14), '| rows:', await p.locator('.lrow, .lesson-row, [data-act="open"]').count());
  await open(p,'#lesson-u17'); await p.waitForTimeout(200);
  console.log('u17 title:', (await p.textContent('#app h1')).trim());
  await open(p,'#practice-grammar'); console.log('grammar extras:', await p.locator('.section:has-text("หัวข้อเพิ่มเติม") .lrow').count());
  await open(p,'#practice-gram.oblig'); console.log('oblig page:', (await p.textContent('#app .h2 >> nth=0')).trim());
  await open(p,'#practice-dictation'); await p.click('[data-act="dlv"][data-lv="C1"]'); console.log('C1 dictation:', await p.textContent('.dict .mono'));
  await open(p,'#practice-reading'); console.log('C1 stories:', await p.locator('[data-id^="story.c1"]').count());
  await open(p,'#practice-story.c1b'); console.log('c1b gloss:', await p.locator('.gw').count());
  // email
  await open(p,'#practice-email'); console.log('email rows:', await p.locator('[data-id^="email."]').count(), '| tone rows:', await p.locator('tbody tr').count());
  await p.click('[data-id="email.complaint"]'); await p.fill('textarea[data-em]','Dear Sir or Madam, I am writing to complain about my stay at your hotel. Unfortunately the air conditioning did not work all night and nobody came.');
  console.log('email wc:', await p.textContent('#emwc'));
  await p.click('[data-act="emmodel"]'); console.log('model shown:', (await p.textContent('.em-model')).slice(0,40));
  await open(p,'#practice-email'); console.log('email done chip:', await p.locator('.chip.ok').count(), '| draft kept:', await (async()=>{await p.click('[data-id="email.complaint"]'); return (await p.inputValue('textarea[data-em]')).slice(0,20)})());
  // lookup
  await open(p,'#practice-lookup'); await p.fill('#dq','invoice'); await p.waitForTimeout(50);
  console.log('lookup invoice:', await p.locator('.dq-item').count(), (await p.textContent('.dq-item >> nth=0')).replace(/\s+/g,' ').slice(0,60));
  await p.click('[data-act="dqadd"] >> nth=0'); console.log('added chip:', await p.locator('.dq-item .chip.ok').count(), '| focus kept value:', await p.inputValue('#dq'));
  await p.fill('#dq','สำนวน'); await p.fill('#dq','ดีใจ'); console.log('thai search:', await p.locator('.dq-item').count());
  await p.fill('#dq','zzqx'); console.log('none:', (await p.textContent('#dq-res')).trim().slice(0,30));
  // speed game
  await open(p,'#practice-game.speed'); await p.click('[data-act="spstart"]');
  for(let i=0;i<6;i++){ await p.click('[data-act="sppick"] >> nth=0'); }
  console.log('speed mid:', (await p.textContent('.xbar')).replace(/\s+/g,' '));
  await p.clock.fastForward(61000); await p.waitForTimeout(100);
  await p.clock.runFor(500);
  console.log('speed end:', (await p.textContent('.sp-card, .card >> nth=0')).replace(/\s+/g,' ').slice(0,80));
  await open(p,'#practice-games'); console.log('games meta:', (await p.textContent('[data-id="game.speed"] .p-meta')));
  // settings
  await open(p,'#report'); 
  await p.click('[data-act="setopt"][data-k="goal"][data-v="intense"]'); await p.click('[data-act="setopt"][data-k="accent"][data-v="GB"]'); await p.click('[data-act="setopt"][data-k="rate"][data-v="fast"]');
  console.log('settings saved:', await p.evaluate(()=>JSON.stringify(JSON.parse(localStorage.getItem('eng-class-v1')).settings)));
  console.log('xp chart bars:', await p.locator('.xpc-col i').count(), '| labels:', await p.locator('.xpc-v').allTextContents(), '| head:', (await p.textContent('.section:has(.xpc) .section-head')).replace(/\s+/g,' '));
  await open(p,'#home'); console.log('home goals intense:', (await p.textContent('.goals')).replace(/\s+/g,' '));
  // backup / restore
  await open(p,'#report'); await p.click('[data-act="bkcopy"]'); await p.waitForTimeout(100);
  let code=await p.locator('#bk-out').count()?await p.inputValue('#bk-out'):await p.evaluate(()=>navigator.clipboard.readText().catch(()=>''));
  console.log('backup code:', code.slice(0,16), code.length);
  await p.evaluate(()=>{localStorage.setItem('eng-class-v1',JSON.stringify({v:1,updatedAt:1,name:'',xp:0,days:[],placement:{done:false,level:1,score:0},lessons:{},words:{},exams:[],mistakes:[],custom:[],stats:{},settings:{slow:false}}))});
  await open(p,'#report'); console.log('after wipe xp:', await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')).xp));
  await p.fill('#bk-in','garbage'); await p.click('[data-act="bkcheck"]'); console.log('bad code toast:', await p.textContent('#toast'));
  await p.fill('#bk-in',code); await p.click('[data-act="bkcheck"]'); console.log('confirm:', (await p.textContent('.pen')).trim());
  await p.click('[data-act="bkyes"]'); const st=await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')));
  console.log('restored: xp', st.xp, 'lessons', Object.keys(st.lessons).length, 'name', st.name, 'accent', st.settings.accent);
  console.log('badges:', await p.textContent('.section:has(.badges) .section-head .muted'));
  // widths
  for(const w of [360,390,820]){ await p.setViewportSize({width:w,height:800});
    for(const h of ['#practice','#practice-email.request','#practice-lookup','#practice-game.speed','#report','#practice-gram.soo']){
      await open(p,h); if(h==='#practice-lookup') await p.fill('#dq','take');
      const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) console.log('OVERFLOW',w,h,sw);
    }
    if(w===390){await open(p,'#report'); await p.locator('.section:has(.xpc)').screenshot({path:OUT+'xpchart-phone.png'}); await p.locator('.set-grid').screenshot({path:OUT+'settings-phone.png'});
      await open(p,'#practice-game.speed'); await p.click('[data-act="spstart"]'); await p.screenshot({path:OUT+'speed-phone.png'});
      await open(p,'#practice-email.meeting'); await p.screenshot({path:OUT+'email-phone.png',fullPage:true});}
  }
  console.log('errors:', errs);
  await b.close();
})();
