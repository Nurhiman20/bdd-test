import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  salesOverview: {},
  dataChart: [],
  dateStartIndex: null,
  dateEndIndex: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
