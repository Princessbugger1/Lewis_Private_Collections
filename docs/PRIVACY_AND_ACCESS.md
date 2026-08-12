# Lewis Private Collections — Privacy & Access Architecture

## Default privacy
Each collector's catalog is private by default. Using the application does not automatically grant another person access to the collection.

## Owner/admin access
A future service version may provide an owner/admin area for managing customers and product settings. Admin access to a collector's collection must be permission-based and auditable.

## Support access
For troubleshooting, a collector may explicitly grant temporary support access. Access should expire and should not silently become permanent.

## Collection separation
Each customer's records must remain logically separated. One customer's catalog must never appear in another customer's catalog through ordinary browsing, search, import, or export.

## Sharing
Future versions may support deliberate sharing or collaboration, but sharing must be an explicit user action rather than a side effect of licensing or subscription status.

## Subscription expiration
A subscription or trial expiration must not automatically mean immediate deletion of the collector's data. Data retention, export, grace periods, and restoration rules should be defined before any paid service is launched.

## Design goal
Build the catalog so a future hosted/account version can add licensing, subscriptions, support access, and sharing without requiring a rewrite of the underlying collection data model.
