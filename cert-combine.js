(()=>{
'use strict';
const $=id=>document.getElementById(id);
const services={PCGS:'https://www.pcgs.com/cert',NGC:'https://www.ngccoin.com/CERTLOOKUP/',ANACS:'https://anacs.com/verify/',ICG:'https://www.icgcoin.com/'};
function syncLegacy(){
  const yes=$('certCombinedState')?.dataset.v==='1';
  const service=$('certCombinedService')?.value||'';
  const num=$('certCombinedNumber')?.value.trim()||'';
  const grade=$('certCombinedGrade')?.value.trim()||'';
  const url=$('certCombinedUrl')?.value.trim()||'';
  const issuer=$('certCombinedIssuer')?.value.trim()||'';
  const coaNum=$('certCombinedCoaNumber')?.value.trim()||'';
  const coaNotes=$('certCombinedCoaNotes')?.value.trim()||'';
  $('certService').value=service;
  $('certNumber').value=num;
  $('certGrade').value=grade;
  $('certUrl').value=url;
  $('coaIssuer').value=issuer;
  $('coaNumber').value=coaNum;
  $('coaNotes').value=coaNotes;
  $('coaState').dataset.v=yes?1:0;
  $('coaState').textContent=yes?'✅':'❓';
}
function updateDetails(){
  const show=$('certCombinedState')?.dataset.v==='1';
  const details=$('certCombinedDetails');
  if(details)details.hidden=!show;
}
function populateVerify(){
  const service=$('certCombinedService')?.value||'';
  const url=$('certCombinedUrl')?.value.trim()||services[service]||'';
  const a=$('certCombinedVerify');
  if(!a)return;
  if(url){a.href=url;a.hidden=false;a.textContent=service?'Open '+service+' verification':'Open verification link';}
  else {a.hidden=true;a.removeAttribute('href');}
}
function cycle(){
  const b=$('certCombinedState');
  if(!b)return;
  const v=((+(b.dataset.v||0))+1)%3;
  b.dataset.v=String(v);
  b.textContent=v===1?'✅ Yes':v===2?'❌ No':'❓ Unknown / Not Checked';
  updateDetails();syncLegacy();
}
function build(){
  const cert=$('certSection'),coa=$('coaSection'),notes=$('notes');
  if(!cert||!coa||!notes||$('certCombinedSection'))return;
  const wrap=document.createElement('div');
  wrap.id='certCombinedSection';wrap.className='wide card';wrap.style.margin='12px 0 0';
  wrap.innerHTML=`<h2>Certification / Certificate of Authenticity</h2><div class="grid">
  <label class="wide">Status<button type="button" id="certCombinedState" class="state" style="width:100%">❓ Unknown / Not Checked</button></label>
  <div id="certCombinedDetails" class="wide"><div class="grid">
  <label>Certification Service<select id="certCombinedService"><option value="">None</option><option>PCGS</option><option>NGC</option><option>ICG</option><option>ANACS</option><option>Other</option></select></label>
  <label>Certification Number<input id="certCombinedNumber"></label>
  <label>Grade<input id="certCombinedGrade"></label>
  <label>Certificate Issuer (if applicable)<input id="certCombinedIssuer"></label>
  <label>Certificate Number (if applicable)<input id="certCombinedCoaNumber"></label>
  <label class="wide">Scan / Verification Link<input id="certCombinedUrl" placeholder="https://..."><a id="certCombinedVerify" class="secondary" style="display:inline-block;margin-top:7px;padding:7px 10px;border-radius:8px;text-decoration:none;color:#111827" target="_blank" rel="noopener" hidden></a></label>
  <label class="wide">Certificate Notes<textarea id="certCombinedCoaNotes"></textarea></label>
  </div></div></div>`;
  notes.parentElement.insertBefore(wrap,notes);
  cert.classList.add('hidden-section');coa.classList.add('hidden-section');
  $('certCombinedState').onclick=cycle;
  $('certCombinedService').onchange=()=>{populateVerify();syncLegacy()};
  ['certCombinedNumber','certCombinedGrade','certCombinedIssuer','certCombinedCoaNumber','certCombinedCoaNotes','certCombinedUrl'].forEach(id=>$(id).addEventListener('input',()=>{populateVerify();syncLegacy()}));
  const oldSave=$('saveBtn');
  if(oldSave)oldSave.addEventListener('click',syncLegacy,true);
  const oldClear=$('clearBtn');
  if(oldClear)oldClear.addEventListener('click',()=>setTimeout(loadFromLegacy,0),true);
  loadFromLegacy();
}
function loadFromLegacy(){
  if(!$('certCombinedState')||!$('certService'))return;
  const z={service:$('certService').value||'',number:$('certNumber').value||'',grade:$('certGrade').value||'',url:$('certUrl').value||''};
  const c={issuer:$('coaIssuer').value||'',number:$('coaNumber').value||'',notes:$('coaNotes').value||'',status:+($('coaState').dataset.v||0)};
  $('certCombinedState').dataset.v=c.status===1?'1':c.status===2?'2':'0';
  $('certCombinedState').textContent=c.status===1?'✅ Yes':c.status===2?'❌ No':'❓ Unknown / Not Checked';
  $('certCombinedService').value=z.service;
  $('certCombinedNumber').value=z.number;
  $('certCombinedGrade').value=z.grade;
  $('certCombinedUrl').value=z.url;
  $('certCombinedIssuer').value=c.issuer;
  $('certCombinedCoaNumber').value=c.number;
  $('certCombinedCoaNotes').value=c.notes;
  updateDetails();populateVerify();
}
function start(){build();setInterval(loadFromLegacy,500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
