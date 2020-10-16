<script>
	import Link from './WoWDB/Link.svelte'
	import Box from './WoWDB/Box.svelte'
	import BoxTabbed from './WoWDB/BoxTabbed.svelte'
	import TabPanel from './WoWDB/TabPanel.svelte'
	import TabList from './WoWDB/TabList.svelte'
	import Tabs from './WoWDB/Tabs.svelte'
	import Tab from './WoWDB/Tab.svelte'

	export let development = false
	export let route = {}
	export let isFrame = false

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

<header class="header">
	<nav>
		<ul>
			<li><Link to="/">WoWDB</Link></li>
			<li><Link to="/accounts">Accounts</Link></li>
			<li><Link to="/areas">Areas</Link></li>
			<li><Link to="/characters">Characters</Link></li>
			<li><Link to="/classes">Classes</Link></li>
			<li><Link to="/factions">Factions</Link></li>
			<li><Link to="/item-sets">Item Sets</Link></li>
			<li><Link to="/items">Items</Link></li>
			<li><Link to="/maps">Maps</Link></li>
			<li><Link to="/npcs">NPCs</Link></li>
			<li><Link to="/objects">Objects</Link></li>
			<li><Link to="/quests">Quests</Link></li>
			<li><Link to="/races">Races</Link></li>
			<li><Link to="/spells">Spells</Link></li>
		</ul>
	</nav>
</header>

<main>
	<Box>
		<h1><Link to={'#'}>Warrior</Link></h1>
		<p>Warriors are plate-wearing fighters who strive for perfection in armed combat. As warriors deal or take damage, they generate rage, which is used to power their special attacks.|n|nWarriors can choose to focus on a two-handed weapon, dual-wielding or using a sword and shield. Warriors have several abilities that let them move quickly around the battlefield. Their primary stat is Strength, though tanking warriors desire Stamina as well.</p>
	</Box>

	<BoxTabbed tabs={tabs}>
		TEST
	</BoxTabbed>

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

	<footer class="footer">
		<Link to="https://github.com/DeKaDeNcE/WoWDB" target="_blank">WoWDB</Link> · Copyright © 2020 ÐeKaÐeNcE
	</footer>
</main>