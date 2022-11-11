import axios from "axios";

const api = axios.create({
  baseURL: "https://api.btip.cdmd.dev"
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.log(error);
  }
});

export default api;
