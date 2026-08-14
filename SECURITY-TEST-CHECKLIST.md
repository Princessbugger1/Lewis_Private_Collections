# Security Regression Checklist

Before releasing a build, verify:

- [ ] External research cannot write to a coin record without explicit user confirmation.
- [ ] A failed scan/research attempt leaves existing records unchanged.
- [ ] Research requests contain only the minimum needed coin-identification data.
- [ ] No address, precise location, storage location, collection total/value, private notes, or unrelated records are sent to external services.
- [ ] Images sent externally do not expose GPS/EXIF metadata when removal is supported.
- [ ] Read-only sharing excludes private fields by default.
- [ ] Hidden categories remain stored and recoverable.
- [ ] Editing one coin does not alter another coin.
- [ ] Delete requires explicit confirmation.
- [ ] Counterfeit, commemorative, token, and paper-money classifications remain independently editable.
- [ ] Country/issuer grouping does not duplicate or delete records.
- [ ] Historical issuer/flag information is not silently replaced with a modern country/flag.
- [ ] Backup/restore is separate from reset/delete behavior.
