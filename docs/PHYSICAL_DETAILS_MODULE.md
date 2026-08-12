# Physical Details Module

This module defines the first user-facing optional-detail integration target.

## Fields
- Composition: collector-entered or verified reference composition, such as 90% silver / 10% copper.
- Expected weight: reference/specification weight for the identified coin.
- Actual weight: collector's measured weight.
- Metal test: optional result from a tester such as Sigma.

## Display rules
- Expected and actual weight must never be combined into one value.
- A difference between expected and actual weight is informational only; it is not an authenticity verdict.
- Metal-test results are recorded as observations, not automatic authentication guarantees.
- Empty fields remain empty; the UI must not invent a value.

## Settings behavior
Each physical-detail field can be independently shown or hidden in Settings. Hiding a field never removes its stored value.

## Migration
Existing records may have none of these properties. The catalog must treat missing properties as empty and continue to display/edit the record normally.
