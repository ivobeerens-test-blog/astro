import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getDescription, getPublishedPosts } from '../lib/posts';

const FEED_SIZE = 30;

export async function GET(context) {
	const posts = (await getPublishedPosts()).slice(0, FEED_SIZE);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: getDescription(post),
			link: `/blog/${post.id}/`,
		})),
	});
}
