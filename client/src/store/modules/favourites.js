import axios from "axios";

const state = {
  favourites: []
};

const getters = {};

const actions = {
  async setFavourites({ commit }, data) {
    const res = await axios.post("/api/favourites", data);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
