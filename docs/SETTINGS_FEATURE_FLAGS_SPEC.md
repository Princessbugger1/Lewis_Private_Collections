# Settings Feature Flags

Optional catalog features should be independently controllable from Settings.

Initial flags:
- compositionVisible
- expectedWeightVisible
- actualWeightVisible
- metalTestVisible
- customGroupsVisible
- historyVisible
- cameraResearchVisible

Rules:
- Turning a feature off hides its controls; it must not delete stored data.
- Turning it back on restores access to the stored data.
- Unknown/missing settings use safe defaults.
- Settings changes must not alter coin lifecycle state.
- Settings should be local to the catalog owner/account context once authentication is introduced.

This specification is intentionally separate from the main UI so additional optional features can be added without redesigning the record model.
