# Claim ledger

Reviewed: 2026-07-18

| Public claim | Source | Retest trigger |
|---|---|---|
| The Android release app requests no INTERNET permission | `app/src/main/AndroidManifest.xml`, release APK permission dump before publishing | Any manifest/dependency change |
| Rewriting runs on device | `README.md`, `ARCHITECTURE.md`, `MODEL_RUNTIME.md` | Runtime/backend change |
| No account, ads, analytics SDK, or remote logging | `PRIVACY.md`, dependency review | Dependency or telemetry change |
| Rewrite boundary is current sentence or explicit selection, capped at 2,000 characters | `PRIVACY.md`, editor/controller source | Contract change |
| Password-class fields disable intelligence | `PRIVACY.md`, sensitive-field and IME source | Field-classification change |
| Q8 model payload is approximately 379 MB | `PERFORMANCE.md` | Model/package change |
| Snapdragon 855 p50 total is 490 ms | `PERFORMANCE.md`, device report dated 2026-07-14 | Model/runtime/performance change |
| Snapdragon 855 p50 TTFT is 207 ms | `PERFORMANCE.md`, device report dated 2026-07-14 | Model/runtime/performance change |
| Snapdragon 855 generation is 28.3 tok/s mean | `PERFORMANCE.md`, device report dated 2026-07-14 | Model/runtime/performance change |
| Guided demo outputs are from v3-final Q8 | `/tmp/sottokey-web-v3-results.json`, model `kbp-lfm25-350m-v3-final-q8_0.gguf` | Model/prompt/demo change |

## Approved guided cases

The site uses these current-model outputs:

1. Fix: `b4` → `before` while retaining the surrounding slang.
2. Standard: removes duplicated structure and adds `of memory`.
3. Professional: restructures the report deadline sentence without changing
   `by 5`.
4. Casual: `I apologize…approximately` → `Sorry…about`.

Cases that produced unattractive or incomplete corrections were deliberately
excluded. The website does not imply that the fixed case set represents
arbitrary-text reliability.
