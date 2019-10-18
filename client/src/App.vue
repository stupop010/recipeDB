<template>
  <div id="app">
    <Header />
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Favourites from "./components/favourites/Favourites";

export default {
  name: "app",
  components: {
    Header,
    Favourites
  },
  created() {
    this.$store.dispatch("loadUser");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a,
a:visited {
  text-decoration: none;
  color: black;
}

.section-title {
  padding: 0.7em 0 0.4em 0;
  color: #666;
  font-weight: 800;
  border-bottom: 1px solid black;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

main {
  padding: 2em 0.5em;
  display: flex;
}
</style>
