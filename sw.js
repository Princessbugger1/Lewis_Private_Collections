// SYNC CHECK 2026-08-17 — force both devices to fetch the current catalog
const CACHE='lewis-private-collections-v26';

self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));

self.addEventListener('activate',event=>event.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));

self.addEventListener('fetch',event=>event.respondWith((async()=>{
  const req=event.request;
  try{
    return await fetch(req,{cache:'no-store'});
  }catch(_){
    const cached=await caches.match(req);
    return cached||new Response('Offline',{status:503});
  }
})()));
