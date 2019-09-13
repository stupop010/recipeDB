import axios from "axios";

const state = {
  recipes: []
};

const getters = {
  allRecipes: state => state.recipes
};

const actions = {
  async fetchRecipes({ commit }, data) {
    console.log("hello");
    // eslint-disable-next-line
    const response = await axios.get("/api/data", {
      params: {
        data: data
      }
    });
    commit("setRecipes", response.data);
    // eslint-disable-next-line
  }
};

// (state.recipes = recipes.recipes)

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
