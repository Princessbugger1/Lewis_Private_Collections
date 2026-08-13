# Delete and Trash Safety Specification

## Goal
Make deletion safe while keeping cleanup easy.

## Delete behavior
- Deleting a record removes it from the normal catalog view.
- Deleted records go to a Trash/Recently Deleted area rather than disappearing immediately.
- The user can restore a deleted record with its original catalog number and data intact.
- Permanent deletion requires a separate confirmation.

## Trash cleanup
Provide a **Empty Trash** action so the owner can permanently remove deleted records after reviewing them.

The action should clearly state that permanent deletion cannot be undone.

## Bulk deletion
Multiple selected records can be moved to Trash together. Bulk actions should show the number of records affected before confirmation.

## Organization safety
Deleting a group does not delete the records inside it. Removing a record from a group does not delete the record.
