# Certificate of Authenticity (COA) Document Schema

## Goal
Keep the simple COA status separate from the small amount of detailed certificate information that is actually useful in the catalog.

## Main status
COA uses the standard three-state control:
- ❓ Unknown / Not Checked — it has not been determined whether a COA is present
- ✅ Yes — a COA is known to be present
- ❌ No — it is known that no COA is present

The status must never be inferred from a missing attachment alone. A missing photo may simply mean the certificate has not been photographed yet.

## Detailed COA information
When available, keep only:
- certificate issuer
- certificate number
- notes
- owner photograph or scan of the certificate

## Search and filtering
COA status should be searchable/filterable independently from the detailed certificate fields. This allows the owner to find all items with COA = Yes, all items with COA = No, and all items still marked Unknown / Not Checked.

## Privacy
Certificate images and notes are private collection information by default and should not be included in public reports unless intentionally selected.

## Future-proofing
The schema should allow a certificate photo/scan and its basic details to remain attached to the collectible's stable record ID.
