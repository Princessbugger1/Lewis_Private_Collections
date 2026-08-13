# Master Change Management

## Goal
Keep the master catalog stable while allowing continuous improvement.

## Before changing an existing core file
1. Read the current file from the repository.
2. Identify what must be preserved.
3. Make the smallest appropriate change.
4. Commit the change with a descriptive message.
5. Verify that the resulting file is present and usable.

## Adding new features
Prefer adding isolated modules, documentation, or data-model extensions before modifying core files when that reduces risk.

## Version history
Git commit history is the recovery trail. Working versions should not be destroyed simply because a newer version exists.

## Simplified editions
A basic edition should be produced from the master architecture/data model. It should not become a replacement for the master edition.

## Rollback
If a change causes a problem, use Git history to identify and restore the last known-good version rather than rebuilding from memory.

## Quality over speed
A blocked or uncertain change should be checked and corrected before continuing. Never report a change as completed unless the repository confirms the write succeeded.
