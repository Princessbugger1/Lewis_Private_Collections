# Export and Reporting

## Goal
Let the owner get useful information out of the catalog without changing the master records.

## Reports
Support reports such as:
- complete collection inventory
- coins only
- paper money only
- composition summaries
- items with COA = Yes
- items with COA = No
- items still Unknown / Not Checked
- items needing research
- items missing photographs
- certified items
- grouped quantities and physical-piece totals

## Record detail
Reports should be able to include the fields the owner chooses, including photographs when appropriate.

## Export formats
The application should be designed so structured data can be exported to a common machine-readable format and a human-readable format. The exact formats can be selected during implementation based on the final app architecture.

## Filters
Exports should respect the active filters and should provide a clear indication of what subset is being exported.

## Privacy
Private fields and photographs should not be included in a shareable/public report unless the owner explicitly selects them.

## No destructive behavior
Generating a report or export must never edit, delete, merge, or otherwise modify collection records.

## Future-proofing
Exports should use stable field names and record IDs so data remains portable if the application is replaced or expanded later.
