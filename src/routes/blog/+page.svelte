<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | SvelteKit</title>
</svelte:head>

<h1>Blog</h1>

<ul>
	{#each data.posts as { id, title }}
		<li>
			<a href={`/blog/${id}`}>{title}</a>
		</li>
	{/each}
</ul>
