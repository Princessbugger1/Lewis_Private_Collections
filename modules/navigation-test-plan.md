# Navigation Integration Test Plan

Before merging navigation into `main`, verify:

1. Five destinations are visible and readable on a phone-sized viewport.
2. Coins is the initial active destination.
3. Each destination changes the active state without a full page reload.
4. Existing collection data remains intact while navigating.
5. Global Settings does not overwrite an individual record's three-state fields.
6. Paper Money selection does not alter existing coin records.
7. Lookup and Collection are available even before their full feature modules are integrated.
8. The navigation can be integrated without wholesale replacement of `index.html`.

Merge rule: do not merge into `main` until these checks pass against the integrated build.
