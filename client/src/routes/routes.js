import Vue from "vue";
import Router from "vue-router";

import Recipe from "../components/recipe/Recipe.vue";

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
      path: "/recipe/:name",
      name: "recipe",
      component: Recipe,
      props: route => ({ ...route.params })
    }
  ]
});

export default router;
