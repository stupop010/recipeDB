import axios from "axios";

const state = {
  favourites: []
};

const getters = {
  fetchFavourites: state => state.favourites
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
  }
};

const mutations = {
  setFavourites: (state, favourites) => (state.favourites = favourites),
  addFavourites: (state, favourite) => state.favourites.push(favourite)
};

export default {
  state,
  getters,
  actions,
  mutations
};
