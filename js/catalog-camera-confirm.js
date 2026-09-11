/* Camera confirmation overlay for Add an Item scan: one compact action row plus one Cancel / Close. */
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
  modal.innerHTML=`<div class="cc-camera-card"><h3>${side==='Obverse'?'Obverse / Face':'Reverse'} Picture</h3><div class="cc-camera-frame"><video autoplay playsinline></video><img data-review hidden alt="Picture preview"><canvas hidden></canvas></div><div class="actions cc-camera-main-actions"><button type="button" class="primary" data-snap>Take Picture</button><button type="button" class="primary" data-use disabled>Use This Picture</button><button type="button" class="primary" data-retake disabled>Retake</button></div><div class="cc-camera-close-line"><button type="button" class="secondary compact" data-close>Cancel / Close</button></div></div>`;
  document.body.appendChild(modal);
  const video=modal.querySelector('video'),review=modal.querySelector('[data-review]'),canvas=modal.querySelector('canvas');
  const snap=modal.querySelector('[data-snap]'),use=modal.querySelector('[data-use]'),retake=modal.querySelector('[data-retake]');
  const stop=()=>{if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}};
  const clearUrl=()=>{if(reviewUrl){URL.revokeObjectURL(reviewUrl);reviewUrl=''}};
  const close=()=>{stop();clearUrl();modal.remove();active=false};
  const setLive=()=>{snap.disabled=false;use.disabled=true;retake.disabled=true};
  const setReview=()=>{snap.disabled=true;use.disabled=false;retake.disabled=false};
  const start=async()=>{try{clearUrl();stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});video.srcObject=stream;video.hidden=false;review.hidden=true;setLive()}catch(e){close();input.setAttribute('capture','environment');input.click()}};
  snap.onclick=()=>{canvas.width=video.videoWidth||1280;canvas.height=video.videoHeight||720;canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);canvas.toBlob(b=>{if(!b)return;blob=b;clearUrl();reviewUrl=URL.createObjectURL(b);review.src=reviewUrl;stop();video.hidden=true;review.hidden=false;setReview()},'image/jpeg',.92)};
  use.onclick=()=>{if(!blob)return;const file=new File([blob],side.toLowerCase()+'-camera.jpg',{type:'image/jpeg'});try{const dt=new DataTransfer();dt.items.add(file);input.files=dt.files;input.dispatchEvent(new Event('change',{bubbles:true}));close()}catch(e){close();}};
  retake.onclick=()=>{blob=null;start()};
  modal.querySelector('[data-close]').onclick=close;
  modal.addEventListener('click',e=>{if(e.target===modal)close()});
  start();
}
function intercept(e){const b=e.target.closest?.('[data-camera]');if(!b||!document.getElementById('ccAddScanArea')?.contains(b))return;e.preventDefault();e.stopImmediatePropagation();openCamera(b.dataset.camera)}
document.addEventListener('click',intercept,true);
/* Home must close this overlay as well as navigating home. */
document.addEventListener('click',e=>{if(e.target.closest?.('#ccNavHome'))document.querySelector('.cc-camera-confirm-modal')?.querySelector('[data-close]')?.click()},true);
const style=document.createElement('style');style.textContent=`
.cc-camera-confirm-modal{position:fixed!important;inset:0!important;z-index:10050!important;background:#0009!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:12px!important;overflow:auto!important}
.cc-camera-confirm-modal .cc-camera-card{width:min(94vw,620px)!important;max-height:calc(100dvh - 24px)!important;overflow:auto!important;background:#fff!important;border-radius:14px!important;padding:14px!important;margin:auto!important}
.cc-camera-confirm-modal .cc-camera-card h3{margin:0 0 10px!important}
.cc-camera-confirm-modal .cc-camera-frame{width:100%!important;height:min(58dvh,480px)!important;min-height:220px!important;background:#111!important;border-radius:10px!important;overflow:hidden!important;display:flex!important;align-items:center!important;justify-content:center!important}
.cc-camera-confirm-modal video,.cc-camera-confirm-modal [data-review]{width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;object-fit:contain!important;background:#111!important;display:block!important}
.cc-camera-confirm-modal video[hidden],.cc-camera-confirm-modal [data-review][hidden]{display:none!important}
.cc-camera-confirm-modal .cc-camera-main-actions{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;padding:8px 0 2px!important;margin-top:6px!important;background:#fff!important}
.cc-camera-confirm-modal .cc-camera-main-actions button{min-width:0!important;width:100%!important}
.cc-camera-confirm-modal .cc-camera-main-actions button:disabled{opacity:.42!important;cursor:default!important}
.cc-camera-confirm-modal .cc-camera-close-line{display:flex!important;justify-content:flex-end!important;padding:5px 0 0!important}
.cc-camera-confirm-modal .cc-camera-close-line .compact{width:auto!important;min-width:auto!important;padding:7px 12px!important;font-size:13px!important}
@media(max-width:480px){.cc-camera-confirm-modal .cc-camera-frame{height:48dvh!important}.cc-camera-confirm-modal .cc-camera-card{padding:10px!important}.cc-camera-confirm-modal .cc-camera-main-actions{gap:5px!important}.cc-camera-confirm-modal .cc-camera-main-actions button{font-size:12px!important;padding:9px 4px!important}.cc-camera-confirm-modal .cc-camera-close-line .compact{font-size:12px!important;padding:6px 9px!important}}
`;document.head.appendChild(style);
})();
