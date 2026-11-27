// Journal posts live as Markdown files in src/content/blog/. Add a file there to publish a new post.
// Frontmatter: title, description, pubDate (YYYY-MM-DD), updatedDate (optional),
// image (optional: a key from src/data/images.ts, used as the preview image when the post is shared).
import type { ImageKey } from './facials';

const modules = import.meta.glob('../content/blog/*.md', { eager: true }) as Record<string, any>;
const raw = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

export interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate: Date;
  image?: ImageKey;
  /** Slugs of the service pages this post links to. */
  links: string[];
  Content: any;
}

export const posts: Post[] = Object.entries(modules)
  .map(([file, mod]) => ({
    slug: file.split('/').pop()!.replace(/\.md$/, ''),
    title: mod.frontmatter.title,
    description: mod.frontmatter.description,
    pubDate: new Date(mod.frontmatter.pubDate),
    updatedDate: new Date(mod.frontmatter.updatedDate ?? mod.frontmatter.pubDate),
    image: mod.frontmatter.image,
    links: [...new Set([...(raw[file] ?? '').matchAll(/\/services\/([a-z0-9-]+)\//g)].map((m) => m[1]))],
    Content: mod.Content,
  }))
  .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
