import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync, readdirSync } from 'node:fs';

// Real "last changed" dates for the sitemap, so search engines can tell what is new.
// Journal posts use their own dates. The menu pages use the date the menu was last matched to GlossGenius.
// Other pages get no date, which is better than a wrong one.
const read = (p) => readFileSync(new URL(p, import.meta.url), 'utf8');
const lastmod = {};
for (const file of readdirSync(new URL('./src/content/blog/', import.meta.url))) {
  const front = read(`./src/content/blog/${file}`).split('\n---')[0];
  const date = (front.match(/^updatedDate:\s*(\S+)/m) ?? front.match(/^pubDate:\s*(\S+)/m))?.[1];
  if (date) lastmod[`/blog/${file.replace(/\.md$/, '')}/`] = date;
}
const newestPost = Object.values(lastmod).sort().pop();
if (newestPost) lastmod['/blog/'] = newestPost;
// Pages edited by hand. Update the date when you change one.
Object.assign(lastmod, { '/about/': '2026-11-28', '/contact/': '2026-11-28', '/faq/': '2026-11-28' });
const menuSynced = read('./src/data/facials.ts').match(/Last synced with GlossGenius: (\d{4}-\d{2}-\d{2})/)?.[1];

// Static site, deployed to Cloudflare Pages. Build output: dist/
export default defineConfig({
  site: 'https://goldenstateglam.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const date = lastmod[path] ?? (path === '/' || path.startsWith('/services/') ? menuSynced : undefined);
        if (date) item.lastmod = new Date(date).toISOString();
        return item;
      },
    }),
  ],
});
