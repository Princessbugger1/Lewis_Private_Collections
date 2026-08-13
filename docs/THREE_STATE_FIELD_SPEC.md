# Three-State Field Specification

## Goal
Make yes/no checks fast while preserving the important distinction between "No" and "not checked yet."

## Tap cycle
Applicable yes/no fields use a compact three-state control:
1. ❓ Unknown / Not Checked
2. ✅ Yes
3. ❌ No
4. Tap again returns to ❓ Unknown / Not Checked

## Applies to examples such as
- COA
- OGP
- Original Box
- Sigma Tested
- Photos Complete
- Variety Checked
- Other applicable verification/completeness fields

## UX
- The control is easy to tap on a phone.
- The current state is visually obvious and has an accessible text label.
- Unknown is never silently treated as No.
- The same control can be used in the detail view and edit view where appropriate.
