# Backup Verification and Storage Cleanup

## Goal
Allow users to reclaim device storage without making an unverified backup look safe.

## Required sequence
1. User selects a backup/export destination.
2. The app writes the collection and required media.
3. The app verifies the resulting backup can be read and passes integrity checks.
4. The app clearly reports the backup status.
5. Only after successful verification may storage-cleanup actions be offered as available options.

## Verification
Where practical, verify:
- Collection record count.
- Schema/version metadata.
- Required photo references.
- File readability/integrity.
- Backup completion without interruption.

## Cleanup choices
After verification, offer understandable choices such as:
- Keep everything on this device.
- Remove backed-up original photos only.
- Remove selected photos.
- Archive selected records.
- Cancel.

Do not automatically delete collection records merely because the user requested photo storage cleanup.

## Subscription/cloud storage
A cloud copy may be used for synchronization or backup according to the user's plan and settings, but it should not silently become the user's only copy. Encourage independent exports/backups.

## Failure behavior
If verification fails, do not present the backup as complete and do not offer destructive cleanup based on that backup. Preserve the local data and provide a retry path.

## User communication
Use plain language and show what will be removed, where the verified backup is located, and approximately how much space will be reclaimed before a destructive cleanup is confirmed.
