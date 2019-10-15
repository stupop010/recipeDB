<template>
  <div class="container">
    <RecipeHero :recipe="recipe" />
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
    </div>
  </div>
</template>

<script>
import NutritionList from "../components/recipe/NutritionList";
import Nutrition from "../components/recipe/Nutrition";
import Ingredients from "../components/recipe/Ingredients";
import RecipeHero from "../components/recipe/RecipeHero";

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
    RecipeHero
  }
};
</script>

<style scoped>
.container {
  padding: 3em;
  width: 50em;
}

.recipe-info {
  display: flex;
  border: 1px solid rgba(145, 143, 143, 0.2);
  box-shadow: inset 0 2px rgba(194, 191, 191, 0.2);
}

.recipe-info > div {
  width: 50%;
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

