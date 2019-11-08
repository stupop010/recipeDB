<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="search">
      <input type="text" v-model="search" placeholder="Search for recipe" />
      <button type="submit" class="search-btn">
        <font-awesome-icon icon="search" size="2x" />
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("fetchRecipes", {
        search: this.search,
        searchTo: 20
      });
      this.$router.push({ path: `/search/${this.search}` });
      this.clearData();
    },
    clearData() {
      this.search = "";
    }
  }
};
</script>

<style scoped>
.search {
  height: 3.5em;
  width: 30em;
  position: relative;
  display: flex;
  border: 1px solid #666;
  border-radius: 2px;
  margin: 0 auto;
}
.search > * {
  height: 100%;
}
.search input {
  border: none;
  width: 100%;
  padding: 0;
  font-size: 1.5em;
  padding-left: 0.3em;
  line-height: 35px;
  background: rgba(238, 224, 224, 0.8);
}
.search input:focus {
  outline: none;
}
.search-btn {
  border: none;
  background: rgba(238, 224, 224, 0.8);
  padding-right: 0.5em;
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
@media screen and (max-width: 400px) {
  .search {
    width: 90%;
  }
}
</style>