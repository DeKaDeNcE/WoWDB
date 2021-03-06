import { columns } from '../stores/columns.js'

export const header = {
	getColumns: () => {
		const columnList = []

		let i = 0

		document.querySelectorAll('.datatable table thead th').forEach(th => {
			columnList.push({
				index: i,
				html: th.innerHTML,
				key: header.getKey(th.dataset.key),
				sort: null,
				classList: th.classList,
			})
			i++
		})

		columns.set(columnList)
	},
	getKey: key => {
		if (key && key.indexOf('=>') > 0) {
			return Function(`'use strict';return (${key})`)()
		}

		return x => x[key]
	},
	removeOriginalThead: () => {
		const elem = document.querySelector('.datatable table thead')
		const originHeight = elem.getBoundingClientRect().height
		// noinspection JSUnresolvedVariable
		elem.parentNode.style.marginTop = '-' + originHeight + 'px'
		elem.style.visibility = 'hidden'
	},
	getOrginalHeaderClassList: () => document.querySelector('.datatable table thead').classList
}