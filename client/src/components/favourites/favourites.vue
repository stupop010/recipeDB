<template>
  <div>
    sss
    <div v-for="(favourite, index) in favourites" :key="index">{{favourite.label}}</div>
  </div>
</template>

<script>
export default {
  name: "Favourites",
  created() {
    this.$store.dispatch("fetchFavourites");
    console.log(this);
  },
  computed: {
    favourites() {
      return this.$store.getters.fetchFavourites;
    },
    fav() {
      console.log(this);
    }
  }
};
</script>

<style>
</style>