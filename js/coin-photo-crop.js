/* Coin Chime — main coin photo crop component
 * Design: crop only the primary/first coin photo. The resulting image is the
 * catalog image/thumbnail. Do not create a separate full-size thumbnail.
 * Integration note: load this module from index.html when the photo editor UI
 * is wired into the main photo1 workflow.
 */
(function () {
  'use strict';

  const MAX_OUTPUT = 1600;
  const JPEG_QUALITY = 0.88;

  function cropImage(dataUrl, crop, rotation = 0) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const radians = (rotation % 360) * Math.PI / 180;
        const sin = Math.abs(Math.sin(radians));
        const cos = Math.abs(Math.cos(radians));
        const rotatedWidth = image.width * cos + image.height * sin;
        const rotatedHeight = image.width * sin + image.height * cos;
        const scale = Math.min(1, MAX_OUTPUT / Math.max(crop.width, crop.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(crop.width * scale));
        canvas.height = Math.max(1, Math.round(crop.height * scale));
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return reject(new Error('Canvas unavailable'));
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(radians);
        const drawScale = Math.max(rotatedWidth / image.width, rotatedHeight / image.height);
        ctx.drawImage(
          image,
          -image.width * drawScale * scale / 2,
          -image.height * drawScale * scale / 2,
          image.width * drawScale * scale,
          image.height * drawScale * scale
        );
        ctx.restore();
        resolve(canvas.toDataURL('image/jpeg', JPEG_QUALITY));
      };
      image.onerror = reject;
      image.src = dataUrl;
    });
  }

  window.CoinChimePhotoCrop = { cropImage, MAX_OUTPUT, JPEG_QUALITY };
})();
