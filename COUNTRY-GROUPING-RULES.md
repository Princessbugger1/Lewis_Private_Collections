# Country / Issuer Grouping Rules

1. The Country / Issuer value on each item is the source for grouping.
2. Adding a new country or issuer automatically creates a group when records are rendered; no fixed country-count limit exists.
3. Grouping must never copy, move, or delete the underlying item record.
4. Historical issuers (for example, Soviet Union or Kingdom of Hawaii) remain distinct from modern successor states unless the user deliberately changes the issuer.
5. Flags are optional presentation metadata only. A missing flag must never prevent an item from being entered or grouped.
6. A flag must never be inferred solely from a modern successor state when the recorded issuer is historical.
7. Users must be able to edit Country / Issuer later; the item remains the same record.
8. Unknown or unusual issuers remain valid values and can be added without code changes.
9. Country groups are filters/views, not separate copies of the collection.
