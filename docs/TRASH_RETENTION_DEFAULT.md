# Trash Retention Default

## Recommended default
For the initial product design, retain items in Trash for **30 days** before automatic permanent deletion, with a visible countdown and an option to permanently delete sooner.

## Safety requirements
- Never silently purge an item without showing the user that Trash has an automatic retention period.
- Show the scheduled deletion date when practical.
- Allow restore at any point before permanent deletion.
- Allow deliberate permanent deletion sooner with a stronger confirmation.
- Bulk operations must clearly show the number of records affected.

## Why 30 days
Thirty days is long enough to catch many accidental deletions while preventing Trash from becoming unlimited storage indefinitely. The final commercial/product policy can change this period before launch.

## Backups and storage cleanup
Trash retention is independent from backup retention and photo-storage cleanup. A verified backup does not automatically shorten the Trash period, and storage cleanup must not purge Trash items.

## Subscription/cloud data
Cloud-only Trash follows the final cloud-data policy and should not be represented as protected indefinitely merely because a record is in Trash locally.
