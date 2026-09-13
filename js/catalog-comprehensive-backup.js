/* Lewis Private Collections — comprehensive user backup export. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
const TRASH_KEY='lewis-private-collections-trash-v1';
const SETTINGS_KEY='lewis-settings';
const SEQ_KEY='lewis-private-collections-catalog-sequence-v1';
const EXTRA_FIELDS_KEY='lewis-private-collections-extra-fields-v1';
const DRAFT_KEY='lewis-private-collections-drafts-v1';
const RESEARCH_KEY='lewis-private-collections-saved-research-v1';
const EXCLUDED_KEYS=new Set([
  'lewis-private-collections-backup-v1',
  'lewis-private-collections-pre-restore-v1'
]);
function readJson(key,fallback){try{const raw=localStorage.getItem(key);if(raw==null)return fallback;const value=JSON.parse(raw);return value==null?fallback:value}catch(_){return fallback}}
function appStorageSnapshot(){
  const out={};
  for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    if(!key||EXCLUDED_KEYS.has(key))continue;
    if(!(key==='lewis-settings'||key.startsWith('lewis-private-collections-')))continue;
    const value=localStorage.getItem(key);
    if(value!=null)out[key]=value;
  }
  return out;
}
function backupObject(){
  const items=readJson(ITEM_KEY,[]);
  const trash=readJson(TRASH_KEY,[]);
  const drafts=readJson(DRAFT_KEY,[]);
  const savedResearch=readJson(RESEARCH_KEY,[]);
  return {
    version:8,
    backupFormatVersion:2,
    kind:'comprehensive-backup',
    exportedAt:new Date().toISOString(),
    items:Array.isArray(items)?items:[],
    trash:Array.isArray(trash)?trash:[],
    settings:readJson(SETTINGS_KEY,{}),
    catalogSequence:localStorage.getItem(SEQ_KEY)||'',
    extraFields:readJson(EXTRA_FIELDS_KEY,null),
    drafts:Array.isArray(drafts)?drafts:[],
    savedResearch:Array.isArray(savedResearch)?savedResearch:[],
    appStorage:appStorageSnapshot()
  };
}
function download(data){
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  const url=URL.createObjectURL(blob);
  a.href=url;
  a.download='lewis-private-collections-backup.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function wire(){
  const button=document.getElementById('exportBtn');
  if(!button||button.dataset.ccComprehensiveBackup==='1')return;
  button.dataset.ccComprehensiveBackup='1';
  button.addEventListener('click',function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    try{download(backupObject())}
    catch(err){console.error('Backup export failed',err);alert('The backup could not be created. Nothing in your collection was changed.')}
  },true);
}
function init(){setTimeout(wire,0)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
