<template>
  <div class="fav-container">
    <h3>Favourites</h3>
    <ul>
      <li v-for="(favourite, index) in favourites" :key="index">
        <FavouritesList :favourite="favourite" />
      </li>
    </ul>
  </div>
</template>

<script>
import FavouritesList from "./FavouritesList";
export default {
  name: "Favourites",
  components: {
    FavouritesList
  },
  computed: {
    favourites() {
      return this.$store.getters.fetchFavourites;
    }
  },
  created() {
    this.$store.dispatch("fetchFavourites");
  }
};
</script>

<style scoped>
.fav-container {
  max-width: 20%;
  height: 30em;
}
.fav-container > h3 {
  color: rgba(7, 7, 7, 0.8);
  font-size: 1.6em;
  font-weight: 900;
  text-decoration: underline;
}
@media screen and (max-width: 992px) {
  .fav-container {
    display: none;
  }
}
</style>