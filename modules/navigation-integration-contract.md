# Navigation Integration Contract

The eventual app-shell integration should load the navigation modules without replacing the catalog's existing application code.

Required integration points:

- Load `modules/navigation.css` with the catalog styles.
- Load `modules/navigation.js` after the document is available.
- Mount the navigation into a dedicated shell container.
- Supply an `onNavigate(destination)` callback to connect destinations to existing/new feature modules.
- Preserve the existing catalog state and data model.
- Do not merge this branch into `main` until the integrated build has been tested on a phone-sized viewport.

This contract intentionally contains no changes to `index.html`.
