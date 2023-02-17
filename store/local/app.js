import { defineStore } from 'pinia'
import _ from 'lodash'

const appStore = defineStore('app', {
	state: () => ({
		notification: {
			show: false,
			type: '',
			title: '',
			message: '',
		},
		loading: false,
		language: false,
	}),
	getters: {
		getLoading: (state) => state.loading,
		getNotification: (state) => state.notification,
		getLanguage: (state) => state.language,
		getToast: (state) => state.toast,
		getErrorCode: (state) => state.errorCode,
		getActivePlatform: (state) => state.activePlatform,
	},
	actions: {
		setNotification(notification) {
			this.notification = _.cloneDeep(notification)
		},
		setLoading(data) {
			this.loading = data
		},
		setLanguage(data) {
			this.language = data
		},
	},
})
export default appStore
