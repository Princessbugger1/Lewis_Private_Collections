# Paper Money Record Schema

The master catalog treats paper money as **Paper Money** in the user-facing category list. Do not use Currency as the category label.

## Core identification
- Date — separate required-capable field; do not rely only on Series
- Series
- Denomination
- Serial number
- Star note status
- Country / issuer
- Federal Reserve / issuing district

## Signatures
- Secretary of the Treasury
- Treasurer of the United States
- Signature combination
- Signature recognition status: Unknown / Suggested / Confirmed / Corrected
- Special hand signature / autograph
- Signature notes / provenance

## Printing and research
- Printing information
- Bureau / printing details when applicable
- Errors / varieties
- Rarity / research notes
- Research source/reference

## Images
- Face/front — owner's actual note photograph
- Reverse/back — owner's actual note photograph
- Small thumbnails generated from the owner's actual photographs for compact displays
- Optional outside reference image kept separate and visibly identified as a reference

## Lookup behavior
A future photo-assisted lookup may use the note image, date, series, denomination, serial number, issuing information, and visible characteristics to suggest the signature combination and printing details. Suggestions must remain reviewable and correctable by the owner.

## Accuracy rule
The app must never silently convert an uncertain image-recognition result into a definitive fact. Confirmed catalog values are the owner's reviewed values, with research evidence retained when practical.
