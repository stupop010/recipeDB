<template>
  <div>
    <Loading v-if="isLoading" />
    <!-- <Layout>
    <Loading v-if="isLoading" />
      <section class="container">
        <RecipeHero :recipe="recipe || favRecipe" />
        <div class="recipe-info">
          <Ingredients :recipe="recipe || favRecipe" />
          <div>
            <div>
              <Nutrition :recipe="recipe || favRecipe" />
              <div>
                  <NutritionList :item="recipe || favRecipe"/>
              </div>
            </div>
          </div>
        </div> 
      </section>
    </layout>-->
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
      recipe: this.$route.params.recipe || null
    };
  },
  components: {
    Loading,
    Recipe
  },
  methods: {
    showThis() {
      console.log(this);
    }
  },
  created() {
    const { shouldFetch, uri } = this.$route.params;
    if (shouldFetch) {
      this.$store.dispatch("fetchFavouriteRecipe", uri);
    }
  },
  computed: {
    favRecipe() {
      return this.$store.getters.fetchRecipe;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script>

<style scoped>
</style>

