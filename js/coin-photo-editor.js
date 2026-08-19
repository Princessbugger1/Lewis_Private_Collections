/* Coin Chime — lightweight main-photo crop/inspect editor.
 * Opens from the Obverse / Face photo workflow. No extra stored thumbnail.
 */
(function () {
  'use strict';
  const cropper = () => window.CoinChimePhotoCrop;
  let overlay = null;
  let source = '';
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;
  let startX = 0;
  let startY = 0;

  function close() { if (overlay) overlay.remove(); overlay = null; source = ''; }

  function open(dataUrl, onConfirm) {
    if (!dataUrl || !cropper()) return;
    close(); source = dataUrl; scale = 1; offsetX = 0; offsetY = 0;
    overlay = document.createElement('div');
    overlay.innerHTML = `<div style="position:fixed;inset:0;background:#111d;z-index:9999;display:flex;align-items:center;justify-content:center;padding:14px"><div style="background:#fff;border-radius:14px;padding:12px;width:min(760px,100%);max-height:96vh;display:flex;flex-direction:column;gap:9px"><b style="font-size:16px">Main coin photo</b><div style="font-size:12px;color:#6b7280">Pinch or use + / − to zoom. Drag to position. Crop only when you want to change the saved image.</div><div id="ccpe-stage" style="position:relative;height:min(62vh,520px);overflow:hidden;background:#f3f4f6;border-radius:10px;touch-action:none"><img id="ccpe-img" alt="Coin photo" style="position:absolute;left:50%;top:50%;max-width:none;transform-origin:center center;user-select:none"></div><div style="display:flex;gap:7px;flex-wrap:wrap"><button type="button" id="ccpe-minus" class="secondary">−</button><button type="button" id="ccpe-plus" class="secondary">+</button><button type="button" id="ccpe-crop" class="primary" style="margin-left:auto">Crop & use</button><button type="button" id="ccpe-close" class="secondary">Cancel</button></div></div></div>`;
    document.body.appendChild(overlay);
    const stage = overlay.querySelector('#ccpe-stage'); const img = overlay.querySelector('#ccpe-img');
    img.src = source;
    const paint = () => { img.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(${scale})`; };
    overlay.querySelector('#ccpe-plus').onclick = () => { scale = Math.min(4, scale * 1.2); paint(); };
    overlay.querySelector('#ccpe-minus').onclick = () => { scale = Math.max(.5, scale / 1.2); paint(); };
    overlay.querySelector('#ccpe-close').onclick = close;
    stage.onpointerdown = e => { dragging = true; startX = e.clientX - offsetX; startY = e.clientY - offsetY; stage.setPointerCapture?.(e.pointerId); };
    stage.onpointermove = e => { if (!dragging) return; offsetX = e.clientX - startX; offsetY = e.clientY - startY; paint(); };
    stage.onpointerup = () => { dragging = false; };
    stage.onwheel = e => { e.preventDefault(); scale = Math.max(.5, Math.min(4, scale * (e.deltaY < 0 ? 1.1 : .9))); paint(); };
    overlay.querySelector('#ccpe-crop').onclick = async () => {
      const rect = stage.getBoundingClientRect();
      const image = new Image();
      image.onload = async () => {
        const displayedW = image.naturalWidth * scale;
        const displayedH = image.naturalHeight * scale;
        const cropW = Math.min(rect.width, displayedW);
        const cropH = Math.min(rect.height, displayedH);
        const cropX = Math.max(0, Math.min(image.naturalWidth - cropW / scale, (image.naturalWidth - rect.width / scale) / 2 - offsetX / scale));
        const cropY = Math.max(0, Math.min(image.naturalHeight - cropH / scale, (image.naturalHeight - rect.height / scale) / 2 - offsetY / scale));
        const result = await cropper().cropImage(source, { x: cropX, y: cropY, width: cropW / scale, height: cropH / scale });
        onConfirm(result); close();
      };
      image.src = source;
    };
    paint();
  }
  window.CoinChimePhotoEditor = { open };
})();
