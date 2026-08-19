# Shared Device Session Security

## Goal
Prevent one signed-in user from seeing another user's private collection after sign-out, account switching, or session expiration.

## Required behavior
- Sign-out must terminate the authenticated cloud session.
- The next account must receive a fresh data scope based on its own authenticated identity.
- Cached cloud records, Archive, Trash, thumbnails, and pending sync metadata must not be presented to the next account.
- Offline/local data must carry account and collection ownership metadata.
- Account switching must invalidate stale requests and prevent late responses from populating the wrong account's UI.
- If local data cannot safely be attributed to the current account, it must not be displayed automatically.

## Session expiration
When authentication expires, cloud operations should stop and the user should be prompted to sign in again. Unsaved local edits should be handled according to the offline-data policy rather than silently discarded.

## Testing
Test sign-out/sign-in on the same phone and computer, account switching during sync, session expiration while viewing Archive, interrupted uploads, and delayed network responses. Verify no prior user's records or photos appear after the account boundary changes.

## Release gate
Any cross-account data exposure blocks release.
