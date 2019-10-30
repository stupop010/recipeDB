<template>
  <Layout>
    <Profile :user="user" />
  </Layout>
</template>

<script>
import Profile from "../components/profile/Profile";
import Layout from "../components/Layout";

export default {
  name: "ProfileView",
  components: {
    Profile,
    Layout
  },
  computed: {
    user() {
      return this.$store.getters.fetchUser;
    }
  }
};
</script>

<style>
</style>