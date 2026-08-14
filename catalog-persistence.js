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
    } catch (_) {
      // If storage is full, the main catalog remains the source of truth.
    }
  }

  // If the current key is empty but a prior catalog exists, restore it before
  // the application is used. Also recover from the previous v7 key if needed.
  try {
    const primary = readJson(PRIMARY);
    if (!primary || primary.length === 0) {
      const mirrorRaw = localStorage.getItem(MIRROR);
      let recovered = null;
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
      }
    }
  } catch (_) {}

  // Mirror future catalog saves. This is intentionally installed after the
  // main app has loaded, but before the user can interact with it.
  try {
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key, value) {
      const result = originalSetItem.call(this, key, value);
      if (this === localStorage && key === PRIMARY) writeMirror(value);
      return result;
    };

    const existing = localStorage.getItem(PRIMARY);
    if (existing) writeMirror(existing);
  } catch (_) {}
})();
