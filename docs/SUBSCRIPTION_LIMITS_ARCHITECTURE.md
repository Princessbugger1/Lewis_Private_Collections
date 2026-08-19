# Subscription Limits Architecture

## Goal
Plans must add useful value without making a downgrade feel like the user's collection has been taken hostage. Limits apply to new usage, while existing records remain safely preserved according to the account's storage and retention rules.

## Design principles
- Keep the collection model independent from billing-plan logic.
- A plan limit must never silently delete a user's records.
- A downgrade may prevent creation of new records or new media when the account is above the new plan's allowance.
- Users must be told clearly what limit is blocking an action and what they can do next.
- Do not force a user to delete down to a lower limit merely because they downgraded; preserve existing data unless the final commercial policy explicitly requires a retention/archive rule and has been legally reviewed.
- If a user is over a limit, existing records remain viewable and editable to the extent the plan permits; blocked actions should be specific rather than making the entire catalog feel useless.
- Exports/backups should remain straightforward so users can preserve their collection independently.

## Candidate plan dimensions
These are architectural dimensions, not final prices or limits:
- Number of cataloged items/coins.
- Number of separate personal catalogs or collections.
- Photos per item.
- Total photo/storage allowance.
- Number of saved research/identification records where applicable.
- Advanced search/filter capabilities.
- Cloud backup/history availability.
- Professional/dealer features.
- Multiple-copy inventory support.
- Business reports and organization tools.
- Sharing/export capabilities.
- Support level.

## Recommended behavior when over a downgraded limit
Example: an account has 1,000 items and downgrades to a 500-item plan.
- Do not delete the extra 500 items.
- Mark the account as over the new plan's creation allowance.
- Permit safe viewing and backup/export according to the plan's documented access rules.
- Block adding a new item if doing so would increase the count further above the plan allowance.
- If the user later deletes 501 items and reaches 499, the account is below the 500-item creation limit and can add another item.
- The product should explain this with a simple message, not a technical billing error.

## Photo limits
If a plan permits fewer photos per item than another plan:
- Existing photos must not be silently deleted on downgrade.
- New photo additions can be blocked when the account is beyond the plan's new photo allowance.
- The user should be able to export/save their photos where the product supports export.
- If storage capacity itself is exceeded, the product should explain whether the limitation concerns total storage, new uploads, or both.

## Multiple catalogs
A plan can limit the number of user-created catalogs/sub-catalogs without merging or deleting existing catalogs during a downgrade. Existing catalogs should remain identifiable and protected; creation of another catalog can be disabled until the account returns within the plan allowance or upgrades.

## UI rules
- Never show raw internal quota numbers without context.
- Prefer messages such as: "You've reached the number of new items included with this plan. Your existing collection is still here."
- Give one obvious next action: Upgrade, manage existing items, or export a backup.
- Do not repeatedly nag the user on every screen.
- Quota status should be available in account/plan settings.

## Future billing integration
The prototype should not hard-code payment provider behavior into collection storage. A future billing/account service should expose entitlement information to the catalog through a small, testable interface. This keeps subscriptions replaceable and prevents billing changes from destabilizing the collection itself.

## Final-policy note
Final numerical limits, pricing, grace periods, storage-retention rules, and downgrade behavior must be selected after storage-cost modeling and legal review. This document intentionally leaves those numbers open.
