/* Coin Chime — smooth mobile-first photo inspector/cropper. */
(function(){
  'use strict';
  const cropper=()=>window.CoinChimePhotoCrop;
  let overlay=null;
  function close(){if(overlay)overlay.remove();overlay=null;}
  function esc(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function open(dataUrl,onConfirm,title='Coin photo',onRestore=null){
    if(!dataUrl||!cropper())return;close();
    overlay=document.createElement('div');overlay.className='ccpe-overlay';
    overlay.innerHTML=`<style>.ccpe-overlay{position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:99999;display:flex;align-items:center;justify-content:center;padding:10px;font-family:system-ui,sans-serif}.ccpe-panel{width:min(720px,100%);max-height:96vh;background:#fff;border-radius:16px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 12px 45px #0008}.ccpe-head{padding:12px 14px;border-bottom:1px solid #e5e7eb}.ccpe-head b{font-size:17px}.ccpe-help{font-size:12px;color:#6b7280;margin-top:4px}.ccpe-stage{position:relative;margin:10px;background:#111;border-radius:12px;height:min(68vh,560px);min-height:300px;overflow:hidden;touch-action:none;user-select:none;overscroll-behavior:contain}.ccpe-img{position:absolute;left:0;top:0;max-width:none;transform-origin:0 0;user-select:none;-webkit-user-drag:none;pointer-events:none;will-change:transform}.ccpe-frame{position:absolute;left:50%;top:50%;width:min(82vw,460px);height:min(82vw,460px);max-width:calc(100% - 30px);max-height:calc(100% - 30px);transform:translate(-50%,-50%);border:2px solid #fff;box-shadow:0 0 0 9999px rgba(0,0,0,.42),0 0 0 1px #000;pointer-events:none}.ccpe-actions{display:flex;gap:7px;flex-wrap:wrap;padding:10px 12px 12px;border-top:1px solid #e5e7eb}.ccpe-actions button{border:0;border-radius:9px;padding:10px 13px;font:inherit;font-weight:700}.ccpe-primary{background:#111827;color:#fff}.ccpe-secondary{background:#e5e7eb;color:#111827}.ccpe-danger{background:#fee2e2;color:#991b1b}.ccpe-spacer{flex:1}@media(max-width:520px){.ccpe-stage{margin:8px;height:58vh;min-height:280px}.ccpe-actions button{flex:1;min-width:88px}.ccpe-spacer{display:none}.ccpe-frame{width:78vw;height:78vw}}</style><div class="ccpe-panel" role="dialog" aria-modal="true"><div class="ccpe-head"><b>${esc(title)}</b><div class="ccpe-help">Drag with one finger. Pinch to zoom. The white box is the crop area. Your original photo is preserved.</div></div><div class="ccpe-stage" id="ccpe-stage"><img class="ccpe-img" id="ccpe-img" alt="Coin photo"><div class="ccpe-frame"></div></div><div class="ccpe-actions"><button type="button" class="ccpe-secondary" id="ccpe-minus">−</button><button type="button" class="ccpe-secondary" id="ccpe-plus">+</button><button type="button" class="ccpe-secondary" id="ccpe-reset">Reset view</button><span class="ccpe-spacer"></span><button type="button" class="ccpe-secondary" id="ccpe-original">Restore Original</button><button type="button" class="ccpe-primary" id="ccpe-save">Crop &amp; Use</button><button type="button" class="ccpe-danger" id="ccpe-cancel">Cancel</button></div></div>`;
    document.body.appendChild(overlay);
    const stage=overlay.querySelector('#ccpe-stage'),img=overlay.querySelector('#ccpe-img'),frame=overlay.querySelector('.ccpe-frame');
    img.src=dataUrl;
    let nw=1,nh=1,base=1,zoom=1,tx=0,ty=0,raf=0;
    const points=new Map();let dragStart=null,pinchStart=null;
    const sr=()=>stage.getBoundingClientRect(),fr=()=>frame.getBoundingClientRect();
    function paint(){if(raf)return;raf=requestAnimationFrame(()=>{raf=0;img.style.transform=`translate3d(${tx}px,${ty}px,0) scale(${zoom})`;});}
    function setBaseImage(){img.style.width=`${nw*base}px`;img.style.height=`${nh*base}px`;}
    function fit(){const a=sr(),b=fr();base=Math.max(b.width/nw,b.height/nh);zoom=1;setBaseImage();tx=(a.width-nw*base)/2;ty=(a.height-nh*base)/2;paint();}
    function clamp(){const a=sr(),b=fr(),w=nw*base*zoom,h=nh*base*zoom,fx=(a.width-b.width)/2,fy=(a.height-b.height)/2;tx=Math.min(fx,Math.max(fx+b.width-w,tx));ty=Math.min(fy,Math.max(fy+b.height-h,ty));paint();}
    function zoomAt(f,cx,cy){const nz=Math.max(1,Math.min(5,zoom*f));const ax=(cx-tx)/zoom,ay=(cy-ty)/zoom;tx=cx-ax*nz;ty=cy-ay*nz;zoom=nz;clamp();}
    function doCrop(){const a=sr(),b=fr(),fx=(a.width-b.width)/2,fy=(a.height-b.height)/2,s=base*zoom;const crop={x:Math.max(0,Math.min(nw-b.width/s,(fx-tx)/s)),y:Math.max(0,Math.min(nh-b.height/s,(fy-ty)/s)),width:Math.min(nw,b.width/s),height:Math.min(nh,b.height/s)};cropper().cropImage(dataUrl,crop).then(r=>{onConfirm(r);close();}).catch(()=>{});}
    img.onload=()=>requestAnimationFrame(()=>{nw=img.naturalWidth||1;nh=img.naturalHeight||1;fit();});
    overlay.querySelector('#ccpe-plus').onclick=()=>{const a=sr();zoomAt(1.2,a.width/2,a.height/2)};
    overlay.querySelector('#ccpe-minus').onclick=()=>{const a=sr();zoomAt(1/1.2,a.width/2,a.height/2)};
    overlay.querySelector('#ccpe-reset').onclick=fit;
    overlay.querySelector('#ccpe-original').onclick=()=>{if(onRestore)onRestore();close();};
    overlay.querySelector('#ccpe-cancel').onclick=close;
    overlay.querySelector('#ccpe-save').onclick=doCrop;

    function localPoint(e){const a=sr();return{x:e.clientX-a.left,y:e.clientY-a.top};}
    stage.addEventListener('pointerdown',e=>{
      e.preventDefault();stage.setPointerCapture?.(e.pointerId);points.set(e.pointerId,localPoint(e));
      if(points.size===1){const p=[...points.values()][0];dragStart={px:p.x,py:p.y,tx,ty};pinchStart=null;}
      else if(points.size===2){const p=[...points.values()];const mx=(p[0].x+p[1].x)/2,my=(p[0].y+p[1].y)/2;pinchStart={dist:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y),zoom,anchorX:(mx-tx)/zoom,anchorY:(my-ty)/zoom};dragStart=null;}
    });
    stage.addEventListener('pointermove',e=>{
      if(!points.has(e.pointerId))return;e.preventDefault();points.set(e.pointerId,localPoint(e));
      if(points.size===1&&dragStart){const p=[...points.values()][0];tx=dragStart.tx+(p.x-dragStart.px);ty=dragStart.ty+(p.y-dragStart.py);paint();}
      else if(points.size===2&&pinchStart){const p=[...points.values()];const mx=(p[0].x+p[1].x)/2,my=(p[0].y+p[1].y)/2,d=Math.max(1,Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y));const nz=Math.max(1,Math.min(5,pinchStart.zoom*(d/pinchStart.dist)));tx=mx-pinchStart.anchorX*nz;ty=my-pinchStart.anchorY*nz;zoom=nz;paint();}
    },{passive:false});
    function end(e){if(!points.has(e.pointerId))return;points.delete(e.pointerId);if(points.size===1){const p=[...points.values()][0];dragStart={px:p.x,py:p.y,tx,ty};pinchStart=null;}else{dragStart=null;pinchStart=null;}clamp();}
    stage.addEventListener('pointerup',end);stage.addEventListener('pointercancel',end);
    stage.addEventListener('wheel',e=>{e.preventDefault();const a=sr();zoomAt(e.deltaY<0?1.08:1/1.08,e.clientX-a.left,e.clientY-a.top);},{passive:false});
  }
  window.CoinChimePhotoEditor={open};
})();
