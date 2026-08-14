import assert from 'node:assert/strict';
import { STORAGE_KEY, migrateStoredRecords } from '../src/storage.js';

const values = new Map([
  [STORAGE_KEY, JSON.stringify([
    { type: 'Legacy coin', year: '1900', series: 'Legacy Series' }
  ])]
]);
const storage = {
  getItem: key => values.get(key) ?? null,
  setItem: (key, value) => values.set(key, value)
};

const migrated = migrateStoredRecords(storage);
assert.equal(migrated.length, 1);
assert.ok(migrated[0].id);
assert.equal(migrated[0].type, 'Legacy coin');
assert.equal(migrated[0].year, '1900');
assert.equal(migrated[0].series, 'Legacy Series');

const saved = JSON.parse(values.get(STORAGE_KEY));
assert.equal(saved[0].id, migrated[0].id);
assert.equal(saved[0].type, 'Legacy coin');

console.log('Stored-record migration checks passed.');
