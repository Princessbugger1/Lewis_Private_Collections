const CACHE='lewis-private-collections-v8';
const ASSETS=['./','./index.html','./manifest.json','./catalog-enhancements.js','./catalog-view-fix.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith((async()=>{
 const req=event.request;
 const r=await caches.match(req)||await fetch(req);
 if(req.mode==='navigate'||req.destination==='document'){
  const text=await r.clone().text();
  if(text.includes('</body>')&&!text.includes('catalog-enhancements.js')){
   const body=text.replace('</body>','<script src="./catalog-enhancements.js"></script></body>');
   const headers=new Headers(r.headers);headers.delete('content-length');headers.set('content-type','text/html; charset=utf-8');
   return new Response(body,{status:r.status,statusText:r.statusText,headers});
  }
 }
 return r;
})()));