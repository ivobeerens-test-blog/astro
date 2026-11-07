// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.ivobeerens.nl',
	integrations: [mdx(), sitemap()],
	// Astro 7 defaults to 'jsx', which can drop spaces between inline elements in older posts
	compressHTML: true,
	markdown: {
		// The unified pipeline is needed for rehype plugins such as rehype-external-links
		processor: unified({
			rehypePlugins: [
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
