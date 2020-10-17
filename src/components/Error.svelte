<style>
	.error {
		display: block;
		position: relative;
		padding: 20px;
		border-radius: 5px;
		background: #820000;
		border: 1px solid #f00;
		color: #fff;
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
	export let error = {
		message: 'Cannot read property \'data\' of null',
		stack: 'Error: GraphQL error: Cannot read property \'data\' of null\n' +
			'at new e (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:17:179795)\n' +
			'at e.currentResult (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:17:181631)\n' +
			'at e.r.getQueryResult (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:17:152946)\n' +
			'at e.render (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:17:154983)\n' +
			'at d (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:1772:43313)\n' +
			'at beginWork (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:1772:51350)\n' +
			'at o (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:1772:55239)\n' +
			'at i (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:1772:55518)\n' +
			'at E (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:1772:58461)\n' +
			'at _ (https://spelunkerdb.com/spelunker-c10910b3c6a367e9d8eb.js:1772:58004)'
	}
</script>

<div class="error">
	<b>{error.message}</b>
	<p>GraphQL errors may be caused by inaccuracies in the database and should be reported to the applicable database vendor.</p>
	<p>Please report any other errors by opening an issue on the project issue tracker.</p>
	<p>Stacktrace:</p>
	<pre class="stack">{error.stack}</pre>
</div>