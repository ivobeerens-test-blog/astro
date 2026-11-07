// The page layout already renders the post title as the page's only <h1>. When a post or
// Markdown page uses `# Heading` in its body, move every heading in it down one level
// (h1 -> h2, h2 -> h3, ...) so the outline stays intact and there is a single <h1>.
// Working on the HTML tree means `#` comments inside code blocks are never touched.
export default function rehypeDemoteHeadings() {
	return (tree) => {
		const headings = [];
		const walk = (node) => {
			if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) headings.push(node);
			node.children?.forEach(walk);
		};
		walk(tree);

		if (!headings.some((heading) => heading.tagName === 'h1')) return;
		for (const heading of headings) {
			heading.tagName = `h${Math.min(6, Number(heading.tagName[1]) + 1)}`;
		}
	};
}
