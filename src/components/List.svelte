<!--suppress CssUnknownTarget -->
<style>
	:global(.list) {
		list-style-position: outside;
		list-style-image: url(assets/images/bullet.png);
		padding-left: 20px;
	}

	:global(.list .list) {
		margin-top: 1em;
	}
</style>

<script>
	export let label
</script>

{#if label}
	<h2>{label}</h2>
{/if}
<ul class="list">
	<slot />
</ul>