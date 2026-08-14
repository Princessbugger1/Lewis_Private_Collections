// Manual smoke-test checklist for the catalog UI.
// These checks are intentionally small and run against a browser build.
// 1. Open a coin and verify Edit opens the record.
// 2. Verify Delete is not shown on the collection card.
// 3. Verify Delete appears only inside an existing record.
// 4. Verify Delete requires confirmation.
// 5. Verify canceling deletion leaves the record unchanged.
// 6. Verify Move/Remove-from-Series never deletes the underlying record.

export const catalogSmokeChecks = [
  'open-edit',
  'delete-location',
  'delete-confirmation',
  'delete-cancel',
  'move-preserves-record',
  'remove-series-preserves-record'
];
