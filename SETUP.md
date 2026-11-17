# burger: Secrets and Setup

No database password lives in this repo. `config/connection.js` reads it from environment variables.

| Variable | Purpose | Where it goes |
|---|---|---|
| `JAWSDB_URL` | Full MySQL connection string in production | Heroku > Settings > Config Vars (set automatically by the JawsDB add-on) |
| `DB_HOST` | Local MySQL host (default `localhost`) | Shell env or `.env` |
| `DB_USER` | Local MySQL user (default `root`) | Shell env or `.env` |
| `DB_PASSWORD` | Local MySQL password | Shell env or `.env` (gitignored) |
| `DB_NAME` | Local database (default `burgerDB`) | Shell env or `.env` |

## Local run

```bash
npm install
export DB_PASSWORD='your-local-mysql-password'   # PowerShell: $env:DB_PASSWORD='...'
mysql -u root -p < db/schema.sql
node server.js
```

## Rotation log

| Date | Secret | Action |
|---|---|---|
| 2026-11-16 | Local MySQL root password (`M@l...`) | Removed from code. It remains in git history, so treat it as public. **Change it anywhere it or a variation of it was reused.** |
