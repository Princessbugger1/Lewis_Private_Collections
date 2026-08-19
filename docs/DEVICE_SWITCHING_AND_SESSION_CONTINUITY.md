# Device Switching and Session Continuity

## Goal
Let a collector move naturally between phone and computer without creating separate collections or confusing states.

## Shared collection
- The collection is the authoritative source of saved coin data.
- Device-specific UI preferences remain separate from collection records.
- A user should not need to manually convert a phone collection into a computer collection.

## Session continuity
Where the account/sync architecture supports it, resume the most recently saved safe state across devices. Do not assume that an unsaved edit on one device should overwrite a newer saved record on another device.

## Conflict protection
If the same coin is edited on two devices before synchronization:
- Detect the conflict rather than silently overwriting one version.
- Preserve the user's saved data.
- Provide a simple resolution path appropriate to the product's level of complexity.

## Offline use
The catalog should remain useful during temporary loss of connectivity for supported offline workflows. Changes made offline should be synchronized safely when connectivity returns.

## Photos
Photo uploads/synchronization should be resilient to interrupted transfers. A partially uploaded photo must not replace a valid existing photo.

## Device-specific behavior
Phone may emphasize scanning, photography, quick edits, and one-handed navigation. Computer may emphasize organization, bulk operations, reporting, and professional workflows. These are presentation differences, not separate data models.

## Testing
Test sign-in/session restoration, offline edits, reconnection, simultaneous edits, photo transfers, and switching between phone and computer without data loss or unexpected duplication.
