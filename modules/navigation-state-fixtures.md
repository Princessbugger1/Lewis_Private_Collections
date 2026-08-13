# Navigation State Fixtures

Use these fixed scenarios during integration testing.

- Initial state: `coins` is active.
- Valid transition: `coins` → `paper-money`.
- Valid transition: `paper-money` → `lookup`.
- Valid transition: `lookup` → `collection`.
- Valid transition: `collection` → `settings`.
- Return transition: `settings` → `coins`.
- Invalid destination: retain the last valid destination.
- Re-selecting the active destination: no data mutation.

These fixtures are navigation-only and must not contain real collection records.