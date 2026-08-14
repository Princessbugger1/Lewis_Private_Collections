# Audit History Rules

The catalog should maintain a useful history of important changes without storing passwords, access tokens, or unnecessary sensitive secrets.

## Events to track
- Item created, edited, archived/deleted, restored, or permanently deleted.
- Classification or series changed.
- Country/issuer changed.
- Important identification suggestions accepted, changed, or rejected.
- Research/scan review decisions.
- Backup/restore operations.
- Sharing enabled, changed, or revoked.

## History behavior
- Each event should record a timestamp, action type, affected stable item ID when applicable, and enough context to explain the change.
- User-entered values and important previous values may be recorded when needed for recovery/audit, but secrets must never be recorded.
- Audit history is separate from the visible coin description and should not clutter ordinary catalog views.
- History should support investigation of accidental changes and recovery workflows.
- Export/share controls must not expose private audit information by default.
- Audit history itself must be included in backups when supported, subject to privacy settings.
