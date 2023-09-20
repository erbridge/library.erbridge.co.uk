<script lang="ts">
	import { Head, scrollToTop, transitions } from "@erbridge/website-theme";
	import { blur } from "svelte/transition";

	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let description: string | undefined = undefined;
</script>

<Head
	title={(subtitle ? `${title}: ${subtitle}` : title).toLowerCase()}
	type="article"
	{description}
>
	<slot name="head" />
</Head>

<article>
	<header
		in:blur={transitions.HEADER_IN_PROPERTIES}
		out:blur={transitions.HEADER_OUT_PROPERTIES}
		on:outroend={scrollToTop}
	>
		<div>
			<h1>{title}</h1>

			{#if subtitle}
				<h2>{subtitle}</h2>
			{/if}

			<slot name="description" />
		</div>
	</header>

	<section
		in:blur={transitions.CONTENT_IN_PROPERTIES}
		out:blur={transitions.CONTENT_OUT_PROPERTIES}
	>
		<slot />
	</section>
</article>

<style>
	header {
		margin-left: auto;
		max-width: 30rem;
		text-align: right;
	}

	@media (min-width: 768px) {
		article {
			display: flex;
		}

		header {
			margin-right: 2rem;
			max-width: 14.5rem;
			word-wrap: break-word;
		}

		header > div {
			position: sticky;
			top: 0.8em;
			margin-top: -0.2em;
			border-right: 2px solid rgb(var(--accent-colour));
			padding: 0.2em 1em 3em 0;
			will-change: transform;
		}

		section {
			flex: 1;
			min-width: 0;
		}
	}
</style>
