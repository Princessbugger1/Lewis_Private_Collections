# Backup and Restore Rules

Collection data should remain recoverable independently of normal browsing and editing.

- The app should provide a clear way to create a backup/export of the collection.
- Backups should preserve stable record IDs so restoring data does not create duplicates.
- Where supported, backups should include photos and the metadata needed to reconnect them to their records.
- Restore must validate the backup before changing live data.
- A restore preview should identify additions, updates, conflicts, and invalid records when practical.
- Restore must not silently overwrite confirmed records when the backup conflicts with current data.
- The user should be able to cancel before live records are changed.
- Failed or invalid restores must leave the existing collection intact.
- Schema versions should be retained so future app versions can migrate older backups safely.
- Backup files should be treated as sensitive collection data and should not be automatically uploaded to an outside service.
- Restore should preserve Unknown/Yes/No three-state values, custom series, custom classifications, country/issuer data, notes, certifications, and supported photos.
