# Data Schema Stability Rules

## Goal
Protect collector data while allowing the application to evolve, add features, and remove optional features safely.

## Core principle
The collection data model is the durable foundation. Optional UI features, integrations, mascots, and subscription entitlements must not own or control the existence of the user's collection.

## Versioned schema
- Give the stored collection schema an explicit version.
- Changes to stored fields must be tracked as migrations.
- Migrations should be tested against representative existing collections.
- Prefer additive, backward-compatible changes when practical.

## Safe feature removal
Removing or disabling an optional feature must not automatically delete the fields it used. Data can remain dormant until the feature returns or a separately reviewed migration handles it.

## Backups and exports
- Export formats should contain enough schema/version metadata to support future restoration.
- Restore must validate the incoming schema before modifying an existing collection.
- Prefer restoring into a new snapshot or using an explicit merge/replace choice rather than silently overwriting data.
- Failed migrations/restores must leave the existing collection untouched.

## Duplicate protection
Imports and restores should have a defined strategy for preventing accidental duplicate records. A restore must not silently create a second copy of every coin simply because the user opened the same backup twice.

## Deletion safety
- Soft-delete/trash state should be represented separately from permanent deletion where supported.
- Permanent deletion requires an intentional user action and clear confirmation.
- Optional recovery mechanisms must not depend on undocumented backdoors.

## Subscription independence
Changing or cancelling a plan must not delete the user's underlying collection. Features that become unavailable may become read-only or hidden according to the plan rules, but the data model remains stable.

## Testing
Schema migrations should be tested with:
- Empty collections.
- Small collections.
- Large collections.
- Records with photos.
- Records containing Unknown/Yes/No three-state values.
- Records created under older schema versions.
- Records containing optional Professional Mode data.

## Documentation
Every schema change should record what changed, why it changed, and how older data is migrated. This makes future feature removal or replacement safer.
