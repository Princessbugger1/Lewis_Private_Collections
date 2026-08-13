# Search Synonym Specification

## Goal
Let collectors search naturally without needing exact catalog terminology.

## Search matching
Search should normalize capitalization, common punctuation, and common abbreviations. Where safe, recognized synonyms should map to the same field value.

Examples:
- San Francisco ↔ S
- West Point ↔ W
- New Orleans ↔ O
- Philadelphia ↔ P
- Carson City ↔ CC

Search remains broad enough to find matching records across denominations and coin types.

## Safety
Do not make ambiguous single letters unexpectedly match unrelated text when that would produce noisy results. Prefer a mint-field match when a query is recognized as a mint abbreviation.

## User experience
The search bar should accept ordinary language. The user should not need to know how the database stores the value.
