# Local Storage Location and Migration

## Goal
Make local/self-storage flexible and understandable for one-time customers without tying the catalog to a particular computer or folder forever.

## User-selectable storage
Where platform permissions allow, let the user choose an appropriate collection storage location, such as device storage, an external drive, or another user-controlled location. Explain the implications before moving an active collection.

## Move collection
Provide a guided "Move Collection" workflow that:
1. Verifies the destination is available and has sufficient space.
2. Creates a safe copy of the collection.
3. Verifies the copy.
4. Switches the app to the verified location.
5. Only then offers to remove the old copy.

## Removable storage
If a collection is on an external/removable drive and the drive is disconnected:
- Do not treat the collection as deleted.
- Clearly state that the storage location is unavailable.
- Allow the user to reconnect the storage and resume.
- Do not create an empty replacement collection automatically at the same location.

## Migration between computers
Export/backup packages should support moving a collection to another computer where compatible. The migration process should preserve record identifiers, photos, settings that belong to the collection, and archive state without duplicating records unnecessarily.

## Storage permissions
If the operating system denies access to a selected location, explain the problem in plain language and provide a safe way to choose another location.

## Testing
Test moving collections between internal storage, external drives, and replacement computers; disconnecting storage; insufficient space; interrupted transfers; and failed verification. No migration failure should silently destroy the original collection.
