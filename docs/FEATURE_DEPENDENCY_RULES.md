# Feature Dependency Rules

## Goal
Prevent optional features from becoming tightly coupled to one another or to the core catalog.

## Dependency direction
Core data and core catalog services sit at the bottom of the dependency graph. Optional features may consume stable core capabilities, but the core must not depend on optional features.

Preferred direction:
Core data/services → feature interfaces → optional feature implementations → UI presentation

Avoid:
- Core collection code importing mascot code.
- Search requiring a particular research provider.
- Subscription billing being embedded inside coin-record components.
- Professional Mode being required for ordinary collection records.
- One external provider becoming the only way to perform an otherwise independent catalog action.

## Interfaces
Where a feature may be replaced, define a stable interface/capability boundary. For example, research providers should return normalized suggestions rather than forcing the rest of the app to understand a provider's proprietary response format.

## Failure isolation
An unavailable optional service should fail locally and provide a useful fallback message. It should not crash the catalog, corrupt collection data, or block unrelated actions.

## Replacement
A feature should be replaceable by another implementation without changing the underlying collection schema wherever practical.

## Testing
Test optional features both enabled and unavailable. Test the core catalog with each optional dependency deliberately disabled.
