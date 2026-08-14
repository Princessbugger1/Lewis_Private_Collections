# Share Publishing Control

A collection record is private when first created. Sharing requires an explicit publish decision.

## Per-record publishing state
Each future share-capable record should support:
- **Private** — not included in any read-only share.
- **Shared** — eligible for the owner's active share, subject to the share's field-visibility settings.

## Field-level privacy
A shared record should expose only fields permitted by the active share settings. Private notes, purchase information, personal information, and other protected fields must remain excluded unless explicitly enabled.

## Reversibility
Unpublishing a record removes it from the shared presentation but does not delete or alter the owner's record.

## Safety boundary
The client interface may provide the controls, but production access enforcement must occur server-side once authenticated sharing is implemented.
