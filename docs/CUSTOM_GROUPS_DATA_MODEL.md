# Custom Groups Data Model

Groups are first-class metadata, separate from coin lifecycle state.

```text
group = {
  id: stable unique identifier,
  name: collector-defined display name,
  createdAt,
  updatedAt
}

coin.groupIds = [group.id, ...]
```

## Rules
- Group IDs remain stable when a group is renamed.
- Missing `groupIds` on an older coin is treated as an empty list.
- Removing a group removes its ID from affected coins but does not delete the coin.
- Duplicate group IDs are not permitted.
- A coin can belong to multiple groups.
- Group membership does not change active/sold/transferred/trash status.

This model is intentionally small so it can be integrated into the existing record format without forcing a destructive migration.
