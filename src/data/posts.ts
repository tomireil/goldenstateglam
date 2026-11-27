// Journal posts live as Markdown files in src/content/blog/. Add a file there to publish a new post.
// Frontmatter: title, description, pubDate (YYYY-MM-DD), updatedDate (optional).

const modules = import.meta.glob('../content/blog/*.md', { eager: true }) as Record<string, any>;

export interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate: Date;
  Content: any;
}

export const posts: Post[] = Object.entries(modules)
  .map(([file, mod]) => ({
    slug: file.split('/').pop()!.replace(/\.md$/, ''),
    title: mod.frontmatter.title,
    description: mod.frontmatter.description,
    pubDate: new Date(mod.frontmatter.pubDate),
    updatedDate: new Date(mod.frontmatter.updatedDate ?? mod.frontmatter.pubDate),
    Content: mod.Content,
  }))
  .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
