<template>
  <div id="app">
    <!-- <Header @inputSearch="updateSearch" />
    <Recipes :search="headerSearch" />-->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Recipes from "./components/Recipes.vue";
export default {
  name: "app",
  components: {
    Header,
    Recipes
  },
  data() {
    return {
      headerSearch: ""
    };
  },
  methods: {
    updateSearch(variable) {
      this.headerSearch = variable;
    }
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
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
li {
  list-style: none;
}
a,
a:visited {
  text-decoration: none;
  color: black;
}
</style>
