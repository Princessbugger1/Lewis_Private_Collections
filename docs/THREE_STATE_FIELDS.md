# Three-State Applicable Fields

For applicable yes/no questions, the catalog uses one compact tap-to-cycle control:

❓ Unknown / Not Checked → ✅ Yes → ❌ No → ❓ Unknown / Not Checked

## Why
Unknown is not the same thing as No. A blank-looking field can accidentally be interpreted as missing data, while a confirmed No is meaningful collection information.

## Intended fields
Examples include:
- COA
- OGP
- Original box
- Sigma tested
- Photos complete
- Variety checked
- Other applicable yes/no checks added later

## UI rule
The control should be compact and uncluttered. One tap advances exactly one state. The current state must be visually understandable without opening a separate dialog.

## Data rule
Store the three states as structured values, not only as display emojis, so filtering, reports, exports, and future simplified views can distinguish Unknown, Yes, and No.
