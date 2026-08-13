# Import and Duplicate Protection

## Goal
Prevent duplicate collectibles when records or backups are imported, while never silently merging two different items.

## Stable record ID
Every master record has a stable record ID. A matching record ID is the strongest signal that an import may represent an existing item.

## Duplicate signals
When record IDs differ or are unavailable, the import process may compare available identifying information such as:
- category
- country/issuer
- denomination
- date/year
- mint mark
- series/type
- certification number
- serial number for paper money

These signals are only candidates for review, not proof that two records are the same collectible.

## User review
Potential duplicates should be shown for review before merging. The owner can choose to keep both records, merge them, or leave them unchanged.

## No silent merge
The system must never silently merge records merely because they look similar. Two physically different coins can share the same date, denomination, and mint mark; two notes can share many identifying fields while still being different items.

## Photos
Owner photographs may help the user determine whether records represent the same physical item, but photos should not be used to delete or overwrite records automatically.

## Backup safety
Before a bulk import or merge operation, provide a recoverable backup/export path where practical.

## Future-proofing
Duplicate detection should remain a review aid. The master record and owner confirmation remain authoritative.
