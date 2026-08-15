const CACHE='lewis-private-collections-v21';
const BACK='./header-back.js';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.add(BACK)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith((async()=>{
  const req=event.request;
  let response;
  try{response=await fetch(req,{cache:'no-store'});}catch(_){response=await caches.match(req);}
  if(!response)return new Response('Offline',{status:503});
  if(req.mode==='navigate'||req.destination==='document'){
    const text=await response.clone().text();
    if(text.includes('</body>')&&!text.includes('header-back.js')){
      const script='<script src="./header-back.js"></script>';
      const body=text.replace('</body>',script+'</body>');
      const headers=new Headers(response.headers);headers.delete('content-length');headers.set('content-type','text/html; charset=utf-8');
      return new Response(body,{status:response.status,statusText:response.statusText,headers});
    }
  }
  return response;
})()));
