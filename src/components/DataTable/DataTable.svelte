<style>
	main.datatable {
		position: relative;
		/*background: inherit;*/
	}

	section.dt-table {
		position: relative;
		width: 100%;
		height: 100%;
		/*overflow: auto;*/
		overflow-x: hidden;
		overflow-y: auto;
		/*background: inherit;*/
		/*border-bottom: 1px solid #e0e0e0;*/
		border-radius: 5px;
	}

	:global(table.content) {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
		/*overflow: hidden;*/
	}

	:global(table.content td, table.content th) {
		padding: 9px;
		border-top: 1px solid #121212;
		box-shadow: inset 0 1px #2e2e2e;
		font-weight: normal;
	}

	:global(table.content th) {
		text-align: left;
		font-weight: bold;
	}

	:global(table.content thead th) {
		position: sticky;
		top: 0;
		background: #212121;
		/*box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, rgba(0, 0, 0, 0.8) 0 1px 7px 0 inset !important;*/
		box-shadow: 0 3px 3px -1px rgba(0, 0, 0, 0.4) !important;
	}

	:global(table.content thead tr:first-child td, table thead tr:first-child th) {
		border-top: none;
		box-shadow: none;
	}

	:global(table.content tbody tr:nth-child(odd) td, table tbody tr:nth-child(odd) th) {
		background: #252525;
	}

	:global(table.content td.id, table.content th.id) {
		width: 1%;
		text-align: center;
	}

	:global(table.content td.level, table.content th.level) {
		text-align: center;
	}

	:global(table.content td.placeholder, table.content th.placeholder) {
		color: rgba(198,198,198,0.5);
	}
</style>

<script>
	import { onMount } from 'svelte'
	import { options } from './stores/options.js'
	import { datatable } from './datatable.js'

	import Search from './components/Search.svelte'
	import Pagination from './components/Pagination.svelte'
	import Header from './components/Header.svelte'

	export let data = []
	export let settings = {}

	options.update(settings)

	$: {
		datatable.setRows(data)
	}

	onMount(() => {
		datatable.resize()
		datatable.addEventScrollX()
		// noinspection JSUnresolvedFunction
		new window.ResizeObserver(mutations => {
			mutations.forEach(() => datatable.resize())
		}).observe(document.querySelector('main.datatable').parentElement)
	})
</script>

<main class="datatable">
	{#if $options.blocks.searchInput === true}
		<Search />
	{/if}

	<section class="dt-table">
		<Header />
		<table class="content">
			<slot />
		</table>
	</section>

	{#if $options.blocks.paginationRowCount === true || $options.blocks.paginationButtons === true}
		<Pagination />
	{/if}
</main>