# Lewis Private Collections — Language Support

## Goal
Keep the catalog ready for international collectors without slowing the core English build.

## Design rules
- English is the initial production language.
- User-interface text is stored separately from collection data.
- Changing interface language must never translate, overwrite, or alter the user's coin records.
- Language support should be modular so additional translations can be added without rebuilding catalog data.
- Planned languages may include Spanish, French, German, Italian, and Portuguese, with more added later.
- Dates, weights, measurements, currencies, and number formats should eventually respect the selected locale where appropriate, while preserving the original stored value.
- Country names and numismatic terminology should use a consistent reference vocabulary rather than being silently rewritten.
- If a translation is missing, fall back to English rather than displaying a broken label or placeholder.

## Future settings
Settings > Language will allow the user to select the interface language. The setting is per user/catalog and should not change the language of another user's catalog.

## Status
Architecture/planning only. Do not treat translations as complete until each language has been reviewed and tested.