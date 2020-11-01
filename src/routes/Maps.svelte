<!--suppress JSValidateTypes, UnnecessaryReturnStatementJS -->
<script>
	import lzstring from 'lz-string'
	import axios from 'axios'

	import Box from '../components/Box.svelte'
	import Table from '../components/Table.svelte'
	import Error from '../components/Error.svelte'
	import ProgressBar from '../components/ProgressBar.svelte'

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

			console.log(table)
		})
	}

	let promise = fetchData('assets/database/map.db')
</script>

<Box style="height: 80vh; padding: 10px;">
	{#await promise}
		<ProgressBar val={val} max={max} />
	{:then data}
		<Table style="height: 100%" data={table} />
	{:catch error}
		<Error error={error} />
	{/await}
</Box>