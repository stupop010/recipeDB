<template>
  <div>
    <button v-on:click="onclick">hello</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Recipe",
  methods: {
    onclick() {
      console.log(this);
    }
  },
  computed: mapGetters(["singleRecipe"])
};
</script>

<style>
</style>