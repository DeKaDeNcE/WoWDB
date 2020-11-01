<!--suppress HtmlFormInputWithoutLabel -->
<style>
	input {
		border: 1px solid rgba(255, 204, 0, 0.65);
		border-radius: 3px;
		outline: none;
		padding: 0 8px;
		line-height: 24px;
		margin: 0;
		height: 24px;
		background: transparent;
		width: 176px;
		transition: all, 0.1s;
		color: var(--accent-color);
	}

	input:focus {
		border-color: var(--accent-color);
	}

	input::placeholder {
		font-style: italic;
		color: rgba(255, 255, 255, 0.3);
		line-height: 24px;
	}
</style>

<script>
	import { options } from './stores/options.js'
	import { pageNumber } from './stores/state.js'
	import { columns } from './stores/columns.js'
	import { global } from './stores/filters.js'

	export let ref = ''
	export let classList = ''

	const search = (value) => {
		pageNumber.set(1)
		global.set(value)
		columns.redraw()
	}
</script>

<input class="dt-search-input {classList}" type="text" placeholder="{$options.labels.search}" on:input={e => search(e.target.value)} {ref} />