# Photo Interaction Rules

## One simple mental model
Coin Chime should use the same basic interaction wherever the main coin photo appears:

- **Tap the photo:** open it larger for inspection.
- **Pinch/zoom and drag:** inspect details without changing the image.
- **Close:** return to the current screen.
- **Explicit Edit/Crop action:** enter photo editing only when the user intends to change the image.

## Applies to
- Collection/catalog view.
- Coin edit page.
- Main coin photo after adding it.

## Storage
Inspection, zooming, and panning never create additional image files.

## Design principle
Do not make users learn different photo controls in different parts of the program. Keep inspection and editing clearly separated while making both easy to discover.
