import axios from "axios"
import router from "../router/router.js" // import router để điều hướng khi cần

const api = axios.create({
  baseURL: "http://localhost:3000",
})

// Interceptor để kiểm tra token trước khi gửi yêu cầu
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers["Authorization"] = token // Thêm từ khóa "Bearer" để định dạng chuẩn
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor để xử lý phản hồi từ server
api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem("refreshToken")

      if (!refreshToken) {
        router.push("/login")
        return Promise.reject(error)
      }

      try {
        const response = await api.post("auth/refresh", { token: refreshToken })
        const { accessToken, refreshToken: newRefreshToken } = response.data
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", newRefreshToken)
        api.defaults.headers.common["Authorization"] = accessToken
        originalRequest.headers["Authorization"] = accessToken
        return api(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        router.push("/login")
        return Promise.reject(refreshError)
      }
    }

    if (error.response.status === 403) {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      router.push("/login")
    }

    return Promise.reject(error)
  }
)

export default api
