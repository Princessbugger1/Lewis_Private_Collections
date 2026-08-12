# Trash, Restore, and Permanent Delete

Deleting a coin from the active collection should be reversible first.

## User flow
1. Coin row/details has a clearly labeled Delete action.
2. Delete moves the record to Trash rather than immediately destroying it.
3. Trash has Restore and Permanently Delete actions.
4. Empty Trash permanently deletes all records currently in Trash after an explicit confirmation.

## Safety
- Delete and Empty Trash are visually separated from normal editing.
- Empty Trash requires a confirmation that explains the action cannot be undone.
- A record's photos, notes, inventory number, history, and group membership should remain intact when moved to Trash.
- Restoring a record returns it to the active collection without creating a duplicate.
- Permanent deletion should not silently affect unrelated records.

## Organization
Trash status is separate from custom groups, storage location, and inventory number. A deleted coin can therefore be restored without losing its organization metadata.

## Empty state
If Trash is empty, show a simple message rather than a destructive control.
