# Lewis Private Collections — Master Data Model

The master record is the source of truth. Screens, simple versions, reports, exports, and future features should be views of the same underlying record rather than separate copies.

## Shared identification
- stable record ID
- category
- country / issuer
- type / description
- denomination
- date / year
- mint / issuing authority
- series
- grade / condition
- variety / error
- purchase price
- estimated value
- collection / set
- storage location
- notes / provenance

## Physical details
- composition
- standard weight
- actual weight
- weight unit
- metal test / testing notes

## Coin media
- owner obverse photograph
- owner reverse photograph
- optional owner edge photograph
- automatically generated thumbnails from the owner's photographs
- optional external reference image with source/credit kept separate

## Paper Money media
- owner face/front photograph
- owner reverse/back photograph
- automatically generated thumbnails from the owner's photographs
- optional external reference image with source/credit kept separate

## Paper Money fields
- date
- denomination
- series
- serial number
- star note status
- Federal Reserve / issuing district
- Secretary of the Treasury
- Treasurer of the United States
- signature combination
- signature verification status
- special/autograph signature
- signature notes/provenance
- printing information
- errors / varieties
- rarity / research information

## Certification
- certification service
- certification number
- certification grade
- official verification/reference link

## Three-state applicable checks
Each applicable yes/no field uses:
❓ Unknown / Not Checked → ✅ Yes → ❌ No → ❓ Unknown / Not Checked

This deliberately distinguishes "not checked yet" from a confirmed No. Do not delete an underlying field just because a simple view hides it.

## Reference-image rule
A reference image is never presented as the owner's item. Owner photographs and reference photographs use separate data fields and separate labels. Owner thumbnails are derived from the owner's own full photo.

## Future-proofing
The master record remains richer than any basic catalog view. Future versions can hide fields, reorganize screens, or add research/selling tools without creating duplicate collection records.