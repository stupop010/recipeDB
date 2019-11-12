<template>
  <div class="profile-container shadow p-3 mb-5 bg-white rounded">
    <Avatar :user="user" :img="img" :isLoading="loading" />
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
  data() {
    return {
      img: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.fetchProfileData;
    },
    loading() {
      return this.$store.getters.AvatarPicLoading;
    }
  },
  created() {
    this.$store.dispatch("fetchProfileData");
    this.$store.watch(
      (state, getters) => getters.fetchAvatarPic,
      (newValue, oldValue) => {
        this.img = newValue;
      }
    );
  }
};
</script>

<style scoped>
.profile-container {
  border: 1px solid rgb(168, 166, 166);
  margin: 0 5em;
  min-height: 20em;
  display: flex;
}

@media screen and (max-width: 800px) {
  .profile-container {
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin: auto;
  }
}
</style>