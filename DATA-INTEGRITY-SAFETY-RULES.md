# Data Integrity Safety Rules

All smart catalog features must preserve the underlying collection record.

- Every item has one stable record identity.
- Classification, series, country/issuer, flags, suggestions, sorting, and filters are metadata/views and must not duplicate the item.
- Editing metadata must not remove photos, notes, values, certification, provenance, research, or other unrelated fields.
- Rejecting an automatic suggestion changes only the suggestion state.
- Deleting a series/category/group removes only that grouping definition unless the user explicitly chooses an item deletion action.
- Item deletion must always be a deliberate, separate action with a clear confirmation step.
- Search and filters must operate on records without mutating them.
- Backup/restore must preserve custom classifications, custom series, country/issuer values, and visibility settings.
