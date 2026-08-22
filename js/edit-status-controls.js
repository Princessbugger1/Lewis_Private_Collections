/* Lewis Private Collections — canonical item statuses edited only in Add/Edit. */
(function(){
'use strict';
const KEY='lewis-private-collections-v8';
const statusKeys=['OGP','Original box','Sigma tested','Photos complete','Variety'];
const labels={'OGP':'Original Packaging / OGP','Original box':'Original Box','Sigma tested':'Sigma Tested','Photos complete':'Photos Complete','Variety':'Variety Checked'};
const settingKeys={'OGP':'ogp','Original box':'originalBox','Sigma tested':'sigma','Photos complete':'photosComplete','Variety':'variety'};
const icon=v=>v===1?'✅ Yes':v===2?'❌ No':'❓ Unknown';
let activeIndex=-1;
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(_){return[]}}
function st(){try{return {...(typeof settings==='object'?settings:{}),...JSON.parse(localStorage.getItem('lewis-settings')||'{}')}}catch(_){return typeof settings==='object'?settings:{}}}
function section(){let s=document.getElementById('ccEditStatuses');if(s)return s;const photos=document.getElementById('photosSection');if(!photos)return null;s=document.createElement('div');s.id='ccEditStatuses';s.className='card';s.style.cssText='margin:12px 0 0;padding:10px;background:#f9fafb';s.innerHTML='<b style="font-size:13px">Item Status</b><p class="small" style="margin:4px 0 0">Change these only while adding or editing this item.</p><div class="checks" id="ccEditStatusButtons"></div>';photos.parentNode.insertBefore(s,photos);return s}
function getIndex(){try{if(typeof editing!=='undefined'&&editing>=0)return editing}catch(_){}return activeIndex}
function draw(){if(!section())return;const box=document.getElementById('ccEditStatusButtons'),list=load(),idx=getIndex(),item=idx>=0?list[idx]:null,S=st();box.innerHTML='';statusKeys.forEach(k=>{if(S[settingKeys[k]]===false)return;const v=Number(item?.checks?.[k]||0);const w=document.createElement('label');w.style.cssText='display:flex;flex-direction:column;gap:4px;align-items:flex-start';w.append(document.createTextNode(labels[k]));const b=document.createElement('button');b.type='button';b.className='state';b.dataset.ccEditStatus=k;b.dataset.v=String(v);b.textContent=icon(v);b.onclick=()=>{const n=(Number(b.dataset.v)+1)%3;b.dataset.v=String(n);b.textContent=icon(n)};w.appendChild(b);box.appendChild(w)})}
function collect(){const x={};document.querySelectorAll('[data-cc-edit-status]').forEach(b=>x[b.dataset.ccEditStatus]=Number(b.dataset.v)||0);return x}
function writeStatuses(idx,vals){const list=load();if(idx<0||!list[idx])return;list[idx].checks={...(list[idx].checks||{})};statusKeys.forEach(k=>{if(Object.prototype.hasOwnProperty.call(vals,k))list[idx].checks[k]=vals[k]});localStorage.setItem(KEY,JSON.stringify(list));try{localStorage.setItem('lewis-private-collections-backup-v1',JSON.stringify(list))}catch(_){}try{if(typeof items!=='undefined'&&Array.isArray(items))items.splice(0,items.length,...list)}catch(_){}try{if(typeof render==='function')render()}catch(_){}}
function wire(){const save=document.getElementById('saveBtn');if(!save||save.dataset.ccCanonicalStatus)return;save.dataset.ccCanonicalStatus='1';save.addEventListener('click',()=>{const vals=collect(),wasEditing=getIndex(),before=load().length;setTimeout(()=>{const list=load();const idx=wasEditing>=0?wasEditing:(list.length>before?list.length-1:list.length-1);writeStatuses(idx,vals);activeIndex=-1},80)},true)}
function init(){section();wire();draw();document.addEventListener('click',e=>{const edit=e.target.closest('#records [data-edit]');if(edit){activeIndex=Number(edit.dataset.edit);setTimeout(draw,0)}else if(e.target.id==='clearBtn'){activeIndex=-1;setTimeout(draw,0)}},true)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();