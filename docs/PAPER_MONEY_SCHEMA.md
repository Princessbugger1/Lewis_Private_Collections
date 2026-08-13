# Paper Money Record Schema

## Goal
Give paper currency a dedicated structured record while keeping it part of the same master catalog.

## Core identification
A paper-money record should support:
- denomination
- issuing country or authority
- series
- date
- serial number
- issuing district or branch when applicable
- printing information
- note type
- star-note or replacement-note status when applicable

## Signatures
Where the note type supports signatures, provide structured fields for the relevant signer roles, such as Treasurer, Secretary, or other issuing-authority titles appropriate to that issue. The interface may display a signature image/reference when available, but a visual match should remain a research suggestion until confirmed.

## Condition and certification
Support grade, grading service, certification number, and condition notes without assuming every note is certified.

## Variety and special features
Provide room for star notes, errors, serial-number patterns, varieties, printing details, and other special characteristics.

## Photos
Support front/face and back/reverse owner photographs, plus optional detail images. Owner photographs remain separate from external reference images.

## Verification
Recognized or researched signatures, serial-number information, dates, and printing details should remain distinguishable from owner-confirmed information.

## Future-proofing
The paper-money schema should be extensible for additional issuer-specific fields without requiring a separate application or database.
