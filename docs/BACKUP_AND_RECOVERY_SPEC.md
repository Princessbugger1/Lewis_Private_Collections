# Backup and Recovery Specification

## Goal
Prevent loss of the master catalog, collection records, and owner photographs and make recovery understandable for the owner.

## Separate backups
Maintain separate backup concepts for:
- Application/project source code
- Collection database/data
- Owner photographs and other media
- Configuration and export settings

## Recovery
A backup should be usable to restore the catalog after accidental deletion, corruption, software changes, or loss of a hosting service.

## Version history
Preserve working project history so an earlier version can be identified and restored when a later change causes a problem.

## Owner-controlled copy
Provide a practical export/backup package that the owner can save outside GitHub, such as on a personal computer or other storage under the owner's control.

## Data integrity
Exports should preserve stable catalog numbers/record IDs and relationships between records, groups, and media so restoration does not create duplicate items.

## Future automation
A later production implementation may offer scheduled backups, but the design must never assume that one hosted copy is the only copy.
