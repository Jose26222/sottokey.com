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

## Maintenance architecture

Keep updates inside these boundaries:

| Concern | Canonical file | Rule |
|---|---|---|
| App, model, release, and performance status | `src/data/product-status.ts` | Change facts here before changing copy |
| Google Play destination and availability | `productStatus.googlePlay` in `src/data/product-status.ts` | Keep `href` null until the verified public listing URL is supplied |
| Published device media and demo order | `productMedia`, `liveDemo`, and `productSurfaces` in `src/data/site.ts` | Components must not hard-code product image paths |
| Raw and derived media provenance | `docs/ASSET-MANIFEST.md` | Record raw and WebP hashes together |
| Phone presentation | `src/components/DeviceFrame.tsx` | Keep one hardware frame and the 1080:2340 screen contract |
| Visual language and responsive behavior | `src/app/globals.css` | Reuse existing tokens and component classes before adding variants |
| Automated release gates | `tests/visual.spec.ts` and `tests/accessibility.spec.ts` | Do not weaken a gate to make an update pass |

The intended maintenance order is facts → captures → media registry → copy →
tests → visual review → deployment. A page component should only compose these
sources; it should not become another source of product truth.

## Update scope

Choose the smallest complete update:

- **App UI only:** refresh every changed surface, app version, changelog, and
  screenshots. Keep installed-model metrics unchanged.
- **Model only:** refresh model identity, quality evidence, performance,
  correction sequence, proof, and limitations. Keep unrelated UI captures.
- **App and model together:** complete both checklists in one release. Never
  publish a mixed set that makes old output appear to come from a new model.
- **Copy only:** do not replace captures or metrics unless their evidence also
  changed.

The Google Play CTA is deliberately data-driven. While
`productStatus.googlePlay.href` is `null`, it renders as an unavailable
placeholder. Add only the final stakeholder-approved listing URL; do not use a
search result, package-name guess, Play Console draft URL, or temporary testing
track link. Publishing a price is a separate stakeholder approval and must not
be inferred from internal planning.

Stable semantic asset names such as `host-keyboard-current.webp` are deliberate.
Replace the file and its two hashes atomically, then update `productMedia` only
if the role, filename, or alt text changed. Do not scatter versioned filenames
through page components.

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

- Update `productMedia`, `liveDemo`, and `productSurfaces` in
  `src/data/site.ts`.
- Remove surfaces that do not have a current capture.
- Update paragraph/selection behavior, visible rewrite modes, feature status,
  and known limitations from source truth.
- Label metrics as installed-model evidence. Never transfer them to the next
  model without a new device benchmark.
- Search for stale claims:

```bash
rg -n "Standard|current model|current release|single-sentence|sentence or" src
```

- Confirm that no unapproved store price appears:

```bash
rg -n "\\$[0-9]|price|pricing" src
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

The automated media gate requires every published product screen to:

- load as WebP,
- preserve the exact 1080×2340 device dimensions,
- remain at or below 160 KB,
- stay reachable from the central `productMedia` registry.

Passing automation is necessary but not sufficient. Inspect the screenshots at
actual desktop and mobile viewport sizes for legibility, hierarchy, repetition,
and authentic Android geometry.

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

## Deferred interactive hero

The current static hero is the quality baseline. Build the interactive version
only after the app UI and rewrite contract are stable enough to capture a
coherent final sequence.

Implementation contract:

1. Reuse `productMedia` and `liveDemo`; do not create a second set of screens.
2. Model the experience as explicit states such as Write → Choose → Review →
   Accept. Publish only states supported by clean same-version captures.
3. Make controls real buttons with keyboard focus, pressed state, descriptive
   labels, and a usable no-JavaScript first frame.
4. Keep the default hero image eager and small; lazy-load or preload only the
   next state so interaction does not damage first paint.
5. Never reconstruct the keyboard in HTML, generate readable UI, or imply that
   arbitrary visitor text is processed.
6. Keep the static hero available as a rollback path and for reduced-motion
   users.
7. Re-run the complete quality, accessibility, mobile, and deployment gates.

The interactive hero is an enhancement, not permission to trade authenticity,
speed, readability, or maintainability for novelty.
