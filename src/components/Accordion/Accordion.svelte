<!--suppress CssUnusedSymbol -->
<style>
	.accordion {
		width: 100%;
		height: 100%;
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>

<!--suppress ES6CheckImport, JSUnresolvedVariable, UnnecessaryLabelJS -->
<script>
	import { createEventDispatcher, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { ACCORDION } from './AccordionSection.svelte'

	export let value = undefined
	export let className = ''

	const dispatch = createEventDispatcher()

	$: isControlled = typeof value !== 'undefined'
	const selected = writable(null);

	$: if (isControlled) {
		selected.set(value);
	}

	const handleChange = (newValue) => {
		if (!isControlled) {
			selected.set(newValue);
		}

		dispatch('change', newValue);
	}

	setContext(ACCORDION, {
		handleChange,
		selected
	});
</script>

<ul class={`accordion ${className}`}>
	<slot/>
</ul>