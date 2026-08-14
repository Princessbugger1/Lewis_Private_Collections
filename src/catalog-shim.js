// Safe browser-side integration shim.
// This file does not modify the existing catalog UI by itself.
// It exposes the new data layer for a later, separately tested integration step.
import { catalogData } from './catalog-adapter.js';

export function installCatalogShim(storage = globalThis.localStorage) {
  const api = catalogData(storage);
  const root = globalThis.LewisCatalog || {};
  globalThis.LewisCatalog = {
    ...root,
    data: api,
    version: 'storage-adapter-1'
  };
  return globalThis.LewisCatalog;
}
