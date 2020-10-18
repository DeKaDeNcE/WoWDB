<style>
	.error {
		display: block;
		position: relative;
		padding: 20px;
		border-radius: 5px;
		background: #820000;
		border: 1px solid #f00;
		color: #fff;
		overflow-x: auto;
	}

	.error pre.stack {
		white-space: pre-line;
		padding-left: 20px;
		color: #ccc;
	}

	.error > *:last-child {
		margin-bottom: 0;
	}
</style>

<script>
	import Link from '../components/Link.svelte'

	export let error = {
		message: 'Cannot read property \'data\' of null',
		stack: 'Error: GraphQL error: Cannot read property \'data\' of null\n' +
			'at new e (' + location.protocol + '//' + location.host + '/assets/js/main.js:17:179795)\n' +
			'at e.currentResult (' + location.protocol + '//' + location.host + '/assets/js/main.js:17:181631)\n' +
			'at e.r.getQueryResult (' + location.protocol + '/' + location.host + '/assets/js/main.js:17:152946)\n' +
			'at e.render (' + location.protocol + '//' + location.host + '/assets/js/main.js:17:154983)\n' +
			'at d (' + location.protocol + '//' + location.host + '/assets/js/main.js:1772:43313)\n' +
			'at beginWork (' + location.protocol + '//' + location.host + '/assets/js/main.js:1772:51350)\n' +
			'at o (' + location.protocol + '//' + location.host + '/assets/js/main.js:1772:55239)\n' +
			'at i (' + location.protocol + '//' + location.host + '/assets/js/main.js:1772:55518)\n' +
			'at E (' + location.protocol + '//' + location.host + '/assets/js/mainjs:1772:58461)\n' +
			'at _ (' + location.protocol + '//' + location.host + '/assets/js/main.js:1772:58004)'
	}
</script>

<div class="error">
	<b>{error.message}</b>
	<!--<p>GraphQL errors may be caused by inaccuracies in the database and should be reported to the applicable database vendor.</p>-->
	<p>Please report any other errors by opening an issue on the project <Link to={'https://github.com/DeKaDeNcE/WoWDB/issues'}>issue tracker</Link>.</p>
	<p>Stacktrace:</p>
	<pre class="stack">{error.stack}</pre>
</div>