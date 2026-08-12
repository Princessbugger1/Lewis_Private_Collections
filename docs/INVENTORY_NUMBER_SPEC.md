# Inventory Number / Placement Identifier

The catalog should distinguish a coin's unique inventory identity from organizational grouping.

## Design
- Each physical coin can have a unique Inventory #.
- The number should be easy to reference on a flip, envelope, box, album, or storage system.
- Inventory # should remain stable when the coin is moved between custom groups.
- Selling or transferring a coin should preserve its historical inventory identity.
- The main list should show the inventory number only if it fits cleanly; the full record always provides access to it.

## Placement/location
A separate optional Location/Storage field may be used for values such as Box 3, Safe 1, Album 2, or Drawer B. Location is not the same as Inventory #.

## Safety
Inventory numbers must not be silently regenerated during migration. Existing user-entered identifiers take precedence over generated identifiers.
