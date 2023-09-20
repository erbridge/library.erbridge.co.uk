<script lang="ts">
	import { page } from "$app/stores";
	import { BaseLayout } from "@erbridge/website-theme";
	import "@erbridge/website-theme/stylesheets/global.css";
	import "normalize.css";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<meta name="theme-color" content="#272A53" />

	<style>
		:root {
			--background-colour: 39, 43, 82;
			--text-colour: 215, 218, 255;
			--accent-colour: 163, 255, 166;
			--secondary-accent-colour: 255, 103, 77;
		}

		:root.theme--light {
			--background-colour: 202, 206, 251;
			--text-colour: 39, 43, 82;
			--accent-colour: 43, 85, 255;
			--secondary-accent-colour: 255, 9, 102;
		}

		@media (prefers-color-scheme: light) {
			:root:not(.theme--dark) {
				--background-colour: 202, 206, 251;
				--text-colour: 39, 43, 82;
				--accent-colour: 43, 85, 255;
				--secondary-accent-colour: 255, 9, 102;
			}
		}
	</style>
</svelte:head>

<BaseLayout
	pathname={$page.url.pathname}
	contactEmail="library@erbridge.co.uk"
	internalLinks={data.internalLinks}
	externalLink={data.externalLink}
>
	<slot slot="main" />
</BaseLayout>
