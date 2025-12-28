import axios from "axios";

export const api = axios.create({
  baseURL: "https://YOUR_RENDER_URL/api"
});

export const setToken = token => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
