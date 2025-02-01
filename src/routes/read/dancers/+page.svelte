<script>
	import dancers from "$lib/audio/dancers.mp3";
	import Layout from "$lib/layouts/read.svelte";
</script>

<Layout title="dancers">
	<div slot="description">
		<p>
			This poem was published in
			<cite
				><a
					rel="external"
					href="https://www.lulu.com/en/gb/shop/zali-krishna/open-polyversity-four/paperback/product-mmj82j.html"
					>Open Polyversity 4</a
				></cite
			>. I receive a share of any profits from sales.
		</p>

		<p>
			When reciting this poem, each line of the square should be read by a
			second reader at the same time as the line it interrupts.
		</p>
	</div>

	<figure>
		<figcaption class="visually-hidden">
			Listen to me recite this poem:
		</figcaption>
		<audio controls preload="metadata">
			<source src={dancers} type="audio/mpeg" />
			<p>
				Your browser doesn’t appear to support HTML5 audio. You can <a
					href={dancers}>download the recording</a
				> instead.
			</p>
		</audio>
	</figure>

	<pre>Cold skin, warm heart.
On a pedestal, exposed. Seen.
Curves and motion examined.
Eyes and minds, dancing the lines.
Free flowing.
Flowing free.</pre>

	<div class="square-container">
		<pre>Merci. It starts with a kiss.
<span class="pre-square">Turns </span>taken. Rules broken.
<span class="pre-square">A line </span>from one hand to the next.
<span class="pre-square">Follow</span>ed. Inspired. Ignored.
<span class="pre-square">Libera</span>ted.
Five gestures.
One movement.</pre>

		<pre aria-label="the square" class="square">the square
divides us
reflects us
connects us</pre>
	</div>

	<pre>Cold skin, warm heart.
On a pedestal, stripped bare.
Transformed.</pre>

	<aside class="visually-hidden">
		<p>
			If you used assistive technology to read this poem, I’d love your feedback
			on whether it worked well for you. Please <a
				rel="external me"
				href="https://sunspot.garden/@erbridge">toot</a
			>
			or
			<a href="mailto:library@erbridge.co.uk">email</a> me.
		</p>
	</aside>
</Layout>

<style>
	audio {
		display: block;
		width: 100%;
	}

	pre {
		font-family: var(--body-font-family);
	}

	.square-container {
		position: relative;
	}

	.square {
		position: absolute;
		top: calc(1em * var(--base-line-height));
		left: 3.4em;
		margin: 0;
		width: calc(4em * var(--base-line-height));
		text-align-last: justify;
		font-style: italic;
		color: rgb(var(--accent-colour));
	}

	.pre-square {
		display: inline-block;
		margin-right: calc(1em + 4em * var(--base-line-height));
		width: 2.9em;
	}
</style>
