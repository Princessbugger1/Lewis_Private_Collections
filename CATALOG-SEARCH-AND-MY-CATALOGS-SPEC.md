# Catalog Search and My Catalogs Specification

## Collection Search

The catalog has a dedicated collection search, separate from external research.

- Search is case-insensitive.
- Passwords are the only case-sensitive user input.
- Search accepts multiple terms and treats them as an AND filter.
- Examples: `1909 silver`, `1909 dime`, `Morgan silver`, `Germany 1923`.
- Search may match relevant user-entered fields including type, country/issuer, denomination, year/date, mint, series, grade/condition, serial number, composition, purity, variety, error, certification information, and notes.
- Search filters existing records only; it never creates, edits, deletes, or duplicates records.
- Search should report the number of matching items.
- Search should work within the current view/custom catalog and provide a way to search the full collection.
- User-entered values are not restricted to a predefined country, denomination, composition, or other master list. Unknown/custom values must be stored and searchable.
- Search should use forgiving/fuzzy matching for appropriate text fields so likely misspellings can still find relevant records.
- Fuzzy matching must never silently alter the user's stored text.
- Where useful, the interface may offer a “Did you mean …?” suggestion while preserving the original entry.
- Matching should tolerate capitalization differences, common typos, missing/extra letters, and transposed letters where practical.

## My Catalogs

Users may create custom organizational views inside their collection without duplicating item records.

Examples:
- U.S. Silver Dollars
- German Coins
- Morgan Dollars
- Coins to Grade
- Coins for Sale

An item may belong to multiple custom catalogs. Custom catalogs are organizational memberships, not copies of the item.

## UI Principles

- Keep the main collection screen clean and uncluttered.
- Use a simple View/Sort/Collections control rather than permanently displaying every filter.
- Built-in categories describe what an item is; My Catalogs describe how the user wants to organize it.
- Optional organization features should respect the existing on/off settings architecture where appropriate.
- Custom catalog names are free-entry and case-insensitive for searching.
