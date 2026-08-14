# Sharing Link Security Rules

Read-only sharing must support controlled access without exposing the owner's private catalog.

## Owner controls
- Create a share link for a selected collection or view.
- Revoke a link at any time.
- Disable sharing without deleting the collection.
- See which share links are active and their status.

## Access controls
- Prefer revocable, high-entropy share tokens rather than predictable IDs.
- Support optional access codes/PINs for protected shares.
- Where licensing/business access is involved, support authorization/activation codes separate from the owner's private collection data.
- Never place an access secret or private collection data in a URL query string when avoidable.
- Shared recipients receive read-only permissions only.
- Do not rely on obscurity of the URL as the only security boundary.

## Privacy and abuse resistance
- Sharing must expose only explicitly shareable fields.
- Owner private data must never be included in the shared payload merely because it exists in the underlying record.
- The architecture should allow future rate limits, link expiration, revocation, and abuse controls.
- Licensing enforcement should be implemented server-side where authentication or subscription status is required; client-side checks alone are not sufficient.
- Do not promise that a recipient can never copy information that is visibly displayed. The goal is controlled access, revocation, and protection of private data—not impossible copying of screen content.
