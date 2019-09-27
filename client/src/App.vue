<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
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
</style>
