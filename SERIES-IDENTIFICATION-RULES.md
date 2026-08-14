# Series Identification Rules

## Goal
Provide automatic series suggestions, with U.S. numismatic series receiving detailed coverage first while keeping the data model worldwide.

## Suggestion logic
A series suggestion may use Country/Issuer, denomination, date/year, mint mark, and other identifying fields. Date alone must never be treated as sufficient identification when other information is needed.

Examples for U.S. dimes:
- 1892–1916: Barber Dime (with the applicable issue details)
- 1916–1945: Mercury Dime
- 1946 onward: Roosevelt Dime

These are suggestions, not irreversible classifications. The user can review, edit, or override the suggested series.

## Dynamic grouping
- Series are groups/views, not duplicate records.
- Entering a new series creates a usable group without a fixed series limit.
- Items can be reclassified later without losing photos, notes, certification, provenance, values, or research.
- Sorting within a series can include year/date, mint mark, denomination, and other appropriate fields.
- U.S. series may receive richer recognition initially, but the architecture must support foreign and historical series.

## Safety
Automatic identification must never silently overwrite a user's deliberate classification. Uncertain identification remains uncertain and is presented for review.
