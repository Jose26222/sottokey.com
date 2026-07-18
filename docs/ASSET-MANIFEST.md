# Asset manifest

Reviewed: 2026-07-18

## Retired generated studio assets

The website no longer renders generated phone or privacy scenes. Product
screens are real device captures inside CSS-only hardware; the privacy diagram
is HTML/CSS with a real screen. This removes generated lettering, invented UI,
and fake phone geometry from the public pages. The untracked v2 derivatives
were deleted before release; their generation provenance remains recorded here.

Mode: built-in OpenAI image generation tool.

### `public/studio/hero-instrument-v2.png` and `.webp`

Source:
`/home/projecthq/.codex2-home/.codex/generated_images/019f72f1-9e49-74f3-9dd5-f4e9824be767/call_5hr0OKhadkq8WenMVZO9YlxH.png`

Edit prompt:

> Refine the original hero into a cleaner flagship product render. Preserve
> the wide graphite composition, phone placement on the right, and negative
> space on the left. Remove the loose paper and keycap, add one restrained
> glass proofreading panel with abstract red and blue-green marks, resolve the
> phone materials and navy screen, and avoid readable text, logos, UI, neon,
> people, and watermarks.

Former role: homepage hero and social/press image. Retired 2026-07-18.

### `public/studio/privacy-cutaway-v2.png` and `.webp`

Source:
`/home/projecthq/.codex2-home/.codex/generated_images/019f72f1-9e49-74f3-9dd5-f4e9824be767/call_b20auEKlDMtD82ddp3HOtGHG.png`

Edit prompt:

> Refine the original cutaway into five clean floating layers: sentence,
> keyboard, sealed local model, complete phone, and a distant disconnected
> network node. Link only the local layers with restrained blue light. Remove
> the literal cable, socket, exposed phone parts, labels, readable text, logos,
> and cyberpunk styling.

Former role: homepage privacy cinema and privacy page. Retired 2026-07-18.

### `public/studio/hero-instrument.png` and `.webp`

Source:
`/home/projecthq/.codex2-home/.codex/generated_images/019f72f1-9e49-74f3-9dd5-f4e9824be767/call_hnvUlyyKngkrKpflH7xhurNv.png`

Prompt:

> KeyShot-quality wide product render of an unbranded graphite Android phone
> with a blank matte screen, a sculpted three-dot keycap, and an abstract
> proofreader paper strip. Carbon studio, restrained blue rim light, negative
> space for copy, no logos, no text, no AI symbols, no branded hardware.

Former role: homepage hero and social/press image. Retired 2026-07-18.

### `public/studio/keycap-macro.png` and `.webp`

Source:
`/home/projecthq/.codex2-home/.codex/generated_images/019f72f1-9e49-74f3-9dd5-f4e9824be767/call_wjzcg9FedJBhe32aY15izQwg.png`

Prompt:

> Extreme macro KeyShot-quality graphite PBT keycap with a recessed three-dot
> mark, dark anodized keyboard deck, one blue gutter, and tiny abstract
> insertion/deletion marks. Luxury industrial lighting, no letters, logos,
> people, AI symbols, neon, or RGB gaming styling.

Role: design-system and feature pages.

### `public/studio/privacy-cutaway.png` and `.webp`

Source:
`/home/projecthq/.codex2-home/.codex/generated_images/019f72f1-9e49-74f3-9dd5-f4e9824be767/call_f7Sy0lXZT7sRppqvgFfdUcdV.png`

Prompt:

> Panoramic physically rendered exploded view: paper sentence, graphite
> keyboard, sealed three-dot computation module, generic phone, and a visibly
> disconnected network plug. Carbon editorial studio, realistic materials, no
> labels, cloud icon, shield, lock, neural network, people, or branded phone.

Former role: homepage privacy cinema and privacy page. Retired 2026-07-18.

## Current Android captures

Current public assets are 1080×2340 WebP derivatives with metadata stripped.
They preserve the full screen and are never independently rescaled, recolored,
or reconstructed. Raw live-device captures remain outside this repository.

### Live correction sequence

Captured 2026-07-18 from the connected Redmi K20 Pro:

- Package: `com.sottokey.keyboard`
- App: `0.4.0` (`versionCode 7`)
- APK SHA-256:
  `3413a12cc66f85ddb131adebe76cf9f6135e225b3d6634c8e93e5673eeaddc3c`
- Installed model shown by the app:
  `SottoKey v3 Final — 3.0.1 (Q8_0)`
- Public test input: `teh meeting got moved to 3pm`
- Captured output: `The meeting got moved to 3pm.`
- Device actions: existing app launch, temporary portrait lock, one explicit
  FIX request, accept, exact rotation restore, prior foreground restore.

| Website path | Raw capture SHA-256 | WebP SHA-256 | State |
|---|---|---|---|
| `public/product/live-rewrite-idle.webp` | `02234b2a823a51b4d9e0be5ac56537c3656968ffbd4be92ce9b8607424f9e0d5` | `d72ec405b2f9d481742103918d7cb131b683c244c1f2c77ec379265989942272` | Three-mode panel |
| `public/product/live-rewrite-diff.webp` | `0a6d972f05864b638e98be88bab1e72c889e88f635f841102739ef342cc936bc` | `811e857d4a494b85dc8263c48e7f66b1e645cba669fbbd69f72eb4f53b738b1f` | Real FIX diff |

### Current 0.4.0 product surfaces

Captured 2026-07-18 from an unsaved Android Contacts editor using only public,
synthetic content. The contact was not saved. Rotation and the prior foreground
app were restored after capture.

| Website path | Raw capture SHA-256 | WebP SHA-256 | State |
|---|---|---|---|
| `public/product/host-keyboard-current.webp` | `9ee8c5ede1d556e6dc1d4969f80c347a232a8dd50df1f418a9c00584e0e9623d` | `95f74b896e494be875ba23f3c945cac82f8870a32a05dd5db91bb9b9484bebd3` | Keyboard in host app |
| `public/product/host-text-editing-current.webp` | `a8d6b783537fc0f2a48c52d0aacbca4af15708dd91a28a2a53ecf56184f0aab3` | `642c1d58c2c1ecad2430ff8649600a7c9c4587193440155ebdbb2b0666b25a5a` | Text editing controls |
| `public/product/host-tools-current.webp` | `b319e07d90796201ed749bcac1b88391420253d6254a7db32dec56133252d87c` | `40da3d667b8d0793036e704ed11a9cadd1e1ae8b088a4b180c719c0e947a568d` | Expanded toolbar |
| `public/product/host-emoji-current.webp` | `6c500a7152a3c2d4971209b6d7ddd5d24a13ebbcb34c8c5823aeb469f9210df2` | `8e6c70bb854759983b85616070262f2e3a18d61f073431a33a06185fbaf315b7` | Local emoji panel |

Legacy screenshots remain for provenance but are no longer referenced by the
site. Product imagery must never combine a newer app UI with output or
benchmarks from an unshipped model.
