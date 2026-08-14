# Catalog testing order

1. Add one ordinary coin and confirm it saves and appears in the collection.
2. Edit that same coin and confirm every edited field persists.
3. Cycle each applicable three-state field and confirm Unknown, Yes, and No remain distinct after reload.
4. Search, filter, and sort the saved record.
5. Open the record and delete it; confirm deletion requires opening the record's Delete action and confirmation.
6. Add a second test record with obverse/reverse photos and confirm previews and saved photo data survive editing.
7. Export a backup, change/delete test data, then restore the backup and verify recovery.
8. Test display modes on phone and desktop widths.
9. Test category-specific records, including Paper Money.
10. Test U.S. date/series identification rules when implemented.
11. Test Ancient records and their date/type fields.
12. Only after all above pass, move to broader polish and optional Bugs behavior.

Each test should be performed against a known test record and documented as pass/fail before the next functional change is made.
