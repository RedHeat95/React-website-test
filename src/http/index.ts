import axios from "axios";

export const API_URL = `http://localhost:8000/auth`;

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
