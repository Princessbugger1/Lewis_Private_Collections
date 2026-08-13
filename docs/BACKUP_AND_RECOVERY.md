# Backup and Recovery Plan

## Goal
Protect the collection from device failure, accidental deletion, software bugs, and hosting changes.

## Backup layers
The long-term design should support more than one kind of backup:
- Catalog data export
- Complete owner-media backup
- Git history for application files and documentation

## Separation
A Git repository containing application code is not automatically a complete backup of the owner's private collection. Collection records and owner photographs need their own protected backup strategy.

## Backup contents
A complete collection backup should preserve:
- Master records
- Record IDs
- Three-state fields
- Owner photographs and media relationships
- Research/verification metadata
- Provenance and notes
- Appropriate history needed to recover important changes

## Recovery
A restore should first validate the backup, identify conflicts, and provide a recoverable path before modifying current data.

## Multiple copies
The final backup strategy should avoid relying on one device, one account, or one hosting provider. Copies should be stored separately enough that a single failure cannot destroy every copy.

## Privacy
Backups containing private collection information must be treated as private data. Public application hosting should never be used as a substitute for a private backup.

## Testing
A backup is not considered dependable merely because an export file exists. The future system should periodically test that backups can actually be read and restored.

## Future-proofing
Backups should use versioned formats and documented restore procedures so the collection remains usable even if the current application is replaced.
