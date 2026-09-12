/* Keep the Add/Edit/Draft form heading clear without mutation-observer feedback loops. */
(function(){
'use strict';
function sync(){
  const title=document.getElementById('formTitle');
  const save=document.getElementById('saveBtn');
  const draft=document.getElementById('ccSaveItemDraft');
  if(!title||!save)return;
  const isDraft=/update\s+draft/i.test(draft?.textContent||'') || /^draft\b/i.test(title.textContent||'');
  const isEdit=!isDraft&&(/save\s+changes|update\s+item/i.test(save.textContent||'') || /^edit\b/i.test(title.textContent||''));
  const wanted=isDraft?'Draft':(isEdit?'Edit Item':'Add an Item');
  if(title.textContent!==wanted)title.textContent=wanted;
  if(isEdit&&save.textContent!=='Update Item')save.textContent='Update Item';
  const choices=document.getElementById('ccAddItemChoices');
  const scan=document.getElementById('ccAddScanArea');
  if(choices)choices.hidden=isEdit||isDraft;
  if((isEdit||isDraft)&&scan)scan.hidden=true;
}
function setup(){
  if(!document.getElementById('saveBtn')||!document.getElementById('formTitle'))return;
  document.addEventListener('click',()=>setTimeout(sync,0),true);
  document.addEventListener('input',()=>setTimeout(sync,0),true);
  document.addEventListener('change',()=>setTimeout(sync,0),true);
  document.addEventListener('cc-open-section',()=>setTimeout(sync,0));
  sync();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(setup,0));else setTimeout(setup,0);
})();
