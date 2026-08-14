# Catalog Change Safety Rules

These rules govern future implementation changes to the catalog.

1. Preserve existing collection records unless a change explicitly targets them.
2. Read the current file before replacing an existing implementation file.
3. Prefer small isolated changes over large rewrites.
4. Never use real collection data as disposable test data.
5. New features must be reversible where practical.
6. User-entered values must not be silently replaced by research or automatic enrichment.
7. Category visibility, sharing, licensing, and UI settings must not delete collection records.
8. Destructive operations require explicit user intent and appropriate confirmation/recovery.
9. Security-sensitive enforcement must not rely solely on client-side UI behavior in the commercial version.
10. Before a risky migration, establish a backup/export path and verify the migration against representative test records.

## Completion rule
A feature is not considered safely integrated merely because its specification exists. When implementation begins, verify the affected workflow and confirm that unrelated catalog behavior remains intact.
