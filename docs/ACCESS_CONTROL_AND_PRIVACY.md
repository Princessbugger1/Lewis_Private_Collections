# Access Control and Privacy

## Goal
Keep private collection information protected while allowing the owner to use the catalog conveniently.

## Privacy by default
Collection records, owner photographs, purchase information, valuations, provenance, storage information, and private notes are private by default.

## Authentication
A future hosted version should require appropriate authentication before exposing private collection data. Authentication credentials must never be stored in collection records or application source files.

## Least privilege
External services should receive only the information required for the feature the owner has intentionally enabled. Unnecessary collection data should not be transmitted.

## Public hosting
A public website address does not by itself make the collection public. The application must keep private data behind its intended access controls.

## Sharing
Sharing should be an explicit owner action with a preview of the information and media being shared.

## Session and device safety
The future application should provide sensible protections against accidental exposure on shared devices, including clear sign-out behavior where authentication is used.

## Sensitive fields
Storage locations, personal contact information, transaction details, private notes, and other sensitive fields should be treated as restricted information and excluded from public views unless explicitly selected.

## Future-proofing
Access-control decisions should remain independent of the catalog schema so privacy protections can evolve without rewriting collection records.
