import Vue from 'vue'
import Vuex from 'vuex'

import dashboardModule from './modules/Dashboard'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    dashboard: dashboardModule,
  }
})
