import { writable, derived } from 'svelte/store'
import { options } from './options.js'
import { pageNumber, rowCount } from './state.js'
import { global, local } from './filters.js'

const createData = () => {
	const { subscribe, set, update } = writable([])
	// noinspection DuplicatedCode
	return {
		subscribe, set,
		sortAsc: key => update(store => {
			try {
				store.sort((a, b) => key(b).localeCompare(key(a)))
			} catch (e) {
				return store.sort((a, b) => parseFloat(key(b)) - parseFloat(key(a)))
			}

			return store.sort((a, b) => key(b).localeCompare(key(a)))
		}),
		sortDesc: key => update(store => {
			try {
				store.sort((a, b) => key(a).localeCompare(key(b)))
			} catch (e) {
				return store.sort((a, b) => parseFloat(key(a)) - parseFloat(key(b)))
			}

			return store.sort((a, b) => key(a).localeCompare(key(b)))
		})
	}
}
export const data = createData()

export const filtered = derived([data, global, local], ([$data, $global, $local]) => {
		if ($global) {
			// noinspection JSUnresolvedFunction
			$data = $data.filter(item => {
				return Object.keys(item).some(k => {
					// noinspection JSUnresolvedFunction
					return item[k].toString().toLowerCase().indexOf($global.toString().toLowerCase()) > -1
				})
			})
		}

		// noinspection JSUnresolvedVariable
		if ($local.length > 0) {
			// noinspection JSUnresolvedFunction
			$local.forEach(filter => $data = $data.filter(item => filter.key(item).toString().toLowerCase().indexOf(filter.value.toString().toLowerCase()) > -1))
		}

		// noinspection JSUnresolvedVariable
		rowCount.set($data.length)

		return $data
	}
)

export const rows = derived([filtered, options, pageNumber], ([$filtered, $options, $pageNumber]) => {
	// noinspection JSUnresolvedVariable
	if (!$options.pagination) {
		return $filtered
	}

	return $filtered.slice(($pageNumber - 1) * $options.rowPerPage, $pageNumber * $options.rowPerPage)
})