import authStore from '~/store/local/authStore'

const authService = {

  setRoles(data) {
    authStore().setRoles(data)
  },

  setPermissions(data) {
    authStore().setPermissions(data)
  },

  setIsOtpPage(data) {
    authStore().setIsOtpPage(data)
  }
}

export default authService
