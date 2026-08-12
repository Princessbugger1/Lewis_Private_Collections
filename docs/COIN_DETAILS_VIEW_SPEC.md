# Coin Details View

## Principle
The main collection list may stay compact, but tapping a coin opens its full record. Settings control list visibility, not access to stored information.

## Detail sections
- Basic Information
- Physical Details
- Authentication & Testing
- Photos
- Purchase & Value
- Organization
- Notes & History

## Rules
- Hidden list fields remain available in the full details view.
- Empty optional fields remain empty and are not replaced with invented values.
- Expected weight and actual measured weight remain separate.
- Composition is displayed as recorded/reference information.
- Metal-test results are observations and must not be presented as guaranteed authentication.
- Editing from the details view updates the same underlying record; it must not create a duplicate coin.
- Returning to the list preserves the user's current filter/group context when practical.

## Progressive disclosure
Sections may be collapsed by default where appropriate, while keeping important actions obvious. The design should work comfortably on a phone as well as a desktop screen.
