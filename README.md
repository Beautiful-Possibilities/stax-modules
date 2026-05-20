# stax-modules

Module mono-repo for [Stax](https://github.com/) — a self-hosted, modular admin template for solo entrepreneurs.

Modules in this repo are **code-copy installable** via the Stax CLI: `npx stax add <module>`. The CLI fetches files directly from GitHub raw URLs and copies them into the customer's repo.

## Available modules

| Module | Tier | Status |
|---|---|---|
| `_test-stub` | free | Phase 1 — test scaffold for the CLI |

## Module structure

Each module lives at `modules/<name>/` and contains:

- `manifest.ts` — declares routes, migrations, nav, deps, tier
- `README.md` — usage + customization guide
- `routes/` — Next.js App Router routes (copied into `/app/<name>/`)
- `components/` — React components (copied into `/components/<name>/`)
- `lib/` — server/client utilities (copied into `/lib/<name>/`)
- `migrations/` — Supabase SQL migrations (copied into `/supabase/migrations/`)
- `api.ts` — public API for other modules to import

See the Stax docs for the full module SDK contract.
