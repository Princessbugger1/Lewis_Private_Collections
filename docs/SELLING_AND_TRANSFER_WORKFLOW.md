# Selling, Gifting, and Transferring Collectibles

## Goal
Allow a collectible to leave the collection without destroying its historical record.

## Status
A record should support lifecycle states such as:
- In collection
- Sold
- Gifted
- Transferred
- Donated
- Lost / Missing

## Sale information
Where applicable, retain:
- sale date
- sale channel or venue
- realized sale price
- buyer information only when the owner intentionally records it and has a legitimate reason to retain it
- fees/commission when relevant
- notes about the transaction

## Historical record
Selling or transferring an item should not delete its history. The record should retain the item's prior collection information and identify the date and disposition.

## Financial separation
Purchase price, estimated value, and realized sale price are separate fields and must not overwrite one another.

## Photos and documents
Existing owner photographs, receipts, certificates, and provenance records should remain associated with the historical record unless the owner deliberately removes them.

## Privacy
Buyer information and transaction details are private by default and must not appear in a public/shared record unless intentionally included.

## Confirmation
A sale, deletion, or permanent disposition action should require clear confirmation so an accidental tap cannot remove a collectible from the active collection.

## Future-proofing
A disposed collectible remains addressable by its stable record ID so reports, history, and past exports remain consistent.
