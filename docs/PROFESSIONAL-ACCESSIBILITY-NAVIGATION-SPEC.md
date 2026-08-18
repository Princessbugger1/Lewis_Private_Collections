# Lewis Private Collections — Professional, Accessibility & Navigation Specification

This specification records design decisions for the master catalog before they are implemented in the production UI.

## 1. Professional workspace

The professional/dealer experience is an optional workspace layered on the same master catalog. It must not turn the normal collector interface into dealer software.

Professional capabilities may include:
- Quantity-based inventory for multiple physical copies of the same coin type.
- Individual item tracking when copies have different grades, certifications, photos, varieties, or values.
- Inventory number, storage location, status, cost, asking price, and sales history.
- Employee/role permissions and activity history.
- Bulk import/export and business reporting.
- Multiple shop/location support in a later business tier.

Professional fields must be additive and feature-gated. Hiding a professional feature must never delete its underlying data.

## 2. Quantity versus individual records

A dealer may represent twelve substantially interchangeable examples as one inventory record with quantity 12. A certified or otherwise individually important coin remains separately trackable. The UI should make this distinction clear and should allow conversion from quantity-based inventory to individual records when needed.

## 3. Clean navigation

The catalog should behave like an application rather than a pile of browser pages.

- Use a controlled in-app navigation/history model.
- Prefer replaceable views, panels, drawers, and dialogs for short-lived tasks.
- Do not create a new navigation layer for every search/filter/detail action.
- Keep an obvious route back to the main catalog.
- Browser/phone Back should respect catalog history where possible.
- If a form contains unsaved work, warn before destructive navigation and offer Save/Leave/Cancel as appropriate.
- Do not discard an unfinished draft merely because the user navigates elsewhere.

## 4. Accessibility and readability

The visual target is simple, classy, readable, and lightly playful — not childish or cluttered.

- Large, legible default text.
- Strong contrast and clear visual hierarchy.
- Generous touch targets.
- Adjustable text/UI sizing where practical.
- Plain-language labels.
- Advanced fields belong behind expandable sections rather than being permanently displayed.
- Young Collector/Beginner mode simplifies the workflow without creating a separate product.
- Mascots and animation are optional personality layers and must not obstruct normal catalog work.

## 5. Search

Catalog search should be forgiving and not case-sensitive.

- Search country, denomination, type, year/date, mint, series, variety/error, composition, certification information, notes, and other indexed catalog fields as appropriate.
- Multiple terms should combine naturally; for example, `1909 silver` should narrow results to records matching both concepts.
- Search should tolerate common misspellings and provide useful matches without changing the user's stored data.
- Date/year range filtering should support requests such as dimes from 1940 through 1960.
- Unknown or user-created terms should not break search or require a predefined vocabulary.
- Search results should remain fast as the collection grows; indexing/query design should be separated from presentation.

## 6. Performance rule

Optional features must not make the everyday catalog unnecessarily heavy. Professional dashboards, screensaver animation, mascot behavior, advanced reports, and other secondary systems should be loaded or activated only when needed. Media should be resized/compressed appropriately and thumbnails should be used for list views.

## 7. Subscription separation

Subscription/plan logic should control limits and feature access without being embedded into the core collection-record structure. Downgrades must preserve eligible data safely while enforcing the lower plan's limits for new additions and other restricted operations according to the separately defined subscription rules.
