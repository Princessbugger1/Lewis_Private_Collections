/* Lewis Private Collections — protected backup restore with automatic pre-restore recovery copy. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
const FALLBACK_BACKUP_KEY='lewis-private-collections-backup-v1';
const PRE_RESTORE_KEY='lewis-private-collections-pre-restore-v1';
const SETTINGS_KEY='lewis-settings';
const SEQ_KEY='lewis-private-collections-catalog-sequence-v1';

function readJson(key,fallback){
  try{const v=JSON.parse(localStorage.getItem(key)||'');return v==null?fallback:v}catch(_){return fallback}
}
function currentItems(){
  const rows=readJson(ITEM_KEY,[]);
  return Array.isArray(rows)?rows:[];
}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function safeStamp(){return new Date().toISOString().replace(/[:.]/g,'-')}
function snapshotObject(){
  return {
    version:8,
    kind:'pre-restore-recovery',
    exportedAt:new Date().toISOString(),
    items:currentItems(),
    settings:readJson(SETTINGS_KEY,{}),
    catalogSequence:localStorage.getItem(SEQ_KEY)||'',
    extraFields:readJson('lewis-private-collections-extra-fields-v1',null),
    drafts:readJson('lewis-private-collections-drafts-v1',null)
  };
}
function downloadJson(data,name){
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  const url=URL.createObjectURL(blob);
  a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function makeRecoveryCopy(){
  const snap=snapshotObject();
  let savedOnDevice=false;
  try{localStorage.setItem(PRE_RESTORE_KEY,JSON.stringify(snap));savedOnDevice=true}catch(_){}
  downloadJson(snap,'lewis-private-collections-before-restore-'+safeStamp()+'.json');
  return savedOnDevice;
}
function stableKey(x){
  if(!x||typeof x!=='object')return'';
  if(Number(x.catalogSeq)>0)return'catalogSeq:'+Number(x.catalogSeq);
  for(const k of ['catalogId','inventoryId','id']){
    const v=String(x[k]??'').trim();if(v)return k+':'+v;
  }
  return'';
}
function exactKey(x){
  try{return JSON.stringify(x,Object.keys(x||{}).sort())}catch(_){return''}
}
function mergeItems(current,incoming){
  const out=current.map(x=>x);
  const stable=new Map();
  const exact=new Set();
  out.forEach((x,i)=>{const k=stableKey(x);if(k&&!stable.has(k))stable.set(k,i);const e=exactKey(x);if(e)exact.add(e)});
  let added=0,matched=0;
  incoming.forEach(x=>{
    if(!x||typeof x!=='object'||Array.isArray(x))return;
    const k=stableKey(x);
    if(k&&stable.has(k)){matched++;return}
    const e=exactKey(x);
    if(e&&exact.has(e)){matched++;return}
    out.push(x);added++;
    if(k)stable.set(k,out.length-1);
    if(e)exact.add(e);
  });
  return {items:out,added,matched};
}
function validateBackup(raw){
  const rows=Array.isArray(raw)?raw:raw?.items;
  if(!Array.isArray(rows))throw new Error('Backup does not contain an item list.');
  if(rows.some(x=>!x||typeof x!=='object'||Array.isArray(x)))throw new Error('Backup contains an invalid item record.');
  return {raw,items:rows};
}
function applyCollection(rows,backup,restoreSettings){
  const text=JSON.stringify(rows);
  localStorage.setItem(ITEM_KEY,text);
  try{localStorage.setItem(FALLBACK_BACKUP_KEY,text)}catch(_){}
  if(restoreSettings&&backup&&backup.settings&&typeof backup.settings==='object'){
    localStorage.setItem(SETTINGS_KEY,JSON.stringify(backup.settings));
  }
  if(backup&&backup.catalogSequence!=null&&String(backup.catalogSequence).trim()){
    const current=Number(localStorage.getItem(SEQ_KEY))||0;
    const incoming=Number(backup.catalogSequence)||0;
    localStorage.setItem(SEQ_KEY,String(Math.max(current,incoming)));
  }
  location.reload();
}
function closeDialog(){document.getElementById('ccSafeRestoreModal')?.remove()}
function showRestoreChoice(parsed,fileName){
  closeDialog();
  const current=currentItems(),incoming=parsed.items;
  const merged=mergeItems(current,incoming);
  const modal=document.createElement('div');
  modal.id='ccSafeRestoreModal';
  modal.innerHTML='<div class="cc-safe-restore-card" role="dialog" aria-modal="true" aria-labelledby="ccSafeRestoreTitle"><h2 id="ccSafeRestoreTitle">Restore saved collection</h2><p><b>'+esc(fileName||'Backup file')+'</b></p><div class="cc-safe-restore-summary"><div><b>'+current.length+'</b><span>Current items</span></div><div><b>'+incoming.length+'</b><span>Backup items</span></div><div><b>'+merged.added+'</b><span>Would be added by merge</span></div></div><p class="cc-safe-note">Before either restore option runs, the app automatically downloads a recovery copy of the collection you have right now. It also keeps a device recovery copy when storage space allows.</p><div class="cc-safe-actions"><button type="button" class="primary" id="ccSafeMerge">Merge with current collection</button><button type="button" class="secondary" id="ccSafeReplace">Replace with this backup</button><button type="button" class="secondary" id="ccSafeCancel">Cancel</button></div><p class="small">Merge keeps your current version when the same stable Catalog ID exists in both places, and adds records that are only in the backup. Replace restores the backup exactly after making the safety copy.</p></div>';
  document.body.appendChild(modal);
  document.getElementById('ccSafeCancel').onclick=closeDialog;
  document.getElementById('ccSafeMerge').onclick=()=>{
    makeRecoveryCopy();
    applyCollection(merged.items,parsed.raw,false);
  };
  document.getElementById('ccSafeReplace').onclick=()=>{
    if(!confirm('Replace the current collection with this backup? A recovery copy of your current collection will be created first.'))return;
    makeRecoveryCopy();
    applyCollection(incoming,parsed.raw,true);
  };
  modal.addEventListener('click',e=>{if(e.target===modal)closeDialog()});
}
function styles(){
  if(document.getElementById('ccSafeRestoreStyle'))return;
  const s=document.createElement('style');s.id='ccSafeRestoreStyle';
  s.textContent='#ccSafeRestoreModal{position:fixed;inset:0;z-index:100100;background:#0008;display:grid;place-items:center;padding:16px}.cc-safe-restore-card{width:min(620px,100%);max-height:90vh;overflow:auto;background:#fff;color:#111827;border-radius:14px;padding:18px;box-shadow:0 12px 40px #0005}.cc-safe-restore-card h2{margin:0 0 8px}.cc-safe-restore-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:14px 0}.cc-safe-restore-summary div{background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:10px}.cc-safe-restore-summary b{display:block;font-size:20px}.cc-safe-restore-summary span{font-size:11px;color:#6b7280}.cc-safe-note{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:10px;font-size:13px}.cc-safe-actions{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}.cc-safe-actions button{flex:1;min-width:150px}@media(max-width:520px){.cc-safe-restore-summary{grid-template-columns:1fr}.cc-safe-actions{display:grid}.cc-safe-actions button{width:100%}}';
  document.head.appendChild(s);
}
function wire(){
  styles();
  const input=document.getElementById('fileInput');
  const button=document.getElementById('importBtn');
  if(!input||!button)return;
  button.textContent='Get a saved collection back';
  input.onchange=async e=>{
    const f=e.target.files?.[0];if(!f)return;
    try{
      const parsed=validateBackup(JSON.parse(await f.text()));
      showRestoreChoice(parsed,f.name);
    }catch(err){alert('That file is not a valid catalog backup. '+(err?.message||''))}
    e.target.value='';
  };
}
function init(){setTimeout(wire,0)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
