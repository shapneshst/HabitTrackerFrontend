import axios from 'axios'

const API = axios.create({
  baseURL: 'https://habittrackerbackend.onrender.com/api', // Adjust if backend is hosted elsewhere
})

// Add a request interceptor to include token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['x-auth-token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default API
