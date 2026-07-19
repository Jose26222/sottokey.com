# Sotto Labs / SottoKey Brand System

SottoKey is a product of Sotto Labs and uses the Sotto Labs master brand first.
The product keycap remains a secondary identifier for the keyboard itself.

## Lockup

Use the hierarchy `Sotto Labs / SottoKey`:

1. Continuous-S symbol and `Sotto Labs` wordmark.
2. One neutral hairline.
3. SottoKey keycap and product name.

The canonical symbol asset is `public/brand/sotto-labs-symbol.svg`. Its path,
view box, stroke width, caps, and joins must remain unchanged:

```svg
<path d="M38 9H17C10 9 7 13 7 18s3 9 10 9h14c7 0 10 4 10 9s-3 9-10 9H10" />
```

The reusable application component is
`src/components/SottoLabsMark.tsx`. The header composes it with the SottoKey
product mark in `src/components/SiteHeader.tsx`.

## Shared tokens

- Obsidian: `#050608`
- Cold paper: `#f4f3ee`
- Sotto cobalt: `#4f7cff`
- Signal blue: `#85a5ff`
- Master sans: Manrope / Sotto Sans
- System mono: IBM Plex Mono / Sotto Mono

SottoKey may retain its ink-blue product tones, but it must not replace the
Sotto Labs logo, name, typography, or master cobalt.

## Navigation

- The Sotto Labs mark always links to `https://sottolabs.ai`.
- Sotto Labs links directly to `https://sottokey.com`.
- The SottoKey footer also links to the sibling Nebula product.
