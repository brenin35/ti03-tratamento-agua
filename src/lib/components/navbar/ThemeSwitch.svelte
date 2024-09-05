<script>
	import { themes, changeTheme } from '$lib';
</script>

<div class="dropdown dropdown-end dropdown-bottom">
	<div title="Themes" role="button" tabindex="0" class="btn btn-primary">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-palette"
			><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle
				cx="17.5"
				cy="10.5"
				r=".5"
				fill="currentColor"
			/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle
				cx="6.5"
				cy="12.5"
				r=".5"
				fill="currentColor"
			/><path
				d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
			/></svg
		>Mudar tema
	</div>

	<!-- Themes -->
	<div
		class="dropdown-content z-10 mt-2 flex h-72 w-64 flex-col gap-2 overflow-y-scroll rounded-box bg-base-200 p-4 shadow-2xl"
	>
		{#each themes as theme}
			<button
				data-theme={theme}
				data-set-theme={theme}
				class="btn btn-sm flex justify-between bg-base-100"
				on:click={() => changeTheme(theme)}
			>
				<span>{theme}</span>

				<div class="flex items-center gap-2">
					{#each ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral'] as bg}
						<span class="{bg} h-4 w-2 rounded-box"></span>
					{/each}
				</div>
			</button>
		{/each}
	</div>
</div>
