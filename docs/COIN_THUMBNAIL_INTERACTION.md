# Coin Thumbnail Interaction

## Goal
Make collection browsing visually useful while keeping the existing full coin record/edit workflow as the destination for opening a coin.

## Desktop
- Hovering over a coin thumbnail may gently enlarge an optimized preview.
- The preview closes automatically when the pointer leaves the thumbnail/preview area.
- Hover preview must not create a navigation history entry or a new page.
- Clicking the thumbnail opens the existing full coin record/edit page.
- The hover preview should prefer a thumbnail/optimized image rather than loading the original-resolution photograph.

## Touch devices
Touch devices do not have reliable hover. Tapping the thumbnail should preserve the primary, predictable action: open the full coin record/edit page. A separate tap-preview gesture should only be introduced if testing shows it improves usability without making the normal open action confusing.

## Accessibility
- Hover preview is supplemental and cannot be the only way to inspect a coin.
- Keyboard focus should provide an equivalent preview where practical without trapping focus.
- Screen readers should receive the coin's accessible name and useful summary, not an inaccessible visual-only interaction.
- Reduced-motion settings must disable or simplify enlargement animation.

## Performance
Preview effects should be lightweight. Do not load original-resolution images merely because a pointer passes over a thumbnail. Use cached/optimized assets and avoid creating additional navigation states.

## Navigation consistency
The thumbnail interaction must not create duplicate pages, modal stacks, or separate preview records. The established back behavior remains unchanged: after editing a coin, Back returns to the prior meaningful collection/search location.
