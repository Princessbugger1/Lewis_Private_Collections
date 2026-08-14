# Share Audit Log Specification

For a commercial release, sharing and license-sensitive actions should have a lightweight audit trail.

## Events to consider
- Share enabled or disabled
- Share access code generated, replaced, or revoked
- A record changed from Private to Shared or Shared to Private
- Share field visibility changed
- Customer license activated, revoked, expired, or replaced

## Privacy rules
- Do not store passwords or raw secret access codes in an audit log.
- Store only the minimum metadata needed to explain an access/security event.
- Provide an owner/admin way to review relevant events where appropriate.
- Establish retention limits before commercial launch.

## Safety
An audit log is informational. It must never become a reason to block ordinary editing or delete collection data. Failed share operations should leave the underlying catalog unchanged.
