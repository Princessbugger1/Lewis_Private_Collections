(()=>{
  'use strict';
  function install(){
    const header=document.querySelector('header');
    if(!header||document.getElementById('catalogBackButton'))return;
    const button=document.createElement('button');
    button.id='catalogBackButton';
    button.type='button';
    button.textContent='← Back';
    button.setAttribute('aria-label','Back');
    button.style.cssText='position:absolute;right:16px;top:12px;z-index:20;background:#e5e7eb;color:#111827;padding:7px 12px;border:0;border-radius:9px;font-weight:700;box-shadow:0 1px 4px #0006;cursor:pointer;';
    if(getComputedStyle(header).position==='static')header.style.position='sticky';
    button.addEventListener('click',()=>{ if(history.length>1) history.back(); });
    header.appendChild(button);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
  window.addEventListener('load',install,{once:true});
})();
