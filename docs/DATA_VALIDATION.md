# Master Data Validation Rules

## Purpose
Prevent incomplete or contradictory records from silently becoming part of the master collection.

## Core validation
- Every record has a stable record ID.
- Category is required.
- Coin records can identify obverse and reverse media; edge is optional.
- Paper-money records can identify face and reverse media.
- Date/year values must use a consistent structured representation.
- Denomination, mint mark, series, and serial number remain separate fields where applicable.

## Paper-money validation
- Serial number is stored separately from denomination and series.
- Signature fields remain separate from general notes.
- Printing information remains separate from rarity/valuation notes.
- Signature recognition may suggest a result, but a suggestion must not silently become a verified fact.

## Photo validation
- Owner photos and external reference images use separate fields.
- A reference image cannot silently replace an owner photo.
- Photo thumbnails must point back to the owner's original media.

## Three-state validation
Applicable yes/no fields must accept exactly three states: Unknown, Yes, or No. A missing value must not automatically become No.

## Restore validation
Imports and restores should be validated before modifying existing records. Conflicting IDs or malformed records should be reported rather than silently overwritten.

## Future-proofing
Validation should be implemented against the master data model so all future views and simplified versions inherit the same safeguards.
