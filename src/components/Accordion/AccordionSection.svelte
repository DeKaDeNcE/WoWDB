<script context="module">
	export const ACCORDION = {};
</script>

<!--suppress ES6UnusedImports, UnnecessaryLabelJS, JSUnusedAssignment -->
<script>
	import { getContext } from 'svelte'
	import { slide } from 'svelte/transition'
	import AccordionHeader from './AccordionHeader.svelte'

	export let title = undefined
	export let open = false
	export let className = ''
	export let key

	$: key = key || title

	const { handleChange, selected } = getContext(ACCORDION)

	$: open = $selected === key
</script>

<li class={`accordion-section ${className}`}>
	<AccordionHeader on:click={handleChange.bind(null, key)} {title} {open}/>
	{#if open}
		<div transition:slide style="text-align: center;">
			<slot/>
		</div>
	{/if}
</li>