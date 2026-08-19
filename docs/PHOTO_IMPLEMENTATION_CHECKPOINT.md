# Photo Implementation Checkpoint

The existing prototype uses `photo1` / `preview1` for the Obverse / Face image and `photo2` / `preview2` for Reverse, with `photo3` / `preview3` for Edge.

The intended implementation is deliberately limited to the main Obverse / Face photo:

1. Selecting the Obverse / Face photo may open a simple crop/inspection step.
2. Pinch/zoom and drag are for positioning and inspection.
3. A confirmed crop becomes the main catalog image and thumbnail.
4. No separate full-size thumbnail file is created.
5. Reverse and Edge behavior is unchanged.
6. Normal viewing/edit-page inspection can enlarge and zoom the saved main image without modifying it.
7. The implementation must preserve existing records and the current local-storage data format.

This checkpoint exists so the feature can be wired into `index.html` only after the complete current file is safely available for a non-destructive edit.
