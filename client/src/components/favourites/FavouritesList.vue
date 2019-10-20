<template>
  <div class="fav-items">
    <!-- Add shouldFetch to tell RecipeView component to fetch data -->
    <router-link
      :to="{name: 'recipe', params:{name: favourite.label, shouldFetch: true, uri:favourite.uri}}"
    >{{favourite.label}}</router-link>
    <button class="del-btn" @click="deleteItem">
      <font-awesome-icon icon="times" size="2x" />
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
  line-height: 1.6em;
  font-size: 1.1em;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5em;
}
.fav-items:hover {
  text-decoration: underline;
}
.del-btn {
  margin-right: 0.5em;
  background: inherit;
  border: none;
  transition: transform 500ms;
}
.del-btn:hover {
  transform: rotate(180deg);
}
</style>