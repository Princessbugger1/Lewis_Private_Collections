# External Research and Network Security Rules

External research must be treated as an untrusted boundary. The catalog should obtain only the minimum information necessary and must not let outside content control the application.

- External services are opt-in for a research action; simply viewing or saving a record does not contact them.
- Send only the selected image or minimum identification data required for the requested lookup.
- Never send private collection location, home address, storage details, account credentials, private notes, or unrelated records to a research provider.
- Treat all external responses as untrusted data. Never execute returned scripts, HTML, redirects, or downloaded files as application code.
- Prefer APIs or structured data endpoints over embedding arbitrary third-party web pages inside the catalog.
- If an external site must be opened, isolate it from privileged catalog operations and do not pass authentication/session credentials to it.
- Do not automatically download executables, browser extensions, or other active content from research results.
- Validate response size, content type, and expected fields before storing imported research data.
- Network failures, malformed responses, or unavailable services must fail safely and leave existing confirmed records unchanged.
- External research cannot bypass catalog authentication or collection privacy controls.
- Log the fact that a research action occurred without storing unnecessary secrets or sensitive request contents.
