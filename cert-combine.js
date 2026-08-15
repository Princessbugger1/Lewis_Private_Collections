(()=>{
'use strict';
const $=id=>document.getElementById(id);
const services={PCGS:'https://www.pcgs.com/cert',NGC:'https://www.ngccoin.com/CERTLOOKUP/',ANACS:'https://anacs.com/verify/',ICG:'https://www.icgcoin.com/'};
function syncLegacy(){const v=+($('certCombinedState')?.dataset.v||0),service=$('certCombinedService')?.value||'',num=$('certCombinedNumber')?.value.trim()||'',grade=$('certCombinedGrade')?.value.trim()||'',url=$('certCombinedUrl')?.value.trim()||'',issuer=$('certCombinedIssuer')?.value.trim()||'',coaNum=$('certCombinedCoaNumber')?.value.trim()||'',coaNotes=$('certCombinedCoaNotes')?.value.trim()||'';if($('certService'))$('certService').value=service;if($('certNumber'))$('certNumber').value=num;if($('certGrade'))$('certGrade').value=grade;if($('certUrl'))$('certUrl').value=url;if($('coaIssuer'))$('coaIssuer').value=issuer;if($('coaNumber'))$('coaNumber').value=coaNum;if($('coaNotes'))$('coaNotes').value=coaNotes;if($('coaState')){$('coaState').dataset.v=String(v);$('coaState').textContent=v===1?'✅':v===2?'❌':'❓';}}
function updateDetails(){const show=$('certCombinedState')?.dataset.v==='1',details=$('certCombinedDetails');if(details)details.hidden=!show}
function populateVerify(){const service=$('certCombinedService')?.value||'',manual=$('certCombinedUrl')?.value.trim()||'',url=manual||services[service]||'',a=$('certCombinedVerify');if(!a)return;if(url){a.href=url;a.hidden=false;a.textContent=service?'Open '+service+' verification':'Open verification link'}else{a.hidden=true;a.removeAttribute('href')}}
function cycle(){const b=$('certCombinedState');if(!b)return;const v=((+(b.dataset.v||0))+1)%3;b.dataset.v=String(v);b.textContent=v===1?'✅ Yes':v===2?'❌ No':'❓ Unknown / Not Checked';updateDetails();syncLegacy();applyCombinedVisibility()}
function buildLegacyBridge(){const bridge=document.createElement('div');bridge.id='legacyCertificationBridge';bridge.hidden=true;bridge.innerHTML='<div id="certSection"></div><select id="certService"><option value="">None</option><option>PCGS</option><option>NGC</option><option>ICG</option><option>ANACS</option><option>Other</option></select><input id="certNumber"><input id="certGrade"><input id="certUrl"><div id="coaSection"></div><button id="coaState" type="button">❓</button><input id="coaIssuer"><input id="coaNumber"><textarea id="coaNotes"></textarea>';document.body.appendChild(bridge)}
function hasExistingData(){const ids=['certCombinedService','certCombinedNumber','certCombinedGrade','certCombinedUrl','certCombinedIssuer','certCombinedCoaNumber','certCombinedCoaNotes'];return ids.some(id=>String($(id)?.value||'').trim()!=='')||(($('certCombinedState')?.dataset.v||'0')!=='0')}
function certificationSettingOn(){try{return JSON.parse(localStorage.getItem('lewis-settings')||'{}').certification!==false}catch(e){return true}}
function applyCombinedVisibility(){const section=$('certCombinedSection');if(!section)return;section.classList.toggle('hidden-section',!certificationSettingOn()&&!hasExistingData())}
function removePaperMoneySetting(){const remove=()=>{const btn=document.querySelector('#settings [data-setting="paperMoney"]');if(btn){const row=btn.closest('.settings-row');if(row)row.remove()}};remove();const box=$('settings');if(box&&!box.dataset.paperMoneyObserver){box.dataset.paperMoneyObserver='1';new MutationObserver(remove).observe(box,{childList:true,subtree:true})}}
function applyPaperMoneyCategory(){const section=$('paperMoneySection'),category=$('category');if(!section||!category)return;const show=category.value==='Paper Money';section.classList.toggle('hidden-section',!show)}
function movePaperMoneyFields(){const section=$('paperMoneySection'),category=$('category');if(!section||!category)return;const formGrid=category.closest('.grid');if(!formGrid)return;if(section.parentElement!==formGrid){const anchor=$('certCombinedSection')||$('certSection')||$('notes')?.closest('label')||null;if(anchor&&anchor.parentElement===formGrid)formGrid.insertBefore(section,anchor);else formGrid.appendChild(section)}section.classList.add('wide');section.style.margin='0';section.style.padding='14px';section.style.background='#fff';applyPaperMoneyCategory()}
function buildCoinFlags(){
  const category=$('category'),grade=$('grade');
  if(!category||!grade||$('coinFlags'))return;
  const flags=document.createElement('div');flags.id='coinFlags';flags.className='grid';flags.style.margin='0';
  flags.innerHTML='<label>Commemorative<button type="button" id="commemorativeState" class="state" style="width:100%">❓ Unknown / Not Checked</button></label><label>Proof<button type="button" id="proofState" class="state" style="width:100%">❓ Unknown / Not Checked</button></label>';
  const gradeLabel=grade.closest('label');
  if(gradeLabel&&gradeLabel.parentElement)gradeLabel.parentElement.insertBefore(flags,gradeLabel.nextSibling);
  const cycleFlag=id=>{const b=$(id);if(!b)return;const v=((+(b.dataset.v||0))+1)%3;b.dataset.v=String(v);b.textContent=v===1?'✅ Yes':v===2?'❌ No':'❓ Unknown / Not Checked';};
  $('commemorativeState').onclick=()=>cycleFlag('commemorativeState');
  $('proofState').onclick=()=>cycleFlag('proofState');
  const syncVisibility=()=>flags.classList.toggle('hidden-section',category.value!=='Coins');
  category.addEventListener('change',syncVisibility);
  syncVisibility();
  if(!$('coinFlags').dataset.saveHook){
    $('coinFlags').dataset.saveHook='1';
    let editIndex=-1;
    document.addEventListener('click',e=>{const b=e.target.closest('[data-edit]');if(b)editIndex=+(b.dataset.edit)},true);
    const saveBtn=$('saveBtn');
    if(saveBtn){
      saveBtn.addEventListener('click',()=>{
        const values={commemorative:+($('commemorativeState').dataset.v||0),proof:+($('proofState').dataset.v||0)};
        setTimeout(()=>{
          try{
            const key='lewis-private-collections-v8';
            const arr=JSON.parse(localStorage.getItem(key)||'[]');
            const idx=editIndex>=0?editIndex:0;
            if(arr[idx]){arr[idx].commemorative=values.commemorative;arr[idx].proof=values.proof;localStorage.setItem(key,JSON.stringify(arr));localStorage.setItem('lewis-private-collections-backup-v1',JSON.stringify(arr));}
            editIndex=-1;
          }catch(e){}
        },50);
      });
    }
  }
  const oldRecords=$('records');
  if(oldRecords&&!oldRecords.dataset.coinFlagEditHook){
    oldRecords.dataset.coinFlagEditHook='1';
    oldRecords.addEventListener('click',e=>{const b=e.target.closest('[data-edit]');if(!b)return;const i=+(b.dataset.edit||0);setTimeout(()=>{try{const arr=JSON.parse(localStorage.getItem('lewis-private-collections-v8')||'[]'),x=arr[i]||{};const set=(id,v)=>{const el=$(id);if(el){el.dataset.v=String(v||0);el.textContent=v===1?'✅ Yes':v===2?'❌ No':'❓ Unknown / Not Checked'}};set('commemorativeState',x.commemorative);set('proofState',x.proof);const cat=$('category');if(cat)cat.dispatchEvent(new Event('change'));}catch(e){}},20)},false);
  }
}
function build(){if(!$('certCombinedSection')){const cert=document.querySelector('#certSection'),coa=document.querySelector('#coaSection'),notes=$('notes');if(cert&&coa&&notes){buildLegacyBridge();cert.remove();coa.remove();const wrap=document.createElement('div');wrap.id='certCombinedSection';wrap.className='wide card';wrap.style.margin='12px 0 0';wrap.innerHTML='<h2>Certification / Certificate of Authenticity</h2><div class="grid"><label class="wide">Status<button type="button" id="certCombinedState" class="state" style="width:100%">❓ Unknown / Not Checked</button></label><div id="certCombinedDetails" class="wide"><div class="grid"><label>Certification Service<select id="certCombinedService"><option value="">None</option><option>PCGS</option><option>NGC</option><option>ICG</option><option>ANACS</option><option>Other</option></select></label><label>Certification Number<input id="certCombinedNumber"></label><label>Grade<input id="certCombinedGrade"></label><label>Certificate Issuer (if applicable)<input id="certCombinedIssuer"></label><label>Certificate Number (if applicable)<input id="certCombinedCoaNumber"></label><label class="wide">Scan / Verification Link<input id="certCombinedUrl" placeholder="https://..."><a id="certCombinedVerify" class="secondary" style="display:inline-block;margin-top:7px;padding:7px 10px;border-radius:8px;text-decoration:none;color:#111827" target="_blank" rel="noopener" hidden></a></label><label class="wide">Certificate Notes<textarea id="certCombinedCoaNotes"></textarea></label></div></div></div>';notes.parentElement.insertBefore(wrap,notes);$('certCombinedState').onclick=cycle;$('certCombinedService').onchange=()=>{populateVerify();syncLegacy();applyCombinedVisibility()};['certCombinedNumber','certCombinedGrade','certCombinedIssuer','certCombinedCoaNumber','certCombinedCoaNotes','certCombinedUrl'].forEach(id=>$(id).addEventListener('input',()=>{populateVerify();syncLegacy();applyCombinedVisibility()}));const oldSave=$('saveBtn');if(oldSave)oldSave.addEventListener('click',syncLegacy,true);const oldClear=$('clearBtn');if(oldClear)oldClear.addEventListener('click',()=>setTimeout(loadFromLegacy,0),true);loadFromLegacy();applyCombinedVisibility()}}movePaperMoneyFields();removePaperMoneySetting();if($('category')&&!$('category').dataset.paperMoneyHandler){$('category').dataset.paperMoneyHandler='1';$('category').addEventListener('change',()=>{movePaperMoneyFields();applyPaperMoneyCategory()})}buildCoinFlags()}
function loadFromLegacy(){if(!$('certCombinedState')||!$('certService'))return;const z={service:$('certService').value||'',number:$('certNumber').value||'',grade:$('certGrade').value||'',url:$('certUrl').value||''},c={issuer:$('coaIssuer').value||'',number:$('coaNumber').value||'',notes:$('coaNotes').value||'',status:+($('coaState').dataset.v||0)};$('certCombinedState').dataset.v=c.status===1?'1':c.status===2?'2':'0';$('certCombinedState').textContent=c.status===1?'✅ Yes':c.status===2?'❌ No':'❓ Unknown / Not Checked';$('certCombinedService').value=z.service;$('certCombinedNumber').value=z.number;$('certCombinedGrade').value=z.grade;$('certCombinedUrl').value=z.url;$('certCombinedIssuer').value=c.issuer;$('certCombinedCoaNumber').value=c.number;$('certCombinedCoaNotes').value=c.notes;updateDetails();populateVerify();applyCombinedVisibility();movePaperMoneyFields();removePaperMoneySetting();applyPaperMoneyCategory();buildCoinFlags()}
function start(){build();setInterval(()=>{removePaperMoneySetting();movePaperMoneyFields();applyPaperMoneyCategory();buildCoinFlags()},500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
