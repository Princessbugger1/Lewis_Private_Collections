(()=>{
  'use strict';
  let internalDepth=0;
  let lastView='';
  const appState=()=>({view:document.getElementById('formTitle')?.textContent||'catalog',settings:document.getElementById('settingsPanel')?.classList.contains('open')||false});
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
    button.addEventListener('click',()=>{
      if(internalDepth>0){ history.back(); return; }
      if(typeof window.reset==='function') window.reset();
    });
    header.appendChild(button);
  }
  function initHistory(){
    if(!history.state||history.state.catalogBase!==true){
      history.replaceState({catalogBase:true,catalogView:'catalog'},'',location.href);
    }
    lastView=appState().view;
    const target=document.getElementById('formTitle');
    if(target){
      new MutationObserver(()=>{
        const view=appState().view;
        if(view!==lastView){
          if(view==='Edit an item' || view==='Edit item'){
            history.pushState({catalogBase:true,catalogView:'item'},'',location.href);
            internalDepth=1;
          } else if(view==='Add an item' && internalDepth>0){
            internalDepth=0;
          }
          lastView=view;
        }
      }).observe(target,{childList:true,subtree:true,characterData:true});
    }
    window.addEventListener('popstate',e=>{
      if(e.state&&e.state.catalogBase===true){
        internalDepth=0;
        if(typeof window.reset==='function')window.reset();
        lastView='Add an item';
      }
    });
  }
  function start(){install();initHistory();setTimeout(install,100);setTimeout(install,500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
  window.addEventListener('load',install,{once:true});
})();
