<template>
  <Layout>
    <div class="width">
      <Loading v-if="isLoading" />
      <div class="recipe-container">
        <div class="recipe" v-for="(recipe, index) in allRecipes" :key="index">
          <RecipesCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Layout from "../components/Layout";
import RecipesCard from "../components/recipes/RecipesCard";
import Loading from "../components/Loading";

export default {
  name: "RecipesView",
  components: {
    RecipesCard,
    Loading,
    Layout
  },
  data() {
    return {
      dataTo: 20,
      bottom: false
    };
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    handleScroll() {
      this.bottom = this.bottomVisible();
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.dataTo += 20;
        this.$store.dispatch("fetchRecipes", {
          search: this.$route.params.id,
          searchTo: this.dataTo
        });
      }
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    allRecipes() {
      return this.$store.getters.allRecipes;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestory() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.width {
  max-width: 80%;
}
.recipe-container {
  display: flex;
  flex-wrap: wrap;
}
.recipe {
  margin: 0.3em auto;
}
@media screen and (max-width: 992px) {
  .width {
    max-width: 90%;
    margin: auto;
  }
}
</style>