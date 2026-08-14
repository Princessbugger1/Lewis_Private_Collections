# Lewis Private Collections — Build Status

This file records the current safe-build checkpoint. It does not participate in the catalog runtime.

## Verified in the current enhancement layer

- Measurements: weight, expected weight, diameter, thickness.
- Composition-tested field uses the three-state Unknown / Yes / No cycle.
- Optional Test Method / Device and test-result notes.
- COA status uses the same three-state cycle.
- Verification / Certification number stores the service and number together.
- Certification lookup supports recognized PCGS and NGC lookup destinations and reports when verification is unavailable.
- Scanned certification information is explicitly presented as requiring manual verification before saving.
- Raw-coin camera/photo capture can populate the item's photo slots and warns that identification is only a candidate.
- Up to eight photos are supported, including optional labels for close-ups and mint marks.
- Existing records reload measurements, testing state, COA status, verification number, photos, and photo labels.
- Optional details can be hidden through settings while remaining available when editing an individual item.

## Protected area

The original catalog Save/Edit routine is treated as protected until its complete source and item-targeting behavior can be verified. No change should be made by guessing at missing source code.

## Known improvement to address carefully

The enhancement save layer currently has a fallback that can target the last record when an edit index is unavailable. A future targeted change should replace that fallback with explicit identification of the newly created record, while preserving the existing edit-index path.

## Safety rule

Prefer small, isolated, reversible changes. Do not delete legacy fields or replace the main catalog file unless the complete source has been retrieved and the replacement has been checked against the current version.
