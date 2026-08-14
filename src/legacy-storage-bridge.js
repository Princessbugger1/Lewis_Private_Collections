// Safe bridge for the first catalog integration step.
// It deliberately does NOT replace or mutate the existing UI.
import { STORAGE_KEY, loadRecords, saveRecords } from './storage.js';

export function inspectLegacyStorage(storage = globalThis.localStorage) {
  const records = loadRecords(storage);
  return {
    storageKey: STORAGE_KEY,
    count: records.length,
    records
  };
}

export function migrateLegacyStorage(storage = globalThis.localStorage) {
  const before = loadRecords(storage);
  const after = saveRecords(before, storage);
  return {
    beforeCount: before.length,
    afterCount: after.length,
    idsAdded: after.filter((record, index) => !before[index]?.id && record.id).length
  };
}
