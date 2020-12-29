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
              <line-chart :series="dataAkhirTahun" class=""></line-chart>
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
import { createNamespacedHelpers } from 'vuex'

const dashboard = createNamespacedHelpers('dashboard')

export default {
  components: {
    salesOverview,
    lineChart
  },
  data: () => ({
    dataAkhirTahun: [
      { data: [1,2,3], color: '#FEB228' }, { data: [3,4,5], color: '#3480FA' }
    ],
    dateRange: ['2019-09-10', '2019-09-20'],
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
    dataSales: ['29.100.134', '2.721.000', '1.306.000'],
    dateMenu: false
  }),
  computed: {
    dateRangeText() {
      return this.dateRange.join(' to ')
    },
    ...dashboard.mapGetters(['dataSalesOverview', 'dataTotalSales'])
  },
  methods: {
    ...dashboard.mapActions(['getSalesOverview'])
  },
  created() {
    this.getSalesOverview()
  },
}
</script>
