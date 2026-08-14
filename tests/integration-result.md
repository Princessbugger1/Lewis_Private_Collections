# Integration verification record

The browser integration test is intentionally a static browser test page because the current repository has no configured browser-test runner.

Verification protocol:

1. Open `catalog-integration-test.html` from the `catalog-integration-test` branch in a browser.
2. Confirm it displays `PASS — load, move, remove-from-series, and delete all behaved correctly.`
3. Confirm no real catalog data is used: the test uses the separate `lewis-private-collections-v8-integration-test` key and removes it afterward.
4. Only after a visible PASS should the integration be considered eligible for a pull request.

This file records the required manual verification rather than falsely reporting an automated pass.
