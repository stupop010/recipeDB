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
import NutritionList from "./NutritionList";
import Nutrition from "./Nutrition";
import Ingredients from "./Ingredients";
import RecipeHero from "./RecipeHero";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Recipe",
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

.btn {
  padding: 0.4em 0.7em;
  background: rgba(114, 111, 111, 0.2);
  border: 1px solid rgba(95, 93, 93, 0.2);
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

