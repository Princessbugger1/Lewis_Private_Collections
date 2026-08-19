# Coin Collection Lifecycle

## States
A coin record has a clear lifecycle:

**Active → Archive → Trash → Permanent Delete**

A record may also remain Active while its photographs are independently backed up, moved, or cleaned up according to storage rules.

## Active
Active records appear in normal collection views, searches, counts, and reports.

## Archive
Archive is for records the owner wants to keep but remove from everyday collection views. Archived records do not expire automatically and can be restored.

## Trash
Trash is for an intentional deletion decision. Records in Trash should remain recoverable for the retention period defined by the final product policy.

## Permanent Delete
Permanent deletion is destructive and requires a stronger confirmation. It must not be triggered by archiving, storage cleanup, subscription expiration, or a failed backup.

## Photos and records are separate concerns
Removing an original photograph to reclaim verified storage must not automatically delete its coin record. The record should clearly indicate what photo assets remain available.

## Backup relationship
Backups preserve the collection according to the backup format/version. Before destructive cleanup, the app should verify the backup where practical.

## Subscription relationship
Cloud subscription state must not silently change a locally stored record's lifecycle. Cloud-only data follows the separate subscription retention policy.

## Testing
Test every state transition, restoration, photo cleanup, backup/restore, subscription expiration, and interrupted operation. Verify that no operation intended to manage storage accidentally changes a record's lifecycle.
