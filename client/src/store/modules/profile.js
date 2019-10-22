const state = {
  user: [],
  loading: false
};
const getters = {
  fetchProfileUser: state => state.user
};

const actions = {
  fetchProfileUser({ dispatch, commit, getters, rootGetters }) {
    const user = rootGetters.fetchUser;
    commit("setUser", user);
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
