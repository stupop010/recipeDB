<template>
  <div>
    <Favourites v-if="isAuth" />
    <slot></slot>
  </div>
</template>

<script>
import Favourites from "./favourites/Favourites";
export default {
  name: "Layout",
  components: {
    Favourites
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style>
</style>