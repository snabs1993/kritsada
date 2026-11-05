// Auto sync through a secret gist (GitHub API mocked in memory): a wrong key is refused with a message; two devices
// end up with the progress of both; a sentence removed on one device stays removed on the other after it syncs
// (three-way merge, not a plain union); the gist is created private and only with the learner's key.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
const GOOD='ghp_testkey123', FILE='english-class-progress.json';
const store={gists:{},n:0,bad:[]};
function gistOut(g,withContent){const f={}; Object.keys(g.files).forEach(k=>{f[k]={filename:k,truncated:false,raw_url:'https://gist.example/raw/'+g.id,content:withContent?g.files[k].content:undefined}}); return {id:g.id,description:g.description,public:g.public,files:f}}
async function api(route){
  const req=route.request(), url=new URL(req.url()), m=req.method(), auth=req.headers()['authorization']||'';
  const send=(status,body)=>route.fulfill({status,contentType:'application/json',headers:{'access-control-allow-origin':'*'},body:JSON.stringify(body)});
  if(m==='OPTIONS') return route.fulfill({status:204,headers:{'access-control-allow-origin':'*','access-control-allow-headers':'*','access-control-allow-methods':'GET,POST,PATCH'}});
  if(auth!=='Bearer '+GOOD) return send(401,{message:'Bad credentials'});
  const p=url.pathname;
  if(p==='/user') return send(200,{login:'learner'});
  if(p==='/gists'&&m==='GET') return send(200,Object.values(store.gists).map(g=>gistOut(g,false)));
  if(p==='/gists'&&m==='POST'){const b=JSON.parse(req.postData()); if(b.public!==false) store.bad.push('gist not private'); const id='g'+(++store.n); store.gists[id]={id,description:b.description,public:b.public,files:b.files}; return send(201,gistOut(store.gists[id],true))}
  const g=store.gists[p.split('/')[2]]; if(!g) return send(404,{message:'Not Found'});
  if(m==='PATCH'){const b=JSON.parse(req.postData()); Object.assign(g.files,b.files); return send(200,gistOut(g,true))}
  return send(200,gistOut(g,true));
}
const remote=()=>{const g=Object.values(store.gists)[0]; return g?JSON.parse(g.files[FILE].content):null};
async function until(fn,what,ms){const t=Date.now()+(ms||15000); while(Date.now()<t){try{if(await fn()) return true}catch(e){} await new Promise(r=>setTimeout(r,200))} throw new Error('timed out: '+what)}
(async()=>{
  const b=await chromium.launch(); const errs=[], bad=m=>errs.push(m);
  const dev=async(w,h)=>{const c=await b.newContext({viewport:{width:w,height:h}}); await c.route('https://api.github.com/**',api); const p=await c.newPage(); p.on('pageerror',e=>errs.push(String(e))); return p};
  const local=pg=>pg.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')));
  const connect=async(pg,key)=>{await open(pg,'#report'); await pg.fill('#gs-in',key); await pg.click('[data-act="gs-connect"]')};
  // device A: one saved sentence, wrong key first
  const A=await dev(390,844);
  await open(A,'#lesson-u1'); await A.locator('[data-act="step"]').nth(2).click();
  const s1=await A.locator('.dlg .sent-btn').first().getAttribute('data-en'), s2=await A.locator('.dlg .sent-btn').last().getAttribute('data-en');
  await A.locator('.dlg .sent-btn').first().click();
  await connect(A,'ghp_wrong');
  try{await A.waitForFunction(()=>/กุญแจนี้ใช้ไม่ได้/.test(document.querySelector('#app').textContent),null,{timeout:8000})}catch(e){bad('wrong key accepted')}
  if(Object.keys(store.gists).length) bad('gist made with a wrong key');
  await A.fill('#gs-in',GOOD); await A.click('[data-act="gs-connect"]');
  await until(()=>remote()&&remote().sents&&remote().sents[s1],'A pushes its sentence');
  await A.waitForSelector('[data-act="gs-off"]');
  // device B: a different sentence, connects to the same key
  const B=await dev(820,1180);
  await open(B,'#lesson-u1'); await B.locator('[data-act="step"]').nth(2).click(); await B.locator('.dlg .sent-btn').last().click();
  await connect(B,GOOD);
  await until(async()=>{const s=(await local(B)).sents||{}; return s[s1]&&s[s2]},'B gets both sentences');
  await until(()=>{const s=remote().sents||{}; return s[s1]&&s[s2]},'gist has both sentences');
  if(Object.keys(store.gists).length!==1) bad('second device made another gist: '+Object.keys(store.gists).length);
  // A opens the app again and gets B's sentence
  await open(A,'#home');
  await until(async()=>((await local(A)).sents||{})[s2],'A gets B sentence on open');
  // A removes s1; after its sync B opens and s1 must stay removed
  await open(A,'#lesson-u1'); await A.locator('[data-act="step"]').nth(2).click();
  await A.locator('.dlg .sent-btn[data-en="'+s1.replace(/"/g,'\\"')+'"]').first().click();
  await until(()=>!(remote().sents||{})[s1],'removal reaches the gist',20000);
  await open(B,'#home');
  await until(async()=>{const s=(await local(B)).sents||{}; return !s[s1]&&s[s2]},'B drops the removed sentence and keeps its own',20000);
  if(store.bad.length) bad(store.bad.join(', '));
  console.log('gists',Object.keys(store.gists).length,'| B sentences',Object.keys((await local(B)).sents||{}).length);
  console.log('errors:',errs); await b.close();
})().catch(e=>{console.log('errors: [',String(e),']'); process.exit(1)});
