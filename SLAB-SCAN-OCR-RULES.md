# Slab Scan and OCR Rules

Slab scanning is an assistive identification workflow, not an automatic authority over the catalog.

- The user can capture or select a photo of a slab and request OCR/identification.
- The workflow should attempt to recognize certification service, certification number, grade, denomination, date, mint, and other readable label information when available.
- OCR output must be treated as a suggestion until reviewed, especially when text is uncertain or partially obscured.
- The original slab photo remains attached to the item as evidence when the user chooses to save it.
- A successful scan can populate proposed fields in the review queue rather than silently overwriting confirmed values.
- A certification number should be validated for format and, when an authorized external lookup is deliberately requested, checked against the selected service's available information.
- External lookup is opt-in. Saving a slab photo or using OCR must not automatically transmit unrelated collection data.
- Only the selected image and the minimum necessary lookup information should be sent to an external service.
- If a lookup fails, is unavailable, or conflicts with existing data, keep the existing record unchanged and present the issue for review.
- The user must be able to edit every imported field before accepting it.
- Scanning a slab must never create a second record when the user is reviewing an existing item; stable record IDs control identity.
