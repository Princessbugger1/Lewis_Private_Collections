// Non-destructive identity migration for older catalog records.
export function migrateRecordIdentity(record, makeId) {
  if (!record || record.id) return record;
  return { ...record, id: makeId() };
}

export function migrateRecords(records, makeId) {
  return Array.isArray(records)
    ? records.map(record => migrateRecordIdentity(record, makeId))
    : [];
}
