const CACHE='lewis-private-collections-v18';
const ASSETS=['./','./index.html','./manifest.json','./catalog-enhancements.js','./catalog-view-fix.js','./raw-coin-research.js','./raw-coin-research-adapter.js','./research-disclaimer.js','./optional-category-tabs.js','./optional-category-tabs.css','./catalog-persistence.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith((async()=>{
 const req=event.request;
 if(req.mode==='navigate'||req.destination==='document'){
  try{return await fetch(req,{cache:'no-store'});}catch(_){return await caches.match(req)||await caches.match('./index.html');}
 }
 return await caches.match(req)||await fetch(req);
})()));
