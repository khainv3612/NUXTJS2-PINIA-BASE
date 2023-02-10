import appStore from '~/store/local/app'

const notificationService = {
  setNotification(data) {
    appStore().setNotification(data)
  },
  setSuccessNotification(msg) {
    appStore().setNotification({
      show: true,
      type: 'success',
      title: '',
      message: msg
    })
  },
  setWarningNotification(msg) {
    appStore().setNotification({
      show: true,
      type: 'warning',
      title: '',
      message: msg
    })
  },
  setErrorNotification(msg) {
    appStore().setNotification({
      show: true,
      type: 'error',
      title: '',
      message: msg
    })
  },
  setInfoNotification(msg) {
    appStore().setNotification({
      show: true,
      type: 'info',
      title: '',
      message: msg
    })
  },
}

export default notificationService

