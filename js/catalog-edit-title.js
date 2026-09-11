/* Keep the Add/Edit form heading clear without mutation-observer feedback loops. */
(function(){
'use strict';
function sync(){
  const title=document.getElementById('formTitle');
  const save=document.getElementById('saveBtn');
  if(!title||!save)return;
  const isEdit=/save\s+changes/i.test(save.textContent||'') || /^edit\b/i.test(title.textContent||'');
  const wanted=isEdit?'Edit Item':'Add an Item';
  if(title.textContent!==wanted)title.textContent=wanted;
  const choices=document.getElementById('ccAddItemChoices');
  const scan=document.getElementById('ccAddScanArea');
  if(choices)choices.hidden=isEdit;
  if(isEdit&&scan)scan.hidden=true;
}
function setup(){
  if(!document.getElementById('saveBtn')||!document.getElementById('formTitle'))return;
  document.addEventListener('click',()=>setTimeout(sync,0),true);
  document.addEventListener('input',()=>setTimeout(sync,0),true);
  document.addEventListener('change',()=>setTimeout(sync,0),true);
  sync();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(setup,0));else setTimeout(setup,0);
})();
