<template>
  <div class="ingredients">
    <h2 class="section-title">{{recipe.ingredientLines.length}} Ingredients</h2>
    <ul>
      <li v-for="(ingredient, index) in recipe.ingredientLines" :key="index">{{ingredient}}</li>
    </ul>
    <div>
      <h2 class="section-title">Preparation</h2>
      <p class="prep-source">
        <span class="btn">Instruction</span> on
        <a :href="recipe.url">{{recipe.source}}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ingredients",
  props: ["recipe"]
};
</script>

<style scoped>
.ingredients {
  width: 50%;
  padding: 0 2em;
}
.ingredients > ul {
  margin-left: 1.5em;
  text-align: start;
  color: #666;
}
.ingredients > ul > li {
  margin: 1.5em 0;
  color: black;
}
.prep-source {
  margin: 1.7em 0;
}
.prep-source > a {
  text-decoration: underline;
  font-weight: 600;
}
.btn {
  padding: 0.4em 0.7em;
  background: rgba(114, 111, 111, 0.2);
  border: 1px solid rgba(95, 93, 93, 0.2);
}
</style>