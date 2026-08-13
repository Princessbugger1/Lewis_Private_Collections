# Navigation State Contract

Navigation state is UI state only. Changing the active destination must not mutate coin, paper-money, or collection records.

Rules:
- Start on `coins` unless an existing route explicitly requests another valid destination.
- Accept only registered destination IDs.
- Preserve the active destination while the user moves between views.
- Do not clear forms or record data merely because navigation changes.
- Keep global presentation preferences separate from record-level data.
