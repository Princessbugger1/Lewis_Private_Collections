# Security Boundaries

## Principle
The private collection is the source of truth. External research and scanning are untrusted/advisory inputs.

## Import boundary
External results may propose values for coin fields, but must never silently write to an existing record. The user reviews, edits, and explicitly saves.

## Data minimization
Do not send unrelated collection records, private notes, storage locations, addresses, precise location, total collection value, or account secrets to research providers.

## Image privacy
When images leave the device, protect/remove GPS/EXIF metadata where technically possible. Do not expose local file paths.

## Sharing boundary
Read-only/public views must be generated from an explicit sanitized view and must exclude private fields by default.

## Classification boundary
Counterfeit, commemorative, token, paper money, and other categories remain collection classifications. Hiding a category is a display preference and must never delete its records.

## Change safety
Editing a field must update only the selected record. Delete requires an explicit user action. Backup/restore must not be confused with reset.
