# Catalog Search Architecture

## Goal
Let a collector find coins naturally without requiring them to know exact database terminology.

## Examples
The search experience should support requests such as:
- "dimes between 1940 and 1960"
- "Morgan dollars"
- "silver coins"
- "coins from 1921"
- "coins with photos missing"
- "coins I haven't checked for a COA"
- "coins in the German collection"

## Structured filters
Search should be able to combine fields such as:
- Country/region.
- Denomination/type.
- Year or year range.
- Mint mark.
- Date range acquired.
- Composition/metal.
- Certification/grading information.
- Collection/series.
- User-defined categories.
- Yes/No/Unknown three-state fields.
- Inventory status when Professional Mode is enabled.

## Three-state fields
Applicable yes/no questions use three states:
- ❓ Unknown / Not Checked.
- ✅ Yes.
- ❌ No.

Search must distinguish Unknown from No. For example, "COA = No" must not return coins whose COA status is still Unknown.

## Natural-language search
A natural-language search layer may translate simple requests into structured filters, but the resulting filters should be visible and editable before they are applied when ambiguity exists.

Example:
"Dimes between 1940 and 1960"
becomes approximately:
- Denomination = Dime
- Year >= 1940
- Year <= 1960

The user should be able to correct the interpretation without retyping the search.

## Performance
- Search should use indexed structured fields rather than scanning large image files.
- Thumbnails should be used in result lists.
- Debounce rapid typing so every keystroke does not trigger an expensive search.
- Large result sets should paginate or virtualize rather than render thousands of cards simultaneously.
- Image/research processing must remain separate from ordinary catalog search.

## Safety
- Search and filtering are read/query operations and must never delete or modify records as a side effect.
- Clearing filters returns to the user's normal collection view.
- Search history, if added, should not expose private collection information outside the account.
