# Backup and Migration Plan

Before physical-detail fields are integrated into the main catalog, the application should create a versioned backup of the current collection data.

## Migration rules

1. Detect the existing record format.
2. Preserve every existing property unchanged.
3. Add missing optional properties only as empty values when needed.
4. Never replace a user-entered value with a default/reference value.
5. Record the data schema version.
6. If migration fails, retain the original data and allow rollback.

## Backup rules

- Offer an explicit collection export before migration.
- Keep the export compatible with future imports.
- Never treat a UI setting as permission to delete collection data.

## Initial physical fields

`composition`, `expectedWeight`, `actualWeight`, and `metalTest` are optional.
