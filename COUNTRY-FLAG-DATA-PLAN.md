# Country, Historical Issuer & Flag Plan

The catalog should support country/issuer as a structured value, with country grouping and optional flag display.

## Country grouping
- Keep Country / Issuer as a searchable, filterable catalog field.
- Allow the collection to be grouped or filtered by country/issuer.
- Do not rely on the displayed flag as the stored identity of a coin.

## Flags
- A small flag may be displayed on a coin record/card when a recognized country/issuer is selected.
- Flag display is decorative metadata; the country/issuer text remains authoritative.
- The system should support historical issuers and political changes rather than assuming today's flag is correct for every historical coin.
- Example: a historical Soviet coin should be associated with the appropriate historical issuer and historical flag treatment, rather than automatically displaying the modern Russian flag.
- If an issuer has no suitable flag asset, the coin should still work normally without a flag.

## Language support
Language/internationalization can be added later without changing the underlying collection records. Country and issuer values should therefore be stored as stable data rather than translated display strings whenever practical.

## Safety
Adding, changing, or hiding flags must never alter or delete the underlying coin record.
