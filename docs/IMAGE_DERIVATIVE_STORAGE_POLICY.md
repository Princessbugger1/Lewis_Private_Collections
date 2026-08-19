# Image Storage and Crop Policy

## Goal
Keep coin photos simple and storage-efficient while allowing users to crop the main coin photo.

## Coin photo model
- The user's first/main coin photo is the primary catalog image.
- Cropping is optional and is intended to remove excess background around the coin.
- When the user confirms a crop, the cropped image becomes the primary catalog image and the image shown as the coin's thumbnail.
- Do not create a separate full-resolution thumbnail copy of the same coin photo.
- Do not create additional thumbnail copies merely because the image appears in multiple catalog views.
- If the user does not crop, the original uploaded photo remains the primary catalog image.

## Original-photo preservation
The product should not automatically retain a second full-resolution uncropped copy solely because a user cropped the photo. If original-photo preservation is offered, it should be an explicit backup/storage choice.

## Crop editing
- Users may crop around the coin before saving.
- Users may skip cropping.
- Rotation may be offered as part of the same editing step.
- Re-cropping should replace the previous primary image according to the selected original-preservation setting, without accumulating obsolete copies.

## Storage behavior
The system should avoid duplicate full-size images and unnecessary generated thumbnails. Display sizing can be handled through responsive image delivery or other implementation methods without storing a separate full-resolution thumbnail for every coin.

## Profile/avatar photos
Profile pictures are separate from coin photos and should be stored at an appropriately small display size. They should not be treated as coin catalog images.

## Backup/export
Backups and exports should not include redundant thumbnail copies as separate originals. If the user chose to preserve an uncropped master, that master should be clearly distinguished from the active cropped catalog image.
