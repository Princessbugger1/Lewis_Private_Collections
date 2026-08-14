# Three-State Field Rules

Applicable yes/no fields use a compact three-state control so an unanswered value is never confused with No.

## Cycle
- ❓ Unknown / Not Checked
- tap → ✅ Yes
- tap → ❌ No
- tap → ❓ Unknown / Not Checked

## UI
- Controls should be compact-to-medium, clearly readable, and comfortably tappable.
- The control should visually communicate all three states without requiring a large card.
- The current state must be understandable at a glance.
- The cycle should be consistent across applicable fields.

## Applicable examples
COA, OGP, original box, Sigma tested, photos complete, variety checked, attribution checked, authenticity checked, and similar yes/no questions.

## Data safety
- Unknown is a real stored state, not an empty value silently interpreted as No.
- Existing records receiving the new field default to Unknown / Not Checked until checked.
- Import, backup, restore, search, and filtering must preserve all three states.
- A research suggestion must not silently convert Unknown to No.
