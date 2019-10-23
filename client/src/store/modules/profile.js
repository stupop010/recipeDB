import axios from "axios";
import FormData from "form-data";

const state = {
  user: [],
  loading: false
};
const getters = {
  fetchProfileUser: state => state.user
};

const actions = {
  fetchProfileUser({ commit, rootGetters }) {
    const user = rootGetters.fetchUser;
    commit("setUser", user);
  },
  async patchProfile({ commit }, data) {
    console.log(data);
    // let dt = new FormData();
    // console.log(dt);
    // dt.append("my_boolean", true);
    // dt.append("email", data.email);
    // dt.append("displayName", data.displyName);
    // dt.append("file", data.fileSeleted);
    // console.log(dt.entries());
    // for (var key of dt.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    const res = await axios.post("/api/profile", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    // console.log(res);
  }
};
const mutations = {
  setUser: (state, user) => (state.user = user)
};

export default {
  state,
  getters,
  actions,
  mutations
};
