/* Lewis Private Collections — reliable Add Item save path + immediate save feedback. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
const DRAFT_KEY='lewis-private-collections-drafts-v1';
const $=id=>document.getElementById(id);
function readItems(){try{const v=JSON.parse(localStorage.getItem(ITEM_KEY)||'[]');return Array.isArray(v)?v:[]}catch(_){return []}}
function toast(text){let n=$('ccSaveNotice');if(!n){n=document.createElement('div');n.id='ccSaveNotice';n.setAttribute('role','status');n.style.cssText='position:fixed;left:50%;bottom:82px;transform:translateX(-50%);z-index:100005;background:#111827;color:#fff;padding:9px 13px;border-radius:10px;font-size:13px;font-weight:700;box-shadow:0 4px 18px #0004;max-width:90vw;text-align:center;';document.body.appendChild(n)}n.textContent=text;n.hidden=false;clearTimeout(n._t);n._t=setTimeout(()=>{n.hidden=true},1800)}
function snapshot(){return {count:readItems().length,raw:localStorage.getItem(ITEM_KEY)||'[]'}}
function installAddVerification(){const btn=$('saveBtn');if(!btn||btn.dataset.ccSaveVerified)return;btn.dataset.ccSaveVerified='1';btn.addEventListener('click',()=>{const before=snapshot();setTimeout(()=>{const after=snapshot();if(after.raw!==before.raw){toast('Item saved');return}const hasInfo=['country','type','denom','year'].some(id=>String($(id)?.value||'').trim());if(hasInfo)toast('Item did not save — please wait while we fix the save path')},700)},true)}
function installDraftFeedback(){document.addEventListener('cc-drafts-changed',()=>toast('Draft saved'),false)}
function init(){installAddVerification();installDraftFeedback()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
