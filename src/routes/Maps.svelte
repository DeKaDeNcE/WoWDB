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

	const mapTypes = [
		'Unknown',
		'Continent',
		'Instance',
		'Transport',
		'Garrison'
	]

	const instanceTypes = [
		'Normal',
		'Instance',
		'Raid',
		'Battleground',
		'Arena',
		'Scenario'
	]

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

	let promise = fetchData('assets/database/map.db')
</script>

<Box style="height: 80vh; padding: 10px;">
	{#await promise}
		<ProgressBar val={val} max={max} />
	{:then data}
		<DataTable settings={settings} data={table}>
			<thead>
				<th data-key="ID">#</th>
				<th data-key="MapName_lang">Name</th>
				<th data-key="MapType">Type</th>
				<th data-key="InstanceType">Instance Type</th>
				<th data-key="MaxPlayers">Max Players</th>
				<th data-key="MapDescription0_lang">Description</th>
			</thead>
			<tbody>
				{#each $rows as row}
					<tr>
						<td>{row['ID']}</td>
						<td>{row['MapName_lang']}</td>
						<td>{typeof mapTypes[row['MapType']] !== 'undefined' ? mapTypes[row['MapType']] : 'Unknown'}</td>
						<td>{typeof instanceTypes[row['InstanceType']] !== 'undefined' ? instanceTypes[row['InstanceType']] : 'Unknown'}</td>
						<td>{row['MaxPlayers'] === 0 ? '∞' : row['MaxPlayers']}</td>
						<td>{@html row['MapDescription0_lang'] !== row['MapDescription1_lang'] ? `<p><b>Alliance:</b> ${row['MapDescription1_lang']}</p><p><b>Horde:</b> ${row['MapDescription0_lang']}</p>` : row['MapDescription0_lang']}</td>
					</tr>
				{/each}
			</tbody>
		</DataTable>
	{:catch error}
		<Error error={error} />
	{/await}
</Box>