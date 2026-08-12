# Custom Groups

Collectors can create named groups to organize records without duplicating or deleting the underlying coin record.

## Behavior
- Group names are user-defined.
- A coin may belong to zero, one, or multiple groups.
- Multiple selected records can be added to a group at once.
- Records can be removed from a group without deleting the coin.
- Groups can be renamed.
- Deleting a group removes only the grouping relationship; it never deletes coin records.
- Groups should be filterable from the main collection view.
- Active, sold, transferred, and trash states remain independent of grouping.

## Examples
Morgan Dollars; German Coins; Favorites; To Sell; Ancient Coins; Family Collection.

## Data design
Store stable group identifiers on records rather than relying on group names as the permanent identifier. Renaming a group therefore does not require rewriting every coin record.
