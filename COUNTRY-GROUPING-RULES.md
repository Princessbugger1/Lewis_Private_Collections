# Country / Issuer Grouping Rules

Country/issuer is a first-class, editable field and grouping dimension.

1. The Country / Issuer value on each item is the source for grouping.
2. Adding a new country or issuer automatically creates a group when records are rendered; there is no fixed country-count limit.
3. Grouping must never copy, move, or delete the underlying item record.
4. Historical issuers (for example, Soviet Union or Kingdom of Hawaii) remain distinct from modern successor states unless the user deliberately changes the issuer.
5. A country/issuer may have a display name, normalized identity, historical aliases, and optional flag asset reference.
6. Flags are optional presentation metadata only. A missing flag must never prevent an item from being entered or grouped.
7. A flag must never be inferred solely from a modern successor state when the recorded issuer is historical.
8. Users must be able to edit Country / Issuer and its flag association later; the item remains the same record.
9. Unknown or unusual issuers remain valid values and can be added without code changes.
10. Country groups are filters/views, not separate copies of the collection.
11. Country grouping remains compatible with custom series and custom classifications.
12. Removing a country group must never delete the items assigned to it.
