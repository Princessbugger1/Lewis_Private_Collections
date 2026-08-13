# Backup and Data Safety Specification

## Goal
Protect the collection data from accidental loss while keeping backup controls simple.

## Automatic protection
- Keep the catalog data separate from the visual interface so records can be preserved if the app interface changes.
- Maintain a clear export/backup path for the owner's records.

## Manual backup
Provide a simple **Backup / Export** action that lets the owner save a complete copy of the catalog data and photos.

## Restore
Provide a **Restore** workflow that clearly explains what will happen before replacing or merging data.

## Safety
- Never silently overwrite the only copy of the collection.
- Preserve catalog numbers when restoring records.
- Keep deleted records separate through Trash rather than treating deletion as immediate permanent loss.
- Buyer-facing exports remain separate copies and cannot modify the master catalog.

## UX
Keep backup controls in Settings so they do not clutter the everyday catalog screen.
