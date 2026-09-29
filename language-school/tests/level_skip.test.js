const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const fs=require('fs'); const h=fs.readFileSync(HTML,'utf8');
const a=h.indexOf('const COURSE=['), b=h.indexOf('\n];\n\nconst PLACEMENT',a);
const v=(en,th,pos,ex,exTh)=>({en,th,pos,ex,exTh}),mc=(q,o,a,w)=>({t:'mc',q,o,a,w}),fill=(q,a,w,hint)=>({t:'fill',q,a,w,hint}),ord=(a,hint,w)=>({t:'order',a,hint,w});
const COURSE=eval(h.slice(a+'const COURSE='.length,b+3));
const KEY={}; COURSE.filter(u=>u.lv===1).forEach(u=>u.practice.concat(u.quiz).forEach(it=>{KEY[(it.q||it.hint||'').trim()]=it}));
const { chromium } = require('./pw');
(async()=>{
  const br=await chromium.launch(); const p=await br.newPage({viewport:{width:1280,height:900}}); const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
  await p.goto(APP+'?n=1#practice-lvtest.1'); await p.click('[data-act="lvstart"]');
  for(let i=0;i<20;i++){
    const qt=(await p.locator('.runner .q').first().innerText().catch(()=>'')).split('\n')[0].trim();
    let it=Object.values(KEY).find(x=>x.q&&qt.startsWith(x.q.split('___')[0].trim())&&qt.includes((x.q.split('___')[1]||'').trim().slice(0,8)));
    if(!it) it=Object.values(KEY).find(x=>x.t==='order'&&qt.includes(x.hint));
    if(await p.locator('[data-act="r-opt"]').count()){const txt=it&&it.o?it.o[it.a]:null; const opts=await p.locator('[data-act="r-opt"]').allInnerTexts(); const k=Math.max(0,opts.findIndex(o=>o.trim()===txt)); await p.click(`[data-act="r-opt"]>>nth=${k}`)}
    else if(await p.locator('#fill-in').count()){await p.fill('#fill-in',it?String(it.a).split('|')[0]:'x'); await p.press('#fill-in','Enter')}
    else {const pool=(await p.locator('.pool [data-act="r-tile"]').allInnerTexts()).map(x=>x.trim().toLowerCase()).sort().join('|');
      const ok=Object.values(KEY).find(x=>x.t==='order'&&x.a.split(' ').map(w=>w.toLowerCase()).sort().join('|')===pool); const words=ok?ok.a.split(' '):[]; for(const w of words){const tiles=p.locator('.pool [data-act="r-tile"]'); const n=await tiles.count(); for(let j=0;j<n;j++){if((await tiles.nth(j).innerText()).trim().toLowerCase()===w.toLowerCase()){await tiles.nth(j).click(); break}}} await p.click('[data-act="r-order"]')}
    await p.click('[data-act="r-next"]');
  }
  console.log('result:', (await p.textContent('.result h2')).trim(), '| toast:', await p.textContent('#toast'));
  const st=await p.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')));
  console.log('A1 units done:', ['u1','u2','u3','u4'].map(k=>st.lessons[k]&&st.lessons[k].done).join(','), '| lvtest:', JSON.stringify(st.stats.lvtest));
  await p.goto(APP+'?n=2#course');
  console.log('u5 unlocked (open button):', await p.locator('[data-act="open"][data-id="u5"]').count(), '| A1 skip button gone:', (await p.locator('.lv-skip').count()));
  console.log('home next class:', (await (await (await p.goto(APP+'?n=3#home'), p)).textContent('.class-card .eyebrow')).trim());
  console.log('errors', errs); await br.close();
})();
