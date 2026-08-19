# Appearance Preference Model

## Preference hierarchy
Coin Chime should resolve appearance in this order:

1. Explicit user choice: **Light** or **Dark / Blackout**.
2. **Use Device Setting** when selected.
3. Safe fallback to Light if the device preference cannot be determined.

## Scope
Appearance is a presentation preference only. It must never be stored as part of a coin record or affect collection data.

## Account/device behavior
When account preferences are supported, the chosen preference can follow the user's account across authorized devices. Device-specific overrides may be supported later if needed.

## Theme changes
A system theme change while using Device Setting should update the interface without changing records, photos, Archive, Trash, or sync state.

## Accessibility
Appearance must remain independent from reduced motion, text scaling, keyboard navigation, and other accessibility preferences.
