import axios from "axios";

const state = {
  recipes: []
};

const getters = {
  allRecipes: state => state.recipes
};

const actions = {
  async fetchRecipes({ commit }, { search, searchTo }) {
    // eslint-disable-next-line
    const response = await axios.get("/api/data", {
      params: {
        search,
        searchTo
      }
    });
    commit("setRecipes", response.data);
  }
};

const mutations = {
  setRecipes: (state, recipes) => (state.recipes = recipes)
};

export default {
  state,
  getters,
  actions,
  mutations
};

// (state.recipes = recipes)
