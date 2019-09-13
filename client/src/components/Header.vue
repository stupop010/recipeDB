<template>
  <header>
    <div class="header-container" v-on:submit.prevent="onSubmit">
      <h1>Recipe DB</h1>
      <form>
        <div class="search">
          <input type="text" v-model="search" />
          <button type="button" class="clear-btn" v-on:click="clearData">clear</button>
          <button type="submit" class="search-btn">search</button>
        </div>
      </form>
      <div>menu</div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    ...mapActions(["fetchRecipes"]),
    onSubmit() {
      this.fetchRecipes(this.search);
    },
    clearData() {
      this.search = "";
    }
  }
};
</script>

<style scoped>
header {
  background: linear-gradient(to bottom, #f7f7f7 0%, #e3e3e3 100%);
}
h1 {
  margin: 0;
}
.header-container {
  display: flex;
  justify-content: space-around;
  padding: 1em 0;
  box-shadow: 0 1px rgba(107, 106, 106, 0.8);
}
form {
  height: 38px;
}
.search {
  height: 100%;
  position: relative;
  padding-left: 20px;
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
  background: white;
}
.search > * {
  height: 100%;
}
.search input {
  border: none;
  padding: 0;
  font-size: 1.5em;
  line-height: 35px;
}
.search input:focus {
  outline: none;
}
.search-btn {
  border: none;
  border-left: 1px solid black;
  border-radius: 0 30px 30px 0;
  background: linear-gradient(
    to bottom,
    rgba(44, 243, 18, 0.8) 0%,
    rgba(13, 100, 13, 0.8) 100%
  );
}
.search button:hover {
  cursor: pointer;
}
.clear-btn {
  border: none;
}
.clear-btn:active {
  background: rgba(107, 106, 106, 0.8);
  color: white;
  outline: none;
}
</style>
