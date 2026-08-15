// Staging photo persistence helper. It is not connected to the live catalog yet.
(function () {
  const key = 'lewis-photo-staging-v1';
  window.LewisCatalogPhotos = {
    async read(file) {
      if (!file) return null;
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
    save(photos) {
      localStorage.setItem(key, JSON.stringify(photos || []));
    },
    load() {
      try { return JSON.parse(localStorage.getItem(key) || '[]'); }
      catch (_) { return []; }
    },
    preview(img, data) {
      if (!img) return;
      if (data) { img.src = data; img.hidden = false; }
      else { img.removeAttribute('src'); img.hidden = true; }
    }
  };
})();
