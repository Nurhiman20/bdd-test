<template>
  <v-app>
    <v-navigation-drawer expand-on-hover app>
      <v-list nav dense>
        <v-list-item :to="menu.url" link v-for="(menu, i) in menus" :key="i">
          <v-list-item-action>
            <v-icon color="#C3CAD8">{{ menu.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    menus: [
      {
        icon: "mdi-home",
        title: "Dashboard",
        url: "/dashboard"
      },
      {
        icon: "mdi-chart-line",
        title: "Chart",
        url: "/charts"
      }
    ]
  })
};
</script>
