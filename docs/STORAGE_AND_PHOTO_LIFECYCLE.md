# Storage and Photo Lifecycle

## Goal
Keep large coin collections practical without requiring the app operator to permanently retain every original photograph.

## Data layers
Treat these separately:
- Coin record data: identification, dates, mint, grade, notes, values, and other structured information.
- Browse thumbnail: an optimized image used for fast collection views.
- Original photograph: the highest-quality user image, which may be stored locally or in user-controlled/cloud storage according to the plan and settings.

## Backup-first workflow
Before removing large local files, the app should verify that a usable backup or synchronized copy exists. Never describe a backup as complete when a required file is missing or corrupted.

## Storage cleanup
Provide an optional storage-management view showing:
- Approximate space used by originals.
- Approximate space used by thumbnails.
- Backup/sync status.
- Potential space that could be reclaimed.

Possible actions include keeping everything, removing backed-up originals, removing selected photos, or archiving older records. Destructive actions require clear confirmation.

## One-time purchase model
A local/self-storage edition can keep collection data and photographs under the customer's control, with export and backup tools. The product should not require the operator to retain the customer's collection in cloud storage merely for the customer to use the catalog.

## Subscription model
Cloud synchronization/storage can be offered as an ongoing service where appropriate. The user should still be encouraged to maintain an independent backup/export rather than treating the service as the only copy.

## Deletion safety
Removing a local original must not remove the catalog record or thumbnail unless the user explicitly chooses to remove those as well. If the cloud copy is the only remaining original, the UI should say so before any action that could remove it.

## Performance
Avoid loading original-resolution photos into collection lists. Generate/use thumbnails for normal browsing and fetch originals only when needed.

## Privacy
Storage choices and photo lifecycle behavior must be clearly explained in the final privacy policy and product terms. The app should not upload originals merely because a user is browsing the catalog unless the user has enabled a service that requires it.
