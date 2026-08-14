# Authentication Implementation Plan

The current prototype is a browser/local-storage catalog and is **not yet a secure production authentication system**. Do not represent a client-side password screen as real security.

## Production sequence
1. Select a reputable managed authentication provider or secure backend.
2. Create the authentication boundary before migrating real private collection data.
3. Keep passwords entirely inside the provider/backend; the catalog stores only the authenticated user/record ownership identifier needed by the application.
4. Protect private collection API/database operations with server-side authorization checks. Never rely only on hidden UI controls.
5. Add Sign In, Create Account, Forgot Password, Reset Password, and Sign Out screens.
6. Use secure session cookies/tokens according to the provider's documented best practices; never place credentials or tokens in collection records, URLs, exports, or localStorage.
7. Add rate limiting and abuse protection for authentication and recovery endpoints.
8. Add optional MFA/passkeys after the basic authentication boundary is verified.
9. Test that an unauthenticated user cannot read another user's collection, even by directly requesting an API/data endpoint.
10. Test logout, expired sessions, password reset, account recovery, and authorization failures without modifying collection records.

## Migration safety
- Do not migrate existing local prototype records automatically into a production account without an explicit user-controlled import.
- Before migration, export a backup and verify it can be restored.
- Preserve stable item IDs during migration to prevent duplicates.
- Authentication changes must not change coin classifications, series, countries, flags, photos, notes, or valuation fields.

## Release gate
The catalog must not be described as secure for the user's high-value private collection until the production authentication/backend boundary and authorization tests pass.
