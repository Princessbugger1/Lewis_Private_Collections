# Next Build Step

The next implementation pass should turn the approved catalog specifications into the user-facing application in small, testable pieces.

## Priority
1. Keep the clean reference-style main list.
2. Make each record tappable to open a full Coin Details view.
3. Add a dedicated Inventory # without cluttering the list.
4. Keep the three/four-state collector fields: Unknown → Yes → No → N/A → Unknown.
5. Add safe Trash/Restore/Empty Trash behavior.
6. Add custom groups without forcing a coin into only one group.
7. Add Export/Share with selectable scope and privacy-safe Sale List defaults.
8. Keep existing backup/import behavior intact.

## Implementation rule
Do not replace working catalog functionality with a speculative rewrite. Make incremental changes and preserve existing stored data/localStorage compatibility.

## User experience
The main screen should remain simple. Advanced information belongs behind the coin details view or dedicated actions, not in an overcrowded row.
