<template>
  <section>
    <div id="slider">
      <img :src="currentImg" />
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      images: [
        "https://www.edamam.com/web-img/adf/adf0d1e50d6ab82c373984230682fb3e.jpg",
        "https://www.edamam.com/web-img/07a/07a25209e7beea252407d06fb62dc38c.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
#slider img {
  width: 30em;
  box-shadow: 2px 2px #666;
}
</style>