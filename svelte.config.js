import adapter from "@sveltejs/adapter-static";
import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import sveltePreprocess from "svelte-preprocess";

const mdsvexOptions = {
	extensions: [".sveltemd"],
	layout: {},
	rehypePlugins: [rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexOptions.extensions],

	preprocess: [
		mdsvex(mdsvexOptions),
		// Consult https://github.com/sveltejs/svelte-preprocess
		// for more information about preprocessors
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer],
			},
		}),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
