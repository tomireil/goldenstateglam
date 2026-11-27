import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site, deployed to Cloudflare Pages. Build output: dist/
export default defineConfig({
  site: 'https://goldenstateglam.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
