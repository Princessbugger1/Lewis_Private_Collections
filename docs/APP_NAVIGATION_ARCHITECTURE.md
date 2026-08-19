# App Navigation Architecture

## Goal
Keep the catalog easy to navigate as features grow, without creating layers of screens that trap users in a deep back stack.

## Primary navigation areas
The normal collector experience should center on a small set of destinations:
- Collection/Home.
- Add/Scan Coin.
- Search.
- Settings/Help.

Other screens should normally be opened as focused workflows, sheets, dialogs, or child views rather than creating unnecessary permanent navigation destinations.

## Back behavior
- Back returns to the immediately previous meaningful state.
- Reopening the same action should not create endless duplicate copies of the same screen.
- Repeated navigation to a destination can reuse/replace an existing instance where appropriate.
- A clear Home/Collection path should always be available.
- Back from a modal/dialog closes the modal before navigating away from the underlying screen.

## Unsaved changes
When leaving a workflow with unsaved changes, provide an explicit choice where appropriate:
- Save and leave.
- Continue editing.
- Discard/cancel.

Autosave/draft recovery remains a separate safety net; the navigation system must not depend on a user remembering to save manually.

## Unfinished coin workflow
- A user can have multiple unfinished coins, subject to a reasonable product limit selected during implementation/testing.
- The catalog can surface unfinished entries through a dedicated Continue/unfinished area without requiring a permanent "Drafts" page in the main navigation.
- Each unfinished entry can be continued, discarded, or completed.
- Discarding an unfinished entry requires an intentional confirmation.

## Performance
- Navigation should avoid repeatedly loading the entire collection.
- Use lightweight route/state data and load heavy photos only when needed.
- Restore the user's prior screen/state when safe, but do not restore a stale editing state in a way that can overwrite newer data.

## Accessibility
- Back behavior must be predictable.
- Each screen needs a meaningful accessible title/label.
- Modal focus should be handled correctly so keyboard/screen-reader users are not lost.
- Core navigation must work with animation disabled.
