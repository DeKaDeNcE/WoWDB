<script>
	import Link from '../components/Link.svelte'
	import Box from '../components/Box.svelte'
	import List from '../components/List.svelte'
	import ListItem from '../components/ListItem.svelte'
	import TabbedBox from '../components/TabbedBox.svelte'
	import Table from '../components/Table.svelte'

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
	<h1>
		<Link to={'#'}>Call of Water</Link>
	</h1>

	<Box aside>
		<h2>Quest Chain</h2>
		<List>
			<ListItem><Link to={'#'}>Call of Water</Link></ListItem>
			<ListItem><Link to={'#'}>Call of Water</Link></ListItem>
			<ListItem><Link to={'#'}>Call of Water</Link></ListItem>
			<ListItem active><Link to={'#'}>Call of Water</Link></ListItem>
			<ListItem><Link to={'#'}>Call of Water</Link></ListItem>
			<ListItem><Link to={'#'}>Call of Water</Link></ListItem>
			<ListItem><Link to={'#'}>Call of Water</Link></ListItem>
		</List>
	</Box>

	<p>Defeat the Corrupt Manifestation of Water and place the Corrupted Manifestation's Bracers along with the Remaining Drops of Purest Water on the Brazier of Everfount in Silverpine Forest.</p>

	<List>
		<ListItem>Quest level: 1</ListItem>
		<ListItem>Provided item: <Link to={'#'}>Remaining Drops of Purest Water</Link></ListItem>
		<ListItem>Spell cast on start: <Link to={'#'}>Remaining Drops of Purest Water</Link></ListItem>
	</List>

	<List label="Prerequisites">
	</List>

	<List label="Objectives">
	</List>

	<List label="Rewards">
	</List>
</Box>

<TabbedBox tabs={tabs}>
	<Table />
</TabbedBox>