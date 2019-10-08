<template>
  <div>
    <Loading v-if="isLoading" />
    <div class="recipe-container">
      <div class="recipe" v-for="(recipe, index) in allRecipes" :key="index">
        <RecipesCard :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RecipesCard from "../components/recipes/RecipesCard";
import Loading from "../components/Loading";

export default {
  name: "RecipesView",
  components: {
    RecipesCard,
    Loading
  },
  data() {
    return {
      dataTo: 20
    };
  },
  methods: {
    ...mapActions(["fetchRecipes"]),
    handleScroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.dataTo += 20;
          const data = {
            search: this.$route.params.id,
            searchTo: this.dataTo
          };
          this.fetchRecipes(data);
        }
      };
    }
  },
  computed: mapGetters(["allRecipes", "isLoading"]),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.recipe-container {
  width: 1146px;
  margin: 2em auto;
  display: flex;
  flex-wrap: wrap;
}
</style>