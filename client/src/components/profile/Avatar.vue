<template>
  <div>
    <img v-if="img" :src="img" class="border" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["user"],
  data() {
    return {
      img: "/api/picture/" + this.user.filename
    };
  }
};
</script>

<style scoped>
div {
  width: 20em;
}
div img {
  height: 13em;
  width: 13em;
  border-radius: 50%;
  margin-top: 2em;
}
</style>