# Quantity and Grouped Items

## Goal
Allow one catalog record to represent multiple identical or grouped items when that makes sense.

## Quantity field
Quantity is a compact numeric field that can be entered or edited directly. A normal single item defaults to quantity 1.

## Grouped records
A record may represent more than one matching item when the owner chooses to group them. The quantity remains visible and easy to change.

## Individual detail
If individual pieces later need their own photos, grades, certificates, or notes, the grouped record should be able to be separated into individual records without losing the original information.

## Search and totals
Search results and collection totals should account for quantity appropriately, while still treating the record itself as one catalog entry.

## Safety
Changing quantity must not delete the record or its attachments. Reducing quantity should require deliberate editing.

## Future-proofing
The data model should support both single-item and grouped-item records without redesigning the main catalog.
