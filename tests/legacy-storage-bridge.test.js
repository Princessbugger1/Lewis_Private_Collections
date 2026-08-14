import assert from 'node:assert/strict';
import { STORAGE_KEY } from '../src/storage.js';
import { inspectLegacyStorage, migrateLegacyStorage } from '../src/legacy-storage-bridge.js';

const values = new Map([
  [STORAGE_KEY, JSON.stringify([
    { type: 'Bridge test coin', year: '1910', series: 'Test Series' }
  ])]
]);
const storage = {
  getItem: key => values.get(key) ?? null,
  setItem: (key, value) => values.set(key, value)
};

const before = inspectLegacyStorage(storage);
assert.equal(before.count, 1);
assert.equal(before.records[0].type, 'Bridge test coin');

const result = migrateLegacyStorage(storage);
assert.equal(result.beforeCount, 1);
assert.equal(result.afterCount, 1);
assert.equal(result.idsAdded, 1);

const after = inspectLegacyStorage(storage);
assert.equal(after.count, 1);
assert.ok(after.records[0].id);
assert.equal(after.records[0].type, 'Bridge test coin');
assert.equal(after.records[0].year, '1910');
assert.equal(after.records[0].series, 'Test Series');

console.log('Legacy storage bridge checks passed.');
