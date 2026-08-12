# Lewis Private Collections — Build Roadmap

## Current foundation
- Responsive phone/desktop view controls
- Coins, Tokens, Medals, Currency, Sets and Other categories
- Country, denomination, year, mint, type, grade, variety, collection and location fields
- U.S. series suggestions by denomination/year
- Search, filters, sorting, edit/delete
- Estimated and purchase value fields
- PCGS, NGC, ICG and ANACS certification fields
- Export/import backup
- Four-state checklist cycle: Unknown -> Yes -> No -> N/A -> Unknown

## Next build priorities
1. Settings page with feature toggles
2. Weight: expected/reference weight and actual measured weight
3. Composition / metal information
4. Optional metal-testing section
5. Photo capture and photo attachment workflow
6. Slab/certification workflow and official-source references
7. In-catalog research panel that does not abandon the current record
8. Help & Troubleshooting and support-report structure
9. International language architecture
10. Stronger modular feature architecture
11. GitHub Pages deployment and verification

## Design rules
- Do not remove working collection data when features are changed.
- Keep major features independently switchable where practical.
- Preserve the distinction between Unknown, No and N/A.
- Research should open without losing the current catalog context.
- Camera-first identification should require user confirmation before creating/updating a record.
- VAM identification should remain optional assistance/referencing rather than forcing an automated identification.
- Keep future licensing/subscription/customization possibilities open without making them part of the basic catalog yet.
