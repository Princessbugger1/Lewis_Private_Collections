/* Lewis Private Collections — optional Mintage and Weight fields.
   Kept modular/reversible. OFF hides fields; it never deletes saved values. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
const SETTINGS_KEY='lewis-settings';
const EXTRA_KEY='lewis-private-collections-extra-fields-v1';
const defaults={mintage:true,weight:true};
const $=id=>document.getElementById(id);
function readSettings(){try{return {...defaults,...JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}')}}catch(e){return {...defaults}}}
function writeSettings(s){localStorage.setItem(SETTINGS_KEY,JSON.stringify(s))}
function readExtra(){try{const x=JSON.parse(localStorage.getItem(EXTRA_KEY)||'{}');return x&&typeof x==='object'?x:{}}catch(e){return {}}}
function writeExtra(x){localStorage.setItem(EXTRA_KEY,JSON.stringify(x))}
function readItems(){try{return JSON.parse(localStorage.getItem(ITEM_KEY)||'[]')}catch(e){return []}}
function itemFingerprint(item){return [item?.category,item?.country,item?.type,item?.denom,item?.year,item?.mint,item?.series,item?.variety].map(v=>String(v||'').trim().toLowerCase()).join('|')}
function makeLabel(id,title,placeholder){const label=document.createElement('label');label.id=id+'Field';label.className='cc-extra-field';label.innerHTML=title+`<input id="${id}" placeholder="${placeholder}">`;return label}
function buildFields(){const quantity=$('quantity'),composition=$('composition'),purchase=$('purchase');if(!quantity||!composition||!purchase)return;
 if(!$('mintage'))quantity.closest('label')?.insertAdjacentElement('afterend',makeLabel('mintage','Mintage','e.g. 20,000,000'));
 if(!$('weightGroup')){const wrap=document.createElement('div');wrap.id='weightGroup';wrap.className='cc-extra-field cc-weight-group';wrap.innerHTML='<span class="cc-field-title">Weight</span><div class="cc-weight-inner"><label>Actual Weight<input id="weight" inputmode="decimal" placeholder="e.g. 26.63 g"></label><label>Expected Weight<input id="expectedWeight" inputmode="decimal" placeholder="e.g. 26.73 g"></label></div>';composition.closest('label')?.insertAdjacentElement('afterend',wrap)}
 if(!$('ccExtraFieldStyle')){const st=document.createElement('style');st.id='ccExtraFieldStyle';st.textContent='.cc-extra-field{min-width:0}.cc-weight-group{border:1px solid #d1d5db;border-radius:9px;padding:7px 8px;align-self:start}.cc-field-title{display:block;font-size:12px;font-weight:650;color:#4b5563;margin-bottom:4px}.cc-weight-inner{display:grid;grid-template-columns:repeat(2,minmax(105px,1fr));gap:7px}.cc-weight-inner label{min-width:0}.cc-weight-inner input{min-width:0}@media(max-width:420px){.cc-weight-inner{grid-template-columns:1fr}}';document.head.appendChild(st)}
 applyVisibility();
}
function applyVisibility(){const s=readSettings();$('mintageField')?.classList.toggle('hidden-section',!s.mintage);$('weightGroup')?.classList.toggle('hidden-section',!s.weight)}
function addSettingsRows(){const box=$('settings');if(!box)return;[['mintage','Mintage'],['weight','Weight']].forEach(([key,label])=>{if(box.querySelector(`[data-extra-setting="${key}"]`))return;const row=document.createElement('div');row.className='settings-row';row.dataset.extraSetting=key;const on=!!readSettings()[key];row.innerHTML=`<span>${label}</span><button type="button" class="secondary switch ${on?'on':''}" data-extra-toggle="${key}" aria-pressed="${on}">${on?'ON':'OFF'}</button>`;box.appendChild(row)});box.querySelectorAll('[data-extra-toggle]').forEach(btn=>{btn.onclick=e=>{e.stopPropagation();const s=readSettings(),key=btn.dataset.extraToggle;s[key]=!s[key];writeSettings(s);btn.classList.toggle('on',s[key]);btn.textContent=s[key]?'ON':'OFF';btn.setAttribute('aria-pressed',String(!!s[key]));applyVisibility()}})}
function currentExtra(){return {mintage:$('mintage')?.value||'',weight:$('weight')?.value||'',expectedWeight:$('expectedWeight')?.value||''}}
function clearFields(){['mintage','weight','expectedWeight'].forEach(id=>{if($(id))$(id).value=''})}
function persistAfterSave(beforeItems,beforeExtra,values){setTimeout(()=>{const after=readItems();if(!after.length)return;let idx=after.length-1;if(after.length===beforeItems.length){for(let i=0;i<after.length;i++){if(JSON.stringify(after[i])!==JSON.stringify(beforeItems[i])){idx=i;break}}}const item=after[idx];if(!item)return;const fp=itemFingerprint(item),extra={...beforeExtra};extra[fp]={...values};writeExtra(extra)},20)}
function restoreForEdit(button){const card=button.closest('.record');if(!card)return;setTimeout(()=>{const items=readItems(),extra=readExtra();let idx=Number(button.dataset.edit);if(!Number.isInteger(idx)||!items[idx]){const all=[...document.querySelectorAll('#records [data-edit]')];idx=all.indexOf(button)}const item=items[idx];if(!item)return;const saved=extra[itemFingerprint(item)]||{};if($('mintage'))$('mintage').value=saved.mintage||item.mintage||'';if($('weight'))$('weight').value=saved.weight||item.weight||'';if($('expectedWeight'))$('expectedWeight').value=saved.expectedWeight||item.expectedWeight||''},0)}
function bind(){document.addEventListener('click',e=>{if(e.target.closest('#settingsToggle'))setTimeout(addSettingsRows,0);const edit=e.target.closest('#records [data-edit]');if(edit)restoreForEdit(edit);if(e.target.closest('#clearBtn'))setTimeout(clearFields,0);if(e.target.closest('#saveBtn'))persistAfterSave(readItems(),readExtra(),currentExtra())},true)}
function init(){buildFields();addSettingsRows();bind();const observer=new MutationObserver(()=>{if($('settingsPanel')?.classList.contains('open'))addSettingsRows()});const p=$('settingsPanel');if(p)observer.observe(p,{attributes:true,attributeFilter:['class']})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();