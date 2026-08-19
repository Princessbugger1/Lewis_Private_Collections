# Image Derivative Storage Policy

## Goal
Provide cropping and profile-picture features without creating unnecessary duplicate full-resolution files.

## Coin photos
- Preserve the original uploaded photo as the master image.
- Generate appropriately sized thumbnails/derived images for catalog grids and other UI uses.
- Cropping for a catalog display should create a derived image at the required display resolution, not another full-resolution master by default.
- Replacing a crop should replace the prior derived version instead of accumulating obsolete copies.
- Never delete the master solely because the user changed a crop.

## Profile/avatar photos
Profile images should be stored at a deliberately small display size appropriate for an avatar. The original should not be retained at full resolution unless the product explicitly needs it and the user has chosen to keep it.

## Storage cleanup
When a derived image is no longer referenced, it should be eligible for cleanup after safe reference checks. Cleanup must never remove a master image that is still referenced by the collection.

## User experience
Cropping and rotation should be optional. Users can skip editing, and editing should not unexpectedly increase storage by creating multiple full-size copies.

## Backup/export
Backups should clearly distinguish master photos from generated derivatives so redundant thumbnails are not unnecessarily exported as additional originals.
