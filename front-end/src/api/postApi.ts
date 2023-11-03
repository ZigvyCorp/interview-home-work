import { ListResponse, ListParams } from '../types/common';
import { Post } from '../types/models/post';
import axiosClient from './axiosClient';
import { API_URL } from './constants';

const URL = `${API_URL}/posts`;

const postAPI = {
  getAll(params: ListParams): Promise<ListResponse<Post>> {
    return axiosClient.get(URL, { params });
  },
  getById(id: string): Promise<Post> {
    const url = `${URL}/${id}`;
    return axiosClient.get(url);
  },
};

export default postAPI;
