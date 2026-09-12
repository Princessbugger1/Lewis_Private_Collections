/* Lewis Private Collections — save feedback only.
   The catalog's original save handler is the single authoritative writer.
   This module never creates, replaces, or clears Collection records. */
(function(){
'use strict';
const ITEM_KEY='lewis-private-collections-v8';
const $=id=>document.getElementById(id);
function toast(text,hold=2400){let n=$('ccSaveNotice');if(!n){n=document.createElement('div');n.id='ccSaveNotice';n.setAttribute('role','status');n.style.cssText='position:fixed;left:50%;bottom:82px;transform:translateX(-50%);z-index:100005;background:#111827;color:#fff;padding:9px 13px;border-radius:10px;font-size:13px;font-weight:700;box-shadow:0 4px 18px #0004;max-width:90vw;text-align:center;';document.body.appendChild(n)}n.textContent=text;n.hidden=false;clearTimeout(n._t);n._t=setTimeout(()=>{n.hidden=true},hold)}
function snapshot(){return localStorage.getItem(ITEM_KEY)||'[]'}
function installSaveFeedback(){const btn=$('saveBtn');if(!btn||btn.dataset.ccSaveFeedback)return;btn.dataset.ccSaveFeedback='1';btn.addEventListener('click',()=>{const before=snapshot();const wasEdit=(()=>{try{return typeof editing==='number'&&editing>=0}catch(_){return false}})();requestAnimationFrame(()=>setTimeout(()=>{if(snapshot()!==before)toast(wasEdit?'Changes saved':'Item saved')},0))},true)}
function installDraftFeedback(){document.addEventListener('cc-drafts-changed',()=>toast('Draft saved'),false)}
function init(){installSaveFeedback();installDraftFeedback()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
