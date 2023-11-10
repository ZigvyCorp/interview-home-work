import axios from 'axios'

const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export default apiAxios
