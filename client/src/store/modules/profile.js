import axios from "axios";
import router from "../../routes/routes";
import { setAuthHeaders } from "../../utils";

const state = {
  profileData: [],
  avatarPic: ""
};

const getters = {
  fetchProfileData: state => state.profileData,
  fetchAvatarPic: state => state.avatarPic
};

const actions = {
  async patchProfile({ commit }, data) {
    try {
      const res = await axios.patch("/api/user", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      commit("setUser", res.data);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  },
  async showAvatarPic({ commit }, data) {
    try {
      const res = await axios.post("/api/picture", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(res.data.filename);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchProfileData({ getters, commit }) {
    if (localStorage.token) {
      setAuthHeaders(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      commit("setProfileData", res.data);
    } catch (err) {
      console.error(err);
    }
  }
};

const mutations = {
  setProfileData: (state, data) => (state.profileData = data),
  setAvatarPic: (state, picture) => (state.avatarPic = picture)
};

export default {
  state,
  getters,
  actions,
  mutations
};
