<script lang="ts">
	import BaseLayout from "./base.svelte";

	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let description: string | undefined = undefined;
</script>

<BaseLayout {title} {subtitle} {description}>
	<meta slot="head" property="og:article:author" content="F" />
	<slot slot="description" name="description" />
	<slot />
</BaseLayout>
