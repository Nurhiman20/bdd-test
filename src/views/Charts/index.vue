<template>
  <div>
    <v-container class="mt-6">
      <!-- header section -->
      <div class="d-flex flex-row justify-space-between">
        <h1>Year End Chart</h1>
        <div class="d-flex flex-row">
          <!-- datepicker component -->
          <v-menu
            v-model="dateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                v-model="dateRangeText"
                label="Date Range"
                prepend-icon="mdi-calendar"
                dense
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="dateRange"
              range
            ></v-date-picker>
          </v-menu>
        </div>
      </div>
      <!-- end header section -->

      <!-- body section -->
      <v-row class="mt-8">
        <v-col cols="12">
          <line-chart :series="dataChart" :categories="xAxisChart" class="mt-3"></line-chart>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import lineChart from '@/components/lineChart'
import * as moment from 'moment'
import { createNamespacedHelpers } from 'vuex'

const dashboard = createNamespacedHelpers('dashboard')

export default {
  components: {
    lineChart
  },
  data: () => ({
    dateRange: ['2019-10-01', '2019-10-10'],
    dateMenu: false
  }),
  computed: {
    dateRangeFormatted() {
      let formatted = []
      this.dateRange.forEach(element => {
        formatted.push(moment(element).format('DD MMM YYYY'))
      });

      return formatted
    },
    dateRangeText() {
      return this.dateRange.join(' to ')
    },
    ...dashboard.mapGetters(['dataSalesOverview', 'dataTotalSales', 'dataChart', 'xAxisChart'])
  },
  watch: {
    dateRangeFormatted(val) {
      if (val.length === 2) {
        this.SET_FILTER_DATE(val)
        this.getDataChart()
      }
    }
  },
  methods: {
    ...dashboard.mapActions(['getDataChart']),
    ...dashboard.mapMutations(['SET_FILTER_DATE'])
  },
  created() {
    this.getDataChart()
      .then(result => {
        this.SET_FILTER_DATE(this.dateRangeFormatted)
      })
  },
}
</script>
