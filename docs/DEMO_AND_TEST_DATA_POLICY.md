# Demo and Test Data Policy

## Goal
Keep development and testing from exposing or damaging the owner's real collection data.

## Test records
Development and automated tests should use clearly labeled synthetic records whenever real collection data is not required.

## Production data
Real collection records and owner photographs should not be copied into public examples, screenshots, documentation, or test fixtures without the owner's explicit decision.

## Test coverage
Tests should cover at minimum:
- creating and editing a coin record
- creating and editing a paper-money record
- cycling three-state fields
- photo/reference-image separation
- search and filtering
- import validation and duplicate review
- backup and restore safeguards
- privacy/sharing controls
- sale/transfer lifecycle changes

## Regression protection
When a bug is fixed, a test should be added where practical so the same problem is less likely to return.

## Destructive testing
Tests that intentionally delete, overwrite, merge, or restore records should use disposable test data and must not target the owner's live collection.

## Release readiness
A release should not be considered ready merely because the interface loads. Core workflows and privacy safeguards need practical testing before being treated as complete.

## Future-proofing
The test suite should remain independent from a particular browser, phone model, or external research provider wherever possible.
