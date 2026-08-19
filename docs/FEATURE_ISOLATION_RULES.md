# Feature Isolation Rules

## Goal
Keep optional catalog features removable, testable, and replaceable without destabilizing core collection data.

## Architecture rule
Core data and core record editing must not depend on optional presentation features such as hover previews, mascots, animations, or optional panels.

## Feature boundaries
Each optional feature should have a clearly identified module, stylesheet section, or script block. New feature code should avoid changing unrelated record schemas unless necessary.

## Removal rule
A feature should be removable by disabling or deleting its isolated code and any explicitly documented hooks. Removing an optional feature must not delete collection records or photographs.

## Failure behavior
If an optional feature fails to initialize, the catalog should continue loading and the core record workflow should remain usable.

## Reintroduction
Removed features should be able to be restored from version control without reconstructing the collection database or manually re-entering user data.

## Testing checklist
Before shipping a feature, test normal operation, disabled operation, failure to initialize, removal, and reintroduction. Verify collection add/edit/search, photos, backup/restore, and navigation remain functional.
