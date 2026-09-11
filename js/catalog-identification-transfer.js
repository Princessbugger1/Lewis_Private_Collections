/* Lewis Private Collections — approved identification handoff. */
(function(){
'use strict';
const map={country:'country',type:'type',denomination:'denom',year:'year',mint:'mint',variety:'variety'};
function el(id){return document.getElementById(id)}
function setValue(id,value){const node=el(id);if(!node||value==null||String(value).trim()==='')return;node.value=String(value).trim();node.dispatchEvent(new Event('input',{bubbles:true}));node.dispatchEvent(new Event('change',{bubbles:true}))}
function ensureReferenceLink(){let input=el('referenceLink');if(input)return input;const notes=el('notes');if(!notes)return null;const label=document.createElement('label');label.className='wide cc-reference-link-field';label.innerHTML='Reference Link <span class="small">(optional research source)</span><input id="referenceLink" type="url" placeholder="Research or identification webpage">';notes.closest('label')?.insertAdjacentElement('afterend',label);return el('referenceLink')}
function showAddItem(){const add=document.querySelector('[data-cc-section="add"], [data-section="add"]');if(add){add.click();return}const title=el('formTitle');if(title)title.scrollIntoView({behavior:'smooth',block:'start'})}
function transfer(detail){if(!detail||detail.userApproved!==true||!detail.candidate)return;const c=detail.candidate;Object.entries(map).forEach(([from,to])=>setValue(to,c[from]));const ref=ensureReferenceLink();if(ref&&(detail.referenceLink||c.referenceUrl))setValue('referenceLink',detail.referenceLink||c.referenceUrl);showAddItem();const title=el('formTitle');if(title){let msg=el('ccIdentificationTransferNotice');if(!msg){msg=document.createElement('p');msg.id='ccIdentificationTransferNotice';msg.className='small cc-identification-transfer-notice';title.insertAdjacentElement('afterend',msg)}msg.textContent='Possible-match details were copied here after your approval. Review or change anything before saving the item.'}document.dispatchEvent(new CustomEvent('cc-identification-transferred',{detail:{candidate:c,referenceLink:ref?ref.value:''}}))}
document.addEventListener('cc-identification-add-requested',e=>transfer(e.detail));
function init(){ensureReferenceLink()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();