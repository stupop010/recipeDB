<template>
  <div class="fav-items">
    <!-- Add shouldFetch to tell RecipeView component to fetch data -->
    <router-link
      :to="{name: 'recipe', params:{name: favourite.label, shouldFetch: true, uri:favourite.uri}}"
    >{{favourite.label}}</router-link>
    <button class="del-btn" @click="deleteItem">
      <font-awesome-icon icon="times" size="1x" />
    </button>
  </div>
</template>

<script>
export default {
  name: "FavouritesList",
  props: ["favourite"],
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteFavourite", this.favourite.id);
    }
  }
};
</script>

<style scoped>
.fav-items {
  margin: 0.5em 0;
  font-size: 0.8em;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0.5em;
  text-align: start;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
}
.fav-items:hover {
  text-decoration: underline;
}
.fav-items a {
  padding-right: 0.5em;
}
.del-btn {
  margin-right: 0.5em;
  background: inherit;
  border: none;
  transition: transform 500ms;
}
.del-btn:hover {
  transform: rotate(180deg);
  cursor: pointer;
}
.del-btn:focus {
  outline: none;
}
</style>