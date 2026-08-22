/* Lewis Private Collections — item status controls belong in Add/Edit only. */
(function(){
'use strict';
const KEY='lewis-private-collections-v8';
const statusKeys=['OGP','Original box','Sigma tested','Photos complete','Variety'];
const labels={'OGP':'Original Packaging / OGP','Original box':'Original Box','Sigma tested':'Sigma Tested','Photos complete':'Photos Complete','Variety':'Variety Checked'};
const settingKeys={'OGP':'ogp','Original box':'originalBox','Sigma tested':'sigma','Photos complete':'photosComplete','Variety':'variety'};
const stateIcon=v=>v===1?'✅ Yes':v===2?'❌ No':'❓ Unknown';
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(_){return[]}}
function currentItem(){try{return editing>=0?load()[editing]:null}catch(_){return null}}
function currentSettings(){try{return {...(typeof settings==='object'?settings:{}),...JSON.parse(localStorage.getItem('lewis-settings')||'{}')}}catch(_){return typeof settings==='object'?settings:{}}}
function section(){let s=document.getElementById('ccEditStatuses');if(s)return s;const photos=document.getElementById('photosSection');if(!photos)return null;s=document.createElement('div');s.id='ccEditStatuses';s.className='card';s.style.cssText='margin:12px 0 0;padding:10px;background:#f9fafb';s.innerHTML='<b style="font-size:13px">Item Status</b><p class="small" style="margin:4px 0 0">Change these only while adding or editing this item.</p><div class="checks" id="ccEditStatusButtons"></div>';photos.parentNode.insertBefore(s,photos);return s}
function render(){const s=section();if(!s)return;const box=document.getElementById('ccEditStatusButtons');const item=currentItem();const st=currentSettings();box.innerHTML='';statusKeys.forEach(k=>{if(st[settingKeys[k]]===false)return;const v=Number(item?.checks?.[k]||0);const wrap=document.createElement('label');wrap.style.cssText='display:flex;flex-direction:column;gap:4px;align-items:flex-start';wrap.textContent=labels[k];const b=document.createElement('button');b.type='button';b.className='state';b.dataset.ccEditStatus=k;b.dataset.v=String(v);b.textContent=stateIcon(v);b.onclick=()=>{let n=(Number(b.dataset.v)+1)%3;b.dataset.v=String(n);b.textContent=stateIcon(n)};wrap.appendChild(b);box.appendChild(wrap)});}
function collect(){const out={};document.querySelectorAll('[data-cc-edit-status]').forEach(b=>out[b.dataset.ccEditStatus]=Number(b.dataset.v)||0);return out}
function patchSave(){const saveBtn=document.getElementById('saveBtn');if(!saveBtn||saveBtn.dataset.ccStatusWired)return;saveBtn.dataset.ccStatusWired='1';saveBtn.addEventListener('click',()=>{const vals=collect();const before=load();let targetIndex=before.length;try{if(typeof editing!=='undefined'&&editing>=0)targetIndex=editing}catch(_){}setTimeout(()=>{try{const list=load();let idx=targetIndex;if(idx<0||idx>=list.length)idx=list.length-1;if(idx>=0&&list[idx]){list[idx].checks={...(list[idx].checks||{}),...vals};localStorage.setItem(KEY,JSON.stringify(list));try{localStorage.setItem('lewis-private-collections-backup-v1',JSON.stringify(list))}catch(_){}try{if(typeof items!=='undefined'&&Array.isArray(items))items.splice(0,items.length,...list);if(typeof render==='function')render()}catch(_){}}}catch(_){}},35)},true)}
function syncSoon(){setTimeout(render,0)}
function init(){section();render();patchSave();document.addEventListener('click',e=>{if(e.target.closest('[data-edit]')||e.target.id==='clearBtn')syncSoon()},true)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();