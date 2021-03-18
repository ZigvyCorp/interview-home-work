import axios from 'axios'
export const APICaller = axios.create({
  baseURL: 'https://zigvy-blogs.herokuapp.com/api'
})
