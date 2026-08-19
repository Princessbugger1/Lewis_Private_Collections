# Trash and Recovery Policy

## Purpose
Trash is a safety stage for intentional deletion, not an immediate permanent-destruction command.

## Moving to Trash
- Moving an item from Active or Archive to Trash requires a clear user action.
- Show the number of selected records before a bulk move.
- Do not move records to Trash because of storage cleanup, backup failure, subscription expiration, or archive age.

## Recovery
- Provide a clearly labeled Trash area.
- Allow users to restore records during the retention period.
- Restored records should return to the state/location appropriate to the user's choice, with Archive available when the user does not want the item active.

## Retention
The final automatic Trash retention period must be chosen before launch and disclosed clearly. Until that product policy is finalized, implementation should not assume an irreversible automatic purge interval.

## Permanent deletion
Permanent deletion must be a separate, deliberate action with a stronger confirmation. It should explain that recovery will no longer be available and should not be confused with removing a duplicate storage copy.

## Photos
Deleting a record from Trash permanently may remove its associated local media according to the final deletion policy, but storage cleanup of a backed-up photo is not itself a Trash operation.

## Testing
Test restore, bulk restore, archive-to-trash, active-to-trash, accidental cancellation, empty Trash, and permanent deletion. Verify that no background storage task can silently purge Trash items.
