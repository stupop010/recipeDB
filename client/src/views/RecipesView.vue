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
  width: 80%;
  margin: 0 auto;
}
.recipe-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>