# Internationalization and Language Architecture

## Goal
Make the catalog usable by collectors in multiple languages without creating a separate language app or coupling translation to coin data.

## Architecture
- Store interface text as translatable message keys rather than hard-coded strings throughout the UI.
- Keep user-entered notes and collection data separate from interface translations.
- Allow the user to choose a preferred language in Settings.
- Start with English, while designing the system so additional languages can be added without rewriting the catalog.
- Mascot dialogue, onboarding, Help, troubleshooting, buttons, and system messages should use the same translation system.

## Coin information
- Preserve original coin inscriptions, proper names, dates, mint marks, and historical terms when appropriate.
- Do not automatically translate a collector's personal notes.
- Where a translated description is useful, preserve the original value alongside the translated display value when practical.

## Search and research
- Search should understand localized interface terms while mapping them to the same structured catalog fields.
- Research results from external sources may remain in their source language; the product may provide translation where legally and technically appropriate.
- Translation must never change the underlying stored identification fields merely because the display language changes.

## Mascots
Mascots should have localized dialogue and instructions, but their visual identity and personality remain consistent across languages.

## Layout
- Allow for text expansion because translated phrases can be longer than English.
- Avoid UI layouts that depend on a fixed number of characters.
- Support right-to-left languages in the architecture even if they are not part of the initial release.
- Use accessible fonts and preserve readable sizes after localization.

## Performance
- Load only the language resources needed by the selected language where practical.
- Avoid loading every language's text into memory on startup.
- Language changes should not require rebuilding or reloading the user's collection data.

## Scope
This is a product architecture requirement. It does not require implementing every language immediately. Additional languages should be added based on collector demand, translation quality, and testing capacity.
