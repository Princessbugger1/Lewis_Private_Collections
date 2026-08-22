/* Coin Chime — mobile-first coin photo inspector/cropper.
 * Nothing is changed until the user taps "Crop & Save".
 */
(function () {
  'use strict';
  const cropper = () => window.CoinChimePhotoCrop;
  let overlay = null;
  function close(){ if(overlay) overlay.remove(); overlay=null; }
  function esc(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function open(dataUrl,onConfirm,title='Coin photo'){
    if(!dataUrl||!cropper()) return; close();
    overlay=document.createElement('div'); overlay.className='ccpe-overlay';
    overlay.innerHTML=`<style>
      .ccpe-overlay{position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:99999;display:flex;align-items:center;justify-content:center;padding:10px;font-family:system-ui,sans-serif}.ccpe-panel{width:min(720px,100%);max-height:96vh;background:#fff;border-radius:16px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 12px 45px #0008}.ccpe-head{padding:12px 14px;border-bottom:1px solid #e5e7eb}.ccpe-head b{font-size:17px}.ccpe-help{font-size:12px;color:#6b7280;margin-top:4px}.ccpe-stage{position:relative;margin:10px;background:#111;border-radius:12px;height:min(68vh,560px);min-height:300px;overflow:hidden;touch-action:none;user-select:none}.ccpe-img{position:absolute;max-width:none;transform-origin:top left;user-select:none;-webkit-user-drag:none;pointer-events:none}.ccpe-frame{position:absolute;left:50%;top:50%;width:min(82vw,460px);height:min(82vw,460px);max-width:calc(100% - 30px);max-height:calc(100% - 30px);transform:translate(-50%,-50%);border:2px solid #fff;box-shadow:0 0 0 9999px rgba(0,0,0,.42),0 0 0 1px #000;pointer-events:none}.ccpe-actions{display:flex;gap:7px;flex-wrap:wrap;padding:10px 12px 12px;border-top:1px solid #e5e7eb}.ccpe-actions button{border:0;border-radius:9px;padding:10px 13px;font:inherit;font-weight:700}.ccpe-primary{background:#111827;color:#fff}.ccpe-secondary{background:#e5e7eb;color:#111827}.ccpe-danger{background:#fee2e2;color:#991b1b}.ccpe-spacer{flex:1}@media(max-width:520px){.ccpe-stage{margin:8px;height:58vh;min-height:280px}.ccpe-actions button{flex:1;min-width:88px}.ccpe-spacer{display:none}.ccpe-frame{width:78vw;height:78vw}}
    </style><div class="ccpe-panel" role="dialog" aria-modal="true"><div class="ccpe-head"><b>${esc(title)}</b><div class="ccpe-help">Drag with one finger. Pinch to zoom. The white box is the crop area. Nothing changes until you choose Crop &amp; Save.</div></div><div class="ccpe-stage" id="ccpe-stage"><img class="ccpe-img" id="ccpe-img" alt="Coin photo"><div class="ccpe-frame"></div></div><div class="ccpe-actions"><button type="button" class="ccpe-secondary" id="ccpe-minus">−</button><button type="button" class="ccpe-secondary" id="ccpe-plus">+</button><button type="button" class="ccpe-secondary" id="ccpe-reset">Reset view</button><span class="ccpe-spacer"></span><button type="button" class="ccpe-primary" id="ccpe-save">Crop &amp; Save</button><button type="button" class="ccpe-danger" id="ccpe-cancel">Cancel</button></div></div>`;
    document.body.appendChild(overlay);
    const stage=overlay.querySelector('#ccpe-stage'),img=overlay.querySelector('#ccpe-img'),frame=overlay.querySelector('.ccpe-frame'); img.src=dataUrl;
    let nw=1,nh=1,base=1,zoom=1,x=0,y=0; const pointers=new Map(); let drag=null,pinch=null;
    const sr=()=>stage.getBoundingClientRect(), fr=()=>frame.getBoundingClientRect();
    function paint(){const s=base*zoom;img.style.width=`${nw*s}px`;img.style.height=`${nh*s}px`;img.style.left=`${x}px`;img.style.top=`${y}px`;}
    function fit(){const a=sr(),b=fr();base=Math.max(b.width/nw,b.height/nh);zoom=1;const w=nw*base,h=nh*base;x=(a.width-w)/2;y=(a.height-h)/2;paint();}
    function clamp(){const a=sr(),b=fr(),s=base*zoom,w=nw*s,h=nh*s,fx=(a.width-b.width)/2,fy=(a.height-b.height)/2;x=Math.min(fx,Math.max(fx+b.width-w,x));y=Math.min(fy,Math.max(fy+b.height-h,y));paint();}
    function zoomAt(f,cx,cy){const old=base*zoom,nz=Math.max(1,Math.min(5,zoom*f)),ns=base*nz,px=(cx-x)/old,py=(cy-y)/old;x=cx-px*ns;y=cy-py*ns;zoom=nz;paint();clamp();}
    function doCrop(){const a=sr(),b=fr(),s=base*zoom,fx=(a.width-b.width)/2,fy=(a.height-b.height)/2;const crop={x:Math.max(0,Math.min(nw-b.width/s,(fx-x)/s)),y:Math.max(0,Math.min(nh-b.height/s,(fy-y)/s)),width:Math.min(nw,b.width/s),height:Math.min(nh,b.height/s)};cropper().cropImage(dataUrl,crop).then(r=>{onConfirm(r);close();}).catch(()=>{});}
    img.onload=()=>requestAnimationFrame(()=>{nw=img.naturalWidth||1;nh=img.naturalHeight||1;fit();});
    overlay.querySelector('#ccpe-plus').onclick=()=>{const a=sr();zoomAt(1.25,a.width/2,a.height/2)};overlay.querySelector('#ccpe-minus').onclick=()=>{const a=sr();zoomAt(.8,a.width/2,a.height/2)};overlay.querySelector('#ccpe-reset').onclick=fit;overlay.querySelector('#ccpe-cancel').onclick=close;overlay.querySelector('#ccpe-save').onclick=doCrop;
    stage.addEventListener('pointerdown',e=>{stage.setPointerCapture?.(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1)drag={x:e.clientX,y:e.clientY,ox:x,oy:y};if(pointers.size===2){const p=[...pointers.values()];pinch={d:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y),zoom,cx:(p[0].x+p[1].x)/2-sr().left,cy:(p[0].y+p[1].y)/2-sr().top};}});
    stage.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1&&drag){x=drag.ox+e.clientX-drag.x;y=drag.oy+e.clientY-drag.y;paint();}else if(pointers.size===2&&pinch){const p=[...pointers.values()],d=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y),nz=Math.max(1,Math.min(5,pinch.zoom*d/pinch.d)),old=base*pinch.zoom,ns=base*nz,c={x:(p[0].x+p[1].x)/2-sr().left,y:(p[0].y+p[1].y)/2-sr().top},px=(c.x-x)/old,py=(c.y-y)/old;x=c.x-px*ns;y=c.y-py*ns;zoom=nz;paint();}});
    const end=e=>{pointers.delete(e.pointerId);if(!pointers.size)drag=null;if(pointers.size<2)pinch=null;clamp();};stage.addEventListener('pointerup',end);stage.addEventListener('pointercancel',end);stage.addEventListener('wheel',e=>{e.preventDefault();const a=sr();zoomAt(e.deltaY<0?1.1:.9,e.clientX-a.left,e.clientY-a.top);},{passive:false});
  }
  window.CoinChimePhotoEditor={open};
})();
