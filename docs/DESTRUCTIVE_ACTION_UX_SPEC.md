# Destructive Action UX Specification

The catalog must make accidental data loss difficult without making ordinary use frustrating.

## Item deletion
- The primary action is labeled `Delete`, never an ambiguous icon alone.
- Deleting an item first moves it to Recently Deleted/Trash when the storage implementation supports recovery.
- Confirmation text should identify the item being deleted.
- The user should be told that the item can be restored while it remains in the recovery window, without promising indefinite recovery.

## Whole-collection deletion
- Treat deletion of an entire collection as a high-risk action.
- Do not place the destructive action beside ordinary navigation controls where an accidental tap is easy.
- Show the collection name and affected item count when available.
- Require a deliberate confirmation step; for especially large collections, require typing `DELETE` or an equivalent deliberate confirmation.
- Move the collection to a recoverable state before permanent deletion when technically practical.

## Permanent deletion
- Use a separate action from normal Delete/Trash.
- Clearly label it `Permanently delete`.
- Explain that recovery may no longer be possible after permanent deletion or expiration of all recoverable copies.
- Do not advertise permanent-deletion recovery as guaranteed.

## Restore
- Normal restore should be self-service.
- Restoring an item must not create a duplicate record.
- Restoring a collection must return records to the existing account/collection structure.
- Re-authentication may be required before restoring a collection or backup.

## Backup reminder
- Destructive-action screens should provide a concise reminder that users should maintain their own downloaded backup.
- Do not interrupt routine deletion with excessive warnings; use stronger friction only when the scope of the deletion is large.

## Administrator recovery
- Administrator recovery is an exception path, not the normal user experience.
- It must require appropriate authorization and produce an audit record.
- The administrator interface should expose only the minimum information needed to determine whether a recoverable copy exists and to perform an approved restore.

## Performance
- Trash and recovery bookkeeping should be implemented without repeatedly rewriting unrelated catalog records.
- Large collections should use bounded metadata and incremental operations rather than cloning the entire collection repeatedly in the UI.
