# Filter Combination Specification

## Goal
Allow quick, intuitive narrowing of large collections without making search complicated.

## Behavior
Filters combine with the search query using AND logic by default.

Examples:
- Search: San Francisco + Year: 1964 → 1964 San Francisco records
- Mint: West Point + Denomination: Quarter → West Point quarters
- Country: United States + Grade: MS65 → matching U.S. records graded MS65

## Controls
- Each active filter is shown as a removable chip or compact indicator.
- A Clear All control removes active filters without deleting any records.
- Result count updates immediately after filtering.
- Search text remains visible while filters are active.

## Safety
Changing filters never changes stored coin data. Empty results should offer a clear way to broaden the search.
