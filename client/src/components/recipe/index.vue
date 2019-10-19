<template>
  <Layout>
    <section class="container">
      <RecipeHero :recipe="item" />
      <div class="recipe-info">
        <Ingredients :recipe="item" />
        <div>
          <div>
            <Nutrition :recipe="item" />
            <div>
              <NutritionList :item="item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import NutritionList from "./NutritionList";
import Nutrition from "./Nutrition";
import Ingredients from "./Ingredients";
import RecipeHero from "./RecipeHero";
import Layout from "../Layout";
export default {
  name: "Recipe",
  components: {
    NutritionList,
    Nutrition,
    Ingredients,
    RecipeHero,
    Layout
  },
  props: ["item"]
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
</style>