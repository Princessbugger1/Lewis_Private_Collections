# Navigation QA Gates

The navigation build is ready for integration only when all gates pass.

- All five registered destinations are reachable.
- Active state is correct after every navigation change.
- Collection data is unchanged by navigation.
- Record-level three-state fields remain unchanged.
- Phone and desktop layouts remain usable.
- The presentation-mode switch remains discoverable.
- A failed destination falls back without destroying the application shell.
- The integrated build is tested before merging to `main`.
