/* Lewis Private Collections — compact recognition thumbnails for Drafts and Acquisition & Value. Read-only: reuses existing saved photos. */
(function(){
'use strict';
const DRAFT_KEY='lewis-private-collections-drafts-v1',ITEM_KEY='lewis-private-collections-v8';
function read(key){try{const x=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(x)?x:[]}catch(_){return[]}}
function firstPhoto(x){return (x?.photos||[]).find(p=>typeof p==='string'&&p.trim())||''}
function addThumb(card,src){if(!card||!src||card.querySelector('.cc-small-thumb'))return;const img=document.createElement('img');img.className='cc-small-thumb';img.src=src;img.alt='';img.setAttribute('aria-hidden','true');const title=card.querySelector('strong,.record-title');if(title)title.insertAdjacentElement('beforebegin',img)}
function drafts(){const rows=read(DRAFT_KEY);document.querySelectorAll('#ccDraftList .cc-draft-card').forEach(card=>{const d=rows.find(x=>String(x.id)===String(card.dataset.id));addThumb(card,firstPhoto(d))})}
function acquisition(){const rows=read(ITEM_KEY);document.querySelectorAll('#ccOwnerPanel .cc-owner-content .record').forEach(card=>{const seq=Number(card.dataset.catalogSeq)||0,x=seq?rows.find(r=>Number(r.catalogSeq)===seq):null;addThumb(card,firstPhoto(x))})}
function enhance(){drafts();acquisition()}
function wire(){enhance();new MutationObserver(()=>enhance()).observe(document.body,{childList:true,subtree:true});document.addEventListener('cc-drafts-changed',()=>setTimeout(enhance,0));document.addEventListener('cc-catalog-ids-changed',()=>setTimeout(enhance,0))}
const s=document.createElement('style');s.textContent='.cc-small-thumb{width:38px;height:38px;object-fit:cover;border-radius:6px;float:left;margin:0 9px 5px 0}.cc-draft-card::after,#ccOwnerPanel .cc-owner-content .record::after{content:"";display:block;clear:both}';document.head.appendChild(s);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire,{once:true});else wire();
})();