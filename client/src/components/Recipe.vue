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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Recipe",
  data() {
    return {
      recipe: this.$route.params.recipe
    };
  },
  methods: {
    onclick() {
      console.log(this);
      console.log(this.$route);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 3em;
}
.hero {
  border: 1px solid black;
  height: 100%;
  width: 50em;
  padding: 0.2em;
  display: flex;
}
.hero-pic {
  height: 18.7em;
  width: 18.7em;
  background: no-repeat;
  background-size: contain;
}
.hero-holder {
  width: 31.2em;
  color: #666;
}
.hero-holder > h1 {
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