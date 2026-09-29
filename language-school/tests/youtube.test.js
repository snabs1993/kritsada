const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href, OUT=require('path').join(__dirname,'out/'); require('fs').mkdirSync(OUT,{recursive:true});
const { chromium } = require('./pw');
const fs=require('fs'); const NATIVE=fs.readFileSync(require('path').join(__dirname,'shadow.test.js'),'utf8').match(/const NATIVE=`([\s\S]*?)`;/)[1];
const FAKEYT=`window.__yt={seeks:[],pauses:0,plays:0,rate:1};
window.YT={Player:function(el,opts){const self=this; let t=0,playing=false,last=Date.now(); const node=document.getElementById(el); if(node){node.textContent="[fake player "+opts.videoId+"]"}
  const tick=()=>{const n=Date.now(); if(playing) t+=(n-last)/1000*__yt.rate; last=n};
  this.getCurrentTime=()=>{tick(); return t}; this.getDuration=()=>30; this.getPlayerState=()=>{tick(); if(t>=30){playing=false;return 0} return playing?1:2};
  this.seekTo=(s)=>{tick(); t=s; __yt.seeks.push(Math.round(s*10)/10)}; this.playVideo=()=>{tick(); playing=true; __yt.plays++}; this.pauseVideo=()=>{tick(); playing=false; __yt.pauses++};
  this.setPlaybackRate=r=>{__yt.rate=r}; this.getVideoData=()=>({title:"Fake Talk About Sleep"}); this.destroy=()=>{};
  setTimeout(()=>opts.events.onReady&&opts.events.onReady(),30);}};`;
const URL=APP+''; let nav=0; const open=(pg,h)=>pg.goto(URL+'?n='+(++nav)+h);
(async()=>{
  const b=await chromium.launch(); const errs=[];
  const p=await b.newPage({viewport:{width:390,height:844}}); p.on('pageerror',e=>errs.push('web:'+e));
  await open(p,'#home'); console.log('nav labels:', (await p.locator('.nav button').allInnerTexts()).map(s=>s.trim()).join(' | '));
  await p.click('.nav button[data-to="shadow"]'); console.log('shadow tab:', location=await p.evaluate(()=>location.hash), '| current:', await p.getAttribute('.nav button[data-to="shadow"]','aria-current'), '| practice current:', await p.getAttribute('.nav button[data-to="practice"]','aria-current'));
  console.log('h1:', (await p.textContent('#app h1')).trim(), '| yt card:', await p.locator('.yt-entry').count());
  await p.click('.yt-entry'); console.log('web yt:', (await p.textContent('.card b')).trim());
  await p.click('.nav button[data-to="practice"]'); console.log('practice current now:', await p.getAttribute('.nav button[data-to="practice"]','aria-current'));
  for(const w of [360,390,820,1101,1280]){await p.setViewportSize({width:w,height:800}); await open(p,'#practice-shadow'); const r=await p.evaluate(()=>{const n=document.querySelector('.nav'); const bs=[...n.querySelectorAll('button')].filter(x=>x.offsetParent); return {sw:document.documentElement.scrollWidth, over:bs.some(x=>x.scrollWidth>x.clientWidth+1), navw:Math.round(n.getBoundingClientRect().width), n:bs.length}}); console.log(w, JSON.stringify(r)); if(w===360) await p.locator('.nav').screenshot({path:OUT+'nav360.png'}); if(w===1280) await p.locator('.topbar').screenshot({path:OUT+'nav1280b.png'});}
  // native with fake YouTube
  const q=await b.newPage({viewport:{width:390,height:844}}); q.on('pageerror',e=>errs.push('native:'+e));
  await q.addInitScript(NATIVE); await q.addInitScript(FAKEYT); await q.clock.install();
  await open(q,'#practice-yt'); await q.fill('#yt-url','https://youtu.be/abcDEF12345?si=xyz'); await q.click('.yt-add button[type="submit"]'); await q.clock.runFor(300);
  console.log('route:', await q.evaluate(()=>location.hash), '| title:', await q.textContent('#yt-title'), '| player:', await q.textContent('#yt-player').catch(()=>'-'));
  await q.click('[data-act="ytopt"][data-k="chunk"][data-v="3"]');
  await q.click('#yt-go'); 
  for(let i=0;i<12;i++){await q.clock.runFor(1000);}
  console.log('status:', await q.textContent('#yt-status'), '| heard:', await q.textContent('#yt-heard'), '| yt:', JSON.stringify(await q.evaluate(()=>__yt)));
  const same=await q.evaluate(()=>document.querySelector('#yt-player')===document.querySelector('#yt-slot #yt-player'));
  await q.click('[data-act="ytmark"]'); await q.clock.runFor(200); console.log('marks:', await q.textContent('#yt-mcount'), '| player kept after actions:', same && await q.locator('#yt-player').count());
  await q.click('#yt-go'); console.log('stopped:', await q.textContent('#yt-status'));
  await q.click('.nav button[data-to="home"]'); await q.clock.runFor(1000); await open(q,'#practice-yt'); console.log('my clips:', (await q.textContent('.yt-row')).replace(/\s+/g,' '));
  await q.fill('#yt-url','not a link'); await q.click('.yt-add button[type="submit"]'); console.log('bad link toast:', await q.textContent('#toast'));
  console.log('nav in app (no AI tab):', (await q.locator('.nav button').allInnerTexts()).filter(Boolean).length);
  await q.screenshot({path:OUT+'yt-native.png'});
  console.log('errors:', errs); await b.close();
})();
