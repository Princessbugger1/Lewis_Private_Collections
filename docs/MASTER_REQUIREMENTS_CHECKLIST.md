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

## Draft protection / unfinished entries
- [x] Automatic local protection for unfinished coin entries
- [x] Multiple unfinished entries allowed, subject to reasonable temporary-storage limits
- [x] Unfinished entries remain separate from completed catalog records
- [x] No permanent Drafts item in the main navigation
- [x] Add Coin area can expose an Unfinished Entries section when drafts exist
- [x] Return-to-app prompt offers Continue or Not Now
- [x] Not Now preserves the draft and does not block other catalog activity
- [x] Delete Draft action available from the prompt and unfinished-entry list
- [x] Delete Draft requires explicit confirmation
- [x] Draft photo/data storage should be managed by storage allowance rather than an arbitrary tiny coin-count limit
- [ ] Define draft cleanup/retention policy and user-facing storage warnings

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
