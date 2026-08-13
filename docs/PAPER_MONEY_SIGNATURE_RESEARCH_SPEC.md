# Paper Money Signature & Printing Research Specification

## Purpose
Make paper-money cataloging easier by using the photographed note and identifying information to suggest, rather than blindly invent, the people and printing details associated with the note.

## Workflow
1. Owner photographs the note face/front and reverse/back.
2. The catalog reads available note identifiers and combines them with user-entered information such as denomination, series, serial number, Federal Reserve/issuing information, and other visible characteristics.
3. A research/lookup service may return suggested information for:
   - Secretary of the Treasury
   - Treasurer of the United States
   - Series and signature combination
   - Federal Reserve Bank / issuing information
   - Printing information
   - Known varieties, errors, or notable attributes
4. The app presents suggestions for the owner to review.
5. The owner confirms or corrects the suggestions before they become the authoritative catalog values.

## Signature fields
Keep normal printed official signatures separate from special/autograph information.

- Secretary of the Treasury — suggested name
- Treasurer of the United States — suggested name
- Signature combination — normalized/searchable value
- Signature verification status — Unknown / Suggested / Confirmed / Corrected
- Special or hand signature/autograph — separate free-text field
- Signature notes/provenance — optional

## Important accuracy rule
The application must not claim that image recognition alone has definitively identified a signature. Signature recognition should be treated as research assistance and cross-checked against reliable references.

## Reference evidence
When research information comes from an external reference, retain the source/reference information where practical so the owner can see why a suggestion was made.

## Future implementation
The research engine should be replaceable. The catalog record must remain usable even if a particular lookup provider, API, or AI service is unavailable later.
