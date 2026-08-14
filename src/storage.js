// Lewis Private Collections — data/storage foundation.
// This module is intentionally independent of the current UI so it can be tested safely.

export const STORAGE_KEY = 'lewis-private-collections-v8';

export function makeId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `coin-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function ensureId(record) {
  return record && record.id ? record : { ...record, id: makeId() };
}

export function loadRecords(storage = globalThis.localStorage) {
  try {
    const raw = storage?.getItem(STORAGE_KEY);
    const records = JSON.parse(raw || '[]');
    return Array.isArray(records) ? records.map(ensureId) : [];
  } catch {
    return [];
  }
}

export function saveRecords(records, storage = globalThis.localStorage) {
  const normalized = records.map(ensureId);
  storage?.setItem(STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

export function moveRecord(records, id, destination) {
  return records.map(record =>
    record.id === id ? { ...record, ...destination } : record
  );
}

export function removeFromSeries(records, id) {
  return records.map(record =>
    record.id === id ? { ...record, series: '' } : record
  );
}

export function deleteRecord(records, id) {
  return records.filter(record => record.id !== id);
}

// Non-destructive migration for older saved records.
// It assigns IDs in memory and persists the migrated records only when requested.
export function migrateStoredRecords(storage = globalThis.localStorage) {
  const records = loadRecords(storage);
  return saveRecords(records, storage);
}
