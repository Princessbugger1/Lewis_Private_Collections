# Item Deletion Safety Rules

Deletion must be deliberate and recoverable where practical.

## UI
- Delete is a distinct action from editing, hiding, archiving, and removing a series/category.
- The delete control should be visible but not positioned where accidental taps are likely.
- On touch devices, require an explicit confirmation before deleting an item.
- Confirmation should identify the item sufficiently for the user to verify what is being deleted.

## Recovery
- Prefer a Trash/Recently Deleted state before permanent deletion.
- Deleted items should remain recoverable for the configured retention period.
- Restoring an item must restore its associated metadata and attachments where available.
- Permanent deletion requires a second explicit confirmation and should clearly state that recovery will no longer be possible.

## Separation
- Hiding a category, series, or item is never equivalent to deletion.
- Removing an item from a series is never item deletion.
- Rejecting an identification suggestion is never item deletion.
- Deleting a group/series must never delete its member items.
