// Turns a post's file path into its URL ID. Shared by src/content.config.ts and
// scripts/generate-redirects.mjs, so the redirects always match the real URLs.
import { slug } from 'github-slugger';

/**
 * Same as Astro's default ID (each path segment slugified, `index` dropped, `slug:`
 * frontmatter wins), but a file named like its folder is also dropped, so
 * `2025/11/homelab/homelab.md` becomes `2025/11/homelab` instead of `2025/11/homelab/homelab`.
 * @param {{ entry: string; data: Record<string, unknown> }} options
 */
export function postId({ entry, data }) {
	if (typeof data.slug === 'string' && data.slug) return data.slug;

	const segments = entry
		.replace(/\.mdx?$/, '')
		.split('/')
		.map((segment) => slug(segment));
	const last = segments.at(-1);
	if (last === 'index' || (segments.length > 1 && last === segments.at(-2))) segments.pop();
	return segments.join('/');
}
