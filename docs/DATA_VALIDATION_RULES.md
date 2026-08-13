# Data Validation Rules

## Goal
Prevent incomplete, contradictory, or accidentally corrupted records from entering the master catalog.

## Required identity
Every collectible must have a stable record ID. The ID should remain unchanged when descriptive information is edited.

## Field validation
The application should validate data types and reasonable formats for dates, numbers, certification numbers, serial numbers, and other structured fields without rejecting legitimate unusual collectibles merely because they are uncommon.

## Three-state integrity
Three-state fields must contain only one of the three defined states: Unknown / Not Checked, Yes, or No. A missing value must not silently become No.

## Paper money
Serial numbers, dates, denomination, series, issuing information, and printing fields should be validated independently so one malformed value does not corrupt the entire record.

## Coin measurements
Weights and measurements should preserve the entered precision and unit information where relevant. The application should warn about obviously inconsistent entries rather than silently changing the owner's value.

## Conflicts
Contradictory information from research or imports should be flagged for review instead of silently overwriting owner-confirmed data.

## Save behavior
Invalid data should produce a clear explanation and should not partially overwrite a valid existing record.

## Import validation
Bulk imports should be validated before they are applied. The system should report errors and potential conflicts so the owner can review them.

## Future-proofing
Validation rules should be versioned and extensible. A newly introduced rule must not silently reinterpret historical records without a migration or review path.
