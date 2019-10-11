import axios from "axios";
import { setAuthHeaders } from "../../utils/setAuthHeaders";

const state = {
  user: [],
  auth: false
};

const getters = {};

const actions = {
  async loadUser({ commit }, data) {
    if (localStorage.token) {
      setAuthHeaders(localStorage.token);
    }
    try {
      const res = await axios.get("/auth");
      console.log(res);
    } catch (err) {
      // console.error(error);
    }
  },
  async loginUser({ commit }, data) {
    console.log("loggin");
  },
  async registerUser({ commit, dispatch }, data) {
    try {
      const res = await axios.post("/api/user", data);
      commit("setToken", res.data.token);
      dispatch("loadUser");
    } catch (error) {
      console.error(error);
    }
  }
};

const mutations = {
  setToken: (state, token) => {
    localStorage.setItem("token", token);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
