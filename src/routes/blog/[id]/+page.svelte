<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
  {#await data.post then value}
    <title>{value.title} | SvelteKit</title>
  {:catch}
    <title>Error | SvelteKit</title>
  {/await}
</svelte:head>

<a href="/blog">Back to blog</a>

{#await data.post}
	<p>Loading...</p>
{:then post}
	<h1>{post.title}</h1>
	<p>{post.body}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
