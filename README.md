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
- Deployment binding: `.openai/hosting.json`

The launch site intentionally has no live inference endpoint. Its interactive
demo uses verified outputs from the current v3-final Q8 model.
