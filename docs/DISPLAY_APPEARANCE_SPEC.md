# Display and Appearance Specification

## Appearance modes
Coin Chime should provide three user choices:

1. **Light** — a bright, traditional interface.
2. **Dark** — a dark/blackout-style interface for reduced screen brightness and a different viewing preference.
3. **Use Device Setting** — automatically follow the phone, tablet, laptop, or desktop operating-system appearance setting.

## Design requirements
- The setting applies consistently across supported phone and computer layouts.
- Changing appearance must not alter collection data or photo files.
- The preference should persist for the signed-in user where account preferences are supported, and locally for offline use where appropriate.
- Respect system reduced-motion and accessibility preferences independently of the appearance choice.
- Maintain professional contrast, readable text, visible controls, and accessible focus states in both Light and Dark modes.
- Mascots and decorative elements must remain secondary to the professional catalog interface.

## Failure behavior
If a theme preference cannot be loaded, fall back safely to the device setting or Light mode without affecting catalog data.

## Testing
Test Light, Dark, and Device modes on phone and desktop layouts, including account switching, first launch, offline use, and system theme changes.
