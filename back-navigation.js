(()=>{
  function installBackButton(){
    const header=document.querySelector('header');
    if(!header||document.getElementById('catalogBackButton'))return;
    if(getComputedStyle(header).position==='static')header.style.position='sticky';
    const button=document.createElement('button');
    button.id='catalogBackButton';button.type='button';button.textContent='← Back';
    button.setAttribute('aria-label','Go back');
    button.style.cssText='position:absolute;right:16px;top:12px;z-index:100;background:#fff;color:#111827;padding:7px 12px;border:0;border-radius:9px;font-weight:700;box-shadow:0 1px 4px #0006;cursor:pointer';
    button.addEventListener('click',()=>{
      if(window.history.length>1){window.history.back();return;}
      if(typeof window.reset==='function'&&window.editing!==undefined&&window.editing!==-1)window.reset();
    });
    header.style.position='sticky';header.style.top='0';header.style.zIndex='100';header.appendChild(button);
  }
  function start(){installBackButton();setTimeout(installBackButton,100);setTimeout(installBackButton,500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
