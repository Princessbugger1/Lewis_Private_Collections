# Certificate of Authenticity (COA) Document Schema

## Goal
Keep the simple COA status separate from the detailed certificate information.

## Main status
COA uses the standard three-state control:
- ❓ Unknown / Not Checked — it has not been determined whether a COA is present
- ✅ Yes — a COA is known to be present
- ❌ No — it is known that no COA is present

The status must never be inferred from a missing attachment alone. A missing scan may mean the certificate exists elsewhere or has not been checked.

## Detailed COA information
When available, a record may include:
- certificate issuer
- certificate number
- certificate date
- issuing organization
- description of what the certificate authenticates
- notes
- owner photograph or scan of the certificate

## Verification
A certificate can be marked as owner-confirmed, needing review, or otherwise unverified when appropriate. The presence of a document does not automatically establish that the issuing organization or authenticity has been independently verified.

## Search and filtering
COA status should be searchable/filterable independently from detailed certificate fields. This allows the owner to find all items with COA = Yes, all items with COA = No, and all items still marked Unknown / Not Checked.

## Privacy
Certificates may contain names, addresses, transaction information, or other sensitive data. Certificate images and details are private by default and should not be included in public reports unless intentionally selected.

## Future-proofing
The schema should allow multiple supporting certificates or documents to be associated with one collectible without changing the collectible's stable record ID.
