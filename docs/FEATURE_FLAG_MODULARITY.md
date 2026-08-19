# Feature Modularity and Feature-Flag Architecture

## Goal
Allow optional features to be enabled, disabled, replaced, or temporarily removed without destabilizing the core catalog.

## Core rule
The collection data model and essential catalog operations must not depend on optional feature modules being available.

## Feature modules
Potential independently controlled modules include:
- Research/identification.
- Professional/Dealer Mode.
- Mascot/screensaver animation.
- Additional languages.
- Advanced search interpretation.
- Optional integrations.
- Future marketplace or external-service integrations.

## Feature flags
Use a centralized, typed feature-entitlement/feature-flag layer rather than scattering ad-hoc checks throughout the UI.

A module should expose a clear capability boundary. The rest of the app should ask whether the capability is available instead of directly depending on the module's internal implementation.

## Safe removal
When an optional feature is disabled:
- Existing collection records remain intact.
- Data created by the feature remains safely stored if it is part of the normal record model.
- The UI hides or disables only the affected functionality.
- The app remains usable for unrelated catalog tasks.
- Re-enabling the feature restores access without requiring the collection to be rebuilt.

## Data migrations
If a feature requires new stored fields, migrations must be backward-compatible where practical. Removing a feature must not automatically delete its stored data. If obsolete data ever needs cleanup, it should be an explicit, separately tested migration.

## Development use
Feature flags may be used to:
- Test a feature with only selected testers.
- Turn off a problematic feature while a fix is developed.
- Compare old and new implementations.
- Roll out a feature gradually.
- Disable an external integration if that service becomes unavailable.

## Subscription interaction
Subscription entitlements should feed into the same capability layer, but billing code must not be embedded inside core catalog components. A plan change changes what the user may newly access; it does not rewrite or delete the underlying collection.

## Performance
Disabled modules should not load their heavy assets or initialize expensive services unnecessarily. This is particularly important for image research, external integrations, and decorative animation.

## Testing requirement
Every optional module should have a documented fallback behavior and at least one test proving that the core catalog remains usable when that module is disabled.
