# Duplicate Detection and Merge Protection

## Goal
Prevent the same collectible from being entered twice while protecting the original information when possible duplicates are found.

## Detection
The catalog should compare useful identifying information such as:
- record identifiers
- coin country/issuer, denomination, date, mint mark, type, and certification number
- paper-money issuer, denomination, series, date, serial number, and certification number

Matching should be treated as a warning or review opportunity, not automatic proof that two records are the same.

## User review
Potential duplicates should be shown together so the owner can compare the records before choosing an action.

## Merge safety
A merge must never silently discard information. Before merging, the system should identify conflicting fields, photographs, documents, provenance, valuation history, and notes.

## Preserve history
When records are merged, the surviving record should retain relevant history and references to the merged record so past exports and records remain traceable.

## No automatic deletion
The system should not automatically delete a record merely because it resembles another record.

## Import protection
Bulk imports should perform duplicate checks before creating new records and should allow the owner to skip, merge, or create a separate record when appropriate.

## Future-proofing
Duplicate matching should be extensible as new identifiers and collectible types are added.
