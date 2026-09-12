/* Lewis Private Collections — permanent per-collection catalog sequence numbers.
   Adds only catalogSeq to Collection records that do not already have one. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
function load(){try{const x=JSON.parse(localStorage.getItem(ITEM_KEY)||'[]');return Array.isArray(x)?x:[]}catch(_){return[]}}
function prefix(){try{return window.LewisCollectionProfile?.load?.().prefix||'LPC'}catch(_){return'LPC'}}
function format(seq){const n=Math.max(0,Number(seq)||0);return prefix()+'-'+String(n).padStart(6,'0')}
function ensure(){
 const rows=load();if(!rows.length)return false;
 let max=rows.reduce((m,x)=>Math.max(m,Number(x?.catalogSeq)||0),0),changed=false;
 rows.forEach(x=>{if(!(Number(x?.catalogSeq)>0)){x.catalogSeq=++max;changed=true}});
 if(changed){localStorage.setItem(ITEM_KEY,JSON.stringify(rows));try{localStorage.setItem('lewis-private-collections-backup-v1',JSON.stringify(rows))}catch(_){}try{if(typeof items!=='undefined'&&Array.isArray(items))items.splice(0,items.length,...rows)}catch(_){}try{if(typeof render==='function')render()}catch(_){}window.dispatchEvent(new CustomEvent('cc-catalog-ids-changed'))}
 return changed
}
function nextSeq(){const rows=load();return rows.reduce((m,x)=>Math.max(m,Number(x?.catalogSeq)||0),0)+1}
function get(item){return Number(item?.catalogSeq)>0?format(item.catalogSeq):''}
window.LewisCatalogIds={ensure,nextSeq,get,format};
function init(){ensure();document.addEventListener('cc-open-section',e=>{if(e.detail?.type==='collection')setTimeout(ensure,0)});window.addEventListener('cc-collection-profile-changed',()=>window.dispatchEvent(new CustomEvent('cc-catalog-id-display-changed')))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
