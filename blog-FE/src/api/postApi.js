import axiosInstance from './axiosInstance'

export const getAllPost = async (page = 1, perPage = 5, search = '') => {
  return await axiosInstance.get(`/posts?page=${page}&search=${search}&perPage=${perPage}`)
}
