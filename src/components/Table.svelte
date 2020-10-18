<style>
	:global(.table) {
		width: 100%;
		border-collapse: collapse;
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