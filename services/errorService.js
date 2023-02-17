import errorStore from '~/store/local/error'

const errorService = {
	setError(data) {
		errorStore().setError(data)
	},
}

export default errorService
