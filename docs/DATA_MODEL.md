# Lewis Private Collections — Data Model

The catalog should treat these as optional, additive fields so records can grow without breaking older entries.

## Identification
- category
- country
- type
- denomination
- year
- mint
- series
- grade
- variety

## Physical details
- composition: optional text (example: 90% silver / 10% copper)
- standardWeight: optional numeric grams
- actualWeight: optional numeric grams
- weightUnit: grams by default
- metalTest: optional result/details

## Images and provenance
- photos: optional list of image references
- photoComplete: checklist state
- notes

## Certification
- certification.service
- certification.number
- certification.grade
- certification.url

## Collection and financial information
- collection
- location
- purchase
- value

## Checklist
Checklist values use numeric states:
- 0 = Unknown / Not Checked
- 1 = Yes
- 2 = No
- 3 = N/A

This model is intentionally additive. Older records without the newer fields remain valid.
