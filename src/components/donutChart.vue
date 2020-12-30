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
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Awarness',
              y: 61.41,
              color: '#3480FA'
            }, 
            {
              name: 'Traffics',
              y: 11.84,
              color: '#FF5831'
            }, 
            {
              name: 'Conversions',
              y: 10.85,
              color: '#FEB32E'
            }
          ]
        }],
        title: '',
        credits: {
          enabled: false
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
      }
    }
  }
}
</script>
