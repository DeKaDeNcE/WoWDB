<!--suppress JSValidateTypes, UnnecessaryReturnStatementJS -->
<script>
	import Box from '../components/Box.svelte'
	import Table from '../components/Table.svelte'
	import Error from '../components/Error.svelte'

	let promise = fetchData('assets/database/chrraces.json')
	let table = [{}]

	async function fetchData(url) {
		const res = await fetch(url)
		const json = await res.json()

		if (res.ok) {
			table = filter(json)
			return json
		} else {
			throw new Error(json)
		}
	}

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