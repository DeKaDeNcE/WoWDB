<!--suppress JSValidateTypes -->
<script>
	import { onMount } from 'svelte'
	import axios from 'axios'

	import Link from '../components/Link.svelte'
	import Box from '../components/Box.svelte'
	import Table from '../components/Table.svelte'
	import FullScreen from '../components/FullScreen.svelte'
	import Error from '../components/Error.svelte'

	export let development = false
	export let route = {}
	export let isFrame = false

	let table = [{}]
	let isFullScreen = false

	const fetch = async (url) => {
		const response = await axios(url)
		return await response.data
	}

	onMount(async () => {
		table = await fetch('assets/database/faction.json')
		table = table.map(data => {
			return {
				'#': data['ID'],
				'Faction': data['Name_lang'],
				'Description': data['Description_lang']
			}
		})
	})
</script>

<FullScreen let:onToggle on:change={e => isFullScreen = e.detail.isFullScreen}>
	<Box style="height: 80vh; overflow: auto;">
		{#await table}
			<p>...waiting</p>
		{:then data}
			<Table style="height: 100%" columns={Object.keys(data[0])} rows={data} />
		{:catch error}
			<Error error={error} />
		{/await}
	</Box>
</FullScreen>