# Golden State Glam

The website for Golden State Glam, a facial and skincare studio in Fair Oaks, California.
Built with [Astro](https://astro.build) as a fully static site. Booking happens on GlossGenius.

## Run it

Requires Node 22.

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22 (see `.nvmrc`)

## Where things live

| What | Where |
| --- | --- |
| Address, phone, hours, booking link, reviews | `src/data/site.ts` |
| Facial menu: names, prices, lengths, descriptions | `src/data/facials.ts` |
| FAQ questions and answers | `src/data/faqs.ts` |
| Page titles, descriptions, structured data | `src/data/seo.json` |
| Journal posts (one Markdown file each) | `src/content/blog/` |
| Photos and their alt text | `src/assets/`, `src/data/images.ts` |
| Colors, type and shared styles | `src/styles/global.css` |
| Pages | `src/pages/` |
| `llms.txt`, `robots.txt`, favicon, share image | `public/` |

## Publishing a journal post

Add a Markdown file to `src/content/blog/`. The file name becomes the URL.

```md
---
title: "Post title"
description: "One or two sentences for search results."
pubDate: 2026-12-01
---

Post text here.
```

The post page, the journal list, the sitemap and the post's structured data are generated from it.

## Rules worth keeping

- **Prices, lengths and deposits** must match the GlossGenius booking menu. Change them in `src/data/facials.ts` and `src/data/faqs.ts` together.
- **All content stays in the HTML.** The facial picker, tabs and FAQ lists only show or hide content that is already on the page, so search engines and AI tools can read everything.
- **FAQ structured data is generated from the visible FAQ text** (`faqJsonLd` in `src/data/faqs.ts`). Don't hand-write it.
- **Update `public/llms.txt`** when the menu, prices or policies change.
- Photos marked "reference photo" in their alt text are stock images, not the studio. Replace them with real studio photos when available.
