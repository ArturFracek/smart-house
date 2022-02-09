import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: () =>
      import(/* webpackChunkName: "Main" */ "../views/Main.vue"),
  },
  {
    path: "devices/:deviceId",
    name: "deviceDetails",
    component: () =>
      import(/* webpackChunkName: "deviceDetails" */ "../views/Main.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
