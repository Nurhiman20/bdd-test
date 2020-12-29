import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  salesOverview: {}
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}