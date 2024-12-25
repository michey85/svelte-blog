<script lang="ts">
	import TheFooter from '$lib/TheFooter.svelte';
	import TheHeader from '$lib/TheHeader.svelte';

	let { children } = $props();
</script>

<TheHeader />
<main class="container">
	{@render children()}
</main>
<TheFooter />
