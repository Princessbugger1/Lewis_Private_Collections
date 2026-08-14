# Pre-Coin-Entry QA Checklist

Do not treat the catalog as ready for real collection entry until these checks pass.

## Core record safety
- [ ] Add a record and reload the app; the record remains.
- [ ] Edit a record; unrelated fields remain unchanged.
- [ ] Search/filter/sort never changes saved records.
- [ ] Hide a category/section; records remain saved and can be found by explicit search.
- [ ] Delete flow requires confirmation and does not delete a record accidentally.
- [ ] Restore from backup does not silently overwrite the live collection.

## Classification and organization
- [ ] Coin, Token, Counterfeit, Commemorative, Paper Money/Banknote, Medal, Bullion, Exonumia, and Ancient are available as starting classifications.
- [ ] Custom classifications can be added and edited.
- [ ] Custom series can be added without code changes.
- [ ] Country/issuer groups are generated from record data and have no fixed country limit.
- [ ] Historical issuers remain distinct from modern successor states.
- [ ] Optional flags do not block entry when unavailable.

## Smart identification
- [ ] Suggestions are visibly suggestions, not silently applied facts.
- [ ] Accept / Change / Reject controls are medium-sized and comfortably tappable on a phone.
- [ ] Needs Review / Unknown is available when confidence is insufficient.
- [ ] Rejecting a suggestion does not delete or alter the item.

## Three-state checks
- [ ] Applicable Yes/No fields start at Unknown / Not Checked.
- [ ] One tap = Yes; second = No; third = Unknown / Not Checked.
- [ ] Unknown is visually distinct from No.
- [ ] Existing values survive edit and backup/restore.

## Photos and sensitive data
- [ ] Obverse/Face, Reverse, and optional Edge photos can be attached without losing the record.
- [ ] Private location and other sensitive fields are not included in a shareable view unless explicitly marked shareable.
- [ ] External research/identification integrations do not receive private collection/location data by default.

## Responsive UI
- [ ] Phone mode is easy to discover and switch back from Desktop mode.
- [ ] Desktop mode uses available screen width without making controls unwieldy.
- [ ] Settings controls remain visible and understandable.
- [ ] Small action controls remain readable and tappable without becoming giant boxes.

## Release gate
Real collection data should be entered only after this checklist is tested against the actual deployed build. Test with a few disposable/sample records first; then make a fresh backup before entering valuable collection records.
