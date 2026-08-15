(()=>{
  'use strict';
  let internalDepth=0;
  let lastView='';
  let settingsOpen=false;

  const appState=()=>({
    view:document.getElementById('formTitle')?.textContent||'catalog',
    settings:isSettingsOpen()
  });

  function isSettingsOpen(){
    const p=document.querySelector('#settingsPanel,.settings-panel,[data-settings-panel]');
    if(p) return getComputedStyle(p).display!=='none' && getComputedStyle(p).visibility!=='hidden' && !p.hidden;
    return false;
  }

  function findSettingsControl(){
    return [...document.querySelectorAll('button,a,[role="button"]')].find(el=>/settings/i.test((el.textContent||'').trim()));
  }

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
      if(history.state?.catalogBase===true){
        if(history.state.catalogView==='settings' || internalDepth>0){ history.back(); return; }
        if(typeof window.reset==='function') window.reset();
        return;
      }
      if(history.length>1) history.back();
      else if(typeof window.reset==='function') window.reset();
    });
    header.appendChild(button);
  }

  function watchSettings(){
    document.addEventListener('click',event=>{
      const control=event.target.closest?.('button,a,[role="button"]');
      if(!control || !/settings/i.test((control.textContent||'').trim())) return;
      setTimeout(()=>{
        const nowOpen=isSettingsOpen();
        if(nowOpen && !settingsOpen){
          if(history.state?.catalogBase!==true){
            history.replaceState({catalogBase:true,catalogView:'catalog'},'',location.href);
          }
          if(history.state?.catalogView!=='settings'){
            history.pushState({catalogBase:true,catalogView:'settings'},'',location.href);
          }
        } else if(!nowOpen && settingsOpen){
          if(history.state?.catalogView==='settings') history.replaceState({catalogBase:true,catalogView:'catalog'},'',location.href);
        }
        settingsOpen=nowOpen;
      },0);
    },true);
    settingsOpen=isSettingsOpen();
  }

  function initHistory(){
    if(!history.state||history.state.catalogBase!==true){
      history.replaceState({catalogBase:true,catalogView:'catalog'},'',location.href);
    }
    lastView=appState().view;
    settingsOpen=appState().settings;
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
        if(e.state.catalogView==='settings'){
          internalDepth=0;
          settingsOpen=true;
          const control=findSettingsControl();
          if(control && isSettingsOpen()) control.click();
          return;
        }
        internalDepth=0;
        settingsOpen=false;
        if(typeof window.reset==='function')window.reset();
        lastView='Add an item';
      }
    });
  }

  function start(){install();initHistory();watchSettings();setTimeout(install,100);setTimeout(install,500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
  window.addEventListener('load',install,{once:true});
})();
