# Backup and Restore

## Goal
Protect the collection from accidental loss while keeping restoration understandable for the owner.

## Backup scope
A backup should preserve, as applicable:
- collectible records
- quantities
- photographs and certificate images
- provenance and notes
- certification information
- COA status and details
- research/verification information
- collection history

## Non-destructive backups
Creating a backup must not modify the live collection.

## Restore safety
Before a restore replaces or changes current data, the application should clearly explain what will happen and provide an opportunity to cancel. Where practical, the current state should be backed up before restoration.

## Validation
Backups should be validated sufficiently to detect incomplete or corrupted data before being treated as a usable restore source.

## Versioning
The system should retain enough metadata to identify the backup date and application/data version so migrations can be handled safely.

## Photos
Photo files should remain linked to the correct stable collectible record IDs during backup and restore.

## Quantity and history
Quantity changes and important record history should remain traceable after restoration.

## Future-proofing
The backup format should be portable and documented so the owner is not permanently dependent on one application or provider.
