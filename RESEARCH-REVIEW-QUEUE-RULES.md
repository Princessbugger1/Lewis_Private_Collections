# Research / Scan Review Queue Rules

External research, OCR, slab scans, and image-based identification must feed a review queue rather than silently changing confirmed catalog data.

## Review states
- Unknown / Not Checked
- Suggested
- Needs Review
- Confirmed
- Rejected

## Suggested changes
- Show the proposed value and the source/type of suggestion when available.
- Allow Accept, Change/Edit, Reject, or Leave for Later.
- Accepting a suggestion changes only the selected field(s), not unrelated fields.
- A rejected suggestion must not repeatedly overwrite the user's current value.
- Leaving a suggestion for later preserves it in the review queue without changing the record.

## Conflicts
- User-entered confirmed values take precedence over research suggestions.
- If two external sources disagree, present the disagreement for review rather than choosing silently.
- A scan or OCR result with low confidence should remain a suggestion.
- Failed research must not prevent saving or editing the item manually.

## History and safety
- Important accept/reject/change actions should be available to the audit history without storing external secrets.
- Review actions must be reversible through normal item editing where practical.
- Review status is separate from item visibility, category visibility, and sharing permissions.
