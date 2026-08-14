import assert from 'node:assert/strict';
import { ensureId } from '../src/storage.js';

// Legacy records may have no ID. Migration must preserve every existing field
// while adding exactly the missing identity field.
const legacy = {
  category: 'Coins',
  country: 'United States',
  type: 'Wheat Penny',
  year: '1943',
  mint: 'D',
  series: 'Lincoln Wheat Cents',
  quantity: '1',
  notes: 'Legacy test record'
};

const migrated = ensureId(legacy);
assert.ok(migrated.id, 'Legacy records must receive an ID.');
for (const [key, value] of Object.entries(legacy)) {
  assert.equal(migrated[key], value, `Legacy field ${key} must be preserved.`);
}
assert.equal(Object.keys(migrated).filter(k => k === 'id').length, 1);

const alreadyIdentified = { ...legacy, id: 'existing-id' };
const unchanged = ensureId(alreadyIdentified);
assert.equal(unchanged, alreadyIdentified, 'Existing IDs must not be replaced.');
assert.equal(unchanged.id, 'existing-id');

console.log('Legacy ID migration checks passed.');
