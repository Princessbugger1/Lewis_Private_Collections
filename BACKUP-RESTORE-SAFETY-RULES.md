# Backup / Restore Safety Rules

Backup and restore are designed to protect the collection from accidental loss and support future migration between devices or versions.

## Backup
- A backup must include item records and user-created metadata needed to reconstruct the catalog: custom classifications, custom series, country/issuer values, visibility preferences, and applicable item fields.
- Backup/export must clearly identify whether photos are included.
- Private fields must not be silently included in a shareable/public export.

## Restore
- Restore must never silently overwrite the current collection.
- Prefer a preview/confirmation step showing what will be added, changed, or skipped.
- Stable record IDs must be preserved where possible so restored records do not become unintended duplicates.
- If an imported record conflicts with an existing record, the user must be given a safe resolution choice rather than automatic destructive replacement.
- Failed or partial restores must not leave the collection in an ambiguous half-written state; use transactional/staged behavior where supported.

## Safety
- Provide a clear distinction between Backup, Export/Share, and Delete.
- Deleting a backup file must never delete the live catalog.
