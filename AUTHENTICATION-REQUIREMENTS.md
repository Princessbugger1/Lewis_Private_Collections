# Authentication Requirements

Authentication is a core security layer and must be implemented before the catalog is used for sensitive real-world collection data.

## Account access
- Provide Sign In and Create Account flows.
- Require authentication before accessing private collection records.
- Provide a clearly visible Forgot Password / Reset Password flow.
- Provide Sign Out.
- Do not store plaintext passwords in the catalog or client-side collection data.
- Password reset must use a secure, time-limited recovery mechanism supplied by the authentication provider/backend.

## Sessions
- Use short-lived access sessions with secure renewal where supported.
- Sign out must invalidate the active session as appropriate.
- Sensitive operations may require recent authentication again.
- Do not put authentication tokens into URLs, shared links, exported catalog data, or audit history.

## Recovery and account safety
- Password reset must not reveal whether an unrelated email/account exists through overly specific error messages.
- Rate-limit login and reset attempts.
- Support secure account recovery through the chosen authentication provider.
- Do not build a custom password-storage system when a reputable managed authentication service can provide the security primitives.

## Privacy boundary
- Authentication data is separate from collection records.
- A public/demo interface, if provided, must never expose private collection records merely because the app is reachable without signing in.
- Authentication failures must not cause collection data to be deleted or modified.
- The design must allow stronger authentication such as passkeys or MFA to be added later without changing item records.

## Implementation status
This document defines the required authentication architecture. The actual provider/backend and production login implementation must be added and tested before real valuable collection data is entered.
