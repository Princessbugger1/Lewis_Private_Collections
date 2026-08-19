# Quality and Testing Strategy

## Goal
Add features without letting the catalog become fragile, slow, or difficult to use.

## Testing layers
1. Unit tests for data rules and calculations.
2. Component tests for important controls and workflows.
3. Integration tests for saving, search, backup/restore, research, and subscription entitlements.
4. Device/browser testing for phone-sized layouts and supported desktop environments.
5. Accessibility testing with larger text, screen readers where available, reduced motion, and keyboard/navigation support where applicable.
6. Performance testing with realistic small, medium, and large collections.
7. Regression testing after changes to shared navigation, data models, or subscription logic.

## Critical user journeys
The following should remain testable end-to-end:
- First launch → onboarding → first coin.
- Add photos → research → choose candidate → verify → save.
- Leave an unfinished coin → close/reopen → continue or discard.
- Edit a saved coin → autosave → reopen.
- Search by natural-language request → inspect filters → refine results.
- Export a collection → restore it safely.
- Move an item to trash → restore when permitted → permanent deletion confirmation.
- Change plan → verify entitlements without losing existing data.
- Enter Professional Mode → use inventory fields → leave Professional Mode without data loss.
- Idle → mascot screensaver → tap → return to catalog.

## Performance targets
Avoid arbitrary hardware requirements during early development. Measure real behavior and establish targets after profiling.

Priority rules:
- Catalog browsing should remain responsive while images load.
- Search should not block the main interface.
- Decorative animation must yield to user interaction and system resource constraints.
- Large imports/exports should provide progress rather than appearing frozen.
- Research/network operations should be asynchronous where practical.

## Regression protection
When a bug is found:
- Reproduce it.
- Fix it.
- Add a regression test when practical.
- Record the user-visible behavior that should remain true.

## Release discipline
New features should not be considered complete merely because they work in one happy-path test. They should be checked for interruption, cancellation, invalid input, large data sets, accessibility, and interactions with existing workflows where relevant.
