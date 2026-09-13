/* Lewis Private Collections — Add/Edit Acquisition & Value fields. */
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

function build(){
  if($('ccAcquisitionSection'))return;
  const purchase=$('purchase'),value=$('value'),location=$('location'),notes=$('notes');
  if(!purchase||!value||!location||!notes)return;
  const purchaseLabel=purchase.closest('label');
  const valueLabel=value.closest('label');
  const locationLabel=location.closest('label');
  const notesLabel=notes.closest('label');
  if(!purchaseLabel||!valueLabel||!locationLabel||!notesLabel)return;

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

  /* Keep ownership/value information near the end of the form, directly above Notes. */
  parent.insertBefore(section,notesLabel);

  const style=document.createElement('style');
  style.id='ccAcquisitionStyle';
  style.textContent='.cc-acquisition-section{grid-column:1/-1;border:1px solid #d1d5db;border-radius:12px;padding:12px;margin:6px 0 2px;background:rgba(255,255,255,.02)}.cc-acquisition-title{font-weight:700;font-size:13px;margin-bottom:10px}.cc-acquisition-grid{margin:0}.cc-acquisition-grid label{min-width:0;margin:0}';
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