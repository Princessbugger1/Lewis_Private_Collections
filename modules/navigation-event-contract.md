# Navigation Event Contract

The navigation layer may emit a single logical event whenever the selected destination changes.

Event fields:
- `destination`: one registered destination ID.
- `previousDestination`: the prior valid destination when available.

Handlers should tolerate repeated selection of the same destination. Navigation events must not clear collection records, reset record-level three-state fields, or change global settings unless the destination explicitly requires it.

This keeps navigation predictable while feature modules are developed independently.
