import Vue from "vue";
import App from "./App.vue";
import router from "./routes/routes";
import store from "./store";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faTimes,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

library.add(faAngleRight, faTimes, faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
