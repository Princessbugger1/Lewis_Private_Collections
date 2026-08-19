/* Coin Chime — main coin photo crop helper
 * Purpose: crop the first/main coin photo without creating a separate full-size thumbnail.
 * The host page can call window.CoinChimeCrop.resizeToCatalogImage(file, options).
 */
(function () {
  'use strict';

  const DEFAULT_MAX = 1600;
  const DEFAULT_QUALITY = 0.86;

  function loadImage(fileOrUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      if (typeof fileOrUrl === 'string') {
        img.src = fileOrUrl;
      } else {
        const url = URL.createObjectURL(fileOrUrl);
        img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
        img.src = url;
      }
    });
  }

  async function resizeToCatalogImage(file, options = {}) {
    const max = options.maxSize || DEFAULT_MAX;
    const quality = options.quality || DEFAULT_QUALITY;
    const img = await loadImage(file);
    const scale = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { alpha: false });
    ctx.drawImage(img, 0, 0, w, h);
    return canvas.toDataURL('image/jpeg', quality);
  }

  window.CoinChimeCrop = { resizeToCatalogImage };
})();
