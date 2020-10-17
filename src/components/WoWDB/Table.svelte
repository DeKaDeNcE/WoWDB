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
	export let headers = ['Header 1', 'Header 2', 'Header 3']
	export let rows = [{
		values: [1, 2, 3]
	} , {
		values: [1, 2, 3]
	} , {
		values: [1, 2, 3]
	}]
</script>

<table class="table">
	<thead>
		<tr>
			{#each headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				{#each row.values as value}
					<td>{value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>