(()=>{
'use strict';
const KEY='lewis-optional-category-visibility-v1';
const defaults={paperMoney:true,tokens:true,counterfeits:true};
let prefs;try{prefs={...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch(e){prefs={...defaults}}
function save(){localStorage.setItem(KEY,JSON.stringify(prefs));apply()}
function categoryOptions(){return Array.from(document.querySelectorAll('#category option'))}
function apply(){
  categoryOptions().forEach(o=>{
    const v=String(o.value||o.textContent||'').toLowerCase();
    if(v==='paper money')o.hidden=!prefs.paperMoney;
    if(v==='tokens')o.hidden=!prefs.tokens;
    if(v==='counterfeits')o.hidden=!prefs.counterfeits;
  });
  ['paperMoney','tokens','counterfeits'].forEach(k=>{
    const s=document.querySelector(`[data-setting="${k}"]`);if(s)s.textContent=prefs[k]?'ON':'OFF';
  });
}
function init(){
  const settings=document.getElementById('settings');
  if(!settings||settings.dataset.optionalCategoriesReady)return;
  settings.dataset.optionalCategoriesReady='1';
  const labels={paperMoney:'Paper Money tab',tokens:'Tokens tab',counterfeits:'Counterfeits tab'};
  Object.entries(labels).forEach(([k,label])=>{
    const row=document.createElement('div');row.className='settings-row';
    row.innerHTML=`<span>${label}</span><button type="button" class="secondary switch" data-setting="${k}">${prefs[k]?'ON':'OFF'}</button>`;
    row.querySelector('button').onclick=()=>{prefs[k]=!prefs[k];save()};settings.appendChild(row);
  });
  apply();
}
const mo=new MutationObserver(()=>{init();apply()});
mo.observe(document.body,{childList:true,subtree:true});init();
})();
