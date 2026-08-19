# Subscription Plan Comparison UI Requirements

## Goal
Make plan selection easy to understand at a glance so a collector can compare plans before choosing one.

## Comparison layout
Provide a dedicated plan-comparison view with plans shown side-by-side on larger screens and in an accessible stacked/swipe layout on smaller phones.

Each feature row should show:
- The feature name in plain language.
- A clear check mark when included.
- A clear indication when not included.
- A short explanation for features that need clarification.

## Suggested sections
- Collection size.
- Photo/storage allowance.
- Number of catalogs.
- Advanced search.
- Research/identification tools.
- Backup/export capabilities.
- Professional/Dealer Mode.
- Multiple-copy inventory tools.
- Reports/bulk tools.
- Support level.
- Any other feature that materially differs between plans.

## Important UX rules
- Do not make the comparison intentionally confusing or hide important limitations in fine print.
- Keep feature names consistent between the comparison screen, account settings, and billing/checkout screens.
- Clearly distinguish "included," "not included," and "available as an add-on" if add-ons are ever offered.
- Highlight the currently selected plan without making the other plans difficult to compare.
- Allow the user to change plans without losing their place in the comparison.
- On small screens, ensure every plan can still be compared without requiring tiny text or precise horizontal scrolling.
- Include a concise link/action for full plan details and terms.

## Accessibility
- Check marks must have accessible text equivalents.
- Do not use color alone to communicate inclusion/exclusion.
- Text must remain readable at supported accessibility sizes.
- The comparison must work with screen readers and reduced-motion settings.

## Pricing
Actual plan names, prices, quotas, and feature entitlements remain configuration data and should not be hard-coded into the UI. This allows pricing to change without rebuilding the catalog.

## Performance
The comparison screen should use lightweight plan/feature metadata. It should not load collection records, photos, or other heavy catalog resources just to display plan differences.
