# Navigation Integration Order

Integrate navigation only after the individual modules have been reviewed.

1. Load navigation styles.
2. Mount the navigation shell.
3. Connect the destination registry to the router.
4. Connect feature views one destination at a time.
5. Run the state fixtures and smoke tests.
6. Run responsive checks.
7. Review the resulting diff.
8. Merge to `main` only after the integrated build passes.

Never replace the entire application shell just to add one navigation feature.