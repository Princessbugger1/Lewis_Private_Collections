# Sharing & Privacy Model

## Owner mode
The owner has full catalog editing rights and can choose what is published.

## Read-only share mode
A shared view is a separate presentation of approved collection data. It must not expose the owner's editing controls, private fields, license credentials, or administrative settings.

## Default privacy
Personal information, purchase details, private notes, values, and other sensitive fields should be excluded from a shared view unless the owner explicitly enables each category of information.

## Revocation
The owner must be able to disable a share without deleting the underlying collection. Share credentials should be revocable and replaceable.

## No implicit publishing
Adding a coin to the owner's catalog must never automatically publish that coin to a share. Publishing should be an explicit owner action or an explicit sharing rule selected by the owner.

## Future implementation
The production implementation should enforce these rules server-side where authentication, licensing, and shared data are involved. Client-side hiding alone is not a sufficient security boundary for private data.
