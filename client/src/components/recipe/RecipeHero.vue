<template>
  <div class="hero">
    <div class="hero-pic" :style="{ backgroundImage: `url('${recipe.image}')` }"></div>
    <div class="hero-holder">
      <h1>{{recipe.label}}</h1>
      <p>
        See full recipe on:
        <a :href="recipe.url">{{recipe.source}}</a>
      </p>
      <button class="recipe-btn" @click="setFavourites">Save to favourites</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeHero",
  props: ["recipe"],
  methods: {
    setFavourites() {
      console.log(this);
      this.$store.dispatch("setFavourites", {
        ...this.recipe
      });
    }
  }
};
</script>

<style scoped>
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
</style>