import axios from "axios";
import router from "../../routes/routes";
import { setAuthHeaders } from "../../utils/setAuthHeaders";
import { setLocalStorage } from "../../utils/setLocalStorage";

const state = {
  user: [],
  isAuth: false,
  token: localStorage.getItem("token") || null
};

const getters = {
  isAuth: state => state.isAuth,
  fetchUser: state => state.user
};

const actions = {
  async loadUser({ commit }, data) {
    if (localStorage.token) {
      setAuthHeaders(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      commit("setUser", res.data);
      commit("setAuth", true);
    } catch (err) {
      console.error(err);
    }
  },
  async loginUser({ commit }, data) {
    try {
      const res = await axios.post("/api/auth", data);
      setLocalStorage("token", res.data.token);
      commit("setToken", res.data.token);
      commit("setAuth", true);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  },
  async registerUser({ commit, dispatch }, data) {
    try {
      const res = await axios.post("/api/user", data);
      setLocalStorage("token", res.data.token);
      commit("setToken", res.data.token);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  },
  logOut({ commit, getters }) {
    if (getters.isAuth) {
      try {
        localStorage.removeItem("token");
        console.log(router.history.current.path);
        if (router.history.current.path !== "/") {
          router.push("/");
        }
        commit("logOut", false);
      } catch (err) {
        console.error(err);
      }
    }
  }
};

const mutations = {
  setUser: (state, user) => (state.user = user),
  setAuth: (state, auth) => (state.isAuth = auth),
  setToken: (state, token) => (state.token = token),
  logOut: (state, auth) => {
    (state.isAuth = auth), (state.user = []), (state.token = null);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
