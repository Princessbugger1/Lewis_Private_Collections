# Professional / Dealer Mode Architecture

## Goal
Support serious collectors, dealers, and small coin shops without turning the everyday catalog into a cluttered business application.

## Core principle
Professional features should be an optional layer over the same underlying coin/item records. A personal collector can ignore them completely.

## Useful professional capabilities
- Multiple copies of the same type with distinct inventory records when needed.
- Quantity-aware inventory for identical items that can be managed together when individual tracking is unnecessary.
- Purchase cost, acquisition date/source, asking price, sale price, and margin fields where appropriate.
- Location/bin/vault/storage fields.
- Customer or sale reference fields only when the user intentionally enables them.
- Bulk editing and bulk import/export.
- Professional reports and inventory summaries.
- Search by inventory status, location, cost, price, date acquired, and sale status.
- Optional internal SKU/inventory number.
- Batch workflows for photographing, researching, and entering groups of coins.
- Clear distinction between collection/ownership records and items held for resale.

## Duplicate handling
The system must not treat two physically different coins as accidental duplicates merely because they share the same identification.

Possible states:
- One record representing one physical coin.
- A quantity record representing multiple interchangeable examples.
- Multiple individual records sharing the same type/identification but having different serial/certification, photos, cost, location, or notes.

## UI
- Hide professional-only fields unless Professional/Dealer Mode is enabled.
- Do not add business fields to the normal coin-entry screen by default.
- Provide a clear mode/settings switch rather than maintaining a separate app.
- Maintain the same accessible typography, navigation, and simple interaction patterns.

## Subscription boundary
Professional mode can be a higher plan entitlement, but the catalog data model must not depend on the subscription being active. Downgrading must not silently delete professional fields or records.

## Performance
Bulk operations should use batched processing and should not load an entire large inventory into the visible UI at once. Progress and cancellation should be available for expensive operations where technically practical.

## Future integration
Potential future integrations with point-of-sale, accounting, grading/certification references, or marketplace workflows should be isolated behind adapters so the core catalog remains stable.
