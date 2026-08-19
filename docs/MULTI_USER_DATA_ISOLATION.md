# Multi-User Data Isolation

## Requirement
One customer's collection, archive, Trash, photos, backups, settings, and cloud data must never be mixed with another customer's data.

## Account ownership
Every cloud-stored collection and every associated record/media object must be scoped to the authenticated account (and, where applicable, the specific collection/workspace). Never rely on a client-supplied owner ID alone for authorization.

## Authorization
Server-side access controls must verify that the authenticated user is allowed to read, create, update, archive, restore, trash, export, or delete the requested collection data.

## Object storage
Photo/object-storage paths must be namespaced by an account/collection identifier and protected by storage access policies. A filename or guessed path must never grant access to another user's file.

## Local devices
A locally stored collection should remain associated with the user's selected collection/storage location. Signing into a different account must not automatically expose the previous account's cloud data.

## Sync
Synchronization must use stable account and collection identifiers and must reject records belonging to another account. Conflicting records should be handled explicitly rather than merged based only on matching coin descriptions.

## Backups and exports
Exports should contain only the collection(s) the user explicitly selected and should not accidentally include another account's data or cached media.

## Testing
Test with at least two separate test accounts and overlapping coin records, filenames, archive contents, and photo names. Verify that neither account can read or modify the other's records, archived items, Trash, photos, backups, or cloud storage objects.

## Security priority
Data isolation is a release-blocking requirement for any multi-user/cloud version of the product.
