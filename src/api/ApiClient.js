import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

// Request interceptor – har so‘rovga token qo‘shish
axiosClient.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("access");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// Response interceptor – token expired bo‘lsa refresh qilish
axiosClient.interceptors.response.use(
  (res) => res.data,
  async (err) => {
    const originalRequest = err.config;

    if (err.response && err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh");
      if (refreshToken) {
        try {
          const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/token/refresh/`, {
            refresh: refreshToken,
          });

          // yangi access token saqlash
          localStorage.setItem("access", response.data.access);

          // original so‘rovni takrorlash
          originalRequest.headers["Authorization"] = `Bearer ${response.data.access}`;
          return axios(originalRequest);
        } catch (refreshError) {
          // refresh token ham eskirsa logout qilish
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default axiosClient;
