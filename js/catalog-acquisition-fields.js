/* Lewis Private Collections — Add/Edit Acquisition & Value fields and end-of-form layout. */
(function(){
'use strict';
const $=id=>document.getElementById(id);

function makeLabel(id,title,type='text'){
  const label=document.createElement('label');
  label.textContent=title;
  const input=document.createElement('input');
  input.id=id;
  input.type=type;
  label.appendChild(input);
  return label;
}

function setLabelText(label,text){
  if(!label)return;
  const node=[...label.childNodes].find(n=>n.nodeType===Node.TEXT_NODE);
  if(node)node.nodeValue=text;
}

function arrangeCertification(){
  const certSection=$('certSection');
  const coaSection=$('coaSection');
  const notes=$('notes');
  const coaState=$('coaState');
  const certService=$('certService');
  const certNumber=$('certNumber');
  const certGrade=$('certGrade');
  const certUrl=$('certUrl');
  if(!certSection||!coaSection||!notes||!coaState||!certService||!certNumber||!certGrade||!certUrl)return null;

  const notesLabel=notes.closest('label');
  const parent=certSection.parentNode;
  if(!notesLabel||!parent)return null;

  /* The existing Certification section marks the intended position immediately
     after the three-state checks. Put the COA card there without changing data IDs. */
  coaSection.classList.add('wide');
  parent.insertBefore(coaSection,certSection);

  const coaGrid=coaSection.querySelector('.grid');
  if(!coaGrid)return null;

  /* Preserve older COA values without showing duplicate issuer/number/notes fields. */
  ['coaIssuer','coaNumber','coaNotes'].forEach(id=>{
    const el=$(id);
    const label=el&&el.closest('label');
    if(label)label.hidden=true;
  });

  let details=$('ccCoaCertificationDetails');
  if(!details){
    details=document.createElement('div');
    details.id='ccCoaCertificationDetails';
    details.className='grid wide cc-coa-cert-details';
    coaGrid.appendChild(details);
  }

  [certService,certNumber,certGrade].forEach(el=>{
    const label=el.closest('label');
    if(label)details.appendChild(label);
  });

  /* The verification URL is shown separately as the requested Reference Link. */
  const referenceLabel=certUrl.closest('label');
  if(referenceLabel){
    setLabelText(referenceLabel,'Reference Link');
    referenceLabel.classList.add('wide','cc-reference-link');
    notesLabel.insertAdjacentElement('afterend',referenceLabel);
  }

  /* Keep the old section node for compatibility with existing settings code,
     but its live fields have moved into the requested layout. */
  certSection.hidden=true;

  const updateCertificationVisibility=()=>{
    const isYes=String(coaState.dataset.v||'0')==='1';
    details.hidden=!isYes;
    details.style.display=isYes?'grid':'none';
  };
  updateCertificationVisibility();
  coaState.addEventListener('click',()=>setTimeout(updateCertificationVisibility,0));
  new MutationObserver(updateCertificationVisibility).observe(coaState,{attributes:true,attributeFilter:['data-v'],childList:true,subtree:true});

  return {notesLabel,referenceLabel};
}

function build(){
  if($('ccAcquisitionSection'))return;
  const purchase=$('purchase'),value=$('value'),location=$('location'),notes=$('notes');
  if(!purchase||!value||!location||!notes)return;
  const purchaseLabel=purchase.closest('label');
  const valueLabel=value.closest('label');
  const locationLabel=location.closest('label');
  const notesLabel=notes.closest('label');
  if(!purchaseLabel||!valueLabel||!locationLabel||!notesLabel)return;

  const arranged=arrangeCertification();
  const parent=notesLabel.parentNode;

  const section=document.createElement('div');
  section.id='ccAcquisitionSection';
  section.className='cc-acquisition-section';

  const title=document.createElement('div');
  title.className='cc-acquisition-title';
  title.textContent='Acquisition & Value';

  const grid=document.createElement('div');
  grid.className='grid cc-acquisition-grid';
  grid.append(
    makeLabel('acquiredDate','Acquired Date','date'),
    makeLabel('acquiredFrom','Acquired From'),
    purchaseLabel,
    valueLabel,
    locationLabel
  );
  section.append(title,grid);

  /* Requested order: COA → Notes → Reference Link → Acquisition & Value. */
  const referenceLabel=arranged&&arranged.referenceLabel;
  if(referenceLabel&&referenceLabel.parentNode===parent){
    referenceLabel.insertAdjacentElement('afterend',section);
  }else{
    notesLabel.insertAdjacentElement('afterend',section);
  }

  const style=document.createElement('style');
  style.id='ccAcquisitionStyle';
  style.textContent='.cc-acquisition-section{grid-column:1/-1;border:1px solid #d1d5db;border-radius:12px;padding:12px;margin:6px 0 2px;background:rgba(255,255,255,.02)}.cc-acquisition-title{font-weight:700;font-size:13px;margin-bottom:10px}.cc-acquisition-grid{margin:0}.cc-acquisition-grid label{min-width:0;margin:0}.cc-coa-cert-details{grid-column:1/-1;margin-top:2px}.cc-reference-link{grid-column:1/-1}';
  document.head.appendChild(style);

  /* Use the catalog's original save/reset/edit path for these fields. */
  try{
    if(typeof fields!=='undefined'&&Array.isArray(fields)){
      if(!fields.includes('acquiredDate'))fields.push('acquiredDate');
      if(!fields.includes('acquiredFrom'))fields.push('acquiredFrom');
    }
  }catch(_){ }
}

function init(){build()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();