<template>
  <div>
    <div v-if="isLoading" class="ava-loading">Loading...</div>
    <img v-else :src="picture" class="border" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["user", "img", "isLoading"],
  computed: {
    picture() {
      const filePath = "/api/picture/";
      return this.img ? filePath + this.img : filePath + this.user.filename;
    }
  }
};
</script>

<style scoped>
div {
  width: 20em;
  position: relative;
}
div img {
  height: 13em;
  width: 13em;
  border-radius: 50%;
  margin-top: 2em;
}
.ava-loading {
  position: absolute;
  top: 15%;
  left: -10%;
  font-size: 1.2em;
  font-weight: 900;
}
</style>