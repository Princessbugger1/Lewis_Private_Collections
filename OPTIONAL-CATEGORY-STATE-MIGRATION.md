# Optional Category State Migration

Optional category visibility preferences use a versioned local-storage key so future changes can migrate settings without touching collection records.

Current categories:
- Paper Money
- Tokens
- Counterfeits

Migration rule: changing the visibility key or adding a category must never modify, delete, or rewrite the catalog's saved records. A migration may copy visibility preferences only.

If a future version removes a category from the interface, its saved records must remain recoverable when that category is restored or the data is exported.
