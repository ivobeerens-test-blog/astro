import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { postId } from './lib/post-id.mjs';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	// The ID becomes the URL: /blog/<id>/
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}', generateId: postId }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		// Search engines cut descriptions off at around 160 characters
		description: z.string().max(160, 'Description must not exceed 160 characters').optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// Path relative to the post; used as the social sharing image
		coverImage: image().optional(),
		// Drafts are visible in `astro dev` but left out of production builds
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
