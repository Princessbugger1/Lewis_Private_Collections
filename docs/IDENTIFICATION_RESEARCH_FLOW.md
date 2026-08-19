# Coin Identification and Research Flow

## Goal
Reduce manual entry without presenting internet-assisted identification as certainty.

## Capture
- User starts with "Scan Coin" or the equivalent camera action.
- Require/encourage clear images of both the obverse and reverse before research.
- Preserve the user's original photos with the resulting record.
- Allow the user to retake either side before research.

## Research
- After both sides are available, offer a clearly labeled Research action.
- Research may use available on-device analysis and/or external reference/search services as the product architecture permits.
- Results are suggestions, not authoritative identifications.
- Do not display a "high confidence" label or otherwise imply certainty based solely on automated/internet research.
- The result screen should clearly communicate that the identification is an estimate that the user should confirm.

## Candidate selection
- Present a small set of likely candidates when possible.
- Each candidate should show enough identifying information for a human collector to compare it with the photographed coin.
- Provide Confirm and a clear "None of these" path.
- Confirming a candidate creates/updates the structured record while retaining the user's photos.
- Before final Save, show a concise verification step so the user can catch an incorrect selection.
- "None of these" should trigger another research/search path rather than silently saving a wrong identification.
- If another search still fails, allow manual entry.

## User control
- Never silently convert a research guess into a fact.
- The user remains the final authority over what gets saved as the coin's identification.
- The app should preserve provenance of the identification when practical (for example, user-entered vs research-assisted).
- Avoid cluttering the main screen with repeated warning text. A dismissible estimate notice may be used, with the preference stored in user settings/help information.

## Performance
- Do not make external research mandatory for ordinary catalog browsing.
- Run image processing/research asynchronously where the platform allows it so the interface remains responsive.
- Avoid repeatedly uploading the same photos when a cached research request can safely be reused.
- Use thumbnails/previews for UI and retain originals separately when storage architecture permits.

## Safety and legal considerations
- External sites and reference databases may have their own terms, rate limits, copyrights, and APIs. Use only permitted access methods.
- The catalog should link to authoritative reference sources where appropriate rather than copying protected content wholesale.
- Identification, grade, value, and authenticity suggestions should never be represented as professional appraisal or guaranteed authentication.
