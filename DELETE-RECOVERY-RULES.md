# Delete and Recovery Rules

Deletion must be deliberately different from hiding, filtering, removing an item from a series, retiring a classification, or any normal navigation action.

## Normal deletion
- Hiding a category, series, or item changes visibility only; it does not delete data.
- Removing an item from a series changes grouping only; the item remains in the collection.
- Retiring a classification preserves existing records that use it.
- Deleting an item requires an explicit confirmation.
- Where technically practical, deleted items go to a Recently Deleted/Trash area before permanent deletion.
- Recently Deleted items retain their stable IDs and recoverable data until permanently removed.
- Restore must put the item back without creating a duplicate record.
- Permanent deletion requires a separate, clearly labeled confirmation.
- Bulk deletion requires an additional confirmation that identifies the number and scope of affected records.
- Search, filters, country groups, series groups, and classification groups must never perform deletion as a side effect.
- Backup/export remains available independently of deletion so the user can preserve a copy before destructive actions.

## Whole-collection deletion
- Deleting an entire collection is treated as a high-risk destructive action.
- The confirmation must clearly identify the collection and the number of affected records when that count is available.
- Where technically practical, the deleted collection enters a recoverable Trash/Recently Deleted state before permanent deletion.
- Recovery should normally be self-service while a recoverable copy is available; administrator approval is not required for ordinary recovery.
- A user may be required to re-authenticate before restoring a deleted collection or backup.
- Restore must return records to the existing collection/account without creating duplicate records.
- If the normal recovery window has expired, the system may offer recovery from an available backup, but recovery is not guaranteed.
- Administrator recovery tools, where implemented, are for exceptional cases and must require appropriate authorization and maintain an audit trail.
- The product must not promise or advertise that permanently deleted data can always be recovered.
- User-facing guidance should encourage regular local exports/backups rather than reliance on recovery.
- Privacy and legal documentation should accurately state that recovery depends on an available recoverable copy or backup and may not be possible after permanent deletion or backup expiration.
