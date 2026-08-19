# Photo Preview Performance Rules

## Goal
Keep coin browsing fast and polished while making thumbnails and previews feel responsive.

## Image tiers
Use separate image tiers where practical:
- Thumbnail for collection grids/lists.
- Preview for hover/focus inspection.
- Original for the full coin record/photo viewer when needed.

## Loading behavior
- Do not fetch original-resolution images for ordinary browsing.
- Load preview assets lazily as they become relevant.
- Cache recently used previews where practical.
- Cancel or deprioritize previews that are no longer relevant when the pointer moves quickly across many coins.

## Network and offline behavior
A missing preview should never prevent the coin record from opening. If the preview is unavailable, use the thumbnail and continue normally.

## Accessibility and motion
Hover/focus enlargement is supplemental. Reduced-motion preferences should disable or simplify transitions. Keyboard and assistive technology users must retain an equivalent path to the full coin record.

## Resource limits
On constrained devices, prefer smaller previews and avoid keeping excessive high-resolution images in memory. The storage manager and photo lifecycle rules govern when originals may be removed from local storage.

## Testing
Test large collections, slow connections, offline mode, rapid pointer movement, low-memory devices, keyboard navigation, reduced-motion settings, and screens of different sizes.
