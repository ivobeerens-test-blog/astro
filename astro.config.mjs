// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';
import { readdirSync, readFileSync } from 'node:fs';
import { join, sep } from 'node:path';
import rehypeDemoteHeadings from './src/lib/rehype-demote-headings.mjs';
import { postId } from './src/lib/post-id.mjs';
import { postMedia, rehypePostMedia } from './src/lib/post-media.mjs';

const SITE = 'https://www.ivobeerens.nl';

// Map each post URL to its updatedDate (or pubDate), for <lastmod> in the sitemap
function postLastModified() {
	const contentDir = join('src', 'content', 'blog');
	const dates = new Map();
	for (const entry of readdirSync(contentDir, { recursive: true })) {
		if (!/\.mdx?$/.test(entry)) continue;
		const frontmatter = readFileSync(join(contentDir, entry), 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
		const field = (key) => frontmatter.match(new RegExp(`^${key}:[ \\t]*["']?([^"'\\r\\n]+?)["']?[ \\t]*$`, 'm'))?.[1];
		const date = new Date(field('updatedDate') ?? field('pubDate') ?? '');
		if (Number.isNaN(date.valueOf())) continue;
		const slug = field('slug');
		const id = postId({ entry: entry.split(sep).join('/'), data: slug ? { slug } : {} });
		dates.set(`${SITE}/blog/${id}/`, date.toISOString());
	}
	return dates;
}
const lastModified = postLastModified();

// https://astro.build/config
export default defineConfig({
	site: SITE,
	integrations: [
		mdx(),
		postMedia(),
		sitemap({
			serialize(item) {
				const lastmod = lastModified.get(item.url);
				if (lastmod) item.lastmod = lastmod;
				return item;
			},
		}),
	],
	// Astro 7 defaults to 'jsx', which can drop spaces between inline elements in older posts
	compressHTML: true,
	markdown: {
		// The unified pipeline is needed for rehype plugins such as rehype-external-links
		processor: unified({
			rehypePlugins: [
				rehypeDemoteHeadings,
				// Before rehype-external-links, so old wp-content links that now point to local files open in place
				rehypePostMedia,
				[
					rehypeExternalLinks,
					{
						target: '_blank',
						rel: ['noopener', 'noreferrer']
					}
				]
			]
		})
	}
});
