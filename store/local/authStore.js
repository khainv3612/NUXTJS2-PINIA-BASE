import { defineStore } from 'pinia'

const authStore = defineStore('auth', {
  state: () => ({
    roles: [],
    permissions: [],
    openModalLoginState: true,
    isOtpPage: false,
  }),
  getters: {
    getRoles: (state) => state.roles,
    getPermissions: (state) => state.permissions,
    getOpenModalLoginState: (state) => state.openModalLoginState,
    getIsOtpPage: (state) => state.isOtpPage,
  },
  actions: {
    setRoles(roles) {
      this.roles = roles
    },
    setPermissions(permissions) {
      this.permissions = permissions
    },
    setIsOtpPage(isOtpPage) {
      this.isOtpPage = isOtpPage
    }
  },
})
export default authStore
