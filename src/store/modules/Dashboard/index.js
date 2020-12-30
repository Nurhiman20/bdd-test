import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  salesOverview: {
    order_paid: 0,
    order_cancel: 0,
    order_pending: 0,
    today_sales: 0,
    total_cancel: 0,
    total_pending: 0
  },
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
