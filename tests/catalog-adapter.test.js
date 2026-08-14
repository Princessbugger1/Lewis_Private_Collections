import assert from 'node:assert/strict';
import { catalogData } from '../src/catalog-adapter.js';

const backing = new Map();
const storage = {
  getItem(key) { return backing.has(key) ? backing.get(key) : null; },
  setItem(key, value) { backing.set(key, value); }
};

const data = catalogData(storage);
const seed = data.list();
assert.deepEqual(seed, []);

storage.setItem('lewis-private-collections-v8', JSON.stringify([
  { id: 'coin-1', type: 'Test coin', series: 'Series A' }
]));

const moved = data.move('coin-1', { series: 'Series B' });
assert.equal(moved[0].id, 'coin-1');
assert.equal(moved[0].series, 'Series B');

const removed = data.removeFromSeries('coin-1');
assert.equal(removed[0].id, 'coin-1');
assert.equal(removed[0].series, '');

const deleted = data.delete('coin-1');
assert.deepEqual(deleted, []);

console.log('Catalog adapter checks passed.');
