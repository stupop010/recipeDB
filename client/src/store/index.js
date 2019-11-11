import Vuex from "vuex";
import Vue from "vue";
import recipes from "./modules/recipes";
import auth from "./modules/auth";
import favourties from "./modules/favourites";
import error from "./modules/error";
import profile from "./modules/profile";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    recipes,
    auth,
    favourties,
    error,
    profile
  }
});
