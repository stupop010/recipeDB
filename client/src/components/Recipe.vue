<template>
  <div class="container">
    <div class="hero">
      <div class="hero-pic" :style="{ backgroundImage: `url('${this.recipe.image}')` }"></div>
      <div class="hero-holder">
        <h1>{{recipe.label}}</h1>
        <p>
          See full recipe on:
          <a :href="recipe.url">{{recipe.source}}</a>
        </p>
        <button class="recipe-btn">Save to favourites</button>
      </div>
    </div>
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
import NutritionList from "./recipe/NutritionList";
import Nutrition from "./recipe/Nutrition";
import Ingredients from "./recipe/Ingredients";
import { mapGetters, mapActions } from "vuex";
import data from "../data";

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
    Ingredients
  }
};
</script>

<style scoped>
.container {
  padding: 3em;
  width: 50em;
}
.hero {
  border: 1px solid rgba(145, 143, 143, 0.2);
  height: 100%;
  width: 100%;
  padding: 0.2em;
  display: flex;
}
.hero-pic {
  height: 16.3em;
  width: 18.7em;
  background: no-repeat;
  background-size: contain;
}
.hero-holder {
  width: 31.2em;
  color: #666;
}
.hero-holder > h1 {
  padding-top: 1em;
  font-weight: 900;
}
.hero-holder > p > a {
  text-decoration: underline;
}
.recipe-btn {
  margin: 6em;
  background: linear-gradient(
    to bottom,
    rgba(44, 243, 18, 0.8) 0%,
    rgba(13, 100, 13, 0.8) 100%
  );
  padding: 1em 0.5em;
  border-radius: 7px;
  border: 1px solid grey;
}
.recipe-btn:hover {
  cursor: pointer;
}

.recipe-info {
  display: flex;
  background: rgba(206, 201, 201, 0.2);
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
  color: black;
}
.sub-nut {
  display: none;
}
</style>

