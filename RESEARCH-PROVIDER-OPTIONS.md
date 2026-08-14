# External Coin Research Provider — Decision Gate

The catalog is ready for a provider adapter, but no provider should be hard-coded without first confirming its access method, privacy terms, cost, rate limits, and whether it accepts user-uploaded coin images.

## Required behavior
- Accept obverse/reverse coin images.
- Return identification suggestions rather than silently editing the catalog.
- Provide a source or provider name where possible.
- Allow the user to reject results.
- Never claim authentication, authenticity, or professional grading from an image-only result.
- Keep user-entered values unchanged until explicit approval.

## Provider integration rule
The provider-specific code belongs behind `window.LewisRawCoinResearch.research()` so the catalog does not depend on a single service.

## Current state
No provider is connected. The app must continue to say so rather than presenting a simulated identification.
