# SottoKey launch campaign

Drafted: 2026-07-18
Status: plan — not executed, not approved

Evidence basis: two research passes (positioning + Play/ASO). Claims below are
marked **[E]** where grounded in verified primary sources and **[J]** where they
are judgment with thin or no evidence behind them. Do not let the confidence of
the [E] sections bleed into the [J] sections.

---

## 1. The one fact everything rests on

SottoKey's app declares no `android.permission.INTERNET`.

This is stronger than any privacy claim Signal or Mullvad makes, because a user
verifies it themselves in thirty seconds — theirs require trusting court
filings or third-party audits. **[E]**

Every piece of copy below is downstream of this. If the fact stops being true
at the *merged manifest* level, the entire campaign becomes a lie. See §9.

**Claim hierarchy — use in this order:**

1. **The permission** — structural, user-verifiable, unattackable. Lead with it.
2. **The Data safety declaration** — "No data collected," rendered by Google
   rather than asserted by us. Corroboration, not proof. **[E]**
3. **The model on device** — 300MB–1GB of it. Size is evidence, not a drawback.
4. **Everything else** — features, tone, quality. Conventional marketing.

---

## 2. The category claim (no competitor named)

The safe, bold, category-level assertion — this is the "default is they record
your stuff" line, made defensible:

> **Every keyboard you've used collects something. Check any of their Data
> safety sections. Then check ours.**

Why this survives: it is not a characterization of anyone's practices. It points
at disclosures those companies wrote themselves and published on Google's store.
Verified live: one major keyboard declares Audio + App activity + 2 more;
another declares Location + Personal info + 4 more. **[E]**

Normative variant, precedented in this exact niche — FUTO's live headline is
"Your keyboard shouldn't connect to the internet," categorical and unhedged, and
has not been destroyed for it: **[E]**

> **A keyboard has no business being online.**

### The line NOT to cross

Do **not** write "every other keyboard sees everything you type," "they sell
your keystrokes," or any variant. Direct evidence: in a Thumb-Key discussion the
top comment called implied privacy claims "complete lies" and others rebutted
with federated-learning citations. The only claims that survived unchallenged
were concrete and permission-level. **[E]**

**Rule: permission-level claims about our own app; never behavioral claims about
theirs.**

---

## 3. Business model as message

The framing, as a statement about ourselves rather than an accusation:

> **If you're not paying, you're the product. We'd rather just charge you.**

Precedent: FUTO's published licensing principles contain the literal line
"Reject 'the customer is the product' as a business model." FUTO has been
attacked hard and publicly — every critic went after its *licensing* language,
none went after this stance. The framing draws no fire. **[E]**

**The architectural argument, which is the strongest version of this:**

Free requires a network path — ads, license validation, IAP verification. We
cannot be free and keep the manifest clean. The price is not a barrier attached
to the product; it is the mechanism that makes the proof possible.

> Free keyboards need a connection. This one can't have one.
> That's why it costs money.

**Blocked on §9.1** — if Play Billing works without in-process INTERNET, this
argument weakens and free+unlock becomes viable.

---

## 4. Message architecture — hook first, proof second

**The decision:** the provocative business-model line is the hook and goes at
the very top of the homepage. The permission explanation is the *payoff*, and
lives in the privacy section below. Do not lead with the technical fact —
lead with the thing that makes someone want to hear the technical fact.

This mirrors the pattern verified in the category: bold categorical headline on
top of conventional feature copy, not aggression throughout. **[E]**

| Position | Job | Content |
|---|---|---|
| Hero | Stop the scroll | Business-model provocation |
| Hero lede | Make it concrete | No ads / account / analytics / permission |
| Proof rail | Substantiate fast | The permission, the Data safety declaration |
| Demo | Show the product | Real rewrite, approval flow |
| Privacy section | Explain the mechanism | Manifest, what the permission removes |
| Features | De-risk the switch | It's a complete keyboard |
| Close | Convert | Play CTA |

### Hero — live as of 2026-07-18

> **A KEYBOARD HAS NO BUSINESS BEING ONLINE**
>
> # If you're not paying, you're the product.
> # We'd rather just charge you.
>
> No ads. No account. No analytics. No internet permission at all—so there is
> nothing to opt out of and nothing to take on trust. SottoKey fixes grammar
> and tone on your phone, in airplane mode.
>
> `Check the permission →` `See SottoKey work`

Why this construction works: the first two lines are a premise the audience
already holds, so they cost nothing to establish. The third line is the only
claim being made, and it is about *us*, not a competitor. Primary CTA points at
`/proof` — if the pitch is "check it yourself," the button must let them.

**Known issue:** five lines of display type pushes the CTAs to the fold on
desktop and creates a tall scroll on mobile. Alternative construction if
tightening is wanted — demote the setup to a kicker, promote the turn to H1:

> **IF YOU'RE NOT PAYING, YOU'RE THE PRODUCT**
> # We'd rather just charge you.

### Alternate hooks (same job, different angle)

> **Nothing to opt out of.**

> **A keyboard has no business being online.**

> **Free keyboards need a connection. This one can't have one.**

> **The AI is on your phone. All 800 megabytes of it.**

### Payoff lines (privacy section, not hero)

> **SottoKey cannot send your writing anywhere.**
> Not a promise. A missing permission. Check it yourself.

> **The keyboard is already in the conversation. It should have nowhere else to go.**

### Closing / CTA

> **Your keyboard sees enough. It doesn't need a network.**

---

## 5. Play Store listing kit

### Title (30 char limit)

Target term is `private keyboard` — SERP truncates at 10 results and the only
exact-match titleholder is a 1K-install, 2.9★ app. `AI keyboard` is saturated
(SwiftKey, CleverType, ai.type, Bobble all title-matching) — do not spend title
characters there. **[E]**

1. `SottoKey: Private Keyboard` — 26
2. `SottoKey Private Keyboard` — 25
3. `SottoKey: Offline Keyboard` — 26

Recommend #1. Put AI and offline in the short description where they do
conversion work instead of losing a keyword fight.

### Short description (80 char limit)

1. `Offline AI rewriting. No internet permission. Nothing to opt out of.` — 67
2. `On-device AI rewriting. No internet permission. Your words stay yours.` — 69
3. `The keyboard with no internet permission. Offline AI rewriting.` — 62

### Long description opener

Note: long description carries real ranking weight on low-competition terms —
FUTO ranks #1 for "privacy keyboard", "private keyboard" and "open source
keyboard" with none of those words in its title. **[E]**

> **SottoKey does not have permission to access the internet.**
>
> Not "we promise not to send your keystrokes." The app cannot open a network
> connection at all. Check the permission list yourself. Then check the Data
> safety section on this page — no data collected. That's Google's disclosure,
> not our marketing.
>
> And it still rewrites your writing. Shorter. Clearer. Professional. Fix the
> tone of an email you shouldn't send angry. The model lives on your device and
> works in airplane mode.

### Metadata hygiene

- **Do not keyword-stuff.** Google frames repetition as a *policy violation*,
  not a ranking penalty. The "repeat 3–5 times / 2–3% density" advice is
  folklore with no experiment behind it. **[E]**
- **Fill all 5 tags accurately** — expect browse-surfacing help, not keyword
  lift. Google never claims tags affect search ranking. **[E]**
- **Website and listing must tell an identical story** — Play's "Ask Play"
  Gemini layer draws from both, and AI content occupies the first 2–3 screens
  of results. **[E]**
- **No analytics or crash SDK.** Any bundled SDK's collection is our
  responsibility to declare and would forfeit the "No data collected"
  declaration. **[E]**

### Screenshot plan **[J]**

First two screenshots are what most users see before scrolling. Annotated
captions, not raw captures.

1. **The permission list** — actual Android app-info screen showing no internet
   permission. Caption: "This is the whole pitch."
2. **A real rewrite, before/after** — angry email → professional. Caption:
   "Rewritten on your phone."
3. **Airplane mode on, rewrite working.** Caption: "No connection. Still works."
4. **The diff/approval view.** Caption: "Nothing changes until you say so."
5. **Ordinary keyboard doing ordinary keyboard things.** Caption: "And it's a
   complete keyboard."

---

## 6. Launch sequence **[J — no verified evidence survived on channel mechanics]**

The research explicitly failed to ground Reddit rules, post formats, timing, or
expected numbers. Everything in this section is judgment. Treat as a hypothesis.

**The one thing that is evidence-backed:** distribution and influencer reach
dominated every observable outcome in this category, not ASO. FUTO's 346-point
HN thread was driven by a Louis Rossmann video. **Play is supplementary to
whatever external channel exists.** **[E]**

Implication: the launch is a *press and community* problem, not a store problem.

**Phase 0 — before anything is public**
- Settle §9 blockers. Do not publish a claim that isn't true in the artifact.
- Decide the source-availability question (§8).
- Have the APK ready to hand someone who asks.

**Phase 1 — the artifact, not the announcement**
- Write one technical post: "why my keyboard ships with no INTERNET
  permission," with the manifest, the merged-manifest output, and how to verify
  it yourself. Prior art exists for exactly this post shape. **[E]**
- This is the thing that gets linked. The store listing is where people land
  after, not the thing that spreads.

**Phase 2 — creators, one at a time, no blast**
- Privacy-adjacent Android creators and newsletters. Pitch the *verifiable
  fact*, not the product — "you can check this claim in thirty seconds" is the
  hook a skeptical reviewer wants.
- Specific outlets were NOT verified by the research. Build the list manually.

**Phase 3 — communities, after there's something to point at**
- Rules and tolerances were NOT verified. Read each community's current rules
  yourself before posting. Assume hostility to closed-source paid privacy
  claims until proven otherwise.
- Post the technical artifact, not a launch announcement.

**Phase 4 — Play as the destination**
- Treat the launch title as a 30-day hypothesis. Read Play Console →
  Acquisition → search terms for real data. **[E]**
- Do not buy an ASO tool: Google publishes no search volume, and post-Oct-2025
  all low-volume keywords collapse to a floor value in vendor tools. **[E]**

---

## 7. What NOT to do

- **Never claim or imply open source** unless it is literally true under the
  OSI definition. This is the single clearest lesson available: FUTO was
  punished for a *labeling* claim, not for being closed-source. It tried to
  publish its own competing definition of "open source" (2024-06-04), took
  sustained public criticism, and retreated to the coined term "Source First"
  by 2024-06-15. **[E]**
- **Never say Google verified our privacy.** Data safety is self-declared and
  not pre-audited. "Formal Google-facing declaration" is accurate; "Google
  verified" is false. **[E]**
- **No comparative behavioral claims** about competitors (§2).
- **No motive attribution.** In the research, every claim that attributed
  motive to a company failed verification, while enumerated-fact claims passed.
  The pattern is consistent. **[E]**
- **Do not cite FUTO's pricing as precedent.** It is free-to-download with an
  optional one-time license, not paid-upfront. The positioning transfers; the
  monetization does not. **[E]**
- **Do not ship the full emoji set without checking content rating.** Google
  forced Fleksy from PEGI 3 to 12 over the middle-finger emoji while Gboard
  shipped the identical emoji at PEGI 3. **[E]**
- **Never substitute `AccessibilityService` for `InputMethodService`.** Known
  termination trigger. **[E]**

---

## 8. The source-availability question — unresolved

The research could not ground actual community outcomes for closed-source paid
privacy apps. What it did establish:

- The FUTO episode suggests the community punishes *misrepresentation*, not the
  closed posture itself. **[E]**
- PrivacyTools' Android keyboard list contains only open-source keyboards. A
  closed-source app does not qualify for that directory as currently framed.
  **[E]**
- `open source keyboard` is a SERP with **zero** apps holding it in a title —
  free positioning, but only if genuinely FOSS. **[E]**

This is a product decision with marketing consequences, not a marketing
decision. Source-available (publish the code, restrict commercial use) would
open the directories and defuse the loudest objection, at the cost of the
license fight FUTO walked into. Decide deliberately.

---

## 9. Blockers — resolve before any copy ships

**9.1 Does Play Billing require `INTERNET` in our own process?**
Decides paid-upfront vs free+unlock, and therefore §3. If billing routes through
the Play Store app via IPC, free+unlock is viable and the ASO lane's revenue
argument ($5.99–6.99 unlock) deserves weight. If not, paid-upfront is forced by
architecture. **Unverified.**

**9.2 Is the merged manifest actually clean?**
Source manifest means nothing — Play Core, Billing, or asset-delivery libraries
can inject `INTERNET` at merge time, and the merged manifest is what ships and
what users inspect.

```bash
cd /code/projects/keyboard-polish-android
export ANDROID_HOME=/code/tools/android-toolchain/android-sdk
./gradlew assembleRelease
$ANDROID_HOME/cmdline-tools/latest/bin/apkanalyzer manifest permissions \
  app/build/outputs/apk/release/app-release.apk
# If INTERNET appears, find the source:
cat app/build/outputs/logs/manifest-merger-release-report.txt
```

**9.3 Any network-touching surface outside the IME?**
Licensing check, update mechanism, companion app, crash reporting. The absolute
must be literally true at the manifest level — this is precisely where FUTO's
own "no data transmitted ever" claim is soft. Ours must not be.

**9.4 Model delivery shape.**
At 300MB–1GB, install-time asset packs keep the story simplest: the model
arrives with the install, nothing downloads afterward. Play size ceilings for
AAB + asset packs are **unverified** and may constrain model choice.

**9.5 GenAI app policy** as applied to on-device AI rewriting. Unverified;
one targeted check before submission. Note there is **no** keyboard-specific
Play policy — blogs claiming otherwise are unsourced. **[E]**
