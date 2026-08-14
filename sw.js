const CACHE='lewis-private-collections-v14';
const ASSETS=['./','./index.html','./manifest.json','./catalog-enhancements.js','./catalog-view-fix.js','./raw-coin-research.js','./raw-coin-research-adapter.js','./research-disclaimer.js','./optional-category-tabs.js','./optional-category-tabs.css','./catalog-persistence.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith((async()=>{
 const req=event.request;
 let r;
 if(req.mode==='navigate'||req.destination==='document'){
  // Always check the network for the HTML so published app changes are not
  // hidden behind an older cached document. Fall back to cache when offline.
  try { r=await fetch(req,{cache:'no-store'}); } catch(_) { r=await caches.match(req)||await caches.match('./index.html'); }
 } else {
  r=await caches.match(req)||await fetch(req);
 }
 if(req.mode==='navigate'||req.destination==='document'){
  const text=await r.clone().text();
  if(text.includes('</body>')&&!text.includes('optional-category-tabs.js')){
   const body=text.replace('</body>','<script src="./catalog-enhancements.js"></script><script src="./raw-coin-research.js"></script><script src="./raw-coin-research-adapter.js"></script><script src="./research-disclaimer.js"></script><script src="./optional-category-tabs.js"></script><script src="./catalog-persistence.js"></script><link rel="stylesheet" href="./optional-category-tabs.css"></body>');
   const headers=new Headers(r.headers);headers.delete('content-length');headers.set('content-type','text/html; charset=utf-8');
   return new Response(body,{status:r.status,statusText:r.statusText,headers});
  }
 }
 return r;
})()));
