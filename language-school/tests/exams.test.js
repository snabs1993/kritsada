const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const URL=APP+'';
let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  const p=await b.newPage({viewport:{width:1280,height:900}}); p.on('pageerror',e=>errs.push(String(e)));
  await open(p,'#exam'); await p.waitForTimeout(300);
  console.log('tabs toeic/ielts:', await p.locator('[data-act="xset"][data-e="toeic"]').count(), await p.locator('[data-act="xset"][data-e="ielts"]').count());
  // run every objective section at full marks: submit blank, harvest answers, retry with them
  const sections=["toeic-listening-1","toeic-reading-1","toeic-listening-2","toeic-reading-2","toeic-listening-3","toeic-reading-3","ielts-listening-1","ielts-reading-1","ielts-listening-2","ielts-reading-2","ielts-listening-3","ielts-reading-3","toeic-listening-4","toeic-reading-4","ielts-listening-4","ielts-reading-4","toeic-listening-5","toeic-reading-5","ielts-listening-5","ielts-reading-5","toeic-listening-6","toeic-reading-6","ielts-listening-6","ielts-reading-6","toeic-listening-7","toeic-reading-7","ielts-listening-7","ielts-reading-7","toeic-listening-8","toeic-reading-8","ielts-listening-8","ielts-reading-8","toeic-listening-9","toeic-reading-9","ielts-listening-9","ielts-reading-9"];
  for(const id of sections){
    await open(p,'#exam-'+id); await p.waitForTimeout(150);
    await p.click('[data-act="xstart"][data-mode="practice"]');
    const total=await p.locator('.xq, .fr').count();
    await p.click('[data-act="xsubmit"]'); await p.click('[data-act="xsubmit"]'); await p.waitForTimeout(100);
    const choice=await p.$$eval('.xo.ok',bs=>bs.map(b=>[b.dataset.k,b.dataset.v]));
    const text=await p.$$eval('input.xin',ins=>ins.map(i=>{const box=i.closest('.xq,.fr'); const b=box&&box.querySelector('.xwhy b'); return [i.dataset.xk,b?b.textContent:""]}));
    await p.click('[data-act="xretry"]'); await p.click('[data-act="xstart"][data-mode="exam"]');
    for(const [k,v] of choice) await p.click(`[data-k="${k}"][data-v="${v}"]`);
    for(const [k,v] of text) await p.fill(`[data-xk="${k}"]`,v);
    await p.click('[data-act="xsubmit"]'); await p.waitForTimeout(100);
    const res=(await p.textContent('.xres .xscore')).replace(/\s+/g,' ').trim();
    console.log(id.padEnd(18), 'items', String(choice.length+text.length).padStart(2), '|', res);
  }
  // judge/select rendering in IELTS reading 1
  await open(p,'#exam-ielts-reading-1'); await p.click('[data-act="xstart"][data-mode="practice"]');
  console.log('headings box:', await p.locator('.xoptsbox').count(), '| YES buttons:', await p.locator('.xo .l:text-is("YES")').count(), '| passages:', await p.locator('.xpass').count(), '| numbering last:', await p.locator('.xnum').last().textContent());
  await p.locator('.xpart').nth(1).screenshot({path:OUT+'ex-headings.png'});
  // word limit: two words where ONE WORD ONLY
  await p.fill('[data-xk="ielts-reading-1-20"]','the melatonin hormone'); await p.click('[data-act="xsubmit"]'); await p.click('[data-act="xsubmit"]');
  console.log('3-word answer marked wrong:', await p.locator('[data-xk="ielts-reading-1-20"].no').count()===1);
  // writing sets
  for(const id of ["ielts-writing-2","ielts-writing-3"]){
    await open(p,'#exam-'+id); await p.click('[data-act="xstart"][data-mode="exam"]');
    console.log(id, 'polyline:', await p.locator('.xchart polyline').count(), 'table rows:', await p.locator('.xchart tbody tr').count(), 'textareas:', await p.locator('textarea[data-xw]').count());
    await p.fill('textarea[data-xw]>>nth=0','One two three four five.'); console.log('  wc:', await p.textContent('[id^="wc-"]>>nth=0'));
  }
  await open(p,'#exam-ielts-writing-2'); await p.click('[data-act="xstart"][data-mode="exam"]');
  console.log('draft kept per set:', await p.inputValue('textarea[data-xw]>>nth=0'));
  await p.locator('.xchart').first().screenshot({path:OUT+'ex-line.png'});
  await open(p,'#exam-ielts-speaking-3'); await p.click('[data-act="xstart"]');
  console.log('speaking 3 cue:', (await p.textContent('.cue b')).trim());
  // old link without a set number, hub after results, history labels
  await open(p,'#exam-toeic-listening'); console.log('old hash opens:', (await p.textContent('#app h1')).trim());
  await open(p,'#exam'); await p.waitForTimeout(200);
  await p.click('[data-act="xset"][data-e="toeic"][data-n="2"]'); 
  console.log('toeic set2 rows:', (await p.textContent('.x-exam >> nth=0')).match(/\d+\/495/g));
  console.log('totals:', (await p.textContent('.x-hub')).match(/\d+ \/ 990|\d\.\d (Expert|Very good|Good)/g));
  console.log('history sample:', (await p.textContent('.section table tbody tr >> nth=0')).replace(/\s+/g,' '));
  // phone width on the reading paper
  const m=await b.newPage({viewport:{width:390,height:844}}); m.on('pageerror',e=>errs.push('m:'+e));
  await open(m,'#exam-ielts-reading-1'); await m.click('[data-act="xstart"][data-mode="practice"]');
  console.log('phone overflow:', await m.evaluate(()=>document.documentElement.scrollWidth));
  await open(m,'#exam'); await m.waitForTimeout(200); await m.screenshot({path:OUT+'ex-hub-phone.png'});
  console.log('errors:', errs);
  await b.close();
})();
