# Responsive Phone and Computer Design

## Goal
Provide one catalog product that feels natural on phones, tablets, laptops, and desktop computers rather than treating one layout as a shrunken version of another.

## Phone priority
- Touch-first controls.
- Large readable text and tap targets.
- Simple navigation and short workflows.
- Important actions reachable without precision tapping.
- Avoid dense tables when a stacked/mobile presentation is clearer.
- Keep desktop-site/responsive switching understandable and easy to find when the platform provides that choice.

## Computer experience
Use additional screen space for:
- Wider collection lists and grids.
- Side-by-side coin details and photos.
- Plan comparison tables.
- Professional/Dealer Mode.
- Reports, bulk operations, and inventory tools.
- Multi-panel research workflows where appropriate.

## Shared product behavior
- The same underlying collection data is used across screen sizes.
- User preferences remain separate from collection records.
- Navigation and feature capabilities remain consistent even when presentation changes.
- Responsive changes must not alter the meaning of a saved record.

## Breakpoints and layout
Use content-driven responsive breakpoints rather than designing only for a small set of device models. Components should reflow, stack, or expand based on available space.

## Accessibility
- Support larger text without clipping important information.
- Preserve adequate contrast and tap targets.
- Do not hide essential controls solely because the viewport is narrow.
- Respect reduced-motion settings on every form factor.

## Performance
Avoid loading desktop-only panels or large decorative resources when the available screen cannot use them. Likewise, do not force a phone-style single-column interface onto a wide desktop when additional space would materially improve usability.

## Testing
Test representative small phones, large phones/tablets, laptops, and desktop-sized windows. Verify portrait and landscape where supported, including keyboard, touch, and mouse interaction as applicable.
