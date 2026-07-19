# SottoKey web

Complete product website for SottoKey, the private on-device Android keyboard.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
npm run check:vinext
npm run build
npm test
```

The Playwright suite checks every launch route at desktop and mobile widths,
tests the guided rewrite interaction, verifies the mobile navigation, detects
horizontal overflow, and produces visual-review captures in
`/tmp/sottokey-review`.

## Product evidence

- Android source and evidence:
  `/code/projects/keyboard-polish-android`
- Website claim ledger: `docs/CLAIM-LEDGER.md`
- Generated and captured media provenance: `docs/ASSET-MANIFEST.md`
- App/model/site synchronization: `docs/PRODUCT-UPDATE-RUNBOOK.md`
- Official competitive privacy research:
  `docs/COMPETITIVE-PRIVACY-RESEARCH.md`
- Cloudflare deployment configuration: `wrangler.jsonc`

`docs/PRODUCT-UPDATE-RUNBOOK.md` also defines the central media registry,
same-version capture policy, automated image budgets, and the deferred
interactive-hero contract.

The launch site intentionally has no live inference endpoint. Its interactive
demo uses a verified output from the currently installed v3-final Q8 evidence
model; replacement models remain labeled as evaluation-only until installed and
measured.

Google Play availability is also centralized in
`productStatus.googlePlay`. Leave its URL null until the stakeholder supplies
the verified public listing; the site will render an explicit unavailable
placeholder instead of inventing a destination.

## Production pipeline

The GitHub repository is connected to the `sottokey` Worker through
Cloudflare Workers Builds.

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Non-production deploy command:
  `npx wrangler versions upload --config dist/server/wrangler.json`

Every push to `main` deploys the active production version. Other branches
create preview versions without moving production traffic.
