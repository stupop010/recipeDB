import Vue from "vue";
import Router from "vue-router";

import RecipeView from "../views/RecipeView.vue";
import HomeView from "../views/HomeView.vue";
import RecipesView from "../views/RecipesView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView";
import Page404 from "../views/Page404.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomeView, props: true },
    { path: "/search/:id", component: RecipesView },
    {
      path: "/recipe/:name",
      name: "recipe",
      component: RecipeView,
      props: route => ({ ...route.params })
    },
    { path: "/login", component: LoginView },
    { path: "/register", component: RegisterView },
    { path: "/*", component: Page404 }
  ]
});

export default router;
