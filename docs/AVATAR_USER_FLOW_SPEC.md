# Avatar User Flow

The Collection Owner profile should support three simple choices:

1. **Use a profile photo** — choose an image from the device.
2. **Use a favorite coin** — select a coin already in the catalog and use its saved photo as the avatar.
3. **Use the default avatar** — no personal image required.

## Favorite coin behavior
- Show the coin's photo and basic identification while choosing it.
- Selecting it does not move, duplicate, edit, or delete the coin record.
- The avatar is a separate profile preference pointing to the selected image.
- If the coin is later deleted, the profile should gracefully fall back to the default avatar or ask the user to choose another source.

## Simplicity
The profile screen should be compact and understandable on a phone. Avatar selection should never require changing catalog settings.
