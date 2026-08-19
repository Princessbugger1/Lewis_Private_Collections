# Accessibility and Readability Specification

## Goal
The catalog should feel simple, polished, and welcoming to children, adults, and older collectors without looking childish or cluttered.

## Readability
- Use comfortably large default text and clear labels.
- Maintain strong contrast between text and its background.
- Do not rely on tiny icon-only controls for important actions.
- Keep primary actions visually distinct and predictable.
- Allow text/UI scaling where supported by the platform.
- Avoid long paragraphs on primary workflow screens.

## Interaction
- Make tap targets comfortably large.
- Avoid requiring precise swipes or tiny controls.
- Provide clear feedback after saves, deletes, exports, and research actions.
- Keep navigation predictable and provide a clear Back path.
- Never make animation the only way to understand what happened.

## Three-state controls
For applicable yes/no questions, use the established cycle:
- ❓ Unknown / Not Checked
- ✅ Yes
- ❌ No
- Tap again returns to ❓

The visual state must have an accessible text/semantic equivalent so the meaning is not dependent on color or emoji alone.

## Mascots and decoration
- Mascots may make the interface friendly but must not obscure controls or required information.
- Provide reduced-motion support and an option to disable decorative animation.
- Decorative behavior must never be required to complete a task.

## Guided setup
- New users receive a simple step-by-step onboarding flow.
- The main mascot can point out the next action and demonstrate the first coin.
- Users can repeat the demonstration a limited number of times or choose to proceed independently.
- Setup should be skippable where appropriate and never trap an experienced user.

## Help and troubleshooting
- Help should be easy to find without cluttering every screen.
- Troubleshooting content should be expandable and written in plain language.
- Repeated user confusion can become a documented troubleshooting entry during testing.

## Inclusive design target
The visual style should be classy and calm enough for serious collectors while remaining approachable and fun for young collectors. Avoid excessive animation, decorative text, or dense dashboards in the normal mode.
