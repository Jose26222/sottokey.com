# Product update runbook

Use this process whenever the Android app, installed model, screenshots, or
performance evidence changes.

## Canonical locations

- Website checkout: `/code/projects/sottokey-web`
- Android app: `/code/projects/keyboard-polish-android`
- Model evaluation: `/code/projects/keyboard-polish-dataset`
- Phone controller: `/code/projects/repos/Android-Debug-Phone-Lab`
- Forgejo project: `http://10.0.0.43:3080/jose/SOTTOKEYWEB`
- LAN website: `http://10.0.0.43:3100`

## Version domains

Never collapse these into one “current version”:

1. **App UI** — Android `versionName` and `versionCode`.
2. **Installed model** — model name, package version, quant, hash, and quality
   gates represented by the screenshots and measurements.
3. **Next model** — evaluation-only until packaged, installed, and measured.
4. **Public availability** — private device build, closed track, or published.

The website source of truth is `src/data/product-status.ts`. Pages may format
those values, but must not duplicate their own version strings.

## Refresh procedure

### 1. Freeze source truth

- Read `IMPLEMENTATION_STATUS.md`, `KNOWN_LIMITATIONS.md`, and `PERFORMANCE.md`
  in the Android repo.
- Read `docs/LIVE-CODE-STATUS.md` and the selected evaluation evidence in the
  dataset repo.
- Record the app version, installed model identity, evidence date, known failed
  gates, release stage, and next-model state.
- Update `src/data/product-status.ts` before editing marketing copy.

### 2. Capture the connected phone

- Follow the phone lab `AGENTS.md` and USB workflow.
- Record package, app version, APK SHA-256, foreground baseline, rotation
  baseline, action, rollback, and evidence tier.
- Do not reinstall, clear data, change the selected keyboard, or alter the
  installed model merely to make the website look newer.
- Use only public test text.
- Capture full 1080×2340 screens for typed, mode-selection, diff, accepted, and
  any changed keyboard surfaces.
- Restore orientation and foreground state exactly.
- Keep raw device captures and UI dumps outside git.

### 3. Derive web assets

- Create metadata-stripped WebP derivatives from the raw captures.
- Preserve the complete 1080:2340 screen; do not crop status bars, stretch the
  keyboard, repaint text, or insert generated UI.
- Render every screen inside `DeviceFrame`; do not bake a fake phone into the
  bitmap.
- Record source and derivative hashes in `docs/ASSET-MANIFEST.md`.
- Never use image generation for readable product UI.

### 4. Sync product data

- Update `liveDemo` and `productSurfaces` in `src/data/site.ts`.
- Remove surfaces that do not have a current capture.
- Update paragraph/selection behavior, visible rewrite modes, feature status,
  and known limitations from source truth.
- Label metrics as installed-model evidence. Never transfer them to the next
  model without a new device benchmark.
- Search for stale claims:

```bash
rg -n "Standard|current model|current release|single-sentence|sentence or" src
```

### 5. Validate

```bash
npm run lint
npm run typecheck
npm audit --omit=dev
npm test
```

Review full-page desktop and mobile screenshots. Reject the update if a phone
is cropped, any screenshot text is clipped by website framing, the aspect ratio
changes, old UI remains visible, or app/model dates conflict.

### 6. Deploy

- Create a dry-run file/checksum manifest.
- Transfer to a new immutable Unraid release directory.
- Verify checksums and `docker compose config`.
- Build and smoke-test on a loopback-only port.
- Activate with rollback protection.
- Verify `/`, `/demo`, `/privacy`, `/proof`, and every new product asset over
  `http://10.0.0.43:3100`.

## Release gates

A model may be called current only after it has:

- a frozen model/package identity and SHA-256,
- an installed device capture,
- a device benchmark tied to that package,
- updated quality results and known failures,
- refreshed demo output and diff,
- synchronized proof, download, press, and changelog copy.

Until then, show it only as **in evaluation**.
