# Plan Downgrade Policy

## Principle
A downgrade must reduce available capacity/features without unnecessarily deleting a collector's existing data.

## Collection limits
- Plan limits apply to active catalog items, photos, custom catalogs, and storage as defined by the selected plan.
- Existing items are not automatically deleted solely because a user downgrades.
- If the account remains above the new plan's item limit, the user may view, search, edit, organize, export, and delete existing items, but cannot add another item until the active item count is below the limit.
- Example: a 500-item plan with 1,000 existing items requires the user to reduce the collection to 499 or fewer before adding another item.

## Photos and storage
- Existing photos should not be silently deleted on downgrade.
- New uploads that would exceed the plan's limits should be blocked with a clear explanation and upgrade/manage options.
- Storage limits should be measured separately from item counts so a large number of small records is not treated the same as a large volume of high-resolution images.

## User experience
- Explain exactly which limit has been exceeded.
- Provide Upgrade and Manage Collection actions.
- Provide export/backup tools so the user can retain an independent copy of their collection.
- Never make a downgrade feel like an immediate loss of ownership of the user's records.

## Architecture
Plan limits must be enforced server-side, not only by hiding interface controls. Plan configuration should be data-driven so limits can change without rebuilding the catalog.
