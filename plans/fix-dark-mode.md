## Overview

Complete dark mode support across joshre.com. The resume page is ~70% done but has visible broken elements (white sticky header stripes, unreadable badges, washed-out buttons). The homepage has zero dark mode. Other pages (feif, beaconed-demo) are out of scope.

## Approach

Use individual `dark:` utility classes — not semantic tokens. This is a small personal site with <20 dark mode touch points. Follow the existing color convention:

| Light | Dark |
|-------|------|
| `bg-white`, `bg-stone-50` | `dark:bg-zinc-800` |
| `bg-stone-100` | `dark:bg-zinc-700` |
| `from-white to-white/80` | `dark:from-zinc-800 dark:to-zinc-800/80` |
| `before:from-white/80 before:to-white` | `dark:before:from-zinc-800/80 dark:before:to-zinc-800` |
| `border-stone-200`, `border-stone-300` | `dark:border-zinc-600` |
| `text-stone-700` | `dark:text-stone-300` |
| `bg-soil-50` | `dark:bg-soil-950` |
| `text-lawn-600` | `dark:text-lawn-300` |

## Tasks

### Phase 1: Homepage (index.md + home.html)

- `index.md:3` — Change `bg: "bg-soil-50"` to `bg: "bg-soil-50 dark:bg-soil-950"`
- `home.html:8` — Add `dark:prose-invert` to the prose div
- `home.html:11` — Add `dark:text-lawn-300` to the H1

### Phase 2: Resume — Sticky Header before: Pseudo (resume.md)

Four identical sticky header divs at lines 25, 101, 224, 260. Each has:

```
before:from-white/80 before:to-white
```

Add to each:

```
dark:before:from-zinc-800/80 dark:before:to-zinc-800
```

### Phase 3: Resume — Job Title Badges (resume.md)

Six job title badge spans at lines 41, 51, 60, 81, 88, 95. Each has:

```html
<span class="border ... bg-stone-100 ...">
```

Add to each: `dark:bg-zinc-700 dark:border-zinc-600`

### Phase 4: Resume — HR Dividers (resume.md)

Six `---` dividers render as `<hr>`. Currently `border-stone-300` via default prose styling. Add a global rule in `_css/input.css`:

```css
.prose-invert hr {
  border-color: var(--color-zinc-600);
}
```

Or handle via prose theme variables — check if `--tw-prose-hr` exists in the typography plugin and set it in the `.prose-invert` block.

### Phase 5: Resume — Skill Set Dividers (resume.md)

Line 114: `divide-y divide-dotted` on the skill grid. Add `dark:divide-zinc-600`.

### Phase 6: Resume — Header Border (resume.html)

Line 10: `border-b border-stone-200` — Add `dark:border-zinc-700`.

### Phase 7: Cleanup

- `resume.md:12` — Remove `dark:gap-2` (changes layout spacing based on color scheme — almost certainly a mistake)
- Rebuild CSS: `yarn tailwindcss -i _css/input.css -o css/output.css --minify`
- Rebuild JS: `node build.js`
- Run rustywind on changed files

## Verification

After all changes, use Playwright to:
1. Navigate to homepage in dark mode — verify bg, text, button
2. Navigate to resume in dark mode — full-page screenshot, verify:
   - No white stripes above sticky headers
   - Job badges readable
   - Skill tags readable
   - HR dividers visible
   - Button text white
3. Compare light and dark side by side

## Out of Scope

- Feif product pages
- Beaconed demo page
- Been-making page
- Adding a manual dark mode toggle (stays `prefers-color-scheme` based)
