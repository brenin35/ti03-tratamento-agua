<script>
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import ThemeSwitch from '$lib/components/navbar/ThemeSwitch.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<div>
	<Navbar/>
	<slot />
</div>
