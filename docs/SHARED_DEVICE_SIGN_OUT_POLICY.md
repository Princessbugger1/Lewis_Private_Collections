# Shared Device Sign-Out Policy

## Goal
Prevent one person from seeing another person's private collection when the same phone or computer is used by multiple people.

## Sign-out behavior
When a user signs out of the cloud account:
- Stop cloud requests using the previous authenticated session.
- Clear or invalidate account-scoped cloud caches and session tokens according to the security design.
- Do not automatically present the previous user's collection to the next account.
- Require authentication before protected cloud data is displayed again.

## Offline/local data
If offline access is supported, local data must be explicitly associated with the selected account/collection and protected according to the final device-security design. Signing into another account must not silently merge or expose the previous account's local collection.

## Switching accounts
Account switching should clearly show which account/collection is active. Search, Archive, Trash, photos, and counts must refresh to the new scope.

## Testing
Test sign-out/sign-in on the same phone and computer with two accounts, including offline/online transitions, cached thumbnails, search history, Archive, Trash, and pending sync operations.
