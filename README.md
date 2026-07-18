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
- Deployment binding: `.openai/hosting.json`

`docs/PRODUCT-UPDATE-RUNBOOK.md` also defines the central media registry,
same-version capture policy, automated image budgets, and the deferred
interactive-hero contract.

The launch site intentionally has no live inference endpoint. Its interactive
demo uses a verified output from the currently installed v3-final Q8 evidence
model; replacement models remain labeled as evaluation-only until installed and
measured.
