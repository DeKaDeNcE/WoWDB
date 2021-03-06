import { writable } from 'svelte/store'
import { options } from './options.js'

export const rowCount = writable(0)

const createPageNumber = () => {
	const { subscribe, update } = writable(1)

	return {
		subscribe, update,
		set: number => update(store => {
			let $rowPerPage, $rowCount

			rowCount.subscribe(store => $rowCount = store)
			options.subscribe(store => $rowPerPage = store.rowPerPage)

			// noinspection JSUnusedAssignment
			if (number >= 1 && number <= Math.ceil($rowCount / $rowPerPage)) {
				store = parseInt(number)
			}

			return store
		})
	}
}

export const pageNumber = createPageNumber()