<script>
	import ThemeSwitch from '$lib/components/navbar/ThemeSwitch.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<div class="mx-96 flex gap-2">
	<slot />
	<ThemeSwitch />
</div>
