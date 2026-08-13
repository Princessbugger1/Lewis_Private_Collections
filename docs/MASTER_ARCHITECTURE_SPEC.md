# Master Catalog Architecture Specification

## Principle
The full catalog is the master product. Its data model and core records must remain richer than any simplified presentation built from it.

## Separation of concerns
Keep these layers conceptually separate:
1. Collection data and record identity
2. Photos and media
3. Search/filter/indexing
4. Catalog presentation and navigation
5. Export/sharing views
6. Optional advanced features

## Future versions
A basic catalog, selling catalog, family/display catalog, or other specialized view should be generated from the same master records rather than creating separate duplicate collections.

## Extensibility
New fields and features should be additive where practical. Removing a field from a screen should not delete the underlying data.

## Version safety
Keep project history so prior working versions can be restored if a later change is undesirable. Avoid destructive migrations without a backup/export path.

## Data identity
Each collection item has one stable catalog record/number. Groups, filters, exports, and views reference that record rather than creating duplicate records.

## Design priority
The everyday interface should remain clean and uncluttered even when the master data model supports detailed information.
