/* Numista provider adapter. Keeps provider-specific API logic out of catalog save/transfer paths. */
(function(){
'use strict';
const ENDPOINT='https://swwzpewstthoajkhhipp.supabase.co/functions/v1/numista-proxy';
let busy=false;
function status(html){const out=document.getElementById('ccResearchIdentifyStatus');if(!out)return;out.hidden=false;out.innerHTML=html}
function clueQuery(clues){return [clues?.country,clues?.year,clues?.denomination,clues?.mint,clues?.letters].map(v=>String(v||'').trim()).filter(Boolean).join(' ')}
async function search(detail){
  if(busy)return;
  const q=clueQuery(detail?.clues||{});
  if(!q){
    status('<h4>Numista is connected</h4><p>Because the free Numista plan does not include photo search, add at least one clue such as country, year, denomination, mint mark, or visible words, then tap Find possible matches again.</p>');
    return;
  }
  busy=true;
  status('<h4>Searching Numista…</h4><p>Looking for possible matches from the clues you entered.</p>');
  try{
    const res=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'search',q,category:'coin',count:10})});
    const data=await res.json().catch(()=>({}));
    if(!res.ok)throw new Error(data.error||('Numista request failed ('+res.status+')'));
    const candidates=Array.isArray(data.candidates)?data.candidates:[];
    if(!candidates.length){
      status('<h4>No matches found</h4><p>Try fewer or different clues. The Numista connection is working, but this search returned no results.</p>');
      return;
    }
    document.dispatchEvent(new CustomEvent('cc-identification-results',{detail:{provider:'Numista',candidates}}));
  }catch(err){
    console.error('Numista provider error',err);
    status('<h4>Numista connection problem</h4><p>'+String(err?.message||err||'Unknown error').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))+'</p>');
  }finally{busy=false}
}
document.addEventListener('cc-identification-requested',e=>search(e.detail||{}));
window.LewisIdentificationProviders=Object.freeze({numista:{name:'Numista',mode:'free-text-search',search}});
})();
