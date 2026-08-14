# Customer Data Separation

Commercial catalog data must remain separated by account/license.

## Requirements
- The owner's collection is never part of a customer's catalog.
- One customer's records are never returned to another customer.
- License/activation identity is separate from collection records.
- Read-only shares reference only the owner's or customer's explicitly shared records.
- Deactivating a license must not silently delete collection data; retention/export behavior must follow the published product terms.
- Client-side IDs must not be treated as authorization. Production authorization must be enforced by the server/data layer.

## Testing requirement
Before commercial release, test with at least two independent test accounts and verify that every collection, share, and license operation remains isolated across accounts.
