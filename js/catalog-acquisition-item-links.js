/* Lewis Private Collections — make Acquisition & Value item cards open their Collection item. */
(function(){
'use strict';
const KEY='lewis-private-collections-v8';
function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(x)?x:[]}catch(_){return[]}}
function hasOwnerData(x){return ['acquiredDate','acquiredFrom','purchase','value','location'].some(k=>String(x?.[k]??'').trim())}
function title(x){return [x.year,x.country,x.denom,x.type].filter(Boolean).join(' ')||'Untitled Item'}
function id(x){try{return window.LewisCatalogIds?.get?.(x)||''}catch(_){return''}}
function visibleRows(){const q=String(document.getElementById('ccOwnerSearch')?.value||'').trim().toLowerCase();return load().filter(hasOwnerData).filter(x=>!q||Object.values(x||{}).some(v=>typeof v!=='object'&&String(v??'').toLowerCase().includes(q)))}
function enhance(){
 const panel=document.getElementById('ccOwnerPanel');if(!panel)return;
 const cards=[...panel.querySelectorAll('.cc-owner-content .record')],rows=visibleRows();
 cards.forEach((card,i)=>{const x=rows[i];if(!x)return;const seq=Number(x.catalogSeq)||0;card.dataset.catalogSeq=String(seq);card.setAttribute('role','button');card.setAttribute('tabindex','0');card.setAttribute('aria-label','Open '+title(x));card.style.cursor='pointer';const rid=id(x);let meta=card.querySelector('.cc-owner-catalog-id');if(rid&&!meta){meta=document.createElement('div');meta.className='cc-owner-catalog-id';meta.textContent='Catalog ID: '+rid;card.querySelector('.record-title')?.insertAdjacentElement('afterend',meta)} });
}
function openCard(card){
 const seq=Number(card?.dataset.catalogSeq)||0;if(!seq)return;
 const rows=load(),index=rows.findIndex(x=>Number(x.catalogSeq)===seq);if(index<0)return;
 /* Open the exact Collection record directly. Do not depend on the Collection list's current filters/sort. */
 document.getElementById('ccOwnerPanel')?.remove();
 document.dispatchEvent(new CustomEvent('cc-open-section',{detail:{type:'collection'}}));
 let tries=0;
 const openExact=()=>{
   const current=load(),liveIndex=current.findIndex(x=>Number(x.catalogSeq)===seq);if(liveIndex<0)return;
   const cards=[...document.querySelectorAll('#records .record')];
   let target=cards.find(c=>Number(c.querySelector('[data-edit]')?.dataset.edit)===liveIndex);
   if(target?.querySelector('.cc-view-item')){target.querySelector('.cc-view-item').click();return}
   /* If filters/sort kept the record out of the rendered list, clear only the browsing filters and retry. */
   const search=document.getElementById('search'),cat=document.getElementById('categoryFilter'),comp=document.getElementById('compositionFilter');
   if(search&&search.value)search.value='';if(cat&&cat.value!=='all')cat.value='all';if(comp&&comp.value!=='all')comp.value='all';
   [search,cat,comp].forEach(el=>el?.dispatchEvent(new Event('input',{bubbles:true})));
   [cat,comp].forEach(el=>el?.dispatchEvent(new Event('change',{bubbles:true})));
   if(++tries<8)setTimeout(openExact,60);
 };
 setTimeout(openExact,30)
}
function wire(){document.addEventListener('click',e=>{const card=e.target.closest('#ccOwnerPanel .cc-owner-content .record');if(card){e.preventDefault();openCard(card)}});document.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const card=e.target.closest('#ccOwnerPanel .cc-owner-content .record');if(card){e.preventDefault();openCard(card)}});new MutationObserver(enhance).observe(document.body,{childList:true,subtree:true});window.addEventListener('cc-collection-profile-changed',()=>setTimeout(enhance,0));document.addEventListener('cc-catalog-ids-changed',()=>setTimeout(enhance,0));enhance()}
const s=document.createElement('style');s.textContent='.cc-owner-catalog-id{font-size:12px;font-weight:700;color:#4b5563;margin-top:3px}#ccOwnerPanel .cc-owner-content .record[role="button"]{cursor:pointer;touch-action:manipulation}#ccOwnerPanel .cc-owner-content .record[role="button"]:hover{background:#f9fafb}';document.head.appendChild(s);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();
})();
