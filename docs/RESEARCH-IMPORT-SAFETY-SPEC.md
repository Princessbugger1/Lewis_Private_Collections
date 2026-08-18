# Research Import Safety Specification

## Goal
Allow users to save information from supported certification/research companies into their catalog without violating the company's terms, API rules, licensing, or image-use restrictions.

## Certification lookup

In Edit Item > Certification:
- User selects a supported company (for example PCGS, NGC, or another supported provider).
- User enters the certification number.
- A "Look Up Certification" action requests only information available through an authorized integration.
- The returned data is shown for review before anything is saved.
- The user can accept, edit, or reject individual imported values.
- Existing user-entered values are never silently overwritten.

## Importable information

Only fields explicitly available through the provider's authorized integration may be imported. Potential fields include year, mint, denomination, country/issuer, description, grade, variety/designation, certification number, certification details, and authorized images.

## Images

Provider images may be imported only when the provider's API, license, terms, or other authorization permits it. A visible web image is not by itself permission to copy and permanently store the image.

## External-page behavior

The catalog must not scrape or bypass a provider's website protections. If a provider supports a direct "Import to My Catalog" mechanism, use the supported mechanism. Otherwise, provide the certification-number lookup/import path when authorized.

## Review-first rule

No research import may directly create or overwrite a catalog item without user review and confirmation.

## Provider-specific adapters

The import system should use provider-specific adapters so PCGS, NGC, ANACS, and future providers can expose only the capabilities each provider authorizes. Adding or removing a provider must not require rebuilding the catalog's core item model.
