<script lang="ts">
	import { page } from '$app/state';
</script>

<header>
	<a href="/" class={page.url.pathname === '/' ? 'active' : ''}>Home</a>
	<a href="/blog" class={page.url.pathname.startsWith('/blog') ? 'active' : ''}>Blog</a>
	<a href="/about" class={page.url.pathname.startsWith('/about') ? 'active' : ''}>About</a>
</header>
