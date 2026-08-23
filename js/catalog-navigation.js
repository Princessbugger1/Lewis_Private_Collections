/* Lewis Private Collections — expandable Back/Home navigation framework. */
(function(){
'use strict';
const stack=[];
let current={type:'collection',scrollY:window.scrollY||0};
let restoring=false;
function recordsSection(){const r=document.getElementById('records');return r?r.closest('section'):null}
function closeTransient(){document.querySelectorAll('.cc-view-modal,.cc-photo-zoom').forEach(x=>x.remove());const p=document.getElementById('settingsPanel');if(p)p.classList.remove('open')}
function setBackState(){const b=document.getElementById('ccNavBack');if(b)b.disabled=stack.length===0}
function cloneState(s){return s?JSON.parse(JSON.stringify(s)):null}
function pushCurrent(){if(restoring)return;current.scrollY=window.scrollY||0;stack.push(cloneState(current));setBackState()}
function collectionState(){return {type:'collection',scrollY:window.scrollY||0}}
function findCard(index){return [...document.querySelectorAll('#records .record')].find(c=>Number(c.querySelector('[data-edit]')?.dataset.edit)===Number(index))}
function openView(index){const card=findCard(index);const b=card?.querySelector('.cc-view-item');if(b)b.click()}
function openEdit(index){const card=findCard(index);const b=card?.querySelector('[data-edit]');if(b)b.click()}
function restore(s){if(!s)return;restoring=true;closeTransient();setTimeout(()=>{
  if(s.type==='settings'){
    const p=document.getElementById('settingsPanel');if(p&&!p.classList.contains('open'))document.getElementById('settingsToggle')?.click();
  }else if(s.type==='view'&&Number.isFinite(Number(s.index))){openView(Number(s.index));
  }else if(s.type==='edit'&&Number.isFinite(Number(s.index))){openEdit(Number(s.index));
  }
  current=cloneState(s);setTimeout(()=>{window.scrollTo({top:Number(s.scrollY)||0,behavior:'auto'});restoring=false;setBackState()},30);
},0)}
function back(){if(!stack.length)return;const s=stack.pop();setBackState();restore(s)}
function home(){stack.length=0;setBackState();closeTransient();try{if(typeof editing!=='undefined'&&editing>=0&&typeof reset==='function')reset()}catch(_){}current=collectionState();const sec=recordsSection();if(sec)sec.scrollIntoView({behavior:'smooth',block:'start'});else window.scrollTo({top:0,behavior:'smooth'})}
function makeBar(){if(document.getElementById('ccNavBar'))return;const bar=document.createElement('nav');bar.id='ccNavBar';bar.className='cc-nav-bar';bar.setAttribute('aria-label','Catalog navigation');bar.innerHTML='<button type="button" id="ccNavBack" class="secondary" disabled>← Back</button><button type="button" id="ccNavHome" class="primary">🏠 Home</button><span id="ccNavFuture" aria-hidden="true"></span>';document.body.appendChild(bar);document.getElementById('ccNavBack').onclick=back;document.getElementById('ccNavHome').onclick=home;setBackState()}
function styles(){if(document.getElementById('ccNavStyle'))return;const s=document.createElement('style');s.id='ccNavStyle';s.textContent='.cc-nav-bar{position:fixed;left:50%;bottom:12px;transform:translateX(-50%);z-index:100010;display:flex;gap:8px;align-items:center;padding:7px;background:#fffffff2;border:1px solid #d1d5db;border-radius:13px;box-shadow:0 5px 22px #0003;backdrop-filter:blur(8px)}.cc-nav-bar button{white-space:nowrap}.cc-nav-bar button:disabled{opacity:.45;cursor:default}@media(max-width:520px){.cc-nav-bar{bottom:8px;width:calc(100% - 16px);justify-content:center}.cc-nav-bar button{flex:1;max-width:160px}body{padding-bottom:70px}}';document.head.appendChild(s)}
function wire(){document.addEventListener('click',e=>{
  if(restoring)return;
  const view=e.target.closest('.cc-view-item');
  if(view){pushCurrent();current={type:'view',index:Number(view.dataset.viewIndex),scrollY:window.scrollY||0};return}
  const edit=e.target.closest('#records [data-edit]');
  if(edit){pushCurrent();current={type:'edit',index:Number(edit.dataset.edit),scrollY:0};return}
  const viewEdit=e.target.closest('[data-view-edit]');
  if(viewEdit){const v=current.type==='view'?current:null;if(v){pushCurrent();current={type:'edit',index:Number(v.index),scrollY:0}}return}
  if(e.target.closest('#settingsToggle')){
    const p=document.getElementById('settingsPanel');const opening=!p?.classList.contains('open');
    if(opening){pushCurrent();current={type:'settings',scrollY:window.scrollY||0}}
    else if(current.type==='settings'&&stack.length){current=stack.pop();setBackState()}
  }
},true)}
function init(){styles();makeBar();wire();window.LewisCatalogNavigation={back,home,push:function(state){pushCurrent();current=state},clear:function(){stack.length=0;setBackState()},getHistory:function(){return stack.map(cloneState)}}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();