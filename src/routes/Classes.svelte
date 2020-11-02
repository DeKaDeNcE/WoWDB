<!--suppress JSValidateTypes, UnnecessaryReturnStatementJS -->
<script>
	import lzstring from 'lz-string'
	import axios from 'axios'

	import { DataTable, rows } from '../components/DataTable'
	import Box from '../components/Box.svelte'
	import Error from '../components/Error.svelte'
	import ProgressBar from '../components/ProgressBar.svelte'

	const settings = {
		sortable: true,
		pagination: true,
		rowPerPage: 50,
		columnFilter: true,
		blocks: {
			searchInput: true,
			paginationButtons: true,
			paginationRowCount: true,
		}
	}

	let table = [{}]
	let val = 0
	let max = 0

	function fetchData(url) {
		return axios({
			url: url,
			transformResponse: data => {
				return JSON.parse(lzstring.decompressFromUTF16(data))
			},
			onDownloadProgress: e => {
				val = e.loaded
				max = e.total
			}
		}).then(response => {
			table = response.data
		})
	}

	let promise = fetchData('assets/database/chrclasses.db')
</script>

<Box style="height: 80vh; padding: 10px;">
	{#await promise}
		<ProgressBar val={val} max={max} />
	{:then data}
		<DataTable settings={settings} data={table}>
			<thead>
				<th data-key="ID">#</th>
				<th data-key="Name_lang">Name</th>
				<th data-key="IconFileDataID">IconFileDataID</th>
			</thead>
			<tbody>
				{#each $rows as row}
					<tr>
						<td>{row['ID']}</td>
						<td>{row['Name_lang']}</td>
						<td>{row['IconFileDataID']}</td>
					</tr>
				{/each}
			</tbody>
		</DataTable>
	{:catch error}
		<Error error={error} />
	{/await}
</Box>