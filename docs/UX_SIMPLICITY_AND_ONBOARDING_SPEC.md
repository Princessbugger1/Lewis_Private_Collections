# UX Simplicity and Onboarding Specification

## Core principle
Powerful underneath. Simple on the surface.

The catalog may contain advanced research, professional inventory, subscription, backup, media, and customization systems, but everyday collectors should not have to understand or configure those systems to catalog a coin.

## First-run experience
- Welcome screen asks for the minimum needed to personalize the catalog.
- User may choose a display name.
- User may choose a profile image from built-in choices or provide their own image.
- User may choose the main onboarding mascot.
- The main mascot guides the user through the first coin entry.
- Guidance uses short, sequential steps rather than a long instruction page.
- The first completed coin should demonstrate the normal workflow from start to save.
- After the first coin, the mascot may offer to demonstrate additional coins, with a small bounded number of guided repetitions.
- When the user indicates they are ready to work independently, onboarding ends cleanly.
- Other mascots may be introduced only after the primary setup is complete.

## Help and troubleshooting
- Include a Help area from the initial release architecture so troubleshooting can grow with testing feedback.
- Troubleshooting entries should answer practical questions in plain language.
- Prefer short step-by-step answers and screenshots/illustrations where useful.
- User feedback during testing can become new troubleshooting entries without changing the core catalog model.
- Help must not expose administrative tools or private recovery functions.

## Navigation
- Maintain a shallow navigation model.
- Do not allow ordinary actions to create long stacks of duplicate pages.
- Prefer replacing the current view, opening a clearly bounded modal/sheet, or returning to the relevant parent view.
- Back should return to the user's meaningful previous context rather than replaying every transient panel.
- Unsaved-work protection must appear before destructive navigation when necessary.

## Readability and accessibility
- Use clear typography and strong visual hierarchy.
- Avoid small text for essential information.
- Keep primary actions obvious and separated from destructive actions.
- Avoid unnecessary decorative clutter.
- Important status messages must remain understandable without relying only on color.
- Support larger text and touch targets where platform capabilities allow.
- Beginner-friendly language should not make the professional/advanced data model less capable.

## Progressive disclosure
- Basic coin entry shows only the fields most collectors normally need.
- Advanced fields remain available through an explicit expandable area.
- Research, certification lookup/import, dealer tools, custom fields, and other advanced capabilities should appear when relevant rather than permanently occupying the main entry screen.
- Subscription/storage information should not dominate the collection workflow.

## Mascots and animation
- Mascots are optional personality and guidance layers, not required controls.
- Screensaver animation must be idle-only and performance-conscious.
- Animation must pause/stop promptly when the user interacts.
- Mascots should exit naturally toward an edge rather than abruptly vanishing when the screensaver is interrupted.
- Decorative animation must never block a tap target or delay ordinary catalog actions.

## Performance guardrails
- Lazy-load optional media and animation.
- Avoid loading every collection image at full resolution simultaneously.
- Use thumbnails for catalog grids and load full images only when requested.
- Screensaver activity should use bounded, lightweight animations rather than continuous expensive computation.
- Research/network calls should not block basic catalog entry.
- Advanced features should fail gracefully without making the core catalog unusable.

## Testing rule
Every major feature should be evaluated twice: (1) can a new collector understand it without instructions, and (2) can an experienced collector reach the advanced capability without fighting the beginner-friendly interface?
