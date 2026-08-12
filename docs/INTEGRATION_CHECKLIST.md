# Lewis Private Collections — Integration Checklist

Before integrating new features into `index.html`, verify:

- Existing add/edit/delete behavior remains intact.
- Existing localStorage data remains readable.
- Export/import still works.
- Four-state checklist values remain distinct.
- Phone and desktop view controls remain easy to find.
- Settings can hide optional sections without deleting stored values.
- Certification links remain separate from ordinary notes.
- New fields are optional so older records continue to work.
- Research assistance does not navigate away from the current record.
- Camera identification requires confirmation before changing a record.
- No customer/account/privacy functionality is introduced until the data separation model is ready.

## Release rule
Do not publish a new live build until the above checks have been reviewed against the actual catalog.
