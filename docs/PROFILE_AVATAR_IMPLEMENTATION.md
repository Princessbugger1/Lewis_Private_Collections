# Profile & Avatar Implementation

## Storage
Store the collection-owner profile separately from coin records so profile changes never modify coin data.

Suggested local profile object:
- displayName
- avatarType: default | photo | coin
- avatarData: local image data when avatarType is photo
- avatarCoinId: stable coin identifier when avatarType is coin

## Favorite coin avatar
A coin can be selected as the avatar source. The avatar uses a copy/reference to the saved image; the coin's title, value, notes, and other private fields are not exposed through the profile.

## Safe deletion behavior
If the selected avatar coin is deleted, moved to Trash, or its photo is removed, the profile should detect the missing source and use the neutral default avatar. The user can then choose another avatar.

## Photo behavior
- Allow selecting an image from the device.
- Keep the avatar square/cropped visually without destroying the original image.
- Allow replacing or removing the photo.
- Avoid sending the profile image anywhere automatically.

## Export behavior
Owner name and avatar are excluded by default. Export review can provide explicit checkboxes for including either one.

## Privacy principle
Profile information is optional and local. It is not a social profile and does not grant other people access to the live catalog.
