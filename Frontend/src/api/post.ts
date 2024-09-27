import type { IPostSlice } from '../redux/home/slice';
import axiosInstance from './config';

export const getAllPost = async (
  page: number,
  take: number,
  search: string,
): Promise<IPostSlice[]> => {
  const response = await axiosInstance.get(
    `posts?page=${page}&take=${take}${search !== '' ? `&search=${search}` : ''}`,
  );
  return response.data;
};

export const getPostById = async (id: string): Promise<IPostSlice> => {
  const response = await axiosInstance.get(`posts/${id}`);
  return response.data;
};
