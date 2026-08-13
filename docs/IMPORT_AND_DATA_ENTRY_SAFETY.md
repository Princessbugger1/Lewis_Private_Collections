# Import and Data Entry Safety

## Goal
Make it easy to add collection data while protecting existing records.

## Manual entry
New records should have a clear Add action and should not require optional sections to be enabled.

## Duplicate awareness
When practical, the app should warn if a new record appears to match an existing item, while still allowing the owner to intentionally add another record.

## Import
If bulk import is added, it should preview what will be added or changed before applying it.

## No silent overwrite
Existing records should not be silently overwritten during import or data entry.

## Unknown values
Blank or unavailable information should remain distinct from a confirmed No. Applicable three-state fields use ❓ Unknown / Not Checked, ✅ Yes, and ❌ No.

## Quantity
Imported or entered quantities must be validated as sensible positive counts where quantity applies.

## Recovery
Before a large import or collection-wide change, the application should offer a safety backup when practical.

## Future-proofing
Import/export field mappings should use stable record IDs so future versions can move data safely.
