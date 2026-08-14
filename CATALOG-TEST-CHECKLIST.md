# Catalog Test Checklist

This is the controlled test sequence for the current catalog. It is intentionally small and repeatable.

## Smoke test

1. Open the catalog.
2. Confirm the page loads without an obvious script error.
3. Confirm the Add Item form is visible.
4. Add one temporary test coin with country, type, denomination, year, and mint.
5. Confirm the item appears in Collection and the total increases by one.
6. Edit that item and change one field.
7. Confirm the changed value remains after saving.
8. Cycle one applicable check through Unknown → Yes → No → Unknown and confirm each state persists.
9. Search for the temporary item and confirm filtering works.
10. Delete the temporary item and confirm the collection count returns to its prior value.

## Data-safety test

- Before any destructive test, save a backup.
- Never use a real collection item as the first deletion test.
- Confirm restore with a temporary test record before relying on it for real collection data.
- Do not treat a failed test as permission to overwrite working data; isolate and fix the smallest failing component.

## Next functional tests

- Photo add/edit persistence.
- Backup export/import.
- Category and composition filters.
- Phone / desktop / automatic display modes.
- Series assignment and removal behavior.
- U.S. date-to-series suggestions.
- Ancients and unusual/foreign coin entry without forcing U.S. series rules.
- Authentication/password flow before any real cloud data is introduced.
