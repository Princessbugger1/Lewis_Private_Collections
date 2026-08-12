# Safe Record Migration Plan

Before adding Composition and Weight fields to the live form, records will be normalized without deleting existing values.

## New optional fields
- composition
- expectedWeight
- actualWeight
- weightUnit
- diameter
- thickness
- metalTest

## Migration behavior
- Missing fields receive empty values only.
- Existing fields are never replaced by migration defaults.
- Unknown checklist states remain unchanged.
- Certification objects remain unchanged.
- Existing localStorage keys remain readable until the new version has been verified.
- Export should be taken before the first live migration.

## Settings behavior
Feature visibility is independent of stored record data. Turning Weight or Composition off hides the relevant controls; it does not remove the fields from saved records.

## Rollback
If a new build fails validation, the prior catalog version and exported JSON backup remain the recovery path. No destructive migration should be performed in-place.
