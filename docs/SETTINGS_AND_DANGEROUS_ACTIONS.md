# Settings and Dangerous Actions

## Goal
Keep ordinary catalog use simple while making important collection-wide actions clear.

## Separate actions
The application must distinguish clearly between:
- Restore Backup — recover a selected saved collection state
- Reset Settings — return application preferences to defaults
- Delete Collection — permanently remove collection data, requiring an explicit confirmation flow

These actions must never share an ambiguous button labeled simply "Reset."

## Restore warning
Immediately before restoring, show a short, clear message:

**Restore this backup? Your current collection will be replaced with the saved version.**

Then provide clear **Cancel** and **Restore** choices.

## Restore safeguards
Show the backup date/version before confirmation. Where practical, create a safety backup of the current state first.

## Delete safeguards
Collection deletion should require a deliberate confirmation and should not be available through an accidental single tap. The interface should clearly explain the scope of deletion.

## Settings reset
Resetting app preferences should not delete collection records, photographs, certificates, or other collection data.

## Future-proofing
Additional administrative actions should follow the same clear separation and confirmation pattern.
