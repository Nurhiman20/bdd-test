<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'

export default {
  props: ['series'],
  components: {
    highcharts: Chart
  },
  computed: {
    chartOptions() {
      return {
        series: this.series,
        title: '',
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
