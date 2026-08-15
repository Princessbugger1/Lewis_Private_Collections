# Modular integration plan

Branch: `safe-modular-fixes`

## Components staged
- `settings.js` — optional-section ON/OFF state; OFF hides a section without deleting saved data.
- `photos.js` — file-to-preview and local persistence helper.
- `certification.js` — normalized certification and verification-link data.

## Integration rules
1. Do not replace the live `index.html` with a reconstructed file.
2. Do not delete collection records as part of UI changes.
3. Preserve existing local-storage keys unless migration is explicitly tested.
4. Connect one component at a time and test before merging to `main`.
5. Keep Certification available because it will support verification-link information.
6. COA, Photos, Paper Money Details, Certification, and other optional sections must be independently hideable through Settings.

## Next integration order
1. Settings controller and section IDs.
2. Photo preview/save/restore.
3. Certification placement and verification link.
4. COA visibility wiring.
5. Full regression test.
6. Open a pull request into `main` only after the branch is verified.
