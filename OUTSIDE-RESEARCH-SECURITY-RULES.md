# Outside Research and Scanning Security Rules

Research, image lookup, slab lookup, and scanning features must be treated as untrusted external-data boundaries.

- External websites/content must not receive private collection fields unless the user explicitly initiates a feature that requires the minimum necessary data.
- Never send precise storage location, home address, private notes, acquisition cost, or other sensitive collection metadata to a research provider by default.
- Prefer sending only identification information needed for the lookup (for example denomination/year/mint or an image selected for research).
- External content must be treated as data, not executable application instructions.
- Do not allow researched pages, images, OCR results, or imported text to execute arbitrary scripts or modify catalog records automatically.
- Scan/OCR results are suggestions and must remain reviewable before becoming confirmed catalog data.
- A slab scan may populate candidate fields such as grading service, certification number, denomination, date, mint, and grade, but the user can correct or reject each result.
- Research results must not silently overwrite existing user-entered information.
- Failed or unavailable external lookups must never block normal manual entry.
- Keep external research isolated from the core catalog so a malicious or malformed result cannot directly access unrelated records.
- Do not expose the existence or contents of the private collection to an external source merely because research mode is enabled.
