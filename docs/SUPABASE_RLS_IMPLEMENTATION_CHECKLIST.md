# Supabase RLS Implementation Checklist

## Release-blocking requirement
Any cloud version that stores customer collections must enforce ownership at the database and object-storage layers, not only in the app UI.

## Database
- Enable Row Level Security on every customer-data table exposed to the application.
- Store an authenticated owner/account identifier on each collection and customer-owned record.
- Write policies for SELECT, INSERT, UPDATE, and DELETE as appropriate.
- Verify ownership server-side using the authenticated session identity.
- Ensure Archive and Trash use the same ownership boundary as the parent collection.
- Test that guessed or substituted IDs cannot bypass policies.

## Storage
- Namespace photo objects by account/collection identifiers.
- Apply storage policies so users can access only their own objects.
- Do not rely on obscurity of filenames or object paths for security.

## Testing
Use two test accounts and attempt cross-account reads, writes, deletes, exports, and photo access. Test both normal requests and direct identifier substitution.

## Deployment
Apply policies through versioned migrations. Review policies before production deployment and re-run the isolation test plan after schema or authentication changes.
