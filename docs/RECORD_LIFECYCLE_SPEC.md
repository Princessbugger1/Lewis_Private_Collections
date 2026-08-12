# Record Lifecycle Specification

A coin record must support more than a simple delete.

## States
- `active`: currently in the collection
- `sold`: sold but retained as history
- `transferred`: given/transferred away but retained as history
- `trash`: deliberately deleted but recoverable
- `permanently_deleted`: removed from the active data set after explicit confirmation

## Required UI actions
- Delete
- Restore (Trash only)
- Empty Trash
- Delete Permanently
- Mark Sold
- Mark Transferred

## Safety requirements
- Delete must require confirmation.
- Empty Trash must require a stronger confirmation because it is irreversible.
- Selling/transferring must not destroy photos, notes, provenance, purchase information, or other historical fields.
- Active collection counts must exclude sold/transferred/trash records.
- Search and filters should provide a way to find historical records without mixing them into the active collection by default.
