<script>
	import Link from '../components/WoWDB/Link.svelte'
	import Box from '../components/WoWDB/Box.svelte'
	import List from '../components/WoWDB/List.svelte'
	import ListItem from '../components/WoWDB/ListItem.svelte'
	import TabbedBox from '../components/WoWDB/TabbedBox.svelte'
	import Table from '../components/WoWDB/Table.svelte'

	import TabPanel from '../components/WoWDB/TabPanel.svelte'
	import TabList from '../components/WoWDB/TabList.svelte'
	import Tabs from '../components/WoWDB/Tabs.svelte'
	import Tab from '../components/WoWDB/Tab.svelte'

	export let development = false
	export let route = {}
	export let isFrame = false

	console.log(route)

	let tabs = [{
		label: 'test1',
		content: 'test1',
		path: '#',
		active: true
	} , {
		label: 'test2',
		content: 'test2',
		path: '#'
	} , {
		label: 'test3',
		content: 'test3',
		path: '#'
	}]
</script>

<Box>
	<h1><Link to={'#'}>Warrior</Link></h1>
	<p>Warriors are plate-wearing fighters who strive for perfection in armed combat. As warriors deal or take damage, they generate rage, which is used to power their special attacks.|n|nWarriors can choose to focus on a two-handed weapon, dual-wielding or using a sword and shield. Warriors have several abilities that let them move quickly around the battlefield. Their primary stat is Strength, though tanking warriors desire Stamina as well.</p>
</Box>

<TabbedBox tabs={tabs}>
	TEST
</TabbedBox>

<Tabs>
	<TabList>
		{#each tabs as tab}
			<Tab>{tab.label}</Tab>
		{/each}
	</TabList>
	{#each tabs as tab}
		<TabPanel>{tab.content}</TabPanel>
	{/each}
</Tabs>