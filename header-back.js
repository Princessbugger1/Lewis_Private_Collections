(()=>{
  'use strict';
  let internalDepth=0;
  let lastView='';
  let settingsControl=null;
  let closingSettingsFromBack=false;

  function findSettingsControl(){
    return [...document.querySelectorAll('button,a,[role="button"]')].find(el=>/settings/i.test((el.textContent||'').trim()));
  }

  function settingsIsOpen(){
    const p=document.querySelector('#settingsPanel,.settings-panel,[data-settings-panel]');
    if(p) return getComputedStyle(p).display!=='none' && getComputedStyle(p).visibility!=='hidden' && !p.hidden;
    return false;
  }

  function removeOldCoaSwitch(){
    const box=document.getElementById('settings');
    if(!box)return;
    [...box.querySelectorAll('.settings-row')].forEach(row=>{
      const label=row.querySelector('span');
      if(label && /^COA$/i.test((label.textContent||'').trim())) row.remove();
    });
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
      if(!control || control.id==='catalogBackButton' || !/settings/i.test((control.textContent||'').trim())) return;
      settingsControl=control;
      if(closingSettingsFromBack){
        closingSettingsFromBack=false;
        return;
      }
      if(history.state?.catalogBase!==true){
        history.replaceState({catalogBase:true,catalogView:'catalog'},'',location.href);
      }
      if(settingsIsOpen()){
        if(history.state?.catalogView==='catalog') history.pushState({catalogBase:true,catalogView:'settings'},'',location.href);
      } else if(history.state?.catalogView==='settings'){
        history.replaceState({catalogBase:true,catalogView:'catalog'},'',location.href);
      }
    },true);
    settingsControl=findSettingsControl()||settingsControl;

    const box=document.getElementById('settings');
    if(box){
      removeOldCoaSwitch();
      new MutationObserver(removeOldCoaSwitch).observe(box,{childList:true,subtree:true});
    }
  }

  function initHistory(){
    if(!history.state||history.state.catalogBase!==true){
      history.replaceState({catalogBase:true,catalogView:'catalog'},'',location.href);
    }
    lastView=document.getElementById('formTitle')?.textContent||'catalog';
    const target=document.getElementById('formTitle');
    if(target){
      new MutationObserver(()=>{
        const view=document.getElementById('formTitle')?.textContent||'catalog';
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
      if(!e.state||e.state.catalogBase!==true)return;
      if(e.state.catalogView==='catalog' && settingsIsOpen()){
        const control=settingsControl||findSettingsControl();
        if(control){
          closingSettingsFromBack=true;
          control.click();
        }
        internalDepth=0;
        return;
      }
      if(e.state.catalogView==='settings')return;
      internalDepth=0;
      if(typeof window.reset==='function')window.reset();
      lastView='Add an item';
    });
  }

  function start(){install();initHistory();watchSettings();setTimeout(install,100);setTimeout(install,500);setTimeout(removeOldCoaSwitch,100);setTimeout(removeOldCoaSwitch,500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
  window.addEventListener('load',install,{once:true});
})();
