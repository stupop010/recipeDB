<template>
  <div class="recipe-container">
    <div class="recipes">
      <div
        class="recipe"
        v-for="recipe in allRecipes"
        :key="recipe.calories"
        v-bind:style="{ backgroundImage: `linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.8) 5%,
              rgba(0, 0, 0, 0.4) 100%
              ),url('${
                recipe.image
              }')` }"
      >
        <h1>{{recipe.label}}</h1>
      </div>
    </div>qwedf
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Recipes",
  methods: { ...mapActions(["fetchRecipes"]) },
  computed: mapGetters(["allRecipes"])
};
</script>

<style>
.recipe-container {
  width: 60%;
  margin: auto;
}
.recipes {
  display: flex;
  flex-wrap: wrap;
  padding: 0 2em;
}
.recipe {
  width: 23%;
  background-color: rgba(255, 0, 0, 0.25);
  height: 10rem;
  margin: 0.3em;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(11, 11, 11, 0.9);
}

.recipe > h1 {
  font-size: 0.9em;
  opacity: 1;
}
</style>