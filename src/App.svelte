<!--suppress ES6UnusedImports, JSUnresolvedVariable, HtmlUnknownTarget, HtmlDeprecatedAttribute -->
<script>
	import {Route, router} from 'tinro'
	import FullScreen from './components/FullScreen.svelte'
	import WoWDB from './components/WoWDB.svelte'
	import Quests from './routes/Quests.svelte'
	import Races from './routes/Races.svelte'
	import Spells from './routes/Spells.svelte'
	import Factions from './routes/Factions.svelte'
	import Link from './components/Link.svelte'
	import Homepage from './routes/Homepage.svelte'
	import Error404 from './routes/Error404.svelte'

	if (window.$sys.browser.isIE) {
		document.documentElement.className += ' engine-trident'
	} else if (window.$sys.browser.isEdgeHTML) {
		document.documentElement.className += ' engine-edgehtml'
	} else if (window.$sys.browser.isChrome || window.$sys.browser.isOperaBlink || window.$sys.browser.isEdgeBlink || window.$sys.browser.isChromium) {
		document.documentElement.className += ' engine-blink'
	} else if (window.$sys.browser.isSafari || window.$sys.browser.isOperaPresto) {
		document.documentElement.className += ' engine-webkit'
	} else if (window.$sys.browser.isFirefox || window.$sys.browser.isPaleMoon || window.$sys.browser.isBasilisk || window.$sys.browser.isKMeleon || window.$sys.browser.isNetscape) {
		document.documentElement.className += ' engine-gecko'
	} else {
		document.documentElement.className += ' engine-other'
	}

	let isFrame = typeof window.$sys.environment.isFrame !== 'undefined' ? window.$sys.environment.isFrame : false
	let development = typeof dev === 'undefined' ? undefined : dev
	let route = typeof $router === 'undefined' ? undefined : $router
	let isFullScreen = false
</script>

<FullScreen let:onToggle on:change={e => isFullScreen = e.detail.isFullScreen}>
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
		<Route path="/*">
			<Route path="/"><Homepage /></Route>
			<!--<Route path="/accounts"><WoWDB /></Route>-->
			<!--<Route path="/areas"><WoWDB /></Route>-->
			<!--<Route path="/characters"><WoWDB /></Route>-->
			<!--<Route path="/classes"><WoWDB /></Route>-->
			<Route path="/factions"><Factions /></Route>
			<!--<Route path="/item-sets"><WoWDB /></Route>-->
			<!--<Route path="/items"><WoWDB /></Route>-->
			<!--<Route path="/maps"><WoWDB /></Route>-->
			<!--<Route path="/npcs"><WoWDB /></Route>-->
			<!--<Route path="/objects"><WoWDB /></Route>-->
			<Route path="/quests"><Quests /></Route>
			<Route path="/races"><Races /></Route>
			<Route path="/spells"><Spells /></Route>
			<Route fallback><Error404 /></Route>
		</Route>
		<footer class="footer">
			<Link to="https://github.com/DeKaDeNcE/WoWDB" target="_blank">WoWDB</Link> · Copyright © 2020 ÐeKaÐeNcE
		</footer>
	</main>
</FullScreen>