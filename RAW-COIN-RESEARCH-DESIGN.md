# Raw Coin Research — Safe Build Plan

## Goal
Provide an optional research workflow for raw coin photographs without silently changing catalog records.

## Flow
1. User takes/selects clear obverse and reverse photos.
2. App keeps those photos attached to the item workflow.
3. User chooses **Research photos**.
4. An external research service may return identification suggestions.
5. Suggestions are shown separately from the catalog fields.
6. User reviews each suggested field.
7. Only explicit user approval copies a suggestion into the catalog.
8. The app records that the information came from external research.

## Safety rules
- Never overwrite user-entered catalog data automatically.
- Never treat image identification as authentication or grading.
- Preserve the original photographs regardless of research results.
- Show the external-research notice before accepting results.
- If no service is available, tell the user plainly; do not fake a result.
- Research results should be discardable without changing the collection record.

## Future service adapter
The eventual implementation should use a small adapter function rather than embedding a provider throughout the catalog. The adapter can accept image files and return normalized suggestions such as denomination, country, date, mint mark, variety, composition, and confidence/source information.

The provider should be replaceable later without changing the catalog storage model.