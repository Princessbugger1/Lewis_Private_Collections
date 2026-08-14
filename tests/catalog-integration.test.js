import assert from 'node:assert/strict';
import { STORAGE_KEY } from '../src/storage.js';
import { prepareCatalogStorage } from '../src/catalog-integration.js';

const values = new Map([
  [STORAGE_KEY, JSON.stringify([
    { type: 'Integration test coin', year: '1921', series: 'Test Series' }
  ])]
]);
const storage = {
  getItem: key => values.get(key) ?? null,
  setItem: (key, value) => values.set(key, value)
};

const result = prepareCatalogStorage(storage);
assert.equal(result.beforeCount, 1);
assert.equal(result.afterCount, 1);
assert.equal(result.idsAdded, 1);

const saved = JSON.parse(values.get(STORAGE_KEY));
assert.equal(saved[0].type, 'Integration test coin');
assert.equal(saved[0].year, '1921');
assert.ok(saved[0].id);

console.log('Catalog integration contract passed.');
