<template>
  <div>
    <Loading v-if="isLoading" />
    <Recipe :item="recipe || favRecipe" />
  </div>
</template>

<script>
import Recipe from "../components/recipe";
import Loading from "../components/Loading";

export default {
  name: "RecipeView",
  data() {
    return {
      recipe: this.$route.params.recipe
    };
  },
  components: {
    Loading,
    Recipe
  },
  methods: {
    fetchRecipe() {
      const { shouldFetch, uri } = this.$route.params;
      if (shouldFetch) {
        this.$store.dispatch("fetchFavouriteRecipe", uri);
        this.recipe = "";
      }
    }
  },
  computed: {
    favRecipe() {
      return this.$store.getters.fetchRecipe;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  created() {
    this.fetchRecipe();
  },
  watch: {
    $route() {
      this.fetchRecipe();
    }
  }
};
</script>

<style scoped>
</style>

