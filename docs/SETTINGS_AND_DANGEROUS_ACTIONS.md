# Settings and Dangerous Actions

## Goal
Keep ordinary catalog use simple while making destructive or collection-wide actions unmistakably different.

## Separate actions
The application must distinguish clearly between:
- Restore Backup — recover a selected saved collection state
- Reset Settings — return application preferences to defaults
- Delete Collection — permanently remove collection data, requiring an explicit confirmation flow

These actions must never share an ambiguous button labeled simply "Reset."

## Restore safeguards
Before restoring a backup, show the backup date/version and explain that current data may be replaced or changed. Where practical, create a safety backup of the current state first.

## Delete safeguards
Collection deletion should require a deliberate confirmation and should not be available through an accidental single tap. The interface should clearly explain the scope of deletion.

## Settings reset
Resetting app preferences should not delete collection records, photographs, certificates, or other collection data.

## Future-proofing
Additional administrative actions should follow the same clear separation and confirmation pattern.
