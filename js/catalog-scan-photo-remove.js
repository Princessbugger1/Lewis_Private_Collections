/* Small X controls for removing individual Scan / Identify Coin photos. */
(function(){
'use strict';
function setup(){
  const area=document.getElementById('ccAddScanArea');
  if(!area)return;
  ['Obverse','Reverse'].forEach(side=>{
    const box=area.querySelector(`[data-photo-side="${side}"]`);
    const preview=document.getElementById('ccResearch'+side+'Preview');
    const oldRemove=box?.querySelector(`[data-remove="${side}"]`);
    if(!box||!preview||!oldRemove)return;
    oldRemove.hidden=true;
    oldRemove.style.display='none';
    let x=box.querySelector(`[data-photo-x="${side}"]`);
    if(!x){
      x=document.createElement('button');
      x.type='button';x.className='cc-photo-x';x.dataset.photoX=side;x.textContent='×';
      x.setAttribute('aria-label','Remove '+(side==='Obverse'?'obverse / face':'reverse')+' picture');
      x.title='Remove picture';x.hidden=true;
      box.appendChild(x);
      x.onclick=()=>oldRemove.click();
    }
    const sync=()=>{x.hidden=preview.hidden||!preview.getAttribute('src')};
    new MutationObserver(sync).observe(preview,{attributes:true,attributeFilter:['hidden','src']});
    sync();
  });
  if(!document.getElementById('ccScanPhotoRemoveStyle')){
    const style=document.createElement('style');style.id='ccScanPhotoRemoveStyle';
    style.textContent='#ccAddScanArea .cc-id-photo{position:relative}#ccAddScanArea .cc-photo-x{position:absolute;top:7px;right:7px;z-index:2;width:30px;height:30px;padding:0;border-radius:50%;background:#fff;color:#991b1b;border:1px solid #fecaca;box-shadow:0 1px 5px #0002;font-size:22px;line-height:27px;font-weight:700}#ccAddScanArea .cc-photo-x[hidden]{display:none}';
    document.head.appendChild(style);
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(setup,0));else setTimeout(setup,0);
document.addEventListener('cc-research-ready',()=>setTimeout(setup,0));
})();
