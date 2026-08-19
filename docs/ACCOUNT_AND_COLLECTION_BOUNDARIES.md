# Account and Collection Boundaries

## Requirement
The catalog must keep each customer's data completely separate, while still allowing one account to own multiple collections if that feature is enabled.

## Boundary model
**Account → Collection → Records → Media**

Archive and Trash belong to the same collection boundary as the records they contain. They are not shared global areas.

## Collection switching
If multiple collections are supported, switching collections must change the active data scope explicitly. Search, counts, archive, Trash, exports, and reports must all respect the selected collection.

## Security
Authorization must be enforced server-side for every cloud read/write operation. Client-side filtering is not sufficient protection.

## Local data
Local caches and offline records should carry stable account/collection identifiers so that data from one signed-in account cannot be accidentally displayed under another account.

## Shared-device behavior
On a shared phone or computer, signing out must prevent the next account from seeing the previous account's cloud data. Sensitive cached data should be cleared or protected according to the final offline-storage design.

## Release requirement
No cloud/multi-user release is complete until account and collection boundaries are tested across active records, Archive, Trash, photos, backups, search, sync, and exports.
