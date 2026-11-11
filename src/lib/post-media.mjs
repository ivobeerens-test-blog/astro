// Full-size images that posts link to, served at /media/<path under src/content/blog>.
//
// Astro optimizes images embedded with ![](...), but it leaves two kinds of image
// references alone, so they ended up as "page not found":
//   - links to the full-size image, e.g. [![](images/x-300x200.png)](images/x.png)
//   - plain HTML <img src="images/..."> (used in the tables of older posts)
// Old posts also link to https://www.ivobeerens.nl/wp-content/uploads/..., which no longer
// exists; the same file is usually in the post's own folder.
//
// rehypePostMedia points those references at /media/..., and the postMedia integration
// serves those files in `astro dev` and copies exactly the ones that are used into the build.
import { createReadStream, existsSync, readdirSync, readFileSync, statSync, copyFileSync, mkdirSync } from 'node:fs';
import { basename, dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const CONTENT_DIR = resolve('src/content/blog');
const MEDIA_PREFIX = '/media/';
const IMAGE_FILE = /\.(png|jpe?g|gif|webp|avif|svg)$/i;
const OLD_UPLOADS = /^https?:\/\/(www\.)?ivobeerens\.nl\/wp-content\/uploads\//i;
const CONTENT_TYPES = {
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.webp': 'image/webp',
	'.avif': 'image/avif',
	'.svg': 'image/svg+xml',
};

const toMediaUrl = (file) =>
	MEDIA_PREFIX + relative(CONTENT_DIR, file).split(sep).map(encodeURIComponent).join('/');

/** Every file in a post's folder (and its subfolders), by lower-case file name. */
const folderIndex = new Map();
function filesByName(folder) {
	if (!folderIndex.has(folder)) {
		const index = new Map();
		for (const entry of readdirSync(folder, { recursive: true })) {
			const full = join(folder, entry);
			if (IMAGE_FILE.test(entry) && statSync(full).isFile()) index.set(basename(entry).toLowerCase(), full);
		}
		folderIndex.set(folder, index);
	}
	return folderIndex.get(folder);
}

/** The local file an image reference points to, or undefined when there is none. */
function localFile(url, postFolder) {
	if (!url || !IMAGE_FILE.test(url.split(/[?#]/)[0])) return;
	const path = url.split(/[?#]/)[0];

	if (OLD_UPLOADS.test(path)) {
		return filesByName(postFolder).get(decodeURIComponent(basename(path)).toLowerCase());
	}
	if (/^([a-z]+:|\/|#)/i.test(path)) return; // other sites, site-absolute paths, anchors

	const file = resolve(postFolder, decodeURIComponent(path));
	if (file.startsWith(CONTENT_DIR + sep) && existsSync(file)) return file;
}

export function rehypePostMedia() {
	return (tree, vfile) => {
		const source = vfile.path ?? vfile.history?.[0];
		if (!source || !resolve(source).startsWith(CONTENT_DIR + sep)) return;
		const postFolder = dirname(resolve(source));
		// ![](...) images: Astro optimizes these after this plugin, so leave their src alone
		const optimized = new Set(vfile.data?.astro?.localImagePaths ?? []);

		const walk = (node) => {
			// HTML written straight into the Markdown (e.g. the tables in older posts) arrives as raw text
			if (node.type === 'raw') {
				node.value = node.value.replace(
					/<(a|img)\b([^>]*?)\b(href|src)=(["'])([^"']*)\4/gi,
					(tag, name, before, attribute, quote, url) => {
						const file = localFile(url, postFolder);
						if (!file) return tag;
						const lightbox = name.toLowerCase() === 'a' && attribute.toLowerCase() === 'href' ? ' data-lightbox' : '';
						return `<${name}${before}${attribute}=${quote}${toMediaUrl(file)}${quote}${lightbox}`;
					},
				);
			}
			if (node.type === 'element') {
				const attribute = node.tagName === 'a' ? 'href' : node.tagName === 'img' ? 'src' : undefined;
				if (node.tagName === 'img' && optimized.has(String(node.properties?.src ?? ''))) {
					node.children?.forEach(walk);
					return;
				}
				let file = attribute && localFile(String(node.properties?.[attribute] ?? ''), postFolder);
				// Full-size file missing from the post folder: link to the picture that is shown instead
				if (!file && node.tagName === 'a' && IMAGE_FILE.test(String(node.properties?.href ?? '').split(/[?#]/)[0])) {
					const img = node.children?.find((child) => child.type === 'element' && child.tagName === 'img');
					file = img && localFile(String(img.properties?.src ?? ''), postFolder);
				}
				if (file) node.properties[attribute] = toMediaUrl(file);
				// Mark links to a full-size image so the post page can open them in a lightbox
				if (file && node.tagName === 'a') {
					node.properties.dataLightbox = '';
					delete node.properties.target;
				}
			}
			node.children?.forEach(walk);
		};
		walk(tree);
	};
}

function mediaFile(urlPath) {
	if (!urlPath.startsWith(MEDIA_PREFIX)) return;
	const parts = urlPath.slice(MEDIA_PREFIX.length).split('?')[0].split('/').map(decodeURIComponent);
	const file = resolve(CONTENT_DIR, ...parts);
	if (file.startsWith(CONTENT_DIR + sep) && IMAGE_FILE.test(file) && existsSync(file)) return file;
}

export function postMedia() {
	return {
		name: 'post-media',
		hooks: {
			// `astro dev`: serve /media/... straight from the post folders
			'astro:server:setup': ({ server }) => {
				server.middlewares.use((req, res, next) => {
					const file = mediaFile(req.url ?? '');
					if (!file) return next();
					res.setHeader('Content-Type', CONTENT_TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream');
					createReadStream(file).pipe(res);
				});
			},
			// Build: copy only the files the generated pages refer to
			'astro:build:done': ({ dir, logger }) => {
				const outDir = fileURLToPath(dir);
				const used = new Set();
				for (const entry of readdirSync(outDir, { recursive: true })) {
					if (!entry.endsWith('.html')) continue;
					const html = readFileSync(join(outDir, entry), 'utf8');
					for (const match of html.matchAll(/["'](\/media\/[^"'?#]+)/g)) used.add(match[1]);
				}
				let copied = 0;
				for (const urlPath of used) {
					const file = mediaFile(urlPath);
					if (!file) continue;
					const target = join(outDir, ...urlPath.slice(1).split('/').map(decodeURIComponent));
					mkdirSync(dirname(target), { recursive: true });
					copyFileSync(file, target);
					copied++;
				}
				logger.info(`Copied ${copied} linked post images to /media/`);
			},
		},
	};
}
