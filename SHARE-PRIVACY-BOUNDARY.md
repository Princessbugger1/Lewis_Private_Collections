# Shared / Read-Only Privacy Boundary

A shared read-only view must be a projection of the collection, not access to the owner's private catalog workspace.

## Public/read-only fields
Only fields explicitly marked shareable may appear. Typical shareable fields can include item image, basic identification, denomination, year/date, mint, country/issuer, series, and description.

## Private fields
Private notes, precise location, storage location, acquisition cost, personal contact information, addresses, account/access details, and other fields marked private must remain excluded.

## Behavior
- Read-only recipients cannot edit, delete, add, export-private-data, or change the owner's collection.
- Search/filter within the shared view may operate only on shareable records and fields.
- The owner can revoke or change sharing without altering the underlying collection.
- A shared link must not expose private data merely because the recipient knows the URL.
- Sharing permissions are separate from item/category visibility settings.
