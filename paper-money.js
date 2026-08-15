(()=>{
'use strict';
const byId=id=>document.getElementById(id);
const hasPaperData=()=>['pSeries','pSerial','pStar','pSignatures','pPrinting','pErrors','pIssuer'].some(id=>String(byId(id)?.value||'').trim()!=='');
function placeSection(){
  const section=byId('paperMoneySection');
  const form=byId('formTitle')?.closest('section.card');
  if(!section||!form)return;
  const grid=form.querySelector('.grid');
  if(grid && section.parentElement!==form) grid.appendChild(section);
}
function update(){
  const section=byId('paperMoneySection'), category=byId('category');
  if(!section||!category)return;
  placeSection();
  const isPaper=category.value==='Paper Money';
  section.classList.toggle('hidden-section',!isPaper && !hasPaperData());
}
function removeSetting(){
  const box=byId('settings');
  if(!box)return;
  box.querySelectorAll('.settings-row').forEach(row=>{
    const label=row.querySelector('span')?.textContent?.trim()||'';
    if(label==='Paper Money details') row.remove();
  });
}
function start(){
  placeSection();
  const cat=byId('category');
  if(cat)cat.addEventListener('change',update);
  ['pSeries','pSerial','pStar','pSignatures','pPrinting','pErrors','pIssuer'].forEach(id=>byId(id)?.addEventListener('input',update));
  byId('pStar')?.addEventListener('change',update);
  const settings=byId('settings');
  if(settings)new MutationObserver(()=>{removeSetting();update()}).observe(settings,{childList:true,subtree:true});
  const form=byId('formTitle')?.closest('section.card');
  if(form)new MutationObserver(update).observe(form,{childList:true,subtree:true});
  removeSetting();update();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
