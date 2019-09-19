<template>
  <div>
    <button v-on:click="onclick">hello</button>
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

<style>
</style>