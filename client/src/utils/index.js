import axios from "axios";
import FormData from "form-data";

// Set axios headers with x-auth-token
export const setAuthHeaders = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

// Set locale Storage
export const setLocalStorage = (name, data) => {
  localStorage.setItem(name, data);
};

// Set FormData to send to server from profileForm
export const setFormData = (file, email, name, displayName) => {
  let formData = new FormData();
  const data = {
    file,
    email,
    name,
    displayName
  };
  if (data.file) formData.append("seletedFile", data.file);
  if (data.email) formData.append("email", data.email);
  if (data.name) formData.append("name", data.name);
  if (data.displayName) formData.append("displayName", data.displayName);
  return formData;
};
