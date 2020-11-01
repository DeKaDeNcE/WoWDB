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

	const filter = data => {
		return data.map(data => {
			return {
				'#': data['ID'],
				'Faction': data['Name_lang'],
				'Description': data['Description_lang']
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

	let promise = fetchData('assets/database/faction.db')
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