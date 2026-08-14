/* Lewis Private Collections - refresh-safe persistence guard */
(() => {
  const PRIMARY = 'lewis-private-collections-v8';
  const MIRROR = 'lewis-private-collections-persistence-mirror-v1';
  const LEGACY = ['lewis-private-collections-v7'];
  const RELOAD_FLAG = 'lewis-private-collections-recovery-reload-v1';

  function readJson(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const value = JSON.parse(raw);
      return Array.isArray(value) ? value : null;
    } catch (_) { return null; }
  }

  function recover() {
    const primary = readJson(PRIMARY);
    if (primary && primary.length) return false;
    let recovered = null;
    try {
      const mirrorRaw = localStorage.getItem(MIRROR);
      if (mirrorRaw) {
        const parsed = JSON.parse(mirrorRaw);
        recovered = JSON.parse(parsed.raw);
      }
    } catch (_) {}
    if (!Array.isArray(recovered) || !recovered.length) {
      for (const key of LEGACY) {
        const legacy = readJson(key);
        if (legacy && legacy.length) { recovered = legacy; break; }
      }
    }
    if (!Array.isArray(recovered) || !recovered.length) return false;
    try { localStorage.setItem(PRIMARY, JSON.stringify(recovered)); } catch (_) { return false; }
    return true;
  }

  function writeMirror(raw) {
    if (!raw) return;
    try { localStorage.setItem(MIRROR, JSON.stringify({ savedAt: new Date().toISOString(), raw })); } catch (_) {}
  }

  try {
    const restored = recover();
    if (restored && !sessionStorage.getItem(RELOAD_FLAG)) {
      sessionStorage.setItem(RELOAD_FLAG, '1');
      location.reload();
      return;
    }
    sessionStorage.removeItem(RELOAD_FLAG);
  } catch (_) {}

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
