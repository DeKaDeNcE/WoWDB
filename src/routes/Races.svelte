<!--suppress JSValidateTypes, UnnecessaryReturnStatementJS -->
<script>
	import lzstring from 'lz-string'
	import axios from 'axios'

	import Box from '../components/Box.svelte'
	import Table from '../components/Table.svelte'
	import Error from '../components/Error.svelte'

	let table = [{}]

	const filter = data => {
		return data.map(data => {
			return {
				'#': data['ID'],
				'Race': data['Name_lang'],
				'Starting Level': data['StartingLevel'],
				'Faction': data['FactionID']
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
				console.log(e)
			}
		}).then(response => {
			table = response.data
		})
	}

	let promise = fetchData('assets/database/chrraces.db')
</script>

<Box style="height: 80vh; padding: 10px;">
	{#await promise}
		<p>...waiting</p>
	{:then data}
		<Table style="height: 100%" data={table} />
	{:catch error}
		<Error error={error} />
	{/await}
</Box>