<!--suppress CssUnknownTarget, CssUnresolvedCustomProperty, CssInvalidPropertyValue, CssUnusedSymbol, ES6UnusedImports, JSUnfilteredForInLoop -->
<script>
	import lzstring from 'lz-string'
	import axios from 'axios'
	import { onMount, onDestroy } from 'svelte'
	import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap'
	import FullScreen from './FullScreen.svelte'
	import Image3D from './Image3D.svelte'
	import Accordion from './Accordion'

	export let development = false
	export let route = {}
	export let isFrame = false

	let database = {
		companies: [],
		platforms: []
	}

	let wallpapers = {
		data: {
			children: []
		}
	}

	let datafiles = []
	let entries = []

	let isFullScreen = false
	let isBackgroundDropdownOpen = false
	let showSettings = true
	let showDatafiles = false
	let showEntries = false
	let showGrid = false
	let showEmulator = false

	const fetch = async (url) => {
		const response = await axios(url)
		return await response.data
	}

	onMount(async () => {
	})

	function onToggleEl(el) {
		switch (el) {
			case 'showDatafiles':
				showGrid = false
				showSettings = false
				showEntries = false
				showDatafiles = !showDatafiles
				showEmulator = false
				break;
			case 'showEntries':
				showSettings = false
				showEntries = !showEntries
				showDatafiles = false
				showEmulator = false
				break;
			case 'showGrid':
				showGrid = !showGrid
				break;
			case 'showSettings':
				showSettings = !showSettings
				showEntries = false
				showDatafiles = false
				showEmulator = false
				break;
		}
	}

	function onSliderInit(node) {
		if (window.$sys.browser.isIE) {
		} else if (window.$sys.browser.isEdgeHTML) {
		} else if (window.$sys.browser.isChrome || window.$sys.browser.isOperaBlink || window.$sys.browser.isEdgeBlink || window.$sys.browser.isChromium) {
			node.style.background = 'linear-gradient(to right, #00c874 0%, #00c874 ' + ((node.value - node.min) / (node.max - node.min) * 100) + '%, #000 ' + ((node.value - node.min) / (node.max - node.min) * 100) + '%, #000 100%)'
		} else if (window.$sys.browser.isSafari || window.$sys.browser.isOperaPresto) {
			node.style.background = 'linear-gradient(to right, #00c874 0%, #00c874 ' + ((node.value - node.min) / (node.max - node.min) * 100) + '%, #000 ' + ((node.value - node.min) / (node.max - node.min) * 100) + '%, #000 100%)'
		} else if (window.$sys.browser.isFirefox || window.$sys.browser.isPaleMoon || window.$sys.browser.isBasilisk || window.$sys.browser.isKMeleon || window.$sys.browser.isNetscape) {
		} else {
		}
	}

	function onSliderInput() {
		if (window.$sys.browser.isIE) {
		} else if (window.$sys.browser.isEdgeHTML) {
		} else if (window.$sys.browser.isChrome || window.$sys.browser.isOperaBlink || window.$sys.browser.isEdgeBlink || window.$sys.browser.isChromium) {
			this.style.background = 'linear-gradient(to right, #00c874 0%, #00c874 ' + ((this.value - this.min) / (this.max - this.min) * 100) + '%, #000 ' + ((this.value - this.min) / (this.max - this.min) * 100) + '%, #000 100%)'
		} else if (window.$sys.browser.isSafari || window.$sys.browser.isOperaPresto) {
			this.style.background = 'linear-gradient(to right, #00c874 0%, #00c874 ' + ((this.value - this.min) / (this.max - this.min) * 100) + '%, #000 ' + ((this.value - this.min) / (this.max - this.min) * 100) + '%, #000 100%)'
		} else if (window.$sys.browser.isFirefox || window.$sys.browser.isPaleMoon || window.$sys.browser.isBasilisk || window.$sys.browser.isKMeleon || window.$sys.browser.isNetscape) {
		} else {
		}
	}
</script>

<!--
<header class="titlebar">
	<div class="drag-region">
		<div class="window-title"><span>ÐeKaÐeNcE Launcher 0.0.1</span></div>
		<div class="window-controls">
		<div class="minimize button"><span></span></div>
		<div class="maximize button"><span></span></div>
		<div class="restore button"><span></span></div>
		<div class="close button"><span></span></div>
		</div>
	</div>
</header>
-->

<FullScreen let:onToggle on:change={e => isFullScreen = e.detail.isFullScreen}>
	<main class="content">
		<div class="header blur">
			<div class="item row-1 column-1">
				<!--suppress HtmlUnknownTarget -->
				<!--<img class="icon" src="assets/images/logos/emuarchive/emuarchive-logo.svg" alt=""/>-->
			</div>
			<div class="item row-1 column-2"><span>WoW Database</span></div>
			<div class="item row-1 column-3">
				<div class="spacer"></div>
				<div class="spacer"></div>
				<div class="spacer"></div>
				<!--suppress HtmlUnknownTarget -->
				<!--<img class="icon" src="assets/images/logos/emuarchive/emuarchive-logo.svg" alt=""/>-->
				<!--<div class="button minimize"></div>-->
				<!--<div class="button maximize"></div>-->
				<!--<div class="button restore"></div>-->
				<!--<div class="button exit"></div>-->
			</div>
			<div class="item row-2 column-1">
				<!--suppress HtmlUnknownTarget -->
				<!--<img class="icon" src="assets/images/logos/emuarchive/emuarchive-logo.svg" alt=""/>-->
			</div>
			<div class="item row-2 column-2"><span>News</span><span class="selected">Archive</span><span>Support</span><span>About</span></div>
			<div class="item row-2 column-3">
				<div class="spacer"></div>
				{#if !isFrame}
					<!--suppress JSUnresolvedVariable -->
					<div class="button {isFullScreen ? 'unfullscreen' : 'fullscreen'}" on:click={onToggle}></div>
				{:else}
					<div class="spacer"></div>
				{/if}
				<div class="button {showGrid ? 'list' : 'grid'}" on:click={() => onToggleEl('showGrid')}></div>
				<div class="button settings" on:click={() => onToggleEl('showSettings')}>
					<!--suppress HtmlUnknownTarget -->
					<img class="icon" src="assets/images/buttons/settings.svg" alt=""/>
				</div>
			</div>
		</div>

		<div class="game-container">
			<div class="game-list blur">
				<div class="list-container">
					{#await database}
						<p>...waiting</p>
					{:then data}
						<!--suppress JSUnresolvedVariable -->
						<Accordion>
						{#each data.platforms as platform }
							<!--suppress SvelteUnresolvedComponent, JSUnresolvedVariable -->
							<Accordion.Section title={platform.name}>
								{#if platform.systems}
									{#each platform.systems as system }
										{#if !system.hidden && system.datafiles && system.datafiles.length > 0}
											<a class="block" href="javascript:">{system.name}</a>
										{/if}
									{/each}
								{:else}
									Empty
								{/if}
							</Accordion.Section>
						{/each}
						</Accordion>
					{:catch error}
						<p>An error occurred!</p>
					{/await}
				</div>
			</div>
			<div class="game-details blur">
				{#if showSettings}
					<div class="list-container">
						<p><span class="background-selector">Background23:</span>
							<Dropdown isOpen={isBackgroundDropdownOpen} toggle={() => (isBackgroundDropdownOpen = !isBackgroundDropdownOpen)}>
								<DropdownToggle caret>Lion</DropdownToggle>
								<DropdownMenu>
									<DropdownItem header>Default</DropdownItem>
									<DropdownItem>Lion</DropdownItem>
									{#if wallpapers.data.children.length > 0}
										{#each wallpapers.data.children as wallpaper}
											<DropdownItem header>{wallpaper.name}</DropdownItem>
											{#each wallpaper.children as wallpaper}
												<DropdownItem>{wallpaper.name}</DropdownItem>
											{/each}
										{/each}
									{/if}
								</DropdownMenu>
							</Dropdown>
						</p>
						<div class="background-zoom">Background Zoom:</div>
						<!--suppress HtmlFormInputWithoutLabel -->
						<input class="slider" type="range" min="10" max="60" value="50" use:onSliderInit on:input={onSliderInput}/>

						<div class="background-blur">Background Blur:</div>
						<!--suppress HtmlFormInputWithoutLabel -->
						<input class="slider" type="range" min="1" max="100" value="50" use:onSliderInit on:input={onSliderInput}/>

						<div class="background-brightness">Background Brightness:</div>
						<!--suppress HtmlFormInputWithoutLabel -->
						<input class="slider" type="range" min="1" max="100" value="50" use:onSliderInit on:input={onSliderInput}/>

						<div class="background-opacity">Panel Opacity:</div>
						<!--suppress HtmlFormInputWithoutLabel -->
						<input class="slider" type="range" min="1" max="100" value="50" use:onSliderInit on:input={onSliderInput}/>
					</div>
				{:else if showDatafiles && datafiles.length > 0}
					<div class="list-container">
						{#each datafiles as datafile}
							{#if showGrid}
								<Image3D url="javascript:" image="assets/images/wallpapers/lion.jpg" name={datafile} />
							{:else}
								<a class="block" href="javascript:">{datafile}</a>
							{/if}
						{/each}
					</div>
				{:else if showEntries && entries.length > 0}
					<div class="list-container">
						{#each entries as entry}
							{#if showGrid}
								<Image3D url="javascript:" image="assets/images/wallpapers/lion.jpg" name={entry.name} />
							{:else}
								<a class="block" href="javascript:">{entry.name}</a>
							{/if}
						{/each}
					</div>
				{:else if showEmulator}
					<div class="iframe-wrapper">
						<!--suppress HtmlUnknownTarget -->
						<iframe class="iframe" title="c64" src="assets/emulators/c64_tiny8bit/index.html"></iframe>
					</div>
				{/if}
			</div>
		</div>
	</main>
</FullScreen>