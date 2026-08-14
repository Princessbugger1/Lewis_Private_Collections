# App Testing and Acceptance Rules

The catalog is not considered ready merely because files compile or pages load. Core collection workflows must be exercised before release.

## Critical tests
- Add a new record and verify it persists after reload.
- Edit a record and verify only intended fields change.
- Search for a record by multiple supported fields.
- Hide a category/series and verify records remain stored and intentionally searchable.
- Remove a record from a series and verify the record remains intact.
- Delete a record and verify it enters Recently Deleted/Trash rather than disappearing permanently.
- Restore a deleted record and verify its stable ID and associated data remain intact.
- Export/backup a sample collection and restore it into a test environment without duplicates.
- Verify Unknown/Yes/No three-state fields survive save, reload, export, and restore.
- Verify custom series and classifications survive save, reload, export, and restore.
- Verify phone layout and controls are usable at narrow widths.
- Verify desktop layout remains usable at wide widths.
- Verify slab/OCR suggestions can be edited or rejected without overwriting confirmed data.
- Verify external research is opt-in and does not transmit unrelated collection information.

## Release gate
A release should not be treated as complete if a critical data-loss, duplicate-record, deletion/recovery, authentication, or backup/restore test fails.

Tests should use disposable test records and test images rather than risking the user's real collection.
