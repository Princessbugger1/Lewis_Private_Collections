# Master Catalog Quality Checklist

## Purpose
Use this checklist before calling a major build milestone complete.

## Data integrity
- Stable record IDs are preserved.
- Unknown / Yes / No states remain distinct.
- Coin and paper-money fields remain separate where appropriate.
- Serial numbers, dates, denominations, signatures, and printing information are stored in their intended fields.

## Media integrity
- Owner photographs remain separate from reference images.
- Thumbnails remain linked to the correct original media.
- Missing media never falls back to an unrelated reference image.

## Research integrity
- Research suggestions remain distinguishable from confirmed information.
- The user can reject or correct a suggestion.
- The system can say it cannot identify an item instead of forcing a guess.

## Privacy
- Collection records are private by default in the application design.
- Sharing requires an intentional owner action.
- Sensitive fields are not included in sharing unless explicitly selected.
- Public hosting is not treated as permission to publish collection data.

## Backup and recovery
- Collection data can be exported.
- Owner media relationships can be preserved.
- Restore/import validates before changing current data.
- Duplicate candidates are reviewed instead of silently merged.

## UI quality
- Main screens remain uncluttered.
- Touch controls are practical on a phone.
- Important states are understandable without color alone.
- Advanced details are available without overwhelming the primary record view.

## Change quality
- Existing core files are inspected before modification.
- Successful writes are verified in GitHub.
- Git history remains recoverable.

## Release principle
A feature is not considered complete merely because its documentation exists. The eventual working application must implement the relevant rule and be tested against this checklist.
