# App Test Cases

Use disposable/sample records before real collection entry. Run after each major catalog change.

## Record lifecycle
1. Add a sample Coin and reload: it remains.
2. Edit one field: unrelated fields remain unchanged.
3. Add a Token and a Counterfeit item: both remain searchable.
4. Hide Tokens: normal token view is hidden, but an explicit search for a token still finds it.
5. Delete a sample item: confirmation appears; cancel leaves it intact.
6. Confirm delete: item enters recovery/Trash flow where implemented.

## Classification and organization
1. Verify Coin, Token, Counterfeit, Commemorative, Paper Money/Banknote, Medal, Bullion, Exonumia, and Ancient are available.
2. Add a custom classification and edit its name.
3. Add a custom series and assign sample items.
4. Remove the series: member items remain.
5. Enter a country not previously listed: its group appears automatically.
6. Test a historical issuer: it remains distinct from a modern successor unless deliberately changed.

## Identification
1. Generate a sample identification suggestion.
2. Accept it and verify the field becomes confirmed.
3. Change it and verify the editor opens.
4. Reject it and verify the item itself is unchanged.
5. Use Needs Review/Unknown when confidence is insufficient.

## Three-state controls
For every applicable Yes/No field: Unknown -> Yes -> No -> Unknown. Verify Unknown and No are visually distinct and survive reload/backup.

## Photos
Attach sample obverse/face, reverse, and optional edge images. Reload and verify they remain associated with the same record.

## Privacy
Verify private location, acquisition cost, private notes, and storage details are excluded from any shareable/read-only projection unless explicitly marked shareable.

## Responsive controls
Test Phone, Desktop, and Automatic modes. Verify the mode switch is easy to find and return from. Verify action controls are medium-sized, readable, and comfortably tappable.

## Backup / restore
Create a backup, make a harmless test change, then restore using the preview/confirmation flow. Verify custom classifications, series, country/issuer, flags, and applicable item fields survive.

## Release gate
Do not enter valuable collection records until these tests pass against the deployed build and a fresh backup has been made.
