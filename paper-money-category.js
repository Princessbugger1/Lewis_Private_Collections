(()=>{
'use strict';
const $=id=>document.getElementById(id);
const paperIds=['pSeries','pSerial','pStar','pSignatures','pPrinting','pErrors','pIssuer'];
function removePaperMoneySetting(){
  const box=$('settings');
  if(!box)return;
  [...box.querySelectorAll('.settings-row')].forEach(row=>{
    const label=row.querySelector('span');
    if(label&&label.textContent.trim()==='Paper Money details')row.remove();
  });
}
function movePaperMoneySection(){
  const section=$('paperMoneySection'),category=$('category');
  if(!section||!category)return;
  const categoryLabel=category.closest('label');
  const grid=categoryLabel?.parentElement;
  if(!categoryLabel||!grid)return;
  if(section.parentElement!==grid || section.previousElementSibling!==categoryLabel){
    categoryLabel.after(section);
  }
  section.classList.add('wide');
  section.style.margin='0';
  section.style.padding='10px';
  section.style.background='#f9fafb';
}
function hasPaperMoneyData(){
  return paperIds.some(id=>String($(id)?.value||'').trim()!=='');
}
function updateVisibility(){
  const section=$('paperMoneySection'),category=$('category');
  if(!section||!category)return;
  const isPaper=category.value==='Paper Money';
  // Category controls new/empty Paper Money fields. Existing Paper Money data
  // remains visible and editable while editing an item, even if its category changes.
  section.classList.toggle('hidden-section',!isPaper&&!hasPaperMoneyData());
}
function bind(){
  const category=$('category');
  if(category&&!category.dataset.paperMoneyBound){
    category.dataset.paperMoneyBound='1';
    category.addEventListener('change',()=>{
      movePaperMoneySection();
      updateVisibility();
    });
  }
  paperIds.forEach(id=>$(id)?.addEventListener('input',updateVisibility));
}
function init(){
  movePaperMoneySection();
  removePaperMoneySetting();
  bind();
  updateVisibility();
  const settings=$('settings');
  if(settings&&!settings.dataset.paperMoneyObserver){
    settings.dataset.paperMoneyObserver='1';
    new MutationObserver(removePaperMoneySetting).observe(settings,{childList:true,subtree:true});
  }
  setInterval(()=>{
    movePaperMoneySection();
    removePaperMoneySetting();
    updateVisibility();
    bind();
  },500);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
