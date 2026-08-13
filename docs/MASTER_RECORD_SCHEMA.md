# Master Record Schema

## Purpose
Define a stable, expandable record structure so the full catalog can grow without requiring a rebuild when new features or simplified views are added.

## Common fields
- record_id
- category
- title/description
- country/issuer
- denomination
- date/year
- series/type
- mint_mark where applicable
- composition/material where applicable
- grade/condition
- certification service and certification number
- variety/error
- purchase information
- valuation information
- storage location
- provenance
- notes
- owner media references
- external reference/research media
- research confidence/verification state
- created_at / updated_at

## Coin media
- obverse photo
- reverse photo
- optional edge photo
- additional owner photos as needed

## Paper money media
- face/front photo
- reverse/back photo
- additional owner photos as needed

## Paper money fields
Where applicable, keep these as structured fields rather than combining them into notes:
- serial number
- Federal Reserve/issuing district
- star note status
- printing information
- Secretary of the Treasury
- Treasurer of the United States
- signature combination

## Three-state fields
Applicable yes/no fields use Unknown, Yes, or No rather than a simple Boolean.

## Design principle
The schema is the master source. Advanced research screens, normal catalog screens, and future basic versions should all be views of this same underlying record rather than separate databases.
