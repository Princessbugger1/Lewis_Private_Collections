# Lewis Private Collections / Coin Chime — Project Handoff

## Current photo feature redesign checkpoint
The first live test exposed problems and the photo editor is being redone rather than patched around.

### User-reported problems
- Collection list did not visibly show the intended coin thumbnails next to the existing items.
- Photo crop UI was unclear.
- Mobile freehand drag/crop behavior was not good enough.
- The previous editor relied too heavily on +/- zoom and did not provide a clear crop frame.
- There was no obvious, reassuring Cancel path for a crop attempt.
- A test photo ended up disappearing, which is unacceptable.

### New required behavior
- **Nothing changes when a photo is opened.** Opening/inspecting and Cancel must leave the original photo untouched.
- Mobile editor must show a clear **white crop frame**.
- One-finger drag moves the image under the crop frame.
- Two-finger pinch zooms on a phone.
- +/- remain available as optional controls.
- **Reset view** returns the image to its starting position/zoom.
- **Crop & Save** is the only action that changes the selected photo.
- **Cancel** closes the editor without changing or deleting anything.
- Obverse / Face, Reverse, and Edge all use the same behavior.
- Cropping one photo must never alter the other two.
- The list should show the Obverse / Face image as the coin thumbnail.
- No separate thumbnail file should be created solely for display.

### Latest implementation changes
- `js/coin-photo-editor.js` was redesigned for mobile-first drag, pinch zoom, a visible crop frame, Reset, Crop & Save, and Cancel.
- `js/coin-photo-crop.js` was simplified to perform a precise crop from the selected image coordinates.
- `js/coin-photo-integration.js` was updated so file inputs are changed only after Crop & Save succeeds; it also adds Obverse thumbnails to collection cards.

### IMPORTANT next test
After GitHub Pages refreshes, test with a disposable/test coin first:
1. Open a photo and immediately tap Cancel — photo must remain.
2. Open it, drag with one finger — image must move smoothly.
3. Pinch with two fingers — image must zoom.
4. Tap Reset view — original framing returns.
5. Crop & Save — only that photo changes.
6. Save the coin, reopen it, and verify the cropped image remains.
7. Repeat for Reverse and Edge.
8. Confirm collection list displays the Obverse/Face thumbnail.
9. Confirm no photo disappears when Cancel is used.

Do not tell the user the feature is finished until this live test passes.
