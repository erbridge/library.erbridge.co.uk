<script lang="ts">
	import { Head, scrollToTop, transitions } from "@erbridge/website-theme";
	import { blur } from "svelte/transition";
</script>

<Head />

<header
	in:blur={transitions.HEADER_IN_PROPERTIES}
	out:blur={transitions.HEADER_OUT_PROPERTIES}
	on:outroend={scrollToTop}
>
	<p>hi, my name is F</p>

	<h1>this is my library of creations.</h1>
</header>

<section
	in:blur={transitions.CONTENT_IN_PROPERTIES}
	out:blur={transitions.CONTENT_OUT_PROPERTIES}
>
	<p>
		I’m an
		<span class="secondary">anarchist</span>,
		<span class="secondary">agender</span>,
		<span class="secondary">trans</span>,
		<span class="secondary">queer</span>,
		<span class="secondary">ace</span>,
		<span class="secondary">autistic</span> /
		<span class="secondary">schizoid</span>,
		<span class="secondary">mentally ill</span>,
		<span class="secondary">disabled</span>, mostly
		<span class="secondary">vegan</span>,
		<span class="secondary">tattooed</span>
		<span>technologist</span>.
	</p>

	<p>
		I used to make <span>games</span>. Now I try to make a
		<span>better world</span> (or at least stop it getting worse).
	</p>
</section>

<aside
	in:blur={transitions.CONTENT_IN_PROPERTIES}
	out:blur={transitions.CONTENT_OUT_PROPERTIES}
>
	<p>
		If you’d like to chat about anything I’ve made, <a
			rel="external me"
			href="https://sunspot.garden/@erbridge">toot</a
		>
		or
		<a href="mailto:library@erbridge.co.uk">email</a> me. I’d love to hear from you!
	</p>

	<p>
		I also have a <a rel="me" href="//blog.erbridge.co.uk/">blog</a>.
	</p>
</aside>

<style>
	header {
		margin: 25vh 0;
	}

	header p {
		margin-bottom: 0;
		line-height: 1.2;
		font-family: var(--heading-font-family);
		font-weight: var(--heading-font-weight);
		font-size: 1em;
		color: rgb(var(--accent-colour));
	}

	header h1 {
		margin-top: 0.2em;
		margin-bottom: 2em;
		margin-left: 0.8em;
	}

	section {
		margin-bottom: 20vh;
		margin-left: 5em;
		font-size: 1.1em;
	}

	section p:not(:last-child) {
		margin-bottom: 10vh;
	}

	section p:last-child {
		margin-left: 3em;
		margin-right: 3em;
	}

	aside {
		margin: 0 2em;
		font-size: 1em;
	}

	aside p:last-child {
		margin-left: 10em;
	}

	span {
		font-family: var(--heading-font-family);
		font-weight: var(--heading-font-weight);
		color: rgb(var(--accent-colour));
	}

	span.secondary {
		color: rgb(var(--secondary-accent-colour));
	}

	@media (min-width: 900px) {
		header {
			font-size: 1.2em;
		}

		section {
			font-size: 1.2em;
		}
	}

	@media (min-width: 1024px) {
		header {
			font-size: 1.4em;
		}

		section {
			font-size: 1.2em;
		}

		aside p:last-child {
			margin-left: 40em;
		}
	}
</style>
