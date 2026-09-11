/* Lewis Private Collections — top-level section routing. */
(function(){
'use strict';
let addSection, overviewSection, collectionSection, researchSection, backupSection;
function findSections(){
  addSection=document.getElementById('formTitle')?.closest('section');
  collectionSection=document.getElementById('records')?.closest('section');
  researchSection=document.getElementById('ccResearchSection');
  backupSection=document.getElementById('backupSection');
  overviewSection=[...document.querySelectorAll('main > section')].find(s=>s.querySelector('h2')?.textContent.trim()==='Collection overview')||null;
}
function setMain(type){
  findSections();
  const all=[addSection,overviewSection,collectionSection,researchSection,backupSection].filter(Boolean);
  all.forEach(s=>s.style.display='none');
  if(type==='collection'){
    if(overviewSection)overviewSection.style.display='';
    if(collectionSection)collectionSection.style.display='';
  }else if(type==='add'){
    if(addSection)addSection.style.display='';
  }else if(type==='research'){
    if(researchSection)researchSection.style.display='';
  }else if(type==='backup'){
    if(backupSection)backupSection.style.display='';
  }
  document.getElementById('ccMobileSections')?.classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
}
function rebuildMenus(){
  const rail=document.getElementById('ccSectionRail');
  const mobile=document.getElementById('ccMobileSections');
  if(!rail||!mobile)return false;
  const oldAcq=document.getElementById('ccSectionAcquisition');
  const oldMobileAcq=document.getElementById('ccMobileAcquisition');
  const acqHandler=oldAcq?.onclick;
  const mobileAcqHandler=oldMobileAcq?.onclick;
  rail.innerHTML='<div class="cc-section-label">SECTIONS</div><button type="button" id="ccSectionCollection">Collection</button><button type="button" id="ccSectionAdd">Add an Item</button><button type="button" id="ccSectionResearch">Research</button><button type="button" id="ccSectionAcquisition">Acquisition &amp; Value</button><button type="button" id="ccSectionBackup">Backup &amp; Restore</button>';
  mobile.innerHTML='<button type="button" id="ccMobileSectionsToggle">☰ Sections</button><div class="cc-mobile-section-menu"><button type="button" id="ccMobileCollection">Collection</button><button type="button" id="ccMobileAdd">Add an Item</button><button type="button" id="ccMobileResearch">Research</button><button type="button" id="ccMobileAcquisition">Acquisition &amp; Value</button><button type="button" id="ccMobileBackup">Backup &amp; Restore</button></div>';
  document.getElementById('ccSectionCollection').onclick=()=>setMain('collection');
  document.getElementById('ccSectionAdd').onclick=()=>setMain('add');
  document.getElementById('ccSectionResearch').onclick=()=>setMain('research');
  document.getElementById('ccSectionBackup').onclick=()=>setMain('backup');
  document.getElementById('ccMobileCollection').onclick=()=>setMain('collection');
  document.getElementById('ccMobileAdd').onclick=()=>setMain('add');
  document.getElementById('ccMobileResearch').onclick=()=>setMain('research');
  document.getElementById('ccMobileBackup').onclick=()=>setMain('backup');
  document.getElementById('ccSectionAcquisition').onclick=e=>{setMain('acquisition');if(acqHandler)acqHandler.call(e.currentTarget,e)};
  document.getElementById('ccMobileAcquisition').onclick=e=>{setMain('acquisition');if(mobileAcqHandler)mobileAcqHandler.call(e.currentTarget,e);else if(acqHandler)acqHandler.call(e.currentTarget,e)};
  document.getElementById('ccMobileSectionsToggle').onclick=()=>mobile.classList.toggle('open');
  return true;
}
function init(){
  findSections();
  let tries=0;
  const timer=setInterval(()=>{if(rebuildMenus()||++tries>40){clearInterval(timer);if(tries<=40)setMain('collection')}},50);
  document.addEventListener('cc-research-ready',()=>{findSections();rebuildMenus()});
  document.addEventListener('click',e=>{
    if(e.target.closest('#ccNavHome'))setTimeout(()=>setMain('collection'),0);
    if(e.target.closest('#records [data-edit]'))setTimeout(()=>setMain('add'),0);
    if(e.target.closest('#ccOwnerClose'))setTimeout(()=>setMain('collection'),0);
  },true);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();