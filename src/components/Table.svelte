<style>
	:global(.table-wrapper) {
		width: 100%;
		height: 100%;
		overflow-y: auto;
		border-radius: 5px;
	}

	:global(.table) {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
	}

	:global(.table td, .table th) {
		padding: 9px;
		border-top: 1px solid #121212;
		box-shadow: inset 0 1px #2e2e2e;
		font-weight: normal;
	}

	:global(.table th) {
		text-align: left;
		font-weight: bold;
	}

	:global(.table thead th) {
		position: sticky;
		top: 0;
		background: #212121;
		/*box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, rgba(0, 0, 0, 0.8) 0 1px 7px 0 inset !important;*/
		box-shadow: 0 3px 3px -1px rgba(0, 0, 0, 0.4) !important;
	}

	:global(.table thead tr:first-child td, .table thead tr:first-child th) {
		border-top: none;
		box-shadow: none;
	}

	:global(.table tbody tr:nth-child(odd) td, .table tbody tr:nth-child(odd) th) {
		background: #252525;
	}

	:global(td.id, th.id) {
		width: 1%;
		text-align: center;
	}

	:global(td.level, th.level) {
		text-align: center;
	}

	:global(td.placeholder, th.placeholder) {
		color: rgba(198,198,198,0.5);
	}
</style>

<script>
	import VirtualList from './VirtualList.svelte'

	export let data = [{}]

	let columns = Object.keys(data[0])
</script>

<div class="table-wrapper">
	<table class="table">
		<thead>
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
		</thead>
		<tbody>
		<!--		<VirtualList autoScroll={false} items={rows} let:item></VirtualList>-->
		{#each data as row}
			<tr>
				{#each columns as column}
					<td>{row[column]}</td>
				{/each}
			</tr>
		{/each}
		</tbody>
	</table>
</div>
