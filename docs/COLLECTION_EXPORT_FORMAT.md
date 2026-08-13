# Collection Export Format

## Purpose
The master collection needs a portable export so the owner is not locked into one app interface or hosting service.

## Export principles
- Export the complete master record, not only the fields visible in a simple view.
- Preserve stable record IDs.
- Preserve dates and structured values in machine-readable form.
- Preserve three-state values as distinct states.
- Preserve owner-photo references and media relationships.
- Preserve certification and provenance information.
- Preserve research/reference metadata separately from owner media.

## Suggested formats
A future export area may offer:
- JSON — complete machine-readable master backup
- CSV — convenient spreadsheet-style inventory
- Printable/PDF report — human-readable catalog

## Import/restore
A future restore tool should validate the imported structure before changing existing records. It should not silently overwrite the master collection.

## Compatibility
The export format should be versioned so future versions of the app can migrate older exports instead of making them unusable.
