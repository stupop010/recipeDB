<template>
  <div v-if="showing" class="loading-container">
    <div class="loader-wrapper">
      <div class="wrapper">
        Loading...
        <div class="spinner">
          <div class="spinner-layer">
            <div class="spin right" />
          </div>
          <div class="spinner-layer">
            <div class="spin left" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      showing: true
    };
  }
};
</script>

<style scoped>
.loading-container {
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 9999;
  top: 0;
  left: 0;
  margin: 0;
  position: fixed;
}
.loader-wrapper {
  right: 10vw;
  bottom: 10vh;
  position: fixed;
}
.wrapper {
  height: 90px;
  display: flex;
  padding: 1em;
}
.spinner {
  margin-left: 10px;
  height: 20px;
  width: 20px;
  position: relative;
}
.spinner-layer {
  position: absolute;
  top: -3px;
  right: 0;
  height: 100%;
  width: 100%;
  animation: container-rotate 1.5s linear infinite;
}
.spin {
  height: 100%;
  width: 100%;

  border-radius: 50%;
}
.right {
  border-right: 3px solid green;
}
.left {
  border-left: 3px solid lightseagreen;
}

@keyframes container-rotate {
  50% {
    transform: rotate(180deg) scale(1.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>