<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'

export default {
  props: ['series', 'categories'],
  components: {
    highcharts: Chart
  },
  computed: {
    chartOptions() {
      return {
        series: this.series,
        title: '',
        xAxis: { categories: this.categories },
        yAxis: {
          title: {
            text: ''
          }
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        }
      }
    }
  }
}
</script>
