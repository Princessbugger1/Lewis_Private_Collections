# Collection Record Schema Specification

## Purpose
Define a stable, expandable record structure so future features can be added without rebuilding or duplicating the collection.

## Shared identity
Every item has one stable catalog number/record ID. Groups, searches, exports, and views reference that same record.

## Core fields
- Catalog number
- Category (Coins, Commemorative Coins, Metals, Paper Money, etc.)
- Country/issuer
- Year/date
- Denomination
- Type/description
- Mint or issuing authority when applicable
- Quantity
- Notes
- Acquisition information when the owner chooses to record it

## Coin-specific fields
- Obverse photo
- Reverse photo
- Edge photo (optional)
- Mint mark
- Variety/error
- Grade
- Grading service
- Certification/slab number
- Metal/composition
- Weight and measurements when desired

## Paper-money-specific fields
- Face/front photo
- Reverse/back photo
- Denomination
- Series
- Federal Reserve/issuing information
- Serial number
- Star note indicator
- Signatures
- Printing information when applicable
- Errors/varieties
- Grade/condition

## Media provenance
Each image stores whether it is an owner-provided photo or a reference image. Reference images are visibly identified and retain source/credit information when available.

## Extensibility
Additional fields may be added later without changing the stable record identity. UI screens may show only a subset of fields.
