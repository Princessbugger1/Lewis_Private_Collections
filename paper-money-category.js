(()=>{
'use strict';
const $=id=>document.getElementById(id);
function removePaperMoneySetting(){
  const box=$('settings');
  if(!box)return;
  [...box.querySelectorAll('.settings-row')].forEach(row=>{
    const label=row.querySelector('span');
    if(label&&label.textContent.trim()==='Paper Money details')row.remove();
  });
}
function movePaperMoneySection(){
  const section=$('paperMoneySection');
  const category=$('category');
  if(!section||!category)return;
  const form=section.closest('main')?.querySelector('section.card');
  const grid=form?.querySelector('.grid');
  if(!grid)return;
  if(section.parentElement!==grid){
    grid.insertBefore(section,grid.children[1]||null);
  }
  section.classList.add('wide');
  section.style.margin='12px 0 0';
  section.style.padding='10px';
  section.style.background='#f9fafb';
}
function hasPaperMoneyData(){
  return ['pSeries','pSerial','pStar','pSignatures','pPrinting','pErrors','pIssuer'].some(id=>String($(id)?.value||'').trim()!=='');
}
function updateVisibility(){
  const section=$('paperMoneySection');
  const category=$('category');
  if(!section||!category)return;
  const isPaper=category.value==='Paper Money';
  const existing=hasPaperMoneyData();
  section.classList.toggle('hidden-section',!isPaper&&!existing);
}
function init(){
  movePaperMoneySection();
  removePaperMoneySetting();
  updateVisibility();
  const category=$('category');
  if(category&&!category.dataset.paperMoneyBound){
    category.dataset.paperMoneyBound='1';
    category.addEventListener('change',updateVisibility);
  }
  ['pSeries','pSerial','pStar','pSignatures','pPrinting','pErrors','pIssuer'].forEach(id=>$(id)?.addEventListener('input',updateVisibility));
  const settings=$('settings');
  if(settings&&!settings.dataset.paperMoneyObserver){
    settings.dataset.paperMoneyObserver='1';
    new MutationObserver(removePaperMoneySetting).observe(settings,{childList:true,subtree:true});
  }
  setInterval(()=>{movePaperMoneySection();removePaperMoneySetting();updateVisibility()},500);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
