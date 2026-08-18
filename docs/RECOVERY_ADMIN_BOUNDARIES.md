# Recovery and Administrator Boundaries

## User-first recovery
- Normal Recently Deleted recovery is self-service.
- Re-authentication may be required before restoring an item, collection, or backup.
- Users should not be required to contact an administrator for ordinary accidental deletions.
- The product should not advertise guaranteed recovery of permanently deleted information.

## Administrator recovery
Administrator recovery is an exceptional safety mechanism, not a routine customer workflow.

If implemented, an administrator may only act on an authenticated account through authorized administrative controls. The administrator should never need the user's password.

Before restoring:
- Verify that the request is associated with the correct account.
- Verify that an actual recoverable copy exists.
- Verify the selected backup/version and affected collection.
- Confirm the scope of the restoration before execution.

After restoring:
- Record an audit event identifying the action, account, time, and restored backup/version.
- Do not expose unrelated users' information to the administrator.
- Do not send collection data through ordinary email or chat as a substitute for secure restoration.

## Recovery limitations
- Recovery depends on an available recoverable copy or backup.
- Recovery may fail after permanent deletion, retention expiration, backup loss, corruption, or other technical failure.
- User-facing documentation should encourage independent local backups.
- Final security, privacy, retention, authentication, and administrator-access policies require qualified legal/security review before commercial release.
