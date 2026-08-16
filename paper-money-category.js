(()=>{
'use strict';
const $=id=>document.getElementById(id);
const paperIds=['pSeries','pSerial','pStar','pSignatures','pPrinting','pErrors','pIssuer'];
function removePaperNotesSetting(){
  const box=$('settings');
  if(!box)return;
  [...box.querySelectorAll('.settings-row')].forEach(row=>{
    const label=row.querySelector('span');
    if(label&&label.textContent.trim()==='Paper Notes details')row.remove();
  });
}
function movePaperNotesSection(){
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
function hasPaperNotesData(){
  return paperIds.some(id=>String($(id)?.value||'').trim()!=='');
}
function updateVisibility(){
  const section=$('paperMoneySection'),category=$('category');
  if(!section||!category)return;
  const isPaper=category.value==='Paper Notes';
  // Category controls new/empty Paper Notes fields. Existing Paper Notes data
  // remains visible and editable while editing an item, even if its category changes.
  section.classList.toggle('hidden-section',!isPaper&&!hasPaperNotesData());
}
function bind(){
  const category=$('category');
  if(category&&!category.dataset.paperNotesBound){
    category.dataset.paperNotesBound='1';
    category.addEventListener('change',()=>{
      movePaperNotesSection();
      updateVisibility();
    });
  }
  paperIds.forEach(id=>$(id)?.addEventListener('input',updateVisibility));
}
function init(){
  movePaperNotesSection();
  removePaperNotesSetting();
  bind();
  updateVisibility();
  const settings=$('settings');
  if(settings&&!settings.dataset.paperNotesObserver){
    settings.dataset.paperNotesObserver='1';
    new MutationObserver(removePaperNotesSetting).observe(settings,{childList:true,subtree:true});
  }
  setInterval(()=>{
    movePaperNotesSection();
    removePaperNotesSetting();
    updateVisibility();
    bind();
  },500);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
