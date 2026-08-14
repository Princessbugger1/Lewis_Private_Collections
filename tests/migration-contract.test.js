import assert from 'node:assert/strict';
import { catalogData } from '../src/catalog-adapter.js';

// This contract intentionally uses a tiny in-memory storage object.
// It proves the adapter can be adopted without depending on the current UI.
const values = new Map([
  ['lewis-private-collections-v8', JSON.stringify([
    { id: 'coin-1', type: 'Test coin', series: 'Series A' }
  ])]
]);
const storage = {
  getItem: key => values.get(key) ?? null,
  setItem: (key, value) => values.set(key, value)
};

const data = catalogData(storage);
const before = data.list()[0];
assert.equal(before.id, 'coin-1');

const afterMove = data.move('coin-1', { area: 'Collection 2' });
assert.equal(afterMove[0].id, before.id);
assert.equal(afterMove[0].area, 'Collection 2');

const afterRemove = data.removeFromSeries('coin-1');
assert.equal(afterRemove[0].id, before.id);
assert.equal(afterRemove[0].series, '');

console.log('Migration contract passed: record identity survives non-delete operations.');
