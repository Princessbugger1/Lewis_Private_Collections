# Navigation Behavior Specification

The navigation module is phone-first and uses five primary destinations:

- Coins: coin catalog and coin records.
- Paper Money: paper-money catalog and records.
- Lookup: research and identification tools.
- Collection: collection views, search, filtering, and inventory status.
- Settings: global catalog preferences.

Interaction requirements:

- One tap should move to a destination.
- The active destination must be visually obvious.
- Navigation must not erase unsaved record data.
- Returning to a destination should preserve the current collection state.
- Navigation controls must remain usable on narrow phone screens.
- Global settings must not silently override an individual record's explicit optional-section choice.

Safety boundary:

This specification is isolated on the build/navigation branch. It does not alter the live main branch or replace the existing catalog shell.
