const SET_SALES_OVERVIEW = (state, payload) => {
  state.salesOverview = payload
}

const SET_DATA_CHART = (state, payload) => {
  state.dataChart = payload.data[0].data
}

const SET_FILTER_DATE = (state, payload) => {
  let xAxis = []
  state.dataChart.forEach(item => {
    xAxis.push(item[0])
  });

  state.dateStartIndex = xAxis.indexOf(payload[0])
  state.dateEndIndex = xAxis.indexOf(payload[1])
}

export default {
  SET_SALES_OVERVIEW,
  SET_DATA_CHART,
  SET_FILTER_DATE
}
