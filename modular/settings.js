// Staging settings controller. The live catalog is not changed by this file.
// Optional sections are independent and retain saved information when hidden.
(function () {
  const defaults = {
    coa: true,
    photos: true,
    paperMoney: true,
    certification: true,
    backup: true,
    ogp: true,
    originalBox: true,
    sigma: true,
    photosComplete: true,
    variety: true
  };
  window.LewisCatalogSettings = {
    defaults,
    load() {
      try { return { ...defaults, ...JSON.parse(localStorage.getItem('lewis-settings') || '{}') }; }
      catch (_) { return { ...defaults }; }
    },
    save(settings) { localStorage.setItem('lewis-settings', JSON.stringify(settings)); },
    toggle(settings, key) {
      if (!(key in settings)) return settings;
      const next = { ...settings, [key]: !settings[key] };
      this.save(next);
      return next;
    },
    apply(settings) {
      const map = {
        coa: 'coaSection', photos: 'photosSection',
        paperMoney: 'paperMoneySection', certification: 'certSection',
        backup: 'backupSection'
      };
      Object.entries(map).forEach(([key, id]) => {
        const el = document.getElementById(id);
        if (el) el.hidden = settings[key] === false;
      });
    }
  };
})();
