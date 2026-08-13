# Item History and Audit Trail

## Goal
Keep a trustworthy history of important changes to collection records without making the normal catalog screen feel complicated.

## Record history
Important record changes should be attributable to an action and timestamp, including:
- identification changes
- confirmed or corrected research results
- valuation changes
- certification information changes
- owner edits to important fields
- photo additions/removals
- restore/import operations

## Non-destructive principle
Editing a record should not destroy the ability to recover an earlier version. Git history protects application files; the catalog itself should preserve appropriate record history for collection data.

## User interface
Normal users should not have to view the full audit trail. An advanced "History" area can show previous values, dates, and change descriptions when needed.

## Privacy
Audit history is part of the private collection data and should not be exposed through public sharing unless the owner explicitly chooses to share it.

## Restore awareness
Restoring an older collection export should not silently erase newer information. The restore workflow should warn about conflicts and provide a safe path to review them first.

## Future-proofing
History records should use stable record IDs so they remain connected to the same collectible even if the item's display title or other descriptive fields change.
