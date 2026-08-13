# Search and Filter Specification

## Goal
Make a large collection easy to navigate without filling the main catalog screen with controls.

## Search
Search should be able to find records using relevant master fields, including:
- record ID
- title/description
- country/issuer
- denomination
- date/year
- series/type
- mint mark
- certification number
- variety/error
- serial number for paper money
- notes where appropriate

## Filters
Filters should be available for common collection-management tasks, including category, country/issuer, denomination, date/year, mint mark, grade, certification status, variety/error, and applicable three-state fields.

## Paper money filters
Where applicable, users should be able to narrow results by series, issuing district, star-note status, signature combination, and printing information.

## State handling
Unknown / Not Checked must remain distinct from No. Filtering for No must not accidentally include records that are still Unknown.

## UI
Search should be quick to access but compact. Advanced filters can live behind an expandable/filter panel so the main list stays uncluttered.

## Results
Search and filtering should operate on the master record set and must not create a separate copy of the collection.

## Future-proofing
New master fields should be eligible for search/filter support without requiring a new database or a separate catalog edition.
