import axios from "axios";

const state = {
  recipes: [],
  loading: false
};

const getters = {
  allRecipes: state => state.recipes,
  isLoading: state => state.loading
};

const actions = {
  async fetchRecipes({ commit }, { search, searchTo }) {
    try {
      commit("setLoading", true);
      const res = await axios.get("/api/data", {
        params: {
          search,
          searchTo
        }
      });
      commit("setRecipes", res.data);
      commit("setLoading", false);
    } catch (err) {
      commit("setLoading", false);
    }
  }
};

const mutations = {
  setRecipes: (state, recipes) => (state.recipes = recipes),
  setLoading: (state, loading) => (state.loading = loading)
};

export default {
  state,
  getters,
  actions,
  mutations
};
