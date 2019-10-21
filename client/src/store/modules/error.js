const state = {
  error: false,
  errMsg: ""
};

const getters = {
  isError: state => state.error,
  fetchErrMsg: state => state.errMsg
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
