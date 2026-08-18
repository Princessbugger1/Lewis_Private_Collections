# Profile Avatar and Camera Specification

## Profile image choices

Users can choose a profile image from:
- Their own uploaded photo.
- A photo captured with an available device camera.
- Built-in generic avatars.
- Built-in mascots, including multiple mascot choices.

## Device support

- Phones/tablets: allow choosing an existing image or using the device camera when browser/device permissions support it.
- Desktops/laptops with cameras: allow choosing an existing image or using the computer camera when supported.
- Devices without an available camera: keep upload and built-in avatar choices available.

## Avatar changes

- Switching from a personal photo to a mascot does not delete the uploaded photo.
- Switching mascots makes the previous mascot immediately available for reuse.
- "Return to Generic" removes the selected personal/mascot avatar from active display and returns to a generic avatar.
- Provide a separate explicit action if the user wants to permanently delete an uploaded photo.

## Security and privacy

Profile images belong to the user profile, not individual catalog items.
- Protect profile image storage with the same account ownership model used for catalog data.
- Do not expose private profile images to other users unless a future sharing feature explicitly permits it.
