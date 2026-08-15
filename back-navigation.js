(()=>{
  function goBack(){
    if(typeof window.reset==='function'&&typeof window.editing!=='undefined'&&window.editing!==-1){
      window.reset();
      const collection=document.querySelector('#records')?.closest('section');
      if(collection)collection.scrollIntoView({behavior:'smooth',block:'start'});
      return;
    }
    if(window.history.length>1)window.history.back();
  }
  function installBackButton(){
    const header=document.querySelector('header');
    if(!header)return;
    let button=document.getElementById('catalogBackButton');
    if(!button){
      button=document.createElement('button');
      button.id='catalogBackButton';
      button.type='button';
      button.textContent='← Back';
      button.setAttribute('aria-label','Go back');
      button.style.cssText='position:absolute;right:16px;top:12px;z-index:1000;background:#fff;color:#111827;border:0;border-radius:9px;padding:7px 12px;font-weight:700;box-shadow:0 1px 4px #0006;cursor:pointer';
      header.appendChild(button);
    }
    button.onclick=goBack;
  }
  function start(){installBackButton();setTimeout(installBackButton,100);setTimeout(installBackButton,500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
