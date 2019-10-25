<template>
  <div class="card mt-1">
    <b-nav-item :to="{name: 'recipe', params: {name: recipe.label,recipe}}">
      <div class="recipe-image" :style="{ backgroundImage: `url('${recipe.image}')` }"></div>
      <p>{{recipe.label}}</p>
    </b-nav-item>
    <div class="data">
      <a>
        <span class="number">{{Math.floor(recipe.calories / recipe.yield)}}</span>
        <span class="label">calories</span>
      </a>
      <a>
        <span class="number">{{recipe.ingredientLines.length}}</span>
        <span class="label">ingredients</span>
      </a>
    </div>
    <div class="source-link">
      <a :href="recipe.url">{{recipe.source}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["recipe"]
};
</script>

<style scoped>
.card {
  width: 13.5em;
  height: 23em;
  margin: 0 0.3em;
  padding: 0.2em;
  border: 1px solid rgba(163, 161, 161, 0.9);
  border-radius: 1px;
}
.card > a > p {
  padding-top: 0.5em;
  height: 2em;
}
.card > a > p:hover {
  color: green;
}
.card > h1 {
  font-size: 0.9em;
  opacity: 1;
}
.recipe-image {
  height: 13em;
  width: 100%;
  background: no-repeat center center;
  background-size: cover;
}
.data {
  border-top: 1px solid rgba(163, 161, 161, 0.9);
  border-bottom: 1px solid rgba(163, 161, 161, 0.9);
  width: 12em;
  margin: 2em auto 0 auto;
  height: 2em;
  padding-top: 0.3em;
}
.data > a {
  margin: 0.2em;
  padding-top: 0.2em;
}
.label {
  font-size: 0.9em;
}
.number {
  color: green;
  font-size: 1em;
  margin-right: 0.2em;
}
.source-link {
  padding-top: 1.2em;
  font-size: 0.8em;
  opacity: 0.6;
}
</style>