# Handoff: SottoKey website copy revamp

For: Kimi K3
Written: 2026-07-18
Repo: `/code/projects/sottokey-web` (Next.js-style "vinext" app)

You are rewriting the marketing copy of a product website. You have full
editorial authority over voice, structure, and wording. You do **not** have
authority to change the factual claims — those are fixed by what the Android app
actually does, and are enumerated below.

Read `docs/LAUNCH-CAMPAIGN.md` for the full campaign reasoning. This document is
the operational brief.

---

## 1. The product, factually

**SottoKey** is a paid Android keyboard (IME) with on-device AI text rewriting.

| Fact | Status |
|---|---|
| Requests **no** `android.permission.INTERNET` | True in production manifest — the core claim |
| Rewrites grammar/tone via a local model | True; model is 300MB–1GB on device |
| Works in airplane mode | True, follows from the above |
| No account, no analytics, no crash SDK, no ads | True |
| Every edit shown as a diff, user approves before replacement | True |
| Rewriting quality is English-focused | True — do not imply full multilingual parity |
| Price | $3.99 one-time intended. **Do not put a price on the website.** |
| Google Play listing | **Not yet public.** A disabled placeholder CTA exists |
| Open source | **No.** Closed source. See §4 — this is a hard prohibition area |

Minimum Android version is 8.0 (minSdk 26). Device performance varies with the
model size; do not promise specific latency numbers.

---

## 2. The message architecture (do not reorder without reason)

The single most important structural decision: **the provocative hook goes at
the top; the technical explanation is the payoff further down.** Lead with the
thing that makes someone want to hear the proof, not the proof itself.

| Page position | Job |
|---|---|
| Hero | Stop the scroll — business-model provocation |
| Hero lede | Make it concrete — no ads/account/analytics/permission |
| Proof rail | Substantiate fast |
| Demo | Show a real rewrite and the approval flow |
| Privacy section | Explain the mechanism — the missing permission |
| Features | De-risk the switch — it's a complete keyboard |
| Close | Convert — Google Play CTA |

### Current hero (approved, keep the strategy even if you rewrite the words)

> **A KEYBOARD HAS NO BUSINESS BEING ONLINE**
>
> # If you're not paying, you're the product.
> # We'd rather just charge you.
>
> No ads. No account. No analytics. No internet permission at all—so there is
> nothing to opt out of and nothing to take on trust. SottoKey fixes grammar
> and tone on your phone, in airplane mode.

The construction: two lines of premise the audience already believes, then a
turn that is a claim about *us*. Primary CTA goes to `/proof` — the pitch is
"check it yourself," so the button must let them.

**Open problem you may solve:** this is five lines of display type. It pushes
CTAs to the fold on desktop and scrolls long on mobile. A tighter alternative is
demoting the premise to a kicker and promoting the turn to H1. Your call.

---

## 3. Voice

Bold, confident, plain. Short sentences. The product is opinionated and says so.

- **Do** make categorical, normative statements ("A keyboard has no business
  being online").
- **Do** use the missing permission as a rhetorical weapon — it is unusually
  strong because a user can verify it in thirty seconds, unlike privacy claims
  that rest on audits or promises.
- **Do** treat the model's size as evidence, not an apology. 800MB on the phone
  is *why* it works offline.
- **Don't** write like a compliance document. Hedging every sentence is the
  failure mode this rewrite is correcting.
- **Don't** explain the website's own process — how a demo was captured, what
  phone a screenshot came from, methodology notes. Users assume the demo
  represents reality. That space belongs to the pitch.
- **No emoji.** No exclamation marks.

---

## 4. Hard claim boundaries — these are not stylistic

These come from verified research into how privacy products get destroyed. The
pattern is consistent: **enumerated facts about your own product survive
scrutiny; claims about competitors' behavior and claims about motive do not.**

### Never do these

1. **Never name a competitor or characterize their behavior.** No "unlike
   Gboard," no "other keyboards upload everything you type." A privacy keyboard
   discussion where implied comparative claims appeared got the top comment
   calling them "complete lies," with citations rebutting them. Permission-level
   claims about our own app are the only claims that survived.

2. **Never claim or imply open source.** SottoKey is closed source. The clearest
   available lesson in this category: a competitor was punished hard and
   publicly for a *labeling* claim about open source — not for being closed
   source. Being closed is survivable; misrepresenting it is not.

3. **Never say Google verified our privacy.** The Play Data safety section is
   self-declared and not pre-audited. "A declaration on our Play listing" is
   accurate. "Google verified" is false.

4. **Never claim SottoKey prevents the app you're typing in from receiving your
   text.** Android's `InputConnection` means a keyboard necessarily exchanges
   text with the host app. Our claim is that *SottoKey* has no network path —
   not that we control what the host app does. This distinction is load-bearing.

5. **Never put a price on the website.** Not $3.99, not any figure.

6. **Never fabricate a Google Play URL** or imply the listing is live. The CTA
   stays a disabled placeholder until a real URL exists.

7. **Never attribute motive to any company.** Every motive-attribution claim
   tested in research failed verification; every enumerated-fact claim passed.

### The one safe comparative move

You may point at *public disclosures companies wrote about themselves*:

> Every keyboard you've used collects something. Check any of their Data safety
> sections. Then check ours.

This is not a characterization — it points at pages those companies published.
It is the only competitor-adjacent construction approved for use.

### Scope discipline on the strongest claim

The permission claim is only true at the **merged manifest** level, and that has
not yet been verified against a release build. Write the copy as if it is true
(it is, in the source manifest), but do not invent supporting detail — no
"independently audited," no "verified by," no certification language.

---

## 5. Scope of work

All routes are in play: `/`, `/demo`, `/features`, `/privacy`, `/proof`,
`/download`, `/support`, `/changelog`, `/press`, `/legal/terms`,
`/legal/licenses`.

Copy lives primarily in:

- `src/data/site.ts` — centralized content: feature groups, FAQ, product
  status, media references. **Most copy edits belong here.**
- `src/app/*/page.tsx` — per-route page structure and headings
- `src/components/` — `ClosingCta.tsx`, `GuidedDemo.tsx`, `ProofRail.tsx`,
  `PrivacyPath.tsx`, `GooglePlayCta.tsx`

**Do not change the visual design.** Layout, spacing, color, typography, and
component structure stay as they are. This is a copy and messaging pass. If a
copy change requires a structural change, make the minimum one and say so.

### Known open issues (not your scope unless you want them)

- Some device-frame images on `/features` lazy-load slowly and can appear blank
  in fast screenshot captures. A `priority`/`eager` fix is applied in
  `src/components/DeviceFrame.tsx` and `src/app/features/page.tsx` but is
  uncommitted and unverified end-to-end.

---

## 6. Quality gates

The repo has automated guards. Run before declaring done:

```bash
npm run lint
npm run typecheck
npm test          # Playwright; includes claim guards
```

`tests/visual.spec.ts` contains regression gates that assert no price appears,
no live Play URL is present, and certain privacy wordings are preserved. If your
copy trips one, the test is probably right — reconsider the copy before changing
the test.

Do **not** commit, push, or deploy. Leave changes in the working tree.

---

## 7. What "good" looks like

A reader who lands on the homepage should, within five seconds, understand that
this keyboard cannot send their writing anywhere and that they pay for it
*because* of that. Within thirty seconds they should know it also works as an
ordinary keyboard and rewrites text well.

The current copy is accurate but reads like it was written by someone worried
about being sued. Fix that without making a single claim that isn't true.
