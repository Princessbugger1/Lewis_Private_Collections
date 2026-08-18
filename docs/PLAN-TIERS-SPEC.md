# Plan Tiers Specification

## Goal
Support multiple subscription/plan levels without hard-coding limits into catalog records or making the interface cluttered.

## Candidate plan controls

Plan entitlements should be configurable, including:
- Maximum number of catalog items.
- Maximum photos per item.
- Total photo/storage allowance.
- Maximum number of user-created My Catalogs.
- Maximum number of items in each custom catalog, if needed.
- Access to advanced search and fuzzy/multi-term search.
- Access to certification lookup/import integrations, subject to provider authorization.
- Access to research providers or advanced research tools.
- Advanced organization/filtering features.
- Export/backup capabilities.
- Sharing/collaboration capabilities, if added later.
- Profile/avatar customization options, if a future tier needs limits.

## Example tier strategy

Final prices and limits are intentionally undecided. The architecture should support tiers such as:

### Free / Starter
- Small collection allowance.
- Limited photos per item.
- Limited My Catalogs (for example, 5).
- Core catalog and basic search.

### Plus
- Larger collection allowance.
- More photos per item.
- More My Catalogs.
- Full multi-term/fuzzy collection search.
- Expanded organization features.

### Pro
- Very large or effectively high collection allowance.
- Highest photos/storage allowance.
- More or unlimited My Catalogs, subject to fair-use/storage limits.
- Advanced research/import capabilities where authorized.
- Expanded export/backup and other advanced features.

These are design examples only; final limits and pricing must be decided before launch.

## Important architecture rules

- Plan limits must be enforced server-side, not only hidden in the UI.
- The user's catalog records remain theirs if they downgrade.
- A downgrade should restrict creation/upload beyond the new limit rather than deleting existing data automatically.
- If an account exceeds a lower plan's limit after downgrade, existing records remain viewable and the user receives a clear explanation of what is restricted and how to upgrade or manage the excess.
- Limits should live in a plan/entitlement configuration layer, not be scattered through application code.
- `user_profiles.plan_code` identifies the user's current plan; entitlement configuration determines the actual limits.
- Never store payment card details in the catalog database.

## User experience

Plan restrictions should be clear, friendly, and non-destructive. When a user reaches a limit, show what limit was reached, what the current plan allows, and the available upgrade/manage options. Avoid surprising users or making existing collection data disappear.
