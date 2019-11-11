<template>
  <div class="profile-container shadow p-3 mb-5 bg-white rounded">
    <Avatar :user="user" :img="img" />
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
    }
  },
  methods: {
    setImg() {
      console.log(this);
    }
  },
  created() {
    this.$store.dispatch("fetchProfileData");
    this.setImg();
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
</style>