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

const getDataChart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    import("@/data/year-end(single-client).json")
      .then(result => {
        commit("SET_DATA_CHART", result.data)
        resolve(true)
      })
      .catch(error => {
        reject(new Error("error"))
      })
  });
}

export default {
  getSalesOverview,
  getDataChart
}
