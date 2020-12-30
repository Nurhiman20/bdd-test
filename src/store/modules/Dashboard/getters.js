const dataSalesOverview = (state) => {
  let sales = []
  sales.push(state.salesOverview.order_paid)
  sales.push(state.salesOverview.order_cancel)
  sales.push(state.salesOverview.order_pending)

  return sales
}

const dataTotalSales = (state) => {
  let total = []
  total.push(state.salesOverview.today_sales)
  total.push(state.salesOverview.total_cancel)
  total.push(state.salesOverview.total_pending)

  return total
}

const dataChart = (state) => {
  // make series array base on highchart format
  let series = [{
    data: []
  }]

  state.dataChart.forEach(item => {
    series[0].data.push(item[1])
  });

  // filter by date
  let filteredSeries = [{
    data: []
  }]

  for (let index = state.dateStartIndex; index < state.dateEndIndex + 1; index++) {
    filteredSeries[0].data.push(state.dataChart[index])
  }

  return filteredSeries
}

const xAxisChart = (state) => {
  // make xAxis array base on highchart format
  let xAxis = []
  state.dataChart.forEach(item => {
    xAxis.push(item[0])
  });

  // filter by date
  let filteredX = []

  for (let index = state.dateStartIndex; index < state.dateEndIndex + 1; index++) {
    filteredX.push(xAxis[index])
  }

  return filteredX
}

export default {
  dataSalesOverview,
  dataTotalSales,
  dataChart,
  xAxisChart
}
