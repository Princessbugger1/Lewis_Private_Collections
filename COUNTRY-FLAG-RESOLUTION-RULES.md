# Country and Flag Resolution Rules

Country/issuer grouping must scale beyond a small built-in list.

- The catalog must support arbitrary country and issuer labels rather than a fixed maximum number of countries.
- When a record receives a confirmed country/issuer, the catalog should automatically create or populate that group's view.
- If a country is not already present, the system should add it without requiring a software update.
- Flag selection should use maintained reference data where possible.
- The flag is presentation metadata; it must never be required to identify or save the underlying record.
- If no suitable flag exists, show a neutral fallback and keep the country/issuer text intact.
- Historical issuers, territories, and ancient entities may not map cleanly to modern national flags; do not force a modern flag when the historical identity is different.
- Users can correct the country/issuer and flag presentation without changing the stable record ID.
- A country group is a view/filter over records, not a separate copy of those records.
- Searching for a country must find records even when its flag asset is unavailable.
