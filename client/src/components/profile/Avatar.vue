<template>
  <div>
    <img v-if="picture" :src="picture" class="border" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["user", "img"],
  // data() {
  //   return {
  //     img: "/api/picture/" + this.user.filename
  //   };
  // },
  computed: {
    picture() {
      const filePath = "/api/picture/";
      return this.img ? filePath + this.img : filePath + this.user.filename;
    }
  },
  created() {
    console.log(this);
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