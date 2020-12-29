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

export default {
  dataSalesOverview,
  dataTotalSales
}
