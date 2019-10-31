import axios from "axios";

const state = {
  favourites: [],
  recipe: [],
  loading: false
};

const getters = {
  fetchFavourites: state => state.favourites,
  fetchRecipe: state => state.recipe,
  favouriteLoading: state => state.loading
};

const actions = {
  async setFavourites({ commit }, data) {
    try {
      const res = await axios.post("/api/favourites", data);
      commit("addFavourites", res.data);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchFavourites({ commit }) {
    try {
      const res = await axios.get("/api/favourites");
      commit("setFavourites", res.data);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchFavouriteRecipe({ commit }, data) {
    try {
      commit("setLoading", true);
      const res = await axios.get("/api/data/favourite", {
        params: { data }
      });
      console.log(res.data);
      commit("setRecipe", res.data);
      commit("setLoading", false);
    } catch (err) {
      console.error(err);
    }
  },
  async deleteFavourite({ commit }, id) {
    try {
      const res = await axios.delete("/api/favourites", { data: { id } });
      commit("deleteFavourite", res.data);
    } catch (err) {
      console.error(err);
    }
  }
};

const mutations = {
  setFavourites: (state, favourites) => (state.favourites = favourites),
  addFavourites: (state, favourite) => state.favourites.push(favourite),
  setRecipe: (state, recipe) => (state.recipe = recipe),
  setLoading: (state, loading) => (state.loading = loading),
  deleteFavourite: (state, id) =>
    (state.favourites = state.favourites.filter(fav => fav.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
