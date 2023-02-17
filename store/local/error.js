import { defineStore } from 'pinia'
import _ from 'lodash'
import { CODE_200 } from '~/constants'

const errorStore = defineStore('error', {
	state: () => ({
		error: { show: false, code: CODE_200, message: '', title: '', path: '' },
	}),
	getters: {
		getError: (state) => state.error,
	},
	actions: {
		setError(error) {
			this.error = _.cloneDeep(error)
		},
	},
})
export default errorStore
