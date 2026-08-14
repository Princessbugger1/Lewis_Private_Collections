# Share Link Lifecycle

A future read-only share should have a controlled lifecycle rather than being an ordinary permanent URL.

## States
- **Disabled:** no viewer access.
- **Active:** authorized viewers can use the current share credential.
- **Revoked:** the credential no longer grants access.
- **Replaced:** a new credential has been issued and the previous one is invalid.

## Owner controls
The owner should be able to enable, disable, revoke, and replace a share without changing or deleting collection records.

## Security
Share credentials should be cryptographically random and validated by the production access layer. A public URL must not contain enough predictable information to enumerate collections or records.

## Forwarding limitation
A recipient may technically forward a link. The system should therefore support revocation/replacement and optional access-code protection rather than promising that forwarding is impossible.

## Privacy
A share only exposes records explicitly marked Shared and only fields allowed by current Share Settings.
