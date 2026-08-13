# Search and Filtering Specification

## Goal
Make a large collection easy to find without requiring the owner to remember exactly how a record was entered.

## Search
Global search should be able to find records using relevant text such as:
- item name/type
- country or issuer
- denomination
- date/year
- mint mark
- series
- variety/error
- certification number
- serial number
- notes and selected research fields

## Filters
Useful filters should include:
- coins vs paper money
- country/issuer
- denomination
- date range
- mint mark
- grading service/grade
- certified vs uncertified
- three-state fields
- photographed vs missing photos
- research/verification status
- collection lifecycle status

## Combining filters
Multiple filters should be combinable. Clearing one filter must not unexpectedly clear unrelated filters unless the owner chooses a reset-all action.

## Unknown values
Unknown / Not Checked should remain a distinct searchable/filterable state. It must never be treated as No.

## Results
Search results should identify the collectible clearly and show enough information to distinguish similar items. Selecting a result opens the master record rather than creating a duplicate copy.

## Performance
Large collections should remain responsive. Search and filtering should avoid loading every full-size photograph when thumbnails or text are sufficient.

## Future-proofing
Search should operate on structured fields and stable record IDs so newly added fields can become searchable without changing the identity of existing records.
