/* Coin Chime — connect all three edit photos to the same inspect/crop editor.
 * Obverse / Face, Reverse, and Edge are independent.
 * Cropping writes back to that photo's own file input so the existing save logic
 * stores the cropped image without creating a second thumbnail copy.
 */
(function () {
  'use strict';

  const PHOTO_IDS = ['photo1', 'photo2', 'photo3'];

  function dataUrlToFile(dataUrl, filename) {
    const parts = dataUrl.split(',');
    const mime = (parts[0].match(/data:([^;]+)/) || [,'image/jpeg'])[1];
    const bytes = atob(parts[1]);
    const array = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) array[i] = bytes.charCodeAt(i);
    return new File([array], filename, { type: mime });
  }

  function putFileInInput(input, dataUrl, index) {
    try {
      const file = dataUrlToFile(dataUrl, `coin-photo-${index + 1}.jpg`);
      const transfer = new DataTransfer();
      transfer.items.add(file);
      input.files = transfer.files;
      return true;
    } catch (_) {
      return false;
    }
  }

  function photoTitle(index) {
    return ['Obverse / Face', 'Reverse', 'Edge'][index] || 'Coin photo';
  }

  function openEditor(index, dataUrl) {
    if (!dataUrl || !window.CoinChimePhotoEditor) return;
    window.CoinChimePhotoEditor.open(dataUrl, result => {
      const input = document.getElementById(PHOTO_IDS[index]);
      const preview = document.getElementById(`preview${index + 1}`);
      if (!input || !preview) return;
      putFileInInput(input, result, index);
      preview.src = result;
      preview.hidden = false;
      preview.dataset.cropped = '1';
      preview.title = `${photoTitle(index)} — cropped`;
    });
  }

  function readInput(input) {
    const file = input && input.files && input.files[0];
    if (!file) return Promise.resolve(null);
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  function wirePhoto(index) {
    const input = document.getElementById(PHOTO_IDS[index]);
    const preview = document.getElementById(`preview${index + 1}`);
    if (!input || !preview) return;

    input.addEventListener('change', async () => {
      const dataUrl = await readInput(input);
      if (dataUrl) openEditor(index, dataUrl);
    });

    preview.addEventListener('click', () => {
      if (preview.src && !preview.hidden) openEditor(index, preview.src);
    });
    preview.style.cursor = 'zoom-in';
    preview.title = `${photoTitle(index)} — tap to inspect or crop`;
  }

  function init() {
    PHOTO_IDS.forEach((_, index) => wirePhoto(index));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
