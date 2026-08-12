# Settings Storage Specification

Settings are preferences, not destructive commands.

Recommended local preference keys:

- `showComposition`
- `showExpectedWeight`
- `showActualWeight`
- `showMetalTesting`
- `showPhotos`
- `showCertification`
- `showResearch`
- `showHelp`

Default behavior: enabled for ordinary catalog features, with optional advanced sections able to be disabled by the collector.

Important:
- Changing a setting must not modify or delete coin records.
- Settings should be stored separately from collection records.
- Import/export should preserve collection records independently of UI preferences.
- A future account/sync layer may replace local settings storage without changing the record format.
- The UI should always provide an obvious Settings entry on phone and desktop.
