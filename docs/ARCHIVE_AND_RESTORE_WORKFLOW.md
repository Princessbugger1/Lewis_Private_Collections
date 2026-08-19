# Archive and Restore Workflow

## Goal
Give collectors a safe way to reduce active storage and clutter without treating archived coins as deleted.

## Archive meaning
Archiving removes a record from normal active collection views while preserving the record and its associated data according to the user's selected storage configuration.

Archive is not permanent deletion.

## User experience
- Use plain language such as "Archive" and "Restore from Archive."
- Show how many records are archived.
- Make archived records searchable/filterable from an obvious location.
- Allow one or many records to be restored.
- Restore records to the appropriate collection/location when possible.

## Photos
Archiving should not silently destroy original photos. If originals are removed later through verified storage cleanup, the catalog should clearly indicate when only a thumbnail or external/cloud copy remains.

## Relationship to Trash
Trash is for intentional deletion and follows the separate deletion/recovery rules. Archive is the safer choice when the user simply wants something out of the active collection.

## Bulk operations
Bulk archive should require a clear review of the selected count and a confirmation. It should be reversible without requiring support intervention.

## Search and reporting
Archived records should be excluded from normal active totals unless the user chooses to include them. Reports should make clear whether archived items are included.

## Testing
Test archiving/restoring individual and bulk records, searching archived records, photo availability, device synchronization, and interaction with backup/export and permanent deletion.
