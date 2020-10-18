<script>
	import Box from '../components/Box.svelte'
	import Error from '../components/Error.svelte'

	export let development = false
	export let route = {}
	export let isFrame = false

	console.log(route)
</script>

<Box>
	<Error />
</Box>