# Navigation Routing Contract

Feature modules should receive navigation changes through a single routing boundary.

Requirements:
- Route names must come from the registered destination IDs.
- Unknown destinations fall back to `coins`.
- Routing must not reload the entire application.
- Routing must not mutate collection records.
- The router should expose the current destination so feature modules can render their own view.
- The navigation layer remains independent of the implementation details of Coins, Paper Money, Lookup, Collection, and Settings.

This keeps the navigation module small and lets the feature modules be developed independently.
