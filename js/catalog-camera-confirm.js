/* Camera confirmation overlay for Add an Item scan: capture -> preview -> Use This Picture / Retake / Cancel. */
(function(){
'use strict';
let active=false;
async function openCamera(side){
  if(active)return;
  const input=document.getElementById('ccResearch'+side);
  if(!input)return;
  if(!navigator.mediaDevices?.getUserMedia){input.setAttribute('capture','environment');input.click();return}
  active=true;
  let stream=null,blob=null;
  const modal=document.createElement('div');
  modal.className='cc-camera-modal cc-camera-confirm-modal';
  modal.innerHTML=`<div class="cc-camera-card"><h3>${side==='Obverse'?'Obverse / Face':'Reverse'} Picture</h3><video autoplay playsinline></video><img data-review hidden alt="Picture preview"><canvas hidden></canvas><div class="actions" data-live><button type="button" class="primary" data-snap>Take Picture</button><button type="button" class="secondary" data-cancel>Cancel</button></div><div class="actions" data-confirm hidden><button type="button" class="primary" data-use>Use This Picture</button><button type="button" class="secondary" data-retake>Retake</button><button type="button" class="secondary" data-cancel2>Cancel</button></div><p class="small" data-help>Take the picture, then choose whether to use it or retake it.</p></div>`;
  document.body.appendChild(modal);
  const video=modal.querySelector('video'),review=modal.querySelector('[data-review]'),canvas=modal.querySelector('canvas');
  const live=modal.querySelector('[data-live]'),confirm=modal.querySelector('[data-confirm]');
  const stop=()=>{if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}};
  const close=()=>{stop();modal.remove();active=false};
  const start=async()=>{try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});video.srcObject=stream;video.hidden=false;review.hidden=true;live.hidden=false;confirm.hidden=true}catch(e){close();input.setAttribute('capture','environment');input.click()}};
  modal.querySelector('[data-snap]').onclick=()=>{canvas.width=video.videoWidth||1280;canvas.height=video.videoHeight||720;canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);canvas.toBlob(b=>{if(!b)return;blob=b;review.src=URL.createObjectURL(b);stop();video.hidden=true;review.hidden=false;live.hidden=true;confirm.hidden=false},'image/jpeg',.92)};
  modal.querySelector('[data-use]').onclick=()=>{if(!blob)return;const file=new File([blob],side.toLowerCase()+'-camera.jpg',{type:'image/jpeg'});try{const dt=new DataTransfer();dt.items.add(file);input.files=dt.files;input.dispatchEvent(new Event('change',{bubbles:true}));close()}catch(e){close();}};
  modal.querySelector('[data-retake]').onclick=()=>{blob=null;start()};
  modal.querySelector('[data-cancel]').onclick=close;modal.querySelector('[data-cancel2]').onclick=close;
  start();
}
function intercept(e){const b=e.target.closest?.('[data-camera]');if(!b||!document.getElementById('ccAddScanArea')?.contains(b))return;e.preventDefault();e.stopImmediatePropagation();openCamera(b.dataset.camera)}
document.addEventListener('click',intercept,true);
const style=document.createElement('style');style.textContent='.cc-camera-confirm-modal [data-review]{display:block;width:100%;max-height:65vh;object-fit:contain;background:#111;border-radius:10px}.cc-camera-confirm-modal [data-review][hidden]{display:none}.cc-camera-confirm-modal .actions button{min-width:120px}';document.head.appendChild(style);
})();
