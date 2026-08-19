# Backup and Export Requirements

## Purpose
A collector must have a straightforward way to keep an independent copy of their collection. Backup/export is a safety feature, not a substitute for the app's normal data protection.

## User-facing goals
- Make backup easy to find without making the main catalog cluttered.
- Use plain language such as "Download a backup of my collection."
- Do not require technical knowledge to create a backup.
- Show the date/time of the most recent successful export or backup when available.
- Explain what is included before the user starts an export.
- Never imply that an export is a live backup unless it actually is one.

## Export contents
Where technically supported, an export should preserve enough structured information to rebuild the user's catalog, including:
- Collection/catalog structure.
- Stable record IDs.
- Coin/item identification fields.
- User-entered notes and custom fields.
- Ownership/inventory information.
- Certification and reference information stored by the user.
- Photo metadata and links/references to exported media as applicable.
- Draft/unfinished-entry state when useful and safe.

## Formats
The architecture should allow more than one export format when practical:
- A complete restore-oriented backup format for the application.
- A human-readable format such as CSV or spreadsheet for inventory use.
- A human-readable report/PDF only if it provides meaningful value and does not become the primary restore format.

## Restore safety
- Restoring a backup must not silently overwrite a current collection.
- Prefer a preview or clear choice between "restore as a new copy" and "replace/merge" when those operations are implemented.
- Stable IDs and duplicate detection must be used to prevent accidental duplicate records.
- Large restores should provide progress and a clear completion result.

## Subscription behavior
- The product should not make local export unnecessarily difficult because of a plan downgrade.
- If a plan has export restrictions, they must be explicit before purchase and must not trap a user's collection.
- Existing data should not be deleted merely because a plan changes.

## Security and privacy
- Backup files may contain private collection information and should be treated as sensitive user data.
- The app should warn users before sharing a backup publicly.
- Cloud backup and local export are separate concepts and should not be described as interchangeable.

## Performance
- Large collections should export in a way that avoids freezing the interface where the platform allows it.
- Image-heavy exports should be handled separately from lightweight catalog data when practical.
- The user should receive a clear success/failure result.
