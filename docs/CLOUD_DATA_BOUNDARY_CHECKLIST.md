# Cloud Data Boundary Checklist

Before enabling cloud sync or subscriptions for customers, verify:

- [ ] Authentication identifies the current account server-side.
- [ ] Every collection belongs to exactly one account/workspace boundary.
- [ ] Every coin record belongs to an authorized collection.
- [ ] Archive and Trash inherit the same ownership boundary.
- [ ] Every photo/object belongs to an authorized record or collection.
- [ ] Database Row Level Security policies prevent cross-account access.
- [ ] Storage policies prevent cross-account photo access.
- [ ] Search, sort, counts, exports, and reports filter by the authorized collection.
- [ ] Sync rejects records from another account.
- [ ] Account switching invalidates stale requests and cached UI state.
- [ ] Backup/restore cannot import another customer's private cloud data accidentally.
- [ ] Two-account adversarial tests pass before release.

A cloud release is blocked until every item is verified.
