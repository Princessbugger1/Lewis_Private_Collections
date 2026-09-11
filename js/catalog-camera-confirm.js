/* Camera confirmation overlay for Add an Item scan: live camera -> capture -> Use This Picture / Retake / Cancel-Close. */
(function(){
'use strict';
let active=false;
async function openCamera(side){
  if(active)return;
  const input=document.getElementById('ccResearch'+side);
  if(!input)return;
  if(!navigator.mediaDevices?.getUserMedia){input.setAttribute('capture','environment');input.click();return}
  active=true;
  let stream=null,blob=null,reviewUrl='';
  const modal=document.createElement('div');
  modal.className='cc-camera-modal cc-camera-confirm-modal';
  modal.innerHTML=`<div class="cc-camera-card"><h3>${side==='Obverse'?'Obverse / Face':'Reverse'} Picture</h3><div class="cc-camera-frame"><video autoplay playsinline></video><img data-review hidden alt="Picture preview"><canvas hidden></canvas></div><div class="actions" data-live><button type="button" class="primary" data-snap>Take Picture</button><button type="button" class="secondary" data-close>Cancel / Close</button></div><div class="actions" data-confirm hidden><button type="button" class="primary" data-use>Use This Picture</button><button type="button" class="secondary" data-retake>Retake</button><button type="button" class="secondary" data-cancel>Cancel / Close</button></div><p class="small" data-help>Take the picture, then use it, retake it, or cancel and close.</p></div>`;
  document.body.appendChild(modal);
  const video=modal.querySelector('video'),review=modal.querySelector('[data-review]'),canvas=modal.querySelector('canvas');
  const live=modal.querySelector('[data-live]'),confirm=modal.querySelector('[data-confirm]');
  const stop=()=>{if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}};
  const clearUrl=()=>{if(reviewUrl){URL.revokeObjectURL(reviewUrl);reviewUrl=''}};
  const close=()=>{stop();clearUrl();modal.remove();active=false};
  const start=async()=>{try{clearUrl();stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});video.srcObject=stream;video.hidden=false;review.hidden=true;live.hidden=false;confirm.hidden=true}catch(e){close();input.setAttribute('capture','environment');input.click()}};
  modal.querySelector('[data-snap]').onclick=()=>{canvas.width=video.videoWidth||1280;canvas.height=video.videoHeight||720;canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);canvas.toBlob(b=>{if(!b)return;blob=b;clearUrl();reviewUrl=URL.createObjectURL(b);review.src=reviewUrl;stop();video.hidden=true;review.hidden=false;live.hidden=true;confirm.hidden=false},'image/jpeg',.92)};
  modal.querySelector('[data-use]').onclick=()=>{if(!blob)return;const file=new File([blob],side.toLowerCase()+'-camera.jpg',{type:'image/jpeg'});try{const dt=new DataTransfer();dt.items.add(file);input.files=dt.files;input.dispatchEvent(new Event('change',{bubbles:true}));close()}catch(e){close();}};
  modal.querySelector('[data-retake]').onclick=()=>{blob=null;start()};
  modal.querySelector('[data-close]').onclick=close;
  modal.querySelector('[data-cancel]').onclick=close;
  modal.addEventListener('click',e=>{if(e.target===modal)close()});
  start();
}
function intercept(e){const b=e.target.closest?.('[data-camera]');if(!b||!document.getElementById('ccAddScanArea')?.contains(b))return;e.preventDefault();e.stopImmediatePropagation();openCamera(b.dataset.camera)}
document.addEventListener('click',intercept,true);
/* Home must close this overlay as well as navigating home. */
document.addEventListener('click',e=>{if(e.target.closest?.('#ccNavHome'))document.querySelector('.cc-camera-confirm-modal')?.querySelector('[data-close],[data-cancel]')?.click()},true);
const style=document.createElement('style');style.textContent=`
.cc-camera-confirm-modal{position:fixed!important;inset:0!important;z-index:10050!important;background:#0009!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:12px!important;overflow:auto!important}
.cc-camera-confirm-modal .cc-camera-card{width:min(94vw,620px)!important;max-height:calc(100dvh - 24px)!important;overflow:auto!important;background:#fff!important;border-radius:14px!important;padding:14px!important;margin:auto!important}
.cc-camera-confirm-modal .cc-camera-card h3{margin:0 0 10px!important}
.cc-camera-confirm-modal .cc-camera-frame{width:100%!important;height:min(58dvh,480px)!important;min-height:220px!important;background:#111!important;border-radius:10px!important;overflow:hidden!important;display:flex!important;align-items:center!important;justify-content:center!important}
.cc-camera-confirm-modal video,.cc-camera-confirm-modal [data-review]{width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;object-fit:contain!important;background:#111!important;display:block!important}
.cc-camera-confirm-modal video[hidden],.cc-camera-confirm-modal [data-review][hidden]{display:none!important}
.cc-camera-confirm-modal .actions{position:sticky!important;bottom:0!important;background:#fff!important;padding:10px 0 4px!important;margin-top:8px!important;z-index:2!important;display:flex!important;gap:8px!important;flex-wrap:wrap!important}
.cc-camera-confirm-modal .actions button{min-width:120px!important;flex:1 1 120px!important}
.cc-camera-confirm-modal [data-snap],.cc-camera-confirm-modal [data-use]{order:1}.cc-camera-confirm-modal [data-retake]{order:2}.cc-camera-confirm-modal [data-close],.cc-camera-confirm-modal [data-cancel]{order:3}
@media(max-width:480px){.cc-camera-confirm-modal .cc-camera-frame{height:48dvh!important}.cc-camera-confirm-modal .cc-camera-card{padding:10px!important}.cc-camera-confirm-modal .actions button{min-width:0!important;font-size:14px!important;padding:10px 7px!important}}
`;document.head.appendChild(style);
})();
