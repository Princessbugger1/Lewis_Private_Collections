/* Lewis Private Collections — permanent per-collection catalog sequence numbers.
   Adds only catalogSeq to Collection records that do not already have one. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
let editSeq=0;
function load(){try{const x=JSON.parse(localStorage.getItem(ITEM_KEY)||'[]');return Array.isArray(x)?x:[]}catch(_){return[]}}
function store(rows){localStorage.setItem(ITEM_KEY,JSON.stringify(rows));try{localStorage.setItem('lewis-private-collections-backup-v1',JSON.stringify(rows))}catch(_){}try{if(typeof items!=='undefined'&&Array.isArray(items))items.splice(0,items.length,...rows)}catch(_){}}
function prefix(){try{return window.LewisCollectionProfile?.load?.().prefix||'LPC'}catch(_){return'LPC'}}
function format(seq){const n=Math.max(0,Number(seq)||0);return prefix()+'-'+String(n).padStart(6,'0')}
function ensure(){
 const rows=load();if(!rows.length)return false;
 let max=rows.reduce((m,x)=>Math.max(m,Number(x?.catalogSeq)||0),0),changed=false;
 rows.forEach(x=>{if(!(Number(x?.catalogSeq)>0)){x.catalogSeq=++max;changed=true}});
 if(changed){store(rows);try{if(typeof render==='function')render()}catch(_){}window.dispatchEvent(new CustomEvent('cc-catalog-ids-changed'))}
 return changed
}
function nextSeq(){const rows=load();return rows.reduce((m,x)=>Math.max(m,Number(x?.catalogSeq)||0),0)+1}
function get(item){return Number(item?.catalogSeq)>0?format(item.catalogSeq):''}
function hasOwnerData(x){return ['acquiredDate','acquiredFrom','purchase','value','location'].some(k=>String(x?.[k]??'').trim())}
function ownerMatches(x,q){q=String(q||'').trim().toLowerCase();if(!q)return true;const id=get(x).toLowerCase(),digits=String(Number(x?.catalogSeq)||'');return id.includes(q)||digits===String(Number(q)||'')||Object.values(x||{}).some(v=>typeof v!=='object'&&String(v??'').toLowerCase().includes(q))}
function showOwnerIds(){
 const panel=document.getElementById('ccOwnerPanel');if(!panel)return;
 const q=document.getElementById('ccOwnerSearch')?.value||'';
 const rows=load().filter(hasOwnerData).filter(x=>ownerMatches(x,q));
 const cards=[...panel.querySelectorAll('.cc-owner-content .record')];
 cards.forEach((card,i)=>{const x=rows[i];if(!x)return;let tag=card.querySelector('.cc-owner-catalog-id');if(!tag){tag=document.createElement('div');tag.className='cc-owner-catalog-id';tag.style.cssText='font-size:12px;color:#6b7280;margin:2px 0 5px';card.querySelector('.record-title')?.insertAdjacentElement('afterend',tag)}tag.textContent='Catalog ID: '+get(x)})
}
function preserveAfterCollectionSave(){
 const btn=document.getElementById('saveBtn');if(!btn||btn.dataset.ccCatalogIdPreserve)return;btn.dataset.ccCatalogIdPreserve='1';
 btn.addEventListener('click',()=>{const seq=editSeq;setTimeout(()=>{const rows=load();if(!rows.length)return;if(seq>0&&!rows.some(x=>Number(x?.catalogSeq)===seq)){const target=rows.find(x=>!(Number(x?.catalogSeq)>0));if(target){target.catalogSeq=seq;store(rows)}}ensure();editSeq=0},25)})
 document.addEventListener('cc-collection-edit-started',e=>{const x=load()[Number(e.detail?.index)];editSeq=Number(x?.catalogSeq)||0})
}
function watchOwner(){let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;showOwnerIds()})}).observe(document.documentElement,{childList:true,subtree:true});document.addEventListener('input',e=>{if(e.target?.id==='ccOwnerSearch')setTimeout(showOwnerIds,0)})}
window.LewisCatalogIds={ensure,nextSeq,get,format};
function init(){ensure();preserveAfterCollectionSave();watchOwner();setTimeout(showOwnerIds,0);document.addEventListener('cc-open-section',e=>{if(e.detail?.type==='collection')setTimeout(ensure,0)});window.addEventListener('cc-collection-profile-changed',()=>{window.dispatchEvent(new CustomEvent('cc-catalog-id-display-changed'));setTimeout(showOwnerIds,0)})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
