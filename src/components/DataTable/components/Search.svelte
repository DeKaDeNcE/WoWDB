<style>
	section {
		height: 32px;
	}
</style>

<script>
	import { options } from '../stores/options.js'

	import SearchInput from '../SearchInput.svelte'
</script>

{#if $options.blocks.searchInput}
	<section class="dt-search">
		<SearchInput />
	</section>
{/if}