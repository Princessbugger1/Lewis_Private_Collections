# Lewis Private Collections / Coin Chime — Project Handoff

**Checkpoint:** 2026-08-19
**Branch:** main

## Current photo behavior decision
All three coin photos are treated consistently in the Edit section:
- Obverse / Face: inspect larger, zoom/drag, crop, confirm or cancel.
- Reverse: inspect larger, zoom/drag, crop, confirm or cancel.
- Edge: inspect larger, zoom/drag, crop, confirm or cancel.

Cropping one photo changes only that photo. No separate thumbnail image is created solely for the thumbnail.

## Catalog thumbnail
The main/list catalog view still uses the coin's main Obverse / Face photo as the thumbnail. Avoiding a separate thumbnail file is intentional to reduce unnecessary storage.

## Latest implementation
The photo editor scripts are wired into `index.html` on `main`:
- `js/coin-photo-crop.js?v=1`
- `js/coin-photo-editor.js?v=2`
- `js/coin-photo-integration.js?v=1`

The wiring was completed by commit:
`1926f7cd1fc2a65f1ca1716ffa67763f0ba3f496` — **Wire crop editor into all coin photos**

A temporary GitHub Actions workflow used to perform the wiring was removed after it completed. It should not be recreated unless specifically needed.

## Important safety/continuity note
Do not rebuild the catalog or replace `index.html` wholesale just to make the photo editor work. Preserve the existing catalog and data structure. Make focused changes and verify them before committing.

## User's desired experience
Keep the interface simple and avoid unnecessary options. The consistent rule is: when editing a coin photo, that photo can be inspected and cropped.

## Next step
Test the live GitHub Pages catalog after refresh/reopen:
1. Open Edit on a coin.
2. Test Obverse / Face photo: inspect/zoom/crop/save.
3. Test Reverse photo: inspect/zoom/crop/save.
4. Test Edge photo: inspect/zoom/crop/save.
5. Confirm each cropped result returns to the correct photo slot and does not alter the other two.
6. Confirm the list thumbnail remains the Obverse / Face image.

If a future chat has to continue the project, start by reading this handoff file and checking the latest commits on `main` before making changes.
