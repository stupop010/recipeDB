<template>
  <div class="profile-container">
    <Avatar :user="user" />
    <ProfileForm :user="user" />
  </div>
</template>

<script>
import Avatar from "./Avatar";
import ProfileForm from "./ProfileForm";

export default {
  name: "Profile",
  components: {
    Avatar,
    ProfileForm
  },
  computed: {
    user() {
      return this.$store.getters.fetchUser;
    }
  },
  created() {
    return this.$store.dispatch("fetchUser");
  }
};
</script>

<style scoped>
.profile-container {
  border: 1px solid black;
  width: 50%;
  margin: 0 3em;
  min-height: 20em;
  display: flex;
}
</style>