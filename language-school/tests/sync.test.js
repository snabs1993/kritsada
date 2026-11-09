// Account and sync between devices (Firebase Auth + Firestore REST faked in memory):
// - the top bar shows a sign-in button, not a study-day counter;
// - sign-up with a short password and sign-in with a wrong password are refused with a message;
// - two devices signed in to the same account end up with the progress of both;
// - a sentence removed on one device stays removed on the other after it syncs (three-way merge, not a plain union);
// - a write that lost a race (stale updateTime) is retried, an expired sign-in is refreshed, and each device only
//   ever touches its own user's document; signing out keeps the progress on the device.
const HTML=require('path').resolve(__dirname,'../index.html'), APP=require('url').pathToFileURL(HTML).href;
const { chromium } = require('./pw');
let nav=0; const open=(pg,h)=>pg.goto(APP+'?n='+(++nav)+h);
const EMAIL='learner@example.com', PASS='secret123';
const fb={users:{},tokens:{},docs:{},n:0,t:0,bad:[],refresh:0,failNext:false,patches:0};
const H={'access-control-allow-origin':'*','access-control-allow-headers':'*','access-control-allow-methods':'GET,POST,PATCH,OPTIONS'};
const send=(route,status,body)=>route.fulfill({status,contentType:'application/json',headers:H,body:JSON.stringify(body)});
const err=(route,status,message,st)=>send(route,status,{error:{code:status,message,status:st||''}});
function issue(uid){const id='id'+(++fb.n), rt='rt'+fb.n; fb.tokens[id]=uid; fb.tokens[rt]=uid; return {idToken:id,refreshToken:rt,expiresIn:'3600',localId:uid}}
async function auth(route){
  const req=route.request(); if(req.method()==='OPTIONS') return route.fulfill({status:204,headers:H});
  const url=new URL(req.url()); if(url.searchParams.get('key')!=='test-key') return err(route,400,'API key not valid','INVALID_ARGUMENT');
  const m=url.pathname.split(':')[1], b=JSON.parse(req.postData()||'{}');
  if(m==='signUp'){
    if(fb.users[b.email]) return err(route,400,'EMAIL_EXISTS');
    if(String(b.password).length<6) return err(route,400,'WEAK_PASSWORD : Password should be at least 6 characters');
    const uid='u'+(Object.keys(fb.users).length+1); fb.users[b.email]={pw:b.password,uid}; return send(route,200,Object.assign({email:b.email},issue(uid)));
  }
  if(m==='signInWithPassword'){const u=fb.users[b.email]; if(!u||u.pw!==b.password) return err(route,400,'INVALID_LOGIN_CREDENTIALS'); return send(route,200,Object.assign({email:b.email},issue(u.uid)))}
  if(m==='sendOobCode') return send(route,200,{email:b.email});
  return err(route,404,'unknown');
}
async function token(route){
  const req=route.request(); if(req.method()==='OPTIONS') return route.fulfill({status:204,headers:H});
  const rt=new URLSearchParams(req.postData()||'').get('refresh_token'), uid=fb.tokens[rt]; if(!uid) return err(route,400,'INVALID_REFRESH_TOKEN');
  fb.refresh++; const t=issue(uid); return send(route,200,{id_token:t.idToken,refresh_token:t.refreshToken,expires_in:'3600',user_id:uid});
}
async function store(route){
  const req=route.request(); if(req.method()==='OPTIONS') return route.fulfill({status:204,headers:H});
  const url=new URL(req.url()), uid=fb.tokens[(req.headers()['authorization']||'').replace('Bearer ','')];
  const m=decodeURIComponent(url.pathname).match(/^\/v1\/projects\/test-project\/databases\/\(default\)\/documents\/progress\/([^/]+)$/);
  if(!m) {fb.bad.push('bad path '+url.pathname); return err(route,404,'bad path','NOT_FOUND')}
  if(!uid||uid!==m[1]){fb.bad.push('touched another user'); return err(route,403,'Missing or insufficient permissions.','PERMISSION_DENIED')}
  const d=fb.docs[uid];
  if(req.method()==='GET') return d?send(route,200,d):err(route,404,'Document "progress/'+uid+'" not found.','NOT_FOUND');
  if(req.method()==='PATCH'){
    fb.patches++;
    if(fb.failNext){fb.failNext=false; return err(route,400,'the stored version does not match the required base version.','FAILED_PRECONDITION')}
    const ex=url.searchParams.get('currentDocument.exists'), ut=url.searchParams.get('currentDocument.updateTime');
    if(ex==='false'&&d) return err(route,409,'Document already exists','ALREADY_EXISTS');
    if(ut&&(!d||d.updateTime!==ut)) return err(route,400,'the stored version does not match the required base version.','FAILED_PRECONDITION');
    if(!ex&&!ut) fb.bad.push('write without a precondition');
    const b=JSON.parse(req.postData()); fb.docs[uid]={name:'progress/'+uid,fields:b.fields,updateTime:new Date(Date.UTC(2026,0,1)+(++fb.t)*1000).toISOString()};
    return send(route,200,fb.docs[uid]);
  }
  return err(route,405,'method');
}
async function until(fn,what,ms){const t=Date.now()+(ms||15000); while(Date.now()<t){try{if(await fn()) return true}catch(e){} await new Promise(r=>setTimeout(r,200))} throw new Error('timed out: '+what)}
(async()=>{
  const b=await chromium.launch(); const errs=[], bad=m=>errs.push(m);
  const dev=async(w,h)=>{const c=await b.newContext({viewport:{width:w,height:h}});
    await c.addInitScript(()=>{window.EC_FIREBASE={apiKey:'test-key',projectId:'test-project'}});
    await c.route('https://identitytoolkit.googleapis.com/**',auth); await c.route('https://securetoken.googleapis.com/**',token); await c.route('https://firestore.googleapis.com/**',store);
    const p=await c.newPage(); p.on('pageerror',e=>errs.push(String(e))); return p};
  const local=pg=>pg.evaluate(()=>JSON.parse(localStorage.getItem('eng-class-v1')));
  // the remote copy, decoded by the page itself (backup-code format)
  const remote=async pg=>{const d=Object.values(fb.docs)[0]; if(!d) return null; return pg.evaluate(async c=>{const m=c.match(/^EC([01]):(.*)$/); let bytes=Uint8Array.from(atob(m[2]),x=>x.charCodeAt(0)); if(m[1]==='1') bytes=new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer()); return JSON.parse(new TextDecoder().decode(bytes))},d.fields.data.stringValue)};
  const fill=async(pg,scope,email,pw)=>{await pg.fill(scope+' [name=email]',email); await pg.fill(scope+' [name=password]',pw); await pg.click(scope+' .ac-go')};
  // device A (phone): one saved sentence, then sign up from the top-bar menu
  const A=await dev(390,844);
  await open(A,'#home');
  const top=await A.textContent('#acct'); if(!/เข้าสู่ระบบ/.test(top)||/ต่อเนื่อง|วัน/.test(top)) bad('top bar shows: '+top);
  await open(A,'#lesson-u1'); await A.locator('[data-act="step"]').nth(2).click();
  const s1=await A.locator('.dlg .sent-btn').first().getAttribute('data-en'), s2=await A.locator('.dlg .sent-btn').last().getAttribute('data-en');
  await A.locator('.dlg .sent-btn').first().click();
  await A.click('#acct'); await A.waitForSelector('#acct-menu:not([hidden]) .ac-form');
  await A.click('#acct-menu [data-act="ac-mode"][data-v="signup"]');
  await fill(A,'#acct-menu',EMAIL,'123');
  try{await A.waitForFunction(()=>/อย่างน้อย 6 ตัว/.test(document.querySelector('#acct-menu .pen')?.textContent||''),null,{timeout:6000})}catch(e){bad('short password accepted')}
  if(Object.keys(fb.users).length) bad('account made with a short password');
  if(await A.inputValue('#acct-menu [name=email]')!==EMAIL) bad('email lost after an error');
  await fill(A,'#acct-menu',EMAIL,PASS);
  await until(async()=>{const r=await remote(A); return r&&r.sents&&r.sents[s1]},'A pushes its sentence');
  await until(async()=>/learner/.test(await A.textContent('#acct')),'top bar shows the account');
  if(await A.isVisible('#acct-menu')) bad('menu still open after sign-in');
  // device B (iPad): a different sentence, wrong password first, then signs in on the account page
  const B=await dev(820,1180);
  await open(B,'#lesson-u1'); await B.locator('[data-act="step"]').nth(2).click(); await B.locator('.dlg .sent-btn').last().click();
  await open(B,'#account'); await fill(B,'#app',EMAIL,'wrongpass');
  try{await B.waitForFunction(()=>/อีเมลหรือรหัสผ่านไม่ถูกต้อง/.test(document.querySelector('#app').textContent),null,{timeout:6000})}catch(e){bad('wrong password accepted')}
  await fill(B,'#app',EMAIL,PASS);
  await until(async()=>{const s=(await local(B)).sents||{}; return s[s1]&&s[s2]},'B gets both sentences');
  await until(async()=>{const s=(await remote(B)).sents||{}; return s[s1]&&s[s2]},'remote has both sentences');
  await B.waitForSelector('[data-act="ac-out"]');
  // A opens the app again and gets B's sentence
  await open(A,'#home');
  await until(async()=>((await local(A)).sents||{})[s2],'A gets B sentence on open');
  // A removes s1 while its next write loses a race once; after its sync B opens and s1 must stay removed
  fb.failNext=true; const before=fb.patches;
  await open(A,'#lesson-u1'); await A.locator('[data-act="step"]').nth(2).click();
  await A.locator('.dlg .sent-btn[data-en="'+s1.replace(/"/g,'\\"')+'"]').first().click();
  await until(async()=>!((await remote(A)).sents||{})[s1],'removal reaches the remote copy after a retry',25000);
  if(fb.patches-before<2) bad('lost race was not retried');
  // B's sign-in has expired: it refreshes and still syncs
  await B.evaluate(()=>{const a=JSON.parse(localStorage.getItem('eng-class-acct')); a.exp=1; localStorage.setItem('eng-class-acct',JSON.stringify(a))});
  const r0=fb.refresh; await open(B,'#home');
  await until(async()=>{const s=(await local(B)).sents||{}; return !s[s1]&&s[s2]},'B drops the removed sentence and keeps its own',20000);
  if(fb.refresh===r0) bad('expired sign-in not refreshed');
  // sign out from the menu keeps the progress
  await B.click('#acct'); await B.click('#acct-menu [data-act="ac-out"]');
  await until(async()=>/เข้าสู่ระบบ/.test(await B.textContent('#acct')),'B signed out');
  if(!((await local(B)).sents||{})[s2]) bad('progress lost on sign out');
  if(await B.evaluate(()=>localStorage.getItem('eng-class-acct'))) bad('sign-in kept after sign out');
  if(fb.bad.length) bad(fb.bad.join(', '));
  console.log('docs',Object.keys(fb.docs).length,'| patches',fb.patches,'| refreshes',fb.refresh,'| B sentences',Object.keys((await local(B)).sents||{}).length);
  console.log('errors:',errs); await b.close();
})().catch(e=>{console.log('errors: [',String(e),']'); process.exit(1)});
