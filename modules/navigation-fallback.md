# Navigation Fallback

If a destination cannot be rendered, keep the navigation available and return to the last valid destination.

- Do not erase collection records.
- Do not reset record-level three-state fields.
- Do not replace the application shell.
- Keep all primary navigation controls available.
- Use `coins` only when there is no valid previous destination.

This fallback behavior is intentionally independent of feature-module implementation.