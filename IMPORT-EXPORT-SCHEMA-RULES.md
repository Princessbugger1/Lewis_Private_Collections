# Import and Export Schema Rules

The collection data format must be stable, explicit, and forward-compatible so the catalog can grow without trapping the user's data in one interface.

## Record requirements
- Every item has a stable unique record ID.
- Preserve classification, country/issuer, series, denomination, date, mint, variety, condition/grade, certification information, notes, photos/attachments, and applicable custom fields when present.
- Preserve three-state values exactly: Unknown, Yes, and No.
- Preserve custom classifications and custom series.
- Preserve review states and relevant audit history when supported.

## Import behavior
- Validate the file before changing live records.
- Show a preview with new records, updates, skipped rows, and validation errors.
- Never silently overwrite a confirmed field because an imported value is blank or malformed.
- Use stable IDs when present to match existing records and avoid duplicates.
- Unknown fields should be retained where the format permits, rather than discarded without warning.
- A bad import must not partially destroy the existing collection.

## Export behavior
- Export must be explicit and user initiated.
- The user should be able to choose an appropriate export scope where supported.
- Export files are sensitive collection data and should not be automatically uploaded elsewhere.
- Export should preserve enough information for future migration to another catalog system.

## Compatibility
- Schema versions must be recorded.
- Future versions should provide migrations rather than silently changing the meaning of old fields.
- The app should clearly report unsupported or incompatible data rather than pretending an import succeeded.
