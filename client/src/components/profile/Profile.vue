<template>
  <div class="profile-container shadow p-3 mb-5 bg-white rounded">
    <Avatar :user="user" />
    <ProfileForm :user="user" />
  </div>
</template>

<script>
import Avatar from "./Avatar";
import ProfileForm from "./ProfileForm";

export default {
  name: "Profile",
  data() {
    return {
      img: this.user.filename
    };
  },
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
    console.log(this);
    return this.$store.dispatch("fetchUser");
  }
};
</script>

<style scoped>
.profile-container {
  border: 1px solid rgb(168, 166, 166);
  margin: 0 15em;
  min-height: 20em;
  display: flex;
}
</style>