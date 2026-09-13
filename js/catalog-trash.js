/* Lewis Private Collections — soft-delete Trash / Recycle Bin. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
const TRASH_KEY='lewis-private-collections-trash-v1';
const FALLBACK_KEY='lewis-private-collections-backup-v1';
const $=id=>document.getElementById(id);
function read(key,fallback=[]){try{const v=JSON.parse(localStorage.getItem(key)||'');return Array.isArray(v)?v:fallback}catch(_){return fallback}}
function write(key,v){localStorage.setItem(key,JSON.stringify(v))}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function stableKey(x){if(Number(x?.catalogSeq)>0)return'catalogSeq:'+Number(x.catalogSeq);for(const k of ['catalogId','inventoryId','id']){const v=String(x?.[k]??'').trim();if(v)return k+':'+v}return''}
function label(x){const a=[];for(const k of ['country','type','denom','denomination','year','mint','description','title','name']){const v=String(x?.[k]??'').trim();if(v&&!a.includes(v))a.push(v);if(a.length===3)break}return a.join(' • ')||'Catalog item'}
function saveActive(rows){write(ITEM_KEY,rows);try{write(FALLBACK_KEY,rows)}catch(_){}}
function addNav(){
  if($('ccTrashButton'))return;
  const collection=[...document.querySelectorAll('section.card h2')].find(h=>h.textContent.trim()==='Collection')?.parentElement;
  if(!collection)return;
  const b=document.createElement('button');b.type='button';b.id='ccTrashButton';b.className='secondary';b.innerHTML='🗑️ Trash <span id="ccTrashCount"></span>';
  const toolbar=collection.querySelector('.toolbar');if(toolbar)toolbar.insertAdjacentElement('beforebegin',b);else collection.prepend(b);
  b.style.marginBottom='9px';b.onclick=openTrash;updateCount();
}
function updateCount(){const n=read(TRASH_KEY).length;const c=$('ccTrashCount');if(c)c.textContent=n?'('+n+')':''}
function openTrash(){
  $('ccTrashModal')?.remove();const rows=read(TRASH_KEY);const modal=document.createElement('div');modal.id='ccTrashModal';
  modal.innerHTML='<div class="cc-trash-card" role="dialog" aria-modal="true"><div class="cc-trash-head"><div><h2>🗑️ Recycle Bin</h2><p>Deleted collection items stay here until you permanently remove them.</p></div><button type="button" class="secondary" id="ccTrashClose">Close</button></div><div id="ccTrashRows">'+(rows.length?rows.map((e,i)=>'<div class="cc-trash-row"><div><b>'+esc(label(e.item))+'</b><div class="small">Deleted '+esc(new Date(e.deletedAt||Date.now()).toLocaleString())+'</div></div><div class="cc-trash-actions"><button class="secondary" data-restore="'+i+'">Restore</button><button class="danger" data-purge="'+i+'">Delete permanently</button></div></div>').join(''):'<div class="empty">Trash is empty.</div>')+'</div></div>';
  document.body.appendChild(modal);$('ccTrashClose').onclick=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)modal.remove()};
  $('ccTrashRows').onclick=e=>{const rb=e.target.closest('[data-restore]'),pb=e.target.closest('[data-purge]');if(rb)restoreItem(Number(rb.dataset.restore));if(pb)purgeItem(Number(pb.dataset.purge))};
}
function restoreItem(i){const trash=read(TRASH_KEY),entry=trash[i];if(!entry)return;const active=read(ITEM_KEY),key=stableKey(entry.item);if(key&&active.some(x=>stableKey(x)===key)){alert('That Catalog ID is already in the active collection, so a duplicate was not restored.');return}active.push(entry.item);trash.splice(i,1);saveActive(active);write(TRASH_KEY,trash);location.reload()}
function purgeItem(i){const trash=read(TRASH_KEY),entry=trash[i];if(!entry)return;if(!confirm('Permanently delete this item from Trash? This cannot be undone from the Recycle Bin.'))return;trash.splice(i,1);write(TRASH_KEY,trash);openTrash();updateCount()}
function interceptDelete(e){
  const btn=e.target.closest?.('[data-delete]');if(!btn)return;
  const records=$('records');if(!records||!records.contains(btn))return;
  e.preventDefault();e.stopImmediatePropagation();
  const i=Number(btn.dataset.delete);const active=read(ITEM_KEY);const item=active[i];if(!item){alert('This item could not be found. Nothing was deleted.');return}
  if(!confirm('Move this item to the Recycle Bin?'))return;
  const trash=read(TRASH_KEY);trash.push({item:JSON.parse(JSON.stringify(item)),deletedAt:new Date().toISOString(),originalIndex:i});
  try{write(TRASH_KEY,trash);active.splice(i,1);saveActive(active)}catch(err){alert('The item was not deleted because the Recycle Bin could not save a safe copy.');return}
  location.reload();
}
function styles(){if($('ccTrashStyle'))return;const s=document.createElement('style');s.id='ccTrashStyle';s.textContent='#ccTrashModal{position:fixed;inset:0;z-index:100200;background:#0008;display:grid;place-items:center;padding:16px}.cc-trash-card{width:min(680px,100%);max-height:90vh;overflow:auto;background:#fff;color:#111827;border-radius:14px;padding:16px;box-shadow:0 12px 40px #0005}.cc-trash-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.cc-trash-head h2{margin:0}.cc-trash-head p{font-size:13px;color:#6b7280;margin:4px 0 12px}.cc-trash-row{border:1px solid #e5e7eb;border-radius:10px;padding:11px;margin:8px 0;display:flex;gap:10px;justify-content:space-between;align-items:center}.cc-trash-actions{display:flex;gap:7px;flex-wrap:wrap}@media(max-width:520px){.cc-trash-row{display:block}.cc-trash-actions{margin-top:9px}.cc-trash-actions button{width:100%}}';document.head.appendChild(s)}
function init(){styles();addNav();document.addEventListener('click',interceptDelete,true)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0));else setTimeout(init,0);
})();
