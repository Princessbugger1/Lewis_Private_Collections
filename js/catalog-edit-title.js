/* Keep the Add/Edit form heading clear: Add an Item for new records, Edit Item while editing. */
(function(){
'use strict';
function sync(){
  const title=document.getElementById('formTitle');
  const save=document.getElementById('saveBtn');
  if(!title||!save)return;
  const isEdit=/save\s+changes/i.test(save.textContent||'') || /^edit\b/i.test(title.textContent||'');
  title.textContent=isEdit?'Edit Item':'Add an Item';
  const choices=document.getElementById('ccAddItemChoices');
  const scan=document.getElementById('ccAddScanArea');
  if(choices)choices.hidden=isEdit;
  if(isEdit&&scan)scan.hidden=true;
}
function setup(){
  const save=document.getElementById('saveBtn'),title=document.getElementById('formTitle');
  if(!save||!title)return;
  new MutationObserver(sync).observe(save,{childList:true,characterData:true,subtree:true});
  new MutationObserver(sync).observe(title,{childList:true,characterData:true,subtree:true});
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-edit],button'))setTimeout(sync,0)},true);
  sync();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(setup,0));else setTimeout(setup,0);
})();
