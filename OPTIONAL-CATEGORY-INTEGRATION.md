# Optional Category Integration

Paper Money, Tokens, and Counterfeits are visibility-controlled categories.

## Rules
- Each category has its own ON/OFF preference.
- OFF hides the category from selection without deleting saved records.
- ON restores the category to selection.
- Existing records remain searchable and stored; visibility controls must not mutate or erase their data.
- Category filters should continue to reflect stored records even when a category is hidden, unless the user explicitly chooses to filter hidden categories out.
- If a record is currently being edited and its category is hidden, the record must remain editable; hiding a category is not a destructive operation.
