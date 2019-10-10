import axios from "axios";

const state = {
  user: [],
  auth: false
};

const getters = {};

const actions = {
  async fetchUser({ commit }, data) {
    console.log(data, "hello");
  },
  async registerUser({ commit }, data) {
    console.log(data, "regist action");
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
