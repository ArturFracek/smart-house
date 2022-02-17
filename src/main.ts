import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n/en.js";

Vue.config.productionTip = false;
Vue.prototype.t = i18n;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
