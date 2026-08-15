// Staging certification data helper. The live catalog is not changed by this file.
(function () {
  window.LewisCatalogCertification = {
    empty() { return { service: '', number: '', grade: '', url: '' }; },
    normalize(value) {
      const v = value || {};
      return {
        service: String(v.service || ''),
        number: String(v.number || ''),
        grade: String(v.grade || ''),
        url: String(v.url || '')
      };
    },
    hasVerificationLink(value) {
      return Boolean(this.normalize(value).url);
    }
  };
})();
