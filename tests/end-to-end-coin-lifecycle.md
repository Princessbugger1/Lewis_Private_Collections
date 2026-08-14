# End-to-end coin lifecycle test

Use only the isolated test branch and a disposable test record.

1. Create one test coin.
2. Confirm its generated ID is present.
3. Edit a normal field and save.
4. Cycle each applicable three-state field: Unknown → Yes → No → Unknown.
5. Move the test coin to another area/series/folder.
6. Reload the browser page and confirm the edited values and destination remain.
7. Remove the coin from its series and confirm the coin itself remains.
8. Delete the test coin.
9. Reload again and confirm the test coin is gone.

Pass criteria: every change survives the appropriate save/reload and no unrelated record changes.

This test is not considered complete until it is executed in the browser and observed to pass; code inspection alone is insufficient.
