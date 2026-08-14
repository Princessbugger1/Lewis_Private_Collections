# Project Decisions — 2026-08-14

This file records today's important catalog decisions so they remain part of the project and can be carried forward safely.

## Core principle
The collection must remain expandable, editable, recoverable, and safe. Smart features suggest; the owner remains in control.

## Classifications
Built-in starting classifications include Coin, Token, Counterfeit, Commemorative, Paper Money/Banknote, Medal, Bullion, Exonumia, and Ancient. Classifications are editable/expandable; users may add, rename, edit, hide, or retire them without deleting items. Ancient is a first-class classification and must not be forced through modern series rules.

## Custom series
Users can create their own series at any time. Custom series are searchable, sortable, editable, and backed up. Deleting a series removes only the grouping definition, never its member items.

## Country / issuer / flags
Country/issuer has no fixed list. New countries and unusual issuers can be added automatically. Historical issuers remain distinct from modern successor states unless deliberately changed. Flags are optional presentation metadata, editable independently, and must not block cataloging. Historical flags should be supported where appropriate.

## Identification
Automatic identification is assistive only. Suggestions can be accepted, changed, rejected, or left as Needs Review/Unknown. User-entered values must not be silently overwritten. Identification controls should be medium-sized, visible, and comfortably tappable on phones without becoming large boxes.

## Visibility / filtering
Hiding a category or series changes its normal display, not the underlying records. Hidden records remain searchable when explicitly searched. Filters and sorting never mutate records.

## Deletion / recovery
Delete is separate from hide, archive, removing from a series, or rejecting a suggestion. Item deletion requires explicit confirmation and should use Recently Deleted/Trash where practical. Permanent deletion requires a second confirmation. Group deletion never deletes items.

## Backup / restore
Backups preserve custom classifications, custom series, country/issuer values, visibility settings, and applicable item data. Restore must not silently overwrite the live collection and should use preview/staged conflict handling. Backup, export/share, and delete remain distinct actions.

## Privacy / security / sharing
Shared views are read-only projections containing only explicitly shareable fields. Private notes, precise location, storage location, acquisition cost, addresses, and access information remain private. Share links should be revocable and protected with non-predictable tokens; optional access codes, expiration, rate limits, and server-side licensing controls should be supported as the system evolves. No security design can prevent someone from photographing information that is visibly displayed.

## Audit history
Important actions such as item deletion/restoration, series/classification changes, sharing changes, and backup/restore activity should be auditable without storing passwords or access secrets.

## Future expansion
The data model must preserve stable item identities and allow new fields/features without duplicating or destroying records. All new features should follow these decisions unless a later explicit project decision supersedes them.
