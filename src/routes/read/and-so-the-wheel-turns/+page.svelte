<script>
	import Layout from "$lib/layouts/read.svelte";
</script>

<Layout title="and so the wheel turns">
	<pre>And so the wheel turns.
The bracken breaks beneath my feet,
As these words roll over my tongue.</pre>

	<pre>The wheel rolls over my tongue,
As the bracken turns.
And so these words break beneath my feet.</pre>

	<pre>As the wheel breaks beneath my feet,
And so the bracken rolls over my tongue,
These words turn.</pre>
</Layout>

<style>
	pre {
		font-family: var(--body-font-family);
		font-weight: var(--body-font-weight);
	}
</style>
