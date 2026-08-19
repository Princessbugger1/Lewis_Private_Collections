# Multi-User Isolation Test Plan

## Required test setup
Use two independent test accounts, Account A and Account B, with deliberately overlapping coin descriptions and photo filenames.

## Tests
1. Create active, archived, and Trash records under Account A. Verify Account B cannot see them.
2. Upload photos with identical filenames under both accounts. Verify each account receives only its own objects.
3. Attempt direct access to another account's record/object identifier. The server must deny access.
4. Search and filter from both accounts. Verify results contain only the current account's data.
5. Run archive, restore, Trash, and permanent-delete operations from both accounts. Verify no cross-account changes occur.
6. Export/backup each account. Verify each export contains only that account's collection.
7. Test synchronization after signing out of A and into B on the same device. Verify A's cloud records are not exposed to B.
8. Test interrupted sync and retry. Verify a partial operation cannot cross account boundaries.

## Release gate
A failure of any isolation test blocks release of cloud/multi-user functionality until corrected and retested.
