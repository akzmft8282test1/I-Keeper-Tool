import axios from "axios";

export const api = axios.create({
  baseURL: "https://i-keeper-tool.onrender.com/api"
});

export const setToken = token => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
