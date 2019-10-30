<template>
  <div>
    <img v-if="img" :src="img" />
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
  border: 1px solid black;
  width: 40%;
}
div img {
  height: 13em;
  width: 13em;
  border-radius: 50%;
  margin-top: 2em;
}
</style>