# Claim ledger

Reviewed: 2026-07-18

| Public claim | Source | Retest trigger |
|---|---|---|
| The Android release app requests no INTERNET permission | `app/src/main/AndroidManifest.xml`, release APK permission dump before publishing | Any manifest/dependency change |
| Rewriting runs on device | `README.md`, `ARCHITECTURE.md`, `MODEL_RUNTIME.md` | Runtime/backend change |
| No account, ads, analytics SDK, or remote logging | `PRIVACY.md`, dependency review | Dependency or telemetry change |
| Rewriting targets an explicit selection or the current paragraph; long paragraphs use a visible sentence-boundary window within 2,000 characters | `PRIVACY.md`, editor/controller source | Contract change |
| Password-class fields disable intelligence | `PRIVACY.md`, sensitive-field and IME source | Field-classification change |
| Q8 model payload is approximately 379 MB | `PERFORMANCE.md` | Model/package change |
| Snapdragon 855 p50 total is 490 ms | `PERFORMANCE.md`, device report dated 2026-07-14 | Model/runtime/performance change |
| Snapdragon 855 p50 TTFT is 207 ms | `PERFORMANCE.md`, device report dated 2026-07-14 | Model/runtime/performance change |
| Snapdragon 855 generation is 28.3 tok/s mean | `PERFORMANCE.md`, device report dated 2026-07-14 | Model/runtime/performance change |
| Guided demo output is from the installed v3-final Q8 package | Connected-device capture dated 2026-07-18, package `com.sottokey.keyboard` 0.4.0, model shown as `SottoKey v3 Final — 3.0.1 (Q8_0)` | App/model/prompt/demo change |

## Approved guided cases

The site publishes one measured installed-model output:

1. Fix: `teh meeting got moved to 3pm` →
   `The meeting got moved to 3pm.`

The website does not imply that this single captured example represents
arbitrary-text reliability. Installed-model quality is shown separately as
6 of 8 hard gates passed, with known meaning-preservation and Spanish-identity
failures disclosed.
