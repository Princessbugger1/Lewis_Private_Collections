# Lewis Private Collections — Build Notes

This project is a digital coin and paper-money catalog, not just a static book.

## Confirmed design decisions
- Simple tap-to-cycle three-state fields: ❓ Unknown / Not Checked → ✅ Yes → ❌ No → ❓.
- COA is a status field in the main item information, not a separate certificate section.
- Verification / Certification # stores the service and number together (for example, PCGS 12345678 or ANACS 12345678).
- Verification lookup is optional and must never claim a successful verification merely from a scan.
- Certification scanning should read a code when supported, fill the field, and show a clear "Please verify" instruction before saving.
- Unknown certification services should clearly say verification is not available rather than silently doing nothing.
- Raw-coin photos can be captured and saved with the particular item.
- Up to 8 photos per item are supported; extra photos can be labeled for mint marks, close-ups, etc.
- Edge photo is for coins/appropriate items; it is not required for paper money.
- Measurements include weight, expected weight, diameter, and thickness.
- Composition testing is a three-state field. Test Method / Device is optional and can be hidden.
- Shape can remain in notes rather than requiring a separate field.
- Optional details can be hidden in settings but remain accessible when an individual item is opened.
- The interface should ultimately be classy, uncluttered, and easy to use, with phone/desktop switching easy to find.
- App branding/logo design will be refined later together.

## Current safety checkpoint
The existing enhancement layer already contains the measurement/testing UI, COA/verification UI, 8-photo support, raw-coin camera flow, certification scan flow, lookup handling, settings visibility, and record reload logic.

Do not add duplicate helper scripts for those features.

## Protected area
The enhancement Save/Edit hook currently uses a fallback to the last collection record when it cannot identify an edit index. This should be replaced with exact item targeting only after the main Save/Edit flow is fully verified. Do not guess or overwrite core catalog code from a partial read.

## Build principle
Prefer small, isolated, reversible changes. Never risk existing collection records merely to make a feature appear finished.
