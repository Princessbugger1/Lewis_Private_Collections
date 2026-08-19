# Navigation History Rules

## Goal
Keep navigation predictable and prevent users from accidentally building a stack of duplicate pages.

## Core behavior
- Opening a coin record from a collection/search view creates one meaningful navigation destination.
- Hover previews never create navigation history entries.
- Temporary UI such as tooltips, hover previews, and transient confirmations should not become Back-button pages.
- Reopening the same current record should not unnecessarily create duplicate history entries.

## Back behavior
Back returns to the user's previous meaningful context, including the prior collection/search location where practical. It should not require the user to press Back through a chain of temporary previews or overlays.

## Unsaved changes
When leaving an edit screen with unsaved changes, offer the appropriate save/continue-without-saving/cancel choice. An accidental app close should use the unfinished-work recovery rules rather than creating duplicate navigation pages.

## Deep navigation
For workflows that genuinely require multiple levels, preserve a clear path back to the collection. Avoid opening every action as a new browser/app page when an in-place panel or modal is sufficient.

## Desktop and mobile
Use the same navigation meaning on all devices while adapting presentation to screen size. Desktop may use panels where helpful; phone should favor a single clear flow.

## Testing
Test repeated opening/closing of coins, searches, filters, hover previews, edit forms, unsaved changes, app restarts, and Back behavior. Confirm users never need to press Back through 10–15 accidental duplicate pages just to return to their collection.
