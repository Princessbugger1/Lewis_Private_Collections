/* Lewis Private Collections — optional physical details module
 * Safe by design: never deletes existing record fields.
 * Integration target: index.html after migration/backup testing.
 */
(function () {
  'use strict';

  const SETTINGS_KEY = 'lewis-private-collections-settings-v1';
  const DEFAULTS = {
    composition: true,
    weight: true,
    metalTest: false
  };

  function getSettings() {
    try {
      return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}'));
    } catch (_) {
      return Object.assign({}, DEFAULTS);
    }
  }

  function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  function migrateRecord(record) {
    if (!record || typeof record !== 'object') return record;
    // Add only missing containers; preserve every existing value.
    if (!Object.prototype.hasOwnProperty.call(record, 'physicalDetails')) {
      record.physicalDetails = {};
    }
    return record;
  }

  function migrateCollection(items) {
    return Array.isArray(items) ? items.map(migrateRecord) : items;
  }

  function cycleThreeState(value) {
    return value === 'yes' ? 'no' : value === 'no' ? 'unknown' : 'yes';
  }

  window.LewisPhysicalDetails = {
    getSettings,
    saveSettings,
    migrateRecord,
    migrateCollection,
    cycleThreeState
  };
})();
