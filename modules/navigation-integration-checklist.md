# Navigation Integration Checklist

Before integration into `main`:

- Confirm the navigation modules are present on `build/navigation`.
- Confirm the five destination IDs match the feature-module registry.
- Confirm navigation state is UI-only and cannot mutate records.
- Confirm the phone layout keeps all primary destinations discoverable.
- Confirm the desktop/phone presentation switch remains discoverable.
- Confirm the fallback behavior preserves the last valid view.
- Confirm integration can be performed without replacing the whole `index.html`.
- Test the integrated build before merging to `main`.
