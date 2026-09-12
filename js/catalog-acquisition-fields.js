/* Lewis Private Collections — Add/Edit Acquisition & Value fields. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
const DRAFT_KEY='lewis-private-collections-drafts-v1';
const $=id=>document.getElementById(id);
function read(key){try{const x=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(x)?x:[]}catch(_){return[]}}
function write(key,x){localStorage.setItem(key,JSON.stringify(x))}
function fingerprint(item){return [item?.category,item?.country,item?.type,item?.denom,item?.year,item?.mint,item?.series,item?.variety].map(v=>String(v||'').trim().toLowerCase()).join('|')}
function makeLabel(id,title,type='text'){const l=document.createElement('label');l.textContent=title;const i=document.createElement('input');i.id=id;i.type=type;l.appendChild(i);return l}
function build(){if($('ccAcquisitionSection'))return;const purchase=$('purchase'),value=$('value'),location=$('location');if(!purchase||!value||!location)return;const first=purchase.closest('label'),v=value.closest('label'),loc=location.closest('label');if(!first||!v||!loc)return;const section=document.createElement('div');section.id='ccAcquisitionSection';section.className='cc-acquisition-section';const title=document.createElement('div');title.className='cc-acquisition-title';title.textContent='Acquisition & Value';const grid=document.createElement('div');grid.className='grid cc-acquisition-grid';grid.append(makeLabel('acquiredDate','Acquired Date','date'),makeLabel('acquiredFrom','Acquired From'),first,v,loc);section.append(title,grid);const anchor=loc.nextSibling;loc.parentNode.insertBefore(section,anchor);const style=document.createElement('style');style.id='ccAcquisitionStyle';style.textContent='.cc-acquisition-section{grid-column:1/-1;border:1px solid #d1d5db;border-radius:12px;padding:12px;margin:4px 0 8px;background:rgba(255,255,255,.02)}.cc-acquisition-title{font-weight:700;font-size:13px;margin-bottom:10px}.cc-acquisition-grid{margin:0}.cc-acquisition-grid label{min-width:0;margin:0}';document.head.appendChild(style)}
function values(){return {acquiredDate:$('acquiredDate')?.value||'',acquiredFrom:$('acquiredFrom')?.value||''}}
function clear(){if($('acquiredDate'))$('acquiredDate').value='';if($('acquiredFrom'))$('acquiredFrom').value=''}
function apply(item){if(!item)return clear();if($('acquiredDate'))$('acquiredDate').value=item.acquiredDate||'';if($('acquiredFrom'))$('acquiredFrom').value=item.acquiredFrom||''}
function changedIndex(before,after){if(after.length>before.length)return 0;for(let i=0;i<after.length;i++)if(JSON.stringify(after[i])!==JSON.stringify(before[i]))return i;return -1}
function persistCollection(before,vals){let tries=0;const tick=()=>{const after=read(ITEM_KEY),idx=changedIndex(before,after);if(idx>=0&&after[idx]){after[idx]={...after[idx],...vals};write(ITEM_KEY,after);try{localStorage.setItem('lewis-private-collections-backup-v1',JSON.stringify(after))}catch(_){}try{if(typeof items!=='undefined'&&Array.isArray(items))items.splice(0,items.length,...after)}catch(_){}try{if(typeof render==='function')render()}catch(_){}return}if(++tries<30)setTimeout(tick,25)};setTimeout(tick,0)}
function restoreCollection(button){setTimeout(()=>{const list=read(ITEM_KEY);let idx=Number(button.dataset.edit);if(!Number.isInteger(idx)||!list[idx]){const all=[...document.querySelectorAll('#records [data-edit]')];idx=all.indexOf(button)}apply(list[idx])},0)}
function restoreDraft(button){setTimeout(()=>{const id=button.dataset.id,ds=read(DRAFT_KEY),d=ds.find(x=>String(x?.id)===String(id));apply(d?.data||d)},0)}
function bind(){document.addEventListener('click',e=>{const edit=e.target.closest('#records [data-edit]');if(edit)restoreCollection(edit);const cont=e.target.closest('[data-continue]');if(cont)restoreDraft(cont);if(e.target.closest('#clearBtn'))setTimeout(clear,0);if(e.target.closest('#saveBtn'))persistCollection(read(ITEM_KEY),values())},true)}
function init(){build();bind()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();