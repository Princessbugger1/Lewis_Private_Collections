# Backup and Restore Rules

Backups are a safety feature and must preserve the collection without creating duplicate records or silently destroying newer information.

## Backup contents
- Stable item IDs and item metadata.
- Photos/attachments where supported by the chosen backup format.
- Custom classifications and series.
- Country/issuer identities and flag references.
- Three-state fields exactly as stored: Unknown, Yes, or No.
- Visibility and relevant presentation preferences.
- Review states and applicable audit history.

## Restore behavior
- A restore must first show what will be added, changed, or skipped when conflicts exist.
- Stable item IDs are used to match existing records; restore must not create duplicates merely because a record appears in both places.
- Newer live data must never be silently overwritten by an older backup.
- The user must be able to cancel before changes are applied.
- Restore failures should leave the existing live collection intact as far as technically possible.
- A restored hidden item remains hidden; restoring data must not unexpectedly publish or share it.
- Deleting or replacing a backup file must never delete live collection records.

## Privacy
- Backup/export files are treated as sensitive collection data.
- Sharing a backup is separate from restoring one.
- The catalog must not automatically upload a private backup to an outside research service.
