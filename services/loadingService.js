import appStore from '~/store/local/app'

const loadingService = {
  startLoading() {
    appStore().setLoading(true)
  },

  stopLoading() {
    appStore().setLoading(false)
  }
}

export default loadingService
