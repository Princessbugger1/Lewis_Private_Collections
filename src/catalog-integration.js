// First catalog integration contract.
// This module is intentionally UI-agnostic so the existing index.html can adopt it
// later without changing the current form, rendering, or settings behavior.
import { migrateLegacyStorage } from './legacy-storage-bridge.js';

export function prepareCatalogStorage(storage = globalThis.localStorage) {
  return migrateLegacyStorage(storage);
}
