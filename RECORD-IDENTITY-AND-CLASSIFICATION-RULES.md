# Record Identity and Classification Rules

Every collection item has one stable record identity, while classification, country/issuer, series, and grouping are editable attributes.

- Stable record ID must not change when a user edits classification, country, series, year, or description.
- Supported classifications are not a closed list. Include common types such as Coins, Ancient Coins, Tokens, Medals, Paper Money/Banknotes, Sets, Counterfeit, Commemorative, and Other, while allowing user-created classifications.
- Any classification can be renamed, edited, reordered, hidden, or retired without deleting the records assigned to it.
- New classifications can be added at any time.
- A record can be corrected from one classification to another without creating a duplicate.
- Country/issuer is an independent attribute from classification and series.
- Country/issuer lists must be expandable; an unusual country such as Peru or Paraguay must not require a developer update just to appear as a country group.
- Flag imagery and country labels should be resolved from a maintained data source or local reference data, with a safe fallback when no flag is available.
- Country grouping is derived from record data and must never be the sole source of truth for the record.
- Filtering or hiding a classification/country/series changes presentation only and never deletes records.
- Ancient coins are first-class collection items and must not be forced into modern-country or modern-series assumptions.
- Ambiguous identification remains editable and can be marked Needs Review rather than being forced into an incorrect category.
