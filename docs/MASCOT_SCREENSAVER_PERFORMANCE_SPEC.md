# Mascot and Screensaver Performance Specification

## Goal
Make the catalog feel friendly and alive without turning decorative animation into a source of lag, battery drain, or memory pressure.

## Screensaver behavior
- Activate after an idle period configurable by the product (initial target: about five minutes).
- Mascots can enter from screen edges using the same movement style they use to leave.
- They may walk, run, crawl, inchworm, slither, or fly according to their character.
- On user interaction, mascots should not simply vanish. They should react and scatter toward the nearest appropriate screen edge or exit point, then leave within a short, predictable time.
- The screensaver must never block a tap from returning the user to the catalog.

## Optional interactions
Decorative interactions may include:
- Mascots tossing a coin or money bag between themselves.
- A playful three-character "monkey in the middle" interaction.
- Mascots attempting to pull/steal a thumbnail coin without changing the underlying catalog data.
- Small groups talking, dancing, or playing.
- Small flies/buddies around the recycle/trash area where appropriate.

## Performance budget
- Decorative animation is disabled or reduced on low-power/low-memory conditions where platform information permits.
- Prefer CSS transforms, opacity, and compositor-friendly animation rather than repeated layout changes.
- Use small sprite/vector assets where practical.
- Do not continuously render large full-resolution coin images for decorative behavior.
- Use thumbnails only; never move or rewrite the user's original photo files for animation.
- Limit the number of simultaneously active mascots and interactions.
- Interactions should be event-driven and time-limited rather than running complex AI/physics continuously.
- Pause decorative animation when the page/app is backgrounded.
- Respect reduced-motion accessibility settings and provide a setting to disable the screensaver/animation.

## Data safety
- Mascot actions are visual only and must never mutate, reorder, delete, or lock a coin record.
- A mascot attempting to "steal" a coin is purely theatrical and cannot actually change ownership or inventory state.
- Screensaver state should not interfere with autosave, draft recovery, navigation, or camera operations.

## Character system
- The main onboarding mascot remains available through setup.
- Additional mascots can be selected after onboarding.
- Character assets and behavior should be modular so new mascots can be added without changing catalog data structures.

## Accessibility
- Reduced motion must be respected.
- Important information can never be conveyed only through mascot animation.
- Mascots should not cover essential controls.
- A user can disable the screensaver and decorative animations without losing catalog functionality.
