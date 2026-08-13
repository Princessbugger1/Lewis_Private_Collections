# App Settings and User Control

## Goal
Keep important behavior configurable by the owner without changing the underlying collection data.

## Settings categories
The future application may provide settings for:
- display preferences
- default sort order
- thumbnail size
- research/reference display
- privacy and sharing defaults
- backup/export preferences
- confirmation behavior
- accessibility preferences

## Data separation
Changing a display or behavior setting must not alter the underlying master record unless the setting explicitly represents a collection-data choice.

## Safe defaults
Privacy-sensitive settings should default to the safer/private option. Destructive or irreversible behavior should require deliberate confirmation.

## Three-state fields
Settings must not collapse collection Unknown / Not Checked values into No. Display preferences may hide a state temporarily, but the underlying value remains intact.

## Reset behavior
A future Reset Settings action should restore application preferences without deleting collection records, owner photographs, history, or backups.

## Future-proofing
Settings should be versioned or migrated as the application evolves so an update does not unexpectedly reset or reinterpret existing preferences.
