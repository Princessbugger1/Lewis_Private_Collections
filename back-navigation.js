(()=>{
  function installBackButton(){
    const header=document.querySelector('header');
    if(!header||document.getElementById('catalogBackButton'))return;
    const button=document.createElement('button');
    button.id='catalogBackButton';
    button.type='button';
    button.textContent='← Back';
    button.setAttribute('aria-label','Go back within the catalog');
    button.style.cssText='position:absolute;right:16px;top:12px;background:#e5e7eb;color:#111827;padding:7px 10px;border-radius:9px;font-weight:650;cursor:pointer;border:0';
    button.addEventListener('click',()=>{
      if(typeof window.reset==='function'&&typeof window.editing!=='undefined'&&window.editing!==-1)window.reset();
      const collection=document.querySelector('#records')?.closest('section');
      if(collection)collection.scrollIntoView({behavior:'smooth',block:'start'});else window.scrollTo({top:0,behavior:'smooth'});
    });
    header.appendChild(button);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installBackButton);else installBackButton();
})();
