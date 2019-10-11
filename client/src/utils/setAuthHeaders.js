import axios from "axios";

export const setAuthHeaders = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  }
};
