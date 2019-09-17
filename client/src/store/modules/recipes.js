import axios from "axios";

const state = {
  recipes: [],
  recipe: null,
  loading: false
};

const getters = {
  allRecipes: state => state.recipes,
  singleRecipe: state => state.recipe,
  isLoading: state => state.loading
};

const actions = {
  async fetchRecipes({ commit }, { search, searchTo }) {
    try {
      commit("setLoading", true);
      const response = await axios.get("/api/data", {
        params: {
          search,
          searchTo
        }
      });
      commit("setRecipes", response.data);
      commit("setLoading", false);
    } catch (err) {
      commit("setLoading", false);
    }
  },
  passOnRecipeData({ commit }, data) {
    // console.log(data);
    commit("setRecipe", data);
  }
};

const mutations = {
  setRecipes: (state, recipes) => (state.recipes = recipes),
  setRecipe: (state, recipe) => (state.recipe = recipe),
  setLoading: (state, loading) => (state.loading = loading)
};

export default {
  state,
  getters,
  actions,
  mutations
};
