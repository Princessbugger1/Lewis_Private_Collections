/* Lewis Private Collections — open classification helper
 * Staged separately so it can be integrated into the main catalog without
 * changing existing records. The classification field is intentionally open
 * ended: common categories are suggestions, not a closed list.
 */
(function () {
  'use strict';
  const suggestions = [
    'Coins','Tokens','Medals','Paper Money','Sets','Other',
    'Commemorative','Counterfeit','Bullion','Ancient','Exonumia'
  ];
  window.LewisCategoryFlexibility = {
    suggestions: Object.freeze(suggestions.slice()),
    isEditable: true,
    normalize(value) { return String(value ?? '').trim(); }
  };
})();
