<!--suppress HtmlUnknownTarget -->
<style>
	:global(a) {
		color: #cca300;
		text-decoration: none;
		cursor: pointer
	}

	:global(a:active, a:focus, a:hover) {
		text-decoration: underline;
		color: #fc0
	}
</style>

<script>
	export let to = 'javascript:'
</script>

<a href={to}><slot/></a>