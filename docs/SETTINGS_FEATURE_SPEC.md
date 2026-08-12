# Settings Feature Specification

This document defines the modular feature-switch behavior for Lewis Private Collections before it is integrated into the main catalog UI.

## Feature switches

- Composition / metal information
- Expected/reference weight
- Actual measured weight
- Sigma / metal testing
- Photos
- Certification details
- Research assistance
- Help & troubleshooting

## Rules

1. Turning a feature off hides its UI; it must not delete stored information.
2. Turning a feature back on restores the UI and the stored information.
3. Existing records remain intact when settings change.
4. New features should default to the least intrusive behavior.
5. Research assistance stays inside the catalog context and should not navigate away from the current record.
6. Camera-first identification requires user confirmation before changing a record.
7. VAM assistance should point collectors toward trusted references rather than pretending to guarantee automated VAM identification.
8. Settings should remain accessible from an obvious, easy-to-find Settings control on both phone and desktop views.
