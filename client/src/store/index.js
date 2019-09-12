import Vuex from "vuex";
import Vue from "vue";
import recipes from "./modules/recipes";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    recipes
  }
});
