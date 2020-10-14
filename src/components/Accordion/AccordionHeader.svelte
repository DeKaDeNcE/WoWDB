<!--suppress CssUnusedSymbol, CssUnresolvedCustomProperty -->
<style>
	.accordion-section__header {
		border-radius: 5px;
		border: var(--border-color) solid var(--border-width);
		/*background-color: #f8fafe;*/
		margin-bottom: 6px;
		padding-left: 10px;
		padding-right: 10px;
		/*padding: 12px;*/
		cursor: pointer;
	}

	.accordion-section__header span {
		float: right;
	}
</style>

<script>
	export let title = undefined;
	export let open = undefined;
	export let className = '';
</script>

<div on:click class={`accordion-section__header ${className}`}>
	{title}
	{#if open}
		<span>▼</span>
	{:else}
		<span>►</span>
	{/if}
</div>