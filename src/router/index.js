import Vue from 'vue'
import Router from 'vue-router'

import Layout from "@/views/Layout/index.vue";

Vue.use(Router)

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard/index.vue")
      },
      {
        path: "/charts",
        name: "Charts",
        component: () => import("@/views/Charts/index.vue")
      }
    ]
  }
]

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
