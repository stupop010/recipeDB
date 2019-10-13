<template>
  <div>ergfhfndewssdf</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HomeView",
  methods: {
    loadUser() {
      this.$store.dispatch("loadUser");
    }
  },
  created() {
    this.loadUser();
  }
};
</script>

<style>
</style>