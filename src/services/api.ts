import axios from 'axios'

export const API = axios.create({
  baseURL: String(process.env.API_URL)
})
