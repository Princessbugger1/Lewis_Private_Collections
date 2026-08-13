# Mint Search and Filter Specification

## Goal
Make mint searching intuitive without requiring collectors to remember abbreviations.

## Mint field
Store a normalized mint identity plus display label and common abbreviation when applicable.

Examples:
- Philadelphia (P)
- Denver (D)
- San Francisco (S)
- West Point (W)
- New Orleans (O)
- Carson City (CC)
- Unknown / Not Checked
- Other

## Search behavior
Search should match the normalized mint name, abbreviation, and common user-entered forms. Typing "San Francisco" or "S" should find San Francisco records; typing "West Point" or "W" should find West Point records.

## Filter behavior
A Mint filter presents full readable names, not just letters. Selecting a mint returns all denominations and coin types for that mint unless another filter is also active.

## Data integrity
The abbreviation is an alternate search/display value, not a separate mint. Unknown / Not Checked remains distinct from a known mint and from a confirmed absence of a mint mark.
