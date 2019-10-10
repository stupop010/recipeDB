import Vuex from "vuex";
import Vue from "vue";
import recipes from "./modules/recipes";
import auth from "./modules/auth";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    recipes,
    auth
  }
});
