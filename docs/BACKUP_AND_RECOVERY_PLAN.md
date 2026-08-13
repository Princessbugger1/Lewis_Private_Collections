# Backup and Recovery Plan

## Goal
The master collection must remain recoverable even if a phone, browser, hosting service, or individual app version is lost or damaged.

## Source of truth
The GitHub repository is the version-controlled source for the application code and master project documentation. Collection records and photographs must also have an intentional backup strategy rather than relying only on a browser cache or a single device.

## Required protections
- Keep the master code in Git with commit history.
- Preserve earlier working versions through Git history rather than overwriting them without a recoverable commit.
- Provide collection-data export in a portable format.
- Provide a media backup/export strategy for owner photographs.
- Keep reference images/source information separate from owner media.
- Never make a simplified catalog the only copy of the master data.

## Recovery design
A future restore process should be able to reconstruct the master catalog from:
1. application source/version history;
2. portable collection-data export;
3. owner-photo/media backup;
4. reference/source metadata where retained.

## Privacy
Backups containing personal collection information or photographs should be treated as private. A future backup workflow must clearly distinguish private backups from any public website deployment.

## Future feature
Add a user-facing Backup / Export area with a clear last-backup date, export options, and restore guidance. Do not imply that a backup exists unless the application has actually completed one.
