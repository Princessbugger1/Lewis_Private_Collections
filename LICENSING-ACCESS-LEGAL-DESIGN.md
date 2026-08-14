# Licensing, Access, Sharing & Legal Design Requirements

This catalog is intended to become a product that may be licensed or sold. These are design requirements, not legal advice.

## Separate access models
1. **Owner catalog:** full edit access to the owner's collection.
2. **Read-only collection share:** lets invited viewers browse only the information the owner chooses to publish. It must not expose the editable catalog or private fields.
3. **Customer license/activation:** authorizes a customer to use their own separate catalog. Customer data must remain separate from the owner's collection and other customers.

## License security
- Do not put master license secrets or authorization credentials in public source code.
- Prefer server-side validation for paid licenses/activation when a backend is added.
- Use revocable, high-entropy activation/share tokens rather than predictable IDs.
- Support license deactivation/revocation and, if appropriate, replacement of a compromised token.
- Do not promise that a link or software can never be copied or forwarded; design controls to limit unauthorized reuse instead.
- Avoid collecting more personal information than is necessary for licensing and account access.

## Sharing security
- Sharing must be explicitly enabled by the owner.
- Read-only means the viewer cannot create, edit, delete, or overwrite collection records.
- Private/personal fields must be excluded by default from shared views.
- Owner-controlled sharing settings should determine whether photos, values, notes, and other optional information are visible.
- A share can be revoked without deleting the owner's collection.

## Legal/product checklist before commercial release
- Terms of service / license agreement
- Privacy policy and data-retention rules
- Refund/cancellation policy as applicable
- Clear ownership and licensing language for app code and content
- Third-party provider terms and API/image-use permissions
- Security and breach-response plan
- Age/eligibility and jurisdiction requirements as applicable
- Tax/payment requirements and applicable consumer-protection requirements

These requirements should guide implementation. They do not replace review by a qualified attorney before commercial launch.
