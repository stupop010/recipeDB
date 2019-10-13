import Vue from "vue";
import Router from "vue-router";

import RecipeView from "../views/RecipeView.vue";
import HomeView from "../views/HomeView.vue";
import RecipesView from "../views/RecipesView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView";
import Page404 from "../views/Page404.vue";
import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomeView },
    { path: "/search/:id", component: RecipesView },
    {
      path: "/recipe/:name",
      name: "recipe",
      component: RecipeView,
      props: route => ({ ...route.params })
    },
    { path: "/login", component: LoginView, meta: { isVistoring: true } },
    { path: "/register", component: RegisterView, meta: { isVistoring: true } },
    { path: "*", component: Page404 }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuth) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.isVistoring)) {
    if (store.getters.isAuth) {
      next({
        path: "/login"
      });
    }
  }
  next();
});
export default router;
