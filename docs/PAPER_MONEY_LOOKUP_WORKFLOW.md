# Photo-Assisted Paper Money Lookup Workflow

## Goal
Provide a guided way to photograph a note and research its identification, printing details, signatures, rarity, and varieties while keeping suggestions separate from confirmed catalog data.

## Required photos
- Face/front — required for a complete lookup
- Reverse/back — required for a complete lookup

## Workflow
1. User captures or selects the note photographs.
2. The app checks that the images are clear enough for research.
3. A lookup/research process analyzes the images and entered information.
4. The app presents possible identification and research results.
5. The user confirms, edits, or rejects proposed information.
6. Only confirmed information is written into the master record.

## Information to research
Possible results may include:
- country/issuer
- denomination
- date
- series
- serial number
- Federal Reserve/issuing district
- star note status
- printing information
- Secretary of the Treasury
- Treasurer of the United States
- signature combination
- special/autograph signature information
- errors and varieties
- rarity indicators
- certification/research leads
- reference images and source information

## Signature handling
Signature recognition may provide a research suggestion. The app must not silently mark a signature as verified. The user should be able to confirm or correct the identified signature information.

## Reference image handling
External reference images are research material only and must remain separate from the owner's face/front and reverse/back photographs. A reference image must never be presented as the owner's note.

## Edge cases
The workflow should allow "Unable to identify" or "Needs more information" rather than forcing a guess. Multiple candidate results may be presented when the note cannot be uniquely identified from the available photographs.

## Future-proofing
The lookup provider should be replaceable. Confirmed catalog data must remain usable if an external research service changes or becomes unavailable.
