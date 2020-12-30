// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import HighchartsVue from 'highcharts-vue'
import './assets/scss/main.scss'
import store from './store';


Vue.use(Vuex)
// Vue.use(VueAxios, axios)
Vue.use(HighchartsVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
})
