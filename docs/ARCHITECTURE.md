# Master Catalog Architecture

## Goal
Keep the Lewis Private Collections catalog expandable, maintainable, and uncluttered as features are added.

## Layers
1. **Master data model** — the stable record structure is the source of truth.
2. **Storage** — local/private collection data and media are kept separate from external reference material.
3. **Research services** — identification, valuation, certification research, and image references are replaceable services, not the master database.
4. **User interface** — advanced, normal, and future basic views can present the same records differently.
5. **Export/backup** — portable exports provide a path away from any single interface or host.

## Core rule
New features should extend the master model rather than create parallel versions of the same collection data.

## Media rule
Owner photographs and external reference images must remain separate throughout storage, display, export, and sharing.

## Verification rule
Externally generated or researched information remains a suggestion until the owner confirms it. Confirmed data should survive even if a research provider later becomes unavailable.

## Privacy rule
Private collection information should not become public merely because application code or a catalog shell is publicly hosted.

## UI rule
The interface should favor compact controls, clear hierarchy, and progressive disclosure. Advanced information should be available without forcing every field onto the main screen.

## Future basic version
A basic catalog should be a simplified view of the master records, not a separate database. It may hide advanced research, provenance, valuation, and other fields while preserving the underlying data.

## Change discipline
Before changing an existing core file, inspect its current contents and preserve a recoverable Git commit. Do not overwrite a working master file based on an assumption about its contents.
