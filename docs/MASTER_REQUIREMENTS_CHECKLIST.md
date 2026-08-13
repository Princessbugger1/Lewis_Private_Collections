# Lewis Private Collections — Master Requirements Checklist

This is the living checklist for the master catalog. Features should be implemented against the master record model so future simplified versions can be derived from it without duplicating collection records.

## Catalog identity
- [x] One stable catalog number/record identity per item
- [x] Expandable record model
- [ ] Human-friendly display/numbering rules finalized

## Categories
- [x] Coins
- [x] Tokens
- [x] Medals
- [x] Paper Money (use this wording in the user-facing catalog; do not use "Currency" as the category label)
- [x] Sets
- [x] Other

## U.S. mint marks / locations
- [ ] Philadelphia / P
- [x] Denver / D
- [x] San Francisco / S
- [x] Charlotte / C
- [x] Carson City / CC
- [ ] New Orleans / O
- [ ] West Point / W
- [ ] Other historical/current marks as applicable

## Coin images
- [ ] Owner obverse photo
- [ ] Owner reverse photo
- [ ] Optional owner edge photo
- [ ] Small unobtrusive Reference Image label for non-owner images
- [ ] Reference source/credit captured when available
- [ ] Never imply a reference image is the owner's actual item

## Paper-money images
- [ ] Owner face/front photo
- [ ] Owner reverse/back photo
- [ ] Small unobtrusive Reference Image label for non-owner images
- [ ] Reference source/credit captured when available

## Paper-money research fields
- [x] Denomination
- [x] Series
- [x] Federal Reserve / issuing information
- [x] Serial number
- [x] Star note indicator
- [x] Signatures
- [x] Printing information
- [x] Errors / varieties
- [x] Grade / condition
- [ ] Research/lookup workflow for identifying printing location and rarity
- [ ] Special signature/inscription tracking (for example notable hand signatures) with provenance/notes

## Coin research fields
- [x] Year/date
- [x] Denomination
- [x] Mint mark
- [x] Variety/error
- [x] Grade and grading service
- [x] Certification/slab number
- [x] Metal/composition
- [x] Weight/measurements when desired
- [ ] Photo-assisted identification/research workflow

## Three-state applicable checks
Required default cycle for applicable yes/no fields:
❓ Unknown / Not Checked → ✅ Yes → ❌ No → ❓ Unknown / Not Checked

- [x] COA
- [x] OGP
- [x] Original box
- [x] Sigma tested
- [x] Photos complete
- [x] Variety checked
- [ ] Apply the same pattern to all additional applicable yes/no fields

## Architecture
- [x] Master catalog remains richer than simplified views
- [x] Additive/extensible fields
- [x] Separate collection data, media, search, presentation, sharing, advanced features
- [x] Privacy/security architecture
- [x] Backup/recovery architecture
- [ ] Production-grade authentication/authorization if multi-user/cloud sharing is introduced

## Legal / ownership preparation
- [x] Treat owner data and owner photographs as owner-controlled content
- [x] Distinguish third-party/reference material
- [ ] Draft Terms of Use
- [ ] Draft Privacy Policy
- [ ] Draft collection/valuation disclaimer
- [ ] Draft legally appropriate limitation-of-liability language
- [ ] Attorney review before commercial release

## Quality rule
Do not delete underlying data merely because a field is hidden from the everyday interface. Keep the master record capable of supporting future views, exports, research, selling tools, and simplified catalogs.
