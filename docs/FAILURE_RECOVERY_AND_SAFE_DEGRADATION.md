# Failure Recovery and Safe Degradation

## Goal
When an optional feature, external service, or background operation fails, the catalog should remain usable and protect the user's data.

## Core rule
A failure in one feature must not be allowed to cascade into collection corruption or a crash of unrelated catalog functions.

## External services
If research, identification, translation, analytics, or another external service is unavailable:
- Keep the catalog usable offline where the workflow permits.
- Show a plain-language status message.
- Provide a manual fallback when practical.
- Do not repeatedly retry in a way that drains battery, data, or blocks the interface.
- Do not overwrite an existing verified coin record with a failed or incomplete response.

## Background operations
Imports, exports, photo processing, backups, and research should be interruptible where practical and should report progress for long operations.

If interrupted:
- Preserve already-saved data.
- Avoid leaving a half-written collection file presented as a valid backup.
- Allow the operation to be retried safely.

## Crash recovery
On restart after an unexpected shutdown:
- Restore the most recent safe application state.
- Offer unfinished-work recovery when applicable.
- Never silently discard a newer saved record because an older draft was recovered.

## Safe degradation
Examples:
- Research unavailable → manual coin entry remains available.
- Mascot animation unavailable → normal interface remains fully usable.
- Translation resource unavailable → fall back to the last valid/default language rather than rendering broken controls.
- Optional integration unavailable → hide/disable only that integration.
- Advanced feature disabled by plan → core collection remains accessible according to plan rules.

## User communication
Error messages should explain what the user can do next. Avoid exposing technical stack traces or internal service details in the normal user interface.

## Testing
Deliberately test network loss, service errors, interrupted imports/exports, low-resource conditions, app closure during editing, and disabled feature flags. Confirm that core collection data remains intact in each case.
