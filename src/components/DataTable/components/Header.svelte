<!--suppress HtmlFormInputWithoutLabel, JSValidateTypes -->
<style>
	section {
		/*position: -webkit-sticky;*/
		position: sticky;
		top: 0;
		left: 0;
		/*background: inherit;*/
		/*border-bottom: 1px solid #eee;*/
	}

	thead {
		background: #212121;
		/*box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, rgba(0, 0, 0, 0.8) 0 1px 7px 0 inset !important;*/
		box-shadow: 0 3px 3px -1px rgba(0, 0, 0, 0.4) !important;
	}

	th {
		padding: 10px 0;
		text-align: center;
		/*border-bottom: 1px solid #eee;*/
	}

	th.sortable {
		cursor: pointer;
	}

	th.sortable span {
		padding-right: 16px;
		position: relative;
	}

	th.sortable span:before,
	th.sortable span:after {
		border: 4px solid transparent;
		content: '';
		display: block;
		height: 0;
		right: 0;
		top: 50%;
		position: absolute;
		width: 0;
	}

	th.sortable span:before {
		border-bottom-color: #e0e0e0;
		margin-top: -9px;
	}

	th.sortable span:after {
		border-top-color: #e0e0e0;
		margin-top: 1px;
	}

	th.sortable.asc span:before {
		border-bottom-color: #9e9e9e;
	}

	th.sortable.desc span:after {
		border-top-color: #9e9e9e;
	}

	th.filter {
		padding: 0;
		margin: 0;
		background-image: none;
		/*border: 1px solid #fafafa;*/
		box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, rgba(0, 0, 0, 0.8) 0 1px 7px 0 inset !important;
	}

	th.filter input {
		background: transparent;
		padding: 0;
		margin: 0;
		height: 25px;
		width: 100%;
		border: none;
		text-align: center;
		outline: none;
		border-radius: 0;
		font-size: 14px;
		color: var(--accent-color);
	}

	th.filter input::placeholder {
		color: rgba(255, 255, 255, 0.3);
		font-style: italic;
		font-size: 13px;
	}
</style>

<script>
	import { onMount } from 'svelte'

	import { options } from '../stores/options.js'
	import { pageNumber } from '../stores/state.js'
	import { columns } from '../stores/columns.js'
	import { local } from '../stores/filters.js'
	import { data } from '../stores/data.js'
	import { header } from './header.js'

	let theadClassList

	onMount(() => {
		header.getColumns()
		header.removeOriginalThead()
		theadClassList = header.getOrginalHeaderClassList()
	})

	const sort = (element, key) => {
		if ($options.sortable !== true || typeof key === 'undefined') return

		if (element.classList.contains('sortable') && element.classList.contains('asc')) {
			Array.from(element.parentNode.children).forEach(item => item.classList.remove('asc'))
			element.classList.add('desc')
			data.sortDesc(key)
			pageNumber.set(1)
		} else {
			Array.from(element.parentNode.children).forEach(item => item.classList.remove('desc'))
			element.classList.add('asc')
			data.sortAsc(key)
			pageNumber.set(1)
		}

		columns.redraw()
	}

	const filter = (key, value) => {
		pageNumber.set(1)
		local.add(key, value)
		columns.redraw()
	}
</script>

<section class="datatable-thead" class:sortable={$options.sortable === true}>
	<thead class="{theadClassList}">
		<tr>
			{#each $columns as th}
				<th style="width:{th.width}" on:click={(e) => sort(e.target, th.key)} class={th.classList} class:sortable={th.key && $options.sortable === true}>{@html th.html}<span></span></th>
			{/each}
		</tr>
		{#if $options.columnFilter === true}
			<tr>
				{#each $columns as th}
					<th class="filter" style="width:{th.width};height:25px;">
						{#if th.key}
							<input type="text" placeholder="{$options.labels.filter}" class="browser-default" on:input={e => filter(th.key, e.target.value)} />
						{/if}
					</th>
				{/each}
			</tr>
		{/if}
	</thead>
</section>