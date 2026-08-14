import assert from 'node:assert/strict';
import { migrateRecordIdentity, migrateRecords } from '../src/legacy-id-migration.js';

const makeId = () => 'generated-1';
const legacy = { type: 'Test coin', year: '1943', series: 'Wheat Cents' };
const migrated = migrateRecordIdentity(legacy, makeId);
assert.equal(migrated.id, 'generated-1');
assert.equal(migrated.year, '1943');
assert.equal(migrated.series, 'Wheat Cents');

const existing = { ...legacy, id: 'keep-me' };
assert.equal(migrateRecordIdentity(existing, makeId), existing);

const records = migrateRecords([legacy, existing], () => 'generated-2');
assert.equal(records[0].id, 'generated-2');
assert.equal(records[1].id, 'keep-me');

console.log('Legacy ID module checks passed.');
