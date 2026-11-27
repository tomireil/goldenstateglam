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
| Service menu: names, prices, lengths, deposits, descriptions, packages, current promotion | `src/data/facials.ts` |
| FAQ questions and answers | `src/data/faqs.ts` |
| Page titles, descriptions, structured data | `src/data/seo.json` |
| Journal posts (one Markdown file each) | `src/content/blog/` |
| Photos and their alt text | `src/assets/`, `src/data/images.ts` |
| Colors, type and shared styles | `src/styles/global.css` |
| Pages | `src/pages/` |
| `llms.txt` (generated from the data files) | `src/pages/llms.txt.ts` |
| `robots.txt`, favicon, share image | `public/` |

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

- **GlossGenius is the source of truth for the menu.** `src/data/facials.ts` mirrors https://goldenstateglam.glossgenius.com/services. When a service, price, length, deposit or description changes there, change it here. Service pages, the menu page, the FAQ answers, the structured data and `llms.txt` all read from that one file. Don't list anything that can't be booked.
- **Promotions** (`promo` in `facials.ts`) hide themselves after their end date. Replace or clear it when a new one starts.
- **Old addresses** that Google knows are redirected in `public/_redirects`. Add a line there whenever a service page is renamed or removed.
- **All content stays in the HTML.** The facial picker, tabs and FAQ lists only show or hide content that is already on the page, so search engines and AI tools can read everything.
- **FAQ structured data is generated from the visible FAQ text** (`faqJsonLd` in `src/data/faqs.ts`). Don't hand-write it.
- **`llms.txt` updates itself.** It is built from `site.ts`, `facials.ts`, `faqs.ts` and the journal posts, so changing those is enough.
- Every photo except the cover portrait is a stock photo, marked "reference photo" in its alt text. Credits are in `src/data/images.ts`. Replace them with real studio photos when available.
- Service names, prices, lengths, deposits and included steps come from GlossGenius. The descriptions around them are written for this site.

## Journal post extras

- Add `image: <key>` to a post's frontmatter to give it its own preview image when shared. Keys are in `src/data/images.ts`. Without it, the post uses the site-wide image.
- A post that links to a service page (`/services/<slug>/`) is listed on that service page automatically, under "From the journal".
- The sitemap takes each post's date from `updatedDate` (or `pubDate`). Menu pages use the "Last synced with GlossGenius" date in `src/data/facials.ts`.
