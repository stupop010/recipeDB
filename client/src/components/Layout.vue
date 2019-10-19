<template>
  <div class="lay-container">
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

<style scoped>
.lay-container {
  display: flex;
}
</style>