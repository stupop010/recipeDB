import Vue from "vue";
import Router from "vue-router";

import Recipe from "../components/Recipes";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
      props: true
    },
    {
      path: "/search/:id",
      component: () => import("../components/Recipes.vue")
    },
    {
      path: "/search/name/data",
      name: "single-recipe",
      component: Recipe
    },
    {
      path: "/search/name",
      name: "recipe",
      component: Recipe
    }
  ]
});

export default router;
