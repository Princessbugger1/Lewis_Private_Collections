# Regression Checks

Use this checklist before changing the live catalog code.

## Data safety
- [ ] Hiding an optional section does not delete its saved data.
- [ ] Backup export contains collection records.
- [ ] Restore can recover a saved collection.

## Three-state fields
- [ ] First tap: Unknown → Yes.
- [ ] Second tap: Yes → No.
- [ ] Third tap: No → Unknown.
- [ ] Unknown remains distinguishable from No.

## Responsive behavior
- [ ] Catalog remains usable on a phone.
- [ ] Catalog remains usable on a desktop.
- [ ] Phone/desktop choice is easy to find.

## PWA/cache
- [ ] Service worker uses the current cache version.
- [ ] Old cache versions are removed during activation.
- [ ] Collection data is not stored in the service-worker cache.
