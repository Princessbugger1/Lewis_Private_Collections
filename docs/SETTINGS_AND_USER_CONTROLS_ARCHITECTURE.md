# Settings and User Controls Architecture

## Goal
Keep important choices easy to find without turning Settings into a confusing control panel.

## Main settings groups
- Appearance and readability.
- Language.
- Mascots and animation.
- Notifications.
- Backup/export.
- Privacy and diagnostics.
- Subscription/plan.
- Professional Mode.
- Help/support.

## Simplicity rules
- Group related settings under plain-language headings.
- Avoid technical terms unless they are explained.
- Put frequently used controls near the top.
- Keep dangerous actions such as permanent deletion separate from ordinary preferences.
- Use confirmation for settings that can materially affect data, privacy, or billing.

## Accessibility
- Settings must support larger text and readable spacing.
- Do not rely on color alone for toggles or status.
- Controls need accessible names and clear current-state descriptions.
- Reduced motion should be respected throughout settings and the rest of the app.

## Persistence
User preferences should be stored separately from collection records so changing a visual or language preference cannot alter coin data.

## Safe defaults
Use conservative defaults for privacy, destructive actions, and resource-heavy behavior. Users can opt into additional convenience features where appropriate.

## Feature flags and plans
Settings should expose only capabilities relevant to the user's current plan or enabled feature flags, while avoiding confusing disappearance of important data. If a feature becomes unavailable, explain the state and preserve the underlying data.
