const CACHE='lewis-private-collections-v24';
const SCRIPTS=['./header-back.js','./cert-combine.js','./paper-money-category.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(async c=>{for(const s of SCRIPTS){try{await c.add(s)}catch(_){}}}).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith((async()=>{
  const req=event.request;
  let response;
  try{response=await fetch(req,{cache:'no-store'});}catch(_){response=await caches.match(req);}
  if(!response)return new Response('Offline',{status:503});
  if(req.mode==='navigate'||req.destination==='document'){
    const text=await response.clone().text();
    if(text.includes('</body>')){
      let body=text;
      for(const s of SCRIPTS)if(!body.includes(s))body=body.replace('</body>',`<script src="${s}"></script></body>`);
      if(body!==text){
        const headers=new Headers(response.headers);headers.delete('content-length');headers.set('content-type','text/html; charset=utf-8');
        return new Response(body,{status:response.status,statusText:response.statusText,headers});
      }
    }
  }
  return response;
})()));
