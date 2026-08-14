/* Lewis Private Collections - persistence guard
   Keeps a secondary localStorage mirror so normal refreshes/app updates do not
   accidentally start the catalog from an empty collection. It never deletes
   the primary catalog key. */
(() => {
  const PRIMARY = 'lewis-private-collections-v8';
  const MIRROR = 'lewis-private-collections-persistence-mirror-v1';
  const LEGACY = ['lewis-private-collections-v7'];

  function readJson(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const value = JSON.parse(raw);
      return Array.isArray(value) ? value : null;
    } catch (_) { return null; }
  }

  function writeMirror(raw) {
    if (!raw) return;
    try {
      localStorage.setItem(MIRROR, JSON.stringify({ savedAt: new Date().toISOString(), raw }));
    } catch (_) {}
  }

  function recover() {
    try {
      const primary = readJson(PRIMARY);
      if (primary && primary.length) return primary;

      let recovered = null;
      const mirrorRaw = localStorage.getItem(MIRROR);
      if (mirrorRaw) {
        try {
          const parsed = JSON.parse(mirrorRaw);
          recovered = JSON.parse(parsed.raw);
        } catch (_) {}
      }
      if (!Array.isArray(recovered) || recovered.length === 0) {
        for (const key of LEGACY) {
          const legacy = readJson(key);
          if (legacy && legacy.length) { recovered = legacy; break; }
        }
      }
      if (Array.isArray(recovered) && recovered.length) {
        localStorage.setItem(PRIMARY, JSON.stringify(recovered));
        return recovered;
      }
    } catch (_) {}
    return null;
  }

  recover();

  // If this helper is injected before the catalog's inline script, the catalog
  // has not created window.render yet. Refresh the catalog after startup so a
  // recovered collection is displayed without requiring a search keystroke.
  function refreshCatalog() {
    try {
      if (typeof window.render === 'function') {
        window.render();
      } else {
        window.dispatchEvent(new CustomEvent('lewis-catalog-data-ready'));
      }
    } catch (_) {}
  }
  [0, 50, 250, 1000].forEach(ms => setTimeout(refreshCatalog, ms));

  try {
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key, value) {
      const result = originalSetItem.call(this, key, value);
      if (this === localStorage && key === PRIMARY) {
        writeMirror(value);
        setTimeout(refreshCatalog, 0);
      }
      return result;
    };

    const existing = localStorage.getItem(PRIMARY);
    if (existing) writeMirror(existing);
  } catch (_) {}
})();
