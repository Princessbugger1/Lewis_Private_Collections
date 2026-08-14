import assert from 'node:assert/strict';
import { installCatalogShim } from '../src/catalog-shim.js';

const previous = globalThis.LewisCatalog;
try {
  const api = installCatalogShim({
    getItem: () => '[]',
    setItem: () => {}
  });
  assert.equal(api.version, 'storage-adapter-1');
  assert.ok(api.data);
  assert.deepEqual(api.data.list(), []);
  console.log('Catalog shim checks passed.');
} finally {
  if (previous === undefined) delete globalThis.LewisCatalog;
  else globalThis.LewisCatalog = previous;
}
