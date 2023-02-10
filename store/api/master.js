import { handleApi } from '~/utils/handleApi'

export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  test(context) {
    return new Promise((resolve, reject) => {
      handleApi(resolve, reject, this.$axios.get(`/master-data`), context)
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
