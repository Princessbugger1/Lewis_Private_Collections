# Customer License Architecture

This is a product-design specification for a future commercial release. It is not a production licensing backend yet.

## Goals
- A customer receives a unique activation/license credential.
- Activation creates or unlocks a separate customer catalog; it does not grant access to the owner's collection.
- License credentials must not be hard-coded into public client files.
- The production system should validate licenses server-side.
- License status should support active, revoked, expired, and replacement/compromised states as appropriate.
- A customer should be able to use the same licensed catalog across supported devices according to the eventual license terms, without uncontrolled sharing.
- The system should avoid treating a copied URL as a new license.

## Data separation
Owner collection data, customer collection data, license records, and read-only share tokens should be separate data domains.

## Read-only sharing
Customer/owner sharing should use a separate, revocable share credential. Shared views must be generated from explicitly permitted fields and must never expose edit credentials or private fields.

## Product/legal boundary
Before paid launch, licensing rules, device limits, subscriptions or one-time purchase terms, refunds, privacy, data retention, and enforcement should be reviewed and implemented with appropriate legal and payment infrastructure.
