import Vue from "vue";
import Router from "vue-router";

import RecipeView from "../views/RecipeView.vue";
import HomeView from "../views/HomeView.vue";
import RecipesView from "../views/RecipesView.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomeView,
      props: true
    },
    {
      path: "/search/:id",
      component: RecipesView
    },
    {
      path: "/recipe/:name",
      name: "recipe",
      component: RecipeView,
      props: route => ({ ...route.params })
    }
  ]
});

export default router;
