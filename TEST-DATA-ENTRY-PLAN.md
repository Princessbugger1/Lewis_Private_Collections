# Safe Real-Coin Test Entry Plan

Before entering a large collection, use a small set of real coins to validate the catalog workflow.

## Test records
Use a representative handful of real coins, including records with:
- A mint mark that may need correction
- Photos
- Optional verification/research fields
- A record with a value/notes field
- At least one category that can be hidden and shown

## Workflow tests
1. Add a real coin and save it.
2. Close/reopen the catalog and confirm the record remains.
3. Edit a field (for example, correct the mint mark) and save.
4. Add or replace a photo.
5. Test research suggestions without allowing them to silently overwrite user-entered facts.
6. Mark a record Shared, verify it appears only in the read-only view, then unshare it.
7. Hide an optional category and verify its records remain intact.
8. Export/backup the test data when that feature is available.
9. Test delete/undo/recovery before entering a large collection.

## Safety rule
Do not use bulk real-collection entry until the basic add/edit/save/reopen and recovery tests pass. Test records are real collection records and should remain recoverable; they are not disposable dummy data.
