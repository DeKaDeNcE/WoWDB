<!--suppress JSValidateTypes, UnnecessaryReturnStatementJS -->
<script>
	import lzstring from 'lz-string'
	import axios from 'axios'
	import { Datatable, rows } from '../components/DataTable'
	import { data as dataex } from '../data.example.js'

	import Box from '../components/Box.svelte'
	import Table from '../components/Table.svelte'
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

	console.log(dataex)

	let table = [{}]
	let val = 0
	let max = 0

	let mapTypes = [
		'Unknown',
		'Continent',
		'Instance',
		'Transport',
		'Garrison'
	]

	let instanceTypes = [
		'Normal',
		'Instance',
		'Raid',
		'Battleground',
		'Arena',
		'Scenario'
	]

	const filter = data => {
		return data.map(data => {
			return {
				'#': data['ID'],
				'Name': data['MapName_lang'],
				'Type': typeof mapTypes[data['MapType']] !== 'undefined' ? mapTypes[data['MapType']] : 'Unknown',
				'Instance Type': typeof instanceTypes[data['InstanceType']] !== 'undefined' ? instanceTypes[data['InstanceType']] : 'Unknown',
				'Max Players': data['MaxPlayers'] === 0 ? '∞' : data['MaxPlayers'],
				'Description': data['MapDescription0_lang'] !== data['MapDescription1_lang'] ? `<p><b>Alliance:</b> ${data['MapDescription1_lang']}</p><p><b>Horde:</b> ${data['MapDescription0_lang']}</p>` : data['MapDescription0_lang'],
			}
		})
	}

	function fetchData(url) {
		return axios({
			url: url,
			transformResponse: data => {
				return filter(JSON.parse(lzstring.decompressFromUTF16(data)))
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
		<Datatable settings={settings} data={dataex}>
			<thead>
				<th data-key="id">ID</th>
				<th data-key="first_name">First Name</th>
				<th data-key="last_name">Last Name</th>
				<th data-key="email">Email</th>
				<th data-key="ip_address">IP Adress</th>
			</thead>
			<tbody>
				{#each $rows as row}
					<tr>
						<td>{row.id}</td>
						<td>{row.first_name}</td>
						<td>{row.last_name}</td>
						<td>{row.email}</td>
						<td>{row.ip_address}</td>
					</tr>
				{/each}
			</tbody>
		</Datatable>

		<Table style="height: 100%" data={table} />
	{:catch error}
		<Error error={error} />
	{/await}
</Box>