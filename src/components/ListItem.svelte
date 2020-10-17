<!--suppress CssUnknownTarget -->
<style>
	:global(.list .item) {
		padding: 0.5em 0;
	}

	:global(.list .item.current) {
		list-style-image: url(assets/images/bullet-current.png);
	}

	:global(.list .item:last-child) {
		padding-bottom: 0.25em;
	}
</style>

<script>
	export let active
</script>

<li class="item {active ? 'current' : ''}">
	<slot />
</li>