# Catalog source modules

The catalog is being migrated in small, reversible steps.

- `storage.js` owns record persistence and record-level operations.
- `catalog-adapter.js` provides the UI boundary.
- The existing `index.html` remains the production UI until each migration step is verified.

Do not delete or rewrite `index.html` as part of this modularization. Each UI integration must be a separate, testable change.
