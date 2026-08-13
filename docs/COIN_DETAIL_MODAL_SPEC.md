# Coin Detail View Specification

## Goal
Keep the collection list clean while allowing every coin to expose its complete record with one tap.

## Interaction
- Tapping a coin/card opens a dedicated detail view or modal.
- The detail view shows all available information for that coin, including fields hidden from the compact list by display settings.
- Edit and Delete actions are available from the detail view.
- Back/Close returns to the exact prior list position and filters.

## Display settings
Optional fields such as weight and composition may be hidden from the main list without hiding them from the full detail view. The detail view is the place to see the complete record.

## Safety
- Viewing a coin never changes it.
- Destructive actions require confirmation.
- Photos, certification data, three-state checks, notes, groups, and private fields remain attached to the same record.
