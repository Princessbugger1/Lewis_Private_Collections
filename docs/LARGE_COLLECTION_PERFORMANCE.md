# Large Collection Performance

## Target
Design for substantial personal collections without imposing an arbitrary archive-count limit.

A representative target is **5,000 coin records and 10,000 photographs**. This is a normal large-collection scenario, not an automatic failure threshold.

## Performance principles
- Load records in manageable batches rather than rendering the entire collection at once.
- Use thumbnails for grid/list views and load full-resolution photos only when needed.
- Lazy-load images outside the visible viewport where supported.
- Avoid keeping thousands of full-resolution images in active memory simultaneously.
- Keep search and filtering based on indexed metadata rather than scanning image contents unnecessarily.
- Keep archive records searchable without treating them as active-screen content.

## Storage awareness
Photo storage size depends heavily on resolution and file format. The app should monitor available device storage and warn before an operation is likely to run out of space rather than impose a fixed collection-size limit.

## Bulk operations
Large archive, restore, backup, export, and cleanup operations should show progress and be resilient to interruption. They should not require the user to keep thousands of records visible on screen at once.

## Failure behavior
If an operation is interrupted, preserve the original collection and provide a retry/resume path where practical. Do not interpret an incomplete photo transfer as a completed backup.

## Testing targets
Test at minimum with thousands of records and thousands of photos, including search, sort, archive, restore, backup/export, thumbnail generation/loading, photo cleanup, and device storage warnings.
