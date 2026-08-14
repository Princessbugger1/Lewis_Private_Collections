# Backup, Export & Import Safety Specification

The collection must remain portable and recoverable.

## Export
- Provide an owner-controlled export of collection records and supported metadata.
- Export must distinguish collection data from app settings, licensing credentials, and private administrative secrets.
- Shared/read-only views must never be treated as backups.

## Import
- Import should validate the file before changing stored records.
- Prefer preview + confirmation before applying an import.
- Imported records should not silently overwrite existing records; duplicate/merge behavior must be explicit.
- Invalid or unsupported records should be reported without corrupting valid records.

## Backup
- Before major migrations, provide a safe backup/export path where practical.
- Restoring a backup must be an explicit operation with a confirmation step.

## Commercial security
- License secrets, authentication credentials, and server-only secrets must never be included in ordinary collection exports.
- The product terms should explain what is included in backups/exports and how long any server-side backups are retained.

## Core rule
Adding, changing, importing, exporting, hiding, sharing, or deleting data must not silently destroy unrelated collection records.
