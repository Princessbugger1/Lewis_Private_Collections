# Observability, Diagnostics, and Privacy

## Goal
Make bugs easier to diagnose without collecting more user information than necessary.

## Principles
- Diagnostics should be purposeful, minimal, and documented.
- Never put collection contents, private notes, full-resolution coin photos, passwords, authentication tokens, or payment information into ordinary crash/error logs.
- Prefer anonymous technical identifiers over personally identifying information.
- Provide clear user-facing disclosure for analytics, crash reporting, and optional diagnostics according to the final privacy policy and applicable requirements.

## Error handling
When a recoverable error occurs, capture enough technical context to reproduce it without exposing private collection data. Examples include app version, feature/module name, operation type, and sanitized error category.

## Debug mode
Development/debug diagnostics must be disabled or appropriately protected in production. Never expose internal endpoints, test credentials, feature-flag administration, or debugging controls to ordinary users.

## Performance monitoring
Measure performance using aggregate or minimized telemetry where practical. Focus on useful signals such as startup time, search duration, memory pressure, failed imports, and crash frequency rather than recording collection contents.

## User control
Where applicable, provide settings or onboarding disclosures for optional analytics/diagnostics and honor the user's choices. The final implementation must match the published Privacy Policy.

## Testing
Verify that logs remain sanitized when errors occur during coin editing, photo processing, research, backup/restore, subscription changes, and account support workflows.
