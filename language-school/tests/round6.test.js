const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+'';
let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  const p=await b.newPage({viewport:{width:1280,height:900}}); p.on('pageerror',e=>errs.push(String(e)));
  await open(p,'#exam-ielts-writing-4'); await p.click('[data-act="xstart"][data-mode="exam"]');
  console.log('ielts w4 bars:', await p.locator('.xchart rect').count(), '| tasks:', await p.locator('textarea[data-xw]').count());
  await p.locator('.xchart').first().screenshot({path:OUT+'w4-chart.png'});
  await open(p,'#exam-ielts-speaking-4'); await p.click('[data-act="xstart"]'); console.log('speaking 4 cue:', (await p.textContent('.cue b')).trim());
  await open(p,'#exam'); await p.click('[data-act="xset"][data-e="ielts"][data-n="4"]'); console.log('ielts tabs:', (await p.locator('[data-act="xset"][data-e="ielts"]').allTextContents()).join(' | '));
  await open(p,'#practice'); console.log('hub groups:', await p.locator('.p-group').count(), '| cards:', await p.locator('.p-group .p-card').count(), '|', (await p.locator('.p-group h2').allTextContents()).join(', '));
  // verbs
  await open(p,'#practice-verbs'); console.log('verb rows:', await p.locator('.vb-row').count());
  await p.click('[data-act="vbtab"][data-t="quiz"]');
  let right=0;
  for(let i=0;i<10;i++){
    const base=(await p.textContent('.card b[lang="en"]')).trim();
    const forms=await p.evaluate(b=>{const v=IRREG_LOOK[b]; return v},base).catch(()=>null);
    await p.fill('#vb2', i===0?'goed':'x'); await p.fill('#vb3','y'); await p.press('#vb3','Enter');
    await p.click('[data-act="vbnext"]');
  }
  console.log('verb result:', (await p.textContent('.card h2')).trim(), '| review list:', await p.locator('.sp-miss li').count());
  // correct answers via table lookup
  await p.click('[data-act="vbnew"]');
  const table={}; 
  await p.click('[data-act="vbtab"][data-t="table"]'); for(const r of await p.locator('.vb-row').all()){const t=await r.getAttribute('data-text'); const f=t.split(', '); table[f[0]]=f;}
  await p.click('[data-act="vbtab"][data-t="quiz"]');
  for(let i=0;i<10;i++){const base=(await p.textContent('.card b[lang="en"]')).trim(); const f=table[base]; await p.fill('#vb2',f[1]); await p.fill('#vb3',f[2]); await p.click('[data-act="vbcheck"]'); await p.click('[data-act="vbnext"]');}
  console.log('verb perfect:', (await p.textContent('.card h2')).trim());
  // numbers: harvest answer after wrong, check each mode generator by typing shown answer
  for(const m of ['price','time','year','phone','big','spell']){
    await open(p,'#practice-numbers'); await p.click(`[data-act="numode"][data-m="${m}"]`);
    let ok=0, sample='';
    for(let i=0;i<10;i++){
      await p.fill('#num-in','0'); await p.click('[data-act="nucheck"]');
      const fb=await p.textContent('.feedback'); const ans=(await p.textContent('.feedback span b')).trim(); if(i===0) sample=fb.replace(/\s+/g,' ').slice(0,90);
      await p.click('[data-act="nunext"]');
      if(i===9) break;
    }
    // play again, answer with harvested format test: use show value on a fresh item
    await p.click(`[data-act="numode"][data-m="${m}"]`);
    for(let i=0;i<10;i++){
      const it=await p.evaluate(()=>0);
      await p.fill('#num-in','0'); await p.click('[data-act="nucheck"]'); const ans=(await p.textContent('.feedback span b')).trim();
      // re-check normalisation: re-render input with the right answer is not possible; count formats instead
      if(!ans) console.log('empty answer',m);
      await p.click('[data-act="nunext"]');
    }
    console.log(m.padEnd(6),'sample:', sample);
  }
  console.log('num stats saved:', await p.evaluate(()=>JSON.stringify(JSON.parse(localStorage.getItem('eng-class-v1')).stats.nums)));
  // phrasebook
  await open(p,'#practice-phrasebook'); console.log('pb cards:', await p.locator('[data-id^="pb."]').count());
  await p.click('[data-id="pb.hotel"]'); console.log('pb items:', await p.locator('.pb-item').count());
  await p.click('[data-act="pbquiz"]');
  for(let i=0;i<8;i++){ const q=await p.textContent('.runner, .card >> nth=0').catch(()=>''); await p.click('[data-act="r-opt"] >> nth=0'); await p.click('[data-act="r-next"]'); }
  console.log('pb quiz:', (await p.textContent('.section:last-of-type .h2')).trim());
  // level test
  await open(p,'#practice-lvtest'); console.log('lv rows:', await p.locator('[data-id^="lvtest."]').count());
  await p.click('[data-id="lvtest.5"]'); await p.click('[data-act="lvstart"]');
  console.log('lvtest first:', (await p.textContent('.mono >> nth=0')).trim());
  // sounds and stories count
  await open(p,'#practice-sounds'); console.log('sound tabs:', await p.locator('[data-act="sgroup"]').count());
  await open(p,'#practice-reading'); console.log('stories:', await p.locator('[data-id^="story."]').count());
  await open(p,'#practice-scenes'); console.log('scenes:', await p.locator('[data-id^="scene."]').count());
  await open(p,'#report'); console.log('badges:', await p.textContent('.section:has(.badges) .section-head .muted'));
  for(const w of [360,390,820,1280]){ await p.setViewportSize({width:w,height:800});
    for(const h of ['#practice','#practice-verbs','#practice-numbers','#practice-pb.office','#practice-lvtest.1','#exam-ielts-reading-4']){
      await open(p,h); const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) console.log('OVERFLOW',w,h,sw);
    }
    if(w===390){await open(p,'#practice'); await p.screenshot({path:OUT+'hub-phone.png',fullPage:true}); await open(p,'#practice-verbs'); await p.click('[data-act="vbtab"][data-t="quiz"]'); await p.screenshot({path:OUT+'verbs-phone.png'}); await open(p,'#practice-numbers'); await p.screenshot({path:OUT+'nums-phone.png'});}
  }
  console.log('errors:', errs);
  await b.close();
})();
