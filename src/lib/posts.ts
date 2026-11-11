import { type CollectionEntry, getCollection } from 'astro:content';

const MAX_DESCRIPTION_LENGTH = 155;

/** All published posts, newest first. Drafts are left out, also when running `astro dev`. */
export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** The post's own description, or otherwise a summary taken from its opening text. */
export function getDescription(post: CollectionEntry<'blog'>) {
	return post.data.description?.trim() || excerptFromMarkdown(post.body) || post.data.title;
}

/** A longer summary from the post's opening text, for lists that show a few lines per post. */
export function getExcerpt(post: CollectionEntry<'blog'>, maxLength = 400) {
	return excerptFromMarkdown(post.body, maxLength) || getDescription(post);
}

function excerptFromMarkdown(markdown = '', maxLength = MAX_DESCRIPTION_LENGTH) {
	const text = markdown
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[\s*\]/g, ' ')
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line && !/^(#|\||[-*_]{3,}$)/.test(line))
		.map((line) => line.replace(/^(>\s*)+/, '').replace(/^([-*+]|\d+\.)\s+/, ''))
		.join(' ')
		.replace(/\\([\\`*_{}[\]()#+.!-])/g, '$1')
		.replace(/`|\*+|(^|\s)_+|_+(?=\s|$)/g, '$1')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/\s+/g, ' ')
		.trim();

	if (text.length <= maxLength) return text;
	const cut = text.slice(0, maxLength);
	return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:.-]+$/, '')}…`;
}
