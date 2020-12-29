import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const getSalesOverview = ({ commit }) => {
  return new Promise((resolve, reject) => {
    import("@/data/sales-overview.json")
      .then(result => {
        commit("SET_SALES_OVERVIEW", result.data)
        resolve(true)
      })
      .catch(error => {
        reject(new Error("error"))
      })
  });
}

export default {
  getSalesOverview
}
