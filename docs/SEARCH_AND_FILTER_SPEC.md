# Search and Filter Specification

## Goal
Make a large collection easy to navigate without filling the main catalog screen with controls.

## Search
Search should be case-insensitive for all normal catalog searches. Password handling is the exception and must use authentication/password rules rather than catalog-search rules.

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

Search should support ordinary natural combinations of terms. Examples:
- "dime"
- "1909"
- "1909 silver"
- "United States dollar"
- "Franklin" and reasonable misspellings/typos where the search system can identify the intended term without changing stored data

## Date/year range search
Users should be able to search a year/date range, for example:
- Dimes from 1940 through 1960
- United States coins from 1900 through 1920
- Silver coins from 1940 through 1960

The range should be inclusive of both endpoints by default. A range can be combined with other search terms and filters.

## Search behavior
- Search operates against the user's own catalog records.
- Search must not require a term to exist in a predefined master list before returning matching user-entered data.
- Unknown countries, denominations, descriptions, or other user-entered terms remain searchable.
- Search should tolerate normal capitalization differences and common input variations.
- Fuzzy matching/typo assistance should suggest or rank likely matches without silently changing the user's stored information.

## Filters
Filters should be available for common collection-management tasks, including category, country/issuer, denomination, date/year, mint mark, grade, certification status, variety/error, and applicable three-state fields.

## Paper money filters
Where applicable, users should be able to narrow results by series, issuing district, star-note status, signature combination, and printing information.

## State handling
Unknown / Not Checked must remain distinct from No. Filtering for No must not accidentally include records that are still Unknown.

## UI
Search should be quick to access but compact. Advanced filters can live behind an expandable/filter panel so the main list stays uncluttered.

A simple search bar should handle common searches, while a compact Advanced Search/Filters area can expose date ranges and additional criteria when needed.

## Results
Search and filtering should operate on the master record set and must not create a separate copy of the collection.

## Future-proofing
New master fields should be eligible for search/filter support without requiring a new database or a separate catalog edition.
