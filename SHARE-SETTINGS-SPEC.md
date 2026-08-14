# Share Settings Specification

The owner should have one clear Share Settings area controlling what a read-only viewer can see.

## Global share controls
- Sharing: ON/OFF
- Require share access code: ON/OFF
- Show photos: ON/OFF
- Show values: ON/OFF
- Show notes: ON/OFF
- Show personal information: OFF by default

## Record-level control
Each record can independently be Private or Shared. A record marked Private must never appear in the read-only presentation even when global sharing is enabled.

## Security
These controls are presentation/product requirements only until authenticated sharing is implemented. Production privacy must be enforced by the server/data layer; hiding fields in browser code is not sufficient protection.

## Reversibility
Changing a share setting affects only the shared presentation. It must not alter or delete the owner's stored collection records.
