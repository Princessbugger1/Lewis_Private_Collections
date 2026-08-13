/* Lewis Private Collections — phone-first optional section settings
   This module keeps optional sections independently switchable.
   OFF means hidden, never deleted. */
(function () {
  const KEY = 'lewis-private-collections-settings-v1';
  const defaults = {
    coa: false,
    photos: true,
    history: false,
    composition: true,
    quantity: true
  };

  function load() {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
    catch (_) { return { ...defaults }; }
  }

  function save(settings) {
    localStorage.setItem(KEY, JSON.stringify(settings));
    return settings;
  }

  function toggle(name) {
    const settings = load();
    if (!(name in settings)) return settings;
    settings[name] = !settings[name];
    return save(settings);
  }

  window.LewisCollectionSettings = { load, save, toggle };
})();
