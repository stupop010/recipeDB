<template>
  <section class="container">
    <!-- <RecipeHero :recipe="recipe" />
    <div class="recipe-info">
      <Ingredients :recipe="recipe" />
      <div>
        <div>
          <Nutrition :recipe="recipe" />
          <div>
            <ul class="nutrition">
              <li v-for="(nutrition, index) in recipe.digest" :key="index">
                <NutritionList :item="nutrition" :recipeYield="recipe.yield" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>-->
  </section>
</template>

<script>
import NutritionList from "../components/recipe/NutritionList";
import Nutrition from "../components/recipe/Nutrition";
import Ingredients from "../components/recipe/Ingredients";
import RecipeHero from "../components/recipe/RecipeHero";
import Favourites from "../components/favourites/Favourites";

export default {
  name: "RecipeView",
  data() {
    return {
      recipe: this.$route.params.recipe
    };
  },
  components: {
    NutritionList,
    Nutrition,
    Ingredients,
    RecipeHero,
    Favourites
  },
  created() {
    if (this.$route.params.shouldFetch) {
      console.log(this.$route);
      this.$store.dispatch("fetchFavouriteRecipe", this.$route.params.uri);
    }
  }
};
</script>

<style scoped>
.container {
  margin-left: 2em;
}
.recipe-info {
  display: flex;
  border: 1px solid rgba(145, 143, 143, 0.2);
  box-shadow: inset 0 2px rgba(194, 191, 191, 0.2);
}

.recipe-info > div {
  padding: 0 2em;
}

.nutrition {
  text-align: start;
}
.nutrition > li {
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
}

.nutrition > li:nth-child(1) {
  color: red;
}
.nutrition > li:nth-child(2) {
  color: orange;
}
.nutrition > li:nth-child(3) {
  color: green;
}
.sub-nut {
  display: none;
}
</style>

