<template>
  <div>
    <v-container class="mt-6">
      <!-- header section -->
      <div class="d-flex flex-row justify-space-between">
        <h1>Dashboard</h1>
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
          <!-- profile component -->
          <v-menu
            bottom
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                outlined
                color="#757575"
                class="ml-3"
              >
                <v-icon class="mr-2">mdi-account-circle</v-icon>
                Hi, Angga Nurhiman
                <v-icon class="ml-2">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-list>
                <v-list-item
                  v-for="(item, i) in profileMenu"
                  :key="i"
                  @click="actionItem(item)"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </div>
      <!-- end header section -->

      <!-- body section -->
      <v-row class="mt-8">
        <v-col cols="9">
          <v-row>
            <!-- sales overview -->
            <v-col cols="4" v-for="(sale, index) in titleSales" :key="index">
              <sales-overview
                :title="sale"
                :dataSales="dataSalesOverview[index]"
                :total="dataTotalSales[index]"
              ></sales-overview>
            </v-col>

            <!-- line chart -->
            <v-col cols="12">
              <line-chart :series="dataChart" :categories="xAxisChart" class="mt-3"></line-chart>
            </v-col>
            
            <!-- bar chart -->
            <v-col cols="12">
              <bar-chart :series="dataChart" :categories="xAxisChart" class="mt-6"></bar-chart>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import salesOverview from './components/SalesOverview'
import lineChart from '@/components/lineChart'
import barChart from '@/components/barChart'
import * as moment from 'moment'
import { createNamespacedHelpers } from 'vuex'

const dashboard = createNamespacedHelpers('dashboard')

export default {
  components: {
    salesOverview,
    lineChart,
    barChart
  },
  data: () => ({
    dateRange: ['2019-10-01', '2019-10-10'],
    profileMenu: [
      { title: 'Profile' },
      { title: 'Logout' }
    ],
    titleSales: [
      {
        title: 'Sales',
        icon: 'mdi-currency-usd-circle-outline',
        unit: 'Paid Order',
        color: 'text-green'
      },
      {
        title: 'Cancel',
        icon: 'mdi-refresh',
        unit: 'Orders',
        color: 'text-red'
      },
      {
        title: 'Pending',
        icon: 'mdi-cart-outline',
        unit: 'Orders',
        color: 'text-yellow'
      }
    ],
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
    ...dashboard.mapActions(['getSalesOverview', 'getDataChart']),
    ...dashboard.mapMutations(['SET_FILTER_DATE'])
  },
  created() {
    this.getSalesOverview()
    this.getDataChart()
      .then(result => {
        this.SET_FILTER_DATE(this.dateRangeFormatted)
      })
  },
}
</script>
