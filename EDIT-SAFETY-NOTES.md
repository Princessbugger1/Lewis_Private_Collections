# Edit Safety Notes

Normal text fields are intentionally editable after a record is saved. If a user discovers an incorrect mint mark, date, denomination, variety, or note, they can open the record, edit that field, and save the corrected record.

Three-state fields remain distinct: Unknown/Not Checked, Yes, and No. They should not be converted into ordinary text inputs because Unknown is meaningful and must remain distinguishable from No.

Research suggestions must never silently replace edited values. A user must explicitly review and approve a suggestion before it can populate a catalog field.
