(()=>{
'use strict';
const KEY='lewis-optional-category-visibility-v1';
const defaults={paperMoney:true,tokens:true,counterfeits:true};
let prefs;try{prefs={...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch(e){prefs={...defaults}}
const labels={paperMoney:'Paper Money',tokens:'Tokens',counterfeits:'Counterfeits'};
function save(){localStorage.setItem(KEY,JSON.stringify(prefs));apply()}
function categoryOptions(){return Array.from(document.querySelectorAll('#category option'))}
function ensureOptions(){const sel=document.getElementById('category');if(!sel)return;Object.entries({Tokens:'tokens',Counterfeits:'counterfeits'}).forEach(([label])=>{if(!Array.from(sel.options).some(o=>String(o.textContent).trim()===label)){const o=document.createElement('option');o.textContent=label;o.value=label;sel.appendChild(o)}})}
function apply(){ensureOptions();categoryOptions().forEach(o=>{const key=String(o.value||o.textContent||'').trim().toLowerCase().replace(/\s+/g,'');if(key==='papermoney')o.hidden=!prefs.paperMoney;if(key==='tokens')o.hidden=!prefs.tokens;if(key==='counterfeits')o.hidden=!prefs.counterfeits});Object.keys(labels).forEach(k=>{const s=document.querySelector(`[data-optional-setting="${k}"]`);if(s)s.textContent=prefs[k]?'ON':'OFF'})}
function init(){const settings=document.getElementById('settings');if(!settings||settings.dataset.optionalCategoriesReady)return;settings.dataset.optionalCategoriesReady='1';Object.entries(labels).forEach(([k,label])=>{const row=document.createElement('div');row.className='settings-row';row.innerHTML=`<span>${label} tab</span><button type="button" class="secondary switch" data-optional-setting="${k}">${prefs[k]?'ON':'OFF'}</button>`;row.querySelector('button').onclick=()=>{prefs[k]=!prefs[k];save()};settings.appendChild(row)});apply()}
const mo=new MutationObserver(()=>{init();apply()});mo.observe(document.body,{childList:true,subtree:true});init();apply();
})();
