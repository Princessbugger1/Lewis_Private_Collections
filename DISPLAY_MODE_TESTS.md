# Display Mode Regression Tests

Run these checks after each display-mode change:

1. Open the catalog with no saved display preference: it must use Automatic mode.
2. Tap 📱 Phone: the choice must remain selected after reload.
3. Tap 🖥️ Desktop: the choice must remain selected after reload.
4. Tap ↔️ Automatic: the catalog must return to normal responsive behavior.
5. Switch modes with existing collection records present: record count and record contents must remain unchanged.
6. Export a backup after switching modes: the backup must contain the same collection records.
7. Restore a backup after switching modes: display preference and collection data must remain independent.
8. On a phone-sized screen, all three controls must remain visible and easy to tap.
