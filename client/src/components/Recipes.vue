<template>
  <ul>
    <Loading v-if="isLoading" />
    <div class="recipe-container">
      <li class="recipe" v-for="recipe in allRecipes" :key="recipe.calories">
        <router-link
          v-on:click="onClick(recipe)"
          :to="{name: 'recipe', params: {name: recipe.label,recipe}}"
        >
          <div class="recipe-image" :style="{ backgroundImage: `url('${recipe.image}')` }"></div>
          <p>{{recipe.label}}</p>
        </router-link>
        <div class="data">
          <a>
            <span class="number">{{Math.floor(recipe.calories / recipe.yield)}}</span>
            <span class="label">calories</span>
          </a>
          <a>
            <span class="number">{{recipe.ingredientLines.length}}</span>
            <span class="label">ingredients</span>
          </a>
        </div>
        <div class="source-link">
          <a :href="recipe.url">{{recipe.source}}</a>
        </div>
      </li>
    </div>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "./Loading";

export default {
  name: "Recipes",
  components: {
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

<style >
.recipe-container {
  width: 1146px;
  margin: 2em auto;
  display: flex;
  flex-wrap: wrap;
}

.recipe {
  width: 13.5em;
  height: 23em;
  margin: 0.3em;
  padding: 0.2em;
  border: 1px solid rgba(163, 161, 161, 0.9);
  border-radius: 1px;
}
.recipe > a > p {
  height: 2em;
}
.recipe > a > p:hover {
  color: green;
}

.recipe-image {
  height: 13em;
  width: 100%;
  background: no-repeat center center;
  background-size: cover;
}
.recipe > h1 {
  font-size: 0.9em;
  opacity: 1;
}

.data {
  border-top: 1px solid rgba(163, 161, 161, 0.9);
  border-bottom: 1px solid rgba(163, 161, 161, 0.9);
  width: 12em;
  margin: 2em auto 0 auto;
  height: 2em;
  padding-top: 0.3em;
}
.data > a {
  margin: 0.2em;
  padding-top: 0.2em;
}
.label {
  font-size: 0.9em;
}
.number {
  color: green;
  font-size: 1em;
  margin-right: 0.2em;
}
.source-link {
  padding-top: 1.2em;
  font-size: 0.8em;
  opacity: 0.6;
}
</style>





// :to="{ name:'single-recipe', params:{ tag: recipe.label}}"