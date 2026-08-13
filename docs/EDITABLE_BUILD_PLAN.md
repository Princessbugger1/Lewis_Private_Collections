# Editable Build Plan

## Principle
The catalog is being built as an evolving project, not a fixed one-time specification.

## Every feature is revisable
Any planned feature, section, field, label, filter, setting, or workflow can later be:
- changed
- removed
- replaced
- expanded

## Data safety
Changing the design must not silently delete saved collection information. If a feature is removed from the visible interface, its stored data should remain recoverable unless the owner explicitly chooses to delete it.

## UI flexibility
The interface should make it possible to revisit settings and optional sections later, so the owner can simplify or expand the catalog as preferences change.

## Build discipline
When a requirement changes, update the written requirement and the implementation together. Avoid treating an earlier design decision as permanent when the owner asks for a better approach.
