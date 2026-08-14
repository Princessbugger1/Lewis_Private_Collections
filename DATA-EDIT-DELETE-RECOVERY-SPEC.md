# Data Edit, Delete & Recovery Specification

The catalog must remain fully editable and reversible after records are created.

## Editing
- Any user-entered field may be corrected later.
- Saving an edit changes only the selected record and approved fields.
- Research suggestions never silently overwrite an existing value.

## Deleting
- Deleting a record requires an explicit user action.
- A confirmation step should identify the record before destructive deletion.
- Where practical, use a recoverable trash/undo period before permanent deletion.
- Deleting a record must not delete unrelated photos, records, or settings.

## Undo/recovery
- An edit should be undoable where practical, or the system should retain enough revision information to recover from an accidental change.
- Export/backup should remain available before commercial launch.
- Category visibility changes must never delete records.

## Sharing
- Unsharing changes visibility only; it does not alter the owner's record.
- Revoking a share does not delete the owner's collection.

## Safety rule
Every destructive operation must be explicit, scoped to the intended record, and designed so an accidental action cannot silently wipe the collection.
