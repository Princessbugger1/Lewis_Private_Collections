# Audit Log Rules

The catalog should maintain a lightweight history for important destructive or access-related actions.

## Actions to record
- Item created, edited, restored, or deleted.
- Category/classification/series created, renamed, hidden, restored, or deleted.
- Share link created, changed, or revoked.
- Authorization/licensing status changed.
- Backup restore started, completed, cancelled, or failed.

## Safety
- Audit history is informational and must not contain secrets such as passwords, access codes, or private authentication tokens.
- The history should identify the action, affected record/group where appropriate, and timestamp.
- Normal metadata edits should not create an overwhelming amount of noise; the implementation can group related edits.
- Audit history must not become a second copy of private collection data.
