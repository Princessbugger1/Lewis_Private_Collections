(()=>{
'use strict';
// Isolated research UI. No catalog field is changed automatically.
const KEY='lewis-raw-research-v2';
function initRawResearch(){
  if(document.getElementById('rawResearchNotice'))return;
  const trigger=document.getElementById('rawCoinCamera');
  if(!trigger)return;
  const box=document.createElement('div');
  box.id='rawResearchNotice';
  box.className='card';
  box.style.cssText='margin:10px 0;padding:12px;background:#f9fafb;display:none';
  box.innerHTML='<b>Raw Coin Research</b><p class="small">Research uses outside sources. Any result is a suggestion only and must be verified before it is added to your catalog.</p><div class="small"><b>Nothing is saved automatically.</b> Review identification, date, mint mark, denomination, variety, composition, and other details before accepting anything.</div><div class="actions" style="margin-top:8px"><button type="button" class="secondary" id="rawResearchStart">🔎 Research photos</button><button type="button" class="secondary" id="rawResearchCancel">Cancel</button></div><div id="rawResearchStatus" class="small" style="margin-top:8px"></div>';
  trigger.parentNode.insertBefore(box,trigger.nextSibling);
  trigger.addEventListener('click',()=>{box.style.display='block';const s=document.getElementById('rawResearchStatus');if(s)s.textContent='Take or select clear obverse and reverse photos first.'},{capture:true});
  document.getElementById('rawResearchCancel').onclick=()=>box.style.display='none';
  document.getElementById('rawResearchStart').onclick=async()=>{
    const s=document.getElementById('rawResearchStatus');
    const photos=Array.from(document.querySelectorAll('input[type="file"]')).filter(i=>i.files&&i.files.length).flatMap(i=>Array.from(i.files));
    if(!photos.length){if(s)s.textContent='No coin photos are available yet. Add the coin photos first.';return;}
    if(s)s.textContent='Preparing the photos for research…';
    try{
      const result=window.LewisRawCoinResearch&&window.LewisRawCoinResearch.research?await window.LewisRawCoinResearch.research({photos}):null;
      if(s)s.textContent=result&&result.error?result.error:'Research is not connected yet. No identification was generated or saved.';
    }catch(e){if(s)s.textContent='Research could not be started. Nothing was changed or saved.';}
    sessionStorage.setItem(KEY,JSON.stringify({created:new Date().toISOString(),status:'research-requested'}));
  };
}
const mo=new MutationObserver(initRawResearch);mo.observe(document.body,{childList:true,subtree:true});initRawResearch();
})();
