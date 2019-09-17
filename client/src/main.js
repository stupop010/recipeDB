import Vue from "vue";
import App from "./App.vue";
import router from "./routes/routes";
import store from "./store";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
