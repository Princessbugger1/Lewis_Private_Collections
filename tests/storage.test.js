import assert from 'node:assert/strict';
import {
  ensureId,
  moveRecord,
  removeFromSeries,
  deleteRecord
} from '../src/storage.js';

const original = ensureId({ type: 'Morgan Dollar', series: 'Morgan Dollars' });
assert.ok(original.id, 'Every record needs a stable ID.');

const moved = moveRecord([original], original.id, { series: 'U.S. Silver Dollars' });
assert.equal(moved.length, 1);
assert.equal(moved[0].id, original.id);
assert.equal(moved[0].series, 'U.S. Silver Dollars');

const removed = removeFromSeries([original], original.id);
assert.equal(removed.length, 1);
assert.equal(removed[0].id, original.id);
assert.equal(removed[0].series, '');

const deleted = deleteRecord([original], original.id);
assert.equal(deleted.length, 0);

console.log('Storage behavior checks passed.');
