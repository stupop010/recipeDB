import Vue from "vue";
import App from "./App.vue";
import router from "./routes/routes";
import store from "./store";
import VueRouter from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAngleDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
