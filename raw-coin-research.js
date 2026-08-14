(()=>{
'use strict';
// Isolated research UI scaffold. It does not alter catalog records or call an external service yet.
const KEY='lewis-raw-research-v1';
function initRawResearch(){
  if(document.getElementById('rawResearchNotice'))return;
  const trigger=document.getElementById('rawCoinCamera');
  if(!trigger)return;
  const box=document.createElement('div');
  box.id='rawResearchNotice';
  box.className='card';
  box.style.cssText='margin:10px 0;padding:12px;background:#f9fafb;display:none';
  box.innerHTML='<b>Raw Coin Research</b><p class="small">Photos can be researched using outside sources. Results are suggestions only and must be verified before they are added to your catalog.</p><div class="small"><b>Nothing is saved automatically.</b> Review the identification, date, mint mark, denomination, variety, composition, and other details before accepting anything.</div><div class="actions" style="margin-top:8px"><button type="button" class="secondary" id="rawResearchStart">🔎 Research photos</button><button type="button" class="secondary" id="rawResearchCancel">Cancel</button></div><div id="rawResearchStatus" class="small" style="margin-top:8px"></div>';
  trigger.parentNode.insertBefore(box,trigger.nextSibling);
  trigger.addEventListener('click',()=>{box.style.display='block';const s=document.getElementById('rawResearchStatus');if(s)s.textContent='Take or select clear obverse and reverse photos first.'},{capture:true});
  document.getElementById('rawResearchCancel').onclick=()=>box.style.display='none';
  document.getElementById('rawResearchStart').onclick=()=>{
    const s=document.getElementById('rawResearchStatus');
    if(s)s.textContent='Research handoff is prepared, but no external identification service is connected yet. Your photos remain in the catalog workflow and nothing was saved as research.';
    sessionStorage.setItem(KEY,JSON.stringify({created:new Date().toISOString(),status:'pending-external-research'}));
  };
}
const mo=new MutationObserver(initRawResearch);mo.observe(document.body,{childList:true,subtree:true});initRawResearch();
})();
