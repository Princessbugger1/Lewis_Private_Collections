# Physical Details Integration

The first live feature module is now stored at `features/physical-details.js`.

## Fields planned for the catalog
- Composition / metal (for example, 90% silver / 10% copper)
- Expected/reference weight
- Actual measured weight
- Optional metal-test result

## Behavior
- These fields are optional.
- Existing records are migrated by adding an empty `physicalDetails` container only when it does not already exist.
- Existing values are never overwritten by migration.
- Settings can later hide these sections without deleting stored values.
- A measured weight is recorded separately from the reference weight so an older coin's natural weight loss can be documented rather than treated as an automatic error.

## Integration status
The module is committed separately before being loaded by the main catalog. This keeps the current live catalog protected while the UI integration is tested.
