<!--suppress JSValidateTypes -->
<script>
	import { onMount } from 'svelte'
	import axios from 'axios'

	import Box from '../components/Box.svelte'
	import Table from '../components/Table.svelte'
	import FullScreen from '../components/FullScreen.svelte'
	import Error from '../components/Error.svelte'

	export let development = false
	export let route = {}
	export let isFrame = false

	let table
	let isFullScreen = false

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

	onMount(async () => {
		table = axios('assets/database/chrraces.json')
	})
</script>

<FullScreen let:onToggle on:change={e => isFullScreen = e.detail.isFullScreen}>
	<Box style="height: 80vh; overflow: auto;">
		{#await table}
			<p>...waiting</p>
		{:then data}
		<!--<Table style="height: 100%" columns={Object.keys(data[0])} rows={filter(data)} />-->
		{:catch error}
			<Error error={error} />
		{/await}
	</Box>
</FullScreen>