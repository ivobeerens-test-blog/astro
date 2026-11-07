// Writes public/_redirects, mapping each post's legacy `url:` frontmatter value to its
// current /blog/ URL. Only needs re-running if legacy posts move or change draft status.
// Usage: node scripts/generate-redirects.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { postId } from '../src/lib/post-id.mjs';

const contentDir = join('src', 'content', 'blog');

// Fixed redirects, including /blog/ URLs that changed after the site moved to Astro
const lines = [
	'/feed /rss.xml 301',
	'/blog/2025/11/homelab/homelab/ /blog/2025/11/homelab/ 301',
];
const seen = new Set();

for (const entry of readdirSync(contentDir, { recursive: true }).sort()) {
	if (!/\.mdx?$/.test(entry)) continue;

	const source = readFileSync(join(contentDir, entry), 'utf8');
	const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
	const legacyUrl = frontmatter.match(/^url:\s*"?([^"\r\n]+?)"?\s*$/m)?.[1];
	if (!legacyUrl || /^draft:\s*true\s*$/m.test(frontmatter)) continue;

	if (seen.has(legacyUrl)) throw new Error(`Duplicate legacy URL: ${legacyUrl}`);
	seen.add(legacyUrl);

	const id = postId({ entry: relative(contentDir, join(contentDir, entry)).split(sep).join('/'), data: {} });
	lines.push(`${legacyUrl} /blog/${id}/ 301`);
}

writeFileSync(join('public', '_redirects'), `${lines.join('\n')}\n`);
console.log(`Wrote ${lines.length} redirects to public/_redirects`);
