Postgres StatefulSet for EFP production.

Includes:
- Secret for credentials
- ConfigMap for init SQL (optional)
- StatefulSet with persistent volume claims
- Headless Service for stable network IDs

Notes:
- Adjust storage class and sizes per environment.
- Use separate schemas per service for clear boundaries.
