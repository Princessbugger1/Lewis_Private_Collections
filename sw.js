// SYNC CHECK 2026-08-19 — force current catalog and photo editor integration
const CACHE='lewis-private-collections-v27';

self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));

self.addEventListener('activate',event=>event.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));

self.addEventListener('fetch',event=>event.respondWith((async()=>{
  const req=event.request;
  try{
    const response=await fetch(req,{cache:'no-store'});
    const type=response.headers.get('content-type')||'';
    if(req.mode==='navigate' && type.includes('text/html')){
      let html=await response.text();
      if(!html.includes('coin-photo-integration.js')){
        const base=new URL('.',req.url).href;
        const crop=new URL('js/coin-photo-crop.js',base).href+'?v=1';
        const editor=new URL('js/coin-photo-editor.js',base).href+'?v=2';
        const integration=new URL('js/coin-photo-integration.js',base).href+'?v=1';
        const scripts=`<script src="${crop}"></script><script src="${editor}"></script><script src="${integration}"></script>`;
        html=html.replace(/<\/body>/i,scripts+'</body>');
      }
      const headers=new Headers(response.headers);
      headers.delete('content-length');
      headers.delete('content-encoding');
      return new Response(html,{status:response.status,statusText:response.statusText,headers});
    }
    return response;
  }catch(_){
    const cached=await caches.match(req);
    return cached||new Response('Offline',{status:503});
  }
})()));
