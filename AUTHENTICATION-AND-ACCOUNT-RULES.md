# Authentication and Account Rules

The catalog should protect collection data with a clear account-access workflow without making normal catalog use unnecessarily difficult.

- The application may require account authentication before protected collection data can be accessed.
- Login must provide a clear way to sign in and sign out.
- A **Forgot Password** path must be available wherever password login is offered.
- Password recovery must use a secure recovery mechanism rather than displaying or emailing the existing password.
- New passwords must meet the app's current security requirements and must not be stored in readable/plaintext form.
- Authentication errors should not reveal whether an unrelated account exists beyond what the recovery workflow safely permits.
- Session expiration should return the user to a clear sign-in state without deleting or altering collection records.
- Signing out must not delete local collection data.
- Authentication and collection visibility are separate: hiding a category or record never changes account security.
- If the app later supports additional sign-in methods, adding one must not remove the Forgot Password path for users who still use password authentication.
