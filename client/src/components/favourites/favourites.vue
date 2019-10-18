<template>
  <div class="fav-container">
    <h3>Favourites</h3>
    <ul>
      <li class="fav-items" v-for="(favourite, index) in favourites" :key="index">
        <!-- Add shouldFetch to tell RecipeView component to fetch data -->
        <router-link
          :to="{name: 'recipe', params:{name: favourite.label, shouldFetch: true, uri:favourite.uri}}"
        >{{favourite.label}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Favourites",
  created() {
    if (!this.$store.getters.fetchFavourites.length > 0) {
      this.$store.dispatch("fetchFavourites");
    }
  },
  computed: {
    favourites() {
      return this.$store.getters.fetchFavourites;
    }
  }
};
</script>

<style scoped>
.fav-container {
  width: 15em;
  border: 1px solid black;
  background: lightblue;
  height: 30em;
}
.fav-container > h3 {
  font-size: 1.6em;
  font-weight: 900;
  text-decoration: underline;
}
.fav-items {
  line-height: 1.6em;
  font-size: 1.1em;
  font-weight: 500;
}
</style>