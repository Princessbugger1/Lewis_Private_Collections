# Cache Update Notes

The catalog uses a service worker for offline loading.

Next small live-code change: increment the service-worker cache version so updated catalog files are not trapped behind an older browser cache.

Safety rule: this is a separate checkpoint; do not alter the live catalog data while making cache changes.
